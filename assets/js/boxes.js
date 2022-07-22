function toggleIcon(id) {
  x = document.getElementById(id);
  x.classList.toggle("fa-angle-double-up");
  x.classList.toggle("fa-angle-double-down");
  console.log(x.classList)
};
