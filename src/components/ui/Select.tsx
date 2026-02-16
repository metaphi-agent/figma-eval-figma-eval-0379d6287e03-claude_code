import { SelectHTMLAttributes, forwardRef } from 'react';
import { ChevronDownIcon } from '../icons';

interface SelectProps extends SelectHTMLAttributes<HTMLSelectElement> {
  label?: string;
  options: { value: string; label: string }[];
  placeholder?: string;
}

const Select = forwardRef<HTMLSelectElement, SelectProps>(
  ({ label, options, placeholder, className = '', ...props }, ref) => {
    return (
      <div className="w-full">
        {label && (
          <label className="block text-sm font-semibold text-[#1A202C] mb-2">
            {label}
          </label>
        )}
        <div className="relative">
          <select
            ref={ref}
            className={`w-full px-4 py-3 bg-[#F6F7F9] rounded-lg border border-transparent text-[#1A202C] appearance-none focus:outline-none focus:border-[#3563E9] focus:bg-white transition-colors cursor-pointer ${className}`}
            {...props}
          >
            {placeholder && (
              <option value="" disabled>
                {placeholder}
              </option>
            )}
            {options.map((option) => (
              <option key={option.value} value={option.value}>
                {option.label}
              </option>
            ))}
          </select>
          <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none text-[#90A3BF]">
            <ChevronDownIcon />
          </div>
        </div>
      </div>
    );
  }
);

Select.displayName = 'Select';

export default Select;
