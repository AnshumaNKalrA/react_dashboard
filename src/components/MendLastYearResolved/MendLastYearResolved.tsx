import React, { useState, useEffect } from 'react';  
import BarChartBox from '../barChartBox/BarChartBox';  
  
interface ChartItem {  
  name: string;  
  value: number;  
}  
  
interface FetchDataProps {  
    selectedTeams: string[];  
  }  
  
const MendLastYearResolved: React.FC<FetchDataProps> = ({ selectedTeams }) => {  
  const [chartData, setChartData] = useState<ChartItem[]>([]);  
    
  useEffect(() => {  
    const fetchData = async () => {  
      try {  
        const payload = {  
          teams: selectedTeams,  
        };  
          
        const response = await fetch('http://172-18-42-23.core.cvent.org:80/mend/resolvedyear', {  
          method: 'POST',  
          headers: {  
            'Content-Type': 'application/json', 
          },  
          body: JSON.stringify(payload),
        });  
        const jsonData = await response.json();  
          
        const transformedData: ChartItem[] = Object.entries(jsonData).map(([timestamp, findings]) => ({  
          name: new Date(timestamp).toLocaleDateString("en-US", { month: "short", year: "numeric" }),  
          value: typeof findings === 'number' ? findings : (typeof findings === 'string' ? parseInt(findings, 10) : 0),  
        }));  
          
        setChartData(transformedData);  
      } catch (error) {  
        console.error('Failed to fetch data:', error);  
      }  
    };  
      
    if (selectedTeams.length > 0) {  
      fetchData();  
    } else {  
      setChartData([]);  
    }  
  }, [selectedTeams]);  
    
  return (  
    <div>  
      <BarChartBox title="Resolved Findings Per Month" chartData={chartData} />  
    </div>  
  );  
};  
  
export default MendLastYearResolved;  
