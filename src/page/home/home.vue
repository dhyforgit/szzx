<template>
    <div>
        <header :class="{collapsed:scrollHidden}">
            <div :class="[searchBox,{hidden:scrollHidden>120}]">
                <span class="searchBtn" @click="search">{{searchBtn}}</span>
            </div>
            <div v-if="eventBanner != ''" class="eventBanner"><img :src="eventBanner" alt=""></div>
            <nav>
                <ul class="n_scrolling">
                    <li v-for="(item, index) in courseTypes" :class="{navActive:navActived == index}" @click="navToggle(index,item.id)" :key="index">{{item.name}}</li>
                </ul>
            </nav>
        </header>
        <div class="live_list" id="live_list">
            <h-list ref="hList" :live-list="liveList"></h-list>
        </div>
        <footers ref="Footers" :scroll-hidden="scrollHidden" :footer-actived="footerActived"></footers>
    </div>
</template>
<script>
import hList from './hList'
import Footers from '../footer/footer'
export default{
    name: 'Home',
    components: {
      hList: hList,
      Footers:Footers
    },
    data(){
        return {
            msg : 'this is a component a',
            searchBtn : '搜索单节课/系列课/直播间',
            courseTypes: {},
            liveList: {},
            navActived:0,
            footerActived:0,
            searchBox:'searchBox',
            hidden:false,
            eventBanner:'http://vr0.6rooms.com/v/s7/a72790bdc303e9a052e8658f6d613315.png',
            scroll:0,
            scrollHidden:false
        }
    },
    computed:{
        
    },
    mounted () {
        this.$nextTick(function () {
            this.getNav()
            this.getHome(1010);
            window.addEventListener('scroll', this.handleScroll, true)
        })
    },
    methods: {
        //点击跳转搜索
        search(){
            this.$router.push({
                path: '../search'
            })
        },
        //加载json
        getNav(){
            this.$http.get('static/json.json').then( data => {
                this.courseTypes = data.body.index.data.courseTypes;
            })
        },
        //加载首页列表
        getHome(id){
            this.$http.get('static/list'+id+'.json?id='+id).then( data => {
                this.liveList = data.body.data
            })
        },
        //切换导航
        navToggle(index,id){
            this.navActived = index;  
            this.getHome(id)                      
        },
        //监听滚动条
        handleScroll() {
            var scroll = document.documentElement.scrollTop || document.body.scrollTop;
            let that = this;
            if(scroll <= 10){
                return;
            }
            if(that.scroll <= scroll){
                that.scrollHidden = true
            }else{
                that.scrollHidden = false
            }
            setTimeout(function(){that.scroll = scroll;},0);  
        }
    },
    destroyed () {//离开该页面需要移除这个监听的事件
        window.removeEventListener('scroll', this.handleScroll)
    }
}
</script>
<style lang='scss'>
    @import '../../style/mixin.scss';
    header{
        position: fixed;
        top: 0;
        left: 0;
        background: #343031;
        z-index: 1;
        -webkit-transition-duration: .2s;
        transition-duration: .2s;
        -webkit-transition-property: transform;
        transition-property: transform;
        -webkit-transform: translateY(0);
        transform: translateY(0);
        @include wh(100%, auto)
    }
    .collapsed{
        -webkit-transform: translateY(-2.2rem);
        transform: translateY(-2.2rem);
    }
    .collapsedBom{
        -webkit-transform: translateY(2.2rem);
        transform: translateY(2.2rem);
    }
    .hidden{
        pointer-events: none;
    }
    .searchBox{
        margin: 0 auto;
        @include pad(.2rem, .26rem, .2rem, .26rem); 
        @include maxw()
    }
    .searchBtn{
        display: block;
        border: 1px #413d3e solid;
        border-radius: 32px;
        background:#343031 url('../../images/btn.png') no-repeat;
        background-position: 16px 50%;
        background-size: 18px 18px;
        text-align: left;
        -webkit-box-sizing: border-box;
        box-sizing: border-box;
        @include wh(100%, auto);
        @include pad(.2rem, 0, .2rem, .88rem);
        @include sch(.28rem, #928e8f, .28rem);
        @include maxw()
    }
    .eventBanner{
        display: block;
        position: fixed;
        top: 0;
        right: 0;
        left: 0;
        background-size: cover;
        background-repeat: no-repeat;
        background-position: 50%;
        z-index: 1;
        -webkit-transition-duration: .2s;
        transition-duration: .2s;
        -webkit-transition-property: transform;
        transition-property: transform;
        -webkit-transform: translateY(1.08rem);
        transform: translateY(1.08rem);
        @include wh(100%, 1.1rem)
    }
    .eventBanner img{
        @include wh(100%, 1.1rem);
    }
    nav{
        @include wh(100%, .92rem)
    }
    nav .n_scrolling{
        overflow-x: auto;
        overflow-y: hidden;
        padding: 0;
        margin: 0;
        list-style: none;
        will-change: transform;
        display: -webkit-box;
        display: -webkit-flex;
        display: flex;
        -webkit-transition-duration: .2s;
        transition-duration: .2s;
        -webkit-transition-property: transform;
        transition-property: transform;
        -webkit-transform: translateY(1.06rem);
        transform: translateY(1.06rem);
        background: #343031;
        height: .92rem;
    }
    nav .n_scrolling li{
        height: 100%;
        -webkit-box-flex: 1;
        -webkit-flex: 1;
        flex: 1;
        min-width: 1.1rem;
        text-align: center;
        position: relative;
        font-weight: 300;
        @include sch(.28rem, #928e8f, .92rem);
    }
    nav .n_scrolling li.navActive{
        color: #e9e7ea;
    }
    nav .n_scrolling li.navActive::after{
        content: '';
        display: block;
        border-radius: .08;
        background: #e9e7ea;
        font-size: 0;
        line-height: 0;
        position: absolute;
        left: 50%;
        margin-left: -.18rem;
        bottom: .18rem;
        @include wh(.36rem, .06rem)
    }
    .live_list{
        padding-top: 3.1rem;
        @include wh(100%, auto);
    }
    
</style>