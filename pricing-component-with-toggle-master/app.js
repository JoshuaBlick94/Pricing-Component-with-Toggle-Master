const priceSwitch = document.querySelector(".price-switch");
const basicPrice = document.querySelector('.basic-price');
const professionalPrice = document.querySelector('.professional-price');
const masterPrice = document.querySelector('.master-price');

priceSwitch.addEventListener('change', () => {
    if (priceSwitch.checked) {
        basicPrice.innerText="19.99";
        professionalPrice.innerText="24.99";
        masterPrice.innerText="39.99";
    } else {
        basicPrice.innerText="199.99";
        professionalPrice.innerText="299.99";
        masterPrice.innerText="399.99";
    }
})
