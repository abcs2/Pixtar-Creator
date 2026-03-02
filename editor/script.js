const alphabetList = [['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z', 'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'], 
['А', 'Б', 'В', 'Г', 'Д', 'Е', 'Ё', 'Ж', 'З', 'И', 'Й', 'К', 'Л', 'М', 'Н', 'О', 'П', 'Р', 'С', 'Т', 'У', 'Ф', 'Х', 'Ц', 'Ч', 'Ш', 'Щ', 'Ъ', 'Ы', 'Ь', 'Э', 'Ю', 'Я', 'а', 'б', 'в', 'г', 'д', 'е', 'ё', 'ж', 'з', 'и', 'й', 'к', 'л', 'м', 'н', 'о', 'п', 'р', 'с', 'т', 'у', 'ф', 'х', 'ц', 'ч', 'ш', 'щ', 'ъ', 'ы', 'ь', 'э', 'ю', 'я'], 
['Α', 'Β', 'Γ', 'Δ', 'Ε', 'Ζ', 'Η', 'Θ', 'Ι', 'Κ', 'Λ', 'Μ', 'Ν', 'Ξ', 'Ο', 'Π', 'Ρ', 'Σ', 'Τ', 'Υ', 'Φ', 'Χ', 'Ψ', 'Ω', 'α', 'β', 'γ', 'δ', 'ε', 'ζ', 'η', 'θ', 'ι', 'κ', 'λ', 'μ', 'ν', 'ξ', 'ο', 'π', 'ρ', 'σ', 'τ', 'υ', 'φ', 'χ', 'ψ', 'ω'], 
['ش', 'س', 'ز', 'ر', 'ذ', 'د', 'خ', 'ح', 'ج', 'ث', 'ت', 'ب', 'ا', 'ء', 'ي', 'و', 'ه', 'ن', 'م', 'ل', 'ك', 'ق', 'ف', 'غ', 'ع', 'ظ', 'ط', 'ض', 'ص', 'ى', 'ئ', 'ؤ', 'ة'], 
['あ', 'か', 'さ', 'た', 'な', 'は', 'ま', 'や', 'ら', 'わ', 'が', 'ざ', 'だ', 'ば', 'ぱ', 'い', 'き', 'し', 'ち', 'に', 'ひ', 'み', 'り', 'ぎ', 'じ', 'ぢ', 'び', 'ぴ', 'う', 'く', 'す', 'つ', 'ぬ', 'ふ', 'む', 'ゆ', 'る', 'ぐ', 'ず', 'づ', 'ぶ', 'ぷ', 'え', 'け', 'せ', 'て', 'ね', 'へ', 'め', 'れ', 'げ', 'ぜ', 'で', 'べ', 'ぺ', 'お', 'こ', 'そ', 'と', 'の', 'ほ', 'も', 'よ', 'ろ', 'を', 'ご', 'ぞ', 'ど', 'ぼ', 'ぽ', 'ん'], 
['ア', 'カ', 'サ', 'タ', 'ナ', 'ハ', 'マ', 'ヤ', 'ラ', 'ワ', 'ガ', 'ザ', 'ダ', 'バ', 'パ', 'イ', 'キ', 'シ', 'チ', 'ニ', 'ヒ', 'ミ', 'リ', 'ギ', 'ジ', 'ヂ', 'ビ', 'ピ', 'ウ', 'ク', 'ス', 'ツ', 'ヌ', 'フ', 'ム', 'ユ', 'ル', 'グ', 'ズ', 'ヅ', 'ブ', 'プ', 'エ', 'ケ', 'セ', 'テ', 'ネ', 'ヘ', 'メ', 'レ', 'ゲ', 'ゼ', 'デ', 'ベ', 'ペ', 'オ', 'コ', 'ソ', 'ト', 'ノ', 'ホ', 'モ', 'ヨ', 'ロ', 'ヲ', 'ゴ', 'ゾ', 'ド', 'ボ', 'ポ', 'ン']];

let modifierLvl = 1;
let modifierMove = 20;
let modifierSize = 20;
let modifierRotate = 15;
let modifierStretch = 0.2;

let dragX = 0;
let dragY = 0;
let dragPreviewX = 0;
let dragPreviewY = 0;

