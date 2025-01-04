import pageLogo from './assets/pageLogo.png'


function Header(){
    return (
        <header>
            <nav className="flex flex-row place-content-center mt-3 ">
                <ul className="flex space-x-12 items-center text-white">
                    <li><a>Home</a></li>
                    <li><a>Algorithms</a></li>
                    <li><img src={pageLogo} alt="Page logo" className="pageLogo w-16 "   ></img></li>
                    <li><a>Data Structures</a></li>
                    <li><a>About</a></li>
                </ul>
            </nav>
        </header>
    );
}

export default Header