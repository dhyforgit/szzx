<template>
    <div>
        <img :src="bgImg" alt="" class="bgImg">
        <div class="meBody">
            <div class="meInfo">
                <div class="meImg" :style="{backgroundImage: 'url(' + bgImg + ')'}"></div>
                <div class="collection">收藏</div>
                <div class="more"></div>
                <div class="meName">
                    <h2>{{meName.name}}</h2>
                    <p>抖音号：{{meName.num}}</p>
                </div>
                <div class="introduce">
                    <p>{{introduce.info}}</p>
                    <ul>
                        <li>{{introduce.age}}</li>
                        <li>{{introduce.city}}</li>
                        <li>{{introduce.add}}</li>
                    </ul>
                    <div class="fans">
                        <span>{{introduce.laud}}获赞</span>
                        <span>{{introduce.follow}}关注</span>
                        <span>{{introduce.fans}}粉丝</span>
                    </div>
                </div>
            </div>
            <div class="meList">
                <me-list ref='meList' ></me-list>
            </div>
        </div>
        <footers ref="Footers" :scroll-hidden="scrollHidden" :footer-actived="footerActived"></footers>
    </div>
</template>
<script>
import Footers from '../footer/footer'
import meList from '../me/meList'
export default {
    name: 'Me',
    components: {
        Footers:Footers,
        meList:meList
    },
    data (){
        return {
            scrollHidden:false,
            footerActived:1,
            bgImg:'https://vi2.6rooms.com/live/2019/01/03/14/1010v1546495223047961941_b.jpg',
            meName:{name:'小叮当，芭比',num:2223234232},
            introduce:{info:'填写个性签名更容易获得别人的关注哦',age:'27',city:'北京',add:'添加学校等标签',laud:'2932',follow:'122W',fans:'23'},
            
        }
    },
    methods:{

    }
}
</script>
<style lang="scss">
    @import '../../style/mixin';
    .bgImg{
        position: fixed;
        top: 0;
        left: 0;
        @include wh(100%, auto)
    }
    .meBody{
        position: absolute;
        top: 3rem;
        left: 0;
        background: #343031;
        @include wh(100%, auto);
        margin-bottom:1rem;
    }
    .meBody .meInfo{
        @include wh(100%, 4.5rem)
    }
    .meBody .meInfo .meImg{
        position: absolute;
        top: -.4rem;
        left: .3rem;
        border-radius: 50%;
        border:.08rem solid #343031;
        background-repeat: no-repeat;
        background-size: auto 104%;
        background-position: 50%;
        @include wh(1.4rem, 1.4rem)
    }
    .meBody .meInfo .collection{
        position: absolute;
        right: 1.2rem;
        top: .2rem;
        background: #413d3e;
        border-radius: 2px;
        @include pad(.15rem, .2rem, .15rem, .6rem);
        @include sch(.28rem, #ffffff, .28rem);
    }
    .meBody .meInfo .collection::before{
        content: '';
        background:url('../../images/me_collection.svg') no-repeat;
        background-size:cover;
        position:absolute;
        width: .28rem;
        height: .28rem;
        left: .2rem;
    }
    .meBody .meInfo .more{
        position: absolute;
        right: .3rem;
        top: .2rem;
        background: #413d3e;
        border-radius: 2px;
        @include wh(.28rem, .28rem);
        @include pad(.15rem, .2rem, .15rem, .2rem);
    }
    .meBody .meInfo .more::before{
        content:'';
        background:url('../../images/me_more.svg') no-repeat;
        background-size:cover;
        position:absolute;
        width: .28rem;
        height: .28rem;
    }
    .meBody .meInfo .meName{
        position: absolute;
        top: 1.3rem;
        @include wh(100%, auto)
    }
    .meBody .meInfo .meName h2{
        font-weight: normal;
        margin: 0;
        text-indent: .3rem;
        @include sch(.5rem, #ffffff, .5rem);
    }
    .meBody .meInfo .meName p{
        font-weight: normal;
        margin: 0;
        text-indent: .3rem;
        padding-top: .3rem;
        @include sch(.24rem, #f5f5f5, .24rem);
    }
    .meBody .meInfo .introduce{
        border-top: 1px solid #423b3d;
        position:absolute;
        top: 2.6rem;
        left: .3rem;
        right: .3rem;
    }
    .meBody .meInfo .introduce p{
        @include sch(.24rem, #909090, .64rem);
    }
    .meBody .meInfo .introduce ul{
        @include sch(.24rem, #808080, .24rem);
    }
    .meBody .meInfo .introduce li{
        background:#454346;
        display: inline-block;
        border-radius: .05rem;
        padding: .07rem;
        position: relative;
    }
    .meBody .meInfo .introduce li:first-child,.meBody .meInfo .introduce li:last-child{
        @include pad(.07rem, .07rem, .07rem, .37rem);
    }
    .meBody .meInfo .introduce li:first-child::before,.meBody .meInfo .introduce li:last-child::before{
        content:'';
        @include wh(.24rem, .24rem);
        display: inline-block;
        position: absolute;
        left: .07rem;
    }
    .meBody .meInfo .introduce li:first-child::before{
        background:url('../../images/me_icon.svg') no-repeat;
        background-size: cover;
    }
    .meBody .meInfo .introduce li:last-child::before{
        background:url('../../images/me_add.svg') no-repeat;
        background-size: cover;
    }
    .meBody .meInfo .fans{
        @include sch(.3rem, #ffffff, .3rem);
        padding-top: .2rem;
    }
    .meBody .meInfo .fans span{
        padding-right: .2rem
    }
</style>