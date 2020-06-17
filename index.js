let numbArr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
let color = ['#2b8ead', '#6e97a7', "#2f454e", "#bfbfbf"];
let indexCounter = 0;
let isMobile = false;

function shuffle() {
    let counter = numbArr.length, temp, index;
    while (counter > 0) {
        index = Math.floor(Math.random() * counter);
        counter--;
        temp = numbArr[counter];
        numbArr[counter] = numbArr[index];
        numbArr[index] = temp;
    }
    indexCounter = 0;
    document.getElementById('main').remove();
    grid(document.getElementById('dynamic-grid'));
    return numbArr;

}

function sort() {
    numbArr.sort(function (a, b) {
        return a - b;
    });
    indexCounter = 0;
    document.getElementById('main').remove();
    grid(document.getElementById('dynamic-grid'));
    return numbArr;
}

function appendNumbers(elem) {
    for (let j = indexCounter; j < numbArr.length; j++) {
        elem.append(numbArr[j]);
        indexCounter++;
        break;
    }

}

function grid(el) {
    let container = document.createElement("div");
    container.id = "main";
    container.className = "container";
    for (let i = 0; i < 3; i += 1) {
        let row = document.createElement("div");
        row.className = "row";
        row.id = "row" + i;
        for (let k = 0; k < 3; k += 1) {
            let box = document.createElement("div");
            box.className = "box";
            appendNumbers(box);
            if(isMobile){
                box.style.backgroundColor = '#f3f3f3';
                box.style.borderLeft = `4px solid ${color[Math.floor(Math.random() * 4)]}`;
            }else{
                box.style.backgroundColor = color[Math.floor(Math.random() * 4)];
            }

            row.appendChild(box);
        }

        container.appendChild(row);
    }

    el.appendChild(container);
}

Window.onload = getResolution();

function getResolution() {
    grid(document.getElementById('dynamic-grid'));
    isMobile = false
}



function resizeWindow(){
    const resolution = screen.availWidth;
    const  avlWidth = window.innerWidth;
    if(resolution < 400 || avlWidth < 400 ){
        isMobile = true;
        indexCounter = 0;
        document.getElementById('main').remove();
        grid(document.getElementById('dynamic-grid'));

    }else if((resolution > 400 && resolution < 450) ||(avlWidth > 400 && avlWidth < 450) ){
        isMobile = false;
        indexCounter = 0;
        document.getElementById('main').remove();
        grid(document.getElementById('dynamic-grid'));
    }
}
