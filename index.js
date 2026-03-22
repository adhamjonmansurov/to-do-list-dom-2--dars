// const quti = document.querySelector('.box')

// function add(){
//     quti.classList.add('newbox')
// }
// function remove() {
//     quti.classList.remove('newbox')
// }
// function toggle() {
//     quti.classList.toggle('newbox')
// }

// const rasm = document.querySelector('.homepic')

// function rasmlar(url) {
//     rasm.setAttribute('src',url)
// }

// let input = document.getElementById("input");
// let todos = document.querySelector(".todos");

// function submitItem(e) {
//   e.preventDefault();
//   console.log("submitted", input.value);

//   const todoDiv = document.createElement("div");
//   todoDiv.setAttribute('class', 'todo')
//   todoDiv.innerHTML = `
//   <h2>${input.value}</h2>
//   <button onclick = 'del()'>del</button>
//   `;
//   todos.appendChild(todoDiv);
// }

// const text = document.querySelector('h1');
// text.textContent = 'DOM';

// const darslar = document.querySelectorAll('.i');
// console.log(darslar);

// darslar.forEach(val => {
//   val.textContent += ' darslari'
// });

// const soz = document.querySelector('h1')
// soz.innerHTML ='<u>yangi text<u/>'

// const names = [steve','jobs','tom','cruise']
// const ol = document.querySelector("ol")
// names.forEach(val => {
//   ol.innerHTML += `<li>${val}</li>`
// });
const input = document.querySelector(".input");
const form = document.querySelector(".form");
const ul = document.querySelector(".ul");
function sent(e) {
  e.preventDefault();
  const li = document.createElement("li");
  li.innerHTML = `<p>${input.value}</p>
    <button onclick= 'del(event)'>DEl</button>`;
  ul.appendChild(li);
}

function del(e) {
  e.target.parentElement.remove();
}
