import React from 'react';
import styles from '../styles/SortingOptions.module.css';  

const SortingOptions = ({ sortBy, onChange }) => {
  return (
    <div className={styles.sortingOptions}>
      <label htmlFor="sortBy">Ordering</label>
      <select id="sortBy" value={sortBy} onChange={(e) => onChange(e.target.value)}>
        <option value="priority">Priority</option>
        <option value="title">Title</option>
      </select>
    </div>
  );
};

export default SortingOptions;
