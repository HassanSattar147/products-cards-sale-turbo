const fbBadge = 'ai';

const BADGE_CONFIG = {
  ai: "AI-Recommended",
  trending: "Trending Seller",
  relisted: "Relisted",
  instant: "Instnat buy",
  drop: "Price Drop",
  negotiable: "Negotiable Finds",
}

const validBadgesKeys = Object.keys(BADGE_CONFIG);

const db = [
  {
    badges: ['ai', 'instant', 'negotiable'],
    img: "0.png",
    timeAgo: '20 minutes ago',
    imagesCount: 5,
    title: "iPhone SE 2022",
    type: "Brand New",
    tooltip: '"Device has a cracked screen with a good LCD and is fully functional. SOLD AS IS. NO RETURNS. Please reference EXAMPLE photos and listing for further details."',
    storage: "256 GB",
    network: "Consumer Cellular",
    condition: "Excellent",
    price: "$ 1399.99",
    isOfferAccepted: true,
    soldTime: "Sold out within 82 Minutes.",
    description: `This phone has several surface scratches and dings, notably some scratches in the glass on the upper left front corner and dings/chips in the metal on the bottom corners and around. This phone has several surface scratches and dings, notably some scratches in the glass on the upper left front corner and dings/chips in the metal on the bottom corners and around.`,
    accordions: [
      `$4.00 Recent drop, 23 minutes ago.`,
      `109.00 Total drop overtime`
    ],
    originalPrice: `(Original price: $1410.00)`,
    footerTexts: [`Cocosprinkles: 12345 (99.8%)`, `Low Trust`, `Brooklyn, NY`],
    isStartingBid: true
  },
  {
    badges: ['ai', 'relisted', 'instant'],
    img: "1.jpg",
    timeAgo: '3 minutes ago',
    imagesCount: 8,
    title: "iPhone SE 2022",
    type: "Not working (other)",
    tooltip: '"Device has a cracked screen with a good LCD and is fully functional. SOLD AS IS. NO RETURNS. Please reference EXAMPLE photos and listing for further details."',
    storage: "256 GB",
    network: "Consumer Cellular",
    condition: "Excellent",
    price: "$ 699.99",
    isOfferAccepted: false,
    soldTime: "Sold out within 82 Minutes.",
    description: `This phone has several surface scratches and dings, notably some scratches in the glass on the upper left front corner and dings/chips in the metal on the bottom corners and around. This phone has several surface scratches and dings, notably some scratches in the glass on the upper left front corner and dings/chips in the metal on the bottom corners and around.`,
    accordions: [
      `$4.00 Recent drop, 23 minutes ago.`,
      `109.00 Total drop overtime`
    ],
    originalPrice: `(Original price: $1410.00)`,
    footerTexts: [`Cocosprinkles: 12345 (99.8%)`, `Low Trust`, `Brooklyn, NY`],
    isStartingBid: false
  },
  {
    badges: ['trending', 'instant', 'negotiable'],
    img: "2.jpg",
    timeAgo: '10 minutes ago',
    imagesCount: 5,
    title: "iPhone SE 2022",
    type: "Used",
    tooltip: '"Device has a cracked screen with a good LCD and is fully functional. SOLD AS IS. NO RETURNS. Please reference EXAMPLE photos and listing for further details."',
    storage: "256 GB",
    network: "Consumer Cellular",
    condition: "Excellent",
    price: "$ 349.99",
    isOfferAccepted: true,
    soldTime: "Sold out within 82 Minutes.",
    description: `This phone has several surface scratches and dings, notably some scratches in the glass on the upper left front corner and dings/chips in the metal on the bottom corners and around. This phone has several surface scratches and dings, notably some scratches in the glass on the upper left front corner and dings/chips in the metal on the bottom corners and around.`,
    accordions: [
      `$4.00 Recent drop, 23 minutes ago.`,
      `109.00 Total drop overtime`
    ],
    originalPrice: `(Original price: $1410.00)`,
    footerTexts: [`Cocosprinkles: 12345 (99.8%)`, `Low Trust`, `Brooklyn, NY`],
    isStartingBid: false
  },
  {
    badges: ['instant', 'drop', 'negotiable'],
    img: "3.jpg",
    timeAgo: '30 minutes ago',
    imagesCount: 10,
    title: "iPhone SE 2022",
    type: "Used",
    tooltip: '"Device has a cracked screen with a good LCD and is fully functional. SOLD AS IS. NO RETURNS. Please reference EXAMPLE photos and listing for further details."',
    storage: "256 GB",
    network: "Consumer Cellular",
    condition: "Excellent",
    price: "$ 749.99",
    isOfferAccepted: false,
    soldTime: "Sold out within 82 Minutes.",
    description: `This phone has several surface scratches and dings, notably some scratches in the glass on the upper left front corner and dings/chips in the metal on the bottom corners and around. This phone has several surface scratches and dings, notably some scratches in the glass on the upper left front corner and dings/chips in the metal on the bottom corners and around.`,
    accordions: [
      `$4.00 Recent drop, 23 minutes ago.`,
      `109.00 Total drop overtime`
    ],
    originalPrice: `(Original price: $1410.00)`,
    footerTexts: [`Cocosprinkles: 12345 (99.8%)`, `Low Trust`, `Brooklyn, NY`],
    isStartingBid: true
  },
];


const getOneProductBadge = (type) => {
  const _type = validBadgesKeys.includes(type) ? type : fbBadge;
  return `
<div class="product-badge badge-${_type}">
  <img class="pb-img-normal" src="./images/${_type}-normal.svg" alt="" />
  <img class="pb-img-active" src="./images/${_type}-active.svg" alt="" />
  <span>${BADGE_CONFIG[_type]}</span>
</div>
  `
}

