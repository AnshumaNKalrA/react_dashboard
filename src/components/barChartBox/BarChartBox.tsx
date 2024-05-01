import { Bar, BarChart, ResponsiveContainer, Tooltip, XAxis, YAxis } from "recharts";  
import "./barChartBox.scss";  
  
type Props = {  
  title: string;  
  chartData: ChartItem[];  
};  
  
const BarChartBox = ({ title, chartData }: Props) => {  
  return (  
    <div className="barChartBox">  
      <h1>{title}</h1>  
      <div className="chart">  
        <ResponsiveContainer width="99%" height={150}>  
          <BarChart data={chartData}>  
            <XAxis dataKey="name" />  
            <YAxis />  
            <Tooltip  
              contentStyle={{ background: "#2a3447", borderRadius: "5px" }}  
              cursor={{ fill: "none" }}  
            />  
            {chartData.map((item, index) => (  
              <Bar key={index} dataKey="value" fill={item.color || '#8884d8'} />  
            ))}  
          </BarChart>  
        </ResponsiveContainer>  
      </div>  
    </div>  
  );  
};  
  
export default BarChartBox;  
