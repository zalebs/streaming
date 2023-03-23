import { useNavigate } from "react-router-dom";
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import {FaThumbsDown } from 'react-icons/fa';
import { FiThumbsUp, } from 'react-icons/fi';
import { useMemo, useState } from 'react';
import { useEffect } from 'react';
// import $ from 'jquery'
const Card = ({ movies, banner }) => {
  const navigate = useNavigate();
  const img_url = "https://image.tmdb.org/t/p/w300";
  
  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 5,
      slidesToSlide: 5, // optional, default to 1.
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 3,
      slidesToSlide: 3, // optional, default to 1.
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 2,
      slidesToSlide: 2, // optional, default to 1.
    },
  };
  const [like, setLike] = useState(false);
  const [dislike, setDislike] = useState(false);
  const [UpdatedLike, setUpdatedLike] = useState([]);
  // const [UpdatedDislikes,setUpdatedDislikes] = useState(0);
  // let userId=Math.floor(100000 + Math.random() * 900000).toString();
  const userId = useMemo(() => {
    const existingUserId = localStorage.getItem("userId");
    if (existingUserId) {
      return existingUserId;
    }
  }, []);
  useEffect(() => {
    fetchCount();
    
  }, []);
  
  
  const handleLikeClick = async(movieId) => {
    console.log(movieId,"like")
    setLike(true);
    setDislike(false);
    console.log(userId,"testing userid")
    // https://light-cow-bandanna.cyclic.app
    await fetch('https://poised-undershirt-fish.cyclic.app/movies/like', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ "movieId":movieId,userId })
    });
    console.log("handled like")
    fetchCount(movieId)
      
  }
    
  

  const handleDislikeClick = async(movieId) => {

    console.log(movieId,"dislike")
    setDislike(true);
    setLike(false);
    await fetch('https://poised-undershirt-fish.cyclic.app/movies/dislike', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ movieId,userId })
    });
    console.log("handled dislike")
    fetchCount(movieId)
  };

  async function fetchCount() {
    console.log("fetching ...")
    const res = await fetch(`https://poised-undershirt-fish.cyclic.app/data`);
    console.log(res,"response in fetch")
    const data = await res.json();
    console.log(data,"likes updated")
    setUpdatedLike(data);
    
  }

console.log(movies,"moviees")
  return (
    <div className="text-white">
      <div className="slider-wrapper">
        
        <h2 className="banner">{banner}</h2>
        <div className="posters_container">
     
        <Carousel responsive={responsive}>
        {movies.map((movie) => {
            const movieData = UpdatedLike.find(item => item.movieId === movie.id);
            const movieLikes = movieData ? movieData.like : 0;
            const movieDislikes = movieData ? movieData.dislike : 0;
          return(   <div className="movie-card" key={movie.id}>
          <img className="imgfit" src={`${img_url}${movie.poster_path}`} alt={movie.title} />
  <div className="wrapperlikedislike">
  <button className={like ? 'like-btn' : 'like-btn'} onClick={(event)=>{
            event.preventDefault()
            handleLikeClick(movie.id)}}>
     <span className={like ? 'fill' : ''}> <FiThumbsUp />{movieLikes}</span>
      <span className="likebtn">Like</span>
    </button>
    <button className={dislike ? 'dislike-btn clicked' : 'dislike-btn'} onClick={(event)=>{
      event.preventDefault()
      handleDislikeClick(movie.id)}}>
    
      <span className={like ? 'fill' : ''}>   <FaThumbsDown />{movieDislikes}</span>
      <span className="dislikebtn">Dislike</span>
    </button>
  </div>
        </div>)
        })}



      </Carousel>
        </div>
      </div>
    </div>
  );
};

export default Card;
