import React from 'react';
import ProfileCard from './ProfileCard';

const mapUrl =
  'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3153.01968293617!2d144.95605481531837!3d-37.81720997975156!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6ad65d43f4f1d6e3%3A0x5045675218ce6e0!2sMelbourne%20VIC%2C%20Australia!5e0!3m2!1sen!2sus!4v1616189547346!5m2!1sen!2sus';

function App() {
  return (
    <div className="bg-gray-100 min-h-screen">
      <ProfileCard
        name="Med Helmi Essouaied"
        job_title="Skill Up"
        jd="Lorem Ipsum is simply dummy text of the printing and typesetting industry."
        start_date="2025-08-01"
        end_date="2025-09-12"
        mapUrl={mapUrl}
        meals={0}
        accommodationProvided={true}
        accommodationCovered={true}
        transportCovered={false}
        computerProvided={true}
      />
    </div>
  );
}

export default App;
