import React, { useState } from 'react';  
import DatePicker from 'react-datepicker';  
import "react-datepicker/dist/react-datepicker.css";  
import { subDays, subMonths, subYears, startOfDay } from 'date-fns';  
  
interface DateRangeDropdownProps {  
  onRangeSelect: (range: { startDate: Date | null, endDate: Date | null }) => void;  
}  
  
const DateRangeDropdown: React.FC<DateRangeDropdownProps> = ({ onRangeSelect }) => {  
  const [showCustomRange, setShowCustomRange] = useState(false);  
  const handleDateRangeSelection = (option: string) => {  
    const today = startOfDay(new Date());  
    let startDate = today;  
  
    switch (option) {  
      case 'last1Week':  
        startDate = subDays(today, 7);  
        break;  
      case 'last1Month':  
        startDate = subMonths(today, 1);  
        break;  
      case 'last1Year':  
        startDate = subYears(today, 1);  
        break;  
      case 'custom':  
        setShowCustomRange(true);  
        return; // Early return to avoid setting the date range  
      default:  
        break;  
    }  
  
    onRangeSelect({ startDate, endDate: today });  
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
          {/* Implement DatePicker for custom range here */}  
        </div>  
      )}  
    </div>  
  );  
};  
  
export default DateRangeDropdown;  
