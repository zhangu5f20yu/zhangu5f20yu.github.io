
$(function () {
    $(".icon-back").click(function() {
       window.history.go(-1);
    });
    $.ajax({
        url:"http://182.254.146.100:3000/api/getbaicaijiatitle",
        success: function (data) {
            var nav = template("nav",data);
            $(".hua").html(nav);
            var boxWidth = $(".bcjNav").width()-38;
            console.log(boxWidth);
            var ul = $(".hua").get(0);
            var ulWidth = $(".hua").width();
            var minWidth = boxWidth-ulWidth,maxWidth = 0;
            var moveLeft = minWidth;
            var clientX = 0, moveX= 0,targetX= 0,currentX=0;
            ul.addEventListener("touchstart", function (e) {
                clientX = e.targetTouches[0].clientX;
            });
            ul.addEventListener("touchmove", function (e) {
                moveX = e.targetTouches[0].clientX;
                targetX = moveX-clientX;
                if(currentX+targetX<moveLeft||currentX+targetX>100){
                    return;
                }
                ul.style.transition = "none";
                ul.style.left = (currentX+targetX)+"px";
            });
            ul.addEventListener("touchend", function (e) {
                if(clientX+targetX<minWidth){
                    currentX = minWidth;
                    ul.style.transition = "left 0.5s";
                    ul.style.left = minWidth+"px";
                }else if(currentX+targetX>maxWidth){
                    currentX = maxWidth;
                    ul.style.transition = "left 0.5s";
                    ul.style.left = maxWidth+"px";
                }else{
                    currentX+=targetX;
                }
            });
            $(".hua li").click(function () {
                var id = $(this).data("titleid");
                $.ajax({
                    url:"http://182.254.146.100:3000/api/getbaicaijiaproduct",
                    data:{titleid:id},
                    success: function (data) {
                        console.log(data);
                        var html = template("bcjPro",data);
                        $(".bjc-cont").html(html);
                    }
                })
            });
        }
    });
    $.ajax({
        url:"http://182.254.146.100:3000/api/getbaicaijiaproduct",
        data:{titleid:0},
        success: function (data) {
            console.log(data);
            var html = template("bcjPro",data);
            $(".bjc-cont").html(html);
        }
    })

});
