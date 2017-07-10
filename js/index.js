$(function(){
    $.ajax({
        url:"http://182.254.146.100:3000/api/getindexmenu",
        dataType:"json",
        data:"get",
        success:function(data){
            var data1 = data.result;
            var tag = "";
            $.each(data1,function(i,e){
                tag+= '<li>'+
                '<a href="#">'+
                    e.img+
                    '<p>'+ e.name+'</p>'+
                    '</a>'+
                 '</li>'
            });
            $(".m-m-one").html(tag);

        }
    });

    $.ajax({
        url:"http://182.254.146.100:3000/api/getmoneyctrl",
        dataType:"json",
        data:"get",
        success: function (data) {
            var data2 = data.result;
            var tag = "";
            $.each(data2,function(i,e){
                tag+=

                    '<li>'+
                    '<a href="#">'+
                    '<div class="cont-pic">'+
                    e.productImgSm+
                    '</div>'+
                    '<div class="cont-right">'+
                    '<div class="cont-r-top">'+
                    e.productName+
                '<span>'+ e.productPinkage+'</span>'+
                '</div>'+
                '<div class="cont-r-bottom clearfix">'+
                    '<span class="cont-time">'+ e.productFrom+' | '+ e.productTime+'</span>'+
                '<span class="cont-comment">'+
                    '<i class="icon-comment"></i>'+e.productComCount+''+
                    '</span>'+
                    '</div>'+
                    '</div>'+
                    '</a>'+
                    '</li>'
            });
            $(".m-r-cont").html(tag);
            $(".m-m-one li:nth-of-type(8)").click(function(){
                $(".m-m-one li:nth-last-of-type(-n+4)").toggle();
            });
            $(".m-m-one >li:nth-of-type(1)").click(function(){
                $(".m-m-one >li:nth-of-type(1) >a").attr("href","http://localhost:8080/MobileShopProject/bijia.html")

            });
            $(".m-m-one >li:nth-of-type(7)").click(function(){
                $(".m-m-one >li:nth-of-type(7) >a").attr("href","http://localhost:8080/MobileShopProject/bijia.html")

            });
            $(".m-m-one >li:nth-of-type(2)").click(function(){
                $(".m-m-one >li:nth-of-type(2) >a").attr("href","http://localhost:8080/MobileShopProject/moneyctrl.html?pageid=1")
            });
            $(".m-m-one >li:nth-of-type(5)").click(function(){
                $(".m-m-one >li:nth-of-type(5) >a").attr("href","http://localhost:8080/MobileShopProject/moneyctrl.html?pageid=1")
            });
            $(".m-m-one >li:nth-of-type(3)").click(function(){
                $(".m-m-one >li:nth-of-type(3) >a").attr("href","http://localhost:8080/MobileShopProject/discount.html")
            });
            $(".m-m-one >li:nth-of-type(4)").click(function(){
                $(".m-m-one >li:nth-of-type(4) >a").attr("href","http://localhost:8080/MobileShopProject/baicaijia.html")
            });
            $(".m-m-one >li:nth-of-type(6)").click(function(){
                $(".m-m-one >li:nth-of-type(6) >a").attr("href","http://localhost:8080/MobileShopProject/coupon.html")
            });
            $(".m-m-one >li:nth-of-type(9)").click(function(){
                $(".m-m-one >li:nth-of-type(9) >a").attr("href","http://localhost:8080/MobileShopProject/brand.html")
            });
            $(".m-m-one >li:nth-of-type(11)").click(function(){
                $(".m-m-one >li:nth-of-type(11) >a").attr("href","http://localhost:8080/MobileShopProject/category.html")
            });
            $(".m-m-one >li:nth-of-type(12)").click(function(){
                $(".m-m-one >li:nth-of-type(12) >a").attr("href","http://localhost:8080/MobileShopProject/brandTitle.html")
            });


        }

    });


});