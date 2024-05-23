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
  innerRadius?: string | number;
  outerRadius?: string | number; 
};  

const PieChartBox = ({ 
  title,
  chartData,
  innerRadius = "75%",
  outerRadius = "90%",
}: Props) => {  
  // Calculate the total value for percentage calculation and center label  
  const totalValue = chartData.reduce((acc, cur) => acc + cur.value, 0);  
  
  // Custom legend formatter to include value and percentage  
  const renderColorfulLegendText = (value: string, entry: any) => {  
    const { color } = entry.payload; // Access the chart data item  
    const percentage = ((entry.payload.value / totalValue) * 100).toFixed(2);  
    let trendSymbol = "";  
  
    if (entry.payload.trend > 0) {  
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
      <h1 align-content="center" >{title}</h1>  
      <div className="chart">  
        <ResponsiveContainer width="99%" height={300}>  
          <PieChart>  
            <Pie  
              data={chartData}  
              cx="50%"  
              cy="50%"  
              innerRadius={innerRadius}
              outerRadius={outerRadius}
              fill="#8884d8"  
              paddingAngle={0}  
              dataKey="value"  
              nameKey="name"  
            >  
              {chartData.map((item, index) => (  
                <Cell key={`cell-${index}`} fill={item.color} />  
              ))}  
              {/* Adding a Label for displaying total value in the center */}  
              <Label value={`Total: ${totalValue}`} position="center" className="pie-center-label" />  
            </Pie>  
            <Tooltip contentStyle={{ background: "white", borderRadius: "5px" }} />  
            <Legend iconSize={20} layout="vertical" verticalAlign="middle" align="right" formatter={renderColorfulLegendText} wrapperStyle={{ lineHeight: '24px' }}/>  
          </PieChart>  
        </ResponsiveContainer>  
      </div>  
    </div>  
  );  
};  
  
export default PieChartBox;  
