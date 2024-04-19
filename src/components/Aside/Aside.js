import { Link } from 'react-router-dom'
import yoga from '../../assets/yoga.svg'
import nage from '../../assets/nage.svg'
import velo from '../../assets/vélo.svg'
import haltere from '../../assets/haltère.svg'
import "./Aside.css"

// componoent to display the nav-bar on the left
function Aside() {
    return (
    <aside className="aside">
        <nav>   
            <Link to="/yoga">
                <img src={yoga} alt="yoga" />
            </Link>
            <Link to="/natation">
                <img src={nage} alt="natation" />
            </Link>
            <Link to="/velo">
                <img src={velo} alt="vélo" />
            </Link>
            <Link to="/musculation">
                <img src={haltere} alt="haltère" />
            </Link>
        </nav>
        <p>Copyright, SportSee 2020</p>
    </aside>
    )
}

export default Aside