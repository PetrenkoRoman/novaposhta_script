$('#btn').click(function () {
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
            "DocumentNumber": "20450118862059",
            "Phone":""
        },
        {
            "DocumentNumber": "20450118862056",
            "Phone":""
        }
					

					]
                },
                "apiKey": "caeb13b660b11432a9843510578b909a"
            }),
            success: function(response) {
                var data = response.data;
                data.forEach(function (item, i, arr) {
                   $('.status').append(item.Number);
                   $('.status').append('<br>');
                   $('.status').append(item.Status);
                   $('.status').append('<br><br>');
    
                });
				
            },
        }); 
        });