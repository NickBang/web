/**
 * Created by yilong on 2017/1/12.
 */

$('#modify_avatar').click(function () {
        $('#avatar-modal').modal('show');
    });

$('#select_year').select2({
    data: 2010,
    language: 'zh-CN'
});
$('#select_month').select2({
    data: 5,
    language: 'zh-CN'
});
$('#select_day').select2({
    data: 10,
    language: 'zh-CN'
});
$('#select_province').select2({
    data: 10,
    language: 'zh-CN'
});
$('#select_city').select2({
    data: 10,
    language: 'zh-CN'
});
$('#select_district').select2({
    data: 10,
    language: 'zh-CN'
});
$('#select_school').select2({
    data: 10,
    language: 'zh-CN'
});
$('#select_class').select2({
    data: 10,
    language: 'zh-CN'
});
//选择修改个人信息还是修改密码
$(".personal_information").on('click',function(){
    $(this).addClass('index');
    $(".change_password").removeClass('index');
    $('.change_info').css('display','block');
    $(".change_pwd").css('display','none');
    $(".new_phone").css('display','none');
    $(".new_mail").css('display','none');
    $(".new_phone .pwd").css('display','none');
    $(".new_mail .pwd").css('display','none');
    $(".new_mail .mail_num").css('display','none');
    $(".new_phone .phone_num").css('display','none');
});

$(".change_password").on('click',function(){
    $(this).addClass('index');
    $(".personal_information").removeClass('index');
    $('.change_info').css('display','none');
    $(".change_pwd").css('display','block');
    $(".new_phone").css('display','none');
    $(".new_mail").css('display','none');
    $(".new_phone .pwd").css('display','none');
    $(".new_mail .pwd").css('display','none');
    $(".new_mail .mail_num").css('display','none');
    $(".new_phone .phone_num").css('display','none');
});
//点击修改个人信息事件
$("#change").on('click',function(){
    document.getElementById("boy").disabled = false;
    document.getElementById("girl").disabled = false;
    $(".none").css('display','none');
    $(".select_open").css('display','inline-block');
    $(".name input").css('display','inline-block');
    $("#change").css('display','none');
    $("#back").css('display','block');
    $("#sure").css('display','block');
    $(".info_list .group p").css('display','inline-block');
});
$("#back").on('click',function(){
    document.getElementById("boy").disabled = true;
    document.getElementById("girl").disabled = true;
    $(".none").css('display','inline-block');
    $(".select_open").css('display','none');
    $(".name input").css('display','none');
    $("#change").css('display','inline-block');
    $("#back").css('display','none');
    $("#sure").css('display','none');
    $(".info_list .group p").css('display','none');
});
//绑定手机号
$(".phone p").on('click',function(){
    $(".change_info").css('display','none');
    $(".new_phone").css('display','block');
    $(".new_phone .pwd").css('display','block');
    //确认当前密码页面 上一步
    $(".new_phone .pwd .up").on('click',function(){
        $(".change_info").css('display','block');
        $(".new_phone").css('display','none');
        $(".new_phone .pwd").css('display','none');
    });
    //确认当前密码页面 验证密码 下一步
    $(".new_phone .pwd .down").on('click',function(){
        $(".phone_num").css('display','block');
        $(".new_phone .pwd").css('display','none');
        var password = $(".new_phone .pwd .group input").val();
        console.log(password);
        //$("")

        //输入新的手机号码 上一步
        $(".phone_num .up").on('click',function(){
            $(".new_phone").css('display','block');
            $(".new_phone .pwd").css('display','block');
            $(".phone_num").css('display','none');
        });
    });
});

//确认绑定手机号事件
$("#sure_new_phone").on('click',function(){
    alert('绑定')
});


