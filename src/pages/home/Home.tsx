import { useState } from 'react';  
import TriagedData from "../../components/triagedData/TriagedData";
import FrequencyData from '../../components/frequencyData/FrequencyData';
import SeverityData from '../../components/severityData/SeverityData';
import MultiSelectTeams from "../../components/multiSelectForm/MultiSelectForm";
import TeamIssuesTable from '../../components/teamTable/TeamTable';
import LastYearData from '../../components/lastYearData/LastYearData'
import "./home.scss";


const Home: React.FC = () => {    
  const [selectedTeams, setSelectedTeams] = useState<string[]>([]);    
  
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
                  <LastYearData selectedTeams={selectedTeams} />
                </div>    
                <div className="box graph-box">    
                  <FrequencyData selectedTeams={selectedTeams} />    
                </div>    
                <div className="box graph-box">    
                  <SeverityData selectedTeams={selectedTeams} />    
                </div>  
                <div className="table">
                  <TeamIssuesTable selectedTeams = {selectedTeams}/>
                </div>  
              </>  
            )}
          </div>
   </div>
  );
};

export default Home; 
