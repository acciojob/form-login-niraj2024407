function getFormvalue(event) {
  event.preventDefault(); // Keeps the page from reloading
  const fname = document.querySelector('[name="fname"]').value.trim();
  const lname = document.querySelector('[name="lname"]').value.trim();
  alert(fname + " " + lname);
}