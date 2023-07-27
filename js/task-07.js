function updateFontSize() {
    const fontSizeControl = document.getElementById('font-size-control');
    const textSpan = document.getElementById('text');
    textSpan.style.fontSize = fontSizeControl.value + 'px';
}

const fontSizeControl = document.getElementById('font-size-control');
fontSizeControl.addEventListener('input', updateFontSize);


updateFontSize();
window.addEventListener('load', updateFontSize);