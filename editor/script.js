const alphabetList =
    [['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z', 'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'], 
    ['А', 'Б', 'В', 'Г', 'Д', 'Е', 'Ё', 'Ж', 'З', 'И', 'Й', 'К', 'Л', 'М', 'Н', 'О', 'П', 'Р', 'С', 'Т', 'У', 'Ф', 'Х', 'Ц', 'Ч', 'Ш', 'Щ', 'Ъ', 'Ы', 'Ь', 'Э', 'Ю', 'Я', 'а', 'б', 'в', 'г', 'д', 'е', 'ё', 'ж', 'з', 'и', 'й', 'к', 'л', 'м', 'н', 'о', 'п', 'р', 'с', 'т', 'у', 'ф', 'х', 'ц', 'ч', 'ш', 'щ', 'ъ', 'ы', 'ь', 'э', 'ю', 'я'], 
    ['Α', 'Β', 'Γ', 'Δ', 'Ε', 'Ζ', 'Η', 'Θ', 'Ι', 'Κ', 'Λ', 'Μ', 'Ν', 'Ξ', 'Ο', 'Π', 'Ρ', 'Σ', 'Τ', 'Υ', 'Φ', 'Χ', 'Ψ', 'Ω', 'α', 'β', 'γ', 'δ', 'ε', 'ζ', 'η', 'θ', 'ι', 'κ', 'λ', 'μ', 'ν', 'ξ', 'ο', 'π', 'ρ', 'σ', 'τ', 'υ', 'φ', 'χ', 'ψ', 'ω'], 
    ['ش', 'س', 'ز', 'ر', 'ذ', 'د', 'خ', 'ح', 'ج', 'ث', 'ت', 'ب', 'ا', 'ء', 'ي', 'و', 'ه', 'ن', 'م', 'ل', 'ك', 'ق', 'ف', 'غ', 'ع', 'ظ', 'ط', 'ض', 'ص', 'ى', 'ئ', 'ؤ', 'ة'], 
    ['あ', 'か', 'さ', 'た', 'な', 'は', 'ま', 'や', 'ら', 'わ', 'が', 'ざ', 'だ', 'ば', 'ぱ', 'い', 'き', 'し', 'ち', 'に', 'ひ', 'み', 'り', 'ぎ', 'じ', 'ぢ', 'び', 'ぴ', 'う', 'く', 'す', 'つ', 'ぬ', 'ふ', 'む', 'ゆ', 'る', 'ぐ', 'ず', 'づ', 'ぶ', 'ぷ', 'え', 'け', 'せ', 'て', 'ね', 'へ', 'め', 'れ', 'げ', 'ぜ', 'で', 'べ', 'ぺ', 'お', 'こ', 'そ', 'と', 'の', 'ほ', 'も', 'よ', 'ろ', 'を', 'ご', 'ぞ', 'ど', 'ぼ', 'ぽ', 'ん'], 
    ['ア', 'カ', 'サ', 'タ', 'ナ', 'ハ', 'マ', 'ヤ', 'ラ', 'ワ', 'ガ', 'ザ', 'ダ', 'バ', 'パ', 'イ', 'キ', 'シ', 'チ', 'ニ', 'ヒ', 'ミ', 'リ', 'ギ', 'ジ', 'ヂ', 'ビ', 'ピ', 'ウ', 'ク', 'ス', 'ツ', 'ヌ', 'フ', 'ム', 'ユ', 'ル', 'グ', 'ズ', 'ヅ', 'ブ', 'プ', 'エ', 'ケ', 'セ', 'テ', 'ネ', 'ヘ', 'メ', 'レ', 'ゲ', 'ゼ', 'デ', 'ベ', 'ペ', 'オ', 'コ', 'ソ', 'ト', 'ノ', 'ホ', 'モ', 'ヨ', 'ロ', 'ヲ', 'ゴ', 'ゾ', 'ド', 'ボ', 'ポ', 'ン']
    ];

const alphabetNames = 
    ['Latin', 'Cyrillic', 'Greek', 'Arabic', 'Hiragana', 'Katakana'];

const charList = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '0', '.', '-', '!', '#', '$', '&', '(', ')', '*', ',', ';', ':', '?', '@', '[', ']', '^', '_', '~', '{', '}', '|', '+', '=', '<', '>', '/', '\\', '%'];

const fontList =
    ["Arial, Helvetica, sans-serif",
    "'Courier New', Courier, monospace",
    "'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif",
    "'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif",
    "'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif",
    "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
    "'Times New Roman', Times, serif",
    "'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif",
    "Cambria, Cochin, Georgia, Times, 'Times New Roman', serif",
    "Georgia, 'Times New Roman', Times, serif",
    "Impact, Haettenschweiler, 'Arial Narrow Bold', sans-serif",
    "Verdana, Geneva, Tahoma, sans-serif",
    "system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif"
    ];

