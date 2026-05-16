const alphabetList =
    [['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z', 'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'], 
    ['А', 'Б', 'В', 'Г', 'Д', 'Е', 'Ё', 'Ж', 'З', 'И', 'Й', 'К', 'Л', 'М', 'Н', 'О', 'П', 'Р', 'С', 'Т', 'У', 'Ф', 'Х', 'Ц', 'Ч', 'Ш', 'Щ', 'Ъ', 'Ы', 'Ь', 'Э', 'Ю', 'Я', 'а', 'б', 'в', 'г', 'д', 'е', 'ё', 'ж', 'з', 'и', 'й', 'к', 'л', 'м', 'н', 'о', 'п', 'р', 'с', 'т', 'у', 'ф', 'х', 'ц', 'ч', 'ш', 'щ', 'ъ', 'ы', 'ь', 'э', 'ю', 'я'], 
    ['Α', 'Β', 'Γ', 'Δ', 'Ε', 'Ζ', 'Η', 'Θ', 'Ι', 'Κ', 'Λ', 'Μ', 'Ν', 'Ξ', 'Ο', 'Π', 'Ρ', 'Σ', 'Τ', 'Υ', 'Φ', 'Χ', 'Ψ', 'Ω', 'α', 'β', 'γ', 'δ', 'ε', 'ζ', 'η', 'θ', 'ι', 'κ', 'λ', 'μ', 'ν', 'ξ', 'ο', 'π', 'ρ', 'σ', 'τ', 'υ', 'φ', 'χ', 'ψ', 'ω'], 
    ['ش', 'س', 'ز', 'ر', 'ذ', 'د', 'خ', 'ح', 'ج', 'ث', 'ت', 'ب', 'ا', 'ء', 'ي', 'و', 'ه', 'ن', 'م', 'ل', 'ك', 'ق', 'ف', 'غ', 'ع', 'ظ', 'ط', 'ض', 'ص', 'ى', 'ئ', 'ؤ', 'ة', '٠' ,'١' ,'٢' ,'٣' ,'٤' ,'٥' ,'٦' ,'٧' ,'٨' ,'٩'],
    ['あ', 'か', 'さ', 'た', 'な', 'は', 'ま', 'や', 'ら', 'わ', 'が', 'ざ', 'だ', 'ば', 'ぱ', 'い', 'き', 'し', 'ち', 'に', 'ひ', 'み', 'り', 'ぎ', 'じ', 'ぢ', 'び', 'ぴ', 'う', 'く', 'す', 'つ', 'ぬ', 'ふ', 'む', 'ゆ', 'る', 'ぐ', 'ず', 'づ', 'ぶ', 'ぷ', 'え', 'け', 'せ', 'て', 'ね', 'へ', 'め', 'れ', 'げ', 'ぜ', 'で', 'べ', 'ぺ', 'お', 'こ', 'そ', 'と', 'の', 'ほ', 'も', 'よ', 'ろ', 'を', 'ご', 'ぞ', 'ど', 'ぼ', 'ぽ', 'ん'], 
    ['ア', 'カ', 'サ', 'タ', 'ナ', 'ハ', 'マ', 'ヤ', 'ラ', 'ワ', 'ガ', 'ザ', 'ダ', 'バ', 'パ', 'イ', 'キ', 'シ', 'チ', 'ニ', 'ヒ', 'ミ', 'リ', 'ギ', 'ジ', 'ヂ', 'ビ', 'ピ', 'ウ', 'ク', 'ス', 'ツ', 'ヌ', 'フ', 'ム', 'ユ', 'ル', 'グ', 'ズ', 'ヅ', 'ブ', 'プ', 'エ', 'ケ', 'セ', 'テ', 'ネ', 'ヘ', 'メ', 'レ', 'ゲ', 'ゼ', 'デ', 'ベ', 'ペ', 'オ', 'コ', 'ソ', 'ト', 'ノ', 'ホ', 'モ', 'ヨ', 'ロ', 'ヲ', 'ゴ', 'ゾ', 'ド', 'ボ', 'ポ', 'ン']
    ];

const alphabetNames = 
    ['Latin', 'Cyrillic', 'Greek', 'Arabic', 'Hiragana', 'Katakana'];

const charList = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '0', '.', ',', '-', '!', '#', '$', '&', '(', ')', '*', ';', ':', '?', '@', '[', ']', '^', '_', '~', '{', '}', '|', '+', '=', '<', '>', '/', '\\', '%', '£', '¢', '§', '€', '₽', '¥'];

const fontList =
    ["Arial, Helvetica, sans-serif",
    '"Courier New", Courier, monospace',
    '"Gill Sans", "Gill Sans MT", Calibri, "Trebuchet MS", sans-serif',
    '"Segoe UI", Tahoma, Geneva, Verdana, sans-serif',
    '"Times New Roman", Times, serif',
    'Verdana, Geneva, Tahoma, sans-serif'
    ];

const fontNames = 
    ['Arial',
    'Courier New',
    'Gill Sans',
    'Segoe UI',
    'Times New Roman',
    'Verdana'
    ];

const maxSize = 1600;
const minSize = 15;
const maxScale = 20;
const maxCount = 99999;

let modifierLvl = 1;
let modifierMove;
let modifierSize;
let modifierRotate;
let modifierStretch;

let dragPreviewX = 0;
let dragPreviewY = 0;

let dragStartX, dragStartY;
let dragStartPositions = [];
let dragHappened = false;

let selectionBox;
let dragBoxStartX, dragBoxStartY;
let dragBoxCreated = false;

let mirrorIdCounter = 1;
let globalMirrorMode = 'OFF';
let mirrorMode = 'OFF';

const currentColors = new Set();
let colorLvl = 0;

let objCount = 0;
let alphabetLvl = 0;
let fontLvl = 0;
let zIndexCounter = 1;

let elements = [];

let selection = null;
let selectionList = [];
let mirrorSelectList = false;
let maybeSelect = [];

let selectionCenter = {
    x: 0,
    y: 0
};
let newSelectionCenter = false;

let previewElement = null;
let currentPreviewButton = null;

let pressingKey = false;
let scrollTimeout = null;
let dontSave = false;

let undoStack = [];
let redoStack = [];

let menuOpened = false;
let imageShared = false;

const canvas = document.getElementById('canvas');
let canvasRect;

const maskCanvas = document.createElement('canvas');
maskCanvas.width = canvas.clientWidth;
maskCanvas.height = canvas.clientHeight;
const maskCtx = maskCanvas.getContext('2d');
maskCtx.imageSmoothingEnabled = false;
let maskDirty = false;

const colorToId = new Map();

const downloadCanvas = document.createElement('canvas');
const downloadCtx = downloadCanvas.getContext('2d');
downloadCanvas.width = canvas.clientWidth;
downloadCanvas.height = canvas.clientHeight;
updateDownloadCanvas();

const objCounter = document.getElementById('objCount');
//const mirrorMessage = document.getElementById('mirrorMode');
const alphabetMessage = document.getElementById('alphabetMessage');
const fontMessage = document.getElementById('fontMessage');

const modSmallBtn = document.getElementById('modSmall');
const modMediumBtn = document.getElementById('modMedium');
const modBigBtn = document.getElementById('modBig');

const Lbutton = document.getElementById('Lbutton');
const Rbutton = document.getElementById('Rbutton');
const Ubutton = document.getElementById('Ubutton');
const Dbutton = document.getElementById('Dbutton');

const hiddenTopBtn = document.getElementById('hiddenTop');

const sizeUpBtn = document.getElementById('sizeUp');
const sizeDownBtn = document.getElementById('sizeDown');

const stretchHBtn = document.getElementById('stretchH');
const stretchVBtn = document.getElementById('stretchV');

const rotateUpBtn = document.getElementById('rotateUp');
const rotateDownBtn = document.getElementById('rotateDown');

const flipHBtn = document.getElementById('flipH');
const flipVBtn = document.getElementById('flipV');

const clearButton = document.getElementById('clear');
const delButton = document.getElementById('delete');
const copyButton = document.getElementById('copy');

const undoBtn = document.getElementById('undo');
const redoBtn = document.getElementById('redo');

//const deselectBtn = document.getElementById('deselect');
const mirrorButton = document.getElementById('mirror');
const downloadBtn = document.getElementById('download');

const mirrorOff = document.getElementById('mirrorOff');
const mirrorOn = document.getElementById('mirrorOn');

const chosenColor = document.getElementById('currentColor');
const bgColor = document.getElementById('bgColor');

const colorUpBtn = document.getElementById('colorsUp');
const colorDownBtn = document.getElementById('colorsDown');
const colorList = document.getElementById('usedColors');
const fullColorList = document.getElementById('colorList');

const alphabet = document.getElementById('alphabet');

const alphabetUpBtn = document.getElementById('alphabetUp');
const alphabetDownBtn = document.getElementById('alphabetDown');
const replaceLetterBtn = document.getElementById('replaceLetter');

const fontUpBtn = document.getElementById('fontUp');
const fontDownBtn = document.getElementById('fontDown');
const fontOneBtn = document.getElementById('fontOne');
const fontAllBtn = document.getElementById('fontAll');

const infoBtn = document.getElementById('info');

const backBtn = document.getElementById('back');
const saveBtn = document.getElementById('save');


const imgStatus = document.getElementById('status');


window.addEventListener('beforeunload', saveState);

document.addEventListener('wheel', e => {
    if (e.ctrlKey) e.preventDefault();
}, {passive: false});

document.addEventListener('keydown', e => {
    if ((e.ctrlKey || e.metaKey) && ['+', '-', '='].includes(e.key)) e.preventDefault();
});

document.addEventListener('mousedown', function (e) {
    if (bgColor.classList.contains('buttonSelected')) {
        if (!(e.target.classList.contains('picker')) && !(e.target.classList.contains('colorPicker')) && !(e.target.classList.contains('colorBlock'))) {
            bgColor.classList.remove('buttonSelected');
        }
    }
    if (replaceLetterBtn.classList.contains('buttonSelected')) {
        if (e.currentTarget != replaceLetterBtn) {
            canvasRect = canvas.getBoundingClientRect();
            if (e.clientX >= canvasRect.left && e.clientX <= canvasRect.right && e.clientY >= canvasRect.top && e.clientY <= canvasRect.bottom) {
                const colorEl = getColorFromMask(e);
                if (!colorEl) selectButton(e, replaceLetterBtn);
            }
            else if (!e.target.classList.contains('preview')) selectButton(e, replaceLetterBtn);
        }
        else selectButton(e, replaceLetterBtn);
    }
});

