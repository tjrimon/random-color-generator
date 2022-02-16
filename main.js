//Random Color Generation Js File
// Author Name: TJ Rimon
// Version : 1.00
// Release Date: 16 feb 2022
document.getElementById('copy-btn').addEventListener('click', function () {
    const inputValue = document.getElementById('input')
    inputValue.select()
    navigator.clipboard.writeText(inputValue.value)
    document.getElementById('copy-btn').innerText = 'Copied'
})
document.getElementById('generate-color').addEventListener('click', function () {
    let red = Math.round(Math.random() * 255)
    let green = Math.round(Math.random() * 255)
    let blue = Math.round(Math.random() * 255)
    let hexaDesimalColor = ('#' + red.toString(16) + green.toString(16) + blue.toString(16))
    document.body.style.backgroundColor = hexaDesimalColor
    document.getElementById('input').value = hexaDesimalColor
    document.getElementById('copy-btn').innerText = 'Copy'
})