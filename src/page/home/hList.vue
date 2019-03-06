<template>
    <div>
        <div class="liveList" >
            <div class="live-row" v-for="(item, index) in liveList" :key="index" >
                <section @click="getInfo(item.id,item.userName,item.topic)">
                    <div class="pic" :style="{backgroundImage: 'url(' + item.coverssAddress + ')'}">
                        <span class="icon-live"></span>
                    </div>
                    <div class="text">
                        <p class="alias">{{item.topic}}</p>
                        <p class="viewer">{{item.joinCount}}人</p>
                    </div>
                </section>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    name: "hList",
    props: ['liveList'],
    mounted () {
        console.log(this.liveList)
    },
    methods: {
        getInfo(id,userName,topic){
            console.log(id,userName,topic)
            this.$router.push({
                path: '../live/',
                query: {
                    id:id,
                    userName:userName,
                    topic:topic
                }
            })
        }
    }
}
</script>
<style lang="scss">
    @import '../../style/mixin.scss';
    .liveList{
        background: #343031;
    }
    .liveList .live-row{
        display: inline-block;
        width: 50%;
    }
    .liveList .live-row section{
        width: 100%; 
        height: 4.86rem;
        padding: .12rem .06rem 0;
        text-align: left;
        display: -webkit-box;
        display: -webkit-flex;
        display: flex;
        @include flx();
        -webkit-flex-direction: column;
        flex-direction: column;
        justify-content: flex-start;
    }
    .liveList .live-row section .pic{
        width: 100%;
        @include flx();
        position: relative;
        background-repeat: no-repeat;
        background-size: cover;
        background-position: 50%;
        border-radius: .12rem .12rem 0 0;
        
    }
    .liveList .live-row section .text{
        display: -webkit-box;
        display: -webkit-flex;
        display: flex;
        @include wh(100%, .72rem);
        margin: 0;
        padding: 0;
        border-radius: 0 0 .12rem .12rem;
        background: #413d3e;
        box-sizing: border-box;
        line-height: .72rem;
    }
    .liveList .live-row section .text p{
        margin: 0;
        @include pad(0, .1rem, 0, .1rem);
    }
    .liveList .live-row section .text .alias{
        @include flx();
        overflow: hidden;
        white-space: nowrap;
        text-overflow: ellipsis;
        text-align: left;
        color: #ffffff;
        font-size: .28rem;
    }
    .liveList .live-row section .text .viewer {
        font-size: .24rem;
        text-align: right;
        color: #928e8f;
        padding-left: .3rem;
        background-image: url('../../images/user.png');
        background-repeat: no-repeat;
        background-size: auto 45%;
        background-position: 2%;
    }
    .icon-live{
        box-sizing: border-box;
        width: .38rem;
        height: .38rem;
        line-height: .38rem;
        position: absolute;
        top: .12rem;
        right: .12rem;
        background-color: #000000;
        background-image: url('../../images/liveing.gif');
        background-repeat: no-repeat;
        background-size: 60% 50%;
        background-position: 50%;
        font-size: 11px;
        opacity: .4;
        border-radius: 2px;
        @include wh(.38rem, .38rem);
        @include pad(0, 0, 0, .24rem);
    }
</style>