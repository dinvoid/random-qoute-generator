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

/*
         const {}=result.
     	const {feels_like,humidity,temp}=info.main;
 		const name=info.name;
 		const {description,icon,id}=info.weather[0];

 		Object
 		base: "stations"
 		clouds: {all: 37}
 		cod: 200coord: {lon: 124.0671, lat: 10.0307}dt: 1668090440id: 1710908
 		main: feels_like: 26.03grnd_level: 1010humidity: 82pressure: 1010sea_level: 1010temp: 26.03temp_max: 26.03temp_min: 26.03[[Prototype]]: Object
 		name: "Inabanga"rain: {1h: 1.78}sys: {type: 1, id: 8187, country: 'PH', sunrise: 1668029792, sunset: 1668071925}timezone: 28800visibility: 10000
 		weather: [{…}]wind: {speed: 2.92, deg: 72, gust: 3.96}[[Prototype]]: Object

*/