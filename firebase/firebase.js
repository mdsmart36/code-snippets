var myFirebaseRef = new Firebase("https://sweltering-inferno-5214.firebaseio.com/");

myFirebaseRef.set({
  title: "Hello World!",
  author: "Firebase",
  location: {
    city: "San Francisco",
    state: "California",
    zip: 94103
  }
});

// myFirebaseRef.child("options/shipping").on("value", function(snapshot) {
//   alert(snapshot.val());  
// });