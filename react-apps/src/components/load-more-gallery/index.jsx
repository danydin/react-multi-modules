import { useEffect, useState } from 'react'
import './style.css'

export default function LoadMoreGallery() {

    const [loading, setLoading] = useState(false)
    const [products, setProducts] = useState([])
    const [loadMoreButton, setLoadMoreButton] = useState(0)
    const [disableButton, setDisableButton] = useState(false)

    async function fetchProducts() {
        try {
            setLoading(true)
            const response = await fetch(`https://dummyjson.com/products?limit=20&skip=${loadMoreButton * 20}`)
            const results = await response.json()
            if (results && results.products && results.products.length) {
                setProducts((prevData) => [...prevData, ...results.products])
                setLoading(false)
                console.log(results.products)
            }
        } catch (err) {
            console.error(err)
            setLoading(false)
        }
    }

    useEffect(() => {
        fetchProducts()
    }, [loadMoreButton])

    useEffect(() => {
        products && products.length === 100 ? setDisableButton(true) : setDisableButton(false)
    }, [products])

    if (loading) return <div>Loading data!</div>

    return <div className="load-more-gallery-container">
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
            <button disabled={disableButton} onClick={() => setLoadMoreButton(loadMoreButton + 1)}>Load More</button>
            {disableButton ? <p>You have loaded 100 products.</p> : null}
        </div>
    </div>
}