/**
 * Created by hahaha on 2018/9/13.
 */
$(function(){
    //�����û�����Ĺؼ��ֻ�ȡ�������
    //1��ȡ����ַ�����û�����������ؼ���
    //2�ùؼ���ȥ��ȡ�����ӿ�
    //3.���������չʾ��ҳ����
    var keyword = getParamsByUrl(location.href,'keyword')
});

/*
* ��ȡ��ַ���еĲ���
* @param  {string} url ��ַ�ַ���
* @param  {string} name Ҫ��ȡ�Ĳ�������
* @return {string}      �������ƶ�Ӧ�Ĳ���ֵ
* */
function getParamsByUrl(url,name){

    var params = url.substr(url.indexOf('?')+1);
    var param = params.split('&');

    for (var i = 0; i < param.length; i++) {
        var current = param[i].split('=');

        if(current[0] == name){
            return current[1]
        }
    }
    return null;
}