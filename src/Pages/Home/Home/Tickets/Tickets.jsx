import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import React from 'react';

const Tickets = () => {
  const query = useQuery({
    queryKey: ["tickets"],
    queryFn: async() => await axios(`${import.meta.env.VITE_API_URL}/tickets`)
  })
  console.log(query)
  return (
    <div>
      
    </div>
  );
};

export default Tickets;