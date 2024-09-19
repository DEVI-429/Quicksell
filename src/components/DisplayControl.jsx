import React, { useState } from 'react';
import DisplayOptions from './DisplayOptions';
import SortingOptions from './SortingOptions';
import styles from '../styles/DisplayControl.module.css';  
import { VscSettings } from "react-icons/vsc";
import { IoMdArrowDropdown } from "react-icons/io";

const DisplayControl = ({ groupBy, sortBy, onGroupChange, onSortChange }) => {
  const [showOptions, setShowOptions] = useState(false);

  const handleToggle = () => {
    setShowOptions(!showOptions);  
  };

  return (
    <div className={styles.displayControl}>
      <button onClick={handleToggle} className={styles.toggleButton}>
        <VscSettings/>
        <span>Display</span>
        <IoMdArrowDropdown/>
      </button>
      {showOptions && (
        <div className={styles.options}>
          <DisplayOptions groupBy={groupBy} onChange={onGroupChange} />
          <SortingOptions sortBy={sortBy} onChange={onSortChange} />
        </div>
      )}
    </div>
  );
};

export default DisplayControl;
