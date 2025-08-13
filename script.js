// Basic config — put your affiliate ID(s) here.
const AFFILIATE = {
  amazonTag: "YOUR_AMAZON_TAG", // e.g., antonyjasfer-21
  adidasId: "YOUR_ADIDAS_ID",
  nikeId: "YOUR_NIKE_ID"
};

// Example products — replace with your own
const PRODUCTS = [
  {
    id: "jersey-elite",
    name: "Elite Football Jersey",
    price: 79.99,
    rating: 4.6,
    brand: "Adidas",
    image: "assets/placeholder.svg",
    link: "https://www.adidas.com/?affid=" + AFFILIATE.adidasId
  },
  {
    id: "pro-boot",
    name: "Pro Boot X",
    price: 129.00,
    rating: 4.8,
    brand: "Nike",
    image: "assets/placeholder.svg",
    link: "https://www.nike.com/?affid=" + AFFILIATE.nikeId
  },
  {
    id: "running-lite",
    name: "Running Lite Shoes",
    price: 89.50,
    rating: 4.4,
    brand: "Generic",
    image: "assets/placeholder.svg",
    link: "https://www.amazon.in/dp/B0XXXXXX/?tag=" + AFFILIATE.amazonTag
  }
];

// Render products
function renderProducts(list){
  const grid = document.getElementById("product-grid");
  grid.innerHTML = "";
  list.forEach(p => {
    const card = document.createElement("article");
    card.className = "card";
    card.innerHTML = `
      <div class="thumb" style="background-image:url('${p.image}')"></div>
      <h3>${p.name}</h3>
      <div class="meta">
        <span>₹ ${p.price}</span>
        <span>⭐ ${p.rating}</span>
      </div>
      <button class="buy" onclick="window.open('${p.link}', '_blank', 'noopener')">Buy via Affiliate</button>
    `;
    grid.appendChild(card);
  });
}

document.getElementById("year").textContent = new Date().getFullYear();
document.getElementById("shopNow").addEventListener("click", () => {
  document.getElementById("products").scrollIntoView({behavior:"smooth"});
});

renderProducts(PRODUCTS);
