function toggleIcon(id) {
  var x = document.getElementById(id);
  x.classList.toggle("fa-angle-double-up");
  x.classList.toggle("fa-angle-double-down");
  console.log(x.classList);
}

function ShowAndHide(id) {
    var x = document.getElementById(id);
    if (x.style.display == 'none') {
        x.style.display = 'block';
    } else {
        x.style.display = 'none';
    }
}
