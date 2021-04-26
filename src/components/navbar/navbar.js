import './navbar.css'
import logoDoc from '../navbar/logoDoc.svg'

function Navbar(){
    return( 
        <div className='navbar'>
            <img src={logoDoc} className='logo'></img>
            <div >
                <ul className='nav-lien'>
                    <li> About us</li>
                    <li> Career</li>
                    <li> Department</li>
                </ul>
            </div>
        </div>
    )
    }
    export default Navbar