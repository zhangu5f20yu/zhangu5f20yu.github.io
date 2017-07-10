



$(function () {
    $.ajax({
        url:"http://182.254.146.100:3000/api/getbrandtitle",
        dataType:"json",
        data:"get",
        success:function(data){
            console.log(data);
            var data1 = data.result;
            var tag = "";
            $.each(data1,function(i,e){
                tag+=
                    '<a href="brandTitle1.html?brandid='+ e.brandTitleId+'">'+
                    '<div class="panel panel-default">'+
                    '<div class="panel-heading daJia" role="tab" id="headingOne" data-titleid = '+ e.brandTitleId+'>'+
                    '<h4 class="panel-title">'+
                    e.brandTitle+
                    '</h4>'+
                    '</div>'+
                    '</div>'+
                    '</a>';
            });
            $("#accordion").html(tag);
        }
    })
});

