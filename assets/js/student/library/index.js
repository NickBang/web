/**
 * Created by wind on 2016/10/31.
 */
// 左右导航栏的回调函数
function left_bar_cb() {
    $('#library_button').attr('class', 'side-button-selected left-side-button');
}
$(".book .grade span").click(function(){
    $(this).siblings().attr("class","");
    $(this).attr("class","index");
})
$(".book .sort span").click(function(){
    $(this).siblings().attr("class","");
    $(this).attr("class","index");
})