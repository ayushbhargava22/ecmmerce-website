
// DISPLAYING PRODUCTS IN PRODUCTS SECTION 


const productdom = document.querySelector('.products-center')

class Products{
    async getProducts() {
        try{
            let result = await fetch('products.json')
            let data = await result.json();
            let products = data.items ;
            products = products.map(item=> {
                const {title,price} = item.fields ;
                const {id} = item.sys ;
                const image = item.fields.image.fields.file.url ;
                return {title,price,id,image}
            })
            return products
            
        }
        catch (error) {
            console.log(error)
        }
    }
}
            
        

class UI {
    displayProducts(products){
        let result =""
        products.forEach(product => {
            result +=`
            <!-- single product -->
            <article class="product">
              <div class="img-container">
                <img
                  src=${product.image}
                  alt="product"
                  class="product-img"
                />
                <button class="bag-btn" data-id=${product.id}>
                  <i class="fa fa-shopping-cart"></i>
                  add to bag
                </button>
              </div>
    
              <h3>${product.title}</h3>
              <h4>${product.price}</h4>
            </article>
            <!-- end of single product -->
            `;
            
            
        });
        productdom.innerHTML = result;
            
        };
    }



document.addEventListener("DOMContentLoaded" ,() => {
    const ui = new UI ;
    const products = new Products ; 


    products.getProducts().then(products => ui.displayProducts(products));
});


