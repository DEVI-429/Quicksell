import React, { useState, useEffect } from 'react';
import { fetchTickets } from '../services/api';
import { groupTickets } from '../utils/groupTickets';
import KanbanColumn from './KanbanColumn';
import DisplayControl from './DisplayControl';  
import styles from '../styles/KanbanBoard.module.css'; 

const KanbanBoard = () => {
  const [tickets, setTickets] = useState([]);
  const [groupedTickets, setGroupedTickets] = useState({});
  const [groupBy, setGroupBy] = useState('status');
  const [sortBy, setSortBy] = useState('priority');

  useEffect(() => {
    fetchTickets().then((data) => {
      setTickets(data.tickets);
      const grouped = groupTickets(data.tickets, groupBy, data.users);
      setGroupedTickets(sortTickets(grouped, sortBy));
    });
  }, [groupBy, sortBy]);

  const handleGroupChange = (group) => {
    setGroupBy(group);
    const grouped = groupTickets(tickets, group, users);
    setGroupedTickets(sortTickets(grouped, sortBy));
  };

  const handleSortChange = (sort) => {
    setSortBy(sort);
    setGroupedTickets(sortTickets(groupedTickets, sort));
  };

  return (
    <div className={styles.kanbanBoard}>
      <DisplayControl 
        groupBy={groupBy} 
        sortBy={sortBy} 
        onGroupChange={handleGroupChange} 
        onSortChange={handleSortChange} 
      />
      <div className={styles.columns}>
        {Object.keys(groupedTickets).map((key) => (
          <KanbanColumn key={key} title={key} tickets={groupedTickets[key]} />
        ))}
      </div>
    </div>
  );
};

const sortTickets = (groupedTickets, sortBy) => {
  const sortedGroupedTickets = {};
  Object.keys(groupedTickets).forEach((group) => {
    sortedGroupedTickets[group] = [...groupedTickets[group]].sort((a, b) => {
      if (sortBy === 'priority') {
        return b.priority - a.priority;
      } else if (sortBy === 'title') {
        return a.title.localeCompare(b.title);
      }
      return 0;
    });
  });
  return sortedGroupedTickets;
};

export default KanbanBoard;
