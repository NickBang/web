/**
 * Created by yilong on 2017/1/24.
 */
//ѡ���޸ĸ�����Ϣ�����޸�����
$(".feedback").on('click',function(){
    $(this).addClass('index');
    $(".handbook").removeClass('index');
});
$(".handbook").on('click',function(){
    $(this).addClass('index');
    $(".feedback").removeClass('index');
});