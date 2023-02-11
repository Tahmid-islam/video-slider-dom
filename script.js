let counter = 0;
show(counter);

function navigate(flag) {
  counter += flag;
  show(counter);
}

function show(count) {
  let slides = document.getElementsByClassName("slide");

  for (let x of slides) {
    x.style.display = "none";
  }
  if (count < 0) {
    count = slides.length - 1;
    counter = slides.length - 1;
  }
  if (count >= slides.length) {
    count = 0;
    counter = 0;
  }

  slides[count].style.display = "block";
  setTimeout(() => {
    const MAX = 4;
    // Get an initial random value.
    // Between 0 and 0.999999 (inclusive)
    const initialRandom = Math.random();
    // Multiply it by our MAX, 4.
    // Will be between 0 and 3.999999 (inclusive)
    const multiplied = initialRandom * MAX;
    // Round it down using Math.floor.
    // Will be 0, 1, 2, or 3.
    const answer = Math.floor(multiplied);
    show(answer);
  }, 2000);
}


