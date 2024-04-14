import React, { useState } from 'react';
import Movie from './Movie';
import Stars from './Stars';
import ReviewList from './ReviewList';
import ReviewForm from './ReviewForm';
import { ReviewData } from './types';


// Define the structure of movie data
interface MovieData {
  id: number;
  title: string;
  imageUrl: string;
  synopsis: string;
  rating: number;
  reviews: string[];
}


// Define props for the MovieList component
interface MovieListProps {
  movies: MovieData[]; // Array of movie data
  updateMovieRating: (movieId: number, newRating: number) => void; // Function to update movie rating
  addReview: (movieId: number, review: string) => void; // Function to add a review for a movie
}

const MovieList: React.FC<MovieListProps> = ({ movies, updateMovieRating, addReview }) => {
  // Function to handle adding a review for a movie
  const handleAddReview = (movieId: number, review: string) => {
    const movieIndex = movies.findIndex(movie => movie.id === movieId); // Find the index of the movie in the array
    if (movieIndex !== -1) { // Check if the movie is found
      const updateMovies = [...movies]; // Create a copy of the movies array
      updateMovies[movieIndex].reviews.push(review); // Add the new review to the movie's reviews array
      setMovieReviews(updateMovies); // Update the state with the new movies array
    }
  };

  return (
    <div>
      {/* Map through the movies array and render a Movie component for each movie */}
      {movies.map(movie => (
        <Movie
          key={movie.id}
          movie={movie}
          updateMovieRating={updateMovieRating}
          addReview={(review) => handleAddReview(movie.id, review)}
        />
      ))}
    </div>
  );
};


export default MovieList;