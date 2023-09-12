function darkMode() {
  const button = document.getElementById("dark-mode");
  const dmIcon = document.getElementById("dmIcon");
  const html = document.querySelector("html");

  button.addEventListener("click", function () {
    html.classList.toggle("dark-mode");
    dmIcon.classList.toggle("text-white");

    const dmPref = localStorage.getItem("darkmode");

    if (!dmPref) {
      localStorage.setItem("darkmode", true);
    }

    if (dmPref) {
      localStorage.removeItem("darkmode");
    }

    if (dmIcon.classList.contains("text-white")) {
      dmIcon.src = "../../assets/img/light-mode.png";
    } else {
      dmIcon.src = "../../assets/img/night-mode.png";
    }
  });
}

darkMode();
