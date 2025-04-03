import React, { useState, useRef, useEffect } from 'react';
import { Calendar } from './Calendar';
import { format } from 'date-fns';
import { IconCalendar } from '@tabler/icons-react';
import { AnimatePresence } from 'framer-motion';

interface DatePickerProps {
  selectedDate: Date | null;
  onChange: (date: Date) => void;
  label?: string;
  placeholder?: string;
  minDate?: Date;
  maxDate?: Date;
}

export const DatePicker: React.FC<DatePickerProps> = ({
  selectedDate,
  onChange,
  label,
  placeholder = 'Select date',
  minDate,
  maxDate,
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const datePickerRef = useRef<HTMLDivElement>(null);

  const handleDateChange = (date: Date) => {
    onChange(date);
    setIsOpen(false);
  };

  const toggleCalendar = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (datePickerRef.current && !datePickerRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return (
    <div className="relative text-black" ref={datePickerRef}>
      {label && (
        <label className="block text-sm font-medium text-gray-700 mb-1">{label}</label>
      )}
      
      <div 
        onClick={toggleCalendar}
        className={`
          w-full p-3 border rounded-lg outline-none transition-all cursor-pointer 
          flex items-center justify-between group
          ${isOpen ? 'border-[#7f1d1d] ring-2 ring-[#f9e6e6]' : 'border-gray-300 hover:border-[#7f1d1d]'}
        `}
      >
        <span className={`${selectedDate ? 'text-gray-800 font-medium' : 'text-gray-500'}`}>
          {selectedDate ? format(selectedDate, 'MMM dd, yyyy') : placeholder}
        </span>
        <IconCalendar 
          size={20} 
          className={`text-gray-400 group-hover:text-[#7f1d1d] transition-colors ${isOpen ? 'text-[#7f1d1d]' : ''}`} 
        />
      </div>
      
      <AnimatePresence>
        {isOpen && (
          <div className="absolute z-50 mt-1 w-full">
            <Calendar
              selectedDate={selectedDate}
              onChange={handleDateChange}
              minDate={minDate}
              maxDate={maxDate}
            />
          </div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default DatePicker;