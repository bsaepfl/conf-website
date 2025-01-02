// src/components/Agenda/AgendaEntry.tsx
import React from 'react';
import Image from 'next/image';

const AgendaEntry = ({ entry, index }) => {
  const date = new Date(entry.date).toLocaleDateString();

  return (
    <tr className="hover">
      <th>{index + 1}</th>
      <td className="flex items-center">
        <Image src={entry.icon} alt={entry.name} width={24} height={24} className="mr-2" />
        {entry.name}
      </td>
      <td>{date}</td>
      <td>{entry.place}</td>
      <td>{entry.speakers.join(', ')}</td>
      <td>{entry.resume}</td>
      <td>{entry.track}</td>
    </tr>
  );
};

export default AgendaEntry;
