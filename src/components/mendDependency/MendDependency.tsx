// MendSeverity.tsx  
import React, { useState, useEffect } from 'react';  
import PieChartBox from '../pieChartBox/pieChartBox';

interface ChartItem {  
    name: string;  
    value: number;  
    color: string;  
  }  
  

interface FetchDataProps {  
  selectedTeams: string[];  
  dateRange: {  
    startDate: Date | null;  
    endDate: Date | null;  
  };  
}

const MendDependency: React.FC<FetchDataProps> = ({ selectedTeams, dateRange }) => {  
    // Explicitly type chartData as an array of ChartItem  
    const [chartData, setChartData] = useState<ChartItem[]>([]);  
    
    useEffect(() => {  
      const fetchData = async () => {  
        try {  
          const response = await fetch('http://172-18-42-23.core.cvent.org:80/mend/dependency', {  
            method: 'POST',  
            headers: {  
              'Content-Type': 'application/json',  
            },  
            body: JSON.stringify({  
              teams: selectedTeams,  
              start_date: dateRange.startDate?.toISOString().split('T')[0], // Ensure date format matches your backend expectations  
              end_date: dateRange.endDate?.toISOString().split('T')[0],  
            }),  
          });  
          if (!response.ok) {  
            throw new Error('Network response was not ok');  
          }  
          const data = await response.json();  
            
          const processedChartData: ChartItem[] = Object.entries(data).map(([severity, value]) => ({  
            name: severity.charAt(0).toUpperCase() + severity.slice(1), // Capitalize severity name  
            value: value as number,  
            color: getColorBySeverity(severity), // Define this function based on your color scheme  
          }));  
    
          setChartData(processedChartData);  
        } catch (error) {  
          console.error('There was a problem with the fetch operation:', error);  
        }  
      };  
    
      if (selectedTeams.length > 0 && dateRange.startDate && dateRange.endDate) {  
        fetchData();  
      }  
    }, [selectedTeams, dateRange]);  
    
    return (  
      <div>  
        <PieChartBox title="Dependency Distribution" chartData={chartData} innerRadius="70%" outerRadius="90%" />  
      </div>  
    );  
  };  
  
  
// Helper function to determine color based on severity  
function getColorBySeverity(severity: string): string {  
  switch (severity.toLowerCase()) {  
    case 'transitive':
      return '#253DA1'; //Blue
    case 'direct':  
      return '#90EE90'; // Light Green  
    default:  
      return '#D3D3D3'; // Light Grey for unknown severities  
  }  
}  
  
export default MendDependency;  
