const bcrypt = require('bcrypt')
const data = {
  user: [
    {
      name: "inderjeet",
      email: "inderjeet@gmail.com",
      password: bcrypt.hashSync("inder",8),
      isAdmin: true,
    },
    {
      name: "suman",
      email: "suman@gmail.com",
      password: bcrypt.hashSync("suman123",8),
      isAdmin: false,
    }
  ],
  products: [
    {
      name: "Adidas t-shirt",
      category: "t-shirt",
      image: "/images/products/p1.jpg",
      price: 14.59,
      brand: "adidas",
      rating: 4.5,
      reviews: 56,
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit cumque corporis temporibus omnis consequatur optio. Repellendus quasi assumenda aperiam distinctio et voluptatem laborum maxime repellat, totam facilis in rem error.",
      inStock: 50,
    },
    {
      name: "Adidas shirt",
      category: "t-shirt",
      image: "/images/products/p2.jpg",
      price: 169.45,
      brand: "adidas",
      rating: 3.5,
      reviews: 156,
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit cumque corporis temporibus omnis consequatur optio. Repellendus quasi assumenda aperiam distinctio et voluptatem laborum maxime repellat, totam facilis in rem error.",
      inStock: 0,
    },
    {
      name: "Nike shirt",
      category: "shirt",
      image: "/images/products/p3.jpeg",
      price: 285,
      brand: "nike",
      rating: 3.5,
      reviews: 89,
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit cumque corporis temporibus omnis consequatur optio. Repellendus quasi assumenda aperiam distinctio et voluptatem laborum maxime repellat, totam facilis in rem error.",
      inStock: 956,
    },
    {
      name: "Dolce gabana jacket",
      category: "jacket",
      image: "/images/products/p4.jpg",
      price: 850,
      brand: "dolce_gabana",
      rating: 4.0,
      reviews: 63,
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit cumque corporis temporibus omnis consequatur optio. Repellendus quasi assumenda aperiam distinctio et voluptatem laborum maxime repellat, totam facilis in rem error.",
      inStock: 85,
    },
    {
      name: "Nike jeans",
      category: "jeans",
      image: "/images/products/p5.jpg",
      price: 26.3,
      brand: "nike",
      rating: 2.0,
      reviews: 1560,
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit cumque corporis temporibus omnis consequatur optio. Repellendus quasi assumenda aperiam distinctio et voluptatem laborum maxime repellat, totam facilis in rem error.",
      inStock: 0,
    },
    {
      name: "Puma jacket",
      category: "jacket",
      image: "/images/products/p6.jpg",
      price: 785.96,
      brand: "puma",
      rating: 2.5,
      reviews: 279,
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit cumque corporis temporibus omnis consequatur optio. Repellendus quasi assumenda aperiam distinctio et voluptatem laborum maxime repellat, totam facilis in rem error.",
      inStock: 586,
    },
  ],
};
module.exports = data;
