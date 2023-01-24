var showHideCell = document.querySelectorAll(".box");
var onClick = document.querySelectorAll(".box");

function handleHideShow(e) {
  var element = e.target;
  element.classList.toggle("box");
}

function handleClick(e) {
  var element = e.target;
  element.classList.toggle("on-click");
}

for (var i = 0; i < showHideCell.length; i++) {
  var cellHide = showHideCell[i];
  cellHide.addEventListener("mouseover", handleHideShow);
}

for (var i = 0; i < showHideCell.length; i++) {
  var cellShow = showHideCell[i];
  cellShow.addEventListener("mouseout", handleHideShow);
}

for (var i = 0; i < showHideCell.length; i++) {
  var cellClick = showHideCell[i];
  cellClick.addEventListener("click", handleClick);
}
