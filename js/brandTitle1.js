
$(function () {
    $(function () {
        function getQueryString(name) {
            var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)", "i");
            var r = location.search.substr(1).match(reg);
            if (r != null) return unescape(decodeURI(r[2]));
            return null;
        }
        var id = getQueryString("brandid");
        $.ajax({
            url:"http://182.254.146.100:3000/api/getbrand",
            data:{brandtitleid:id},
            success: function (data) {
                console.log(data);
                var rank = template("rank",data);
                $(".ranking").html(rank);
            }
        })
    });
});
