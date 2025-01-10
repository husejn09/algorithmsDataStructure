import React, { useState } from 'react';
import pageLogo from './assets/pageLogo.png';
import menuIcon from './assets/menuIcon.png';

function Header() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    return (
        <header>
            <nav className={`sm:hidden flex justify-between items-center p-3 navColor rounded-t-3xl mx-2 mt-2
                            ${isMenuOpen ? 'rounded-t-3x1' : 'rounded-3xl'}`}>
                <img src={pageLogo} alt="Page logo" className="pageLogo w-14 " />
                <div className="sm:hidden">
                    <img 
                        src={menuIcon} 
                        className="w-8 cursor-pointer" 
                        onClick={toggleMenu} 
                        alt="Menu Icon" 
                    />
                </div>
                
            </nav>
            <div className={`fixed right-2 left-2 p-3 navColorDrop rounded-b-3xl text-white 
                                    ${isMenuOpen ? 'flex ' : 'hidden'}`}>
                    <ul className="flex flex-col w-full space-y-1 pt-1">
                        <li><a href="#" className=" block p-2">Home</a></li>
                        <li><a href="#" className="block p-2">Algorithms</a></li>
                        <li><a href="#" className="block p-2 rounded-3x1">Data Structures</a></li>
                        <li><a href="#" className="block p-2 rounded-3x1">About</a></li>
                    </ul>
                </div>
            

            <nav className="hidden sm:flex flex-row mx-auto mt-3 mb-20 navColor py-2 px-10 max-w-fit rounded-3xl">
                <ul className="flex space-x-12 items-center text-white">
                    <li><a href="#">Home</a></li>
                    <li><a href="#">Algorithms</a></li>
                    <li><img src={pageLogo} alt="Page logo" className="pageLogo w-16" /></li>
                    <li><a href="#">Data Structures</a></li>
                    <li><a href="#">About</a></li>
                </ul>
            </nav>
            
        </header>
    );
}

export default Header;