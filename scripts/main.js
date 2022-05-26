const myHeading = document.querySelector('h1');
myHeading.textContent = 'Hello world!';
alert('welcome 網頁知識整理中心');
if(!localStorage.getItem('name')){      //可於開發人員工具>Application>Local Storage中找到'name'
    setUsername();
}
else{
    let name = localStorage.getItem('name');
    myHeading.textContent = 'Hello '+ name;
}

//Function
function note(){
    alert('oop, it is hurt!');
}
function setUsername(){
    var name = prompt('Please input your name.');
    if(!name){
        setUsername();
    }
    else{
        localStorage.setItem('name', name);
        myHeading.textContent = 'Hello '+ name;
    }
}
//Event
document.querySelector('h2').addEventListener('click', note);//呼叫Function不需要加()
let img  = document.querySelector('img');
img.addEventListener('click', function(){
    let img_src = img.getAttribute('src');
    if(img_src == 'images/hello_world.jpeg'){
        img.setAttribute('src', 'images/knowledge.png');
    }
    else{
        img.setAttribute('src', 'images/hello_world.jpeg');
    }
});
let b = document.querySelector('button');
b.onclick = setUsername;
//JQuery
