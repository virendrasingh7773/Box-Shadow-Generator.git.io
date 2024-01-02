let container = document.getElementById('main');
let dBody = container.parentElement;
let copyBtn = document.getElementById('copyBtn');
let checkBox = document.getElementById('checkBox');
let checkTick = document.getElementById('checkTick');

let elem = document.getElementById('element');
let code = document.getElementById('code');
let inputs = document.querySelectorAll('.sliders input');
inputs.forEach((inp) => inp.addEventListener('input', generateShadow))

function generateShadow(){
    let hShadow = document.getElementById('h-shadow').value;
    let vShadow = document.getElementById('v-shadow').value;
    let blurRadius = document.getElementById('blur-radius').value;
    let spreadRadius = document.getElementById('spread-radius').value;
    let shadowColor = document.getElementById('shadow-color').value;
    // console.log(shadowColor)
    let shadowColorOpacity = document.getElementById('shadow-color-opacity').value;
    let shadowInset = document.getElementById('shadow-inset').checked;
    let boxColor = document.getElementById('box-color').value;
    let bdrRadius = document.getElementById('border-radius').value;


    let boxShadow = shadowInset ? `inset ${hShadow}px ${vShadow}px ${blurRadius}px ${spreadRadius}px ${hextoRgba(shadowColor, shadowColorOpacity)}` : `${hShadow}px ${vShadow}px ${blurRadius}px ${spreadRadius}px ${hextoRgba(shadowColor, shadowColorOpacity)}`;

    elem.style.boxShadow = boxShadow;
    elem.style.background = boxColor;
    dBody.style.background = boxColor;
    // copyBtn.style.background = boxColor;
    checkBox.style.stroke = boxColor;
    checkTick.style.stroke = boxColor;
    elem.style.borderRadius = `${bdrRadius}px`;
    container.style.boxShadow = boxShadow;
    container.style.borderRadius = `${bdrRadius}px`;

    code.textContent = `box-shadow: ${boxShadow}; border-radius: ${bdrRadius}px;`

}

// copy to clipboard
function copyCode(){
    // code.select()
    // document.execCommand('copy')
    navigator.clipboard.writeText(code.textContent)
    // alert("Code Copied to Clipboard")
}


//Hex to Rgba 
function hextoRgba(shadowColor, shadowColorOpacity){
    let r = parseInt(shadowColor.substr(1,2),16)
    let g = parseInt(shadowColor.substr(3,2),16)
    let b = parseInt(shadowColor.substr(5,2),16)
    return  `rgba(${r}, ${g}, ${b}, ${shadowColorOpacity})`
}

// call the generateShadow function on every page load
window.onload = generateShadow()