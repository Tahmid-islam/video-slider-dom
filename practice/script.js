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
<section class="product" style="position:relative;padding:20px;overflow:hidden;"> 
<h2 class="product-category" style="font-size: 30px;font-weight: 500; margin-bottom: 40px;  text-transform: capitalize;padding:0 10vh;">Best Selling Product</h2>
<div class="product-container" style="display: flex;height: 100%; transition: all .5s; margin-left:50px">
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

const productContainer = document.querySelector(".product-container");
productContainer.innerHTML = html;
