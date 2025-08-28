function getFormvalue() {
    //Write your code here
	// Get values and trim extra spaces
      let firstName = document.getElementById("fname").value.trim();
      let lastName = document.getElementById("lname").value.trim();

      // Combine full name
      let fullName = firstName + (lastName ? " " + lastName : "");

      if (fullName) {
        alert(fullName);
      } else {
        alert("Please enter your name.");
      }

      // Prevent default form submission
      return false;

}
