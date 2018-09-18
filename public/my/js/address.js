/**
 * Created by hahaha on 2018/9/17.
 */
$(function(){

    //获取用户存储的收货地址
    //存储收货地址
    var address = null;

    $.ajax({
        url:'/address/queryAddress',
        type:'get',
        success:function(res){
            console.log(res);

            address = res;

            var html = template("addressTpl",{result:res});
            $('#address-box').html(html);
            console.log(html)
        }
    })

//删除收货地址
    //给删除按钮添加点击事件
    //弹出一个删除确认框
    //如果用户点击确认 删除
    //调用删除收货地址的接口 完成删除功能
    //刷新当前页面

$('#address-box').on('click','.delete-btn',function(){

    var id = this.getAttribute("data-id");
    var li = this.parentNode.parentNode;

    mui.confirm("确定要删除吗?",function(message){
        if(message.index == 1){
            //确认删除
            $.ajax({
                url:' /address/deleteAddress',
                type:'post',
                data:{
                    id:id
                },
                success:function(res){
                    if(res.success){
                        //重新加载当前页面
                        location.reload();
                    }
                }
            })
        }else{
            //取消删除
            //关闭列表滑出效果
            mui.swipeoutClose(li);
        }
    });
})


    //编辑收货地址
    //给编辑按钮添加点击事件
    //跳转到收货地址编辑页面 并且要将编辑的数据传递到这个页面
    //要将数据展示在页面中
    //给确认按钮添加点击事件
    //调用接口 执行编辑操作
    //跳转回收货地址列表页面

    $('#address-box').on('click','.edit-btn',function(){
        var id = this.getAttribute('data-id');
        for (var i = 0; i < address.length; i++) {
            if(address[i].id == id){

                localStorage.setItem('editAddress',JSON.stringify(address[i]));
            //终止循环
                break;
            }
            
        }

        //跳转到编辑页面
        location.href = "addAddress.html?isEdit=1";
        console.log(address);
        console.log(id);
    })
});