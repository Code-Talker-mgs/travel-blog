"use strict";
{
  const hamMenu = () => {
    const hamBurger = document.querySelector(".hamburger");
    const navMenu = document.querySelector(".nav-item");
    const navLinks = navMenu.querySelectorAll("a");

    // console.log(hamBurger, navMenu);

    // hamBurger&&(かつ)navMenuクラスがあるか判定
    if (hamBurger && navMenu && navLinks) {
      hamBurger.addEventListener("click", () => {
        const expanded = hamBurger.getAttribute("aria-expanded") === "true";
        hamBurger.setAttribute("aria-expanded", !expanded);
        // console.log(expanded);
        hamBurger.classList.toggle("active");
        navMenu.classList.toggle("open");

        // メニューが開いた時に最初のリンクにフォーカスを移動
        if (!expanded) {
          navLinks[0].focus();
        }
      });

      // Escapeキーでメニューを閉じる
      document.addEventListener("keydown", (event) => {
        if (event.key === "Escape" && navMenu.classList.contains("open")) {
          hamBurger.setAttribute("aria-expanded", false);
          hamBurger.classList.remove("active");
          navMenu.classList.remove("open");
          hamBurger.focus(); // ハンバーガーメニューにフォーカスを戻す
        }
      });

      // メニュー外をクリックで閉じる
      document.addEventListener("click", (event) => {
        if (
          navMenu.classList.contains("open") &&
          !navMenu.contains(event.target) &&
          event.target !== hamBurger
        ) {
          hamBurger.setAttribute("aria-expanded", false);
          hamBurger.classList.remove("active");
          navMenu.classList.remove("open");
        }
      });
    }
  };
  hamMenu();
}
