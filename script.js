const fbBadge = 'ai';

const BADGE_CONFIG = {
  ai: "AI-Recommended",
  trending: "Trending Seller",
  relisted: "Relisted",
  instant: "Instant buy",
  drop: "Price Drop",
  negotiable: "Negotiable Finds",
}

const validBadgesKeys = Object.keys(BADGE_CONFIG);

const MBL_BREAK_POINT = 730;
const DESC_LIMIT_PC = 180;
const DESC_LIMIT_MB = 100;

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
    soldTime: "Sold out within 10 Minutes.",
    availableAmount: 0,
    description: `This phone has several surface scratches and dings, notably some scratches in the glass on the upper left front corner and dings/chips in the metal on the bottom corners and around. This phone has several surface scratches and dings, notably some scratches in the glass on the upper left front corner and dings/chips in the metal on the bottom corners and around.`,
    accordions: [
      `$4.00 Recent drop, 23 minutes ago.`,
      `$109.00 Total drop overtime`
    ],
    originalPrice: `(Original price: $1410.00)`,
    footerTexts: [`Cocosprinkles: 12345 (99.8%)`, `Low Trust`, `Brooklyn, NY`],
    isStartingBid: false,
    isLockedIcon: false,
    info: `Submit your best offer - This Item has been relisted, seller is eager to sell it.`,
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
    soldTime: "",
    availableAmount: 1,
    description: `This phone has several surface scratches and dings, notably some scratches in the glass on the upper left front corner and dings/chips in the metal on the bottom corners and around. This phone has several surface scratches and dings, notably some scratches in the glass on the upper left front corner and dings/chips in the metal on the bottom corners and around.`,
    accordions: [
      `$4.00 Recent drop, 23 minutes ago.`,
      `$109.00 Total drop overtime`
    ],
    originalPrice: `(Original price: $1410.00)`,
    footerTexts: [`Cocosprinkles: 12345 (99.8%)`, `Low Trust`, `Brooklyn, NY`],
    isStartingBid: false,
    isLockedIcon: false,
    info: `Submit your best offer - This Item has been relisted, seller is eager to sell it.`,
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
    soldTime: "",
    availableAmount: 2,
    description: `This phone has several surface scratches and dings, notably some scratches in the glass on the upper left front corner and dings/chips in the metal on the bottom corners and around. This phone has several surface scratches and dings, notably some scratches in the glass on the upper left front corner and dings/chips in the metal on the bottom corners and around.`,
    accordions: [
      `$4.00 Recent drop, 23 minutes ago.`,
      `$109.00 Total drop overtime`
    ],
    originalPrice: `(Original price: $1410.00)`,
    footerTexts: [`Cocosprinkles: 12345 (99.8%)`, `Low Trust`, `Brooklyn, NY`],
    isStartingBid: false,
    isLockedIcon: true,
    info: `Submit your best offer - This Item has been relisted, seller is eager to sell it. Some extra text here!`,
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
    availableAmount: 5,
    description: `This phone has several surface scratches and dings, notably some scratches in the glass on the upper left front corner and dings/chips in the metal on the bottom corners and around. This phone has several surface scratches and dings, notably some scratches in the glass on the upper left front corner and dings/chips in the metal on the bottom corners and around.`,
    accordions: [
      `$4.00 Recent drop, 23 minutes ago.`,
      `$109.00 Total drop overtime`
    ],
    originalPrice: `(Original price: $1410.00)`,
    footerTexts: [`Cocosprinkles: 12345 (99.8%)`, `Low Trust`, `Brooklyn, NY`],
    isStartingBid: true,
    isLockedIcon: false,
    info: `Submit your best offer - This Item has been relisted, seller is eager to sell it.`,
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
  isStartingBid,
  isLockedIcon,
  availableAmount,
  info
}) => {

  const DESC_LIMIT = window.innerWidth > MBL_BREAK_POINT ? DESC_LIMIT_PC : DESC_LIMIT_MB;
  const isDescLong = description.length >= DESC_LIMIT;

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
      <span class="product-title">${title}</span>
      <div class="not-working-outer">
        <div class="not-working-inner">
          ${type}
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
              <img src="./images/specs-img${isLockedIcon ? '4' : '3'}.svg" alt="" />
            </div>
            <span>${network}</span>
          </div>
          <div>
            <div class="spec-img-container">
              <img src="./images/specs-img2.svg" alt="" />
            </div>
            <span>${condition}</span>
          </div>
          ${availableAmount == 0
      ? `<span>${soldTime || '&nbsp;'}</span>`
      : availableAmount == 1
        ? `<span>&nbsp;</span>`
        : `<span class="color-gray">${availableAmount} Available</span>`
    }
          
        </div>
        <div class="product-price-and-specs">
          <span class="ppas-price">${price}</span>
          ${isStartingBid ? '<span class="ppas-starting">(Starting Bid)</span>' : ''}
          <span class="ppas-offers">${isOfferAccepted ? 'Offers Accepted' : ''}</span>
        </div>
      </div>
      <p class="product-details-para">"${description.substring(0, DESC_LIMIT_PC)}${isDescLong ? ' [...]' : ''}"</p>
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
          <div class="title-time">
            <span class="product-title">${title}</span>
            <div class="time-ago">
              ${timeAgo}
            </div>
          </div>
          <div class="not-working-outer">
            <div class="not-working-inner">
              ${type}
            </div>
            <span class="tooltip">
              <span class="qm">?</span>
              <span class="tooltiptext">${tooltip}</span>
            </span>
          </div>
          <span class="minutes-ago-text">${timeAgo}</span>
        </div>
        <div class="second-row-flex">
          <div class="product-price-and-specs">
            <span class="ppas-price">${price}</span>
            ${isStartingBid ? '<span class="ppas-starting">(Starting Bid)</span>' : ''}
            <span class="ppas-offers">${isOfferAccepted ? 'Offers Accepted' : ''}</span>
          </div>
          <div class="products-specs">
            <div>
              <div class="spec-img-container">
                <img src="./images/specs-img.svg" alt="" />
              </div>
              <span>${storage}</span>
            </div>
            <div>
              <div class="spec-img-container">
                <img src="./images/specs-img${isLockedIcon ? '4' : '3'}.svg" alt="" />
              </div>
              <span>${network}</span>
            </div>
            <div>
              <div class="spec-img-container">
                <img src="./images/specs-img2.svg" alt="" />
              </div>
              <span>${condition}</span>
            </div>
            ${availableAmount == 0
      ? `<span>${soldTime || '&nbsp;'}</span>`
      : availableAmount == 1
        ? `<span>&nbsp;</span>`
        : `<span class="color-gray">${availableAmount} Available</span>`
    }
          </div>
        </div>
        <p class="product-details-para">"${description.substring(0, DESC_LIMIT_MB)}${isDescLong ? ' [...]' : ''}"</p>
      </div>
    </div>
    <div class="third-container">
      <div class="submit-offer-container">
        <img src="./images/lightbulb.svg" alt="" />
        <p>${info}</p>
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
            <span class="original-price">
              ${originalPrice}
            </span>
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

const renderAllProductCards = () => {
  document.querySelector('.cards-grid-container').innerHTML = db.map(renderProductCard).join('\n');
}
renderAllProductCards();
window.addEventListener('resize', renderAllProductCards)
