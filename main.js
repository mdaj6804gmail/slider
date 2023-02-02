
let left = document.getElementById("left");
let slider = document.getElementById("slider");
let right = document.getElementById("right");
let x = 0;
left.onclick = () => {
    if (x > "-5198") {
        x -= 398;
        slider.style.left = x + "px"
    }

}
right.onclick = () => {
    if (x < 0) {
        x += 400;
        slider.style.left = x + "px"
    }

}


let sliderGenarator = () => {
    return slider.innerHTML = sliderData.map((x) => {
        let { img, name, com } = x;
        return `
        <div class="cart">
        <div class="profile">

            <img height="100" width="100" src=${img} alt="">
        </div>
        <div class="mid">
            <div class="name">
                <h3>${name}</h3>
                <img width="80" src="img/five_ster-icon.png" alt="">
            </div>
            <h1>&#8220;</h1>
            <p>${com}</p>
            <div class="shap1"></div>
            <div class="shap2"></div>
        </div>
    </div>




`
    }).join("");
}
sliderGenarator()