import React from 'react';
import { ReviewData } from './types';

// Define the props for the ReviewList component
interface ReviewListProps {
    reviews: ReviewData[]; // Array of review data
};

// ReviewList component displays a list of reviews
const ReviewList: React.FC<ReviewListProps> = ({ reviews }) => {
    return (
        <div>
            <h3>Reviews</h3>
            <ul>
                {reviews.map((review, index) => (
                    <li key={index}>{review.text}</li>)
                )}
            </ul>
        </div>
    );
};

export default ReviewList