const fontNames = 
    ['Arial',
    'Courier New',
    'Franklin Gothic Medium',
    'Gill Sans',
    'Lucida Sans',
    'Segoe UI',
    'Times New Roman',
    'Trebuchet MS',
    'Cambria',
    'Georgia',
    'Impact',
    'Verdana',
    'system-ui'
    ];

const maxSize = 1600;
const minSize = 20;

let modifierLvl = 1;
let modifierMove;
let modifierSize;
let modifierRotate;
let modifierStretch;

let dragX = 0;
let dragY = 0;
let dragPreviewX = 0;
let dragPreviewY = 0;

let mirrorIdCounter = 0;
let globalMirrorMode = 'OFF';
let mirrorMode = 'OFF';

let objCount = 0;
let alphabetLvl = 0;
let fontLvl = 0;
let zIndexCounter = 1;

let selection = null;
let previewElement = null;

const canvas = document.getElementById('canvas');

const modMessage = document.getElementById('modMessage');
const objCounter = document.getElementById('objCount');
const mirrorMessage = document.getElementById('mirrorMode');
const alphabetMessage = document.getElementById('alphabetMessage');
const fontMessage = document.getElementById('fontMessage');

const Lbutton = document.getElementById('Lbutton');
const Rbutton = document.getElementById('Rbutton');
const Ubutton = document.getElementById('Ubutton');
const Dbutton = document.getElementById('Dbutton');

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

const mirrorButton = document.getElementById('mirror');

const colorPicker = document.getElementById('colorInput');
const chosenColor = document.getElementById('currentColor');
const colorList = document.getElementById('colorList');
const bgColor = document.getElementById('bgColor');

const previewButtons = document.querySelectorAll('.preview');
const alphabet = document.getElementById('alphabet');

canvas.addEventListener('click', deselect);
canvas.addEventListener('wheel', changeSizeScroll);

//previewButtons.forEach(preview => preview.addEventListener('click', () => newElement(preview, 80, 0, 1, 1, canvas.clientWidth / 2, canvas.clientHeight / 2)));
//previewButtons.forEach(preview => preview.addEventListener('mousedown', startDragPreview));

clearButton.addEventListener('click', clearAll);
delButton.addEventListener('click', deleteElement);
copyButton.addEventListener('click', copy);

Lbutton.addEventListener('click', () => move(-modifierMove, 0));
Rbutton.addEventListener('click', () => move(modifierMove, 0));
Ubutton.addEventListener('click', () => move(0, -modifierMove));
Dbutton.addEventListener('click', () => move(0, modifierMove));

sizeUpBtn.addEventListener('click', () => changeSize(modifierSize));
sizeDownBtn.addEventListener('click', () => changeSize(-modifierSize));

stretchHBtn.addEventListener('click', () => stretch(modifierStretch));
stretchVBtn.addEventListener('click', () => stretch(-modifierStretch));

rotateUpBtn.addEventListener('click', () => rotate(modifierRotate));
rotateDownBtn.addEventListener('click', () => rotate(-modifierRotate));

flipHBtn.addEventListener('click', () => flip(-1, 1));
flipVBtn.addEventListener('click', () => flip(1, -1));

mirrorButton.addEventListener('click', changeMirrorMode);

colorPicker.addEventListener('change', () => {
    chosenColor.style.backgroundColor = colorPicker.value;
    changeColor();
});
chosenColor.addEventListener('click', changeColor);


window.addEventListener('keydown', (event) => {
    const key = event.key.toLowerCase();

    switch (key) {
        case 'delete': deleteElement(); break;
        case 'v': copy(); break;
        /* --- */
        case 'arrowleft': move(-modifierMove, 0); break;
        case 'arrowright': move(modifierMove, 0); break;
        case 'arrowup': move(0, -modifierMove); break;
        case 'arrowdown': move(0, modifierMove); break;
        case 'a': move(-modifierMove, 0); break;
        case 'd': move(modifierMove, 0); break;
        case 'w': move(0, -modifierMove); break;
        case 's': move(0, modifierMove); break;
        /* --- */
        case '+': changeSize(modifierSize); break;
        case '=': changeSize(modifierSize); break;
        case '-': changeSize(-modifierSize); break;
        /* --- */
        case 'q': rotate(-modifierRotate); break;
        case 'e': rotate(modifierRotate); break;
        /* --- */
        case 'control': changeModifier(); break;
        case 'ç': changeAlphabet(); break;
        case 'f': changeFont(); break;
    }
});

