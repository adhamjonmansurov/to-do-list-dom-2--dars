
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
