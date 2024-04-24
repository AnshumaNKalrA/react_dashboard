import { useState } from 'react';  
import PieChartBox from "../../components/pieChartBox/pieChartBox";
import TriagedData from "../../components/triagedData/TriagedData";
import FrequencyData from '../../components/frequencyData/FrequencyData';
import SeverityData from '../../components/severityData/SeverityData';
import MultiSelectTeams from "../../components/multiSelectForm/MultiSelectForm";
import TeamIssuesTable from '../../components/teamTable/TeamTable';
import {
  tableData,
  severityData,
} from "../../data";
import "./home.scss";


const Home: React.FC = () => {    
  const [selectedTeams, setSelectedTeams] = useState<string[]>([]);    
  
  // Handler for when selections change in MultiSelectTeams    
  const handleTeamsChange = (newSelectedTeams: string[]) => {    
    setSelectedTeams(newSelectedTeams);    
  };    
  return (
    <div>
          <div className="home"> 
            <div className="box select-box">
              <div className="formHeading">
              <h1 >Teams</h1>
              </div> 
              <MultiSelectTeams selectedTeams={selectedTeams} onTeamsChange={handleTeamsChange} />  
            </div> 
            {selectedTeams.length > 0 && (  
              <>  
                <div className="box graph-box">    
                  <TriagedData selectedTeams={selectedTeams} />    
                </div>    
                <div className="box graph-box">    
                  {/* <p>Placeholder for BarChart</p> */}
                </div>    
                <div className="box graph-box">    
                  <FrequencyData selectedTeams={selectedTeams} />    
                </div>    
                <div className="box graph-box">    
                  <SeverityData selectedTeams={selectedTeams} />    
                </div>  
                <div className="table">
                  <TeamIssuesTable data = {tableData}/>
                </div>  
              </>  
            )}
          </div>
   </div>
  );
};

export default Home; 
