import { useEffect, useState } from 'react'
import { BsArrowLeftCircleFill, BsArrowRightCircleFill } from 'react-icons/bs'
import './style.css'


export default function ImageSlider({ url, limit = 5 }) {
    const [images, setImages] = useState([])
    const [currentSlide, setCurrentSlide] = useState(0)
    const [loading, setLoading] = useState(false)
    const [errorMessage, setErrorMessage] = useState(null)

    async function fetchImages(url) {
        try {
            setLoading(true)
            const response = await fetch(`${url}?page=1&limit=${limit}`)
            const data = await response.json()
            if (data) {
                setImages(data)
                setLoading(false)
            }
        } catch (e) {
            setErrorMessage(e.message)
            setLoading(false)
        }
    }

    useEffect(() => {
        if (url !== "") fetchImages(url)
    }, [url])

    if (errorMessage !== null) return <div>Error Occured! {errorMessage}</div>

    function handlePrevious() {
        setCurrentSlide(currentSlide === 0 ? images.length - 1 : currentSlide - 1)
    }

    function handleNext() {
        setCurrentSlide(currentSlide === images.length - 1 ? 0 : currentSlide + 1)
    }

    return <div className='container image-slider'>
        {loading ? <div>Loading data, Please wait!</div> :
            <>
                <BsArrowLeftCircleFill onClick={handlePrevious} className='arrow arrow-left' />
                {images && images.length ?
                    images.map((imageItem, index) => (
                        console.log(imageItem),
                        <img key={imageItem.id} src={imageItem.download_url} alt={imageItem.author} className={currentSlide === index ? 'current-image' : 'current-image hide'} />
                    )) : null}
                <BsArrowRightCircleFill onClick={handleNext} className='arrow arrow-right' />
                <span className="circle-indicator">
                    {images && images.length ? images.map((_, index) => (
                        <button key={index} className={currentSlide === index ? 'current-indicator' : 'current-indicator inactive'} onClick={() => setCurrentSlide(index)}></button>
                    )) : null}
                </span>
            </>
        }
    </div>
}