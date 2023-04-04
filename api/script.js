
// Cseréld le az APIKULCS szöveget a saját API kulcsodra, melyet a https://www.alphavantage.co/support/ oldalon készíthetsz
const apiKey = "G5MHB3MAUZ9NKQCW";
const tickerSymbol = "AAPL";
var foramtedLastPrice;

// API URL létrehozása
const apiUrl = `https://www.alphavantage.co/query?function=GLOBAL_QUOTE&symbol=${tickerSymbol}&apikey=${apiKey}`;

// API kérelem létrehozása a fetch() használatával
fetch(apiUrl)
.then(response => response.json())
.then(data => {
    // Az API visszajelzés feldolgozása
    const lastPrice = data["Global Quote"]["05. price"];

    // Adat megjelenítése az oldalon
    const priceElement = document.getElementById("aapl-price");
    foramtedLastPrice=parseFloat(lastPrice);
    foramtedLastPrice.toFixed(2);
    priceElement.textContent = `$${foramtedLastPrice.toFixed(2)}`;
    console.log(new Date().toLocaleString());
})
.catch(error => {
    // Hibák feldolgozása
    console.error("Error fetching AAPL data:", error);
    document.getElementById("aapl-price").textContent="Hiba";
    document.getElementById("hufprice").textContent="Nincs adat";
});

const fromCurrency = "USD";
const toCurrency = "HUF";

// API URL létrehozása
const ExCUrl = `https://www.alphavantage.co/query?function=CURRENCY_EXCHANGE_RATE&from_currency=${fromCurrency}&to_currency=${toCurrency}&apikey=${apiKey}`;

// API kérelem létrehozása a fetch() használatával
fetch(ExCUrl)
.then(response => response.json())
.then(data => {
    // Az API visszajelzés feldolgozása
    const exchangeRate = data["Realtime Currency Exchange Rate"]["5. Exchange Rate"];
    const HufPrice=foramtedLastPrice * exchangeRate;
    document.getElementById("hufprice").textContent=`HUF ${HufPrice.toLocaleString('de-DE', {minimumFractionDigits: 2, maximumFractionDigits: 2})}`;
        const pieces = 2;
        const fullPriceUSD = (formattedLastPrice * pieces).toFixed(2);
        const fullPriceHUF = (HufPrice * pieces).toFixed(2);
        document.getElementById("fullprice").textContent = `${pieces}db = $${fullPriceUSD} vagy HUF ${fullPriceHUF}'
})
.catch(error => {
    // Hibák feldolgozása
    console.error("Error fetching exchange rate data:", error);
    document.getElementById("aapl-price").textContent="Hiba";
    document.getElementById("hufprice").textContent="Nincs adat";
});

// A forint árfolyam megjelenítése és elrelytése
function show_hufprice(){
    document.getElementById("hufprice").className="huf";
    document.getElementById("fullprice").className="fullprice";
}
function hide_hufprice(){
    document.getElementById("hufprice").className="hiddenhuf";
    document.getElementById("fullprice").className="hiddenfullprice";
}
