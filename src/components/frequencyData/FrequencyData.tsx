import React, { useState, useEffect } from 'react';  
import PieChartBox from '../pieChartBox/pieChartBox';
  
interface ChartItem {  
  name: string;  
  value: number;  
  color: string;  
}  
  
interface FetchDataProps {  
  selectedTeams: string[];  
}  
  
// Status colors mapping  
const statusColors: Record<string, string> = {  
  "New": "#222831",  
  "Recurrent": "#C7C8CC",   
};  
  
// FetchData component  
const FrequencyData: React.FC<FetchDataProps> = ({ selectedTeams }) => {  
    const [chartData, setChartData] = useState<ChartItem[]>([]);  
    
    useEffect(() => {  
      // Function to fetch data  
      const fetchData = async () => {  
        try {  
          const formData = new FormData();  
          selectedTeams.forEach(team => formData.append('teams', team));  
    
          const response = await fetch('http://localhost:8000/checkmarx/frequency', {  
            method: 'POST',  
            body: formData,  
          });  
          const jsonData = await response.json();  
    
          const transformedData: ChartItem[] = Object.entries(jsonData).map(([key, value]) => ({  
            name: key,  
            value: value as number,  
            color: statusColors[key] || '#000',  
          }));  
    
          setChartData(transformedData);  
        } catch (error) {  
          console.error('Failed to fetch data:', error);  
        }  
      };  
    
      // Check if any teams are selected  
      if (selectedTeams.length > 0) {  
        fetchData();  
      } else {  
        // If no teams are selected, clear the chart data  
        setChartData([]);  
      }  
    }, [selectedTeams]);  
    
    return (  
      <div>  
          <PieChartBox title="New and Recurrent Findings" chartData={chartData} />  
      </div>  
    );  
  };  
    
  export default FrequencyData;  