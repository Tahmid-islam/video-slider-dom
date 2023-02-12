//website: https://www.bestbuy.com/?intl=nosplash

const data = [
  {
    id: 1,
    productName: "laptop",
    img: "https://pisces.bbystatic.com/image2/BestBuy_US/images/products/6531/6531072_sd.jpg;maxHeight=240;maxWidth=240",
    price: 100,
    brand: "Hp",
    discount: "50%",
    description:
      "Inline styles are styles that are applied to a specific element within the body section of the webpage.",
  },
  {
    id: 2,
    productName: "laptop",
    img: "https://pisces.bbystatic.com/image2/BestBuy_US/images/products/6529/6529710_sd.jpg;maxHeight=240;maxWidth=240",
    price: 100,
    brand: "Hp",
    discount: "50%",
    description:
      "Inline styles are styles that are applied to a specific element within the body section of the webpage.",
  },
  {
    id: 3,
    productName: "laptop",
    img: "https://pisces.bbystatic.com/image2/BestBuy_US/images/products/6529/6529694_sd.jpg;maxHeight=240;maxWidth=240",
    price: 100,
    brand: "Hp",
    discount: "50%",
    description:
      "Inline styles are styles that are applied to a specific element within the body section of the webpage.",
  },
  {
    id: 4,
    productName: "laptop",
    img: "https://pisces.bbystatic.com/image2/BestBuy_US/images/products/6512/6512622_sd.jpg;maxHeight=240;maxWidth=240",
    price: 100,
    brand: "Hp",
    discount: "50%",
    description:
      "Inline styles are styles that are applied to a specific element within the body section of the webpage.",
  },
  {
    id: 5,
    productName: "laptop",
    img: "https://pisces.bbystatic.com/image2/BestBuy_US/images/products/6512/6512618_sd.jpg;maxHeight=240;maxWidth=240",
    price: 100,
    brand: "Hp",
    discount: "50%",
    description:
      "Inline styles are styles that are applied to a specific element within the body section of the webpage.",
  },
  {
    id: 6,
    productName: "laptop",
    img: "https://pisces.bbystatic.com/image2/BestBuy_US/images/products/6506/6506325_sd.jpg;maxHeight=240;maxWidth=240",
    price: 100,
    brand: "Hp",
    discount: "50%",
    description:
      "Inline styles are styles that are applied to a specific element within the body section of the webpage.",
  },
  {
    id: 6,
    productName: "laptop",
    img: "https://pisces.bbystatic.com/image2/BestBuy_US/images/products/6422/6422916_sd.jpg;maxHeight=240;maxWidth=240",
    price: 100,
    brand: "Hp",
    discount: "50%",
    description:
      "Inline styles are styles that are applied to a specific element within the body section of the webpage.",
  },
];

const element = document.querySelector(".widget-image-asset-carousel");

const htmlElement = `<section style="margin: 0.5rem 0rem; padding: 5rem 0rem">
  <h2 style="text-align: center; text-transform: uppercase">Recently Viewed</h2>
  <div style="display: flex; justify-content: flex-end; padding-right: 10px">
    <div style="width: 80px; display: flex; justify-content: space-between">
      <span
        class="arrowBtn left"
        style="
          border-radius: 50%;
          border: 1px solid rgb(47, 47, 48);
          color: rgb(47, 47, 48);
          height: 30px;
          width: 30px;
          text-align: center;
          font-weight: 700;
        "
        >&#10094
     </span>
        
     <span
        class="arrowBtn right"
        style="
          border-radius: 50%;
          border: 1px solid rgb(47, 47, 48);
          color: rgb(47, 47, 48);
          height: 30px;
          width: 30px;
          text-align: center;
          font-weight: 700;
        "
        >&#10095
     </span>
    </div>
  </div>
  <div
    id="grandParent"
    style="display: grid; place-items: center; width: 100vw"
    width: 100vw"
  >
    <div
      id="slider-container"
      style="
        height: 500px;
        width: 85vw;
        position: relative;
        overflow: hidden;
        padding: 20px;
      "
    >
      <div
        id="slider"
        class="slider"
        style="
          display: flex;
          height: 100%;
          transition: all 0.5s ease 0s;
          margin-left: -75%;
        "
      >

      </div>
    </div>
  </div>
</section>`;

element.insertAdjacentHTML("afterend", htmlElement);

let html = ``;
for (const item of data) {
  html =
    html +
    `<div
      class="slide"
      style="
        flex: 0 0 auto;
        width: 250px;
        height: 450px;
        margin-right: 40px;
      "
    >
      <a href="Hp"
        ><img
          src=${item?.img}
        />
        <p style="text-align: center">${item?.productName}</p></a
      >
    </div>
    `;
}

const slider = document.querySelector(".slider");
slider.innerHTML = html;
var container = document.getElementById("grandParent");
var slides = document.getElementsByClassName("slide").length;
const leftArrow = document.querySelector(".left");
const rightArrow = document.querySelector(".right");

var currentPosition = 0;
var currentMargin = 0;
var slidesPerPage = 0;
var slidesCount = slides - slidesPerPage;
var containerWidth = container.offsetWidth ?? container.offsetWidth;
var prevKeyActive = false;
var nextKeyActive = true;

window.addEventListener("resize", checkWidth);

function checkWidth() {
  containerWidth = container.offsetWidth;
  setParams(containerWidth);
}

function setParams(w) {
  if (w < 551) {
    slidesPerPage = 1;
  } else {
    if (w < 901) {
      slidesPerPage = 2;
    } else {
      if (w < 1101) {
        slidesPerPage = 3;
      } else {
        slidesPerPage = 4;
      }
    }
  }

  slidesCount = slides - slidesPerPage;
  if (currentPosition > slidesCount) {
    currentPosition -= slidesPerPage;
  }
  currentMargin = -currentPosition * (100 / slidesPerPage);
  slider.style.marginLeft = currentMargin + "%";
  if (currentPosition > 0) {
    leftArrow.classList.remove("inactive");
  }
  if (currentPosition < slidesCount) {
    rightArrow.classList.remove("inactive");
  }
  if (currentPosition >= slidesCount) {
    rightArrow.classList.add("inactive");
  }
}

setParams();

function slideRight() {
  if (currentPosition != 0) {
    slider.style.marginLeft = currentMargin + 100 / slidesPerPage + "%";
    currentMargin += 100 / slidesPerPage;
    currentPosition--;
  }
  if (currentPosition === 0) {
    leftArrow.classList.add("inactive");
  }
  if (currentPosition < slidesCount) {
    rightArrow.classList.remove("inactive");
  }
}

function slideLeft() {
  if (currentPosition != slidesCount) {
    slider.style.marginLeft = currentMargin - 100 / slidesPerPage + "%";
    currentMargin -= 100 / slidesPerPage;
    currentPosition++;
  }
  if (currentPosition == slidesCount) {
    rightArrow.classList.add("inactive");
  }
  if (currentPosition > 0) {
    leftArrow.classList.remove("inactive");
  }
}



leftArrow.addEventListener("click", () => {
  slideRight();
});
rightArrow.addEventListener("click", () => {
  slideLeft();
});
