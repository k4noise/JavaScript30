const inputs = document.querySelectorAll(".controls input");

function imageFiltersUpdate() {
  const unit = this.dataset.sizing || "";
  document.documentElement.style.setProperty(
    `--${this.name}`,
    this.value + unit
  );
}

inputs.forEach((input) => {
  input.addEventListener("change", imageFiltersUpdate);
});
