
//grab data from provided variable
// var data = window.theme.recentlyViewed;
// var recent = data.recent;

//modify the data for making our slider
// var modifiedData = [];
// for (const property in recent) {
//   var productTitle = property;
//   var productObj = {
//     title: productTitle.split("-").join(" ").toUpperCase(),
//     featuredImage: recent[property].featuredImage.replace("_{width}x", ""),
//     url: recent[property].url,
//   };
//   modifiedData.push(productObj);
// }
// modifiedData.reverse()


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
  


var shopifySection = document.querySelector(".widget-image-asset-carousel");

//section
var recentlyViewedSection = document.createElement("section");
recentlyViewedSection.style = "margin: 0.5rem 0rem; padding: 5rem 0rem;";
if(data.length > 0){
  shopifySection.before(recentlyViewedSection);
}

//title
var sectionTitle = document.createElement("h2");
sectionTitle.innerText = "Recently Viewed";
sectionTitle.style = "text-align: center; text-transform: uppercase";

recentlyViewedSection.appendChild(sectionTitle);

//arrow section
var arrowSection = document.createElement("div");
arrowSection.style =
  "display:flex; justify-content: flex-end; padding-right: 10px";

//arrow container
var arrowsContainer = document.createElement("div");
arrowsContainer.style =
  "width: 80px; display: flex; justify-content: space-between;";

var leftArrow = document.createElement("span");
var rightArrow = document.createElement("span");
leftArrow.innerText = "<";
rightArrow.innerText = ">";
leftArrow.className = "arrowBtn";
rightArrow.className = "arrowBtn";

leftArrow.style =
  "border-radius: 50%; border:1px solid #2F2F30; color: #2F2F30; height: 30px; width: 30px; text-align: center; font-weight: 700";
rightArrow.style =
  "border-radius: 50%; border:1px solid #2F2F30; color: #2F2F30; height: 30px; width: 30px; text-align: center; font-weight: 700";

var sliderContainer = document.createElement("div");
sliderContainer.id='grandParent'
sliderContainer.style =
  "display: grid ;place-items: center;width: 100vw ";
//slder parent
var sliderParent = document.createElement("div");

sliderParent.style =
  "  height: 500px;width:85vw;position: relative;overflow: hidden;padding: 20px;";

sliderParent.id = "slider-container";

//slider section
var sliderSection = document.createElement("div");
sliderSection.style =
  "display: flex;height: 100%; transition: all .5s; margin-left:50px";
sliderSection.id = "slider";
sliderSection.className = "slider";

// append arrow section to the recentlyViewedSection
recentlyViewedSection.appendChild(arrowSection);

// append arrow container to the arrow section
arrowSection.appendChild(arrowsContainer);

// append left and right arrow container to the arrow container
arrowsContainer.appendChild(leftArrow);
arrowsContainer.appendChild(rightArrow);

recentlyViewedSection.appendChild(sliderContainer);
sliderContainer.appendChild(sliderParent);
sliderParent.appendChild(sliderSection);


for (var i = 0; i < data.length; i++) {
  var productCart = document.createElement("div");
  productCart.className = "slide";
  var productImage = document.createElement("img");
  var productUrl = document.createElement("a");
  var productTitle = document.createElement("p");

  productCart.style =
    "flex: 0 0 auto;width: 250px;height: 450px; margin-right: 40px;";

  productImage.src = data[i].img;
  productTitle.innerText = data[i].productName;
  productTitle.style.textAlign = "center";
  productUrl.href = data[i].brand;

  sliderSection.appendChild(productCart);
  productCart.appendChild(productUrl);
  productUrl.appendChild(productImage);
  productUrl.appendChild(productTitle);
  
}

var container = document.getElementById('grandParent')
var slider = document.getElementById('slider');
var slides = document.getElementsByClassName('slide').length;
var buttons = document.getElementsByClassName('arrowBtn');

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
  };
  currentMargin = - currentPosition * (100 / slidesPerPage);
  slider.style.marginLeft = currentMargin + '%';
  if (currentPosition > 0) {
      buttons[0].classList.remove('inactive');
  }
  if (currentPosition < slidesCount) {
      buttons[1].classList.remove('inactive');
  }
  if (currentPosition >= slidesCount) {
      buttons[1].classList.add('inactive');
  }
}

setParams();

function slideRight() {
  if (currentPosition != 0) {
      slider.style.marginLeft = currentMargin + (100 / slidesPerPage) + '%';
      currentMargin += (100 / slidesPerPage);
      currentPosition--;
  };
  if (currentPosition === 0) {
      buttons[0].classList.add('inactive');
  }
  if (currentPosition < slidesCount) {
      buttons[1].classList.remove('inactive');
  }
};

function slideLeft() {
  if (currentPosition != slidesCount) {
      slider.style.marginLeft = currentMargin - (100 / slidesPerPage) + '%';
      currentMargin -= (100 / slidesPerPage);
      currentPosition++;
  };
  if (currentPosition == slidesCount) {
      buttons[1].classList.add('inactive');
  }
  if (currentPosition > 0) {
      buttons[0].classList.remove('inactive');
  }
};

leftArrow.addEventListener('click', () => {
  slideRight();
})
rightArrow.addEventListener('click', () => {
  
  slideLeft();
})



