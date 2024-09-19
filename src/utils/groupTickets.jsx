export const groupTickets = (tickets, groupBy, users = []) => {
  switch (groupBy) {
    case 'status':
      return tickets.reduce((acc, ticket) => {
        const status = ticket.status || 'Unknown'; // Ensure all statuses are included
        if (!acc[status]) acc[status] = [];
        acc[status].push(ticket);
        return acc;
      }, {});
    
    case 'user':
      return tickets.reduce((acc, ticket) => {
        const user = users.find((u) => u.id === ticket.userId)?.name || 'Unknown User';
        if (!acc[user]) acc[user] = [];
        acc[user].push(ticket);
        return acc;
      }, {});
    
    case 'priority':
      return tickets.reduce((acc, ticket) => {
        const priority = ticket.priority;
        if (!acc[priority]) acc[priority] = [];
        acc[priority].push(ticket);
        return acc;
      }, {});
    
    default:
      return tickets;
  }
};
