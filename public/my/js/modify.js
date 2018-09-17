/**
 * Created by hahaha on 2018/9/16.
 */
//给修改密码按钮添加点击事件
//获取用户输入的信息
//对用户输入的信息做校验
//调用修改密码接口 实现修改密码功能
//跳转到登录页面重新登录

$(function(){
    $('#modify-btn').on('click',function(){
        var originPass = $("[name='originPass']").val().trim();
        var newPass = $("[name='newPass']").val().trim();
        var confirmNewPass = $("[name='confirmNewPass']").val().trim();
        var vCode = $("[name='vCode']").val().trim();

        if(!originPass){
            mui.toast('请输入原密码');
        }
        if(newPass != confirmNewPass){
            mui.toast('两次输入的密码不一致');
        }

        $.ajax({
            url:'/user/updatePassword',
            type:'post',
            data:{
                oldPassword:originPass,
                newPassword:newPass,
                vCode:vCode
            },
            success:function(res){

                if(res.success){
                    mui.toast("修改密码成功");
                    setTimeout(function(){
                        location.href = "login.html";
                    },1500)
                }else{
                    mui.toast("原密码错误");
                }
                console.log(res)
            }
        })

    });

    //获取认证码
    $('#getCode').on('click',function(){
        $.ajax({
            url:'/user/vCodeForUpdatePassword',
            type:'get',
            success: function (res) {
                //将认证码显示在控制台
                console.log(res.vCode);
            }
        })
    })
});