canvas.addEventListener('click', (e) => {
    if (!dragHappened && !e.shiftKey) deselect();
});
canvas.addEventListener('wheel', changeSizeScroll);
canvas.addEventListener('mousedown', (e) => {
    if (!e.shiftKey) startDragSelection(e);
});

clearButton.addEventListener('click', clearAll);
delButton.addEventListener('click', deleteElement);
copyButton.addEventListener('click', copy);

undoBtn.addEventListener('click', undo);
redoBtn.addEventListener('click', redo);

modSmallBtn.addEventListener('click', () => changeModifier(0));
modMediumBtn.addEventListener('click', () => changeModifier(1));
modBigBtn.addEventListener('click', () => changeModifier(2));

Lbutton.addEventListener('click', () => {move(-modifierMove, 0); maskDirty = true; saveState();});
Rbutton.addEventListener('click', () => {move(modifierMove, 0); maskDirty = true; saveState();});
Ubutton.addEventListener('click', () => {move(0, -modifierMove); maskDirty = true; saveState();});
Dbutton.addEventListener('click', () => {move(0, modifierMove); maskDirty = true; saveState();});

hiddenTopBtn.addEventListener('click', bringHiddenToTop);

sizeUpBtn.addEventListener('click', () => {changeSize(modifierSize); maskDirty = true; saveState();});
sizeDownBtn.addEventListener('click', () => {changeSize(-modifierSize); maskDirty = true; saveState();});

stretchHBtn.addEventListener('click', () => {stretch(modifierStretch); maskDirty = true; saveState();});
stretchVBtn.addEventListener('click', () => {stretch(-modifierStretch); maskDirty = true; saveState();});

rotateUpBtn.addEventListener('click', () => {rotate(modifierRotate); maskDirty = true; saveState();});
rotateDownBtn.addEventListener('click', () => {rotate(-modifierRotate); maskDirty = true; saveState();});

flipHBtn.addEventListener('click', () => {flip(-1, 1); maskDirty = true; saveState();});
flipVBtn.addEventListener('click', () => {flip(1, -1); maskDirty = true; saveState();});

//deselectBtn.addEventListener('click', deselect);
mirrorButton.addEventListener('click', changeMirrorMode);
downloadBtn.addEventListener('click', downloadImage);

alphabetUpBtn.addEventListener('mousedown', () => {
    alphabetUpBtn.style.transform = 'scale(0.8)';
    document.addEventListener('mouseup', () => {
        changeAlphabet(1);
        alphabetUpBtn.style.transform = 'scale(1)';
    }, {once : true});
});
alphabetDownBtn.addEventListener('mousedown', () => {
    alphabetDownBtn.style.transform = 'scale(0.8)';
    document.addEventListener('mouseup', () => {
        changeAlphabet(-1);
        alphabetDownBtn.style.transform = 'scale(1)';
    }, {once : true});
});
replaceLetterBtn.addEventListener('mousedown', function(e) {selectButton(e, replaceLetterBtn)});

fontUpBtn.addEventListener('mousedown', () => {
    fontUpBtn.style.transform = 'scale(0.8)';
    document.addEventListener('mouseup', () => {
        changeFont(1);
        fontUpBtn.style.transform = 'scale(1)';
    }, {once : true});
});
fontDownBtn.addEventListener('mousedown', () => {
    fontDownBtn.style.transform = 'scale(0.8)';
    document.addEventListener('mouseup', () => {
        changeFont(-1);
        fontDownBtn.style.transform = 'scale(1)';
    }, {once : true});
});
fontOneBtn.addEventListener('click', changeElFont);
fontAllBtn.addEventListener('click', changeCanvasFont);

infoBtn.addEventListener('click', function(e) {selectButton(e, infoBtn)});

chosenColor.addEventListener('mousedown', () => {
    if (selectionList.length !== 0 || bgColor.classList.contains('buttonSelected')) {
        removeSelectColor();
        changeColor();
        changeBgColor(chosenColor.style.backgroundColor);

        document.addEventListener('mouseup', releaseColorButton);
    }
});
bgColor.addEventListener('click', function(e) {selectButton(e, bgColor)});
bgColor.addEventListener('contextmenu', function(e) {
    e.preventDefault();
    chosenColor.style.backgroundColor = getComputedStyle(bgColor).backgroundColor;
    updatePickersRGBtoHSV();
    if (selectionList.length !== 0) {
        changeColor();
        saveState();
    }
});

colorUpBtn.addEventListener('mousedown', () => {
    colorUpBtn.style.transform = 'scale(0.8)';
    document.addEventListener('mouseup', () => {
        showColorPage(-1);
        colorUpBtn.style.transform = 'scale(1)';
    }, {once : true});
});
colorDownBtn.addEventListener('mousedown', () => {
    colorDownBtn.style.transform = 'scale(0.8)';
    document.addEventListener('mouseup', () => {
        showColorPage(1);
        colorDownBtn.style.transform = 'scale(1)';
    }, {once : true});
});
fullColorList.addEventListener('wheel', e => {
    e.preventDefault();
    if (e.deltaY > 0) showColorPage(1);
    else showColorPage(-1);
}, {passive: false});

backBtn.addEventListener('click', saveState);
saveBtn.addEventListener('click', saveToBase);

window.addEventListener('keydown', (event) => {
    if (menuOpened) return;
    const key = event.key.toLowerCase();

    switch (key) {
        case 'delete': deleteElement(); break;
        case 'v': copy(); break;
        /* --- */
        case 'z': undo(); break;
        case 'y': redo(); break;
        /* --- */
        case 'arrowleft': move(-modifierMove, 0); keysState(); break;
        case 'arrowright': move(modifierMove, 0); keysState(); break;
        case 'arrowup': move(0, -modifierMove); keysState(); break;
        case 'arrowdown': move(0, modifierMove); keysState(); break;
        case 'a': move(-modifierMove, 0); keysState(); break;
        case 'd': move(modifierMove, 0); keysState(); break;
        case 'w': move(0, -modifierMove); keysState(); break;
        case 's': move(0, modifierMove); keysState(); break;
        /* --- */
        case '+': changeSize(modifierSize); keysState(); break;
        case '=': changeSize(modifierSize); keysState(); break;
        case '-': changeSize(-modifierSize); keysState(); break;
        /* --- */
        case 'q': rotate(-modifierRotate); keysState(); break;
        case 'e': rotate(modifierRotate); keysState(); break;
        case 'r': stretch(-modifierStretch); keysState(); break;
        case 't': stretch(modifierStretch); keysState(); break;
        // case 'x': flip(-1, 1); keysState(); break;
        // case 'c': flip(1, -1); keysState(); break;
        /* --- */
        case 'control': changeModifier(null); break;
        case 'g': changeAlphabet(1); break;
        case 'f': changeFont(1); break;
        /* --- */
        case 'enter':
            if (maybeSelect.length !== 0) {
                const auxList = [...maybeSelect];
                auxList.forEach(el => {
                    confirmSelect(el);
                });
                maybeSelect = [];
            }
            break;
    }
});


/* --- COLOR PICKER ---*/

const hueBar = document.getElementById('hueBar');
const hueCtx = hueBar.getContext('2d');
let hueRect = hueBar.getBoundingClientRect();

const hueGradient = hueCtx.createLinearGradient(0, 0, 0, hueBar.height);

hueGradient.addColorStop(0, 'red');
hueGradient.addColorStop(0.17, 'yellow');
hueGradient.addColorStop(0.34, 'lime');
hueGradient.addColorStop(0.51, 'cyan');
hueGradient.addColorStop(0.68, 'blue');
hueGradient.addColorStop(0.85, 'magenta');
hueGradient.addColorStop(1, 'red');

hueCtx.fillStyle = hueGradient;
hueCtx.fillRect(0, 0, hueBar.width, hueBar.height);

const svRectangle = document.getElementById('svRectangle');
const svCtx = svRectangle.getContext('2d');
let svRect = svRectangle.getBoundingClientRect();

const saturationGrad = svCtx.createLinearGradient(0, 0, svRectangle.width, 0);
saturationGrad.addColorStop(0, 'white');
saturationGrad.addColorStop(1, 'transparent');
const brightnessGrad = svCtx.createLinearGradient(0, 0, 0, svRectangle.height);
brightnessGrad.addColorStop(0, 'transparent');
brightnessGrad.addColorStop(1, 'black');

huePicker = document.getElementById('huePicker');
huePicker.style.left = (hueBar.width / 2) + 'px';
svPicker = document.getElementById('svPicker');
svPicker.style.top = (svRectangle.height) + 'px';

let currentHue = 0;
let currentSaturation = 0;
let currentValue = 0;

let pickerX, pickerY;

function updateSVRectangle() {
    svCtx.fillStyle = `hsl(${currentHue}, 100%, 50%)`;
    svCtx.fillRect(0, 0, svRectangle.width, svRectangle.height);

    svCtx.fillStyle = saturationGrad;
    svCtx.fillRect(0, 0, svRectangle.width, svRectangle.height);

    svCtx.fillStyle = brightnessGrad;
    svCtx.fillRect(0, 0, svRectangle.width, svRectangle.height);
}

hueBar.addEventListener('mousedown', function(e) {
    hueRect = hueBar.getBoundingClientRect();
    e.preventDefault();
    pickerY = e.clientY - hueRect.top;
    currentHue = (pickerY / hueBar.height) * 360;
    updateSVRectangle(currentHue);
    updateHuePicker();

    chosenColor.style.backgroundColor = HSVtoRGB(currentHue, currentSaturation, currentValue);
    removeSelectColor();
    changeColor();
    changeBgColor(chosenColor.style.backgroundColor);

    document.addEventListener('mousemove', dragHuePicker);
    document.addEventListener('mouseup', releaseHuePicker);
});

