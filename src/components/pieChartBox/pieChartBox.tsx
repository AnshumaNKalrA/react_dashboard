import { Cell, Pie, PieChart, ResponsiveContainer, Tooltip, Legend, Label } from "recharts";  
import "./pieChartBox.scss";  
  
type ChartItem = {  
  name: string;  
  value: number;  
  color: string;
  trend?: number;   
};  
  
type Props = {  
  title: string;  
  chartData: ChartItem[];  
};  
  
const PieChartBox = (props: Props) => {  
  // Calculate the total value for percentage calculation and center label  
  const totalValue = props.chartData.reduce((acc, cur) => acc + cur.value, 0);  
  
  // Custom legend formatter to include value and percentage  
  const renderColorfulLegendText = (value: string, entry: any) => {  
    const { color } = entry.payload; // Access the chart data item  
    const percentage = ((entry.payload.value / totalValue) * 100).toFixed(2);  
    let trendSymbol = "";

    if(entry.payload.trend > 0){
      trendSymbol = `↑${entry.payload.trend}`;
    } else if (entry.payload.trend < 0) {  
      trendSymbol = `↓${Math.abs(entry.payload.trend)}`; // Downward arrow for negative trend  
    }
    return (  
      <span style={{ color }}>  
         {`${value}: ${entry.payload.value} (${percentage}%) ${trendSymbol}`}  
      </span>  
    );  
  };  
  
  return (  
    <div className="pieChartBox">  
      <h1>{props.title}</h1>  
      <div className="chart">  
        <ResponsiveContainer width="99%" height={300}>  
          <PieChart>  
            <Pie  
              data={props.chartData}  
              cx="50%"  
              cy="50%"  
              innerRadius="70%"  
              outerRadius="90%"  
              fill="#8884d8"  
              paddingAngle={5}  
              dataKey="value"  
              nameKey="name"  
            >  
              {props.chartData.map((item, index) => (  
                <Cell key={`cell-${index}`} fill={item.color} />  
              ))}  
              {/* Adding a Label for displaying total value in the center */}  
              <Label value={`Total: ${totalValue}`} position="center" className="pie-center-label" />  
            </Pie>  
            <Tooltip contentStyle={{ background: "white", borderRadius: "5px" }} />  
            <Legend iconSize={10} layout="vertical" verticalAlign="middle" align="right" formatter={renderColorfulLegendText} />  
          </PieChart>  
        </ResponsiveContainer>  
      </div>  
    </div>  
  );  
};  
  
export default PieChartBox;  
