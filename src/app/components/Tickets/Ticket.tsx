// components/Ticket.tsx
import Image from 'next/image';
import placeholder from '../../images/tickets/placeholder.webp';

interface TicketProps {
  type: string;
  price: string;
  description: string;
  benefits: { icon: string; text: string }[];
}

const Ticket: React.FC<TicketProps> = ({ type, price, description, benefits }) => {
  return (
    <div className="card w-full bg-base-100 shadow-xl max-w-xs mx-auto">
      <div className="card-body">
        <h2 className="card-title">{type}</h2>
        <p className="text-4xl">{price}</p>
        {description && <p className="text-sm">{description}</p>}
        <div className="divider"></div>
        <h3 className="text-lg">Grant access to:</h3>
        <ul className="list-disc list-inside">
          {benefits.map((benefit, index) => (
            <li key={index} className="flex items-center gap-2">
              <Image src={placeholder} alt={benefit.text} width={14} height={14} />
              <span>{benefit.text}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Ticket;