function dragHuePicker(e) {
    e.preventDefault();
    pickerY = e.clientY - hueRect.top;

    if (pickerY < 0) pickerY = 0;
    if (pickerY > hueBar.height) pickerY = hueBar.height;

    currentHue = (pickerY / hueBar.height) * 360;
    updateSVRectangle();
    updateHuePicker();

    chosenColor.style.backgroundColor = HSVtoRGB(currentHue, currentSaturation, currentValue);
    changeColor();
    changeBgColor(chosenColor.style.backgroundColor);
}

function releaseHuePicker() {
    if (selectionList.length !== 0 || bgColor.classList.contains('buttonSelected')) {
        returnSelectColor();
        saveState();
    }
    document.removeEventListener('mousemove', dragHuePicker);
    document.removeEventListener('mouseup', releaseHuePicker);
}

function updateHuePicker() {
    huePicker.style.top = pickerY + 'px';
}

svRectangle.addEventListener('mousedown', function(e) {
    svRect = svRectangle.getBoundingClientRect();
    e.preventDefault();
    pickerX = e.clientX - svRect.left;
    pickerY = e.clientY - svRect.top;

    currentSaturation = pickerX / svRectangle.width;
    currentValue = 1 - (pickerY / svRectangle.height);
    updateSVPicker(e);

    chosenColor.style.backgroundColor = HSVtoRGB(currentHue, currentSaturation, currentValue);
    removeSelectColor();
    changeColor();
    changeBgColor(chosenColor.style.backgroundColor);

    document.addEventListener('mousemove', dragSVPicker);
    document.addEventListener('mouseup', releaseSVPicker);
});

function dragSVPicker(e) {
    e.preventDefault();
    pickerX = e.clientX - svRect.left;
    pickerY = e.clientY - svRect.top;

    if (pickerX < 0) pickerX = 0;
    if (pickerX > svRectangle.width) pickerX = svRectangle.width;
    if (pickerY < 0) pickerY = 0;
    if (pickerY > svRectangle.height) pickerY = svRectangle.height;

    currentSaturation = pickerX / svRectangle.width;
    currentValue = 1 - (pickerY / svRectangle.height);
    updateSVPicker();
    
    chosenColor.style.backgroundColor = HSVtoRGB(currentHue, currentSaturation, currentValue);
    changeColor();
    changeBgColor(chosenColor.style.backgroundColor);
}

function releaseSVPicker() {
    if (selectionList.length !== 0 || bgColor.classList.contains('buttonSelected')) {
        returnSelectColor();
        saveState();
    }
    document.removeEventListener('mousemove', dragSVPicker);
    document.removeEventListener('mouseup', releaseSVPicker);
}

function updateSVPicker() {
    svPicker.style.left = pickerX + 'px';
    svPicker.style.top = pickerY + 'px';
}


function HSVtoRGB() {
    let c = currentValue * currentSaturation;
    let x = c * (1 - Math.abs(((currentHue / 60) % 2) - 1));
    let m = currentValue - c;

    let r, g, b;
    if (currentHue < 60)       {r=c; g=x; b=0;}
    else if (currentHue < 120) {r=x; g=c; b=0;}
    else if (currentHue < 180) {r=0; g=c; b=x;}
    else if (currentHue < 240) {r=0; g=x; b=c;}
    else if (currentHue < 300) {r=x; g=0; b=c;}
    else                       {r=c; g=0; b=x;}

    r = Math.round((r + m) * 255);
    g = Math.round((g + m) * 255);
    b = Math.round((b + m) * 255);

    return `rgb(${r}, ${g}, ${b})`;
}

function updatePickersRGBtoHSV() {
    const values = chosenColor.style.backgroundColor.match(/\d+/g);
    let r = parseInt(values[0]) / 255;
    let g = parseInt(values[1]) / 255;
    let b = parseInt(values[2]) / 255;
    let h, s, v;

    let max = Math.max(r, g, b);
    let min = Math.min(r, g, b);
    v = max;
    let d = max - min;

    if (max === 0) s = 0;
    else s = d / max;

    if (d === 0) h = 0;
    else switch(max) {
        case r: h = 60 * (((g - b) / d) % 6); break;
        case g: h = 60 * (((b - r) / d) + 2); break;
        case b: h = 60 * (((r - g) / d) + 4); break;
    }
    if (h < 0) h += 360;

    currentHue = h;
    currentSaturation = s;
    currentValue = v;

    pickerY = (currentHue / 360) * hueBar.height;
    updateHuePicker();
    updateSVRectangle();
    pickerX = currentSaturation * svRectangle.width;
    pickerY =  (1 - currentValue) * svRectangle.height;
    updateSVPicker();
}

/* --- INITIALIZATION --- */

let alphabetCount = 0
let fontCount = 0;
let colorCount = 0;

updateSVRectangle(0);

alphabetLvl--;
changeAlphabet(1);
fontLvl--;
changeFont(1);
modifierLvl--;
changeModifier(null);
chosenColor.style.backgroundColor = 'rgb(0, 0, 0)';
canvas.style.backgroundColor = 'rgb(255, 255, 255)';
bgColor.style.backgroundColor = 'rgb(255, 255, 255)';
updateColorList();

if (imgStatus.dataset.login === 'False') {
    const loadedState = localStorage.getItem('savedState');
    if (loadedState) {
        try {
            loadState(JSON.parse(loadedState));
            localStorage.clear();
            localStorage.setItem('savedState', loadedState);
        }
        catch {
            console.warn("Erro ao recarregar");
        }
    }
}
else if (imgStatus.dataset.created === 'True') {
    loadState(JSON.parse(imgStatus.dataset.state));
}

saveState();
undoBtn.classList.add('inactiveBtn');
redoBtn.classList.add('inactiveBtn');

/* ---------------------- */

function saveToBase() {
    const state = {
        html: canvas.innerHTML,
        color: canvas.style.backgroundColor,
        zIndex: zIndexCounter,
        mirrorId: mirrorIdCounter,
        width: canvas.offsetWidth,
        height: canvas.offsetHeight
    }
    const stateJSON = JSON.stringify(state);

    let title, author;
    if (untitledInput.checked) title = "Untitled";
    else title = titleInput.value;
    if (anonymousInput.checked) author = "Anonymous";
    else author = authorInput.value;

    if (title.trim() === "" || author.trim() === "") {
        openPopup("Give your image a title and an author name before sharing.");
        return;
    }

    const formData = new FormData();
    formData.append('titulo', title);
    formData.append('autor', author);
    formData.append('qtdObjetos', objCount);
    formData.append('qtdAlfabetos', alphabetCount);
    formData.append('qtdFontes', fontCount);
    formData.append('qtdCores', colorCount);
    formData.append('estado', stateJSON);

    fetch('/salvar/', {
        method: 'POST',
        headers: {
            'X-CSRFToken': getTokenFromCookies('csrftoken')
        },
        body: formData
    })
    .then(response => response.json())
    .then(data => {
        if (data.success) {
            openPopup("Image shared. Your image will be displayed in the gallery when it is approved by the moderators.");
            imageShared = true;
        }
        else {
            openPopup("Image share failed.");
        }
    });
}

function getTokenFromCookies(name) {
    let tokenValue = null;
    if (document.cookie && document.cookie !== '') {
        const cookies = document.cookie.split(';');

        for (let cookie of cookies) {
            cookie = cookie.trim();
            if (cookie.startsWith(name + '=')) {
                tokenValue = decodeURIComponent(cookie.substring(name.length + 1));
                break;
            }
        }
    }
    return tokenValue;
}

function getAlphabetCount() {
    const currentAlphabets = new Set();
    elements.forEach(el => {
        alphabetList.forEach((alphabet, index) => {
            if (alphabet.includes(el.textContent)) {
                currentAlphabets.add(index);
                return;
            }
        });
    });
    alphabetCount = currentAlphabets.size;
}

function getFontCount() {
    const currentFonts = new Set();
    elements.forEach(el => {
        currentFonts.add(el.style.fontFamily);
    });
    fontCount = currentFonts.size;
}

function getColorCount () {
    colorCount = currentColors.size;
}

function downloadImage() {
    removeSelectColor();
    updateDownloadCanvas();

    const link = document.createElement('a');
    link.download = 'canvas.png';
    link.href = downloadCanvas.toDataURL('image/png');
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);

    returnSelectColor();
}

function updateDownloadCanvas() {
    downloadCtx.clearRect(0, 0, downloadCanvas.width, downloadCanvas.height);

    downloadCtx.fillStyle = canvas.style.backgroundColor || '#ffffff';
    downloadCtx.fillRect(0, 0, downloadCanvas.width, downloadCanvas.height);

    elements.sort((a, b) => {
        return parseInt(a.style.zIndex) - parseInt(b.style.zIndex);
    });

    elements.forEach((el, index) => {
        el.style.zIndex = index;

        const elStyle = window.getComputedStyle(el);

        downloadCtx.save();
        downloadCtx.translate(el.dataset.x, el.dataset.y);

        const rotation = parseFloat(el.dataset.rotation) * Math.PI / 180;
        downloadCtx.rotate(rotation);

        const scaleX = parseFloat(el.dataset.scaleX);
        const scaleY = parseFloat(el.dataset.scaleY);
        downloadCtx.scale(scaleX, scaleY);

        let offsetY = parseFloat(el.dataset.fontSize) * 0.036;
        offsetY = fontOffsets(el, elStyle, offsetY);

        downloadCtx.font = `bold ${parseFloat(el.dataset.fontSize)}px ${elStyle.fontFamily}`;
        downloadCtx.textAlign = 'center';
        downloadCtx.textBaseline = 'middle';
        downloadCtx.fillStyle = elStyle.color;

        downloadCtx.fillText(el.textContent, 0, 0 + offsetY);

        downloadCtx.restore();


    });

    zIndexCounter = elements.length + 1;
}

/* --- UNDO / REDO ACTIONS --- */

