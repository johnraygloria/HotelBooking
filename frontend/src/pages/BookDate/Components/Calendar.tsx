import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { IconChevronLeft, IconChevronRight } from '@tabler/icons-react';

interface CalendarProps {
  selectedDate: Date | null;
  onChange: (date: Date) => void;
  minDate?: Date;
  maxDate?: Date;
}

export const Calendar: React.FC<CalendarProps> = ({
  selectedDate, 
  onChange,
  minDate,
  maxDate,
}) => {
  const [currentMonth, setCurrentMonth] = useState(
    selectedDate ? new Date(selectedDate) : new Date()
  );
  currentMonth.setDate(1);

  const monthNames = [
    'January', 'February', 'March', 'April', 'May', 'June',
    'July', 'August', 'September', 'October', 'November', 'December'
  ];

  const daysOfWeek = ['Su', 'Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa'];

  const getDaysInMonth = (year: number, month: number) => {
    return new Date(year, month + 1, 0).getDate();
  };

  const getFirstDayOfMonth = (year: number, month: number) => {
    return new Date(year, month, 1).getDay();
  };

  const handlePrevMonth = () => {
    const newMonth = new Date(currentMonth);
    newMonth.setMonth(newMonth.getMonth() - 1);
    setCurrentMonth(newMonth);
  };

  const handleNextMonth = () => {
    const newMonth = new Date(currentMonth);
    newMonth.setMonth(newMonth.getMonth() + 1);
    setCurrentMonth(newMonth);
  };

  const handleDateClick = (day: number) => {
    const newDate = new Date(
      currentMonth.getFullYear(),
      currentMonth.getMonth(),
      day
    );
    
    if (
      (minDate && newDate < minDate) ||
      (maxDate && newDate > maxDate)
    ) {
      return;
    }
    
    onChange(newDate);
  };

  const renderCalendarDays = () => {
    const year = currentMonth.getFullYear();
    const month = currentMonth.getMonth();
    const daysInMonth = getDaysInMonth(year, month);
    const firstDayOfMonth = getFirstDayOfMonth(year, month);
    
    const days = [];

    for (let i = 0; i < firstDayOfMonth; i++) {
      days.push(
        <div key={`empty-${i}`} className="h-10 w-10"></div>
      );
    }

    for (let day = 1; day <= daysInMonth; day++) {
      const date = new Date(year, month, day);
      const isSelected = selectedDate && 
        date.getDate() === selectedDate.getDate() &&
        date.getMonth() === selectedDate.getMonth() &&
        date.getFullYear() === selectedDate.getFullYear();
      
      const isDisabled = 
        (minDate && date < minDate) ||
        (maxDate && date > maxDate);
      
      const isToday = 
        date.getDate() === new Date().getDate() &&
        date.getMonth() === new Date().getMonth() &&
        date.getFullYear() === new Date().getFullYear();
      
      days.push(
        <button
          key={day}
          onClick={() => handleDateClick(day)}
          disabled={isDisabled}
          className={`
            h-10 w-10 rounded-full flex items-center justify-center text-sm font-medium transition-all duration-200
            ${isSelected ? 'bg-[#7f1d1d] text-white shadow-md transform scale-105' : ''}
            ${isToday && !isSelected ? 'border-2 border-[#7f1d1d] text-[#7f1d1d] font-bold' : ''}
            ${isDisabled ? 'text-gray-300 cursor-not-allowed' : 'hover:bg-[#f9e6e6] hover:text-[#7f1d1d] cursor-pointer'}
          `}
        >
          {day}
        </button>
      );
    }
    
    return days;
  };

  return (
    <motion.div 
      initial={{ opacity: 0, y: -10 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -10 }}
      transition={{ duration: 0.2 }}
      className="bg-white text-black rounded-lg shadow-lg p-5 w-full border border-gray-200"
    >
      <div className="flex justify-between items-center mb-5">
        <button
          onClick={handlePrevMonth}
          className="p-2 rounded-full hover:bg-[#f9e6e6] text-[#7f1d1d] transition-colors"
        >
          <IconChevronLeft size={20} />
        </button>
        <h2 className="text-lg font-bold text-gray-800">
          {monthNames[currentMonth.getMonth()]} {currentMonth.getFullYear()}
        </h2>
        <button
          onClick={handleNextMonth}
          className="p-2 rounded-full hover:bg-[#f9e6e6] text-[#7f1d1d] transition-colors"
        >
          <IconChevronRight size={20} />
        </button>
      </div>
      
      <div className="grid grid-cols-7 gap-1 mb-3">
        {daysOfWeek.map(day => (
          <div key={day} className="h-8 w-10 flex items-center justify-center text-xs font-bold text-gray-500">
            {day}
          </div>
        ))}
      </div>
      
      <div className="grid grid-cols-7 gap-1">
        {renderCalendarDays()}
      </div>
    </motion.div>
  );
};

export default Calendar;