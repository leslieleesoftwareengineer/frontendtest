import React from 'react'

const Movie = ({title, year, imdbRating, plot, actors, genres, poster}) => {
  return (
    <div className="shadow w-full space-y-1 p-2">
        <picture>
          <img
            className='rounded'
            src={poster}
            alt=""
          ></img>
        </picture>
        <div className="flex justify-between">
          <span className="font-ligt text-sm italic text-slate-500">
            year: {year}
          </span>
          <span className="font-ligt text-sm italic text-slate-500">
            imbdRating: {imdbRating}
          </span>
        </div>
        <p className="text-base font-medium space-x-1">{title}</p>
        <p className="text-sm text-slate-500">
          {plot}
        </p>
        {actors && <p className='text-sm text-slate-500 italic space-x-2'>
          Actor: {actors.map(actor=><a className='text-sky-500 underline decoration-sky-500' href='/'>{actor.name}</a>)}
        </p>}
        {genres &&<p className='text-sm text-slate-500 italic space-x-2'>
          Genres: {genres.map(genre=><a className='text-sky-500 underline decoration-sky-500' href='/'>{genre.name}</a>)}
        </p>}
      </div>
  )
}

export default Movie
