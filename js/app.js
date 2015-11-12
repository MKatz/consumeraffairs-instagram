$.ajax({
    type: "GET",
    dataType: "jsonp",
	cache: true,
    url: "https://api.instagram.com/v1/tags/consumeraffairs/media/recent?access_token=1137819202.4400571.ddb143985bbe4037a23664722dcd79a4",
    success: function(data) {
        for (var i = 0; i < 20; i++) {
            $("#instagram").append("<div><a href='" + data.data[i].link + "'><img src='" + data.data[i].images.low_resolution.url +"'></img></a></div>");
        }
    }
});
