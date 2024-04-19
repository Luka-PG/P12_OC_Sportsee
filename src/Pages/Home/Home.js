import { Link } from 'react-router-dom'
import "./Home.css"

//function to display the page to go to the profile page

function Home() {
    return(
        <div className='home'>
            <h1 className='welcome_text'>Bienvenu sur SportSee</h1>
            <h2 className='choosing_text'>Veuillez choisir un utilisateur :</h2>
                <div className='div_button'>
                    <Link to={`/ProfilPage/12`} className='button'> User 12</Link>
                    <Link to={`/ProfilPage/18`} className='button'> User 18</Link>
                </div>
        </div>
    )
}

export default Home