function saveState() {
    removeSelectColor();
    const state = {
        html: canvas.innerHTML,
        color: canvas.style.backgroundColor,
        zIndex: zIndexCounter,
        mirrorId: mirrorIdCounter,
    }
    returnSelectColor();

    if (undoStack.length === 0) undoStack.push(state);
    else if (undoStack[undoStack.length - 1].html !== state.html || undoStack[undoStack.length - 1].color !== state.color) {
        undoStack.push(state);
        redoStack = [];

        undoBtn.classList.remove('inactiveBtn');
        redoBtn.classList.add('inactiveBtn');

        saveUserImage(state);
    }
}

function undo() {
    if (undoStack.length <= 1) return;

    redoStack.push(undoStack.pop());
    const prevState = undoStack[undoStack.length - 1];

    loadState(prevState);

    redoBtn.classList.remove('inactiveBtn');
    if (undoStack.length <= 1) undoBtn.classList.add('inactiveBtn');
}

function redo() {
    if (redoStack.length === 0) return;

    const nextState = redoStack.pop();
    undoStack.push(nextState);

    loadState(nextState);

    undoBtn.classList.remove('inactiveBtn');
    if (redoStack.length === 0) redoBtn.classList.add('inactiveBtn');
}

function loadState(state) {
    canvas.innerHTML = state.html;
    canvas.style.backgroundColor = state.color;
    bgColor.style.backgroundColor = state.color;
    zIndexCounter = state.zIndex;
    mirrorIdCounter = state.mirrorId;

    elements = [...canvas.querySelectorAll('.element')];

    mirrorMode = globalMirrorMode;
    displayMirrorMode();

    objCount = elements.length;
    objCounter.textContent = objCount;
    
    deselect();
    elements.forEach(el => {
        el.classList.remove('selected');
        addElEvents(el);
    });
    updateColorList();
    maskDirty = true; 

    saveUserImage(state);
}

function keysState() {
    if (pressingKey) return;

    pressingKey = true;

    document.addEventListener('keyup', function keySave () {
        if (!dontSave) {
            pressingKey = false;
            maskDirty = true; 
            saveState();
        }
        else dontSave = false
        document.removeEventListener('keyup', keySave);
    });
}


function saveUserImage(state) {
    if (imgStatus.dataset.login === 'False')
        localStorage.setItem('savedState', JSON.stringify(state));

    else if (imgStatus.dataset.login === 'True') {
        if (canvas.innerHTML === '' && imgStatus.dataset.created === 'False') return;

        state.width = canvas.offsetWidth;
        state.height = canvas.offsetHeight;

        getAlphabetCount();
        getFontCount();
        getColorCount();
        
        const stateJSON = JSON.stringify(state);

        const formData = new FormData();
        formData.append('alreadyCreated', imgStatus.dataset.created);
        formData.append('imgId', imgStatus.dataset.imgId);
        formData.append('qtdObjetos', objCount);
        formData.append('qtdAlfabetos', alphabetCount);
        formData.append('qtdFontes', fontCount);
        formData.append('qtdCores', colorCount);
        formData.append('estado', stateJSON);

        fetch('/saveToUser/', {
            method: 'POST',
            headers: {
                'X-CSRFToken': getTokenFromCookies('csrftoken')
            },
            body: formData
        })
        .then(response => response.json())
        .then(data => {
            if (data.success) {
                console.log("Success");
                imgStatus.dataset.created = 'True';
                imgStatus.dataset.imgId = data.id;
            }
            else {
                console.log("Error");
            }
        });
    }
}

/* --------------------------- */


function changeAlphabet (num) {
    alphabet.innerHTML = '';

    alphabetLvl += num;
    if (alphabetLvl === alphabetList.length) alphabetLvl = 0;
    else if (alphabetLvl < 0) alphabetLvl = alphabetList.length - 1;
    alphabetMessage.textContent = alphabetNames[alphabetLvl];
    
    alphabetList[alphabetLvl].forEach(letter => addLetter(letter));

    const divCount = 17*5 - (alphabetList[alphabetLvl].length);

    for (let i=0; i<divCount; i++) {
        const space = document.createElement('div');
        alphabet.appendChild(space);
        space.style.cursor = 'default';
    }

    charList.forEach(ch => addLetter(ch));
}

function addLetter(letter) {
    const newLetter = document.createElement('div');
    //newLetter.type = 'button';
    newLetter.className = 'preview';
    newLetter.style.fontFamily = fontList[fontLvl];
    newLetter.textContent = letter;

    newLetter.addEventListener('mousedown', startDragPreview);

    alphabet.appendChild(newLetter);
}

function changeFont (num) {
    fontLvl += num;
    if (fontLvl === fontList.length) fontLvl = 0;
    else if (fontLvl < 0) fontLvl = fontList.length - 1;

    const previews = alphabet.querySelectorAll('.preview');
    previews.forEach(preview => preview.style.fontFamily = fontList[fontLvl]);

    fontMessage.textContent = fontNames[fontLvl];
}

function changeElFont() {
    if (selectionList.length === 0) return;

    selectionList.forEach(el => {
        el.style.fontFamily = fontList[fontLvl];
        updateMirror(el);
    });

    maskDirty = true; 
    saveState();
}

function changeLetter(preview) {
    if (selectionList.length === 0 || !replaceLetterBtn.classList.contains('buttonSelected')) return;

    selectionList.forEach(el => {
        el.textContent = preview.textContent;
        el.style.fontFamily = preview.style.fontFamily;

        updateMirror(el);
    });

    maskDirty = true;
    saveState();
}

function changeCanvasFont() {
    elements.forEach(el => el.style.fontFamily = fontList[fontLvl]);
    maskDirty = true; 

    saveState();
}

function changeModifier (level) {
    if (level === null) {
        modifierLvl++;
        if (modifierLvl > 2) modifierLvl = 0;
    }
    else modifierLvl = level;
    modSmallBtn.classList.remove('inactiveBtn');
    modMediumBtn.classList.remove('inactiveBtn');
    modBigBtn.classList.remove('inactiveBtn');

    switch (modifierLvl) {
        case 0:
            modifierMove = 1;
            modifierSize = 5;
            modifierRotate = 5;
            modifierStretch = 0.1;
            modSmallBtn.classList.add('inactiveBtn');
            break;
        case 1:
            modifierMove = 20;
            modifierSize = 20;
            modifierRotate = 15;
            modifierStretch = 0.2;
            modMediumBtn.classList.add('inactiveBtn');
            break;
        case 2:
            modifierMove = 50;
            modifierSize = 50;
            modifierRotate = 30;
            modifierStretch = 0.3;
            modBigBtn.classList.add('inactiveBtn');
            break;
    }
}


/* --- COLOR OPERATIONS --- */

function addColor(color) {
    const colorBlock = document.createElement('div');
    colorBlock.type = 'button';
    colorBlock.className = 'colorBlock';
    colorBlock.style.backgroundColor = color;
    colorList.appendChild(colorBlock);

    colorBlock.addEventListener('mousedown', () => {
        chosenColor.style.backgroundColor = colorBlock.style.backgroundColor;
        updatePickersRGBtoHSV();

        if (selectionList.length !== 0 || bgColor.classList.contains('buttonSelected')) {
            removeSelectColor();
            changeColor();
            changeBgColor(chosenColor.style.backgroundColor);

            document.addEventListener('mouseup', releaseColorButton); 
        }
    });
}

function releaseColorButton() {
    returnSelectColor();
    saveState();
    document.removeEventListener('mouseup', releaseColorButton);
}

function updateColorList() {
    currentColors.clear()
    colorList.innerHTML = '';

    elements.forEach(el => {
        currentColors.add(el.style.color);
    })
    currentColors.forEach(color => addColor(color));

    showColorPage(0);
}

function showColorPage(modifier) {
    const maxColorLvl = Math.max(Math.ceil(currentColors.size / 14) - 1, 0);
    colorLvl += modifier;
    
    if (colorLvl < 0) {
        colorLvl = 0;
    }
    else if (colorLvl > maxColorLvl) {
        colorLvl = maxColorLvl;
    }
    if (colorLvl === 0) colorUpBtn.classList.add('inactiveUp');
    else colorUpBtn.classList.remove('inactiveUp');
    if (colorLvl === maxColorLvl) colorDownBtn.classList.add('inactiveDown');
    else colorDownBtn.classList.remove('inactiveDown');


    const pageStart = colorLvl * 14;
    const pageEnd = pageStart + 14;

    const visibleColors = [...currentColors].slice(pageStart, pageEnd);

    colorList.innerHTML = '';
    visibleColors.forEach(c => {
        addColor(c);
    })
}

function changeColor() {
    if (selectionList.length === 0) return;
    
    selectionList.forEach(el => {
        el.style.color = chosenColor.style.backgroundColor;
        updateMirror(el);
    });
    updateColorList();
}

function removeSelectColor() {
    if (selectionList.length === 0) return;

    selectionList.forEach(el => {
        el.classList.remove('selected');
        if (mirrorSelectList) {
            const pair = findMirror(el);
            if (pair) pair.classList.remove('selected');
        }
    });
}

function returnSelectColor() {
    if (selectionList.length === 0) return;

    selectionList.forEach(el => {
        el.classList.add('selected');
        if (mirrorSelectList) {
            const pair = findMirror(el);
            if (pair) pair.classList.add('selected');
        }
    });
}

function selectButton(e, button) {
    e.stopPropagation();
    if (!button.classList.contains('buttonSelected')) {
        button.classList.add('buttonSelected');

        if (button === bgColor) deselect();
        else if (button === infoBtn) displayInfobox(e);
    }
    else {
        if (button === infoBtn) removeInfobox();
        button.classList.remove('buttonSelected');
    }
}

function changeBgColor(color) {
    if (!bgColor.classList.contains('buttonSelected')) return;

    bgColor.style.backgroundColor = color;
    canvas.style.backgroundColor = color;
}

/* ------------------------ */


/* --- MIRROR OPERATIONS --- */

function displayMirrorMode() {
    if (mirrorMode === 'ON') {
        mirrorOn.classList.remove('hidden');
        mirrorOff.classList.add('hidden');
    }
    else if (mirrorMode === 'OFF') {
        mirrorOn.classList.add('hidden');
        mirrorOff.classList.remove('hidden');
    }
}

