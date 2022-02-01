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
            price:1200,
            countInStock:0,
            brand:'Cat',
            rating:4.5,
            numReviews:10,
            description:'May your Mercury be more Freddie and less retrograde!'
        },
        {
            name:'Izađi mi iz aure',
            category: 'Zenske majice',
            image: '/images/picture2.jpg',
            price:1190,
            countInStock:10,
            brand:'Mackovic',
            rating:4.2,
            numReviews:15,
            description:'Može socijalno distanciranje, može i dva metra razmaka, ali je efektivnije reći: Izađi mi iz aure!'
        },
        {
            name:'Izvodim besne gliste',
            category: 'Unisex majice',
            image: '/images/picture3.jpg',
            price:1400,
            countInStock:25,
            brand:'Cat',
            rating:4,
            numReviews:20,
            description:'Milisav izvodi besne gliste barem dva puta dnevno :)'
        },
        {
            name:'Ju naopako',
            category: 'Muske majice',
            image: '/images/picture4.jpg',
            price:1299,
            countInStock:100,
            brand:'Mackovic',
            rating:4.5,
            numReviews:10,
            description:'Ju, naopako!'
        },
        {
            name:'Puko mi film',
            category: 'Zenske majice',
            image: '/images/picture5.jpg',
            price:1699,
            countInStock:65,
            brand:'Cat',
            rating:4.8,
            numReviews:30,
            description:'Milisavu retko pukne film, samo kad je zdravo gladan.'
        },
        {
            name:'Pun mi kufer',
            category: 'Unisex majice',
            image: '/images/picture6.jpg',
            price:1499,
            countInStock:0,
            brand:'Mackovic',
            rating:4.3,
            numReviews:9,
            description:'Sofisticiran način da izrazite nezadovoljstvo: Pun mi kufer!'
        },
        {
            name:'Bečka mustra',
            category: 'Unisex majice',
            image: '/images/picture7.jpg',
            price:1299,
            countInStock:3,
            brand:'Cat',
            rating:4.3,
            numReviews:15,
            description:'Da li vam je skoro neko rekao da ste prava mustra bečka?'
        },
        {
            name:'Hvatam zjale',
            category: 'Unisex majice',
            image: '/images/picture8.jpg',
            price:1000,
            countInStock:5,
            brand:'Cat',
            rating:4.9,
            numReviews:115,
            description:'Zjale - mistična stvorenja koja se hvataju u dokolici.'
        },
        {
            name:'Hedonizam jača organizam',
            category: 'Unisex majice',
            image: '/images/picture9.jpg',
            price:1399,
            countInStock:6,
            brand:'Mackovic',
            rating:4.8,
            numReviews:125,
            description:'Hedonizam jača organizam.'
        }
        ,
        {
            name:'Ptičica',
            category: 'Zenske majice',
            image: '/images/picture10.jpg',
            price:1299,
            countInStock:10,
            brand:'Mackovic',
            rating:4.6,
            numReviews:15,
            description:'Milisav fotograf, povoljno slika mačeće rođendane i ispraćaje u savršene domove.'
        }
    ]
}

export default data;