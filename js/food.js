let circle1 = document.querySelector(".circles div:first-child")
let circle2 = document.querySelector(".circles div:nth-child(2)")
let circle3 = document.querySelector(".circles div:nth-child(3)")
let circle4 = document.querySelector(".circles div:last-child")
let img1 = document.querySelector("section .box img:first-of-type")
let img2 = document.querySelector("section .box img:nth-of-type(2)")
let img3 = document.querySelector("section .box img:nth-of-type(3)")
let img4 = document.querySelector("section .box img:last-of-type")

circle2.onclick = function () {
    img2.classList.add("active")
    circle2.style.background = "var(--mainColor)"
    if (img3.classList.contains("active") === true) {
        img3.classList.remove("active")
        circle3.style.background = "white"
    }else if (img4.classList.contains("active") === true) {
        img4.classList.remove("active")
        circle4.style.background = "white"
    }else {
        img1.classList.add("opacity")
        circle1.style.background = "white"
    }
}
circle3.onclick = function () {
    img3.classList.add("active")
    circle3.style.background = "var(--mainColor)"
    if (img2.classList.contains("active") === true) {
        img2.classList.remove("active")
        circle2.style.background = "white"
    }else if (img4.classList.contains("active") === true) {
        img4.classList.remove("active")
        circle4.style.background = "white"
    }else {
        img1.classList.add("opacity")
        circle1.style.background = "white"
    }
}
circle4.onclick = function () {
    img4.classList.add("active")
    circle4.style.background = "var(--mainColor)"
    if (img2.classList.contains("active") === true) {
        img2.classList.remove("active")
        circle2.style.background = "white"
    }else if (img3.classList.contains("active") === true) {
        img3.classList.remove("active")
        circle3.style.background = "white"
    }else {
        img1.classList.add("opacity")
        circle1.style.background = "white"
    }
}
circle1.onclick = function () {
    img1.classList.remove("opacity")
    circle1.style.background = "var(--mainColor)"
    if (img2.classList.contains("active") === true) {
        img2.classList.remove("active")
        circle2.style.background = "white"
    }else if (img3.classList.contains("active") === true) {
        img3.classList.remove("active")
        circle3.style.background = "white"
    }else {
        img4.classList.remove("active")
        circle4.style.background = "white"
    }
}
/*product section*/
let btn1 = document.querySelector(".moving div:first-child")
let btn2 = document.querySelector(".moving div:nth-child(2)")
let btn3 = document.querySelector(".moving div:last-child")
let section1 = document.querySelector(".product .son.one")
let section2 = document.querySelector(".product .son.two")
let section3 = document.querySelector(".product .son.three")

btn2.onclick = function () {
    section3.classList.remove("active")
    section1.classList.remove("active")
    section2.classList.add("active")
    btn2.style.background = "var(--mainColor)"
    if (btn1.style.background === "var(--mainColor)") {
        btn1.style.background = "white"
    } else {
        btn3.style.background = "white"
    }
}
btn3.onclick = function () {
    section1.classList.remove("active")
    section2.classList.remove("active")
    section3.classList.add("active")
    btn3.style.background = "var(--mainColor)"
    if (btn2.style.background === "var(--mainColor)") {
        btn2.style.background = "white"
    } else {
        btn1.style.background = "white"
    }
}
btn1.onclick = function () {
    section3.classList.remove("active")
    section2.classList.remove("active")
    section1.classList.add("active")
    btn1.style.background = "var(--mainColor)"
    if (btn2.style.background === "var(--mainColor)") {
        btn2.style.background = "white"
    } else {
        btn3.style.background = "white"
    }
}
/*product section*/
let box1 = document.querySelector(".product .container .son  .box:first-child")
let box2 = document.querySelector(".product .container .son  .box:nth-child(2)")
let box3 = document.querySelector(".product .container .son  .box:nth-child(3)")
let box4 = document.querySelector(".product .container .son  .box:last-child")
let service = document.querySelector(".service")
let about = document.querySelector(".about")
let body = document.querySelector("body")

window.addEventListener("scroll" , function () {
    if (window.scrollY >= (section1.offsetTop + 800)) {
        box3.style.cssText = "animation: moving2 2s ease ;"
        box4.style.cssText = "animation: moving2 1.5s ease ;"
        box1.style.cssText = "animation: moving2 3s ease ;"
        box2.style.cssText = "animation: moving2 2.5s ease ;"
    }else {
        box1.style.cssText = "animation: none ;"
        box2.style.cssText = "animation: none ;"
        box3.style.cssText = "animation: none ;"
        box4.style.cssText = "animation: none ;"
    }
    if (window.scrollY >= about.offsetTop - 50) {
        service.style.cssText = "animation: moving2 2s ease; animation-fill-mode: forwards;"
    }else {
        service.style.cssText = "animation: none;"
    }
})
/*resposive*/
let listBtn = document.querySelector("header .list")
let list = document.querySelector("header ul")
listBtn.onclick = function () {
    list.classList.toggle("active")
}
let listBtn2 = document.querySelector("footer .list")
let list2 = document.querySelector("footer ul")
listBtn2.onclick = function () {
    list2.classList.toggle("active")
}
/*resposive*/


