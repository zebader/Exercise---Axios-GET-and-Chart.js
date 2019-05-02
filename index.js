const stockInfo  = axios.create({
  baseURL: 'https://api.iextrading.com/1.0/stock/',
});

const stockTicket = "amzn";

  const printTheChart = (stockData) => {
    const stockLabels = stockData.map( element => element.date);
    const stockPrice = stockData.map( element => element.close);
    const ctx = document.getElementById('myChart').getContext('2d');
    const color = stockData.map( element => element = `rgb(${Math.floor(Math.random()*255)},${Math.floor(Math.random()*255)},${Math.floor(Math.random()*255)})`);


    const chart = new Chart(ctx, {
      type: 'pie',
      data: {
        labels: stockLabels,
        datasets: [{
          label: "Stock Chart",
          backgroundColor:  color ,
          borderColor: color,
          data: stockPrice,
        }]
      }
    });
  }; 
  
  
  
  stockInfo.get(`${stockTicket}/chart`)
      .then((response) => printTheChart(response.data) )
      .catch( (error) => console.log(error));