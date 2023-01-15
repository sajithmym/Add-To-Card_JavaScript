console.log("I am Working");

let Delete = (u) => {
    u.parentElement.remove()
}

let add = (i) => {
    let code = `<div id='dis'>
    <li> ${i.parentElement.children[1].innerHTML} </li> <button id='j' onclick="Delete(this)"><i class="fa-solid fa-trash-can"></i></button>
</div>`
    $('.show').append(code)
    document.getElementById('sj').scrollIntoView()
}