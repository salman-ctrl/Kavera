import React from 'react'

const Navbar = () => {
    return (
        <div className='h-24 w-screen bg-blue-500 items-center flex justify-between pr-32 pl-32 text-3xl text-white' >
            <div>
                <h1>Logo</h1>
            </div>
            <div className='flex space-x-5'>
                <a href="#">Home</a>
                <a href="#">Keranjang</a>
                <a href="#">Favorit</a>
                <a href="#">Akun</a>
            </div>
        </div>
    )
}

export default Navbar
