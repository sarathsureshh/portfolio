function checkTheme(): void {
  const theme = window.localStorage.getItem("usehooks-ts-dark-mode");

  if (theme === "true") document.documentElement.classList.add("dark");
  else document.documentElement.classList.remove("dark");
}

export default checkTheme;
