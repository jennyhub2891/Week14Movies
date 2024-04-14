import React, { useState } from 'react';

interface StarsProps {
    maxStars?: number; // Maximum number of stars (default is 5)
    rating: number; // Current rating
    onStarClick: (rating: number) => void; // Callback function when a star is clicked
}

const Stars: React.FC<StarsProps> = ({ maxStars = 5, onStarClick }) => {
    const [hoverValue, setHoverValue] = useState<number | null>(null); // State to store the hover value

    // Handle click event on a star
    const handleClick = (rating: number) => {
        onStarClick(rating);
    };


    return (
        <div>
            {[...Array(maxStars)].map((_, index) => {
                const rating = index + 1;
                return (
                    <span
                        key={index}
                        onClick={() => handleClick(rating)}
                        onMouseEnter={() => setHoverValue(rating)}
                        onMouseLeave={() => setHoverValue(null)}
                        style={{
                            cursor: 'pointer',
                            color: hoverValue ? (rating <= hoverValue ? 'gold' : 'gray') : 'gray',
                        }}
                    >
                        ★
                    </span>
                );
            })}
        </div>
    );
};

export default Stars;