import React from "react";
import APPsTable from "./APPsTable";
import ContactsTable from "./ContactsTable";
import EPsTable from "./EPsTable";
import EventsTable from "./EventsTable";
import PlacesTable from "./PlacesTable";

function App() {
  return (
    <div className="h-full w-screen bg-gradient-to-br from-indigo-100 via-purple-100 to-pink-100 p-10">
      <h1 className="text-4xl font-bold text-indigo-800 text-center mb-10">
        Admin Panel
      </h1>
      
      <ContactsTable />
      <EPsTable />
      <APPsTable />
      <EventsTable />
      <PlacesTable />
    </div>
  );
}

export default App;