import React,{useState,useEffect} from 'react';  
import { BarChart, Bar, XAxis, YAxis, Tooltip, Legend, CartesianGrid } from 'recharts';  

interface BarChartItem {  
      month: string;
      openLow: number;  
      openMedium: number;  
      openHigh: number; 
      closedLow: number;  
      closedMedium: number;  
      closedHigh: number;  
}
  

const DatatheoremBarChart:React.FC = () => {  
    const [chartData,setChartData] = useState<BarChartItem[]>([]);

    useEffect(() => {
        const fetchData = async () => {
            try{
                const response = await fetch('http://172-18-42-23.core.cvent.org:80/datatheorem/monthly',{
                    method : 'GET'
                }
                );
                const jsonData =  await response.json();
                const barChartData: BarChartItem[] = Object.entries(jsonData).map(([month,monthlyData]) => ({
                    month: month,
                    ...( monthlyData as Omit<BarChartItem, 'month'> ),
                }));
                setChartData(barChartData)
            } catch(error){
                console.error('Failed to fetch data:', error);
            }
        };
        fetchData();
    },[]);

    return (  
        <BarChart width={600} height={300} data={chartData}>  
        <CartesianGrid strokeDasharray="3 3" />  
        <XAxis dataKey="month" />  
        <YAxis />  
        <Tooltip />  
        <Legend />  
        <Bar width={100} dataKey="openLow" stackId="a" fill="#0096FF" />  
        <Bar width={200} dataKey="openMedium" stackId="a" fill="#FFC300" />  
        <Bar width={200} dataKey="openHigh" stackId="a" fill="#ff0000" radius={[10, 10, 0, 0]}/>  
        <Bar width={200} dataKey="closedLow" stackId="b" fill="#cefad0" />  
        <Bar width={200} dataKey="closedMedium" stackId="b" fill="#39e75f" />  
        <Bar width={200} dataKey="closedHigh" stackId="b" fill="#008631" radius={[10, 10, 0, 0]}/>  
        </BarChart>  
  );  
};  
  
export default DatatheoremBarChart;  