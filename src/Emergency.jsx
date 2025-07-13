import { FaBars, FaAmbulance, FaFireExtinguisher } from "react-icons/fa";
import { GiPoliceOfficerHead } from 'react-icons/gi';
import { MdOutlineSecurity } from 'react-icons/md';
import { IoIosCall } from "react-icons/io";

const EmergencyCard = ({ label, number, icon }) => (
  <div className="flex flex-col items-center space-y-2">
    <div className="bg-gray-100 rounded-md w-30 h-40 flex flex-col items-center justify-center text-xl text-black shadow-md space-y-4">
      <div className="flex items-center justify-center rounded-full h-16 w-16 bg-gray-300">
        {icon}
      </div>
      <a
        href={`tel:${number}`}
        className="inline-flex items-center space-x-1 text-blue-700 font-bold text-lg hover:underline"
      >
        <IoIosCall size={24} />
        <p>{number}</p>
      </a>
    </div>
    <p className="text-sm font-semibold text-gray-700 text-center">{label}</p>
  </div>
);

const EmergencyContacts = () => {
  const contacts = [
    {
      label: 'Ambulance',
      number: '190',
      icon: <FaAmbulance size={40} />,
    },
    {
      label: 'National Guard',
      number: '193',
      icon: <MdOutlineSecurity size={40} />,
    },
    {
      label: 'Police',
      number: '197',
      icon: <GiPoliceOfficerHead size={40} />,
    },
    {
      label: 'Firefighter',
      number: '198',
      icon: <FaFireExtinguisher size={40} />,
    },
  ];

  return (
    <div className="w-screen min-h-screen bg-white text-gray-800 font-sans p-6 flex flex-col space-y-6">
      {/* Header (helmi 7abah aal isar) */}
      <header className="flex items-center space-x-4">
        <button className="bg-indigo-600 text-white p-3 rounded-lg hover:bg-indigo-700 transition">
          <FaBars size={20} className="text-indigo-900" />
        </button>
        <h1 className="text-3xl font-extrabold text-indigo-900 drop-shadow-sm">
          Emergency Contacts
        </h1>
      </header>

      {/* contats container */}
      <div className="bg-white rounded-xl shadow-md p-6 w-full max-w-md self-center">
        <div className="grid grid-cols-2 gap-6">
          {contacts.map((contact, idx) => (
            <EmergencyCard key={idx} {...contact} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default EmergencyContacts;
