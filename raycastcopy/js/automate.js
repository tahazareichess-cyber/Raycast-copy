function initAutomate() {
  const backButton = document.getElementById("automateBack");
  const text = document.querySelector(".typing");
  if (!backButton || !text) return;

  backButton.addEventListener("click", () => {
    text.classList.remove("run");
    void text.offsetWidth;
    text.classList.add("run");
  });
}