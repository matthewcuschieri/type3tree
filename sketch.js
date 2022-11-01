// $(function () {
//   $("#wrapper").click(function (e) {
//     e.preventDefault();
//     $(".viewport-one").replaceWith("<div class=viewport-two;'");
//   });
// });

$(function () {
  $(".bigB").click(function (e) {
    e.preventDefault();
    $(".secondbackB").toggle().css("display:show");
    $(".botsecond").replaceWith("<div class='sideback;]'");
  });
});
$(function () {
  $(".bigA").click(function (e) {
    e.preventDefault();
    $(".secondbackA").toggle().css("display:show");
    $(".topsecond").replaceWith("<div class='sideback;]'");
  });
});
// $(function () {
//   $(".square").click(function (e) {
//     e.preventDefault();
//     $(".viewport-two").replaceWith("<div class='viewport-three;]'");
//   });
// });
$(function () {
  $(".bigC").click(function (e) {
    e.preventDefault();
    $(".thirdbackC").toggle().css("display:show");
    $(".topthird").replaceWith("<div class='sideback;]'");
  });
});
$(function () {
  $(".bigD").click(function (e) {
    e.preventDefault();
    $(".thirdbackD").toggle().css("display:show");
    $(".botthird").replaceWith("<div class='sideback;]'");
  });
});
$(function () {
  $(".fig1").click(function (e) {
    e.preventDefault();
    $(".fourthcarousel").toggle().css("display:show");
    $(".topfourth").replaceWith("<div class='sideback;]'");
  });
});
$(function () {
  $(".fig2").click(function (e) {
    e.preventDefault();
    $(".fifthcarousel").toggle().css("display:show");
    $(".topfifth").replaceWith("<div class='sideback;]'");
  });
});
$(function () {
  $(".fig3").click(function (e) {
    e.preventDefault();
    $(".sixthcarousel").toggle().css("display:show");
    $(".topsixth").replaceWith("<div class='sideback;]'");
  });
});
$(function () {
  $(".fig4").click(function (e) {
    e.preventDefault();
    $(".seventhcarousel").toggle().css("display:show");
    $(".topseventh").replaceWith("<div class='sideback;]'");
  });
});
$(function () {
  $(".fig5").click(function (e) {
    e.preventDefault();
    $(".eigthcarousel").toggle().css("display:show");
    $(".topeigth").replaceWith("<div class='sideback;]'");
  });
});
$(function () {
  $(".fig6").click(function (e) {
    e.preventDefault();
    $(".ninthcarousel").toggle().css("display:show");
    $(".topninth").replaceWith("<div class='sideback;]'");
  });
});
$(function () {
  $(".fig7").click(function (e) {
    e.preventDefault();
    $(".tenthcarousel").toggle().css("display:show");
    $(".toptenth").replaceWith("<div class='sideback;]'");
  });
});
$(function () {
  $(".fig8").click(function (e) {
    e.preventDefault();
    $(".eleventhcarousel").toggle().css("display:show");
    $(".topeleventh").replaceWith("<div class='sideback;]'");
  });
});
$(function () {
  $(".fig9").click(function (e) {
    e.preventDefault();
    $(".twelthcarousel").toggle().css("display:show");
    $(".toptwelth").replaceWith("<div class='sideback;]'");
  });
});

