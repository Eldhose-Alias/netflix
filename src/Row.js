import React from 'react'
import { useState,useEffect } from "react";
import instance from './baseUrl';
import axios from 'axios';
// import requests from './request';
import './Row.css';

function Row({title,fetchUrl,isLargeRow}) {
    const [movies , setmovies]=useState([])
    const base_url = "https://image.tmdb.org/t/p/original/";

    // creating function to call api

     async function getData(){
        const outdata =  await instance.get(fetchUrl)
        // console.log(outdata.data.results);
        setmovies(outdata.data.results)
    }

    useEffect(()=>{
        getData()
    },[]
    )
    console.log(movies);

  return (

    <div className='row'>
      <h1>{title}</h1>
      <div className='movies'>
        {
            movies.map(movie=>(
                <img className={`movie ${isLargeRow && "largemovie"}`}
                    src={`${base_url}${isLargeRow?movie.poster_path:movie.backdrop_path}`}
                    alt={movie.original_name}

                />
            ))
        }
      </div>
    </div>
  )
}

export default Row
 