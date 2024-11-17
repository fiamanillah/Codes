class Product {
    constructor(title, imgUrl, description, price) {
        this.title = title;
        this.imgUrl = imgUrl;
        this.description = description;
        this.price = price;
    }
}
class ProductItem {
    constructor(product){
        this.product = product;
    }
    addToCart(){
        console.log("Adding product");
        console.log(this.product);
        
        
    }
    render(){
        let prodEl = document.createElement("li");
        prodEl.innerHTML = `
            <img src="${this.product.imgUrl}" alt="" srcset="">
            <h1>${this.product.title}</h1>
            <p>${this.product.description}</p>
            <span>\$${this.product.price}</span>
            <button>Buy</button>
        `;
        let addCartBtn = prodEl.querySelector("button");
        addCartBtn.addEventListener("click", this.addToCart.bind(this))
        return prodEl;
    }
}
class ProductList {
    product = [
        new Product("Ispahani Tea", "./assets/news-1.png", "Ispahani tea the best tea in the town", 20),
        new Product("Ispahani Tea", "./assets/news-1.png", "Ispahani tea the best tea in the town", 20),
        new Product("Ispahani Tea", "./assets/news-1.png", "Ispahani tea the best tea in the town", 20),
        new Product("Ispahani Tea", "./assets/news-1.png", "Ispahani tea the best tea in the town", 20),
        new Product("Ispahani Tea", "./assets/news-1.png", "Ispahani tea the best tea in the town", 20),
        new Product("Ispahani Tea", "./assets/news-1.png", "Ispahani tea the best tea in the town", 20),
        new Product("Ispahani Tea", "./assets/news-1.png", "Ispahani tea the best tea in the town", 20),
        new Product("Ispahani Tea", "./assets/news-1.png", "Ispahani tea the best tea in the town", 20),
        new Product("Ispahani Tea", "./assets/news-1.png", "Ispahani tea the best tea in the town", 20),
        new Product("Ispahani Tea", "./assets/news-1.png", "Ispahani tea the best tea in the town", 20),
        new Product("Ispahani Tea", "./assets/news-1.png", "Ispahani tea the best tea in the town", 20),
        new Product("Ispahani Tea", "./assets/news-1.png", "Ispahani tea the best tea in the town", 20),
        new Product("Ispahani Tea", "./assets/news-1.png", "Ispahani tea the best tea in the town", 20),
        new Product("Ispahani Tea", "./assets/news-1.png", "Ispahani tea the best tea in the town", 20),
        new Product("Ispahani Tea", "./assets/news-1.png", "Ispahani tea the best tea in the town", 20),
        new Product("Ispahani Tea", "./assets/news-1.png", "Ispahani tea the best tea in the town", 20),
        new Product("Ispahani Tea", "./assets/news-1.png", "Ispahani tea the best tea in the town", 20),
        new Product("Ispahani Tea", "./assets/news-1.png", "Ispahani tea the best tea in the town", 20),
        new Product("Ispahani Tea", "./assets/news-1.png", "Ispahani tea the best tea in the town", 20),
        new Product("Ispahani Tea", "./assets/news-1.png", "Ispahani tea the best tea in the town", 20),
    ];
    render() {
        const renderHook = document.getElementById("root");
        const prodList = document.createElement("ul");
        prodList.className = "product-container";

        for (const prod of this.product) {
            let productItem = new ProductItem(prod).render();
            prodList.appendChild(productItem);
        }
        renderHook.appendChild(prodList);
    }
}
let productList = new ProductList();
productList.render();

