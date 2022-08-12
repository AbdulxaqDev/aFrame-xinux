colors = ['#161718', '#050F1A', '#08192C', '#0A1E36', '#0C2440', '#0E2B4D', '#11365F', '#144173', '#2C588A', '#366EAE', '#498CD7', "#498CD7", "#366EAE", "#2C588A", "#144173", "#11365F", "#0E2B4D", "#0C2440", "#0A1E36", "#08192C", "#050F1A", "#161718"]

const yellowCircle = document.getElementById('yellow-circle')
const xinux = document.getElementById('xinux')
const uz = document.getElementById('uz')
const centerBox = document.getElementById('center-box')
const box = document.getElementsByClassName('box')
const images = ["./images/2.jpg", "./images/3.jpg", "./images/black_texture.jpg",]
const body = document.getElementsByName('body')
let imageNum = 0
let rotateX = 0;
let colorTiming = 0
let registerTexture = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]

setInterval(() => {
    if (rotateX == 360) {
        rotateX = 0
    } else {
        rotateX += 1
        yellowCircle.setAttribute('rotation', `0 ${rotateX} 0`)
    }
}, 40);

for (let i = 0; i < 13; i++) {
    box[i].setAttribute('animation__mouseenter', "property: components.material.material.color; type: color; to: red; startEvents: mouseenter; dur: 200;")
    box[i].setAttribute('animation__mouseleave', "property: components.material.material.color; type: color; to: white; startEvents: mouseleave; dur: 200;")
    box[i].setAttribute('src', `./images/black_texture.jpg`)
    box[i].setAttribute('color', `#fff`)
    box[i].addEventListener("click", () => {

        box[i].setAttribute('src', images[registerTexture[i]])
        if (registerTexture[i] == 3) {
            registerTexture[i] = 0
        } else {
            registerTexture[i]++
        }
    })
}

xinux.addEventListener('click', () => {
    window.open('https://www.xinux.uz/', '_blank')
})
uz.addEventListener('click', () => {
    window.open('https://uzinfocom.uz/', '_blank')
})

