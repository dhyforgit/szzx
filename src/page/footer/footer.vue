<template>
    <footer :class="{collapsedBom:scrollHidden}">
        <span v-for="(item, index) in footer" :key="index" :class="{on:footerActived==index}" @click="footerToggle(index,item.path)">{{item.name}}</span>
    </footer>
</template>
<script>
export default {
    name: "footers",
    props: ['scrollHidden','footerActived'],
    data(){
        return {
            footer:[
                    {'name':'Home','path':'/'},{'name':'Me','path':'../me'}
                ],
        }
    },
    mounted () {
    },
    methods: {
        // 底部切换
        footerToggle(index,path){
            this.$router.push({
                path: path
            })
        },
    }
}
</script>
<style lang="scss">
    @import '../../style/mixin';
    footer{
        position: fixed;
        bottom: 0;
        left: 0;
        background: #413d3e;
        display: flex;
        display: -webkit-box;
        display: -webkit-flex;
        z-index: 1;
        -webkit-transition-duration: .2s;
        transition-duration: .2s;
        -webkit-transition-property: transform;
        transition-property: transform;
        -webkit-transform: translateY(0);
        transform: translateY(0);
        @include wh(100%, auto)
    }
    footer span{
        -webkit-box-flex: 1;
        -webkit-flex: 1;
        flex: 1;
        text-align: center;
        position: relative;
        @include pad(.6rem, 0, .2rem, 0);
        @include sch(.22rem, #9da0a5, .22rem);
    }
    footer span.on{
        color:#f03534
    }
    footer span::before{
        content: '';
        top: .2rem;
        @include wh(.35rem,.35rem);
        @include cl()
    }
    footer span:last-child::before{
        background: url('../../images/new_personal_wdj_new.png') no-repeat;
        background-size: .35rem .35rem;
    }
    footer span:first-child::before{
        background: url('../../images/new_index_new.png') no-repeat;
        background-size: .35rem .35rem;
    }
    footer span.on:last-child::before{
        background: url('../../images/new_personal_new.png') no-repeat;
        background-size: .35rem .35rem;
    }
    footer span.on:first-child::before{
        background: url('../../images/new_index_dj_new.png') no-repeat;
        background-size: .35rem .35rem;
    }
</style>