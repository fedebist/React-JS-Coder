const Products = [
    {
      id: 1,
      title: "iPhone 13 Pro Max",
      price: 1099,
      fabricante: "Apple",
      img: ["https://i0.wp.com/hipertextual.com/wp-content/uploads/2021/09/iPhone-13-Pro-00589-scaled.jpg?fit=1200%2C802&ssl=1"],
      almacenamiento: '256 GB',
      stock: 8,
      categoryId: 1,
    },
    {
      id: 2,
      title: "iPhone 13",
      price: 1000,
      fabricante: "Apple",
      img: ["https://i.blogs.es/7342c1/iphone-13-1-/450_1000.jpg"],
      almacenamiento: '128 GB',
      stock: 5,
      categoryId: 1,
    },
    { 
      id: 3,
      title: "Iphone 11 Pro Max",
      price: 900,
      fabricante: "Apple",
      img: ["https://cdn.pocket-lint.com/r/s/1200x/assets/images/149324-phones-review-review-iphone-11-pro-max-review-product-shots-image10-sicm5qtl4z.jpg"],
      almacenamiento: '128 GB',
      stock: 2,
      categoryId: 1,
    },
    {
      id: 4,
      title: "Iphone X",
      price: 550,
      fabricante: "Apple",
      img: ["https://i.blogs.es/e5cf54/iphone-x/840_560.jpg"],
      almacenamiento: '64 GB',
      /* Características */
      release: '12 de septiembre de 2017',
      procesador: 'Apple A11 Bionic',
      ram: '3 GB',
      camera: '12MP',
      peso: '174 gramos',
      ancho: '70,9 mm',
      grosor: '7,7 mm',
      alto: '143,6 mm',
      /* ----------- */
      stock: 1,
      categoryId: 1,
    },
    {
      id: 5,
      title: "Iphone 8 Plus",
      price: 420,
      fabricante: "Apple",
      img: ["https://www.enter.co/wp-content/uploads/2017/10/IMG_4432.jpg"],
      almacenamiento: '256 GB',
      stock: 1,
      categoryId: 1,
    },
    {
      id: 6,
      title: "Galaxy S22 Ultra",
      price: 200000,
      fabricante: "Samsung",
      img: ["https://cdn.pocket-lint.com/r/s/1200x/assets/images/159954-phones-review-hands-on-samsung-galaxy-s22-ultra-review-image1-xsnfadbpku.jpg"],
      almacenamiento: '256 GB',
      stock: 3,
      categoryId: 2,
  },
  {
    id: 7,
    title: "Redmi Note 8",
    price: 65000,
    fabricante: "Xiaomi",
    img: ["https://i.blogs.es/fec79d/img_8972/840_560.jpg"],
    almacenamiento: '64 GB',
    stock: 7,
    categoryId: 3,
},
  ];

export default Products;