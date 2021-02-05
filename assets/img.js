$(document).ready(function() {
    $(".scroll_horizontal").on("wheel", function(e) {
        if (e.originalEvent.deltaY > 0) {
            //console.log("scrollLeft:", e);
            e.currentTarget.scrollLeft += 100;
        } else {
            //console.log("scrollRight:", e);
            e.currentTarget.scrollLeft -= 100;
        }
        e.preventDefault();
    });
    $("img.iotimg-background").on( "error", function () {
        console.log(this);
        w1 = $(this).closest(".iotimg").width();
        h1 = $(this).closest(".iotimg").height();
        $(this).width("100vw");
        $(this).height("100vh");
        w2 = $(this).closest(".iotimg").width();
        h2 = $(this).closest(".iotimg").height();
        $(this).width(w1>w2?w1:w2);
        $(this).height(h1>h2?h1:h2);
    });
});