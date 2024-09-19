import React from 'react';
import styles from '../styles/DisplayOptions.module.css';  

const DisplayOptions = ({ groupBy, onChange }) => {
  return (
    <div className={styles.displayOptions}>
      <label htmlFor="groupBy">Grouping</label>
      <select className={styles.options} id="groupBy" value={groupBy} onChange={(e) => onChange(e.target.value)}>
          <option value="status">Status</option>
          <option value="user">User</option>
          <option value="priority">Priority</option>
      </select>
    </div>
  );
};

export default DisplayOptions;
