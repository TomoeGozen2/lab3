class Product {

    id: number;
    title: string;
    description: string;
    category: string;
    price: number;
    discountPercentage: number;
    rating: number;
    stock: number;
    tags: string | number[];
    brand: string;
    sku: string;
    weight: number;
    dimensions: [Object];
    warrantyInformation: string;
    shippingInformation: string;
    availabilityStatus: string;
    reviews: number | string[];
    returnPolicy: string;
    minimumOrderQuantity: number;
    meta: [Object];
    images: number | string;
    thumbnail: string;

    constructor(
        id: number,
        title: string,
        description: string,
        category: string,
        price: number,
        discountPercentage: number,
        rating: number,
        stock: number,
        tags: string | number[],
        brand: string,
        sku: string,
        weight: number,
        dimensions: [Object],
        warrantyInformation: string,
        shippingInformation: string,
        availabilityStatus: string,
        reviews: number | string[],
        returnPolicy: string,
        minimumOrderQuantity: number,
        meta: [Object],
        images: number | string,
        thumbnail: string,
    ) {
        this.id = id;
        this.title = title,
            this.description = description,
            this.category = category,
            this.price = price,
            this.discountPercentage = discountPercentage,
            this.rating = rating,
            this.stock = stock,
            this.tags = tags,
            this.brand = brand,
            this.sku = sku,
            this.weight = weight,
            this.dimensions = dimensions,
            this.warrantyInformation = warrantyInformation,
            this.shippingInformation = shippingInformation,
            this.availabilityStatus = availabilityStatus,
            this.reviews = reviews,
            this.returnPolicy = returnPolicy,
            this.minimumOrderQuantity = minimumOrderQuantity,
            this.meta = meta,
            this.images = images,
            this.thumbnail = thumbnail

    }

    


}




function displayDetails(choice:number): Object {
        let i = 1;
        const url = 'https://dummyjson.com/products/'
        
        fetch(url)
            .then(res => res.json())
            //data is the object. 
            
            .then(data => {
                
                (console.log(`This is the name of the product: ${data.products[choice].title} This is the price of the product:
                 ${data.products[choice].price} Here is a basic description ${data.products[choice].description}`))
               
            });
        
    }

   export function getPriceWithDiscount(chose:number): Object {
        let i = 1;
        const url = 'https://dummyjson.com/products/'
        
        fetch(url)
            .then(res => res.json())
            //data is the object. 
            
            .then(data => {
                
                (console.log(data.products[chose].id))
                console.log( data.products[chose].price += data.products[chose].price - (data.products[chose].price * data.products[chose].discountPercentage/100))
            });
        
    }

displayDetails(2);
getPriceWithDiscount(2);



