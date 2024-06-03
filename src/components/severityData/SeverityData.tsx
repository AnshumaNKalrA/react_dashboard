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
  "Low": "#d9b650",    
  // Assuming default colors for trend data  
  "High Trend": "#E72929",  
  "Medium Trend": "#FDA403",  
  "Low Trend": "#d9b650",  
};    
  
const SeverityData: React.FC<FetchDataProps> = ({ selectedTeams }) => {    
  const [chartData, setChartData] = useState<ChartItem[]>([]);    
  
  useEffect(() => {    
    const fetchData = async () => {    
      try {    
        const formData = new FormData();    
        selectedTeams.forEach(team => formData.append('teams', team));    
  
        const response = await fetch('http://172-18-42-23.core.cvent.org:80/checkmarx/severity', {    
          method: 'POST',    
          body: formData,    
        });    
        const jsonData = await response.json();    

        const transformedData: ChartItem[] = [];  
        Object.entries(jsonData).forEach(([key, value]) => {  
          if (!key.includes("Trend")) {  
            transformedData.push({    
              name: key,    
              value: value as number,    
              color: statusColors[key],  
              trend: jsonData[`${key} Trend`] as number || 0, 
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
        <PieChartBox title="Severity Distribution" chartData={chartData} innerRadius="75%" outerRadius="90%"/>    
    </div>    
  );    
};    
  
export default SeverityData;    
