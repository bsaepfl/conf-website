'use client'
// src/components/Agenda/AgendaTable.tsx
import React, { useState } from 'react';
import AgendaEntry from './AgendaEntry';
import StarsBackground from '../StarsBackground';
import { AgendaEntryType } from './AgendaEntry';
import placeholder from '../../images/tickets/placeholder.webp';

const agendaData: AgendaEntryType[] = [
  {
    icon: placeholder,
    name: 'Event 1',
    date: '2023-10-01',
    place: 'Conference Hall A',
    speakers: ['Speaker 1', 'Speaker 2'],
    resume: 'This is a brief summary of Event 1.',
    track: 'Technology',
  },
  {
    icon: placeholder,
    name: 'Event 2',
    date: '2023-10-02',
    place: 'Conference Hall B',
    speakers: ['Speaker 3', 'Speaker 4'],
    resume: 'This is a brief summary of Event 2.',
    track: 'Health',
  },
  {
    icon: placeholder,
    name: 'Event 3',
    date: '2023-10-03',
    place: 'Conference Hall C',
    speakers: ['Speaker 5', 'Speaker 6'],
    resume: 'This is a brief summary of Event 3.',
    track: 'Education',
  },
  // Add more entries as needed
];

const AgendaTable: React.FC = () => {
  const [filter, setFilter] = useState<string>('');
  const [sortOrder, setSortOrder] = useState<'asc' | 'desc'>('asc');

  const handleSort = () => {
    setSortOrder((prevSortOrder) => (prevSortOrder === 'asc' ? 'desc' : 'asc'));
  };

  const filteredData = agendaData
    .filter((entry) =>
      entry.name.toLowerCase().includes(filter.toLowerCase())
    )
    .sort((a, b) => {
      const dateA = new Date(a.date);
      const dateB = new Date(b.date);
      return sortOrder === 'asc' ? dateA.getTime() - dateB.getTime() : dateB.getTime() - dateA.getTime();
    });

  return (
    <div className="relative overflow-x-auto">
      <StarsBackground />
      <div className="relative z-10 mb-4">
        <input
          type="text"
          placeholder="Filter by name"
          className="input input-bordered w-full max-w-xs"
          value={filter}
          onChange={(e) => setFilter(e.target.value)}
        />
      </div>
      <table className="table w-full bg-gray-800 text-white">
        <thead>
          <tr>
            <th></th>
            <th>Name</th>
            <th>
              <button onClick={handleSort} className="btn btn-ghost">
                Date {sortOrder === 'asc' ? '↑' : '↓'}
              </button>
            </th>
            <th>Place</th>
            <th>Speakers</th>
            <th>Resume</th>
            <th>Track</th>
          </tr>
        </thead>
        <tbody>
          {filteredData.map((entry, index) => (
            <AgendaEntry key={index} entry={entry} index={index} />
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default AgendaTable;
