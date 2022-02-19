/**
 * Project Requirements:
 * --- Change the background colorby generating random RGB color by clicking a Button
 */

// Step 1: Create onLoad handler
// Step 2: Random Color Generator Function
// Step 3: Collect all necessary references
// Step 4: Handle the click event

window.onload = () =>{
    main();
}



function main(){

    const root = document.getElementById('root');
    const btn = document.getElementById('cng-btn');

    btn.addEventListener('click', function(){
        const bgColor = generateRGB();
        root.style.backgroundColor = bgColor;
    });

}




function generateRGB(){
    const red = Math.floor(Math.random() * 255);
    const green = Math.floor(Math.random() * 255);
    const blue = Math.floor(Math.random() * 255);

    return `rgb(${red}, ${green}, ${blue})`
}
