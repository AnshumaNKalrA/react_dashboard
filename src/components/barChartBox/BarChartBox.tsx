import React from 'react';  
import { Bar, BarChart, ResponsiveContainer, Tooltip, XAxis, YAxis } from "recharts";  
import "./barChartBox.scss";  
  
interface ChartItem {  
  name: string;  
  value: number;  
}  
  
type Props = {  
  title: string;  
  chartData: ChartItem[];  
};  
  

const CustomTick: React.FC<any> = ({ x, y, payload, angle = -45, textAnchor = 'end', fontSize = 12 }) => (  
  <g transform={`translate(${x},${y})`}>  
    <text  
      x={0}  
      y={0}  
      dy={22} // Adjust this based on your styling needs  
      dx={-20}
      textAnchor={textAnchor}  
      fill="#666"  
      transform={`rotate(${angle})`}  
      fontSize={fontSize}  
    >  
      {payload.value}  
    </text>  
  </g>  
);  
  
const BarChartBox = ({ title, chartData }: Props) => {  
  return (  
    <div className="barChartBox">  
      <h1>{title}</h1>  
      <div className="chart">  
        <ResponsiveContainer width="100%" height={350}>  
          <BarChart  
            data={chartData}  
            margin={{ top: 20, right: 30, left: 20, bottom: 50 }}  
          >  
            {/* Use the CustomTick component for the tick prop */}  
            <XAxis dataKey="name" interval={0} height={70} tick={<CustomTick />} />  
            <YAxis tickLine={false} axisLine={false} tick={{ fontSize: 12 }} tickCount={10}/>  
            <Tooltip  
              contentStyle={{ background: "#f5ebeb", borderRadius: "10px" }}  
              cursor={{ fill: "none" }}  
            />  
            <Bar dataKey="value" fill="#5f5dbd" barSize={7} radius={[10, 10, 0, 0]}/>  
          </BarChart>  
        </ResponsiveContainer>  
      </div>  
    </div>  
  );  
};  
  
export default BarChartBox;  
