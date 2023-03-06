const button = document.querySelector(".click-me");
const tree = document.querySelector(".tree");
const box = document.querySelector(".box");
const img_container = document.querySelector(".container-tree");
const button1 = document.querySelector(".click-tks");
const about_img = document.querySelector(".about-img");
const heart = document.querySelector(".heart");
const cards = document.querySelectorAll(".card");
button.addEventListener("click", () => {
  img_container.style.removeProperty("display");

  //   img_container.classList.add("center");
  gsap.to(tree, {
    duration: 2.5,
    x: -400,
    opacity: 0,
    transition: 0.5,
    delay: 2.4,
  });

  gsap.fromTo(
    box,
    {
      y: -1000,
    },
    {
      y: 0,
      duration: 2,
      transition: 0.45,
      delay: 5,
    }
  );
});
button1.addEventListener("click", () => {
  img_container.style.display = "none";
});

// about img

function bigAbout(x) {
  x.style.width = "100%";
  x.style.transition = "all 0.3s";
}
function normalAbout(x) {
  x.style.width = "60%";
  x.style.transition = "all 0.3s";
}

function bigImg(x) {
  x.style.width = "calc(50% - 30px)";
  x.style.transition = "all 0.3s";
}
function normalImg(x) {
  x.style.width = "50%";
  x.style.transition = "all 0.3s";
}
function bigAbout1(x) {
  x.style.width = "100%";
  x.style.transition = "all 0.3s";
}

function normalAbout1(x) {}
function change(ic) {
  if (document.getElementById(ic).className == "fa-regular fa-heart") {
    document.getElementById(ic).className = "fa-solid fa-heart";
  } else {
    document.getElementById(ic).className = "fa-regular fa-heart";
  }
}

// responsive
const menuToggle = document.querySelector(".menu-toggle");
const nav = document.querySelector("nav ul");

menuToggle.addEventListener("click", () => {
  if (nav.style.display === "none") {
    nav.style.display = "inline-block";
  } else {
    nav.style.display = "none";
  }
});

// khi nguoi dung nhap bat ki dau thi dong menu lai
document.addEventListener("click", (event) => {
  const isClickInside =
    nav.contains(event.target) || menuToggle.contains(event.target);

  if (!isClickInside) {
    nav.style.display = "none";
  }
});

// kiem tra neu man hinh lon hon 768px thi hover lat mat nguoc lai cho nguoi dùng click

for (var i = 0; i < cards.length; i++) {
  var card = cards[i];

  if (window.innerWidth >= 768) {
    card.addEventListener("mouseenter", function () {
      this.classList.add("rotate");
    });
    card.addEventListener("mouseleave", function () {
      this.classList.remove("rotate");
    });
  } else {
    card.addEventListener("click", function () {
      this.classList.toggle("rotate");
    });
  }
}
