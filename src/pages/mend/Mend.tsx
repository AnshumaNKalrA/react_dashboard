import { useState } from 'react';  
import MultiSelectTeams from "../../components/multiSelectForm/MultiSelectForm";
import MendSeverity from '../../components/mendSeverity/MendSeverity';
import "./mend.scss";
import { productData } from '../../data';
import DateRangeDropdown from '../../components/datePicker/DatePicker';
import MendShield from '../../components/mendShield/MendShield';
import MendDependency from '../../components/mendDependency/MendDependency';
import MendLastYearOpen from '../../components/mendLastYearOpen/MendLastYearOpen';
import MendLastYearResolved from '../../components/MendLastYearResolved/MendLastYearResolved'


const Mend: React.FC = () => {  
  const [selectedTeams, setSelectedTeams] = useState<string[]>([]);  
  const [dateRange, setDateRange] = useState<{ startDate: Date | null, endDate: Date | null }>({ startDate: null, endDate: null });  
  
  const handleRangeSelect = (range: { startDate: Date | null, endDate: Date | null }) => {  
    setDateRange(range);  
  };  
  
  const handleTeamsChange = (selected: string[]) => {  
    setSelectedTeams(selected);  
  };  
  
  return (    
    <div className="mend">    
      <div className="form-container">    
        <DateRangeDropdown onRangeSelect={handleRangeSelect} />    
        <MultiSelectTeams selectedTeams={selectedTeams} onTeamsChange={handleTeamsChange} teamsData={productData} />    
      </div>    
      {selectedTeams.length > 0 && dateRange.startDate && dateRange.endDate && (    
        <div className="columns">  
          <div className='left-column'>          
            <MendSeverity selectedTeams={selectedTeams} dateRange={dateRange} />    
            <MendShield selectedTeams={selectedTeams} dateRange={dateRange} />  
            <MendDependency selectedTeams={selectedTeams} dateRange={dateRange} />  
          </div>  
          <div className='right-column'>  
            <MendLastYearOpen selectedTeams={selectedTeams} />  
            <MendLastYearResolved selectedTeams={selectedTeams} />  
          </div>  
        </div>  
      )}    
    </div>    
  );  
}    
  
export default Mend;  