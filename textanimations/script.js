let breakText = () => {
    var h1 = document.querySelector('h1')
    var h1Text = document.querySelector('h1').textContent
    let splittedText = h1Text.split("")

    var clutter = ""
    splittedText.forEach((e) => {
        clutter += `<span>${e}</span>`
    })

    h1.innerHTML = clutter
}

breakText()

gsap.from("h1 span", {
    y: 70,
    duration: 0.7,
    opacity: 0,
    stagger: 0.1,
    // ease: "elastic.out(1,0.2)"
})