$(function () {
  $(".bigE").click(function (e) {
    e.preventDefault();
    $(".thirteenthbackE").toggle().css("display:show");
    $(".topthirteenth").replaceWith("<div class='sideback;]'");
  });
});
$(function () {
  $(".bigF").click(function (e) {
    e.preventDefault();
    $(".thirteenthbackF").toggle().css("display:show");
    $(".botthirteenth").replaceWith("<div class='sideback;]'");
  });
});
$(function () {
  $(".bigG").click(function (e) {
    e.preventDefault();
    $(".fourteenthbackG").toggle().css("display:show");
    $(".topfourteenth").replaceWith("<div class='sideback;]'");
  });
});
$(function () {
  $(".bigHI").click(function (e) {
    e.preventDefault();
    $(".fourteenthbackHI").toggle().css("display:show");
    $(".botfourteenth").replaceWith("<div class='sideback;]'");
  });
});
$(function () {
  $(".bigJ").click(function (e) {
    e.preventDefault();
    $(".fifteenthbackJ").toggle().css("display:show");
    $(".topfifteenth").replaceWith("<div class='sideback;]'");
  });
});
$(function () {
  $(".bigK").click(function (e) {
    e.preventDefault();
    $(".fifteenthbackK").toggle().css("display:show");
    $(".botfifteenth").replaceWith("<div class='sideback;]'");
  });
});
$(function () {
  $(".bigL").click(function (e) {
    e.preventDefault();
    $(".seventeenthbackL").toggle().css("display:show");
    $(".topseventeenth").replaceWith("<div class='sideback;]'");
  });
});
$(function () {
  $(".bigM").click(function (e) {
    e.preventDefault();
    $(".seventeenthbackM").toggle().css("display:show");
    $(".botseventeenth").replaceWith("<div class='sideback;]'");
  });
});
$(function () {
  $(".fig10").click(function (e) {
    e.preventDefault();
    $(".eighteenthcarousel").toggle().css("display:show");
    $(".topeighteenth").replaceWith("<div class='sideback;]'");
  });
});
$(function () {
  $(".fig11").click(function (e) {
    e.preventDefault();
    $(".nineteenthcarousel").toggle().css("display:show");
    $(".topnineteenth").replaceWith("<div class='sideback;]'");
  });
});

const wrapper = document.getElementById("wrapperviewport");

gsap.registerPlugin(ScrollTrigger);

ScrollTrigger.create({
  trigger: wrapper,
  pin: true,
  start: "top top",
  end: "bottom bottom",
  markers: true,
});

let viewports = gsap.utils.toArray(".viewport");

viewports.forEach((viewport, i) => {
  if (i + 1 < viewports.length) {
    console.log(viewports[i + 1].id);
    let begTl = gsap.timeline({
      scrollTrigger: {
        trigger: document.body,
        start: () => `top+=${i * window.innerHeight} top`,
        end: () => `top+=${(i + 1) * window.innerHeight} top`,
        markers: true,
        toggleActions: "play none none reverse",
      },
    });
    begTl.fromTo(
      "#" + viewports[i].id,
      {
        display: "grid",
      },
      {
        display: "none",
        opacity: 0,
        duration: 0.01,
      }
    );

    begTl.fromTo(
      "#" + viewports[i + 1].id,
      {
        opacity: 0,
        display: "none",
      },
      {
        opacity: 1,
        duration: 0.01,

        display: "grid",
      }
    );
  }
});

viewports[0].style.opacity = 1;

// Logo to header animation
// let begTl = gsap.timeline({
//   scrollTrigger: {
//     trigger: document.body,
//     start: `top+=${window.innerHeight} top`,
//     end: `top+=${2 * window.innerHeight} top`,
//     markers: true,
//     toggleActions: "play none none reverse",
//   },
// });
// begTl.fromTo(
//   "#viewport-one",
//   {
//     opacity: 1,
//     display: "grid",
//   },
//   {
//     display: "none",
//     opacity: 0,
//     duration: 0.01,
//   }
// );

// begTl.fromTo(
//   "#viewport-two",
//   {
//     opacity: 0,
//     display: "none",
//   },
//   {
//     opacity: 1,
//     duration: 0.01,

//     display: "grid",
//   }
// );

// let laterTl = gsap.timeline({
//   scrollTrigger: {
//     trigger: "#viewport-two",
//     start: 300,
//     end: "+=" + window.innerHeight - 1,
//     markers: true,
//     pin: wrapper,
//     toggleActions: "play none none reverse",
//   },
// });
// laterTl.fromTo(
//   "#viewport-three",
//   {
//     opacity: 0,
//     display: "none",
//   },
//   {
//     opacity: 1,
//     duration: 0.01,

//     display: "grid",
//   }
// );
