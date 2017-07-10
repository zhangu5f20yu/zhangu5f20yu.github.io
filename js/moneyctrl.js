
$(function () {
    $(".icon-back").click(function() {
       window.history.go(-1);
    });
    function getQueryString(name) {
        var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)", "i");
        var r = location.search.substr(1).match(reg);
        if (r != null) return unescape(decodeURI(r[2])); return null;
    }
    var id = getQueryString("pageid");
    console.log(id);
    $.ajax({
        url:"http://182.254.146.100:3000/api/getmoneyctrl",
        data:{pageid:id},
        json:"jsonp",
        success:function(data){
            console.log(data);
            var tag="";
            var page = Math.ceil(data.totalCount/data.pagesize);
            var html = template("moneyCont",data);
            $(".m-r-cont").html(html);
            if(page>1){
                for(var i = 1; i<= page; i++){
                    tag+= '<option value="'+i+'"> '+i+'</option>';
                }
            }else{
                tag+= '<option value="'+page+'"> '+page+'</option>';
            }
            //下拉菜单
            $(".page").html(tag);
            var num = $(".page").find("option:selected").val();
            console.log(num);
            $("#page").change(function () {
                var num = $(".page").find("option:selected").val();
                $.ajax({
                    url:"http://182.254.146.100:3000/api/getmoneyctrl",
                    data:{pageid:num},
                    success: function (data) {
                        var html = template("moneyCont",data);
                        $(".m-r-cont").html(html);
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
                        url:"http://182.254.146.100:3000/api/getmoneyctrl",
                        data:{pageid:num},
                        success: function (data) {
                            var html = template("moneyCont",data);
                            $(".m-r-cont").html(html);
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
                        url:"http://182.254.146.100:3000/api/getmoneyctrl",
                        data:{pageid:num},
                        success: function (data) {
                            var html = template("moneyCont",data);
                            $(".m-r-cont").html(html);
                        }
                    });

                }
            })
        }
    })
});