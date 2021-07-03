let prev_btn = document.getElementById('prev');
let next_btn = document.getElementById('next');
let circle_stages = document.getElementsByClassName('circle-stage');

let progress_bar = document.getElementById('changing-bar');

let activeCircle = 1;

prev_btn.addEventListener('click', () => {
    if (activeCircle > 1) {
        activeCircle--;
    }
    changeProgress();
});
next_btn.addEventListener('click', () => {
    if (activeCircle < circle_stages.length) {
        activeCircle++;
    }
    changeProgress();
});

function changeProgress() {
    if (activeCircle == 1) {
        prev_btn.disabled = true;
    } else if (activeCircle == circle_stages.length) {
        next_btn.disabled = true;
    } else {
        prev_btn.disabled = false;
        next_btn.disabled = false;
    }
    progress_bar.style.width = (((activeCircle - 1) / (circle_stages.length - 1)) * 100) + "%";
    // circle_stages.forEach(element, key => {
    //     if (circle_stages[key] == 'object' && key < activeCircle) {
    //         circle.classList.add('active');
    //     } else if (circle_stages[key] == 'object') {
    //         circle.classList.remove('active');
    //     }
    // });
    for (let key in circle_stages) {
        if (typeof circle_stages[key] == 'object') {
            if (key < activeCircle) {
                circle_stages[key].classList.add('active');
            } else {
                circle_stages[key].classList.remove('active');
            }
        }
    }
}