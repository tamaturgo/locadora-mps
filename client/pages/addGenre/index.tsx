
import React, { useEffect, useState } from 'react'
import Link from 'next/link'
import api from '../../services/api'


interface Genre {
  gen_name: string,

}

export default function Genre() {
  const [genres, setGenres] = useState<Genre[]>([
    {
      gen_name: '', 
    }
  ])


  const handleOnSubmit = (event: React.SyntheticEvent) => {
    event.preventDefault();
    api.post('/addgenre', genres).then((response) => {
      console.log(response);
    })
  }

  return (
    <div className="w-screen flex justify-center flex-col items-center">
      <h1>Cadastrar Gênero</h1>
      <form className="flex flex-col" onSubmit={handleOnSubmit} >
        <label htmlFor="title">Nome do Gênero</label>
        <input
          type="text"
          id="title"
          className="h-10 w-96 rounded-md border-[1px] border-gray-300"
          onChange={(e) => setGenres ({ ...genres, gen_name: e.target.value })}
        />
        
        <button type="submit" className="w-96 h-10 rounded-md bg-blue-400 mt-2 text-white">Adicionar Gênero</button>
      </form>
    </div>
  )
}
