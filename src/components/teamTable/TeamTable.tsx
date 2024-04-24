import React from 'react';  
// import { Line } from 'react-chartjs-2';  cleaR
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
}  
  
// Props for the TeamIssuesTable component  
interface TeamIssuesTableProps {  
  data: TeamData[];  
}  
  
const TeamIssuesTable: React.FC<TeamIssuesTableProps> = ({ data }) => {  

  const renderPill = (total: number, newIssues: number) => {  
    const newIssuesWidth = 50;  
    const recurrentIssuesWidth = 50; 
    const recurrentIssues = total - newIssues; 
    let newIssuesText="-";
    let recurrentIssuesText="-";

    if(newIssues>0){
      newIssuesText=`↑${newIssues}`;
    }else if(newIssues<0){
      newIssuesText=`↓${newIssues}`;
    }

    if(recurrentIssues>0){
      recurrentIssuesText=`↑${recurrentIssues}`;
    }else if(recurrentIssues<0){
      recurrentIssuesText=`↓${recurrentIssues}`;
    }
  
    return (  
      <div className="pill">  
        <div className="new-issues" style={{ width: `${newIssuesWidth}%` }}><div className="newIssues"><h5>{newIssuesText}</h5></div></div>  
        <div className="recurrent-issues" style={{ width: `${recurrentIssuesWidth}%` }}><div className="recurrentIssues"><h5>{recurrentIssuesText}</h5></div></div>  
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
        {data.map((team) => (  
          <tr key={team.name}>  
            <td className="team-name">{team.name}</td> 
            <td className="table-cell">
              {team.projects}
              {projectPill(team.projectTrend)}
            </td>   
            <td className="table-cell">  
              {team.high}  
              {renderPill(team.high, team.highNew)}  
            </td>  
            <td className="table-cell">  
              {team.medium}  
              {renderPill(team.medium, team.mediumNew)}  
            </td>  
            <td className="table-cell">  
              {team.low}  
              {renderPill(team.low, team.lowNew)}  
            </td>  
            <td>  
                {/*for scan trend*/}
            </td>  
          </tr>  
        ))}  
      </tbody>  
    </table>  
  );  
};  
  
export default TeamIssuesTable;  
