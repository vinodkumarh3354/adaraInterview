import React, { useState, useRef, ReactHTMLElement } from 'react';
import { useOnClickOutside } from '~/hooks/useOnClickOutside';

type DropdownItem = {
  label: string;
  href?: string;
  onClick?: () => void;
  itemClassName?: string;
  icon?: React.ReactNode;
  subItems?: DropdownItem[];
};

type DropdownProps = {
  items: DropdownItem[];
  trigger?: any;  
  className?: string;  
  dropdownClassName?: string;  
  itemClassName?: string; 
};

const CustomDropdown: React.FC<DropdownProps> = ({
  items,
  trigger,
  className = '',
  dropdownClassName = '',
  itemClassName = '',
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const ref = useRef(null);

  useOnClickOutside(ref, () => setIsOpen(false));

  const toggleDropdown = () => {
    setIsOpen((prev) => !prev);
  };

  const handleItemClick = (item: DropdownItem) => {
    if (item.onClick) {
      item.onClick();
    }
    setIsOpen(false);
  };

  return (
    <div className={`relative ${className}`} ref={ref}>
      <button
        onClick={toggleDropdown}
        className="flex items-center space-x-2 focus:outline-none"
      >
        {trigger ? trigger : (
          <span className="text-sm font-medium">
            Menu
          </span>
        )}
      </button>

      {isOpen && (
        <div
          className={`absolute right-0 mt-2 w-48 rounded-lg bg-white shadow-lg ring-1 ring-black ring-opacity-5 dark:bg-slate-800 ${dropdownClassName}`}
        >
          <ul className="">
            {items.map((item, index) => (
              <li key={index} className={`relative ${itemClassName}`}>
                {item.href ? (
                  <a
                    href={item.href}
                    className="flex items-center px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:text-gray-200 dark:hover:bg-gray-700"
                    onClick={() => handleItemClick(item)}
                  >
                    {item.icon && <span className="mr-2">{item.icon}</span>}
                    {item.label}
                  </a>
                ) : (
                  <button
                    onClick={() => handleItemClick(item)}
                    className={`flex w-full items-center px-4 py-2 text-sm ${item.itemClassName}`}
                  >
                    {item.icon && <span className="mr-2">{item.icon}</span>}
                    {item.label}
                  </button>
                )}
                {/* Render sub-items if available */}
                {item.subItems && (
                  <CustomDropdown
                    items={item.subItems}
                    className="absolute left-full top-0 ml-1 mt-0"
                    dropdownClassName="w-48"
                  />
                )}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default CustomDropdown;
