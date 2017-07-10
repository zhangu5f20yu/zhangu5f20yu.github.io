

$(function () {
    $.ajax({
        url:"http://182.254.146.100:3000/api/getcategorytitle",
        dataType:"json",
        data:"get",
        success:function(data){
            var data1 = data.result;
            var tag = "";
            $.each(data1,function(i,e){
                tag+=
                '<div class="panel panel-default">'+
                    '<div class="panel-heading daJia" role="tab" id="headingOne" data-titleid = '+ e.titleId+'>'+
                    '<h4 class="panel-title">'+
                    '<a role="button" data-toggle="collapse" data-parent="#accordion" href=#'+ e.titleId+' aria-expanded="true" aria-controls="collapseOne">'+
                    e.title+
                    '</a>'+
                    '</h4>'+
                    '</div>'+
                     '<div id='+ e.titleId+' class="panel-collapse collapse" role="tabpanel" aria-labelledby="headingOne">'+
                    '<div class="panel-body addTag">'+
                    '<div class="row">'+
                    '</div>'+
                    '</div>'+
                    '</div>'+
                '</div>';
            });
            $("#accordion").html(tag);
            $(".daJia").click(function(){
                var id = $(this).attr("data-titleid");
                $.ajax({
                    url:"http://182.254.146.100:3000/api/getcategory",
                    dataType:"json",
                    type:"get",
                    data:{titleid:id},
                    success:function(data){
                        var html = template("smallTitle",data);
                        var qwe = "#"+ id + " .panel-body .row";
                        $(qwe).html(html);
                    }
                })
            })
        }
    })
});
