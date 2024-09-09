// index.js

const currencyMap = {
    IND: "₹",   // India
    USA: "$",   // United States
    EUR: "€",   // Eurozone
    GBP: "£",   // United Kingdom
    JPY: "¥",   // Japan
    AUD: "A$",  // Australia
    CAD: "C$",  // Canada
    CNY: "¥",   // China
    CHF: "CHF", // Switzerland
    RUB: "₽",   // Russia
    BRL: "R$",  // Brazil
    ZAR: "R",   // South Africa
    MXN: "$",   // Mexico
    KRW: "₩",   // South Korea
    SEK: "kr",  // Sweden
    NOK: "kr",  // Norway
    DKK: "kr",  // Denmark
    NZD: "NZ$", // New Zealand
    SGD: "S$",  // Singapore
    HKD: "HK$", // Hong Kong
    AED: "د.إ", // United Arab Emirates
    MYR: "RM",  // Malaysia
    PHP: "₱",   // Philippines
    IDR: "Rp",  // Indonesia
    THB: "฿",   // Thailand
    PLN: "zł",  // Poland
    TRY: "₺",   // Turkey
    ARS: "$",   // Argentina
    CLP: "$",   // Chile
    ILS: "₪",   // Israel
    VND: "₫",   // Vietnam
    EGP: "£",   // Egypt
    SAR: "﷼",   // Saudi Arabia
    PKR: "₨",   // Pakistan
    BDT: "৳",   // Bangladesh
    NGN: "₦",   // Nigeria
    KES: "KSh", // Kenya
    COP: "$",   // Colombia
    PEN: "S/",  // Peru
    HUF: "Ft",  // Hungary
    CZK: "Kč",  // Czech Republic
    ISK: "kr",  // Iceland
    RON: "lei", // Romania
    BGN: "лв",  // Bulgaria
  };
  
  function getCurrencySymbol(countryCode) {
    const upperCode = countryCode.toUpperCase();
    if (currencyMap[upperCode]) {
      return currencyMap[upperCode];
    }
    return "Currency symbol not found";
  }
  
  module.exports = getCurrencySymbol;
  