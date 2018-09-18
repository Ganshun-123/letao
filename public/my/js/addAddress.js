/**
 * Created by hahaha on 2018/9/18.
 */
$(function(){

    var isEdit = Number(getParamsByUrl(location.href,'isEdit'));

    if(isEdit){
        //编辑操作
        if(localStorage.getItem("editAddress")){
            var address = JSON.parse(localStorage.getItem("editAddress"))

            var html = template("editTpl",address);
            $('#editForm').html(html);
        }
    }else{
        //添加操作
        var html = template("editTpl",{});
        $('#editForm').html(html);
    }
    //创建picker选择器
    var picker = new mui.PopPicker({layer:3});

    //为picker选择器添加数据
    picker.setData(cityData);

    $('#selectCity').on('click',function(){
       picker.show(function(selectItems){
           console.log(selectItems[0].text);
           console.log(selectItems[1].text);
           console.log(selectItems[2].text);
           $('#selectCity').val(selectItems[0].text + selectItems[1].text + selectItems[2].text)
       });
    })


    //添加收货地址
    //1获取收货地址管理按钮并且添加点击事件
    //获取用户输入的表单信息
    //对用户输入的表单信息进行校验
    //调用添加收货地址接口 实现功能
    //跳转回收货地址列表页面

    $('#addAddress').on('click',function(){
        var username = $("[name='username']").val().trim();
        var postCode = $("[name='postCode']").val().trim();
        var city = $("[name='city']").val().trim();
        var detail = $("[name='detail']").val().trim();

        if(!username){
            mui.toast("请输入收货人姓名");
            return;
        }
        if(!postCode){
            mui.toast("请输入邮政编码");
            return;
        }
        if(!city){
            mui.toast("请输入省市区");
            return;
        }
        if(!detail){
            mui.toast("请输入详细地址");
            return;
        }
        $.ajax({
            url:'/address/addAddress',
            type:'post',
            data:{
                address: city,
                addressDetail: detail,
                recipients: username,
                postcode: postCode
            },
            success:function(res){

                if(res.success){
                   mui.toast("地址 添加成功");
                    setTimeout(function(){
                        location.href = "address.html";
                    },1500)
                }
            }
        })
    });

});