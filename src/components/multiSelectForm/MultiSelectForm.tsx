import React from 'react';    
import Select, { ActionMeta, MultiValue } from 'react-select';    
import { teamsData } from '../../data';   
import './multiSelectForm.scss';
    
interface OptionType {      
  value: string;      
  label: string;      
}      
      
interface MultiSelectTeamsProps {      
  selectedTeams: string[];      
  onTeamsChange: (selected: string[]) => void;      
}      
      
const MultiSelectTeams: React.FC<MultiSelectTeamsProps> = ({ selectedTeams, onTeamsChange }) => {      
  const options: OptionType[] = teamsData.map(team => ({      
    value: team.id,      
    label: team.name      
  }));      
      
  const selectedOptions = options.filter(option => selectedTeams.includes(option.value));      
      
  const handleChange = (newValue: MultiValue<OptionType>, actionMeta: ActionMeta<OptionType>) => {      
    const selectedValues = newValue.map(option => option.value);      
    onTeamsChange(selectedValues);      
  };      
  
  // Custom styles for react-select components  
  const customStyles = {  
    control: (provided) => ({  
      ...provided,  
      backgroundColor: 'var(--soft-bg)',  
      borderColor: 'var(--dark-bg)',  
      color: 'var(--main-color)',  
      ':hover': {  
        borderColor: 'var(--main-color)',  
      },  
    }),  
    option: (provided, state) => ({  
      ...provided,  
      backgroundColor: state.isFocused ? 'darken(var(--soft-bg), 10%)' : 'var(--soft-bg)', // Adjust for hover  
      color: 'var(--main-color)',  
      ':active': {  
        backgroundColor: 'darken(var(--soft-bg), 20%)',  
      },  
    }),  
    // Add other custom styles here as needed  
  };  
      
  return (      
    <Select      
      isMulti      
      name="teams"      
      options={options}      
      value={selectedOptions}      
      onChange={handleChange}      
      className="basic-multi-select"      
      classNamePrefix="select"  
      styles={customStyles} // Apply the custom styles  
    />      
  );      
};      
      
export default MultiSelectTeams;      
