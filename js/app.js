$(document).ready(function() {
    //API called when search button clicked
    $('#search').on('click', function() {
        //clears ig-div
        var imgDiv = $('.ig-div');
        imgDiv.remove();
        //clears HTML for each new load
        $('#instagram').html("");
        //API call
        $.ajax({
            type: "GET",
            dataType: "jsonp",
            cache: true,
            url: "https://api.instagram.com/v1/tags/consumeraffairs/media/recent?access_token=1137819202.4400571.ddb143985bbe4037a23664722dcd79a4",
            success: function(data) {
                //loops through to load 20 images
                for (var i = 0; i < 20; i++) {
                    //HTML added to div
                    $("#instagram").append("<div><a href='" + data.data[i].link + "'><img src='" + data.data[i].images.low_resolution.url +"'></img></a><p>" + data.data[i].likes.count + " likes</p></div>");
                }
            }
        });
    });
});