function changeMirrorMode() {
    if (mirrorMode === 'ON') {
        if (selectionList.length !== 0 && mirrorSelectList) {
            selectionList.forEach(el => {
                const pair = findMirror(el);
                console.log(pair);
                console.log(selectionList.includes(pair));
                console.log("same: ", pair === el);

                if (pair) {
                    pair.classList.remove('selected');
                    delete el.dataset.mirrorId;
                    delete el.dataset.mirrorRole;
                    delete pair.dataset.mirrorId;
                    delete pair.dataset.mirrorRole;
                }
            });
            saveState();
        }
        else globalMirrorMode = 'OFF';
        mirrorMode = 'OFF';
    }
    else {
        if (selectionList.length !== 0 && !mirrorSelectList) {
            selectionList.forEach(el => createMirrorPair(el));

            mirrorSelectList = true;
            maskDirty = true;
            saveState();
        }
        else globalMirrorMode = 'ON';
        mirrorMode = 'ON';
    }
    
    displayMirrorMode();
}

function findMirror(el) {
    for (const p of elements) {
        if (p.dataset.mirrorId) {
            if (p.dataset.mirrorId === el.dataset.mirrorId && p !== el)
                return p;
        }
    }
}

function createMirrorPair(originalEl) {
    if (elements.length + 1 > maxCount) return;
    const mirrorEl = originalEl.cloneNode(true);

    originalEl.dataset.mirrorId = mirrorIdCounter;
    mirrorEl.dataset.mirrorId = mirrorIdCounter++;

    originalEl.dataset.mirrorRole = 'original';
    mirrorEl.dataset.mirrorRole = 'mirror';

    elements.push(mirrorEl);
    canvas.appendChild(mirrorEl);
    syncMirror(originalEl, mirrorEl);

    objCount++;
    objCounter.textContent = objCount;

    addElEvents(mirrorEl);
}

function syncMirror(originalEl, mirrorEl) {
    mirrorEl.textContent = originalEl.textContent;
    mirrorEl.style.fontFamily = originalEl.style.fontFamily;
    mirrorEl.style.color = originalEl.style.color;

    mirrorEl.dataset.x = (canvas.clientWidth - parseFloat(originalEl.dataset.x));
    mirrorEl.dataset.y = originalEl.dataset.y;
    mirrorEl.dataset.fontSize = originalEl.dataset.fontSize;
    mirrorEl.dataset.rotation = -originalEl.dataset.rotation;
    mirrorEl.dataset.scaleX = -originalEl.dataset.scaleX;
    mirrorEl.dataset.scaleY = originalEl.dataset.scaleY;

    changeTransform(mirrorEl);
}

function updateMirror(el) {
    if (!el.dataset.mirrorId) return;

    const pair = findMirror(el);
    if (pair) syncMirror(el, pair);
}

/* ------------------------- */


function newElement(preview, size, rotation, scaleX, scaleY, posX, posY, color) {
    if (elements.length + 1 > maxCount) return;
    const el = document.createElement('span');
    el.className = 'element';
    el.textContent = preview.textContent;
    el.style.fontFamily = preview.style.fontFamily;
    el.style.color = color;
    el.style.zIndex = preview.style.zIndex;

    el.dataset.x = posX;
    el.dataset.y = posY;
    el.dataset.fontSize = size;
    el.dataset.rotation = rotation;
    el.dataset.scaleX = scaleX;
    el.dataset.scaleY = scaleY;

    changeTransform(el);

    elements.push(el);
    canvas.appendChild(el);
    objCount++;
    objCounter.textContent = objCount;
    updateColorList();

    if (mirrorMode === 'ON') {
        createMirrorPair(el);
    }

    maskDirty = true; 
    addElEvents(el);
    select(el);

    return el;
}

function addElEvents(el) {
    el.addEventListener('click', function(e) {
        if (!dragHappened) {
            const colorEl = getColorFromMask(e);
            if (colorEl) {
                e.stopPropagation();
                if (e.shiftKey) {
                    if (!colorEl.classList.contains('selected')) selectMultiple(colorEl);
                    else deselectShift(colorEl);
                }
                else select(colorEl);
            }
        }
    });
    el.addEventListener('mousedown', function(e) {
        if (!e.shiftKey) {
            const colorEl = getColorFromMask(e);
            if (colorEl) {
                startDrag(e);
            }
        }
    });
}

// function debugMaskColors() {
//     const width = maskCanvas.width;
//     const height = maskCanvas.height;
//     const imageData = maskCtx.getImageData(0, 0, width, height).data;

//     const colorCounts = new Map();

//     for (let i = 0; i < imageData.length; i += 4) {
//         const r = Math.round(imageData[i]);
//         const g = Math.round(imageData[i + 1]);
//         const b = Math.round(imageData[i + 2]);

//         const colorKey = (r << 16) | (g << 8) | b;

//         colorCounts.set(colorKey, (colorCounts.get(colorKey) || 0) + 1);
//     }

//     console.log("Cores únicas no maskCanvas:", colorCounts.size);

//     colorCounts.forEach((count, colorKey) => {
//         const r = (colorKey >> 16) & 0xFF;
//         const g = (colorKey >> 8) & 0xFF;
//         const b = colorKey & 0xFF;

//         const element = colorToId.get(colorKey);

//         if (element) {
//             console.log(`rgb(${r}, ${g}, ${b}): ${count} pixels → Elemento:`, element.textContent, imageData[3]);
//         } else {
//             console.log(`rgb(${r}, ${g}, ${b}): ${count} pixels → Nenhum elemento`, imageData[3]);
//         }
//     });
//     if (colorCounts.size > elements.length + 1) console.log("COM cor adicional");
//     else console.log("SEM cor adicional");
// }

function bringHiddenToTop() {
    //document.body.style.cursor = 'wait';
    let gotHidden = false;
    deselect();
    const visibleIds = new Map();
    updateMask();

    const data = maskCtx.getImageData(0, 0, maskCanvas.width, maskCanvas.height).data;

    for (let i = 0; i < data.length; i += 4) {
        const r = data[i];
        const g = data[i+1];
        const b = data[i+2];

        const id = (r << 16) | (g << 8) | b;
        if (id !== 0) visibleIds.set(id, (visibleIds.get(id) || 0) + 1);
    }
    //console.log(visibleIds);

    colorToId.forEach((el, key) => {
        const pixels = visibleIds.get(key) || 0;
        //console.log(pixels, el.textContent);

        if (pixels < 100) {
            el.style.zIndex = zIndexCounter++;
            gotHidden = true;
        }
    });
    if (gotHidden) maskDirty = true;
}

function getColorFromMask (e) {
    canvasRect = canvas.getBoundingClientRect();
    const x = Math.floor(e.clientX - canvasRect.left);
    const y = Math.floor(e.clientY - canvasRect.top);

    if (maskDirty) updateMask();

    //debugMaskColors();
    const pixel = maskCtx.getImageData(x, y, 1, 1).data;

    const r = Math.round(pixel[0]);
    const g = Math.round(pixel[1]);
    const b = Math.round(pixel[2]);

    const colorKey = (r << 16) | (g << 8) | b;
    if (colorKey % 8 !== 0) colorKey = null;

    let onCursor = document.elementsFromPoint(e.clientX, e.clientY);
    onCursor = onCursor.filter(el => el.classList.contains('element'));
    const colorEl = colorToId.get(colorKey);
    if (onCursor.includes(colorEl)) return colorEl;
    else return null;
}

function updateMask () {
    maskCtx.clearRect(0, 0, maskCanvas.width, maskCanvas.height);
    colorToId.clear();

    elements.sort((a, b) => {
        return parseInt(a.style.zIndex) - parseInt(b.style.zIndex);
    });

    elements.forEach((el, index) => {
        el.style.zIndex = index;

        const elStyle = window.getComputedStyle(el);

        maskCtx.save();
        maskCtx.translate(el.dataset.x, el.dataset.y);

        const rotation = parseFloat(el.dataset.rotation) * Math.PI / 180;
        maskCtx.rotate(rotation);

        const scaleX = parseFloat(el.dataset.scaleX);
        const scaleY = parseFloat(el.dataset.scaleY);
        maskCtx.scale(scaleX, scaleY);

        const id = (index + 1) * 8;
        const r = id & 255;
        const g = (id >> 8) & 255;
        const b = (id >> 16) & 255;

        const colorKey = (r << 16) | (g << 8) | b;
        if (id !== 0) colorToId.set(colorKey, el);

        let offsetY = parseFloat(el.dataset.fontSize) * 0.036;
        offsetY = fontOffsets(el, elStyle, offsetY);

        maskCtx.font = `bold ${parseFloat(el.dataset.fontSize)}px ${elStyle.fontFamily}`;
        maskCtx.textAlign = 'center';
        maskCtx.textBaseline = 'middle';
        maskCtx.fillStyle = `rgb(${r},${g},${b})`;

        maskCtx.fillText(el.textContent, 0, 0 + offsetY);

        maskCtx.restore();

        // document.body.appendChild(maskCanvas);
        // maskCanvas.style.position = "absolute";
        // maskCanvas.style.left = canvas.offsetLeft + "px";
        // maskCanvas.style.top = canvas.offsetTop + "px";
        // maskCanvas.style.opacity = "0.4";
        // maskCanvas.style.pointerEvents = "none";
        // maskCanvas.style.border = "1px solid red";
        // maskCanvas.style.zIndex = 90;
    });
    zIndexCounter = elements.length + 1;
    maskDirty = false;
}

