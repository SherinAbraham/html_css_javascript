let sliding_panels = document.getElementsByClassName('sliding-panel');
for (let key in sliding_panels) {
    if (typeof sliding_panels[key] == 'object') {
        sliding_panels[key].addEventListener('click', () => {
            removeActivePanels();
            sliding_panels[key].classList.add('active');
        });
    }
}

function removeActivePanels() {
    for (let key in sliding_panels) {
        if (typeof sliding_panels[key] == 'object') {
            sliding_panels[key].classList.remove('active');
        }
    }
}
