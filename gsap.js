gsap.registerPlugin(ScrollTrigger);

///ANIMA ICONS HERO

gsap.to(".html-anima", {
  x: "4vh",
  y: "6vh",
  duration: 5,
  repeat: -1,
  yoyo: true,
  ease: "linear",
});
gsap.to(".css-anima", {
  x: "-2vh",
  y: "8vh",
  duration: 5,
  repeat: -1,
  yoyo: true,
  ease: "linear",
});
gsap.to(".js-anima", {
  x: "0vh",
  y: "4vh",
  duration: 5,
  repeat: -1,
  yoyo: true,
  ease: "bounce",
});

/// FADE IN COR - PRÉ HORIZONTAL SCROLL

gsap.to(".hl-projetos-bg", {
  background: "#391856",
  scrollTrigger: {
    trigger: ".hl-projetos-bg",
    scrub: 1,
    start: "top 30%",
    end: "+=260",
  },
});

gsap.to(".hl-projetos", {
  color: "#ededed",
  scrollTrigger: {
    trigger: ".hl-projetos-bg",
    scrub: 1,
    start: "top 30%",
    end: "+=260",
  },
});

/// HORIZONTAL SCROLL

let galeria1 = gsap.utils.toArray(".projetos-item");
const projetosGaleria = document.querySelector(".projetos");

gsap.to(galeria1, {
  xPercent: -100 * (galeria1.length - 1),
  ease: "none",
  scrollTrigger: {
    trigger: ".projetos",
    start: "top top",
    // end: () => "+=" + projetosGaleria.offsetWidth,
    end: "+=1000",
    pin: true,
    scrub: 1,
    snap: 1 / (galeria1.length - 1),
  },
});

/// PIN VERTICAL SCROLL

let galeria2 = gsap.utils.toArray(".projetos-item2");
const projetosGaleria2 = document.querySelector(".projetos2");

gsap.utils.toArray(".projetos-item2").forEach((projetos2) => {
  ScrollTrigger.create({
    trigger: projetos2,
    start: "top top",
    pin: true,
    pinSpacing: false,
    //snap: 1 / (galeria2.length - 1),
    scrub: 1,
  });
});

/// ANIMAÇÃO DENTRO DO VERTICAL PIN

const tl = gsap.timeline();

gsap.utils.toArray(".projetos-texto2").forEach((projetostexto) => {
  tl.fromTo(
    projetostexto,
    {
      autoAlpha: 0,
      x: -20,
    },
    {
      autoAlpha: 1,
      duration: 0.1,
      x: 0,
    }
  );
});

gsap.utils.toArray(".projetos-img2").forEach((projetosimg) => {
  tl.fromTo(
    projetosimg,
    {
      autoAlpha: 0,
      x: -20,
    },
    {
      autoAlpha: 1,
      duration: 0.1,
      x: 0,
    }
  );
});
