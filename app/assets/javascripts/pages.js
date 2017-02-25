// Place all the behaviors and hooks related to the matching controller here.
// All this logic will automatically be available in application.js.


$.get('https://data.sfgov.org/resource/ptw6-erc8.json', function(response) {

  var responseDiv = document.getElementById('responseDiv');
  var htmlString = "";

  for (var i = 0; i < response.length; i++){
    htmlString += '<div class="planes" onclick="changeAirLinesColor(this)">';
    htmlString += '<h3>' + response[i].operating_airline +'</h3>';
    htmlString += '<p>' + response[i].aircraft_manufacturer +'</p>';
    htmlString += '<p>' + response[i].aircraft_model +'</p>';
    htmlString += '</div>';
  }

  responseDiv.innerHTML = htmlString;

  console.log(response);
});

function changeAirLinesColor(airLinesDiv){
  if(airLinesDiv.style.color == "white") {
    airLinesDiv.style.color = "black";
  } else {
    airLinesDiv.style.color = "white";
  }
}

function showAllPlanes() {
  var planes = document.querySelectorAll('.planes');
  for(var i = 0; i < planes.length; i++) {
    var plane = planes[i];
    plane.style.display = "";
  }
}

function showBoeingPlanes() {
  var planes = document.querySelectorAll('.planes');
  for(var i = 0; i < planes.length; i++) {
    var plane = planes[i];
    if(plane.innerHTML.indexOf("Boeing")!== -1) {
      plane.style.display = "";
    } else {
      plane.style.display = "none";
    }
  }
}


function changeColors() {
  setTimeout(function() {
    document.getElementById("first").style.color = "red";
    setTimeout(function() {
      document.getElementById("second").style.color = "blue";
      setTimeout(function() {
        document.getElementById("third").style.backgroundColor = "green";
        setTimeout(function() {
          document.getElementById("fourth").style.backgroundColor = "purple";
        }, 1000);
      }, 1000);
    }, 1000);
  }, 1000);
}




