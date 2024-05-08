import React from 'react';      
import Select, { MultiValue, StylesConfig } from 'react-select';      
import { teamsData } from '../../data';     
import './multiSelectForm.scss';  
import { darken } from 'polished';  
      
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
        
  const handleChange = (newValue: MultiValue<OptionType>) => {        
    const selectedValues = newValue.map(option => option.value);        
    onTeamsChange(selectedValues);        
  };        
    
  // Custom styles for react-select components    
  const customStyles: StylesConfig<OptionType, true> = {    
    control: (provided) => ({    
      ...provided,    
      backgroundColor: '#f1f1f1',    
      borderColor: '#ffffff',    
      color: '#000000',    
      ':hover': {    
        borderColor: '#e5e1e1',    
      },    
      '& input': {    
        color:'#000000',  
        caretColor: '#000000',    
      },    
    }),    
  
    option: (provided, state) => ({    
      ...provided,    
      borderRadius: '5px',  
      backgroundColor: state.isFocused ? darken(0.1, '#f1f1f1') : '#f1f1f1',      
      color: '#000000',    
      ':active': {    
        backgroundColor: 'darken(#f1f1f1, 20%)',    
      },    
      transition: 'background-color 0.2s ease',   
    }),     
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
      menuPortalTarget={document.body} // Append the menu to body to help with overflow    
      maxMenuHeight={175} // Maximum height for the dropdown menu    
    />        
  );        
};        
        
export default MultiSelectTeams;        
