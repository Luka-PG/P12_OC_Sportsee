import { Radar, RadarChart, PolarGrid, PolarAngleAxis, ResponsiveContainer } from 'recharts';
import { renameChart } from "../../models";
import PropTypes from 'prop-types'; 
import "./Graph.css"

 //Performance component, display performance of the user 

function Chart({userPerformance}) {
    return(
        <div className="graph">
            <ResponsiveContainer width="100%" height="100%">
                <RadarChart outerRadius="55%" data={userPerformance} cx="50%"cy="50%">
                    <Radar dataKey="value" fill="#FF0101B2" />
                    <PolarGrid radialLines={false}/>
                    <PolarAngleAxis dataKey="kind" tickFormatter={renameChart()} tick={{ fill: 'white', fontSize: '10', }} />
                </RadarChart>
            </ResponsiveContainer>
        </div>
    )
}

export default Chart

Chart.propTypes = {
    userPerformance: PropTypes.array,
}