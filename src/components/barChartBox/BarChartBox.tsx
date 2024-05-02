import { Bar, BarChart, ResponsiveContainer, Tooltip, XAxis, YAxis } from "recharts";    
import "./barChartBox.scss";    

interface ChartItem{
  name: string;  
  value: number;  
}

type Props = {    
  title: string;    
  chartData: ChartItem[];    
};    
    
const BarChartBox = ({ title, chartData }: Props) => {    
  return (    
    <div className="barChartBox">    
      <h1>{title}</h1>    
      <div className="chart">    
        <ResponsiveContainer width="100%" height={350}>    
          <BarChart   
            data={chartData}  
            margin={{ top: 20, right: 30, left: 20, bottom: 50 }} // Adjusted bottom margin  
          >    
            <XAxis dataKey="name" interval={0} tick={{ angle: -45, textAnchor: 'end', fontSize: 12 }} height={70} />  // Adjusted height for XAxis  
            <YAxis tickLine={false} axisLine={false} tick={{ fontSize: 12 }} />    
            <Tooltip    
              contentStyle={{ background: "#2a3447", borderRadius: "10px" }}    
              cursor={{ fill: "none" }}    
            />    
            <Bar dataKey="value" fill="#add8e6" barSize={5} />    
          </BarChart>    
        </ResponsiveContainer>    
      </div>    
    </div>    
  );    
};    
    
export default BarChartBox;  
