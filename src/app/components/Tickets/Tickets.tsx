// components/Tickets.tsx
import Ticket from './Ticket';
import Particles from '../StarsBackground'; // Adjust the import path as needed
import placeholder from '../../images/tickets/placeholder.webp';

const TicketsComponent = () => {
  const ticketsData = [
    {
      type: 'Student',
      price: '10€',
      description: 'Valid only with Student ID (any university)',
      benefits: [
        { icon: placeholder, text: '2-day Conference' },
        { icon: placeholder, text: 'Workshops' },
        { icon: placeholder, text: 'Ecosystem Night' },
        { icon: placeholder, text: 'Student Initiative Night' },
        { icon: placeholder, text: 'After-Party' },
      ],
    },
    {
      type: 'Regular',
      price: '129€',
      description: '',
      benefits: [
        { icon: placeholder, text: '2-day Conference' },
        { icon: placeholder, text: 'Workshops' },
        { icon: placeholder, text: 'Ecosystem Night' },
        { icon: placeholder, text: 'Student Initiative Night' },
        { icon: placeholder, text: 'After-Party' },
      ],
    },
    {
      type: 'VIP',
      price: '499€',
      description: '',
      benefits: [
        { icon: placeholder, text: '2-day Conference' },
        { icon: placeholder, text: 'Workshops' },
        { icon: placeholder, text: 'Ecosystem Night' },
        { icon: placeholder, text: 'Student Initiative Night' },
        { icon: placeholder, text: 'After-Party' },
        { icon: placeholder, text: 'VIP-Speaker Lounge' },
        { icon: placeholder, text: 'VIP-Entrance' },
      ],
    },
  ];

  return (
    <div className="section relative">
      <Particles className="absolute inset-0 z-0" />
      <div className="container relative z-10">
        <div className="container2">
          <h2 className="tickets text-center text-5xl font-extrabold my-8">
            <span className="bg-gradient-to-r from-blue-500 to-purple-600 bg-clip-text text-transparent">
              Tickets
            </span>
          </h2>
        </div>
      </div>
      <div className="container3 relative z-10">
        <div className="container4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {ticketsData.map((ticket, index) => (
            <Ticket key={index} {...ticket} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default TicketsComponent;
