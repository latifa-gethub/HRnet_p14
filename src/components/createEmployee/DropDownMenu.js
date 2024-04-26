
import React, { useState } from 'react';
import { FaCaretUp, FaCaretDown } from 'react-icons/fa'


const DropdownMenu = ({ options, onSelect }) => {
  const [selectedOption, setSelectedOption] = useState(null);
  const [isOpen,setIsOpen]=useState(false)
 
  const toggleDropDown = () => setIsOpen(!isOpen)
 
  
  const handleSelect = (option) => {

    console.log("option handelselect",option)
    setSelectedOption(option.name);
    if(option.abbreviation){
      onSelect(option.abbreviation)
    }else{
      onSelect(option.name);
    }
    
    setIsOpen(false)
  };
  return (
    <div className="dropdown">
      <div className="dropdown-toggle"  onClick={toggleDropDown}>
        {selectedOption ? selectedOption : options[0].name}
        <div>{isOpen ? <FaCaretUp/> : <FaCaretDown/>}</div>
      </div>
      {isOpen && <div className="dropdown-menu">
        {options.map((option,index) => (
          <div
            key={index}
            className="dropdown-item"
            onClick={() => handleSelect(option)}
          > 
            {option.name}
          </div>
        ))}
      </div>}
     
    </div>
  );
};

export default DropdownMenu;