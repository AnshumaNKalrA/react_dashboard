import React, { useState, useEffect } from 'react';    
import './TeamIssuesTable.scss';  
  
interface TeamData {    
  name: string;    
  high: number;    
  medium: number;    
  low: number;    
  projects: number;    
  scanTrend: number;    
  projectTrend: number;  
  highNew: number;    
  mediumNew: number;    
  lowNew: number;    
  highResolved: number;  
  mediumResolved: number;  
  lowResolved: number;  
}    
  
interface TeamIssuesTableProps {    
  selectedTeams: string[];    
}    
  
const TeamIssuesTable: React.FC<TeamIssuesTableProps> = ({ selectedTeams }) => {    
  
  const [teamData, setTeamData] = useState<TeamData[]>([]);  
  
  useEffect(() => {    
    const fetchData = async () => {    
      try {    
        const formData = new FormData();    
        selectedTeams.forEach(team => formData.append('teams', team));    
      
        const response = await fetch('http://172-18-42-23.core.cvent.org:80/checkmarx/table', {    
          method: 'POST',    
          body: formData,    
        });    
        const jsonData = await response.json();    
        console.log(jsonData);  
        const teamsArray: TeamData[] = Object.entries(jsonData).map(([teamName, teamDetails]) => ({    
          name: teamName,    
          ...(teamDetails as Omit<TeamData, 'name'>), // Type assertion here  
        }));    
        setTeamData(teamsArray);    
      } catch (error) {    
        console.error('Failed to fetch data:', error);    
      }    
    };    
    if (selectedTeams.length > 0) {    
      fetchData();    
    } else {    
      setTeamData([]);    
    }    
  }, [selectedTeams]);    
  
  const renderPill = (newIssues: number,resolvedIssues:number) => {  
    const newIssuesWidth = 50;  
    const resolvedIssuesWidth = 50; 
    let newIssuesText="-";
    let resolvedIssuesText="-";

    if(newIssues>0){
      newIssuesText=`+${newIssues}`;
    }

    if(resolvedIssues>0){
      resolvedIssuesText=`↓${resolvedIssues}`;
    }
  
    return (  
      <div className="pill">  
        <div className="new-issues" style={{ width: `${newIssuesWidth}%` }}><div className="newIssues"><h5>{newIssuesText}</h5></div></div>  
        <div className="resolved-issues" style={{ width: `${resolvedIssuesWidth}%` }}><div className="resolvedIssues"><h5>{resolvedIssuesText}</h5></div></div>  
      </div>  
    );  
  };  

  const projectPill = (projectsTrend: number) => {
    let projectsTrendText="-";
    if(projectsTrend>0){
      projectsTrendText=`↑${projectsTrend}`;
    }else if(projectsTrend<0){
      projectsTrendText=`↓${projectsTrend}`;
    }
    return (
      <div className="projectpill">
        <div className="projectsTrend">
         <h5 >{projectsTrendText}</h5>
        </div>
      </div>
    )
  };
  
  return (  
    <>
    <table className="table">  
      <thead>  
        <tr>  
          <th className="team-name">Team Name</th>  
          <th>Number of Projects</th>  
          <th>High Issues</th>  
          <th>Medium Issues</th>  
          <th>Low Issues</th>  
          <th>Scan Trend</th>  
        </tr>  
      </thead>  
      <tbody>  
        {teamData.map((team) => (  
          <tr key={team.name}>  
            <td className="team-name">{team.name}</td>  
            <td className="table-cell">  
              {team.projects}  
              {projectPill(team.projectTrend)}  
            </td>  
            <td className="table-cell">  
              {team.high}  
              {renderPill(team.highNew, team.highResolved)}  
            </td>  
            <td className="table-cell">  
              {team.medium}  
              {renderPill(team.mediumNew,team.mediumResolved)}  
            </td>  
            <td className="table-cell">  
              {team.low}  
              {renderPill(team.lowNew,team.lowResolved)}  
            </td>  
            <td>  
              {/*for scan trend*/}  
            </td>  
          </tr>  
        ))}  
      </tbody>  
    </table>  
    </>
  );  
};  
  
export default TeamIssuesTable;  