/* --- INITIALIZATION --- */

alphabetLvl--;
changeAlphabet();
fontLvl--;
changeFont();
modifierLvl--;
changeModifier();
colorPicker.value = '#000000';
chosenColor.style.backgroundColor = colorPicker.value;

/* ---------------------- */


function changeAlphabet () {
    alphabet.innerHTML = '';

    alphabetLvl++;
    if (alphabetLvl === alphabetList.length) alphabetLvl = 0;
    alphabetMessage.textContent = alphabetNames[alphabetLvl];
    
    alphabetList[alphabetLvl].forEach(letter => addLetter(letter));

    alphabet.appendChild(document.createElement('p'));

    charList.forEach(ch => addLetter(ch));
}

function addLetter(letter) {
    const newLetter = document.createElement('button');
    newLetter.type = 'button';
    newLetter.className = 'preview';
    newLetter.style.fontFamily = fontList[fontLvl];
    newLetter.textContent = letter;

    //newLetter.addEventListener('click', () => newElement(newLetter, 80, 0, 1, 1, canvas.clientWidth / 2, canvas.clientHeight / 2));
    newLetter.addEventListener('mousedown', startDragPreview);

    alphabet.appendChild(newLetter);
}

function changeFont () {
    fontLvl++;
    if (fontLvl === fontList.length) fontLvl = 0;

    const previews = alphabet.querySelectorAll('.preview');
    previews.forEach(preview => preview.style.fontFamily = fontList[fontLvl]);

    fontMessage.textContent = fontNames[fontLvl];
}

