<template>
    <div>
        <ul class="me_tab">
            <li v-for="(item, index) in tabType" :class="{on:tabActived == index}" @click="tabToggle(index)" :key="index">{{item.name}} {{item.num}}</li>
        </ul>
        <div class="me_list">
            <div class="tab-row" v-for="(item, index) in tabList" :key="index" >
                <section @click="getInfo(item.id)">
                    <div class="pic" :style="{backgroundImage: 'url(' + item.coverssAddress + ')'}">
                        <span class="icon-tab">{{item.joinCount}}</span>
                    </div>
                </section>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    name:'meList',
    props:['meList'],
    data () {
        return {
            tabActived:0,
            tabType:{},
            tabList:{}
        }
    },
    mounted () {
        this.$nextTick(function () {
            this.getJson();
            this.getTabList();
        })
    },
    methods: {
        //tab 切换类型
        getJson(){
            this.$http.get('static/json.json').then(data => {
                this.tabType = data.body.metab.data.metab
            })
        },
        getTabList(){
            this.$http.get('static/list1010.json').then(data =>{
                this.tabList = data.body.data
            })
        },
        tabToggle(index){
            this.tabActived = index;
        }
    }
}
</script>
<style lang="scss">
@import '../../style/mixin.scss';
    .me_tab{
        @include wh(100%, auto);
        @include sch(.35rem, #989495, 1rem);
        display: flex;
    }
    .me_tab li{
        text-align: center;
        position: relative;
        flex: 1;
    }
    .me_tab li.on{
        color: #ffffff;
    }
    .me_tab li.on::before{
        content:'';
        background:#facd4c;
        height: 3px;
        position:absolute;
        bottom: 0;
        width: 1rem;
        left: 0;
        right: 0;
        margin: 0 auto;
    }
    .me_list{
        font-size:3px;
    }
    .me_list .tab-row{
        display: inline-block;
        width: 33%;
    }
    .me_list .tab-row section{
        width: 100%; 
        height: 3.3rem;
        padding: 0 .03rem 0;
        text-align: left;
        display: -webkit-box;
        display: -webkit-flex;
        display: flex;
        @include flx();
        -webkit-flex-direction: column;
        flex-direction: column;
        justify-content: flex-start;
    }
    .me_list .tab-row section .pic{
        width: 100%;
        @include flx();
        position: relative;
        background-repeat: no-repeat;
        background-size: cover;
        background-position: 50%;
    }
    .icon-tab{
        box-sizing: border-box;
        height: .38rem;
        position: absolute;
        bottom: .12rem;
        left: .12rem;
        background-color: #000000;
        background-image: url('../../images/me_play.svg');
        background-repeat: no-repeat;
        background-size: 60% 50%;
        background-position: -.07rem;
        @include sch(.22rem, #ffffff, .38rem);
        font-weight: bold;
        opacity: .5;
        border-radius: 2px;
        @include pad(0, .1rem, 0, .35rem);
    }
</style>