function fontOffsets(el, elStyle, offsetY) {
    if(alphabetList[4].includes(el.textContent) || alphabetList[5].includes(el.textContent)) {
        switch(elStyle.fontFamily) {
            case(fontList[0]): offsetY *= -0.02; break;
            case(fontList[1]): offsetY *= 1.73; break;
            case(fontList[2]): offsetY *= 0.17; break;
            case(fontList[3]): offsetY *= 0.07; break;
            case(fontList[4]): offsetY *= 0.93; break;
            case(fontList[5]): offsetY *= -0.25; break;
        }
    } // If Hiragana or Katakana

    switch(elStyle.fontFamily) {
        case(fontList[1]): offsetY *= 0.87; break;
        case(fontList[2]): offsetY *= 1.33; break;
        case(fontList[3]): offsetY *= 2.85; break;
        case(fontList[4]): offsetY *= 0.9; break;
        case(fontList[5]): offsetY *= 1.95; break;
    }

    if(alphabetList[1].includes(el.textContent) || alphabetList[2].includes(el.textContent) || alphabetList[3].includes(el.textContent)) {
        switch(elStyle.fontFamily) {
            case(fontList[2]): offsetY *= 0.84; break;
        }
    } // if Cyrillic, Greek or Arabic

    return offsetY;
}

/* --- REGARDING SELECT --- */

function select(el) {
    maybeSelect = [];
    removeInfoboxSelection();

    selectionList.forEach(sel => {
        sel.classList.remove('selected');

        if (sel.dataset.mirrorId) {
            const pair = findMirror(sel);
            if (pair) pair.classList.remove('selected');
        }
    });
    selectionList = [];

    if (el.dataset.mirrorId) {
        mirrorSelectList = true;
        const pair = findMirror(el);

        if (pair) {
            pair.classList.add('selected');
            pair.style.zIndex = zIndexCounter++;
            mirrorMode = 'ON';
        }
    } else {
        mirrorSelectList = false;
        mirrorMode = 'OFF'
    }
    selectionList.push(el);
    el.classList.add('selected');
    el.style.zIndex = zIndexCounter++;
    maskDirty = true;

    displayMirrorMode();

    sizeUpBtn.classList.remove('inactiveBtn');
    sizeDownBtn.classList.remove('inactiveBtn');
    stretchHBtn.classList.remove('inactiveBtn');
    stretchVBtn.classList.remove('inactiveBtn');
}

function deselectShift(el) {
    maybeSelect = [];
    removeInfoboxSelection();

    if (el.dataset.mirrorId) {
        const pair = findMirror(el);
        if (pair) {
            pair.classList.remove('selected');
        }
    }
    selectionList.splice(selectionList.indexOf(el), 1);
    el.classList.remove('selected');

    if (selectionList.length === 0) {
        mirrorSelectList = false;
        mirrorMode = globalMirrorMode;
        displayMirrorMode();
    }
    newSelectionCenter = true;

    if (selectionList.length <= 1) {
        sizeUpBtn.classList.remove('inactiveBtn');
        sizeDownBtn.classList.remove('inactiveBtn');
        stretchHBtn.classList.remove('inactiveBtn');
        stretchVBtn.classList.remove('inactiveBtn');
    }
}

function selectMultiple(el) {
    if (maybeSelect.includes(el)) {
        confirmSelect(el);
        return;
    }
    if (selectionList.length === 0 && el.dataset.mirrorId) mirrorSelectList = true;
    if (!dragHappened && maybeSelect.length !== 0) {
        maybeSelect = [];
        removeInfoboxSelection();
    }

    if (mirrorSelectList) {
        if (el.dataset.mirrorId) {
            const pair = findMirror(el);
            if (pair) pair.classList.add('selected');

            el.classList.add('selected');
            selectionList.push(el);

            mirrorMode = 'ON';
        }
        else {
            //maybeSelect.push(el);
            displayInfoboxSelection();
        }
    }
    else {
        if (!el.dataset.mirrorId) {
            mirrorMode = 'OFF';
            selectionList.push(el);
            el.classList.add('selected');
        }
        else {
            //maybeSelect.push(el);
            displayInfoboxSelection();
        }
    }
    displayMirrorMode();
    newSelectionCenter = true;

    if (selectionList.length > 1) {
        sizeUpBtn.classList.add('inactiveBtn');
        sizeDownBtn.classList.add('inactiveBtn');
        stretchHBtn.classList.add('inactiveBtn');
        stretchVBtn.classList.add('inactiveBtn');
    }
}

function confirmSelect(el) {
    if (mirrorSelectList) {
        selectionList.forEach(el => {
            if (el.dataset.mirrorId) {
                const pair = findMirror(el);
                if (pair) {
                    delete pair.dataset.mirrorId;
                    delete pair.dataset.mirrorRole;
                    selectionList.push(pair);
                }
                delete el.dataset.mirrorId;
                delete el.dataset.mirrorRole;
            }
        });
    }

    maybeSelect.splice(maybeSelect.indexOf(el), 1);
    if (el.dataset.mirrorId) {
        const pair = findMirror(el);
        if (pair) {
            delete pair.dataset.mirrorId;
            delete pair.dataset.mirrorRole;
            selectionList.push(pair);
            pair.classList.add('selected');
        }
        delete el.dataset.mirrorId;
        delete el.dataset.mirrorRole;
    }
    if (visibleInfoBox) removeInfoboxSelection();
    mirrorSelectList = false;
    mirrorMode = 'OFF';
    selectionList.push(el);
    el.classList.add('selected');
    
    setTimeout(() => {
        saveState();
    }, 0);
}

function deselect() {
    selectionList.forEach(el => {
        el.classList.remove('selected');

        if (el.dataset.mirrorId) {
            const pair = findMirror(el);

            if (pair) pair.classList.remove('selected');
        }
    });
    selectionList = [];
    maybeSelect = [];
    mirrorSelectList = false;
    mirrorMode = globalMirrorMode;
    displayMirrorMode();

    sizeUpBtn.classList.remove('inactiveBtn');
    sizeDownBtn.classList.remove('inactiveBtn');
    stretchHBtn.classList.remove('inactiveBtn');
    stretchVBtn.classList.remove('inactiveBtn');
}

/* ------------------------ */


function deleteElement() {
    if (selectionList.length === 0) return;

    selectionList.forEach(el => {
        if (mirrorSelectList) {
            const pair = findMirror(el);

            if (pair) {
                elements.splice(elements.indexOf(pair), 1);
                pair.remove();
                objCount--;
            }
        }
        elements.splice(elements.indexOf(el), 1);
        el.remove();
        objCount--;
    });

    objCounter.textContent = objCount;
    selectionList = [];
    mirrorSelectList = false;
    mirrorMode = globalMirrorMode;
    displayMirrorMode();
    updateColorList();
    maskDirty = true; 

    sizeUpBtn.classList.remove('inactiveBtn');
    sizeDownBtn.classList.remove('inactiveBtn');
    stretchHBtn.classList.remove('inactiveBtn');
    stretchVBtn.classList.remove('inactiveBtn');

    saveState();
}

function clearAll() {
    canvas.innerHTML = '';
    elements = [];
    updateColorList();
    selectionList = [];
    mirrorSelectList = false;
    zIndexCounter = 1;
    mirrorIdCounter = 1;
    objCount = 0;
    objCounter.textContent = objCount;
    canvas.style.backgroundColor = "rgb(255, 255, 255)";
    bgColor.style.backgroundColor = "rgb(255, 255, 255)";

    sizeUpBtn.classList.remove('inactiveBtn');
    sizeDownBtn.classList.remove('inactiveBtn');
    stretchHBtn.classList.remove('inactiveBtn');
    stretchVBtn.classList.remove('inactiveBtn');

    maskDirty = true; 
    saveState();
}

function copy() {
    if (selectionList.length === 0) return;
    const newSelectList = [];

    selectionList.forEach(el => {
        let move = modifierMove;
        if (modifierLvl == 0) move = 5;
        let posX = parseFloat(el.dataset.x) + move;
        let posY = parseFloat(el.dataset.y) + move;
        posX = checkBorderX(el, posX);
        posY = checkBorderY(el, posY);

        const newEl = newElement(el, el.dataset.fontSize, el.dataset.rotation, el.dataset.scaleX, el.dataset.scaleY, posX, posY, el.style.color);

        newSelectList.push(newEl);
    })
    deselect();
    newSelectList.forEach(el => selectMultiple(el));

    saveState();
}

/* --- Drag Drag Drag --- */

function startDragSelection(e) {
    e.preventDefault();
    canvasRect = canvas.getBoundingClientRect();
    dragBoxCreated = false;

    selectionBox = document.createElement('div');
    selectionBox.className = 'dragSelection';

    dragBoxStartX = e.clientX - canvasRect.left;
    dragBoxStartY = e.clientY - canvasRect.top;

    selectionBox.style.left = dragBoxStartX + 'px';
    selectionBox.style.top = dragBoxStartY + 'px';
    selectionBox.style.width = '0px';
    selectionBox.style.height = '0px';

    document.addEventListener('mousemove', dragSelection);
    document.addEventListener('mouseup', endDragSelection);
}

function dragSelection(e) {
    e.preventDefault();
    let x = e.clientX - canvasRect.left;
    if (x < 2) x = 2;
    else if (x > canvasRect.width - 1.5) x = canvasRect.width - 1.5;
    let y = e.clientY - canvasRect.top;
    if (y < 2) y = 2;
    else if (y > canvasRect.height - 2) y = canvasRect.height - 2;

    let left = Math.min(dragBoxStartX, x);
    let top = Math.min(dragBoxStartY, y);
    let width = Math.abs(x - dragBoxStartX);
    let height = Math.abs(y - dragBoxStartY);

    selectionBox.style.left = left + 'px';
    selectionBox.style.top = top + 'px';
    selectionBox.style.width = width + 'px';
    selectionBox.style.height = height + 'px';

    if (!dragBoxCreated && parseInt(selectionBox.style.width) > 1 && parseInt(selectionBox.style.height) > 1) {
        canvas.appendChild(selectionBox);
        dragBoxCreated = true;
    }
}

