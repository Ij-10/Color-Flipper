const button = document.querySelector('.btn')
const hex = document.querySelector('.hex')


button.addEventListener('click', randomColor)
hex.addEventListener('click', hexColor)


function randomColor(){
    const random = '#' + Math.floor(Math.random() * 16777215).toString(16);
    const hexOutput = document.querySelector('.span').innerHTML = random;
    document.body.style.backgroundColor = random;
    // console.log('button clicked')
}

function hexColor(){
    document.querySelector('.span').textContent = 'Hex'
}



