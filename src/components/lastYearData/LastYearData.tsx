import React, { useState, useEffect } from 'react';    
import BarChartBox from '../barChartBox/BarChartBox';  
  
interface ChartItem{  
  name: string;  
  value: number;  
}  
  
interface FetchDataProps {    
    selectedTeams: string[];    
}    
  
const LastYearData: React.FC<FetchDataProps> = ({ selectedTeams }) => {    
    const [chartData, setChartData] = useState<ChartItem[]>([]);    
      
    useEffect(() => {    
      const fetchData = async () => {    
        try {    
          const formData = new FormData();    
          selectedTeams.forEach(team => formData.append('teams', team));    
      
          const response = await fetch('http://172-18-42-23.core.cvent.org:80/checkmarx/year', {    
            method: 'POST',    
            body: formData,    
          });    
          const jsonData = await response.json();    
  
          // Transform the data from an object into an array of ChartItem  
          const transformedData: ChartItem[] = Object.entries(jsonData).map(([timestamp, findings]) => ({  
            name: new Date(timestamp).toLocaleDateString("en-US", { month: "short", year: "numeric" }), // Convert timestamp to a more readable format  
            value: findings,  
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
          <BarChartBox title="Open Findings Per Month" chartData={chartData} />    
      </div>    
    );    
  };  
  
export default LastYearData;  
