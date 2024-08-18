gsap.to("div.box1 ", {
    x: 1000, duration: 2,
    rotate: 360 * 3,
    yoyo: true,
    repeat: 1,
    delay: 1,
    scale: 0.6
})
var tl = gsap.timeline()


tl.from("ul.logo li", {
    y: -30, duration: 0.6, opacity: 0
})

tl.from("ul.navlinkp li", {
    y: -30, duration: 0.6, opacity: 0,
    stagger:0.3
})