//绑定邮箱
$(".mail p").on('click',function(){
    $(".change_info").css('display','none');
    $(".new_mail").css('display','block');
    $(".new_mail .pwd").css('display','block');
    //确认当前密码页面 上一步
    $(".new_mail .pwd .up").on('click',function(){
        $(".change_info").css('display','block');
        $(".new_mail").css('display','none');
        $(".new_mail .pwd").css('display','none');
    });
    //确认当前密码页面 验证当前密码 下一步
    $(".new_mail .pwd .down").on('click',function(){
        $(".mail_num").css('display','block');
        $(".new_mail .pwd").css('display','none');


        //输入新的手机号码 上一步
        $(".mail_num .up").on('click',function(){
            $(".new_mail").css('display','block');
            $(".new_mail .pwd").css('display','block');
            $(".mail_num").css('display','none');
        });
    });
});

//确定绑定邮箱事件
$("#sure_new_mail").on('click',function(){
    alert('绑定')
});

//载入读取个人信息
function load_info() {
    $.ajax({
        xhrFields: {
            withCredentials: true
        },
        type: 'GET',
        url: URL_BASE + '/users/web/user/current',
        success: function(data) {
            //console.log(data.school.address);
            if(data.info.birthday == 'null'){
                $(".birthday .gray").html();
            }else{
                $(".birthday .gray").html(data.info.birthday);
            }
            $(".id span").html('T' + data.id);
            $(".name span").html(data.name);
            $(".mail span").html(data.email);
            $(".phone span").html(data.tel);
            $(".school .school_cont").html(data.school.address);
            $("#headimg").attr('src', data.headimg);
            if(data.gender == 1 ){
                $("#boy").attr("checked","checked");
            }else if(data.gender == 2 ){
                $("#girl").attr("checked","");
            }
        },
        error: ajax_error_handler
    });
}

//修改个人信息
$("#sure").click(function() {
    document.getElementById("boy").disabled = true;
    document.getElementById("girl").disabled = true;
    $(".gray").css('display','inline-block');
    $(".select_open").css('display','none');
    $(".name input").css('display','none');
    $("#change").css('display','inline-block');
    $("#back").css('display','none');
    $("#sure").css('display','none');
    $(".info_list .group p").css('display','none');


    //var birthday = $(".laydate").val();
    var name = $(".name input").val();
    //console.log(name)
    if ($("#boy").is(":checked")) {
        var gender = 1;
    } else if ($("#girl").is(":checked")) {
        var gender = 2;
    }

    $.ajax({
        xhrFields: {
            withCredentials: true
        },
        contentType: 'application/json',
        data: JSON.stringify({
            "info": {
                "name":name
                //"birthday": birthday
            },
            "gender": gender
        }),
        type: 'PUT',
        url: URL_BASE + '/users/web/user/current',
        success: function (data) {
            console.log(data);
            load_info();
        },
        error: ajax_error_handler
    });
});


//修改密码
$("#password-1").blur(function(){
    var oldPassword = $("#password-1").val();
    var reg = /^[0-9]*$/;
    //if(!verification(oldPassword)){
    console.log(oldPassword);
    if(!reg.test(oldPassword)){
        $(".old-pw span").css("display","block");
    }
    $(this).focus(function(){
        $(".old-pw span").css("display","none");
    })
});
$("#password-2").blur(function(){
    var newPassword = $("#password-2").val();
    var reg = /^[0-9]*$/;
    //if(!verification(newPassword)){
    if(!reg.test(newPassword)){
        $(".set-pw span").css("display","block");
    }
    $(this).focus(function(){
        $(".set-pw span").css("display","none");
    })
});
$("#password-3").blur(function(){
    var newPassword = $("#password-2").val();
    var surePassword = $("#password-3").val();
    if(newPassword != surePassword){
        $(".sure-pw span").css("display","block");
    }else{
        $(".sure-pw span").css("display","none");
    }
});
$("#sure_change_pwd").click(function(){
    var oldPassword = $("#password-1").val();
    var newPassword = $("#password-2").val();
    var surePassword = $("#password-3").val();
    console.log(oldPassword);

    if( newPassword = surePassword){
        $.ajax({
            xhrFields: {
                withCredentials: true
            },
            type: 'PUT',
            url: URL_BASE + '/users/web/user/current/password',
            data: {
                oldPassword: oldPassword,
                newPassword: newPassword
            },
            success: function(data) {
                my_tip.alert("修改密码成功");
            },
            error:function(data){
                my_tip.alert("原始密码输入错误");
            }
        });
    }
});