import React from 'react';  
import Select, { MultiValue, StylesConfig } from 'react-select';  
import './multiSelectForm.scss';  
import { darken } from 'polished';  
  
// Define the structure of a single team data  
interface TeamData {  
  id: string;  
  name: string;  
}  
  
interface OptionType {  
  value: string;  
  label: string;  
}  
  
interface MultiSelectTeamsProps {  
  selectedTeams: string[];  
  onTeamsChange: (selected: string[]) => void;  
  teamsData: TeamData[]; // Add teamsData to the component props  
}  
  
const MultiSelectTeams: React.FC<MultiSelectTeamsProps> = ({ selectedTeams, onTeamsChange, teamsData }) => {  
  // Use the passed teamsData to generate options  
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
        backgroundColor: darken(0.2, '#f1f1f1'),  
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
      styles={customStyles} 
      menuPortalTarget={document.body} 
      maxMenuHeight={175} 
    />  
  );  
};  
  
export default MultiSelectTeams;  
