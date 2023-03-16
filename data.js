"use strict";

function getProductsList() {
  return JSON.parse(json).goods;
}

function getProductsObject() {
  return JSON.parse(json).goods.reduce((acc, product) => {
    return { ...acc, [product.id]: product };
  }, {});
}

const json = `{
  "goods": [
    {
      "id": "04a57766-c599-4366-8dc4-89ff1ccd3b14",
      "name": "jacket",
      "description": "A very fashionable jacket, we buy it until we have sold out all the goods.",
      "price": 1500,
      "img": "img/1.jpg"
    },
    {
      "id": "61977551-efb2-4f6a-a6ea-da9c3b24798c",
      "name": "coat",
      "description": "Our coat is best of the best",
      "price": 2200,
      "img": "img/2.jpg"
    },
    {
      "id": "5bf21210-6463-49ae-a8c4-4a9ff10002bf",
      "name": "Sweatshirt",
      "description": "Cool, blue hoodie",
      "price": 2500,
      "img": "img/3.jpg"
    },
    {
      "id": "4886ba5c-97d2-4ae4-bcff-b18a86e5cf37",
      "name": "tee-shirt",
      "description": "Nice shirt",
      "price": 2300,
      "img": "img/4.jpg"
    },
    {
      "id": "27bca31f-aac1-4f91-a309-c262046a3d23",
      "name": "jacket",
      "description": "jacket for woman",
      "price": 3400,
      "img": "img/5.jpg"
    },
    {
      "id": "f92016c2-5b27-441d-b2e7-b716e2ad63ea",
      "name": "Women's shirt",
      "description": "Fashionable shirt",
      "price": 5200,
      "img": "img/6.jpg"
    }
  ]
}`;
