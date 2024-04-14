import React, { useState } from 'react';
import Stars from './Stars';
import { ReviewData } from './types';

// Define the props for the ReviewForm component
interface ReviewFormProps {
    addReview: (review: ReviewData) => void; // Function to add a new review
}

const ReviewForm: React.FC<ReviewFormProps> = ({ addReview }) => {
    // State for the review text and rating
    const [reviewText, setReviewText] = useState('');
    const [rating, setRating] = useState<number>(0);

    // Handler function for when a star is clicked
    const handleStarClick = (newRating: number) => {
        setRating(newRating);
    };

    // Handler function for form submission
    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault(); // Prevent default form submission behavior
        if (!reviewText || !rating) return; // Check if review text and rating are provided

        // Create a new review object
        const newReview: ReviewData = {
            rating,
            text: reviewText,
        };
        // Log the new review and add it to the list of reviews
        addReview(newReview);
        // Clear the review text and rating
        setReviewText('');
        setRating(0);
    };

    return (
        <form onSubmit={handleSubmit}>
            <textarea
                value={reviewText}
                onChange={e => setReviewText(e.target.value)}
                placeholder="Write your review..."
            />
            <div>
                <label>Rating: </label>
                <Stars rating={rating} onStarClick={setRating} />
                {rating !== 0 && <span>{rating}</span>}
            </div>
            <button type="submit"> Submit Review</button>
        </form>
    );
};

export default ReviewForm;