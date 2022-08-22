const keyLetter = document.querySelectorAll(".key");

for (var i = 0; i < keyLetter.length; i++) {
  keyLetter[i].addEventListener("click", function () {
    const audio = document.querySelector(
      `audio[data-key="${this.attributes["data-key"].value}"]`
    );
    audio.play();
  });
}
