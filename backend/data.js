import bcrypt from 'bcryptjs'; // /dist/bcrypt

const data = {
    users: [
        {
          name: 'Dunja',
          email: 'admin@admin.com',
          password: bcrypt.hashSync('1234', 8),
          isAdmin: true,
        },
        {
          name: 'Test',
          email: 'test@test.com',
          password: bcrypt.hashSync('12345', 8),
          isAdmin: false,
        },
      ],
    products:[
        {
            _id:'1',
            name:'Product 1',
            category: 'Category 1',
            image: "/images/picture1.jpg",
            price:70,
            countInStock:0,
            brand:'Brand 1',
            rating:4.5,
            numReviews:10,
            description:'description 1'
        },
        {
            _id:'2',
            name:'Product 2',
            category: 'Category 2',
            image: '/images/picture2.jpg',
            price:90,
            countInStock:10,
            brand:'Brand 2',
            rating:4.2,
            numReviews:15,
            description:'description 2'
        },
        {
            _id:'3',
            name:'Product 3',
            category: 'Category 3',
            image: '/images/picture3.jpg',
            price:40,
            countInStock:25,
            brand:'Brand 1',
            rating:4,
            numReviews:20,
            description:'description 3'
        },
        {
            _id:'4',
            name:'Product 4',
            category: 'Category 1',
            image: '/images/picture4.jpg',
            price:100,
            countInStock:100,
            brand:'Brand 2',
            rating:4.5,
            numReviews:10,
            description:'description 4'
        },
        {
            _id:'5',
            name:'PUKO MI FILM majica',
            category: 'Category 1',
            image: '/images/picture5.jpg',
            price:120,
            countInStock:65,
            brand:'Brand 1',
            rating:4.8,
            numReviews:30,
            description:'description 1'
        },
        {
            _id:'1',
            name:'Pun mi kufer majica',
            category: 'Category 2',
            image: '/images/picture6.jpg',
            price:70,
            countInStock:0,
            brand:'Brand 3',
            rating:4.3,
            numReviews:9,
            description:'description 6'
        }
    ]
}

export default data;