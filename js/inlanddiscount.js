
$(function () {
    $(".icon-back").click(function() {
       window.history.go(-1);
    });
    function getQueryString(name) {
        var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)", "i");
        var r = location.search.substr(1).match(reg);
        if (r != null) return unescape(decodeURI(r[2]));
        return null;
    }
    var id = getQueryString("productid");
    //console.log(id);
    $.ajax({
        url:"http://182.254.146.100:3000/api/getmoneyctrlproduct",
        json:"jsonp",
        data:{productid:id},
        success: function (data) {
            console.log(data);
            var html = template("detail",data);
            $(".detail").html(html);
            $(".city").html(data.result[0].productCity);
            $(".code").html(data.result[0].productComment);
        }
    })
});