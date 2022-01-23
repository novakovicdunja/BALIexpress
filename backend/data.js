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
            name:'Freddie Mewcury',
            category: 'Muske majice',
            image: "/images/picture1.jpg",
            price:70,
            countInStock:0,
            brand:'Cat',
            rating:4.5,
            numReviews:10,
            description:'description 1'
        },
        {
            name:'Izadji mi iz aure',
            category: 'Zenske majice',
            image: '/images/picture2.jpg',
            price:90,
            countInStock:10,
            brand:'Mackovic',
            rating:4.2,
            numReviews:15,
            description:'description 2'
        },
        {
            name:'Sve grebem',
            category: 'Unisex majice',
            image: '/images/picture3.jpg',
            price:40,
            countInStock:25,
            brand:'Cat',
            rating:4,
            numReviews:20,
            description:'description 3'
        },
        {
            name:'JU NAOPAKO majica',
            category: 'Muske majice',
            image: '/images/picture4.jpg',
            price:100,
            countInStock:100,
            brand:'Mackovic',
            rating:4.5,
            numReviews:10,
            description:'description 4'
        },
        {
            name:'PUKO MI FILM majica',
            category: 'Zenske majice',
            image: '/images/picture5.jpg',
            price:120,
            countInStock:65,
            brand:'Cat',
            rating:4.8,
            numReviews:30,
            description:'description 5'
        },
        {
            name:'Pun mi kufer majica',
            category: 'Unisex majice',
            image: '/images/picture6.jpg',
            price:70,
            countInStock:0,
            brand:'Mackovic',
            rating:4.3,
            numReviews:9,
            description:'description 6'
        },
        {
            name:'BECKA MUSTRA majica',
            category: 'Unisex majice',
            image: '/images/picture7.jpg',
            price:10,
            countInStock:3,
            brand:'Cat',
            rating:4.3,
            numReviews:15,
            description:'Da li vam je skoro neko rekao da ste prava mustra bečka?'
        }
    ]
}

export default data;