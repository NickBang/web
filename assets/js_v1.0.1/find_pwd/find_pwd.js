/**
 * Created by yilong on 2017/1/7.
 */

//1-2�����˺�
$(".btn").on("click",function(){
    $(".ipt_id").css('display','none');
    $(".test_info").css('display','block');
    $(".two img").attr('src','../../assets/img/v1.0.1/find_two_select.png');
    $(".two_font").addClass('blue');
});
//2-3�ֻ��һط�ʽ
$(".phone_send").on('click',function(){
    $(".test_info").css('display','none');
    $(".three img").attr('src','../../assets/img/v1.0.1/find_three_select.png');
    $(".three_font").addClass('blue');
    $(".phone_reset_pwd").css('display','block');
});
//2-3�����һط�ʽ
$(".mail_send").on('click',function(){
    $(".test_info").css('display','none');
    $(".three img").attr('src','../../assets/img/v1.0.1/find_three_select.png');
    $(".three_font").addClass('blue');
    $(".mail_reset_pwd").css('display','block');
});
//3-4�ֻ���֤success
$(".phone_next_step").on('click',function(){
    $(".phone_reset_pwd").css('display','none');
    $(".four img").attr('src','../../assets/img/v1.0.1/find_four_select.png');
    $(".four_font").addClass('blue');
    $(".success_reset_pwd").css('display','block');
});
//3-4������֤success
$(".mail_next_step").on('click',function(){
    $(".mail_reset_pwd").css('display','none');
    $(".four img").attr('src','../../assets/img/v1.0.1/find_four_select.png');
    $(".four_font").addClass('blue');
    $(".success_reset_pwd").css('display','block');
});

//3-2����ѡ����֤��ʽ
$(".back").on('click',function(){
    $(".phone_reset_pwd").css('display','none');
    $(".mail_reset_pwd").css('display','none');
    $(".three img").attr('src','../../assets/img/v1.0.1/find_three_unselect.png');
    $(".three_font").removeClass('blue');
    $(".test_info").css('display','block');
});