let cars = [
    {
        name: 'ASV',
        model: '2034',
        image: './images/car1.jfif',
        price: '$300,000'
    },
  
    {
        name: 'BGGT',
        model: '2020',
        image: './images/car2.jpg',
        price: '$500,000'
    },

    {
        name: 'MERCII',
        model: '2004',
        image: './images/car3.jfif',
        price: '$300,000'
    },

    {
        name: 'MCRONNI',
        model: '2004',
        image: './images/car4.jfif',
        price: '$300,000'
    }
]
console.log(cars)

let moto = document.getElementById('ourgallery');
let html = "";
cars.forEach(e => {
    html += `
            <div class="OurGallery d-flex pt-5 justify-content-center">
                <div class="card mb-3 mx-2">
                <div class="row g-0">
                <div class="col-md-4">
                    <img src=${e.image} class="img-fluid rounded-start" alt="...">
                </div>
                <div class="">
                    <div class="card-body">
                    <h5 class="card-title">${e.name}</h5>
                    <p class="card-text">${e.model}</p>
                    <p class="card-text">${e.price} <br> <small class="text-muted">ONE TIME OFFER ONLY</small></p>
                    <button type="button" class="btn btn-dark text-primary">Get Now</button>
                    </div>
                </div>
                </div>
            </div>
            `
    console.log(e)
    
    moto.innerHTML = html
});


