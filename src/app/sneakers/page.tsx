import React from 'react'
import Image from 'next/image'

const Sneakers = () => {

const watchData = [
    { id: 1, name: 'PUMA Sueda', price: 27900, description: 'Classic. Durable. Everyday', image: '/Puma-Suede.avif' },
    { id: 2, name: 'PUMA RS-X', price: 37999, description: 'Bold. Chunky. Dynamic', image: '/Puma-RS-X.jpg' },
    { id: 3, name: 'PUMA Future Rider', price: 20565, description: 'Retro. Vibrant. Comfortable', image: '/Puma-Future-Rider.avif' },
    { id: 4, name: 'NIKE Blazer Mid', price: 9900, description: 'Retro. Sleek. Stylish', image: '/Nike-Blazer-Mid.jpg' },
    { id: 5, name: 'NIKE Air Max 1', price: 9000, description: 'Airy. Sporty. Classic', image: '/nike-air-max.webp' },
    { id: 6, name: 'NIKE Air Force 1', price: 22700, description: 'Timeless. Comfortable. Iconic', image: '/Nike-Air-Force-1.jpeg' },
    { id: 7, name: 'ADIDAS Yeezy Boost 350', price: 7990, description: 'Sleek. Futuristic. Trendy', image: '/Adidas-yeezy-boost-350.jpg' },
    { id: 8, name: 'ADIDAS UltraBoost', price: 45000, description: 'Responsive. Lightweight. Premium.', image: '/adidas-ultraboost.jpg' },
    { id: 9, name: 'ADIDAS SuperStar', price: 9100, description: 'Legendary. Durable. Iconic', image: '/Adidas-Superstar.jpg' },
    ]

    return (
    <div>
    <div className="sneakers">
        {watchData.map((watch) => (
        <div key={watch.id} className="sneaker-card">
            <Image src={watch.image} alt={watch.name} width={400} height={200} />
        <h3>{watch.name}</h3>
        <p>{watch.description}</p>
        <div className="price">${watch.price}</div>
        <button>Add to Cart</button>
        </div>
        ))}
    </div>
    </div>
    )
}

export default Sneakers