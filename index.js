var text = document.getElementsByClassName("truncated");

for (var i = 0; i < text.length; i++) {
  let truncated = text[i].innerText.substring(0, 160);
  text[i].innerText = truncated + " ...";
}
