import React from 'react'
import { Link } from 'react-router-dom'
import {AiOutLineSearch} from 'react-icons/ai'
export default function Header() {
  return (
    <Navbar clasName="border-b-2">
        <Link to="/" className='self-center whitespace-nowrap text-sm sm:text-xl 
        font-semibold dark:text-white'> 
        <span className='px-2 py-1 bg-gradient-to-r from-indigo-500
         via-purple-500 to-pink-500 rounded-lg text-white'>Gihan</span> Blog
        </Link>

        <form>
            <TextInput type="text" placeholder="Serch..." rightIcon={AiOutLineSearch} ></TextInput>
        </form>
    </Navbar>
  )
}
