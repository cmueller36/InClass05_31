

// Initialize Firebase
var config = {
    apiKey: "AIzaSyDLzUT4UfZkHRCLTkxvaGN9ugOI7XIuoJg",
    authDomain: "inclass0531.firebaseapp.com",
    databaseURL: "https://inclass0531.firebaseio.com",
    projectId: "inclass0531",
    storageBucket: "",
    messagingSenderId: "145760898899"
};

firebase.initializeApp(config);

var database = firebase.database();

var userName = "";
var userRole = "";
var userDate = "";
var userRate = "";
var currentDate = "";
var userBilled = "";



$("#submitButton").on("click", function (event) {
    event.preventDefault();

    userName = $("#newEmployeeID").val().trim();
    userRole = $("#newRoleID").val().trim();
    userDate = $("#newDateID").val().trim();
    userRate = $("#newRateID").val().trim();
    currentDate = new Date();

    console.log(userName);
    console.log(userRole);
    console.log(userDate);
    console.log(userRate);
    console.log(currentDate);

    database.ref().push({
        EmployeeName: userName,
        Role: userRole,
        StartDate: userDate,
        Rate: userRate,
        SubmitDate: currentDate

    });

    $("#newEmployeeID").val('');
    $("#newRoleID").val('');
    $("#newDateID").val('');
    $("#newRateID").val('');

});



  //grab the added information
  database.ref().on("child_added", function(childSnaphot){
     console.log(childSnaphot.val().EmployeeName);
     console.log(childSnaphot.val().Role);
     console.log(childSnaphot.val().StartDate);
     console.log(childSnaphot.val().Rate);
     console.log(childSnaphot.val().SubmitDate);

     //add new rows to table
     $()
  });