const hex = [0, 1, 2, 3, 4, 5 ,6 ,7 , 8 ,9, "A", "B", "C", "D", "E", "F"]
const btn = document.getElementById("btn")
const color = document.querySelector(".color")

btn.addEventListener('click', () =>{
    let hexColor='#'
    for(let i=0;i<6;i++){
        hexColor=hexColor+hex[getRandomNumber()]
    }
    color.textContent = hexColor
    document.body.style.backgroundColor=hexColor
})


function getRandomNumber(){
    console.log(Math.floor(Math.random()*hex.length))
    return Math.floor(Math.random()*hex.length)
}