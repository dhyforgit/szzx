<template>
    <div id="J_prismPlayer">
        <video id="video1" src="https://s3.bytecdn.cn/aweme/resource/web/static/image/index/tvc-v2_30097df.mp4" preload="auto" muted="" autoplay="" playsinline="" loop="" width="100%" height="100%" style="object-fit: cover;"></video>
        <div class="control" @dblclick="doubleClick()">
            <span v-show="playBtn" id="bofang" ></span>
            <progress :value="this.pgCurtime" :max="this.pgTotalTime"></progress>
        </div>
        <div class="user_info">
            <span>@{{userName}}</span>
            <span>{{topic}}</span>
        </div>
        <div class="domain">
            <span></span>
            <span :class="{'on':loveBtn}" @click="loveBtn = !loveBtn"><i>{{loveNum}}</i></span>
            <span><i>{{comment}}</i></span>
        </div>
    </div>
</template>
<script>
export default {
    name:'live',
    data(){
        return {
            id:0,
            pgCurtime:0, //未格式化的当前播放时间
            pgTotalTime:0, //未格式化的总时间
            CurtimeText:'00:00', //格式化的当前播放时间
            TotalTimeText:'00:00',//未格式化的总时间
            playBtn:false,
            userName:'',
            topic:'',
            loveBtn:false,
            loveNum:'92.32w',
            comment:'1.2w'

        }
    },
    methods: {
        getParams(){
            let id = this.$route.query.id
            let userName = this.$route.query.userName
            let topic = this.$route.query.topic
            // 将数据放在当前组件的数据内
            this.id = id
            this.userName = userName
            this.topic = topic

        },
        bofang(){
            var video=document.getElementById("video1");
            var bofang=document.getElementById("bofang");
            if(video.paused){
                video.play();
                this.playBtn = false;
            }else{
                video.pause();
                this.playBtn = true;
            }
            if(video.duration==video.currentTime){
            }
        },
        doubleClick(){
            alert(11)
            this.loveBtn = !this.loveBtn;
        },
    //     videoTime(){
    //         let data = {
    //           watch_length:this.pgCurtime,
    //           total_time: this.pgTotalTime,   
    //         }
    //         let parame1 = qs.stringify(data);
    //         videoCount(parame1).then((res) => {
    //           if (res.code == 0) {
    //             console.log("提交成功")
    //           }
    //         }).catch((err) => {
    //           console.log(err)
    //         })
    //     },


        timeupdate(){
            var video1=document.getElementById("video1");
            this.pgCurtime = video1.currentTime;
            this.pgTotalTime = video1.duration;
            
        }
        // <!-- 格式化时间为00:00:00这种形式 -->
    //     getFormatTime(time) {
    //         var time = time;
    //         var h = parseInt(time/3600),
    //             m = parseInt(time%3600/60),
    //             s = parseInt(time%60);
    //         h = h < 10 ? "0"+h : h;
    //         m = m < 10 ? "0"+m : m;
    //         s = s < 10 ? "0"+s : s;
    //         console.log(h+":"+m+":"+s)
    //         if(h=='00'){
    //           return m+":"+s;
    //         }else{
    //           return h+":"+m+":"+s;
    //         } 
    //     },
  },
// 事实上有非常简单的方式，就是在created里增加监控时间
  created() { 
     this.videoSrc = document.getElementById("video1");
     var this1 =this

      this1.getParams();

     if(this.videoSrc==null){
      setTimeout(function(){
        var video =document.getElementById('video1');
        video.addEventListener("timeupdate",this1.timeupdate)  //iphone的时间进度条
        video.addEventListener('play',function(){  
            console.log("播放监控")   
        });
        video.addEventListener('pause',function(){  
            // this1.videoTime()  //当用户暂停时，调用方法将数据传给接口
        }); 
      
      },500);
     }
    }
}
</script>
<style lang='scss'>
    @import '../../style/mixin.scss';
    #J_prismPlayer{
        position: fixed;
        top:0;
        left: 0;
        z-index: 1;
        background: #000;
        overflow: hidden;
        @include wh(100%, 100%)
    }
    .control {
        position: absolute;
        top:0;
        bottom: 0;
        left: 0;
        right: 0;
    } 
     #bofang{
        position: absolute;
        top:0;
        bottom: 0;
        left: 0;
        right: 0;
        margin: 0 auto;
        // background-color:rgba(0, 0, 0, 0.42);
        background-image: url('../../images/live_play.svg');
        background-repeat: no-repeat;
        background-position: center;
    }
    progress { 
        -webkit-appearance: none;
        width: 100%;
        position: absolute;
        left: 0;
        height: .1rem;
    }
    .user_info{
        position: absolute;
        bottom: 0;
    }
    .user_info span{
        display: block;
        @include sch(.3rem, #ffffff, .3rem);
        padding-bottom: .3rem;
        padding-left: .3rem;
    }
    .domain{
        position:absolute;
        right:.4rem;
        bottom: 1rem;
    }
    .domain span{
        display: block;
        @include wh(.8rem,.8rem);
        margin-bottom: .6rem;
        position: relative;
    }
    .domain span i{
        display: block;
        @include sch(.2em, #ffffff, .2rem);
        text-align: center;
        position:absolute;
        bottom: -.15rem;
        width: 100%;
        box-shadow:0 0 1px #000 inset;
    }
    .domain span:nth-child(1){
        background-image: url(https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1551889230841&di=3f622e10beef6a427c88008931247e18&imgtype=0&src=http%3A%2F%2Fimg000.hc360.cn%2Fhb%2FMTQ2MjQzNzI3Mjc1OS0xNTUxNDQzMTI4.jpg);
        background-repeat: no-repeat;
        background-size:cover;
        border-radius:50%;
    }
    .domain span:nth-child(2){
        background-image: url('../../images/live_love.svg');
        background-repeat: no-repeat;
        background-size:80%;
        background-position: top;
    }
    .domain span:nth-child(2).on{
        background-image: url('../../images/live_love_on.svg');
        background-repeat: no-repeat;
        background-size:80%;
        background-position: top;
    }
    .domain span:nth-child(3){
        background-image: url('../../images/live_comment.svg');
        background-repeat: no-repeat;
        background-size:80%;
        background-position: top;
    }
    /*FireFox浏览器已经完成的进度条，使用progress::-moz-progress-bar { }*/
    /*谷歌浏览器-webkit-progress-bar指全部的进度条progress-value指已经完成的进度*/
    ::-webkit-progress-inner-element {height: 4px;border-radius: 5px;}
    ::-webkit-progress-bar {background: #6e747a;border-radius: 5px;}
    ::-webkit-progress-value { background: #00ba6b;border-radius: 5px}
    ::-moz-progress-bar { background: #00ba6b;border-radius: 5px; }
    ::-ms-fill { background: #06bd71; }
</style>
