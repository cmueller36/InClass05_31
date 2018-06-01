

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
var duration = "";
var userPay = "";


// var currentDateFormat = "DD/MM/YY";
// var convertedDate = moment(a, currentDateFormat);
// currentDate = convertedDate;


// moment().format('MMMM Do YYYY');
// moment(currentDate).toNow();
// moment(userDate).diff(moment(), "months").toNow(); <-- calculates the diff between userDate and the present in months

$("#submitButton").on("click", function (event) {
  event.preventDefault();

  userName = $("#newEmployeeID").val().trim();
  userRole = $("#newRoleID").val().trim();
  userDate = $("#newDateID").val().trim();
  userRate = $("#newRateID").val().trim();
  currentDate = moment(firebase.database.ServerValue.TIMESTAMP).format("MM/DD/YYYY");
  duration = parseFloat(moment(currentDate).diff(userDate,'months',true)).toFixed(2);
  userPay = userRate*duration;

  console.log(userName);
  console.log(userRole);
  console.log(userDate);
  console.log(userRate);
  console.log(currentDate);
  console.log(duration);


  var temp = {
    EmployeeName: userName,
    Role: userRole,
    StartDate: userDate,
    MonthsWorked: duration,
    Rate: userRate,
    SubmitDate: currentDate,
    PayOut: userPay
  }

  database.ref().push(temp);

  $("#newEmployeeID").val('');
  $("#newRoleID").val('');
  $("#newDateID").val('');
  $("#newRateID").val('');

});



//grab the added information
database.ref().on("child_added", function (childSnaphot) {
  console.log(childSnaphot.val().EmployeeName);
  console.log(childSnaphot.val().Role);
  console.log(childSnaphot.val().StartDate);
  console.log(childSnaphot.val().MonthsWorked);
  console.log(childSnaphot.val().Rate);
  console.log(childSnaphot.val().SubmitDate);

  //add new rows to table
  $("#tablebody").append($("<tr><td>"
  +childSnaphot.val().EmployeeName+"</td><td>"
  +childSnaphot.val().Role+"</td><td>"
  +childSnaphot.val().StartDate+"</td><td>"
  +childSnaphot.val().MonthsWorked+"</td><td>"
  +childSnaphot.val().Rate+"</td><td>"
  +childSnaphot.val().PayOut
  +"</td></tr>"))

});