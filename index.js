// 1. Initialize Firebase
var firebaseConfig = {
    apiKey: "AIzaSyARJNM0cwQkxGVTemw4QjlgtOh3CKYVQKc",
    authDomain: "train-scheduler-b10db.firebaseapp.com",
    databaseURL: "https://train-scheduler-b10db.firebaseio.com",
    projectId: "train-scheduler-b10db",
    storageBucket: "",
    messagingSenderId: "429011250127",
    appId: "1:429011250127:web:2a6f866131a54a3c"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  
  var database = firebase.database();
  
  



// button to add train

$("#addtrains").on("click", function(event){
    event.preventDefault();
    // get the user input
    
    trainname = $("#trainName").val().trim();
	destination = $("#Destination").val().trim();
	firsttime = $("#time").val().trim();
    frequency = $("#Frequency").val().trim();
    // creating object to hold train data 
    
    database.ref("/trains").push({
		trainname: trainname,
		destination: destination,
		firsttime: firsttime,
		frequency: frequency
    });
    
  $("#trainName").val('');
 $("#Destination").val('');
	 $("#time").val('');
 $("#Frequency").val('');
});


database.ref('/trains').on('child_added', function(response){

var td= $("<tr>");
var trainName = $('<td>').text(response.val().trainname)
var destination=$('<td>').text(response.val().destination)
var time =$('<td>').text (response.val().firsttime)
var frequency=$('<td>').text (response.val().frequency)
td.append(trainName,destination,time,frequency);
$("#tbody").append(td)
})
//  3. Create Firebase event for adding employee to the database and a row in the html when a user adds an entry

