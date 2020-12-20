import bcrypt from 'bcryptjs';

const data = {
    users: [
        {
            name: 'Fred Wills',
            email: 'wills@tmail.com',
            password: bcrypt.hashSync('1234', 8),
            isAdmin: true
        },
        {
            name: 'Harmony Wills',
            email: 'will@tmail.com',
            password: bcrypt.hashSync('1234', 8),
            isAdmin: false
        }
    ],
    products: [
        {
            _id: '1',
            name: 'Nike Slim Shirt',
            category: 'Shirts',
            image: '/images/product-1.jpg',
            price: 120,
            countInStock: 10,
            brand: 'Nike',
            rating: 4.5,
            numReviews: 10,
            description: 'high quality product'
        },
        {
            _id: '2',
            name: 'Adidas Fit Shirt',
            category: 'Shirts',
            image: '/images/product-2.jpg',
            price: 100,
            countInStock: 20,
            brand: 'Adidas',
            rating: 4,
            numReviews: 10,
            description: 'high quality product'
        },
        {
            _id: '3',
            name: 'Lacoste Free Shirt',
            category: 'Shirts',
            image: '/images/product-3.jpg',
            price: 220,
            countInStock: 0,
            brand: 'Lacoste',
            rating: 4.8,
            numReviews: 17,
            description: 'high quality product'
        },
        {
            _id: '4',
            name: 'Nike Slim Pants',
            category: 'Pants',
            image: '/images/product-4.jpg',
            price: 78,
            countInStock: 15,
            brand: 'Nike',
            rating: 4.5,
            numReviews: 14,
            description: 'high quality product'
        },
        {
            _id: '5',
            name: 'Puma Slim Pants',
            category: 'Pants',
            image: '/images/product-5.jpg',
            price: 65,
            countInStock: 5,
            brand: 'Puma',
            rating: 4.5,
            numReviews: 10,
            description: 'high quality product'
        },
        {
            _id: '6',
            name: 'Adidas Fit Pants',
            category: 'Pants',
            image: '/images/product-6.jpg',
            price: 139,
            countInStock: 12,
            brand: 'Adidas',
            rating: 4.5,
            numReviews: 15,
            description: 'high quality product'
        },
    ]
}

export default data;