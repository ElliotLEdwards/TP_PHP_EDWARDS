const url = "192.168.1.145/api/"
const token = "kMSMdo3ChwDZkri9TQ2IoFvUNNwS4wN5Zlp8AD87"
const urltoken = "192.168.1.145/api/kMSMdo3ChwDZkri9TQ2IoFvUNNwS4wN5Zlp8AD87"


function lightsOn(){
    
   
}

function lightsOff(){
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
       // Typical action to be performed when the document is ready:
            
        }
    };
    xhttp.open("PUT", urltoken + '/lights/5/state', true);
    var body = "{'on':false}"
    xhttp.send(body);
    
    
    xhttp.onreadystatechange=(e)=>{
        var obj = JSON.parse(xhttp.responseText)
        document.getElementById("json").innerHTML = obj['5'].state.on;
    }
    
}

function lightsRnB(){
    console.log('Red and Blue');
}

function lightsGetState(){
    var lightSelector = document.getElementById("lightSelector");
    var selectedValue = lightSelector.value;
    var query = urltoken + '/lights/' + selectedValue
    
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
       // Typical action to be performed when the document is ready:
            
        }
    };
    xhttp.open("GET", query , true);
    xhttp.send();
    
    
    xhttp.onreadystatechange=(e)=>{
    var obj = JSON.parse(xhttp.responseText)
    }
    document.getElementById("json").innerHTML = obj;
    console.log(obj)

        //if(obj['5'].state.on == "true")
        //{
        //    document.getElementById("json").innerHTML = "Desk light is on";
        //}
    
    
    
    
}