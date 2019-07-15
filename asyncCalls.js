let url ="http://api.openweathermap.org/data/2.5/forecast?q=Salt+Lake+City,us&appid=73586499c17eb1dcc199a2f1291140e6"

function loadDoc() {
    
    //---------------------
    // This is where you would get references to all
    // HTML elements that you want to update with new data
    // based on the results of the asynchronous API call you make below
    //---------------------
    
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            
            //---------------------
            console.log("Successful...");
            //console.log(this.responseText);
            // This is where you would update the HTML elements above
            // with the data you pull from the API call response
            // document.getElementById("demo").innerHTML = this.responseText;
            //---------------------
            
            let weatherDataDays = JSON.parse(this.responseText);
            //console.log(weatherDataDays.list);
            //console.log(weatherDataDays.list.length);

            let dayData =[];
            
            for(let counter = 0; counter<weatherDataDays.list.length; counter++){
                
                
                let currentDay = weatherDataDays.list[counter];
                console.log(currentDay);

                
            }

            //console.log(this.response);
            //let dayData = this.response;
            //console.log(dayData);

        } else {
            
            //---------------------
            console.log("failure...")
            // error message for user that API is down
            //---------------------
            
        }
    };
    xhttp.open("GET", url, true);
    xhttp.send();
}

loadDoc();