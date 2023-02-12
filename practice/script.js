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

const htmlElement = `<div style="color:blue;font-size:10px;">
<section class="product"> 
<h2 class="product-category"  style="text-align: center; text-transform: uppercase">Best Selling Product</h2>

<div class="product-container"  style="height: 500px; width: 85vw; position: relative; overflow: hidden; padding: 20px;">
<div className="product"  style="display: flex;height: 100%;transition: all 0.5s ease 0s;margin-left: -75%;"></div>

</div>

<div style="display: flex; justify-content: space-between;"> 
<button class="pre-btn">&#10094</button>
<button class="nxt-btn">&#10095</button>
</div>

</section>
</div>`;

element.insertAdjacentHTML("afterend", htmlElement);

let html = ``;
for (const item of data) {
  html =
    html +
    `<div className="product-card">
  <div class="product-image">
  <span class="discount-tag">${item?.discount}</span>
  <img src=${item?.img} alt="" class="product-thumb" />
  <button className="card-btn">Add to wishlist</button>
  </div>
  <div className="product-info">
  <h2 className="product-brand">${item?.brand}</h2>
  <p className="product-short-description">${item?.description}</p>
  <span className="price">${item?.price}</span>
  <span className="actual-price">${item?.price}</span>
  </div>
  </div>;
  `;
}

const container = document.querySelector(".product-container");
const slider = document.querySelector(".product");
slider.innerHTML = html;
var slides = document.getElementsByClassName("product-card").length;
const preButton = document.querySelector(".pre-btn");
const nextButton = document.querySelector(".nxt-btn");

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
  getWidth(containerWidth);
}
function getWidth(w) {
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
    preButton.classList.remove("inactive");
  }
  if (currentPosition < slidesCount) {
    nextButton.classList.remove("inactive");
  }
  if (currentPosition >= slidesCount) {
    nextButton.classList.add("inactive");
  }
}

getWidth();

function slideRight() {
  if (currentPosition != 0) {
    slider.style.marginLeft = currentMargin + 100 / slidesPerPage + "%";
    currentMargin += 100 / slidesPerPage;
    currentPosition--;
  }
  if (currentPosition === 0) {
    preButton.classList.add("inactive");
  }
  if (currentPosition < slidesCount) {
    nextButton.classList.remove("inactive");
  }
}

function slideLeft() {
  if (currentPosition != slidesCount) {
    slider.style.marginLeft = currentMargin - 100 / slidesPerPage + "%";
    currentMargin -= 100 / slidesPerPage;
    currentPosition++;
  }
  if (currentPosition == slidesCount) {
    nextButton.classList.add("inactive");
  }
  if (currentPosition > 0) {
    preButton.classList.remove("inactive");
  }
}

leftArrow.addEventListener("click", () => {
  slideRight();
});
rightArrow.addEventListener("click", () => {
  slideLeft();
});
