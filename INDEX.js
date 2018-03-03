function searchinit (form) {
  var browser = document.getElementById("google").value;
  location.assign("https://www.google.com.mx/search?q="+browser);
  document.getElementById("google").value="";
}
document.querySelector('#google').addEventListener('keypress', function keyupText(e) {
  var key = e.which || e.keyCode;
  if (key === 13) {
    e.preventDefault();
    searchinit(document.querySelector('.form'));
  }
})
