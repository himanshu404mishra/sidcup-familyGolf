let cur = document.querySelector("#cursor");
let blur = document.querySelector("#cursor-blur");

const throttleFunction = (func, delay) => {
  let prev = 0;
  return (...args) => {
    let now = new Date().getTime();
    if (now - prev > delay) {
      prev = now;

      return func(...args);
    }
  };
};

document.addEventListener(
  "mousemove",
  throttleFunction(function (e) {
    cur.style.left = e.clientX - cur.getBoundingClientRect().width / 2 + "px";
    cur.style.top = e.clientY - cur.getBoundingClientRect().height / 2 + "px";
    blur.style.left = e.clientX - blur.getBoundingClientRect().width / 2 + "px";
    blur.style.top = e.clientY - blur.getBoundingClientRect().height / 2 + "px";
  }, 100)
);

let h4all = document.querySelectorAll("#nav h4");
h4all.forEach((elem) => {
  elem.addEventListener("mouseenter", function () {
    cur.style.scale = 3;
    cur.style.border = "0.03px solid #fff";
    cur.style.backgroundColor = "transparent";
    cur.style.zIndex = "10";
    document.addEventListener(
      "mousemove",
      throttleFunction(function (e) {
        cur.style.left =
          e.clientX - cur.getBoundingClientRect().width / 3 / 2 + "px";
        cur.style.top =
          e.clientY - cur.getBoundingClientRect().height / 3 / 2 + "px";
      }, 100)
    );
  });
  elem.addEventListener("mouseleave", function () {
    cur.style.scale = 1;
    cur.style.border = "0px solid transparent";
    cur.style.backgroundColor = "#95C11E";
    cur.style.zIndex = "12";

    document.addEventListener(
      "mousemove",
      throttleFunction(function (e) {
        cur.style.left =
          e.clientX - cur.getBoundingClientRect().width / 2 + "px";
        cur.style.top =
          e.clientY - cur.getBoundingClientRect().height / 2 + "px";
      }, 100)
    );
  });
});

gsap.to("#nav", {
  backgroundColor: "#000",
  height: "110px",
  duration: 0.5,
  scrollTrigger: {
    trigger: "#nav",
    scroller: "body",
    // markers: true,
    start: "top -10%",
    end: "top -11%",
    scrub: 1,
  },
});

gsap.to("#main", {
  backgroundColor: "#000",
  scrollTrigger: {
    trigger: "#main",
    scroller: "body",
    // markers: true,
    start: "top -25%",
    end: "top -70%",
    scrub: 1,
  },
});

gsap.from("#about-us img, #about-us-in", {
  y: 50,
  opacity: 0,
  duration: 1,
  scrollTrigger: {
    trigger: "#about-us",
    scroller: "body",
    // marker: true,
    start: "top 60%",
    end: "top 55%",
    scrub: 1,
  },
});
gsap.from(".card", {
  scale: 0.8,
  opacity: 0,
  duration: 5,
  stagger: 0.1,
  scrollTrigger: {
    trigger: ".card",
    scroller: "body",
    // marker: true,
    start: "top 70%",
    end: "top 65%",
    scrub: 3,
  },
});

gsap.from("#colon1", {
  y: -70,
  x: -70,
  scrollTrigger: {
    trigger: "#colon1",
    scroller: "body",
    // markers: true,
    start: "top 55%",
    end: "top 45%",
    scrub: 4,
  },
});
gsap.from("#colon2", {
  y: 70,
  x: 70,
  scrollTrigger: {
    trigger: "#colon1",
    scroller: "body",
    // markers: true,
    start: "top 55%",
    end: "top 45%",
    scrub: 4,
  },
});

gsap.from("#page4 h1", {
  y: 40,
  scrollTrigger: {
    trigger: "#page4 h1",
    scroller: "body",
    // markers:true,
    start: "top 75%",
    end: "top 70%",
    scrub: 3,
  },
});

// let page2_height=document.querySelector("#page2").getBoundingClientRect().height;


document.querySelector("#page2").addEventListener("mousemove", function (e) {
  let container_location= document.querySelector("#cards-container").getBoundingClientRect();
  
  let mouseLocationY = e.clientY - container_location.top;
  let mouseLocationX = e.clientX - container_location.left;

  if (mouseLocationY < container_location.height / 2 || mouseLocationX < container_location.width / 2 ) {
    // left side
    let degX = gsap.utils.mapRange(
      document.querySelector("#page2").getBoundingClientRect().top,
      container_location.width / 2,
      45,
      -45,
      mouseLocationY
    );
    let degY = gsap.utils.mapRange(
      document.querySelector("#page2").getBoundingClientRect().left,
      container_location.width / 2,
      -10,
      20,
      mouseLocationX
    );
    gsap.to(".card", {
      transform: `rotateX(${degX}deg) rotateY(${degY}deg)`,
      ease: Power4,
    });
    console.log(deg);
  } 

});
