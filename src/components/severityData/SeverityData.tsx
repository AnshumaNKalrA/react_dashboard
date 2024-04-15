import React, { useState, useEffect } from 'react';    
import PieChartBox from '../pieChartBox/pieChartBox';  
  
// Assuming ChartItem might need a more complex structure for the label  
interface ChartItem {    
  name: string;    
  value: number;    
  color: string;  
  trend?: number; // Optional trend value  
}    
  
interface FetchDataProps {    
  selectedTeams: string[];    
}    
  
const statusColors: Record<string, string> = {    
  "High": "#E72929",    
  "Medium": "#FDA403",    
  "Low": "#C7B7A3",    
  // Assuming default colors for trend data  
  "High Trend": "#E72929",  
  "Medium Trend": "#FDA403",  
  "Low Trend": "#C7B7A3",  
};    
  
const SeverityData: React.FC<FetchDataProps> = ({ selectedTeams }) => {    
  const [chartData, setChartData] = useState<ChartItem[]>([]);    
  
  useEffect(() => {    
    const fetchData = async () => {    
      try {    
        const formData = new FormData();    
        selectedTeams.forEach(team => formData.append('teams', team));    
  
        const response = await fetch('http://localhost:8000/checkmarx/severity', {    
          method: 'POST',    
          body: formData,    
        });    
        const jsonData = await response.json();    
  
        // This part needs to be adjusted based on how you want to handle trends  
        const transformedData: ChartItem[] = [];  
        Object.entries(jsonData).forEach(([key, value]) => {  
          if (!key.includes("Trend")) {  
            transformedData.push({    
              name: key,    
              value: value as number,    
              color: statusColors[key],  
              trend: jsonData[`${key} Trend`] as number || 0, // Assign trend value  
            });  
          }  
        });  
  
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
        <PieChartBox title="Severity Distribution" chartData={chartData} />    
    </div>    
  );    
};    
  
export default SeverityData;    
