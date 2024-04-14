import React, { useState, useEffect } from 'react';
import Stars from './Stars';
import ReviewList from './ReviewList';
import ReviewForm from './ReviewForm';
import { ReviewData } from './types';

interface MovieProps {
    movie: {
        id: number;
        title: string;
        imageUrl: string;
        synopsis: string;
        rating: number;
        reviews: string[];
    };
    updateMovieRating: (movieId: number, newRating: number) => void;
    overallRating: number;
}

const Movie: React.FC<MovieProps> = ({ movie, updateMovieRating, overallRating }) => {
    // State to manage reviews for this movie
    const [reviews, setReviews] = useState<ReviewData[]>(movie.reviews.map(text => ({ rating: 0, text })));

    // Function to add a new review
    const addReview = (review: ReviewData) => {
        setReviews([...reviews, review]);
    };
    // Function to handle rating change
    const handleRatingChange = (rating: number): void => {
        setReviews(reviews.map(review => ({ ...review, rating })));
    };

    return (
        <div>
            <h2>{movie.title}</h2>
            <img src={movie.imageUrl} alt={movie.title} />
            <p>{movie.synopsis}</p>
            <Stars rating={movie.rating} onStarClick={handleRatingChange} />
            <ReviewList reviews={reviews} />
            <ReviewForm addReview={addReview} />
        </div>
    );
};

export default Movie;