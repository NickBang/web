/**
 * Created by yilong on 2016/10/13.
 */

function right_bar_cb() {
    $('#info_button').attr('class', 'side-button-selected right-side-button');
}

//取消确定button的点击事件样式
function Change() {
    document.getElementById("boy").disabled = false;
    document.getElementById("girl").disabled = false;
    $(".laydate").css("display","inline");
    $(".mail").css("display","inline");
    $(".info-list .btn").css("display","inline");
    $(".code").css("display","block");
    $(".change-info").css("display","none");
    $(".off").css("display","inline");
    $(".sure").css("display","inline");
    $(".birth span").css("display","none");
    //$(".email span").css("display","none");
}
function Sure(){
    document.getElementById("boy").disabled = true;
    document.getElementById("girl").disabled = true;
    $(".laydate").css("display","none");
    $(".mail").css("display","none");
    $(".info-list .btn").css("display","none");
    $(".code").css("display","none");
    $(".change-info").css("display","block");
    $(".off").css("display","none");
    $(".sure").css("display","none");
    $(".birth span").css("display","inline");
    $(".email span").css("display","inline");
}
function Back(){
    document.getElementById("boy").disabled = true;
    document.getElementById("girl").disabled = true;
    $(".laydate").css("display","none");
    $(".mail").css("display","none");
    $(".info-list .btn").css("display","none");
    $(".code").css("display","none");
    $(".change-info").css("display","block");
    $(".off").css("display","none");
    $(".sure").css("display","none");
    $(".birth span").css("display","inline");
    $(".email span").css("display","inline");

}


//载入读取个人信息
function load_info() {
    $.ajax({
        xhrFields: {
            withCredentials: true
        },
        type: 'GET',
        url: URL_BASE + '/users/web/user/current',
        success: function(data) {
            //console.log(data);
            $(".name span").html(data.name);
            $(".birth span").html(data.birthday);
            $(".email span").html(data.email);
            $(".school span").html(data.school.name);
            $(".class-name span").html(data.classes[0].name);
            $(".city span").html(data.school.address);
            $("#headimg").attr('src', data.headimg);
            if(data.gender == 1 ){
                $("#boy").attr("checked","checked");
            }else if(data.gender == 2 ){
                $("#girl").attr("checked","");
            }

        }
    });
}


//修改个人信息
function change_info(){
    $(".sure").click(function(){
        //var birthday = $(".laydate").val();
        var email = $(".mail").val();
        if($("#boy").is(":checked")) {
            var gender = 1;
        }else if($("#girl").is(":checked")) {
            var gender = 2;
        }
<<<<<<< HEAD
=======
        alert(name);

>>>>>>> 070820fc5db1382eea2753052c2676d2f4913da2
        $.ajax({
            xhrFields: {
                withCredentials: true
            },
            contentType: 'application/json',
            data: JSON.stringify({

                    "birthday": 19910101,
                    "email": "email",
                    "gender": gender,
                    //"name": "王澈111222333"
            }),
            type: 'PUT',
            url: URL_BASE + '/users/web/user/current',
            success: function(data) {
                console.log(data);
                load_info();



            }
        });
    })
}
<<<<<<< HEAD




//修改头像
function change_head(){
    var ChImg = $("#img").val();
    //$("#head").attr("src",ChImg);
    console.log(ChImg);
    $.ajax({
        xhrFields: {
            withCredentials: true
        },
        type: 'PUT',
        url: URL_BASE +  '/users/web/user/current/headimg',
        data: {
            img: ChImg
        },
        success: function(data) {
            alert(1);
        },
        error:function(data){
            alert(2)
        }
    });
}
=======

// 修改头像
// $(function(){
//    var ChImg = $("#change-head").val();
//    //$("#head").attr("src","ChImg");
//    console.log(ChImg);
//    //console.log(ChImg.substring(12));
//    $.ajax({
//        xhrFields: {
//            withCredentials: true
//        },
//        type: 'PUT',
//        url: 'http://debian8-01.internal.enjoyreading.com:8082/users/web/user/current/headimg',
//        data: {
//            img: ChImg
//        },
//        success: function(data) {
//            alert(1);
//        },
//        error:function(data){
//            alert(2)
//        }
//    });
// });

$('#submit').click(function () {
    $.ajax({
        url: URL_BASE + '/users/web/user/current/headimg',
        type: 'PUT',
        xhrFields: {
            withCredentials: true
        },
        data: new FormData($('#headimg_form')[0]),
        processData: false,
        contentType: false,
        success: function () {
            my_tip.alert('haha');
        }
    })
});

$('#modify_avatar').click(function () {
        $('#avatar-modal').modal('show');
    }
);

>>>>>>> 070820fc5db1382eea2753052c2676d2f4913da2

