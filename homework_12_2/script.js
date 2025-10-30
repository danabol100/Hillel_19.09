document.querySelector(".btn__wrapper").addEventListener("click", (event) => {
  const target = event.target.textContent;
  const btn = event.target.closest("a");
  if (!btn) return;
  alert(`нажата кнопка ${target}`);
});
