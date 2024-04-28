import { LineChart, Line, ResponsiveContainer, Tooltip, XAxis, YAxis } from 'recharts';
import { renameAverage } from "../../models/index";
import PropTypes from 'prop-types'; 
import "./DurationActivity.css"


//Duration activity component, display the duration of activity of the user

function DurationActivity({userDuration}){
    return(
        <div className='duration'>
            <p>Durée moyenne des sessions</p>
            <ResponsiveContainer width="90%" height="100%" className="duration">
              <LineChart data={userDuration} margin={{ top: 5, right: 5, bottom: 5, left: 30 }} >
                <Tooltip content={<CustomTooltip />} cursor={false} />
                <defs>
                  <linearGradient id="as-gradient" x1="10%" y1="60%" x2="80%" y2="100%" gradientTransform="rotate(0)">
                    <stop offset="0%" stopColor="#FFF" stopOpacity={0.4}/>
                    <stop offset="100%" stopColor="#FFF" stopOpacity={1}/>
                  </linearGradient>
                </defs>
                  <XAxis dataKey="day" stroke="#ffffff" axisLine={false} tickLine={false} tickFormatter={renameAverage()} tick={{ fill: "#FFFFFF", opacity: "0.6" }}/>
                  <YAxis dataKey="sessionLength" hide={true} axisLine={false} tickLine={false} type="number" domain={['dataMin -15', 'dataMax + 45']} tick={{ fill: "#FFFFFF", opacity: "0" }}/>
                  <Line type="natural" dataKey="sessionLength" name="Durée (min)" stroke="url(#as-gradient)" dot={false} strokeWidth={2}/>
                </LineChart>
            </ResponsiveContainer>
        </div>
    )
}

DurationActivity.propTypes = {
  userDuration: PropTypes.array,
}

//Custom tooltip component, customisation of the tooltip

function CustomTooltip({ active, payload }) {
    return (
      active && (
        <div className='custom_tool_duration'>
          <p> {`${payload[0].value} min`}</p>
        </div>
      )
    );
  }

export default DurationActivity

CustomTooltip.propTypes = {
  active: PropTypes.bool,
  payload: PropTypes.array,
}