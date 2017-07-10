
$(function () {
    $(".icon-back").click(function() {
       window.history.go(-1);
    });
    function getQueryString(name) {
        var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)", "i");
        var r = location.search.substr(1).match(reg);
        if (r != null) return unescape(decodeURI(r[2])); return null;
    }
    var id = getQueryString("couponid");
    var name = getQueryString("couponName");
    $.ajax({
        url:"http://182.254.146.100:3000/api/getcouponproduct",
        data:{couponid:id},
        success: function (data) {
            console.log(data);
            var contList = template("contList",data);
            var lb = template("lb",data);
            $(".bjc-cont").html(contList);
            $(".carousel-inner").append(lb);
        }
    })
});