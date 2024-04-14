//I struggled with this project and getting everything to work.  I tried to do a little extra, but should have just focused on the simple and got it working really well.  My stars don't show as yellow when you load the page and only work when clicking a review. You have to add text and stars to a review.  Also I know there are some errors that I haven't been able to fix. 

//BLARG!!

import React, { useState } from 'react';
import MovieList from './MovieList';
import './styles.css';

const App: React.FC = () => {
  // State for storing movie data
  const [movies, setMovies] = useState([
    {
      id: 1,
      title: 'Toy Story 2',
      imageUrl: 'https://cdn.shopify.com/s/files/1/0310/7487/7577/products/00720ToyStory2_Blackstone__Rounded_c58712a9-d364-4e80-999e-98a313c48c51_1280x.webp?v=1673447932',
      synopsis: 'Woody the Cowboy, Buzz Lightyear, and the rest of their friends from the toy box return in this computer-animated sequel to the 1995 hit Toy Story. This time around, Andy, the young boy who is the proud owner of most of our cast of characters, is off at summer camp, giving the toys a few weeks off to do as they please. Woody (voice of Tom Hanks) is unaware that in the years since his model went out of production, he becomes a rare and valuable collector item. An avid toy collector (voice of Wayne Knight) decides that he wants Woody for his collection and swipes him, so Buzz Lightyear (voice of Tim Allen), Hamm (voice of John Ratzenberger), Rex (voice of Wallace Shawn), Slinky Dog (voice of Jim Varney), and Mr. Potato Head (voice of Don Rickles) venture forth to rescue their kidnapped friend before Andy returns. Along with most of the original voice cast, composer Randy Newman returns with a new score and new songs.',
      rating: 3,
      reviews: ['Good movie, kinda kiddy'],
    },
    {
      id: 2,
      title: 'Beauty and the Beast',
      imageUrl: 'https://lumiere-a.akamaihd.net/v1/images/p_beautyandthebeast1991_20488_592ec4b5.jpeg',
      synopsis: 'Beauty and the Beast is widely considered the best animated Disney feature of the studio 1980s/1990s renewal of the form. Based on the classic French fairy tale, it tells the story of Belle, an intelligent young woman scorned by her townspeople for being a bookworm, weary of fighting off the advances of the arrogant Gaston (Richard White), and dreaming of escape. When her father gets lost in the woods and captured by the forbidding Beast (Robby Benson), a once-handsome prince turned into a monster by a witch, Belle goes off to rescue him. Taken with her, the Beast agrees to release Belles father if she agrees to stay with him forever. Initially repulsed, Belle soon finds much to appreciate in the Beasts hidden, tender nature. The Beasts servants -- a clock (David Ogden Stiers), a teapot (Angela Lansbury), and a candlestick (Jerry Orbach) -- see Belle as their salvation: if the Beast and a woman fall in love before his 21st birthday, he will be free from the curse. The songs are first-class, the tale is told with sincerity but not sentimentality, and the characters of Belle and the Beast, complex individuals who defy stereotyping and change over the course of the story, are more three-dimensional than in most live-action movies. The eye-popping animation is beautifully rendered, and Beauty and the Beast certainly deserves its place amongst Disneys animated classics. In 2002, a special 89-minute edition of the film was released in IMAX theaters with the addition of a newly animated song, ""Human Again.""',
      rating: 5,
      reviews: ['A classic!', 'Must-watch for everyone!'],
    },
  ]);

  // Function to update the rating of a movie. Not sure this totally works. 
  const updateMovieRating = (movieId: number, newRating: number) => {
    setMovies(preMovies =>
      preMovies.map(movie => {
        // If the movie id matches the updated movie id, update the rating
        if (movie.id === movieId) {
          return { ...movie, rating: newRating };
        }
        // Otherwise, return the movie unchanged
        return movie;
      }));
  };
  // Calculate the total ratings of all movies
  const totalRatings = movies.reduce((acc, movie) => acc + movie.rating, 0);
  // Calculate the overall rating by dividing the total ratings by the number of movies
  const overallRating = totalRatings / movies.length;

  return (
    <div>
      <h1>Movie Voting and Review App</h1>
      <h2>Overall Rating: {overallRating.toFixed(1)}</h2>
      <MovieList movies={movies} updateMovieRating={updateMovieRating} />
    </div>
  );
};

export default App;
