import React, { useState, useEffect } from 'react';  
import MultiSelectTeams from "../../components/multiSelectForm/MultiSelectForm";  
import DatatheoremBarChart from "../../components/datatheoremBarChart/DatatheoremBarChart";  
import { hourglass } from 'ldrs'
import "./datatheorem.scss";  
import DataTheoremseverity from '../../components/dataTheoremseverity/DataTheoremseverity';
  
const Datatheorem: React.FC = () => {   
    const [selectedTeams, setSelectedTeams] = useState<string[]>([]);    
    // const [dateRange, setDateRange] = useState<{ startDate: Date | null, endDate: Date | null }>({ startDate: null, endDate: null });   
    const [teamsData, setTeamsData] = useState<{id: string, name: string}[]>([]);  
    const [isLoading, setIsLoading] = useState(true); 
    
    hourglass.register()
    useEffect(() => {      
        const fetchTeamsData = async () => {  
            try {  
                const response = await fetch('http://172-18-42-23.core.cvent.org:80/datatheorem/products');  
                const data = await response.json();  
                setTeamsData(data);  
            } catch (error) {  
                console.error("Error fetching data:", error);  
            } finally {  
                setIsLoading(false); 
            }  
        };  
          
        fetchTeamsData();  
    }, []);  
  
    // const handleRangeSelect = (range: { startDate: Date | null, endDate: Date | null }) => {    
    //     setDateRange(range);    
    // };  
  
    const handleTeamsChange = (selected: string[]) => {    
        setSelectedTeams(selected);    
    };  
  
    if (isLoading) { // Render loading message or spinner while data is being fetched  
        return <div className="loader"><l-hourglass size="100" bg-opacity="0.1" speed="1.75" color="white"></l-hourglass></div>;  
    }  
  
    return (    
        <div className="datatheorem">  
            <div className="form-container">  
                <MultiSelectTeams selectedTeams={selectedTeams} onTeamsChange={handleTeamsChange} teamsData={teamsData}/>  
            </div>  
            <div className="columns">
            <div className="right-columns">  
                <DatatheoremBarChart />  
            </div>  
            <div className="left-columns">
                <DataTheoremseverity selectedTeams={selectedTeams} />
            </div>
            </div>
        </div>   
    );    
};    
    
export default Datatheorem;  
