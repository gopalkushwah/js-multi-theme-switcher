const body = document.body;
const img = document.getElementById('img');
const anc = document.getElementsByClassName('ul-item');

const valueChanger = (toAdd, toAddImg, className, imgClassName, color, bgColor) => {
    body.classList.add(toAdd);
    body.classList.remove(className);
    img.classList.add(toAddImg);
    img.classList.remove(imgClassName);
    Array.from(anc).forEach((item) => {
        item.style.color = color
    })
    select.style.backgroundColor = bgColor;
    select.style.color = color;
}

const selectOp = () => {
    const value = document.getElementById('nav-select').value;
    const select = document.getElementById('nav-select');
    const className = body.classList[0];
    const imgClassName = img.classList[0];
    if ((value === "light") || (value === "default(white)")) {
        //   toAdd        toAddImg                             color    bgColor   
        valueChanger("white-bg", "img-dark", className, imgClassName, "black", "white")

    } else if (value === "dark") {
        //   toAdd        toAddImg                             color    bgColor   
        valueChanger("black-bg", "img-white", className, imgClassName, 'white', "#121212")

    } else if (value === "gray") {
        //                  toAdd        toAddImg                             color    bgColor   
        valueChanger("gray-bg", "img-white", className, imgClassName, 'white', "rgb(116, 114, 134)")


    } else if (value === "blue") {
        //                  toAdd        toAddImg                             color    bgColor   
        valueChanger("blue-bg", "img-white", className, imgClassName, 'white', "rgb(2, 1, 18)")


    } else if (value === 'red') {

        //                  toAdd        toAddImg                             color    bgColor   
        valueChanger("red-bg", "img-white", className, imgClassName, 'white', "rgb(38, 1, 1)")
    }
}
