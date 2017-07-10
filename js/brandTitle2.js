
$(function () {
        function getQueryString(name) {
            var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)", "i");
            var r = location.search.substr(1).match(reg);
            if (r != null) return unescape(decodeURI(r[2]));
            return null;
        }
        var id = getQueryString("brandid");


    $.ajax({
        url:"http://182.254.146.100:3000/api/getbrandproductlist",
        data:{brandtitleid:id,pagesize:10},
        success: function (data) {
            var pd = data.result[0].productId;
            var img = data.result[0].productImg;
            var name = data.result[0].productName;
            var tem = template("tem",data);
            $(".m-r-cont").html(tem);
            /*var top = template("top",data);
            $(".bdPro").html(top);*/
            $.ajax({
                url:"http://182.254.146.100:3000/api/getproductcom",
                data:{productid:pd},
                success: function (data) {
                    var product ="";
                    data=data.result;
                    $.each(data, function (i, e) {
                        console.log(e);
                        product+=
                            '<div id="pd">'+
                            '<div class="top clearfix">'+
                            '<div class="img">'+
                            img+
                            '</div>'+
                            '<div class="topTxt">'+name+'</div>'+
                            '</div>'+
                            '</div>'+
                            '<div class="pro-comment">'+
                            '<div class="row">'+
                            '<div class="col-xs-6">'+ e.comName+':</div>'+
                            '<div class="col-xs-6">'+e.comTime+'</div>'+
                            '</div>'+
                            '<div class="comment-txt">'+e.comContent+'</div>'+
                            '<div class="start">'+
                            '<span class="glyphicon glyphicon-star"></span>'+
                            '<span class="glyphicon glyphicon-star"></span>'+
                            '<span class="glyphicon glyphicon-star"></span>'+
                            '<span class="glyphicon glyphicon-star"></span>'+
                            '<span class="glyphicon glyphicon-star"></span>'+
                            '</div>'+
                            '</div>';
                    });






                    $(".bdPro").append(product);
                }
            })
        }
    });
});