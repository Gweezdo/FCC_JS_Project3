

// $("#yourMsgTextarea").focus(function () {
//   $(".mainBtn").css("opacity", "1.0");
// });

// $(document).ready(function () {
//   $("textarea").on('focus',function () {
//     $("#mainBtnEncryp").css("opacity", "1");
//   });
// });

function selectEncrip() {
  // $("#mainBtnEncryp").css("opacity", "1");
  $("#yourMsg").css("opacity", "1");
  $("#decrypMsg").css("opacity", "0.5");
}

function selectDecrip() {
  // $("#mainBtnDecryp").css("opacity", "1");
  $("#decrypMsg").css("opacity", "1");
  $("#yourMsg").css("opacity", "0.5");
}