function changeModifier () {
    modifierLvl++;
    if (modifierLvl > 2) modifierLvl = 0;

    switch (modifierLvl) {
        case 0:
            modifierMove = 1;
            modifierSize = 5;
            modifierRotate = 5;
            modifierStretch = 0.1;
            modMessage.textContent = "small";
            break;
        case 1:
            modifierMove = 20;
            modifierSize = 20;
            modifierRotate = 15;
            modifierStretch = 0.2;
            modMessage.textContent = "medium";
            break;
        case 2:
            modifierMove = 50;
            modifierSize = 50;
            modifierRotate = 30;
            modifierStretch = 0.3;
            modMessage.textContent = "big";
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

    colorBlock.addEventListener('click', () => {
        colorPicker.value = colorBlock.style.backgroundColor;
        chosenColor.style.backgroundColor = colorBlock.style.backgroundColor;
        changeColor();
    });
}

function updateColorList() {
    const canvasColors = document.querySelectorAll('.element');
    const currentColors = new Set();

    canvasColors.forEach(el => {
        currentColors.add(el.style.color);
    })

    colorList.innerHTML = '';
    currentColors.forEach(color => addColor(color));
}

function changeColor() {
    if (selection == null) return;

    selection.style.color = chosenColor.style.backgroundColor;
    updateMirror(selection);
    updateColorList();
}

/* ------------------------ */


/* --- MIRROR OPERATIONS --- */

function changeMirrorMode() {
    if (mirrorMode == 'ON') {
        if (selection != null && selection.dataset.mirrorId) {
            pair = findMirror(selection);

            pair.classList.remove('selected');
            delete selection.dataset.mirrorId;
            delete selection.dataset.mirrorRole;
            delete pair.dataset.mirrorId;
            delete pair.dataset.mirrorRole;
            mirrorIdCounter--;
        }

        globalMirrorMode = 'OFF';
        mirrorMode = 'OFF';
    }
    else {
        globalMirrorMode = 'ON';
        mirrorMode = 'ON';
    }
    
    mirrorMessage.textContent = mirrorMode;
}

function findMirror(el) {
    return [...canvas.querySelectorAll('.element')].find(p => p.dataset.mirrorId === el.dataset.mirrorId && p !== el);
}

function createMirrorPair(originalEl) {
    const mirrorEl = originalEl.cloneNode(true);

    mirrorIdCounter++;
    originalEl.dataset.mirrorId = mirrorIdCounter;
    mirrorEl.dataset.mirrorId = mirrorIdCounter;

    originalEl.dataset.mirrorRole = 'original';
    mirrorEl.dataset.mirrorRole = 'mirror';

    canvas.appendChild(mirrorEl);
    syncMirror(originalEl, mirrorEl);

    objCount++;
    objCounter.textContent = objCount;

    mirrorEl.addEventListener('click', function(e) {
        e.stopPropagation();
        select(mirrorEl);
    })
    mirrorEl.addEventListener('mousedown', startDrag);
}

function syncMirror(originalEl, mirrorEl) {
    mirrorEl.style.fontFamily = originalEl.style.fontFamily;

    mirrorEl.style.left = (canvas.clientWidth - originalEl.offsetLeft) + 'px';
    mirrorEl.style.top = originalEl.offsetTop + 'px';

    mirrorEl.style.fontSize = originalEl.style.fontSize;
    mirrorEl.style.color = originalEl.style.color;

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


function newElement(preview, size, rotation, scaleX, scaleY, posX, posY) {
    const el = document.createElement('span');
    el.className = 'element';
    el.textContent = preview.textContent;
    el.style.fontFamily = preview.style.fontFamily;

    el.style.fontSize = size + 'px';
    el.dataset.rotation = rotation;
    el.dataset.scaleX = scaleX;
    el.dataset.scaleY = scaleY;
    el.style.color = chosenColor.style.backgroundColor;
    el.style.zIndex = preview.style.zIndex;

    changeTransform(el);

    canvas.appendChild(el);

    el.style.left = posX + 'px';
    el.style.top = posY + 'px';
    objCount++;
    objCounter.textContent = objCount;
    updateColorList();

    if (mirrorMode === 'ON') {
        createMirrorPair(el);
    }

    select(el);
    el.addEventListener('click', function(e) {
        e.stopPropagation();
        select(el);
    });
    el.addEventListener('mousedown', startDrag);
}


function select(el) {
    if (selection != null) {
        if (selection.dataset.mirrorId) {
            const pair = findMirror(selection);
            if (pair) pair.classList.remove('selected');
        }
        selection.classList.remove('selected');
    }
    selection = el;
    selection.classList.add('selected');
    selection.style.zIndex = zIndexCounter++;

    if (el.dataset.mirrorId) {
        const pair = findMirror(el);

        if (pair) {
            pair.classList.add('selected');
            pair.style.zIndex = zIndexCounter++;
            mirrorMode = 'ON';
        }
    } else {
        mirrorMode = 'OFF'
    }
    mirrorMessage.textContent = mirrorMode;
}

function deselect() {
    if (selection != null) {
        selection.classList.remove('selected');

        if (selection.dataset.mirrorId) {
            const pair = findMirror(selection);

            if (pair) pair.classList.remove('selected');
        }
        selection = null;

        mirrorMode = globalMirrorMode;
        mirrorMessage.textContent = mirrorMode;
    }
}


function deleteElement() {
    if (selection == null) return;

    if (selection.dataset.mirrorId) {
        const pair = findMirror(selection);

        if (pair) {
            pair.remove();
            objCount--;
        }
    }

    selection.remove();
    objCount--;
    objCounter.textContent = objCount;

    selection = null;
    updateColorList();
}

function clearAll() {
    canvas.innerHTML = '';
    colorList.innerHTML = '';
    zIndexCounter = 1;
    mirrorIdCounter = 0;
    objCount = 0;
    objCounter.textContent = objCount;

    selection = null;
}

function copy() {
    if (selection == null) return;

    let elStyle = window.getComputedStyle(selection);
    let fontSize = parseInt(elStyle.fontSize);
    let move = modifierMove;
    if (modifierLvl == 0) move = 5;
    newElement(selection, fontSize, selection.dataset.rotation, selection.dataset.scaleX, selection.dataset.scaleY, selection.offsetLeft + move, selection.offsetTop + move);

    updateMirror(selection);
}


/* --- CREATE ELEMENT WITH DRAG --- */

function startDragPreview(e) {
    e.preventDefault();
    e.stopPropagation();

    previewElement = document.createElement('span');
    previewElement.className = 'preview2';
    previewElement.style.fontFamily = e.target.style.fontFamily;
    previewElement.textContent = e.target.textContent;
    previewElement.style.color = chosenColor.style.backgroundColor;
    previewElement.style.zIndex = zIndexCounter++;
    document.body.appendChild(previewElement);

    previewElement.style.left = e.pageX + 'px';
    previewElement.style.top = e.pageY + 'px';

    document.addEventListener('mousemove', dragPreview);
    document.addEventListener('mouseup', endDragPreview);
}

function dragPreview(e) {
    previewElement.style.left = e.pageX + 'px';
    previewElement.style.top = e.pageY + 'px';
}

function endDragPreview(e) {
    if (!previewElement) return;
    const canvasRect = canvas.getBoundingClientRect();

    if (e.clientX >= canvasRect.left && e.clientX <= canvasRect.right && e.clientY >= canvasRect.top && e.clientY <= canvasRect.bottom) {
        newElement(previewElement, 80, 0, 1, 1, e.clientX - canvasRect.left, e.clientY - canvasRect.top);
    }

    previewElement.remove();
    previewElement = null;

    document.removeEventListener('mousemove', dragPreview);
    document.removeEventListener('mouseup', endDragPreview);
}

/* -------------------------------- */


function startDrag(e) {
    if (selection == null) return;
    e.stopPropagation();

    if (e.currentTarget.dataset.mirrorId) {
        const pair = findMirror(e.currentTarget);
        if (pair && pair === selection) select(e.currentTarget);
    }

    if (e.currentTarget === selection) {
        dragX = e.clientX - selection.offsetLeft;
        dragY = e.clientY - selection.offsetTop;

        document.addEventListener('mousemove', drag);
        document.addEventListener('mouseup', endDrag);
    }
}

function drag(e) {
    if (selection == null) return;

    posX = e.clientX - dragX;
    posY = e.clientY - dragY;

    const selectionRect = selection.getBoundingClientRect();

    const quarterWidth = selectionRect.width / 4;
    const quarterHeight = selectionRect.height / 4;

    const minX = -quarterWidth;
    const maxX = canvas.clientWidth + quarterWidth;
    const minY = -quarterHeight;
    const maxY = canvas.clientHeight + quarterHeight;

    if (posX < minX) posX = minX;
    if (posX > maxX) posX = maxX;
    if (posY < minY) posY = minY;
    if (posY > maxY) posY = maxY;

    selection.style.left = posX + 'px';
    selection.style.top = posY + 'px';

    updateMirror(selection);
}

function endDrag() {
    document.removeEventListener('mousemove', drag);
    document.removeEventListener('mouseup', endDrag);
}

function move(modifierX, modifierY) {
    if (selection == null) return;

    let posX = selection.offsetLeft + modifierX;
    let posY = selection.offsetTop + modifierY;

    const selectionRect = selection.getBoundingClientRect();

    const quarterWidth = selectionRect.width / 4;
    const quarterHeight = selectionRect.height / 4;

    const minX = -quarterWidth;
    const maxX = canvas.clientWidth + quarterWidth;
    const minY = -quarterHeight;
    const maxY = canvas.clientHeight + quarterHeight;

    if (posX < minX) posX = minX;
    if (posX > maxX) posX = maxX;
    if (posY < minY) posY = minY;
    if (posY > maxY) posY = maxY;
    
    selection.style.left = posX + 'px';
    selection.style.top = posY + 'px';

    updateMirror(selection);
}

function changeSizeScroll(e) {
    if (selection == null) return;

    if (e.deltaY < 0) changeSize(modifierSize);
    else if (e.deltaY > 0) changeSize(-modifierSize);
}

function changeSize(modifier) {
    if (selection == null) return;

    let elStyle = window.getComputedStyle(selection);
    let newSize = parseInt(elStyle.fontSize) + modifier;
    if (newSize < minSize) newSize = minSize;
    else if (newSize > maxSize) newSize = maxSize;
    selection.style.fontSize = newSize + 'px';

    updateMirror(selection);
}

function stretch(modifier) {
    if (selection == null) return;

    let newStretch = selection.dataset.scaleX;
    let multiplier = 1;
    if (newStretch < 0) multiplier = -1;
    newStretch = (Math.abs(parseFloat(newStretch)) + modifier) * multiplier;
    if (Math.abs(newStretch) >= 0.1 && parseFloat(newStretch) * parseFloat(selection.dataset.scaleX) > 0) {
        selection.dataset.scaleX = newStretch;

        changeTransform(selection);

        updateMirror(selection);
    }
}

function rotate(modifier) {
    if (selection == null) return;

    let newRotate = selection.dataset.rotation;
    newRotate = parseInt(newRotate) + modifier;
    newRotate %= 360;
    selection.dataset.rotation = newRotate;

    changeTransform(selection);

    updateMirror(selection);
}

function flip(flipH, flipV) {
    if (selection == null) return;

    let newFlipX = selection.dataset.scaleX;
    let newFlipY = selection.dataset.scaleY;
    newFlipX = parseFloat(newFlipX) * flipH;
    newFlipY = parseFloat(newFlipY) * flipV;
    selection.dataset.scaleX = newFlipX;
    selection.dataset.scaleY = newFlipY;

    changeTransform(selection);

    updateMirror(selection);
}

function changeTransform(el) {
    const rotation = el.dataset.rotation;
    const scaleX = el.dataset.scaleX;
    const scaleY = el.dataset.scaleY;

    el.style.transform = `translate(-50%, -50%) rotate(${rotation}deg) scale(${scaleX}, ${scaleY})`
}