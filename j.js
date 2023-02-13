console.log("I am Working");

let Delete = (u) => {
    u.parentElement.remove()
}

let add = (i) => {
    let code = `<div id='dis'>
    <td> ${i.parentElement.children[1].innerHTML}  </td> 
    <td> <button id='j' onclick="Delete(this)"><i class="fa-solid fa-trash-can"></i></button> </td>
</div>`
    $('.show').append(code)
    document.getElementById('sj').scrollIntoView()
}