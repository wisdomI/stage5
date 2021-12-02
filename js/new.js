let discount = [
    {
        cName: 'Triple Jay',
        cModel: 'Futuristic 2095 edition',
        cImage: './images/car4.jfif',
        cPrice: '$4,000'
    },

    {
        cName: 'Quad bay',
        cModel: 'silly seal',
        cImage: './images/car3.jfif',
        cPrice: '$70,000'
    },

    {
        cName: 'SkyWalker',
        cModel: 'SymbolizeG3',
        cImage: './images/Aston Martin V12 Vanquish (2001) Silhouette.png',
        cPrice: '$25,000'
    },

    {
        cName: 'MortalMan Rider',
        cModel: 'Escape L6',
        cImage: './images/incredible Maserati Levante Trofeo.jfif',
        cPrice: '$85,000'
    },

    {
        cName: 'Deal Seal',
        cModel: 'SONTA',
        cImage: './images/car4.jfif',
        cPrice: '$40,000'
    },

    {
        cName: 'SpaceNavigator 30SF',
        cModel: 'Bull limited edition',
        cImage: './images/car3.jfif',
        cPrice: '$58,999'
    },

    {
        cName: 'Walking Thanos',
        cModel: 'The Fifth Stone',
        cImage: './images/Aston Martin V12 Vanquish (2001) Silhouette.png',
        cPrice: '$250,000'
    },

    {
        cName: 'Poseidons chariot',
        cModel: 'chariot of wind L6',
        cImage: './images/incredible Maserati Levante Trofeo.jfif',
        cPrice: '$285,000'
    }
    
]
console.log(discount)

let discountgallery = document.getElementById('discountgallery');
let x = "";
discount.forEach(e => {
    x += `
                
                <div class="row row-cols-1 row-cols-md-2 g-4 px-5 pt-4 d-flex justify-content-center">
                <div class="col-md-6 col-sm-12 col-lg-6">
                <div class="card">
                    <img src="${e.cImage}" class="card-img-top" alt="...">
                    <div class="card-body">
                    <h5 class="card-title">${e.cName}</h5>
                    <p class="card-text">${e.cModel}</p>
                    ${e.cPrice}
                    </div>
                    <button type="button" class="btn btn-primary">Buy Now</button>
                </div>
                </div>
            </div>
            `
    console.log(e)
    discountgallery.innerHTML = x
});
