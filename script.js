// 13: this will give us a node list
const panels = document.querySelectorAll('.panel');

// 14: write a function to toggle that class of on or open
function toggleOpen() {
    console.log('clicked!');
    this.classList.toggle('open');
}

// 15: loop for each of the panels, add e listener and run the function
// toggleOpen without () so that the page won't reload
panels.forEach(panel => panel.addEventListener('click', toggleOpen));

// 16: move in first items and last items
function toggleActive(e) {
    console.log(e.propertyName);
    // when the transition 'flex-gorw' is ended, the 'open-active' class will be added in
    if (e.propertyName === 'flex-grow') {
        this.classList.toggle('open-active');
    }
}

// 17: loop through each panels, fire 'toggleActive' when transitionend is triggered
panels.forEach(panel => panel.addEventListener('transitionend', toggleActive));