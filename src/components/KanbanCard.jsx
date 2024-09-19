import React from 'react';
import styles from '../styles/KanbanCard.module.css';  
import { GoDotFill } from "react-icons/go";
import { IoIosCheckmarkCircle } from "react-icons/io";
import { VscCircleLarge } from "react-icons/vsc";
import { BsThreeDots } from "react-icons/bs";
import { MdOutlineSignalCellularAlt1Bar, MdOutlineSignalCellularAlt2Bar, MdOutlineSignalCellularAlt } from "react-icons/md";
import { TbAlertSquare } from "react-icons/tb";
import { FaCircle } from "react-icons/fa";

const KanbanCard = ({ ticket,img }) => {
  return (
    <div className={styles.kanbanCard}>
      <h5 style={{color:'#A9A9A9',display:'flex',justifyContent:'space-between',alignItems:'center'}}>{ticket.id} {img?'':<img style={{height:'40px',width:'40px'}} src='https://cdn-icons-png.flaticon.com/512/3177/3177440.png'/>}</h5>
      <h5>{ticket.status=='done'?<IoIosCheckmarkCircle style={{marginRight:'10px'}}/>:<VscCircleLarge style={{marginRight:'10px'}}/>}{ticket.title}</h5>
      <p style={{display:'flex',alignItems:'center'}}>
        {ticket.priority=='0'?<BsThreeDots style={{marginRight:'10px'}}/>:
          ticket.priority=='1'?<MdOutlineSignalCellularAlt1Bar style={{marginRight:'10px'}}/>:
          ticket.priority=='2'?<MdOutlineSignalCellularAlt2Bar style={{marginRight:'10px'}}/>:
          ticket.priority=='3'?<MdOutlineSignalCellularAlt style={{marginRight:'10px'}}/>:
          ticket.priority=='4'?<TbAlertSquare style={{marginRight:'10px'}}/>:''
        }
        <FaCircle color='lightgray' style={{marginRight:'5px'}}/>{ticket.tag.join(', ')}</p>
    </div>
  );
};

export default KanbanCard;
