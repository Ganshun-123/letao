/**
 * Created by hahaha on 2018/9/13.
 */
$(function(){
    //实现用户点击搜索按钮跳转到搜索结果页面
    //1给搜索按钮添加点击事件
    //2获取用户输入的搜索关键字
    //3判断用户是否输入了搜索关键字
    //4如果用户没有输入阻止跳转 并且给出提示
    //5如果用户输入了 跳转到搜索结果页面 并且要将用户输入的关键字带到这个页面去
    $('#search-btn').on('click',function(){
        var keyword = $(this).siblings('input').val();

        if(keyword){

            //将用户输入的关键字存到数组中
            keyArr.unshift(keyword);
            //将关键字数组存储在本地
            localStorage.setItem('keyArr',JSON.stringify(keyArr));

            location.href = "search-result.html?keyword=" + keyword;
        }else{
            alert('请输入要搜索的商品关键字')
        }
    });



    //实现搜索历史关键字存储
    //1准备一个存储关键字的数组
    //2当用户点击搜索按钮的时候 将用户输入的关键字追加到数组中
    //3将数组存储在本地存储中
    //4在页面一上来的时候 判断本地存储中是否有已经存储的关键字
    //将数据和html拼接 将数据展示在页面当中
    //存储关键字的数组
    var keyArr = [];

    if(localStorage.getItem('keyArr')){

        keyArr = JSON.parse(localStorage.getItem('keyArr'));

        var html = template('historyTpl',{result: keyArr})

        $('#history-box').html(html);
    }

});
