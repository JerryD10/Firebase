firebase.auth().onAuthStateChanged(function(user) {
  if (user) {

    $(".login").hide(); 
  } else {
    alert("You are not logged in");
    var dialog = document.querySelector('diag');
    if (! dialog.showModal) {
      dialogPolyfill.registerDialog(dialog);
    }
    dialog.showModal();
  }
});
	