import React from 'react';
import KanbanCard from './KanbanCard';
import styles from '../styles/KanbanColumn.module.css';
import { GoPlus } from "react-icons/go";
import { BsThreeDots } from "react-icons/bs";
import { MdOutlineSignalCellularAlt1Bar, MdOutlineSignalCellularAlt2Bar, MdOutlineSignalCellularAlt } from "react-icons/md";
import { TbAlertSquare } from "react-icons/tb";
import { VscCircleLarge } from "react-icons/vsc";
import { RiProgress4Line } from "react-icons/ri";
import { FaList } from 'react-icons/fa';
import { IoIosCheckmarkCircle } from "react-icons/io";
import { MdCancel } from "react-icons/md";

const KanbanColumn = ({ title, tickets }) => {
  const showImg = !(title == '0' || title == '1' || title == '2' || title == '3' || title == '4' || title == 'Todo' || title == 'In progress' || title == 'Backlog' || title == 'done' || title == 'cancelled');


  return (
    <div className={styles.kanbanColumn}>
      <div 
        style={{
          display: 'flex',
          flexDirection: 'row',
          justifyContent: 'space-between',
          alignItems: 'center',
          marginBottom: '20px'
        }}
      >
        <div style={{ display: 'flex', alignItems: 'center' }}>
          <p className={styles.head} style={{ marginRight: '10px' }}>
            {title === '0' && <p><BsThreeDots /> &nbsp;&nbsp;&nbsp; No priority</p>}
            {title === '1' && <p><MdOutlineSignalCellularAlt1Bar /> &nbsp;&nbsp;&nbsp; Low</p>}
            {title === '2' && <p><MdOutlineSignalCellularAlt2Bar /> &nbsp;&nbsp;&nbsp; Medium</p>}
            {title === '3' && <p><MdOutlineSignalCellularAlt /> &nbsp;&nbsp;&nbsp; High</p>}
            {title === '4' && <p><TbAlertSquare /> &nbsp;&nbsp;&nbsp; Urgent</p>}
            {title === 'Todo' && <p><VscCircleLarge /> &nbsp;&nbsp;&nbsp; Todo</p>}
            {title === 'In progress' && <p><RiProgress4Line /> &nbsp;&nbsp;&nbsp; In Progress</p>}
            {title === 'Backlog' && <p><FaList /> &nbsp;&nbsp;&nbsp; Backlog</p>}
            {title === 'done' && <p><IoIosCheckmarkCircle /> &nbsp;&nbsp;&nbsp; Done</p>}
            {title === 'cancelled' && <p><MdCancel /> &nbsp;&nbsp;&nbsp; Cancelled</p>}
            {showImg && <p style={{ display: 'flex', gap: '15px', alignItems: 'center' }}>
              <img style={{ height: '40px', width: '40px' }} src='https://cdn-icons-png.flaticon.com/512/3177/3177440.png' alt='Icon' />
              {title}
            </p>}
          </p>
          <p>{tickets.length}</p>
        </div>
        <div style={{ display: 'flex', gap: '10px' }}>
          <GoPlus />
          <BsThreeDots />
        </div>
      </div>

      {tickets.map((ticket) => (
        <KanbanCard key={ticket.id} ticket={ticket} img={showImg} />
      ))}
    </div>
  );
};

export default KanbanColumn;
