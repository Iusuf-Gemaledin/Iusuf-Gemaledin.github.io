const inputBox = document.getElementById("input-box");
const listContainer = document.getElementById("list-container");

function addTask(){
    if(inputBox.value === ''){
        alert('You must type something!');
    } else {
        let li = document.createElement('li');
        li.innerHTML = inputBox.value;
        li.classList.add('fade-in');
        listContainer.appendChild(li);
        let span = document.createElement("span");
        span.innerHTML = "\u00d7";
        li.appendChild(span);
    }

    inputBox.value = '';
    saveData();
}

listContainer.addEventListener("click", function(e){
    if(e.target.tagName === "LI"){
        e.target.classList.toggle("checked");
        saveData();
    }
    else if(e.target.tagName === "SPAN"){
        e.target.parentElement.remove();
        saveData();
    }
}, false);

function saveData(){
    localStorage.setItem("data", listContainer.innerHTML);
}

function showTask(){
    listContainer.innerHTML = localStorage.getItem("data");
}

showTask();

const bg = document.querySelector('.cursor-background');

document.addEventListener('mousemove', (e) => {
    const x = e.clientX;
    const y = e.clientY;
    bg.style.background = `radial-gradient(circle at ${x}px ${y}px, rgba(255,255,255,0.2), transparent 60%)`;
});

document.addEventListener("mousemove", function(e){
    let x = (e.clientX / window.innerWidth) * 100;
    let y = (e.clientY / window.innerHeight) * 100;
    document.body.style.setProperty('--x', `${x}%`);
    document.body.style.setProperty('--y', `${y}%`);
});

document.addEventListener("mousemove", function(e) {
    let x = (e.clientX / window.innerWidth) * 100;
    let y = (e.clientY / window.innerHeight) * 100;

    document.body.style.setProperty('--x', `${x}%`);
    document.body.style.setProperty('--y', `${y}%`);
});