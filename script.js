let text1 = document.getElementById('input1');
let text2 = document.getElementById('input2');
let inverse = document.getElementById('switch')

function echange() {
    let a = text1.value;
    text1.value = text2.value;
    text2.value = a;
}

inverse.addEventListener("click", echange)