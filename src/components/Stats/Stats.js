import calories from '../../assets/calories.svg'
import proteines from '../../assets/proteines.svg'
import glucides from '../../assets/glucides.svg' 
import lipides from '../../assets/lipides.svg'
import PropTypes from 'prop-types'; 
import "./Stats.css"


//Stats component, display the stats of the user

function Stats({userStats}) {
    return(
        <div className='stats_list'>
            <div className='stat'>
                <img src={calories} alt=''/>
                <div className='stat_text'>
                    <h2>{userStats?.calorieCount}Kcal</h2>
                    <p>Calories</p>         
                </div>
            </div>
            <div className='stat'>
                <img src={proteines} alt=''/>
                <div className='stat_text'>
                    <h2>{userStats?.proteinCount}g</h2>
                    <p>Proteines</p>
                </div>
           </div>
            <div className='stat'>
                <img src={glucides} alt=''/>
                <div className='stat_text'>
                    <h2>{userStats?.carbohydrateCount}g</h2>
                    <p>Glucides</p>
                </div>
            </div>
            <div className='stat'>
                <img src={lipides} alt=''/>
                <div className='stat_text'>
                    <h2>{userStats?.lipidCount}g</h2>
                    <p>Lipides</p>
                </div>
            </div>
        </div>
    )
}

export default Stats

Stats.propTypes = {
    userStats: PropTypes.object,
  }