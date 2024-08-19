// gsap.to(".page2 h1", {
//     transform: "translateX(-120%)",
//     scrollTrigger: {
//         trigger: ".page2",
//         scroller: "body",
//         markers: true,
//         start: "top 0%",
//         end: "top -120%",
//         scrub: 2,
//         pin: true
//     }
// })

var initialPath = "M 10 100 Q 400 100 790 100"
var finalPath = "M 10 100 Q 364 100 790 100"

var string = document.querySelector('.string')
string.addEventListener("mousemove", (e) => {
    initialPath = `M 10 100 Q ${e.x} ${e.y} 790 100`
    gsap.to("svg path", {
        attr: { d: initialPath },
        duration: 0.1,
        ease: "power.out"
    })

})
string.addEventListener("mouseleave", (e) => {
    gsap.to("svg path", {
        attr: { d: finalPath },
        duration: 0.8,
        ease: "elastic.out(1,0.2)"
    })

})

