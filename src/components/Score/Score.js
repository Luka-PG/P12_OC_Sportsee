import { PieChart, Pie, ResponsiveContainer } from 'recharts';
import PropTypes from 'prop-types'; 
import "./Score.css"

//Score component, display the score of the user

function Score({userScore}) {
    const data = userScore;
      const pieData = [
        { name: "completed", value: data, fill: "#FF0000"},
        { name: "not-completed", value: 1 - data, fill: "#f3f3f3" },
      ];
      
    return(
        <div className='score_bar'>
            <h2>Score</h2>
            <ResponsiveContainer width="100%" height="100%">
                <PieChart>
                <circle cx="50%" cy="50%" fill="#FBFBFB" r="50"></circle>
                    <Pie 
                    data={pieData}
                    dataKey="value" 
                    nameKey="Objectif" 
                    cx="50%" 
                    cy="50%" 
                    innerRadius={60} 
                    outerRadius={75} 
                    cornerRadius={10} 
                    startAngle={90}
                    endAngle={450} 
                    />
                </PieChart>
            </ResponsiveContainer>
            <div className='progress_bar '>
                <p>
                    <span>{data*100}%</span> <br />
                    de votre <br />
                    objectif
                </p>
            </div>
        </div>
    )
}

export default Score

Score.propTypes = {
    userScore: PropTypes.number,
  }