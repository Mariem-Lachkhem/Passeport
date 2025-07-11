import React from 'react';
import avatar from './assets/avatar.jpg'; // Vérifie que ce chemin est bon
import { FaUtensils, FaHome, FaMotorcycle, FaLaptop } from 'react-icons/fa';

const ProfileCard = ({
  name,
  job_title,
  jd,
  start_date,
  end_date,
  mapUrl,
  meals,
  accommodationProvided,
  accommodationCovered,
  transportCovered,
  computerProvided,
}) => {
  // Construire le tableau des icônes dynamiquement
  const icons = [];

  if (meals > 1) {
    icons.push({ icon: <FaUtensils size={24} />, label: 'Food', count: meals });
  }
  if (accommodationProvided) {
  icons.push({ 
    icon: (
      <FaHome 
        size={24} 
        color={accommodationCovered ? 'green' : 'red'} 
      />
    ), 
    label: 'Accommodation' 
  });
}

  if (transportCovered) {
    icons.push({ icon: <FaMotorcycle size={24} />, label: 'Transport' });
  }
  if (computerProvided) {
    icons.push({ icon: <FaLaptop size={24} />, label: 'Tech' });
  }

  return (
    <div className="max-w-sm mx-auto p-4 bg-gray-50 min-h-screen text-gray-800 font-sans space-y-4">
      {/* Header */}
      <div className="flex items-center justify-between">
        <button className="text-2xl font-bold">☰</button>
        <button className="text-xl">🔔</button>
      </div>

      {/* Profile */}
      <div className="flex flex-col items-center">
        <img
          src={avatar}
          alt="Profile"
          className="w-24 h-24 rounded-full object-cover shadow-md border-2 border-white"
        />
        <h2 className="text-lg font-semibold mt-2">{name}</h2>
        <p className="text-sm text-gray-500">Exchange participant</p>
        <p className="text-xs text-gray-400">Hadrumet, Tunisia</p>
      </div>

      {/* Job description */}
      <div className="bg-white rounded-xl shadow-md p-4 space-y-2">
        <div className="flex justify-between items-center">
          <div className="flex items-center gap-2">
            <span className="text-xl">💼</span>
            <p className="font-medium">{job_title}</p>
          </div>
          <p className="text-xs text-gray-400">
            {start_date} / {end_date}
          </p>
        </div>
        <p className="text-gray-600 text-xs">{jd}</p>
      </div>

      {/* Icons */}
      <div className="grid grid-cols-4 gap-4">
        {icons.map(({ icon, label, count }, idx) => (
          <div
            key={idx}
            className="relative bg-gray-200 hover:bg-gray-300 transition-all duration-200 rounded-lg p-3 flex items-center justify-center shadow-sm"
          >
            <div className="text-gray-700">{icon}</div>
            {count && count > 0 && (
              <span className="absolute -top-1 -right-2 flex items-center justify-center w-5 h-5 text-xs font-bold text-white bg-blue-500 rounded-full ring-2 ring-white">
                {meals}
              </span>
            )}
          </div>
        ))}
      </div>

      {/* Location */}
      <div className="bg-white rounded-xl shadow-md p-4">
        <div className="flex items-center gap-2 mb-2">
          <span>📍</span>
          <p className="font-medium">Location</p>
        </div>
        <iframe
          title="Google Map"
          src={mapUrl}
          className="w-full h-48 rounded-lg border"
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        />
      </div>
    </div>
  );
};

export default ProfileCard;
