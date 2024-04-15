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
  "To Verify": "#7BC9FF",  
  "Not Exploitable": "#135D66",  
  "Confirmed": "#7EA1FF",  
  "Urgent": "#1C1678",  
  "Proposed Not Exploitable": "#A3FFD6",  
};  
  
// FetchData component  
const TriagedData: React.FC<FetchDataProps> = ({ selectedTeams }) => {  
    const [chartData, setChartData] = useState<ChartItem[]>([]);  
    
    useEffect(() => {  
      // Function to fetch data  
      const fetchData = async () => {  
        try {  
          const formData = new FormData();  
          selectedTeams.forEach(team => formData.append('teams', team));  
    
          const response = await fetch('http://localhost:8000/checkmarx/triaged', {  
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
    
    // Conditionally render PieChartBox based on whether there's any data  
    return (  
      <div>  
          <PieChartBox title="Triaged Findings Distribution" chartData={chartData} />  
      </div>  
    );  
  };  
    
  export default TriagedData;  
  
