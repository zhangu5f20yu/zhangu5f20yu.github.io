
$(function () {
    function getQueryString(name) {
        var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)", "i");
        var r = location.search.substr(1).match(reg);
        if (r != null) return unescape(decodeURI(r[2])); return null;
    }
    var id = getQueryString("productid");
    var name = getQueryString("brandName");
    $.ajax({
        url:"http://182.254.146.100:3000/api/getproduct",
        data:{productid:id},
        success: function (data) {
            var productid = data.result[0].productId;
            var html = "";
            html+='<span><a href="###">首页></a></span>'+
            '<span><a href="###">全部分类></a></span>'+
            '<span><a href="###">'+name+'></a></span>';
            $(".p-nav-left").html(html);
            $(".pro-shop").html(data.result[0].bjShop);
            $(".gp-img").append(data.result[0].productImg);
            $.ajax({
                url:"http://182.254.146.100:3000/api/getproductcom",
                data:{productid:productid},
                success: function (data) {
                    console.log(data);
                    var html = template("comment",data);
                    $(".pro-comment").html(html);
                }
            });
        }
    });

});
