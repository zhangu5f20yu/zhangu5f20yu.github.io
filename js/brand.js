
$(function () {
    $(".icon-back").click(function() {
       window.history.go(-1);
    });
    var shopId = 0,
        areaId = 0;
    $.ajax({
        url:"http://182.254.146.100:3000/api/getgsshop",
        success: function (data) {
            var shopName = template("shopName",data);
            $(".shopName").append(shopName);
            console.log($(".nameTxt").text());
            var lis = $(".shopName li");
            $(lis).each(function(i,e){
                $(e).click(function () {
                    shopId=$(this).attr("data-shop");
                    var liTxt = $(this).text();
                    $(".nameTxt").text(liTxt);
                    $.ajax({
                        url: "http://182.254.146.100:3000/api/getgsproduct",
                        data: {shopid: shopId, areaid: areaId},
                        json: "jsonp",
                        success: function(data){
                            var shop = template("shopTable",data);
                            $(".bjc-cont").html(shop);
                        }
                    });
                })
            });
        }
    });

    $.ajax({
        url:"http://182.254.146.100:3000/api/getgsshoparea",
        success: function (data) {
            var shopcity = template("shopcity",data);
            $(".city").append(shopcity);
            console.log($(".cityTxt").text());
            var lis2 = $(".city li");
            $(lis2).each(function(i,e){
                //console.log($(this).text());
                $(e).click(function () {
                    areaId=$(this).attr("data-city");
                    var liTxt = $(this).text();
                    liTxt=liTxt.substring(0,2);
                    $(".cityTxt").text(liTxt);
                    $.ajax({
                        url: "http://182.254.146.100:3000/api/getgsproduct",
                        data: {shopid: shopId, areaid: areaId},
                        json: "jsonp",
                        success: function(data){
                            var shop = template("shopTable",data);
                            $(".bjc-cont").html(shop);
                        }
                    });
                })
            });
        }
    });
    $.ajax({
        url: "http://182.254.146.100:3000/api/getgsproduct",
        data: {shopid: shopId, areaid: areaId},
        json: "jsonp",
        success: function(data){
            console.log(data);
            var shop = template("shopTable",data);
            $(".bjc-cont").html(shop);
        }
    });

});
