$(document).ready(function() {
    $(".thumbnail > img").click(function () {
        $(".primarypic > img").width("auto").height("auto").attr("src",$(this).attr("src"));
    })    
});