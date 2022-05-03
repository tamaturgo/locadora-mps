
import React, { useEffect, useState } from 'react'
import Link from 'next/link'
import api from '../../services/api'

interface Film {
  title: string,
  fim_year: number,
  fim_description: string,
  fim_price: number,
  fim_amount: number,
}



export default function Film() {
  const [film, setFilm] = useState<Film>({
    title: '',
    fim_year: 0,
    fim_description: '',
    fim_price: 5,
    fim_amount: 0,
  })

  const [films, setFilms] = useState<Film[]>([])

  const [search, setSearch] = useState('')



  const listFilm = useEffect(() => {
    api.get('/filmes').then(response => {
      setFilms(response.data)
    })
  }, [])


  const eventSearch = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearch(event.target.value)
    console.log(search)
  }

  const handleOnSubmit = (event: React.SyntheticEvent) => {
    event.preventDefault();
    api.post('/addfilme', film).then((response) => {
      console.log(response);
    })
  }

  return (

    <div className='flex flex-row-reverse justify-between'>

      <div className='w-screen flex justify-start flex-col items-center' >
        <h1 className='mb-8 font-bold'>Filmes Cadastrados</h1>
        <div id="localsearchFilter" className="flex flex-row-reverse justify-between">
          <div className="flex flex-row justify-between mb-4">
            <input onChange={eventSearch} className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500" type="text" placeholder="Search" />
         
          </div>

          
          
        </div>

        <ul className='flex flex-col'>
          {
            !(search == "") ?
              films.filter(film => film.title.toLowerCase().includes(search.toLowerCase())).map(film => (
                <li key={film.title} className="p-2 w-96 rounded-md border-[1px] border-gray-300">
                  <span>
                    <h1 className='flex justify-between mb-2 font-bold'>
                      <span>{film.title}</span>
                      <span>Ano: {film.fim_year}</span>
                      </h1>
                    <p>Descrição:{film.fim_description}</p>
                  </span>
                  <span className='flex justify-end'>
                    <p>RS{film.fim_price},00</p>
    
                  </span>
                </li>
              ))

              
              :
              
              films.map(film => (
                <li key={film.title} className="p-2 w-96 rounded-md border-[1px] border-gray-300">
                  <span>
                    <h1 className='flex justify-between mb-2 font-bold'>
                      <span>{film.title}</span>
                      <span>Ano: {film.fim_year}</span>
                      </h1>
                    <p>Descrição:{film.fim_description}</p>
                  </span>
                  <span className='flex justify-end'>
                    <p>RS{film.fim_price},00</p>
    
                  </span>
                </li>
              ))
          }
          

    
           

         

        </ul>

      </div>

      <div className="w-screen flex justify-center flex-col items-center">
        <h1 className='font-bold'>Cadastrar Filme</h1>
        <form className="flex flex-col" onSubmit={handleOnSubmit}>
          <label htmlFor="title">Title</label>
          <input
            type="text"
            id="title"
            className="h-10 w-96 rounded-md border-[1px] border-gray-300"
            onChange={(e) => setFilm({ ...film, title: e.target.value })}
          />
          <label htmlFor="desc">Description</label>
          <input
            type="text"
            id="desc"
            className="h-10 w-96 rounded-md border-[1px] border-gray-300"
            onChange={(e) => setFilm({ ...film, fim_description: e.target.value })}
          />
          <label htmlFor="copy">Copys</label>
          <input
            type="number"
            id="copy"
            className="h-10 w-96 rounded-md border-[1px] border-gray-300"
            onChange={(e) => setFilm({ ...film, fim_amount: parseInt(e.target.value) })}
          />

          <label htmlFor="year">Year</label>
          <input
            type="number"
            id="year"
            max={new Date().getFullYear()}
            min={1900}
            className="h-10 w-96 rounded-md border-[1px] border-gray-300"
            onChange={(e) => setFilm({ ...film, fim_year: parseInt(e.target.value) })}
          />
          <div className='flex justify-between'>
            <label htmlFor="price">Preço</label>
            <label htmlFor='price' id='price'>R${film.fim_price}</label>
          </div>

          <input
            type="range"
            id="price"
            min={0}
            max={10}
            className="h-10 w-96 rounded-md border-[1px] border-gray-300"
            onChange={(e) => setFilm({ ...film, fim_price: parseFloat(e.target.value) })}
          />



          <button type="submit" className="w-96 h-10 rounded-md bg-blue-400 text-white">Cadastrar</button>
        </form>
      </div>
    </div>



  )
}
