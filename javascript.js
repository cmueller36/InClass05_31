

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




$("#submitButton").on("click", function (event) {
    event.preventDefault();
    var userName = $("#newEmployeeID").val().trim();
    var userRole = $("#newRoleID").val().trim();
    var userDate = $("#newDateID").val().trim();
    var userRate = $("#newRateID").val().trim();

    console.log(userName);
    console.log(userRole);
    console.log(userDate);
    console.log(userRate);

    database.ref().push({
        EmployeeName: userName,
        Role: userRole,
        StartDate: userDate,
        Rate: userRate
    });

});



//   //grab the added information
//   databse.ref().on("child_added", function(snaphot){
//      var sv = snapshot.val(); 
//   });