let mirrorIdCounter = 0;
let globalMirrorMode = 'OFF';
let mirrorMode = 'OFF';

let objCount = 0;
let alphabetLvl = 0;
let selection = null;
let previewElement = null;

const canvas = document.getElementById('canvas');

const modMessage = document.getElementById('modMessage');
const objCounter = document.getElementById('objCount');
const mirrorMessage = document.getElementById('mirrorMode');

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

const previewButtons = document.querySelectorAll('.preview');
const alphabet = document.getElementById('alphabet');

canvas.addEventListener('click', deselect);
canvas.addEventListener('wheel', changeSizeScroll);

//previewButtons.forEach(preview => preview.addEventListener('click', () => newElement(preview, 80, 0, 1, 1, canvas.clientWidth / 2, canvas.clientHeight / 2)));
previewButtons.forEach(preview => preview.addEventListener('mousedown', startDragPreview));

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


window.addEventListener('keydown', (event) => {
    switch (event.key) {
        case 'Delete': deleteElement(); break;
        case 'ArrowLeft': move(-modifierMove, 0); break;
        case 'ArrowRight': move(modifierMove, 0); break;
        case 'ArrowUp': move(0, -modifierMove); break;
        case 'ArrowDown': move(0, modifierMove); break;
        case '+': changeSize(modifierSize); break;
        case '=': changeSize(modifierSize); break;
        case '-': changeSize(-modifierSize); break;
        case 'q': rotate(-modifierRotate); break;
        case 'e': rotate(modifierRotate); break;
        case 'Control': changeModifier(); break;
        case 'v': copy(); break;
        case 'ç': changeAlphabet(); break;
    }
});


function changeAlphabet () {
    alphabet.innerHTML = '';

    alphabetLvl++;
    if (alphabetLvl > 5) alphabetLvl = 0;
    
    alphabetList[alphabetLvl].forEach(letter => addLetter(letter));
}

function addLetter(letter) {
    const newLetter = document.createElement('button');
    newLetter.type = 'button';
    newLetter.className = 'preview';
    newLetter.textContent = letter;

    //newLetter.addEventListener('click', () => newElement(newLetter, 80, 0, 1, 1, canvas.clientWidth / 2, canvas.clientHeight / 2));
    newLetter.addEventListener('mousedown', startDragPreview);

    alphabet.appendChild(newLetter);
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
            modifierMove = 15;
            modifierSize = 15;
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


/* --- MIRROR OPERATIONS --- */

function changeMirrorMode() {
    if (mirrorMode == 'ON') {
        if (selection != null && selection.dataset.mirrorId) {
            pair = findMirror(selection);

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
    mirrorEl.style.left = (canvas.clientWidth - originalEl.offsetLeft) + 'px';
    mirrorEl.style.top = originalEl.offsetTop + 'px';

    mirrorEl.style.fontSize = originalEl.style.fontSize;

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

    el.style.fontSize = size + 'px';
    el.dataset.rotation = rotation;
    el.dataset.scaleX = scaleX;
    el.dataset.scaleY = scaleY;

    changeTransform(el);

    canvas.appendChild(el);

    el.style.left = posX + 'px';
    el.style.top = posY + 'px';
    objCount++;
    objCounter.textContent = objCount;

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
        selection.classList.remove('selected');

        if (selection.dataset.mirrorId) {
            const pair = findMirror(selection);
            if(pair) pair.classList.remove('selected');
        }
    }
    selection = el;
    selection.classList.add('selected');

    if (el.dataset.mirrorId) {
        const pair = findMirror(el);

        if (pair) {
            pair.classList.add('selected');
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
}

function clearAll() {
    const elements = canvas.querySelectorAll('.element');
    elements.forEach(el => el.remove());
    canvas.innerHTML = '';
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
    e.stopPropagation();

    previewElement = document.createElement('span');
    previewElement.className = 'preview2';
    previewElement.textContent = e.target.textContent;
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
    if (!selection.classList.contains('selected')) return;
    e.stopPropagation();

    selection = e.currentTarget;

    dragX = e.clientX - selection.offsetLeft;
    dragY = e.clientY - selection.offsetTop;

    document.addEventListener('mousemove', drag);
    document.addEventListener('mouseup', endDrag);
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
    if (newSize < 10) newSize = 10;
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