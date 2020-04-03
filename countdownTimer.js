
var str = "lksdfj lksjdf lkjsdf sdlfkj asdf ads a saads asdfsaf asd ads dsf sdf asdf a asdf asdf asdf sadf asd asd asd sad asd asd fsd fsdfsdfsdfsdf asdf sdf sdfasdfsdfsaf sfd af asdf asdf dsfsdfasdf  a  asdf asdf asdf asd asd asd a sdf asdf asdf sdf sdfasdf asdf asdf asdf asdf asdf asdf asdf asdf "
seconds = parseInt(str.length/200 * 60);
// Update the count down every 1 second
var myTimer = setInterval(function() {
    seconds--
    document.getElementById("demo").innerHTML = seconds + 's';
    
    if(seconds <= 0){
        clearInterval(myTimer)
    }
    
}, 1000);
