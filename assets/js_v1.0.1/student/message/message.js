/**
 * Created by yilong on 2017/1/17.
 */
//ѡ���޸ĸ�����Ϣ�����޸�����
$(".recommend_read_btn").on('click',function(){
    $(this).addClass('index');
    $(".system_message_btn").removeClass('index');
    $(".recommend_read").css('display','block');
    $(".system_message").css('display','none');
});
$(".system_message_btn").on('click',function(){
    $(this).addClass('index');
    $(".recommend_read_btn").removeClass('index');
    $(".recommend_read").css('display','none');
    $(".system_message").css('display','block');
});