$(document).ready(function() {
    //API called when search button clicked
    $('#search').on('click', function(e) {
        //clears ig-div
        var imgDiv = $('.ig-div');
        imgDiv.remove();
        //clears HTML for each new load
        $('#instagram').html("");
        //search value entered
        var searchValue = $('#search-input').val();
        //API call
        $.ajax({
            type: "GET",
            dataType: "jsonp",
            cache: true,
            url: "https://api.instagram.com/v1/tags/consumeraffairs/media/recent?access_token=1137819202.4400571.ddb143985bbe4037a23664722dcd79a4",
            success: function(data) {
                //loops through to load 20 images
                for (var i = 0; i < 20; i++) {
                    var usertag = data.data[i].user.id;
                    //search via usertag
                    if (usertag === searchValue) {
                        $("#instagram").append("<div><a href='" + data.data[i].link + "'><img src='" + data.data[i].images.low_resolution.url +"'></img></a></div>");
                    //if no usertag entered, load all images
                    } else {
                        $("#instagram").append("<div><a href='" + data.data[i].link + "'><img src='" + data.data[i].images.low_resolution.url +"'></img></a></div>");
                    }
                }
            }
        });
    });
});
