$('.status-btn').on('click', function (event) {
	var id = $(this).parent().children('div').text()
	$.ajax({
	    type: "POST",
	    dataType: "json",
	    url: "https://api.novaposhta.ua/v2.0/json/",
	    data: JSON.stringify({
	        "modelName": "TrackingDocument",
	        "calledMethod": "getStatusDocuments",
	        "methodProperties": {
	            "Documents": [
	                {
	                    "DocumentNumber": id,
	                    "Phone": ""
	                }]
	        },
	        "apiKey": "caeb13b660b11432a9843510578b909a"
	    }),
	    success: function(response) {
	        var data = response.data;
	        data.forEach(function(item, i, arr) {
	            $(event.target.parentNode).append(item.Status);
	        });
	    },
	})
    
})

$('.allstatus-btn').on('click', function (event) {
  
$.each($(' .number-all'), function (index, value) { 
  	var id = $(value).text(),
        $this = $(this);
    
  $.ajax({
      type: "POST",
      dataType: "json",
      url: "https://api.novaposhta.ua/v2.0/json/",
      data: JSON.stringify({
          "modelName": "TrackingDocument",
          "calledMethod": "getStatusDocuments",
          "methodProperties": {
              "Documents": [
                  {
                      "DocumentNumber": id,
                      "Phone": ""
                  }]
          },
          "apiKey": "caeb13b660b11432a9843510578b909a"
      }),
      success: function(response) {
          var data = response.data;
          data.forEach(function(item, i, arr) {
              $this.append(item.Status);
          });
      },
  })
  console.log($(value).text()); 
});

})
