
$(function () {
    function getQueryString(name) {
        var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)", "i");
        var r = location.search.substr(1).match(reg);
        if (r != null) return unescape(decodeURI(r[2])); return null;
    }
    var id = getQueryString("categoryid");
    //获取title
    $.ajax({
        url:"http://182.254.146.100:3000/api/getcategorybyid",
        data:{categoryid:id},
        success: function (data) {
            var html = template("title",data);
            $(".p-nav-left").html(html);
            //获取商品数据
            $.ajax({
                url:"http://182.254.146.100:3000/api/getproductlist",
                data:{categoryid:data.result[0].categoryId,titleid:data.result[0].titleId},
                success:function(data){
                    var page = Math.ceil(data.totalCount/data.pagesize);
                    var tag = "";
                    var contHtml = template("addList",data);
                    $(".m-r-cont").html(contHtml);
                    if(page>1){
                        for(var i = 1; i<= page; i++){
                            tag+= '<option value="'+i+'"> '+i+'</option>';
                        }
                    }else{
                        tag+= '<option value="'+page+'"> '+page+'</option>';
                    }

                    $(".page").html(tag);

                    /*$(".page").change(function(){
                        //alert(this.selectedIndex);
                        this.selectedIndex = 0;
                    });*/
                    //下拉菜单功能
                    var num = $(".page").find("option:selected").val();
                    $("#page").change(function () {
                        var num = $(".page").find("option:selected").val();
                        $.ajax({
                            url:"http://182.254.146.100:3000/api/getproductlist",
                            data:{categoryid:id,pageid:num},
                            success: function (data) {
                                var contHtml = template("addList",data);
                                $(".m-r-cont").html(contHtml);
                            }
                        })
                    });
                //    上下页功能

                    //下页
                    $(".down").click(function () {
                        if(num >= page){
                            num = page;
                        }else{
                            num++;
                            $(".page").find("option[value="+num+"]").prop("selected",true);
                            $.ajax({
                                url:"http://182.254.146.100:3000/api/getproductlist",
                                data:{categoryid:id,pageid:num},
                                success: function (data) {
                                    var contHtml = template("addList",data);
                                    $(".m-r-cont").html(contHtml);
                                }
                            });

                        }


                    });
                    //上页
                    $(".up").click(function () {

                        if(num<=1){
                            num = 1;
                        }else{
                            num--;
                            $(".page").find("option[value="+num+"]").prop("selected",true);
                            $.ajax({
                                url:"http://182.254.146.100:3000/api/getproductlist",
                                data:{categoryid:id,pageid:num},
                                success: function (data) {
                                    var contHtml = template("addList",data);
                                    $(".m-r-cont").html(contHtml);
                                }
                            });

                        }
                    })
                }
            })
        }
    });

});
