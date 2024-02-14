import { useState } from 'react';
import './style.css';
import { FaStar } from 'react-icons/fa'

export default function StarRating({ stars = 5 }) {
    let [rating, setRating] = useState(0)
    let [hoverRating, setHoverRating] = useState(0)

    function handleClick(index) {
        // console.log(index)
        setRating(index)
    }

    function handleHover(index) {
        // console.log(index)
        setHoverRating(index)
    }

    function handleMouseLeave() {
        setHoverRating(rating)
    }

    return <div className="star-rating">
        {[...Array(stars)].map((_, index) => {
            index += 1
            return (
                <FaStar
                    key={index}
                    className={index <= (hoverRating || rating) ? 'active' : 'inactive'}
                    onClick={() => handleClick(index)}
                    onMouseMove={() => handleHover(index)}
                    onMouseLeave={() => handleMouseLeave()}
                    size={80}
                />
            )
        })}
    </div>
}