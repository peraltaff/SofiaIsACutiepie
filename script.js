let cover = document.getElementById("cover");
let clickHere = document.getElementsByClassName("clickHere")[0];
let letterSheet = document.getElementById("letterSheet");
let letter = document.getElementById("letter");
let shadowLetter = document.getElementById("shadowLetter");
let envelope = document.querySelector(".envelope");

let title = document.getElementById("title");
let menssage = document.getElementById("menssage");

/* ---------- ESTADO INICIAL (ANTES DO CLICK) ---------- */
letterSheet.style.height = "10vh";

// Remove do layout (display none)
title.style.display = "none";
message.style.display = "none";

/* ---------- AÇÃO AO CLICK ---------- */
function openLetter() {
  cover.classList.add("open");

  // remove scroll da envelope
  

  setTimeout(() => {
    // cresce a folha
    letterSheet.style.height = "90vh";
    letterSheet.style.zIndex = "9999";
    letterSheet.style.position = "absolute";

    // coloca de volta no layout
    title.style.display = "block"; // ou 'flex' se quiser
    message.style.display = "block";

    // remove CTA
    clickHere.style.display = "none";

    // animações
    letter.style.animationIterationCount = "1";
    shadowLetter.style.animationIterationCount = "1";

    letterSheet.classList.add("zoomIn");
  }, 1500);
}