function endDragSelection() {
    const left = parseInt(selectionBox.style.left);
    const top = parseInt(selectionBox.style.top);
    const width = parseInt(selectionBox.style.width);
    const height = parseInt(selectionBox.style.height);

    if (!dragBoxCreated || width <= 0 || height <= 0) {
        selectionBox.remove();
        document.removeEventListener('mousemove', dragSelection);
        document.removeEventListener('mouseup', endDragSelection);
        return;
    }

    dragHappened = true;
    const foundEls = new Set();
    if (maskDirty) updateMask();
    const pixelList = maskCtx.getImageData(left, top, width, height).data;

    for (let i = 0; i < pixelList.length; i += 4) {
        const r = pixelList[i];
        const g = pixelList[i+1];
        const b = pixelList[i+2];

        const id = (r << 16) | (g << 8) | b;
        const found = colorToId.get(id);
        if (found) foundEls.add(found);
    }

    let removeList = [];
    foundEls.forEach(el => {
        if (el.dataset.mirrorId) {
            const pair = findMirror(el);
            if (pair && foundEls.has(pair)) {
                if (el.dataset.x > pair.dataset.x) removeList.push(pair);
                else removeList.push(el);
            }
        }
    });
    removeList.forEach (el => foundEls.delete(el));

    deselect();
    foundEls.forEach(el => {
        const rect = el.getBoundingClientRect();

        if (rect.right >= (left + canvasRect.left) && rect.left <= (left + width + canvasRect.left) && rect.bottom >= (top + canvasRect.top) && rect.top <= (top + height + canvasRect.top)) {
            selectMultiple(el);
        }
    });
    selectionBox.remove();

    setTimeout(() => {
        dragHappened = false;
    }, 0);

    document.removeEventListener('mousemove', dragSelection);
    document.removeEventListener('mouseup', endDragSelection);
}


/* --- CREATE ELEMENT WITH DRAG --- */


function startDragPreview(e) {
    e.preventDefault();
    e.stopPropagation();
    currentPreviewButton = e.currentTarget;

    previewElement = document.createElement('span');
    previewElement.className = 'preview2';
    previewElement.style.fontFamily = e.currentTarget.style.fontFamily;
    previewElement.textContent = e.currentTarget.textContent;
    previewElement.style.color = chosenColor.style.backgroundColor;
    previewElement.style.zIndex = zIndexCounter++;
    document.body.appendChild(previewElement);

    previewElement.style.left = e.clientX + 'px';
    previewElement.style.top = e.clientY + 'px';

    document.addEventListener('mousemove', dragPreview);
    document.addEventListener('mouseup', endDragPreview);
}

function dragPreview(e) {
    previewElement.style.left = e.clientX + 'px';
    previewElement.style.top = e.clientY + 'px';
}

function endDragPreview(e) {
    if (!previewElement) return;
    canvasRect = canvas.getBoundingClientRect();
    const buttonRect = currentPreviewButton.getBoundingClientRect();

    if (e.clientX >= buttonRect.left && e.clientX <= buttonRect.right && e.clientY >= buttonRect.top && e.clientY <= buttonRect.bottom) {
        changeLetter(previewElement);

        if (replaceLetterBtn.classList.contains('buttonSelected')) e.stopPropagation();
        else {
            newElement(previewElement, 80, 0, 1, 1, canvasRect.width / 2, canvasRect.height / 2, chosenColor.style.backgroundColor);
            saveState();
        }
    }

    else if (previewElement.offsetLeft >= canvasRect.left && previewElement.offsetLeft <= canvasRect.right && previewElement.offsetTop >= canvasRect.top && previewElement.offsetTop <= canvasRect.bottom) {
        newElement(previewElement, 80, 0, 1, 1, e.clientX - canvasRect.left, e.clientY - canvasRect.top, chosenColor.style.backgroundColor);
        saveState();
    }

    previewElement.remove();
    previewElement = null;

    document.removeEventListener('mousemove', dragPreview);
    document.removeEventListener('mouseup', endDragPreview);
}

/* -------------------------------- */


function startDrag(e) {
    if (selectionList.length === 0 || !e.currentTarget.classList.contains('selected')) return;
    e.stopPropagation();
    maybeSelect = [];
    removeInfoboxSelection();

    if (e.currentTarget.dataset.mirrorId && !selectionList.includes(e.currentTarget)) {
        const pair = findMirror(e.currentTarget);
        if (pair && selectionList.includes(pair)) {
            const pairList = [];
            selectionList.forEach(el => {
                pairList.push(findMirror(el));
            });
            selectionList = pairList;
        }
    }

    dragStartX = e.clientX;
    dragStartY = e.clientY;

    dragStartPositions = selectionList.map(el => ({el: el, x: parseFloat(el.dataset.x), y: parseFloat(el.dataset.y)}));

    document.addEventListener('mousemove', drag);
    document.addEventListener('mouseup', endDrag);
}

function drag(e) {
    e.stopPropagation();
    const dx = e.clientX - dragStartX;
    const dy = e.clientY - dragStartY;

    dragStartPositions.forEach(obj => {
        let posX = obj.x + dx;
        let posY = obj.y + dy;

        posX = checkBorderX(obj.el, posX);
        posY = checkBorderY(obj.el, posY);

        obj.el.dataset.x = posX;
        obj.el.dataset.y = posY;

        changeTransform(obj.el);
        updateMirror(obj.el);
    })
    newSelectionCenter = true;
}

function endDrag(e) {
    e.stopPropagation();

    dragHappened = true;
    setTimeout(() => {
        dragHappened = false;
    }, 0);

    document.removeEventListener('mousemove', drag);
    document.removeEventListener('mouseup', endDrag);

    if (parseFloat(selectionList[0].dataset.x) === dragStartPositions[0].x && parseFloat(selectionList[0].dataset.y) === dragStartPositions[0].y) {
        if (e.target.classList.contains('element')) select(e.target);
        return;
    }
    maskDirty = true;
    saveState();
}

function move(modifierX, modifierY) {
    if (selectionList.length === 0) return;

    selectionList.forEach(el => {
        let posX = parseFloat(el.dataset.x) + modifierX;
        let posY = parseFloat(el.dataset.y) + modifierY;

        posX = checkBorderX(el, posX);
        posY = checkBorderY(el, posY);

        el.dataset.x = posX;
        el.dataset.y = posY;

        changeTransform(el);
        updateMirror(el);
    })
    newSelectionCenter = true;
}

function checkBorderX(el, posX) {
    const selectionRect = el.getBoundingClientRect();
    const quarterWidth = selectionRect.width / 4;

    const minX = -quarterWidth;
    const maxX = canvas.clientWidth + quarterWidth;
    if (posX < minX) posX = minX;
    if (posX > maxX) posX = maxX;

    return posX;
}

function checkBorderY(el, posY) {
    const selectionRect = el.getBoundingClientRect();
    const quarterHeight = selectionRect.height / 4;

    const minY = -quarterHeight;
    const maxY = canvas.clientHeight + quarterHeight;
    if (posY < minY) posY = minY;
    if (posY > maxY) posY = maxY;
    console.log(canvas.clientHeight);
    console.log(maxY);
    console.log(posY);

    return posY;
}

function getSelectionCenter() {
    if (!newSelectionCenter) return;
    canvasRect = canvas.getBoundingClientRect();

    let minX = Infinity, maxX = -Infinity;
    let minY = Infinity, maxY = -Infinity;
    selectionList.forEach(el => {
        const rect = el.getBoundingClientRect();
        const left = rect.left - canvasRect.left;
        const right = rect.right - canvasRect.left;
        const top = rect.top - canvasRect.top;
        const bottom = rect.bottom - canvasRect.top;

        if (left < minX) minX = left;
        if (right > maxX) maxX = right;
        if (top < minY) minY = top;
        if (bottom > maxY) maxY = bottom;
    });
    selectionCenter.x = (minX + maxX) / 2;
    selectionCenter.y = (minY + maxY) / 2;

    newSelectionCenter = false;
}

function changeSizeScroll(e) {
    if (selectionList.length === 0) return;

    if (e.deltaY < 0) changeSize(modifierSize);
    else if (e.deltaY > 0) changeSize(-modifierSize);

    clearTimeout(scrollTimeout);
    scrollTimeout = setTimeout(() => {
        maskDirty = true;
        saveState();
    }, 200);
}

function changeSize(modifier) {
    if (selectionList.length === 0) return;
    if (selectionList.length > 1) {
        dontSave = true;
        return;
    }
    // if (selectionList.length === 1) {
    selectionList.forEach(el => {
        let newSize = parseFloat(el.dataset.fontSize) + modifier;
        let scaleX = Math.abs(parseFloat(el.dataset.scaleX));
        if ((newSize * scaleX) < minSize) newSize = minSize / scaleX;
        if ((newSize * scaleX) > maxSize) newSize = maxSize / scaleX;
        else if (newSize > maxSize) newSize = maxSize;
        el.dataset.fontSize = newSize;

        changeTransform(el);
        updateMirror(el);
    });
    // }
    // else {
    //     getSelectionCenter();
    //     let limitReached = false;
    //     selectionList.forEach(el => {
    //         let newSize = parseFloat(el.dataset.fontSize) + modifier;
    //         if (newSize < minSize || newSize > maxSize) limitReached = true;
    //     });
    //     if (!limitReached) {
    //         selectionList.forEach(el => {
    //             let newSize = parseFloat(el.dataset.fontSize) + modifier;

    //             const dx = parseFloat(el.dataset.x) - selectionCenter.x;
    //             const dy = parseFloat(el.dataset.y) - selectionCenter.y;

    //             let scale = newSize / 80;

    //             el.dataset.x = selectionCenter.x + (dx * scale);
    //             el.dataset.y = selectionCenter.y + (dy * scale);

    //             el.dataset.fontSize = newSize;

    //             changeTransform(el);
    //             updateMirror(el);
    //         });
    //     }
    // }
}

function stretch(modifier) {
    if (selectionList.length === 0) return;
    if (selectionList.length > 1) {
        dontSave = true;
        return;
    }

    selectionList.forEach(el => {
        let newStretch = parseFloat(el.dataset.scaleX);
        let multiplier = 1 * Math.sign(newStretch);
        let size = parseFloat(el.dataset.fontSize);

        newStretch = (Math.abs(newStretch) + modifier) * multiplier;
        if (Math.abs(newStretch) >= 0.1 && Math.sign(newStretch) === Math.sign(parseFloat(el.dataset.scaleX))) {
            if (Math.abs(newStretch) * size < minSize) return;
            if (Math.abs(newStretch) <= maxScale) {
                if (Math.abs(newStretch) * size > maxSize) return;
                el.dataset.scaleX = newStretch;

                changeTransform(el);
                updateMirror(el);
            }
        }
    });
}

