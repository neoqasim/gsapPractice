let breakText = () => {
    var h1 = document.querySelector('h1')
    var h1Text = document.querySelector('h1').textContent
    let splittedText = h1Text.split("")
    let clutter = ""
    let halfVal = splittedText.length / 2


    splittedText.forEach((e, index) => {
        if (halfVal > index) {
            clutter += `<span class="a">${e}</span>`
        } else {
            clutter += `<span class="b">${e}</span>`

        }
    })
    console.log(clutter);

    h1.innerHTML = clutter
}

breakText()

gsap.from("h1 span.a", {
    y: 70,
    duration: 0.5,
    opacity: 0,
    stagger: 0.1,
    ease: "back.out"
})
gsap.from("h1 span.b", {
    y: 70,
    duration: 0.5,
    opacity: 0,
    stagger: -0.1,
    ease: "back.out"
})