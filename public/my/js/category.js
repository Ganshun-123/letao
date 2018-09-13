/**
 * Created by hahaha on 2018/9/12.
 */
//当页面中的DOM结构加载完成之后 执行回调函数中的代码
$(function(){
    //初始化区域滚动组件
    mui('.mui-scroll-wrapper').scroll({
        deceleration: 0.0005 //flick 减速系数，系数越大，滚动速度越慢，滚动距离越小，默认值0.0006
    });
});
