/**
 * Created by yilong on 2017/1/7.
 */

//1-2�ֻ��һط�ʽ
$(".phone_find").on('click',function(){
    $(".test_info").css('display','none');
    $(".two img").attr('src','../../assets/img/v1.0.1/find_two_select.png');
    $(".two_font").addClass('blue');
    $(".phone_reset_pwd").css('display','block');

    $('.phone_reset_pwd .right').on('click',function(){
        var phone_num = $('.phone_reset_pwd .top input').val();

    });
    //2-3�ֻ���֤success
    $(".phone_next_step").on('click',function(){
        $(".phone_reset_pwd").css('display','none');
        $(".three img").attr('src','../../assets/img/v1.0.1/find_three_select.png');
        $(".three_font").addClass('blue');
        $(".success_reset_pwd").css('display','block');
    });
});
//1-2�����һط�ʽ
$(".email_find").on('click',function(){
    $(".test_info").css('display','none');
    $(".two img").attr('src','../../assets/img/v1.0.1/find_two_select.png');
    $(".two_font").addClass('blue');
    $(".mail_reset_pwd").css('display','block');

    //2-3������֤success
    $(".mail_next_step").on('click',function(){
        $(".mail_reset_pwd").css('display','none');
        $(".three img").attr('src','../../assets/img/v1.0.1/find_three_select.png');
        $(".three_font").addClass('blue');
        $(".success_reset_pwd").css('display','block');
    });
});

//3-2����ѡ����֤��ʽ
$(".back").on('click',function(){
    $(".phone_reset_pwd").css('display','none');
    $(".mail_reset_pwd").css('display','none');
    $(".two img").attr('src','../../assets/img/v1.0.1/find_two_unselect.png');
    $(".two_font").removeClass('blue');
    $(".test_info").css('display','block');
});