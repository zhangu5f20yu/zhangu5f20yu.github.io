
$(function () {
  $(".icon-back").click(function() {
       window.history.go(-1);
    });
    $.ajax({
        url:"http://182.254.146.100:3000/api/getsitenav",
        success: function (data) {
            console.log(data);
            var nav = template("nav",data);
            $(".bigBox").html(nav);
        }
    })
});