const getAllProductBadgesHTML = (types) => {
  return types.map(getOneProductBadge).join('\n');
}

const tempBadges = ['ai', 'trending', 'relisted'];
// const tempBadges = ['instant', 'drop', 'negotiable'];

const renderProductCard = ({
  badges,
  img,
  timeAgo,
  imagesCount,
  title,
  type,
  tooltip,
  storage,
  network,
  condition,
  price,
  isOfferAccepted,
  soldTime,
  description,
  accordions,
  originalPrice,
  footerTexts,
  isStartingBid
}) => {

  const isDescLong = description.length >= 180;

  return `
<div class="card-container">
  <div class="card-inner-container">
    <div class="first-row desktop-first-row">
      <div class="badges-container">
        ${getAllProductBadgesHTML(badges)}
      </div>
      <div class="product-image" style="background-image: url(./images/${img});"></div>
      <div>
        <span class="minutes-ago-text">${timeAgo}</span>
        <div class="num-of-pics-card">
          <img src="./images/camera-icon.svg" alt="" />
          <span>${imagesCount}</span>
        </div>
      </div>
    </div>
    <div class="second-row desktop-second-row">
      <span class="product-title"${title}</span>
      <div class="not-working-outer">
        <div class="not-working-inner">
          <span>${type}</span>
        </div>
        <span class="tooltip">
          <span class="qm">?</span>
          <span class="tooltiptext">${tooltip}</span>
        </span>
      </div>
      <div class="second-row-flex">
        <div class="products-specs">
          <div>
            <div class="spec-img-container">
              <img src="./images/specs-img.svg" alt="" />
            </div>
            <span>${storage}</span>
          </div>
          <div>
            <div class="spec-img-container">
              <img src="./images/specs-img3.svg" alt="" />
            </div>
            <span>${network}</span>
          </div>
          <div>
            <div class="spec-img-container">
              <img src="./images/specs-img2.svg" alt="" />
            </div>
            <span>${condition}</span>
          </div>
          <span${soldTime}</span>
        </div>
        <div class="product-price-and-specs">
          <span class="ppas-price">${price}</span>
          <span class="ppas-starting">${isStartingBid ? '(Starting Bid)' : ''}</span>
          <span class="ppas-offers">${isOfferAccepted ? 'Offers Accepted' : ''}</span>
        </div>
      </div>
      <p class="product-details-para">${description.substring(0, 180)}${isDescLong ? '[...]' : ''}</p>
    </div>
    <div class="mobile-first-row">
      <div class="left">
        <div class="product-image" style="background-image: url(./images/${img});"></div>
        <div class="num-of-pics-card">
          <img src="./images/camera-icon.svg" alt="" />
          <span>${imagesCount}</span>
        </div>
        <div class="badges-container">
          ${getAllProductBadgesHTML(badges)}
        </div>
      </div>
      <div class="second-row mobile-second-row">
        <div class="title-and-prices">
          <span class="product-title">${title}</span>
          <div class="not-working-outer">
            <div class="not-working-inner">
              <span>${type}</span>
            </div>
            <span class="tooltip">
              <span class="qm">?</span>
              <span class="tooltiptext">${tooltip}</span>
            </span>
          </div>
          <span class="minutes-ago-text">2 minutes ago</span>
          <div class="product-price-and-specs">
            <span class="ppas-price">${price}</span>
            <span class="ppas-starting">${isStartingBid ? '(Starting Bid)' : ''}</span>
            <span class="ppas-offers">${isOfferAccepted ? 'Offers Accepted' : ''}</span>
          </div>
        </div>
        <div class="second-row-flex">
          <div class="products-specs">
            <div>
              <div class="spec-img-container">
                <img src="./images/specs-img.svg" alt="" />
              </div>
              <span>${storage}</span>
            </div>
            <div>
              <div class="spec-img-container">
                <img src="./images/specs-img3.svg" alt="" />
              </div>
              <span>${network}</span>
            </div>
            <div>
              <div class="spec-img-container">
                <img src="./images/specs-img2.svg" alt="" />
              </div>
              <span>${condition}</span>
            </div>
            <span${soldTime}</span>
          </div>
        </div>
        <p class="product-details-para">${description.substring(0, 180)}${isDescLong ? '[...]' : ''}</p>
      </div>
    </div>
    <div class="third-container">
      <div class="submit-offer-container">
        <img src="./images/lightbulb.svg" alt="" />
        <p>
          Submit your best offer - This Item has been relisted, seller
          is eager to sell it.
        </p>
      </div>
      <div class="price-drop-outer">
        <div class="price-drops">
          ${accordions.map(x => {
    return `
<div>
  <img src="./images/down-arrow.svg" alt="" />
  <span class="price-drop-details">
    ${x}
  </span>
</div>
`
  }).join('\n')
    }
          <div class="price-drop-and-original">
            <span class="original-price"
              >${originalPrice}</span
            >
          </div>
        </div>
        <div class="message-button">
          <img src="./images/envelope-icon.svg" alt="envelop icon" />
        </div>
      </div>
    </div>
  </div>
  <div class="product-card-footer">
    <span>${footerTexts[0]}</span>
    <div class="low-trust">
      <img src="./images/danger.svg" alt="" />
      <span>${footerTexts[1]}</span>
    </div>
    <span>${footerTexts[2]}</span>
  </div>
</div>
`
}

document.querySelector('.cards-grid-container').innerHTML = db.map(renderProductCard).join('\n');