$(function () {
  $("#wrapper").click(function (e) {
    e.preventDefault();
    $(".viewport-one").replaceWith("<div class=viewport-two;'");
  });
});

$(function () {
  $(".bigB").click(function (e) {
    e.preventDefault();
    $(".secondbackB").toggle().css("display:show");
    $(".botsecond").replaceWith("<div class='sideback;]'");
  });
});
$(function () {
  $(".bigA").click(function (e) {
    e.preventDefault();
    $(".secondbackA").toggle().css("display:show");
    $(".topsecond").replaceWith("<div class='sideback;]'");
  });
});
// $(function () {
//   $(".square").click(function (e) {
//     e.preventDefault();
//     $(".viewport-two").replaceWith("<div class='viewport-three;]'");
//   });
// });
$(function () {
  $(".bigC").click(function (e) {
    e.preventDefault();
    $(".thirdbackC").toggle().css("display:show");
    $(".topthird").replaceWith("<div class='sideback;]'");
  });
});
$(function () {
  $(".bigD").click(function (e) {
    e.preventDefault();
    $(".thirdbackD").toggle().css("display:show");
    $(".botthird").replaceWith("<div class='sideback;]'");
  });
});
$(function () {
  $(".fig1").click(function (e) {
    e.preventDefault();
    $(".fourthcarousel").toggle().css("display:show");
    $(".topfourth").replaceWith("<div class='sideback;]'");
  });
});
