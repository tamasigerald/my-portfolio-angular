const setHeight = () => {
    const content$$ = document.querySelector('main.content');
    const background$$ = document.querySelector('div.bg-container');
    const height = window.innerHeight;
    let elements = [content$$, background$$];

    for (const element of elements) {
        element.style.height = `${height}px`;
        console.log(element);
    }

    const mobileMenu$$ = document.querySelector('.mobile__menu');
    mobileMenu$$.style.height = `${height - 70}px`;
}


window.onload = () => {
    setHeight();
    console.log(window.innerHeight);
}