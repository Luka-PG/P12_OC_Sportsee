import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import PropTypes from 'prop-types'; 
import "./DailyActivity.css"

// Daily activity component, display daily activity of the user 
function DailyActivity({userDaily}) {
    return(
        <div className="daily">
            <p>Activité quotidienne</p>
            <ResponsiveContainer width="100%" height={280}>
                <BarChart width="100%" height={300} data={userDaily} margin={{left: 35}}>
                    <CartesianGrid horizontal={true} vertical={false}/>
                    <XAxis dataKey="day" tickLine={false} axisLine={false}/>
                    <YAxis dataKey="calories" orientation="right" tickCount={3} axisLine={false} tickLine={false} tickMargin={5}/>
                    <Tooltip content={<CustomTooltip />} />
                    <Legend iconSize="8" />
                    <Bar dataKey="kilogram" name="Poids (kg)" fill="black" barSize={7} radius={[3, 3, 0, 0]} legendType="circle" />
                    <Bar dataKey="calories" name="Calories brûlées (kCal)" fill="red" barSize={9} radius={[6, 6, 0, 0]} legendType="circle"/>
                </BarChart>
            </ResponsiveContainer>
        </div>
    )
}
//Custom tooltip component, customisation of the tooltip
function CustomTooltip({ active, payload }) {
    return (
      active && (
        <div className='custom_tool_daily'>
          <p> {`${payload[0].value}kg`}</p>
          <p> {`${payload[1].value}kCal`}</p>
        </div>
      )
    );
  }


export default DailyActivity

DailyActivity.propTypes = {
    userDaily: PropTypes.array,
  }