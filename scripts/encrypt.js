function encrypt(){
    $("header",".flexContainerMain1").css("background", "rgba(13, 11, 12, 0.2)");
    $("header", ".flexContainerMain1").css("opacity", "0.5");
    $("#encryptingModal").css("display", "block");
    $("textarea").css("background", "rgba(13, 11, 12, 0.2)");
    move();
}