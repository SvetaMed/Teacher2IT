function onClickGenerate () {
    let min = +document.getElementById('min').value
    console.log(min)
    let max = +document.getElementById('max').value

    let res = generate(min,max)
    document.querySelector('.result').innerHTML = "Result: " + res
}

function generate (min, max) {
    return Math.round(Math.random()*(max-min)) + min
}