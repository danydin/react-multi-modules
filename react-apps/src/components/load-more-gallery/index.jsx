import { useEffect, useState } from 'react'
import './style.css'

export default function LoadMoreGallery() {

    const [loading, setLoading] = useState(false)
    const [products, setProducts] = useState([])
    const [loadMoreButton, setLoadMoreButton] = useState(0)

    async function fetchProducts() {
        try {
            setLoading(true)
            const response = await fetch(`https://dummyjson.com/products?limit=20&skip=${loadMoreButton * 20}`)
            const result = await response.json()
            if (result && result.products && result.products.length) {
                setProducts(result.products)
                setLoading(false)
            }
        } catch (err) {
            console.error(err)
            setLoading(false)
        }
    }

    useEffect(() => {
        fetchProducts()
    },[])

    if (loading) return <div>Loading data!</div>

    return <div className="container load-more-gallery">
        <div className='products'>
            {products && products.length ?
                products.map(item =>
                    <div className="product" key={item.id}>
                        <img alt={item.title} src={item.thumbnail} />
                        <p>{item.title}</p>
                    </div>
                )
                : null}
        </div>
        <div className='button-container'>
            <button>Load More</button>
        </div>
    </div>
}