function searchMajor() {
  var input = document.getElementById("search-major");
  var tbodies = document.querySelectorAll(".status-code-table tbody");
  var filter = input.value.toLowerCase().trim();

  for (i = 0; i < tbodies.length; i++) {
    let major = tbodies[i].dataset.major.toLowerCase();
    if (!filter || major.startsWith(filter)) {
      tbodies[i].style.display = "";
    } else {
      tbodies[i].style.display = "none";
    }
  }
}
