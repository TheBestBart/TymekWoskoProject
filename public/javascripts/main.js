const setMenu = (e) => {
  const logout = document.querySelector(".logout-menu");
  const login = document.querySelector(".login-menu");
  if (document.cookie.includes("user=")) {
    const id = document.cookie.replace("user=", "");

    if (logout) {
      logout.setAttribute("href", `/api/logout/${id}`);
      login.style.display = "none";
      logout.style.display = "block";
    }
  } else {
    login.style.display = "block";
    logout.style.display = "none";
  }
};

window.addEventListener("load", (e) => {
  setMenu(e);
});
