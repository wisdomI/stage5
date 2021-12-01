let black = [
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
console.log(black)

let moto2 = document.getElementById('gallery02');
let x = "";
cars.forEach(f => {
    x += `
                <div class="card mb-3 mx-2 col-md-6 col-lg-6 col-sm-12" style="max-width: 540px;">
                <div class="row g-0">
                <div class="col-md-4">
                    <img src="${f.image}" class="img-fluid rounded-start" alt="...">
                </div>
                    <div class="col-md-8">
                    <div class="card-body">
                        <h5 class="card-title">${f.name}</h5>
                        <p class="card-text">${f.model}</p>
                        <p class="card-text">${f.price}<small class="text-muted">Last updated 3 mins ago</small></p>
                        <button type="button" class="btn btn-dark text-primary">Get Now</button>
                    </div>
                    </div>
                </div>
            `
    console.log(f)
    moto2.innerHTML = x
});