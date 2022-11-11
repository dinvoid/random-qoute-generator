//jquery

$(document).ready(function(){
	   $("#newQoutes").click(function(){
          	var category ='inspirational'
			$.ajax({
			    method: 'GET',
			    url: 'https://api.api-ninjas.com/v1/quotes?category=' + category,
			    headers: { 'X-Api-Key': 'qRv5JFH+x1auW8UeLL0fCg==Cs46fvAbWCzaekMu'},
			    contentType: 'application/json',
			    success: function(result) {
			     console.log(result);

			     const {author, quote}=result[0];
			           console.log(quote);
			           console.log(author);
			          $("#qoutes").text(quote);
			          $("#author").text("-"+author);
			    },
			    error: function ajaxError(jqXHR) {
			        console.error('Error: ', jqXHR.responseText);
			    }

			});

	   });
    
   	
      

            	
});

