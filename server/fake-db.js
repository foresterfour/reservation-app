const Product = require('./model/product');

class FakeDb{
    constructor(){
        this.products =[
            {
                caverimage: "./assets/img/phone-cover.jpg",
                name: 'Phone XL',
                price: 799,
                description: 'A large phone with one of the best screens',
                heading1: 'ヘッディング１',
                heading2: 'ヘッディング2',
                heading3: 'ヘッディング3',
                headingtext1: 'ヘッディングテキスト１',
                headingtext2: 'ヘッディングテキスト２',
                headingtext3: 'ヘッディングテキスト３',
            },
            {
                caverimage: "./assets/img/phone-cover.jpg",
                name: 'Phone Mini',
                price: 699,
                description: 'A great phone with one of the best cameras',
                heading1: 'ヘッディング１',
                heading2: 'ヘッディング2',
                heading3: 'ヘッディング3',
                headingtext1: 'ヘッディングテキスト１',
                headingtext2: 'ヘッディングテキスト２',
                headingtext3: 'ヘッディングテキスト３',
            },
            {
                caverimage: "./assets/img/phone-cover.jpg",
                name: 'Phone Standard',
                price: 299,
                description: '',
                heading1: 'ヘッディング１',
                heading2: 'ヘッディング2',
                heading3: 'ヘッディング3',
                headingtext1: 'ヘッディングテキスト１',
                headingtext2: 'ヘッディングテキスト２',
                headingtext3: 'ヘッディングテキスト３',
            },
            {
                caverimage: "./assets/img/phone-cover.jpg",
                name: 'Phone Special',
                price: 999,
                description: '',
                heading1: 'ヘッディング１',
                heading2: 'ヘッディング2',
                heading3: 'ヘッディング3',
                headingtext1: 'ヘッディングテキスト１',
                headingtext2: 'ヘッディングテキスト２',
                headingtext3: 'ヘッディングテキスト３',
            },
        ]
   } 
   async initDb(){
    await Product.deleteMany({});
    this.seeDb();
   }

   async cleanDb(){
    await Product.deleteMany({});
   }

    pushProductsToDb() {
        this.products.forEach(
            (product) => {
                const newProduct = new Product(product);
                newProduct.save();
            }
        )
    }

    seeDb() {
        this.pushProductsToDb();
    }
}
module.exports = FakeDb;