function rotate(modifier) {
    if (selectionList.length === 0) return;
    if (selectionList.length === 1) {
        selectionList.forEach(el => {
            let newRotate = parseFloat(el.dataset.rotation);
            newRotate = newRotate + modifier;
            newRotate %= 360;
            el.dataset.rotation = newRotate;

            changeTransform(el);
            updateMirror(el);
        });
    }
    else {
        const angle = modifier * Math.PI / 180;
        getSelectionCenter();

        selectionList.forEach(el => {
            const dx = parseFloat(el.dataset.x) - selectionCenter.x;
            const dy = parseFloat(el.dataset.y) - selectionCenter.y;

            const newX = selectionCenter.x + (dx * Math.cos(angle)) - (dy * Math.sin(angle));
            const newY = selectionCenter.y + (dx * Math.sin(angle)) + (dy * Math.cos(angle));

            el.dataset.x = newX;
            el.dataset.y = newY;
            el.dataset.rotation = (parseFloat(el.dataset.rotation) + modifier) % 360;

            changeTransform(el);
            updateMirror(el);
        });
    }
}

function flip(flipH, flipV) {
    if (selectionList.length === 0) return;
    if (selectionList.length === 1) {
        selectionList.forEach(el => {
            let newFlipX = parseFloat(el.dataset.scaleX) * flipH;
            let newFlipY = parseFloat(el.dataset.scaleY) * flipV;
            el.dataset.scaleX = newFlipX;
            el.dataset.scaleY = newFlipY;

            el.dataset.rotation *= -1;

            changeTransform(el);
            updateMirror(el);
        });
    }
    else {
        getSelectionCenter();
        selectionList.forEach(el => {
            const dx = (parseFloat(el.dataset.x) - selectionCenter.x) * flipH;
            const dy = (parseFloat(el.dataset.y) - selectionCenter.y) * flipV;

            el.dataset.x = selectionCenter.x + dx;
            el.dataset.y = selectionCenter.y + dy;

            el.dataset.scaleX *= flipH;
            el.dataset.scaleY *= flipV;

            el.dataset.rotation *= -1;

            changeTransform(el);
            updateMirror(el);
        });
    }
}

function changeTransform(el) {
    const rotation = el.dataset.rotation || 0;
    const scaleX = el.dataset.scaleX || 1;
    const scaleY = el.dataset.scaleY || 1;

    el.style.left = el.dataset.x + 'px';
    el.style.top = el.dataset.y + 'px';
    el.style.fontSize = el.dataset.fontSize + 'px';

    el.style.transform = `translate(-50%, -50%) rotate(${rotation}deg) scale(${scaleX}, ${scaleY})`;
}

/* --- CONCLUDE --- */

const concludeBtn = document.getElementById('conclude');

const overlay = document.getElementById('overlay');
const concludeScreen = document.getElementById('concludeScreen');

const concludeBack = document.getElementById('concludeBack');

const shareBtn = document.getElementById('share');
const shareScreen = document.getElementById('shareScreen');

const shareBack = document.getElementById('shareBack');

const titleInput = document.getElementById('titleInput');
const authorInput = document.getElementById('authorInput');

const untitledInput = document.getElementById('untitled');
const anonymousInput = document.getElementById('anonymous');


const overlay2 = document.getElementById('overlay2');
const popupSmall = document.getElementById('popupSmall');
const popupMessage = document.getElementById('popupMessage');
const okButton = document.getElementById('ok');


const objCountMessage = document.getElementById('objCount2');
const alphabetCountMessage = document.getElementById('alphabetCount');
const fontCountMessage = document.getElementById('fontCount');
const colorCountMessage = document.getElementById('colorCount');

concludeBtn.addEventListener('click', openConclude);

concludeBack.addEventListener('click', closeConclude);

shareBtn.addEventListener('click', openShare);

shareBack.addEventListener('click', closeShare);

untitledInput.addEventListener('change', markUntitled);
anonymousInput.addEventListener('change', markAnonymous);

untitledInput.checked = false;
anonymousInput.checked = false;

okButton.addEventListener('click', closePopup);


function openConclude() {
    deselect();
    overlay.style.zIndex = zIndexCounter++;
    concludeScreen.style.zIndex = zIndexCounter++;

    overlay.classList.remove('hidden');
    concludeScreen.classList.remove('hidden');
    makePreview(concludeScreen.querySelector('.previewImage'));

    getAlphabetCount();
    getFontCount();
    getColorCount();
    objCountMessage.textContent = objCount;
    alphabetCountMessage.textContent = alphabetCount;
    fontCountMessage.textContent = fontCount;
    colorCountMessage.textContent = colorCount;

    menuOpened = true;
}

function closeConclude() {
    overlay.classList.add('hidden');
    concludeScreen.classList.add('hidden');

    menuOpened = false;
}

function openShare() {
    if (canvas.innerHTML === '') {
        openPopup("You can't share an empty canvas.");
        return;
    }
    shareScreen.style.zIndex = zIndexCounter++;

    shareScreen.classList.remove('hidden');
    concludeScreen.classList.add('hidden');
    makePreview(shareScreen.querySelector('.previewImage'));
}

function closeShare() {
    concludeScreen.classList.remove('hidden');
    shareScreen.classList.add('hidden');
}

function makePreview(previewImage) {
    const scale = 0.5;

    previewImage.innerHTML = canvas.innerHTML;
    previewImage.style.backgroundColor = canvas.style.backgroundColor;

    previewImage.style.width = (canvas.offsetWidth * scale) + 'px';
    previewImage.style.height = (canvas.offsetHeight * scale) + 'px';

    previewImage.querySelectorAll('.element').forEach(el => {
        const rotation = el.dataset.rotation || 0;
        const scaleX = el.dataset.scaleX || 1;
        const scaleY = el.dataset.scaleY || 1;

        el.style.left = (el.dataset.x * scale) + 'px';
        el.style.top = (el.dataset.y * scale) + 'px';
        el.style.fontSize = (el.dataset.fontSize * scale) + 'px';

        el.style.transform = `translate(-50%, -50%) rotate(${rotation}deg) scale(${scaleX}, ${scaleY})`;
    });
}

function markUntitled() {
    if (untitledInput.checked) {
        titleInput.value = "";
        titleInput.classList.add('inactiveForm');
    }
    else titleInput.classList.remove('inactiveForm');
}

function markAnonymous() {
    if (anonymousInput.checked) {
        authorInput.value = "";
        authorInput.classList.add('inactiveForm');
    }
    else authorInput.classList.remove('inactiveForm');
}

function openPopup(message) {
    popupMessage.textContent = message;

    overlay2.style.zIndex = zIndexCounter++;
    popupSmall.style.zIndex = zIndexCounter++;

    overlay2.classList.remove('hidden');
    popupSmall.classList.remove('hidden');
}

function closePopup() {
    overlay2.classList.add('hidden');
    popupSmall.classList.add('hidden');

    if (imageShared) {
        closeShare();
        closeConclude();
        imageShared = false;
    }
}

/* --- INFOBOX --- */

const infoBox = document.createElement('span');
infoBox.className = 'infobox';
infoBox.style.zIndex = '9999';
let visibleInfoBox = false;

const buttonsInfo = [undoBtn, redoBtn, infoBtn, clearButton, delButton, copyButton, Lbutton, Rbutton, Ubutton, Dbutton,
    sizeUpBtn, sizeDownBtn, stretchHBtn, stretchVBtn, rotateDownBtn, rotateUpBtn, flipVBtn, flipHBtn, mirrorButton, downloadBtn,
    chosenColor, bgColor, replaceLetterBtn, fontOneBtn, fontAllBtn, alphabet, modSmallBtn, modMediumBtn, modBigBtn, fontUpBtn,
    fontDownBtn, alphabetUpBtn, alphabetDownBtn, fullColorList, hiddenTopBtn, backBtn, concludeBtn
];
buttonsInfo.forEach(b => {
    b.addEventListener('mouseover', displayInfobox);
    b.addEventListener('mouseleave', removeInfobox);
})

function displayInfobox(e) {
    if (!infoBtn.classList.contains('buttonSelected')) return;

    infoBox.style.left = (e.clientX + 10) + 'px';
    infoBox.style.top = e.clientY + 'px';
    infoBox.textContent = e.currentTarget.dataset.message.replace(/\\n/g, "\n");

    document.body.appendChild(infoBox);
    visibleInfoBox = true;

    document.addEventListener('mousemove', moveInfoBox);
}

function moveInfoBox(e) {
    infoBox.style.left = (e.clientX + 10) + 'px';
    infoBox.style.top = (e.clientY) + 'px';
}

function removeInfobox () {
    if (!infoBtn.classList.contains('buttonSelected')) return;

    if (visibleInfoBox === true) {
        document.body.removeChild(infoBox);

        document.removeEventListener('mousemove', moveInfoBox);
    }
    visibleInfoBox = false;
}

function displayInfoboxSelection() {
    canvasRect = canvas.getBoundingClientRect();
    //infoBox.textContent = 'Selecting mirrored objects with non mirrored ones will automatically break all mirrors.\nShift+click the objects again or press Enter to select them.';
    infoBox.textContent = "You can't select mirrored objects with non-mirrored ones.";
    infoBox.style.fontSize = '16px'
    infoBox.style.left = (canvasRect.left - infoBox.style.maxWidth) + 'px';
    infoBox.style.top = canvasRect.top + 'px';

    document.body.appendChild(infoBox);
    visibleInfoBox = true;
    document.addEventListener('mousedown', () => {
        removeInfoboxSelection();
    });
}

function removeInfoboxSelection() {
    maybeSelect = [];
    if (visibleInfoBox) {
        document.body.removeChild(infoBox);
        canvas.removeEventListener('mousedown', () => {
            removeInfoboxSelection();
        });
        visibleInfoBox = false;
    }
}

/* --- */