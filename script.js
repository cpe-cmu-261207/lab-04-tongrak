const cout = console.log

// const clickCallback = () => {
//     cout("Hey, you just click")
// const p1 = document.querySelector('p')
// p1.innerHTML = "Hey! I just change"
// const pArr = document.querySelectorAll('p')
// for (const p of pArr) {
//     p.innerHTML = "HEYYYYYYYYYYYYYYYY"
// }
// const BodyColour = document.querySelector('body')
// BodyColour.style.backgroundColor = 'green'
//     const inpu = document.querySelector('input').value
//     document.querySelector('body').style.backgroundColor = input
// }
// const changeCallback = (eve) => {
//const inpu = document.querySelector('input').value
//     document.querySelector('p').innerHTML = eve.target.value
//     cout(eve.target.value)
//     document.querySelector('body').style.backgroundColor = eve.target.value

// }

// document.body.append('<h1>Hello World</h1>')
// const h1ex = document.createElement('h1')
// h1ex.innerHTML = "XD"
// document.body.append(h1ex)

// const div = document.createElement('div')
// div.append(document.createElement('h1').innerHTML = "XD")
// div.append(document.createElement('h2').innerHTML = "XD too")
// document.body.append(div)

// div.removeChild(div.childNodes[0])
// const img = document.createElement('img')
// img.setAttribute('src', 'https://i.pximg.net/img-master/img/2021/05/01/11/02/58/89509153_p0_master1200.jpg')
// img.width = 200
// document.body.append(img)
// img.removeAttribute('width')

// const btn = document.createElement('button')
// btn.innerHTML = 'CX'
// document.body.append(btn)
// btn.addEventListener('click', () => {
//     btn.innerHTML = "You click?"
// })

// const input = document.createElement('input')
// document.body.append(input)
// input.addEventListener('input', ev => {
//     btn.innerHTML = ev.target.value
// })

// const tabl = document.querySelector('ul')

// const AddTask = () => {
//     const inpu = document.querySelector('input').value
//     cout(inpu)
//     // addEventListener('input', er => {
//     //     tabl.append(document.createElement('li').innerHTML = er)
//     // })
//     const tempLi = document.createElement('li')
//     tempLi.innerHTML = inpu
//     tabl.appendChild(tempLi)
// }

// const RandomDoggo = async () => {
//     const buttonC = document.querySelector('button')
//     buttonC.innerHTML = 'loading'
//     const resp =  await fetch('https://dog.ceo/api/breeds/image/random')
//     const pic = await resp.json()
//     const img = document.querySelector('#imgDog')
//     cout(pic.message)
//     img.src = pic.message
//     buttonC.disabled = true
// }

// const onImageLoaded = () => {
//     const buttonC = document.querySelector('button')
//     buttonC.innerHTML = 'RandomDoggo'
//     buttonC.disabled = false
// }

const cursorCheck = () =>{
    cout("Taskbox: you here, hi!!")
}


const EnteringInput = () => {
    cout("JS: you just add some thing")
    const taskIn = document.getElementById("TaskInput").value
    //const taskIn = document.querySelector('input').value
    const taskFr = document.createElement('p')
    taskFr.style.border = "thin solid black" 
    taskFr.style.textAlign = "center"
    taskFr.addEventListener("mouseover", cursorCheck)
    taskFr.innerHTML = taskIn
    document.getElementById("TaskBox").append(taskFr)
}