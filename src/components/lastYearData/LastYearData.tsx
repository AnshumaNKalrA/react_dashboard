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
      // Function to fetch data  
      const fetchData = async () => {  
        try {  
          const formData = new FormData();  
          selectedTeams.forEach(team => formData.append('teams', team));  
    
          const response = await fetch('http://172-18-42-23.core.cvent.org:80/checkmarx/triaged', {  
            method: 'POST',  
            body: formData,  
          });  
          const jsonData = await response.json();  
    
          const transformedData: ChartItem[] = jsonData.map((item:any) => ({  
            name: item.month,  
            value: item.findings,  
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
          <BarChartBox title="Triaged Findings Distribution" chartData={chartData} />  
      </div>  
    );  
  };

export default LastYearData;