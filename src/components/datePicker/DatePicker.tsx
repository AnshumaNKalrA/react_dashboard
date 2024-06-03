import React, { useState } from 'react';    
import DatePicker from 'react-datepicker';    
import "react-datepicker/dist/react-datepicker.css";    
import { subDays, subMonths, subYears, startOfDay, parseISO } from 'date-fns';    
  
interface DateRangeDropdownProps {  
  onRangeSelect: (range: { startDate: Date | null, endDate: Date | null }) => void;  
} 
    
const DateRangeDropdown: React.FC<DateRangeDropdownProps> = ({ onRangeSelect }) => {    
  const [showCustomRange, setShowCustomRange] = useState(false);    
  const [startDate, setStartDate] = useState<Date | null>(null);    
  const [endDate, setEndDate] = useState<Date | null>(new Date()); // end date defaults to today  
    
  const handleDateRangeSelection = (option: string) => {    
    const today = startOfDay(new Date());    
    let start = today;    
    
    switch (option) {    
      case 'last1Week':    
        start = subDays(today, 7);    
        break;    
      case 'last1Month':    
        start = subMonths(today, 1);    
        break;    
      case 'last1Year':    
        start = subYears(today, 1);    
        break;    
      case 'custom':    
        setShowCustomRange(true);    
        return; // Early return to avoid setting the date range    
      default:    
        break;    
    }    
  
    // If "Last 1 Year" is selected or the custom start date is more than 1 year in the past  
    if (option === 'last1Year' || (startDate && startOfDay(startDate) < subYears(today, 1))) {  
      start = parseISO('2020-01-01');  
    }  
    
    setStartDate(start);    
    setEndDate(today);    
    onRangeSelect({ startDate: start, endDate: today });    
    if (option !== 'custom') {    
      setShowCustomRange(false);    
    }    
  };    
    
  return (    
    <div className="date-range-dropdown">    
      <select onChange={(e) => handleDateRangeSelection(e.target.value)}>    
        <option value="">Select Date Range</option>    
        <option value="last1Week">Last 1 Week</option>    
        <option value="last1Month">Last 1 Month</option>    
        <option value="last1Year">Last 1 Year</option>    
        <option value="custom">Custom Range</option>    
      </select>    
      {showCustomRange && (    
        <div className="custom-range-picker">    
          <DatePicker  
            selected={startDate}  
            onChange={(date: Date) => {  
              setStartDate(date);  
              // Automatically set to '01-01-2020' if the selected date is more than 1 year in the past  
              if (startOfDay(date) < subYears(new Date(), 1)) {  
                setStartDate(parseISO('2020-01-01'));  
              }  
              onRangeSelect({ startDate: date, endDate });  
            }}  
            selectsStart  
            startDate={startDate}  
            endDate={endDate}  
          />  
          <DatePicker  
            selected={endDate}  
            onChange={(date: Date) => {  
              setEndDate(date);  
              onRangeSelect({ startDate, endDate: date });  
            }}  
            selectsEnd  
            startDate={startDate}  
            endDate={endDate}  
            minDate={startDate}  
          />  
        </div>    
      )}    
    </div>

  );  
};  
  
export default DateRangeDropdown;  
