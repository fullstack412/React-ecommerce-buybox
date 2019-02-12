
let data = [];
function getRandomInt(max) {
  return Math.floor(Math.random() * Math.floor(max));
}

function generateProductSummaryData() {
  for (let i = 0; i < 50; i ++) {
    data.push({
      id: i,
      name: 'PetSafe Drinkwell Original Cat and Dog',
      image_url: '',
      number: 'B034H3S',
      flag: 'us',
      has_buybox: getRandomInt(2),
      stock: getRandomInt(11),
      buybox_winrate: getRandomInt(101),
      amz_rank: getRandomInt(30),
      user_rank: getRandomInt(40),
      sellers: getRandomInt(20),
      user_price: parseFloat(getRandomInt(4000)) / 100,
      amz_price: parseFloat(getRandomInt(5000)) / 100,
      lowest_price: parseFloat(getRandomInt(4000)) / 100, // Due to random data, it may be bigger than user/amz price. :)
    });
  }
}

generateProductSummaryData();

export default data;