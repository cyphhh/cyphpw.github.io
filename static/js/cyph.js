function translatecontainer() {
    const container = document.getElementById('container');
    container.style.transform = 'translate(-50%, -48vh)';
}

let rainbow = document.getElementById('button');
let counter = 0;

rainbow.addEventListener('click', function() {
  // Increment the counter each time the button is clicked
  counter++;
  console.log(counter);

  if (counter === 15) {
    // If the button has been clicked 15 times, change the background color to rainbow
    document.body.style.animation = 'rainbow 10s ease infinite';
  }
});