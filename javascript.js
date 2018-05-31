//initialize databse

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


  database.ref().firebase



  //grab the added information
  databse.ref().on("child_added", function(snaphot){
     var sv = sanpshot.val(); 
  }))