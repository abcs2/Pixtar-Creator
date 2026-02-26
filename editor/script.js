let newX = 0, newY = 0, startX = 0, startY = 0;

let modifierMove = 10;
let modifierSize = 5;
let modifierRotate = 15;
let selection = null;

const canvas = document.getElementById('canvas');

const Lbutton = document.getElementById('Lbutton');
const Rbutton = document.getElementById('Rbutton');
const Ubutton = document.getElementById('Ubutton');
const Dbutton = document.getElementById('Dbutton');

const sizeUpBtn = document.getElementById('sizeUp');
const sizeDownBtn = document.getElementById('sizeDown');

const rotateUpBtn = document.getElementById('rotateUp');
const rotateDownBtn = document.getElementById('rotateDown');

const clearButton = document.getElementById('clear');
const delButton = document.getElementById('delete');

const previewButtons = document.querySelectorAll('.preview');

canvas.addEventListener('click', deselect);

previewButtons.forEach(preview => preview.addEventListener('click', () => newElement(preview)));

clearButton.addEventListener('click', clearAll);
delButton.addEventListener('click', deleteElement);

Lbutton.addEventListener('click', () => move(-modifierMove, 0));
Rbutton.addEventListener('click', () => move(modifierMove, 0));
Ubutton.addEventListener('click', () => move(0, -modifierMove));
Dbutton.addEventListener('click', () => move(0, modifierMove));

sizeUpBtn.addEventListener('click', () => changeSize(modifierSize));
sizeDownBtn.addEventListener('click', () => changeSize(-modifierSize));

rotateUpBtn.addEventListener('click', () => rotate(modifierRotate));
rotateDownBtn.addEventListener('click', () => rotate(-modifierRotate));


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
    }
})


function newElement(preview) {
    const el = document.createElement('div');
    el.className = 'element';
    el.textContent = preview.textContent;
    canvas.appendChild(el);

    el.style.left = (canvas.clientWidth / 2) + 'px';
    el.style.top = (canvas.clientHeight / 2) + 'px';

    select(el);
    el.addEventListener('click', function(e) {
        e.stopPropagation();
        select(el);
    });
}


function select(el) {
    if (selection != null) {
        selection.classList.remove('selected');
    }
    selection = el;
    selection.classList.add('selected');
}

function deselect() {
    if (selection != null) {
        selection.classList.remove('selected');
        selection = null;
    }
}


function deleteElement() {
    if (selection == null) return;
    selection.remove();

    selection = null;
}

function clearAll() {
    const elements = canvas.querySelectorAll('.element');
    elements.forEach(el => el.remove());

    selection = null;
}


function move(modifierX, modifierY) {
    if (selection == null) return;

    let posX = selection.offsetLeft + modifierX;
    let posY = selection.offsetTop + modifierY;
    checkBorders(posX, posY);
}

function changeSize(modifier) {
    if (selection == null) return;

    let elStyle = window.getComputedStyle(selection);
    let newSize = parseInt(elStyle.fontSize) + modifier;
    selection.style.fontSize = newSize + 'px';

    checkBorders(selection.offsetLeft, selection.offsetTop);
}

function rotate(modifier) {
    if (selection == null) return;

    let newRotate = selection.dataset.rotation || 0;
    newRotate = parseInt(newRotate) + modifier;

    selection.dataset.rotation = newRotate;
    selection.style.transform = `translate(-50%, -50%) rotate(${newRotate}deg)`;

    checkBorders(selection.offsetLeft, selection.offsetTop);
}

function checkBorders(posX, posY) {
    let halfWidth = selection.offsetWidth / 2;
    let halfHeight = selection.offsetHeight / 2;

    if (posX < halfWidth) posX = halfWidth;
    else if (posX > (canvas.clientWidth - halfWidth)) posX = canvas.clientWidth - halfWidth;
    if (posY < halfHeight) posY = halfHeight;
    else if (posY > canvas.clientHeight - halfHeight) posY = canvas.clientHeight - halfHeight
    
    selection.style.left = posX + 'px';
    selection.style.top = posY + 'px';
}


/*-----------------------------------------------------------------*/


const card = document.getElementById('preview');

card.addEventListener('mousedown', mouseDown);

function mouseDown(e) {
    let duplo = document.createElement('div');
    duplo.className = 'card';
    console.log("Clicado");

    // startX = e.clientX;
    // startY = e.clientY;
    // document.addEventListener('mousemove', mouseMove, duplo);
    // document.addEventListener('mouseup', mouseUp);
}

function mouseMove(e, duplo) {
    newX = startX - e.clientX;
    newY = startY - e.clientY;

    startX = e.clientX;
    startY = e.clientY;

    duplo.style.left = (duplo.offsetLeft - newX) + 'px';
    duplo.style.top = (duplo.offsetTop - newY) + 'px';

    console.log({newX, newY});
    console.log({startX, startY});
}

function mouseUp(e) {
    document.removeEventListener('mousemove', mouseMove)
}