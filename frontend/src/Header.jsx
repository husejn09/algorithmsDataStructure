import React, { useState } from 'react';
import pageLogo from './assets/pageLogo.png';
import menuIcon from './assets/menuIcon.png';
import { useView } from './ViewContext';

function Header() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const {setView} = useView();

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    return (
        <header>
            <nav className={`sm:hidden flex justify-between items-center p-3 navColor rounded-t-3xl xs:mt-3 xs:mx-2
                            ${isMenuOpen ? 'rounded-t-3x1'  : 'rounded-3xl'}`}>
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
            <div className={`absolute navColorDrop rounded-b-3xl text-white xs:w-auto xs:left-0 xs:right-0
                                    ${isMenuOpen ? ' ' : 'hidden'} mx-2`}>
                    <ul className="flex flex-col space-y-1 pt-1 rounded-b-3xl p-3">
                        <li><a href="#" className="block p-2" onClick={() => setView('main')}>Home</a></li>
                        <li><a href="#" className="block p-2" onClick={() => setView('algorithms')}>Algorithms</a></li>
                        <li><a href="#" className="block p-2" onClick={() => setView('dataStructure')}>Data Structures</a></li>
                        <li><a href="#" className="block p-2" onClick={() => setView('about')}>About</a></li>
                    </ul>
                </div>
            

            <nav className="hidden sm:flex flex-row mx-auto mt-3 mb-20 navColor py-2 px-10 max-w-fit rounded-3xl">
                <ul className="flex space-x-12 items-center text-white">
                    <li><a href="#" onClick={() => setView('main')}>Home</a></li>
                    <li><a href="#" onClick={() => setView('algorithms')}>Algorithms</a></li>
                    <li><img src={pageLogo} alt="Page logo" className="pageLogo w-16" /></li>
                    <li><a href="#" onClick={() => setView('dataStructure')}>Data Structures</a></li>
                    <li><a href="#" onClick={() => setView('about')}>About</a></li>
                </ul>
            </nav>
            
        </header>
    );
}

export default Header;