/* eslint-disable no-unused-vars */
import React from 'react'
import { Link , useLocation} from 'react-router-dom'
import { AiOutlineSearch } from 'react-icons/ai'
import {FaMoon, FaSun} from 'react-icons/fa';
import { Avatar, Button, Dropdown, Navbar, TextInput } from 'flowbite-react'
import { useSelector, useDispatch } from 'react-redux';
import { toggleTheme } from '../redux/theme/themeSlice';


export default function Header() {
  const path = useLocation().pathname;
  const dispatch = useDispatch();
  const {currentUser} = useSelector(state => state.user)
  const {theme} = useSelector((state) => state.theme);
  return (
    <Navbar clasName="border-b-2">
        <Link to="/" className='self-center whitespace-nowrap text-sm sm:text-xl 
        font-semibold dark:text-white'> 
        <span className='px-2 py-1 bg-gradient-to-r from-indigo-500
         via-purple-500 to-pink-500 rounded-lg text-white'>Gihan</span> Blog
        </Link>

        <form>
            <TextInput type="text" placeholder="Serch..." rightIcon={ AiOutlineSearch } 
            className='hidden lg:inline'></TextInput>
        </form>

        <Button className='w-12 h-10 lg:hidden' pill color='gray'>
          <AiOutlineSearch />
        </Button>

        <div className='flex gap-2 md:order-2'>
          <Button clasName='w-12 h-10 hidden sm:inline' color='gray' pill onClick={() => dispatch(toggleTheme())}>
            {theme === 'dark' ? <FaMoon/> : <FaSun/>}
          </Button>
          {currentUser ? (
            <Dropdown arrowIcon={false} inline label={
              <Avatar alt='user' img={currentUser.profilePicture} rounded/>
            }>

            <Dropdown.Header>
              <span className='block text-sm'>@{currentUser.username}</span>
              <span className='block text-sm font-medium truncate'>@{currentUser.email}</span>
            </Dropdown.Header>

            <Link to={'/dashbord?tap=profile'}>
              <Dropdown.Item>Profile</Dropdown.Item>
            </Link>

            <Dropdown.Divider />

            <Dropdown.Item>Sign out</Dropdown.Item>
            </Dropdown>
          ) :(
            <Link to='/sign-in'>
            <Button gradientDuoTone='purpleToBlue' outline>
              Sign In
            </Button>
          </Link>
          )}
          <Navbar.Toggle/>

        </div>
        <Navbar.Collapse>
            <Navbar.Link active={path === "/"} as={'div'}>
              <Link to='/'>
                Home
              </Link>
            </Navbar.Link>

            <Navbar.Link active={path === "/about"} as={'div'}> 
              <Link to='/about'>
                About
              </Link>
            </Navbar.Link>

            <Navbar.Link active={path === "/projects"} as={'div'}> 
              <Link to='/projects'>
              Projects
              </Link>
            </Navbar.Link>

            {/* <Navbar.Link active={path === "/project"} as={'div'}>
              <Link to='/project'>
                Project
              </Link>
            </Navbar.Link> */}
          </Navbar.Collapse>
    </Navbar>
  )
}
