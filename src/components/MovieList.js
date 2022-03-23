import React from 'react'
import MovieCard from './MovieCard';
import img1 from './téléchargement.jpg';
import img2 from './alpha.jpg';
import img3 from './chout.jpg';
import img4 from './split.jpg';
import img5 from './Trailerul-Spider-Man.jpg';


const MovieList = () => {

 const movie=[
     {
    title: "john wick",
    photo:img1,
    rate:"5",
},
{
    title: "alpha",
    photo:img2,
    rate:"5",
},
{
    title: "chouter",
    photo:img3,
    rate:"5",
},
{
    title: "split",
    photo:img4,
    rate:"5",
},
{
    title: "spiderman",
    photo: img5,
    rate:"5",
},
 ];
return (
    <div>{
        movie.map((el)=><MovieCard mov={el}/>)
    }
    </div>
);
};
export default MovieList;