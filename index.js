const btnDec = document.getElementById('button_dec');
const btnInc = document.getElementById('button_inc');
const counter = document.getElementById('counter');
const input = document.getElementById('input');
const btnInput = document.getElementById('input_button');


document.addEventListener('DOMContentLoaded', () => {
    fetch('/getcount')
        .then(data => data.json())
        .then(data => counter.innerHTML = data.count)
        .catch(error => console.log(error))
})

btnInput.addEventListener('click', () => {
    if (!input.value) {
        alert("Enter the value")
        return
    }
    fetch('/setcount', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            count: input.value 
        })
    })
        .then(data => data.json())
        .then(data => counter.innerHTML = data.count)
        .catch(error => console.log(error))
})
btnDec.addEventListener('click', () => {
    fetch('/dec', {
        method: 'POST'
    })
        .then(data => data.json())
        .then(data => counter.innerHTML = data.count)
        .catch(error => console.log(error))
})
btnInc.addEventListener('click', () => {
    fetch('/inc', {
        method: 'POST'
    })
        .then(data => data.json())
        .then(data => counter.innerHTML = data.count)
        .catch(error => console.log(error))
})