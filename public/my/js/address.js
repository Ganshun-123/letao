/**
 * Created by hahaha on 2018/9/17.
 */
$(function(){

    //��ȡ�û��洢���ջ���ַ
    $.ajax({
        url:'/address/queryAddress',
        type:'get',
        success:function(res){
            console.log(res)
            var html = template("addressTpl",{result:res});
            $('#address-box').html(html);
            console.log(html)
        }
    })
});