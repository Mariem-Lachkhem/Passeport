import React, { useState } from "react";

import yassir from "./assets/yassir.png";
import kool from "./assets/kool.png";
import menutium from "./assets/menutium.png";
import bolt from "./assets/bolt.png";
import inDrive from "./assets/indrive.png";
import monoprix from "./assets/monoprix.png";
import aziza from "./assets/aziza.png";
import mg from "./assets/mg.png";
import dabchy from "./assets/dabchy.png";

const Admin = () => {
  const [apps, setApps] = useState([
    
    {
          label: "Yassir",
          icon: <img src={yassir} alt="Yassir" className="w-16 h-16 object-contain" />,
          android: "https://play.google.com/store/apps/details?id=com.yatechnologies.yassir_rider",
          ios: "https://apps.apple.com/tn/app/yassir/id1239926325",
        },
        {
          label: "Kool",
          icon: <img src={kool} alt="Kool" className="w-16 h-16 object-contain" />,
          android: "https://play.google.com/store/apps/details?id=com.mohamedhadiji.kool",
          ios: "https://apps.apple.com/us/app/kool-delivery/id1545409489",
        },
        {
          label: "Menutium",
          icon: <img src={menutium} alt="Menutium" className="w-16 h-16 object-contain" />,
          android: "https://play.google.com/store/apps/details?id=project.iobird.menutium",
          ios: "https://apps.apple.com/us/app/menutium/id1170811326",
        },
        {
          label: "Bolt",
          icon: <img src={bolt} alt="Bolt" className="w-16 h-16 object-contain" />,
          android: "https://play.google.com/store/apps/details?id=ee.mtakso.client",
          ios: "https://apps.apple.com/us/app/bolt-request-a-ride/id675033630",
        },
        {
          label: "inDrive",
          icon: <img src={inDrive} alt="inDrive" className="w-16 h-16 object-contain" />,
          android: "https://play.google.com/store/apps/details?id=sinet.startup.inDriver",
          ios: "https://apps.apple.com/us/app/indrive-save-on-city-rides/id780125801",
        },
        {
          label: "Monoprix",
          icon: <img src={monoprix} alt="Monoprix" className="w-16 h-16 object-contain" />,
          android: "https://play.google.com/store/apps/details?id=com.apeiron.monoprix",
          ios: "https://apps.apple.com/us/app/m-monoprix/id480953369",
        },
        {
          label: "Aziza",
          icon: <img src={aziza} alt="Aziza" className="w-16 h-16 object-contain" />,
          android: "https://play.google.com/store/search?q=aziza&c=apps",
        },
        {
          label: "MG",
          icon: <img src={mg} alt="MG" className="w-16 h-16 object-contain" />,
          android: "https://play.google.com/store/apps/details?id=com.magasingeneral.mymg",
          ios: "https://apps.apple.com/us/app/mymg-tn/id1611983617",
        },
        {
          label: "Dabchy",
          icon: <img src={dabchy} alt="Dabchy" className="w-16 h-16 object-contain" />,
          android: "https://play.google.com/store/apps/details?id=com.dabchy.mobile.dabchyapp",
          ios: "https://apps.apple.com/us/app/dabchy/id1207403847",
        },
  ]);

  const [editIndex, setEditIndex] = useState(null);
  const [editData, setEditData] = useState({ label: "", android: "", ios: "", icon: "" });

  const handleEdit = (index) => {
    setEditIndex(index);
    setEditData({ ...apps[index] });
  };

  const handleSave = () => {
    const updatedApps = [...apps];
    updatedApps[editIndex] = editData;
    setApps(updatedApps);
    setEditIndex(null);
  };

  const handleCancel = () => {
    setEditIndex(null);
  };

  const handleAdd = () => {
    setApps([
      ...apps,
      { label: "", icon: "", android: "", ios: "" },
    ]);
    setEditIndex(apps.length);
    setEditData({ label: "", icon: "", android: "", ios: "" });
  };

  const handleDelete = (index) => {
    const updatedApps = apps.filter((_, i) => i !== index);
    setApps(updatedApps);
    if (editIndex === index) setEditIndex(null);
  };

  const buttonClass =
    "bg-gray-300 text-indigo-800 px-4 py-1 rounded-lg shadow  ";

  const addButtonClass =
    "bg-gray-300 text-indigo-800 px-5 py-2 rounded-lg shadow ";

  return (
    <div className="h-full w-screen bg-gradient-to-br from-indigo-100 via-purple-100 to-pink-100 p-10">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-4xl font-bold text-indigo-800 mb-8 text-center ">
          Admin Panel
        </h1>
        <div className="flex justify-end mb-4 ">
          <button onClick={handleAdd} className={addButtonClass}>
            Add an app
          </button>
        </div>
        <div className="overflow-x-auto bg-white rounded-2xl shadow-lg">
          <table className="w-full text-left">
            <thead className="bg-indigo-300 text-indigo-900">
              <tr>
                <th className="p-4">App</th>
                <th className="p-4">Image</th>
                <th className="p-4">Link Android</th>
                <th className="p-4">Link iOS</th>
                <th className="p-4 text-center">Actions</th>
              </tr>
            </thead>
            <tbody>
              {apps.map((app, index) => (
                <tr
                  key={index}
                  className="border-t border-gray-200 hover:bg-indigo-50 transition"
                >
                  {editIndex === index ? (
                    <>
                      <td className="p-4">
                        <input
                          value={editData.label}
                          onChange={(e) =>
                            setEditData({ ...editData, label: e.target.value })
                          }
                          className="border border-indigo-300 rounded px-2 py-1 w-full focus:outline-none focus:ring"
                        />
                      </td>
                      <td className="p-4">
                        <img
                          src={editData.icon}
                          alt="icon"
                          className="w-16 h-16 object-contain mb-2 rounded"
                        />
                        <input
                          value={editData.icon}
                          onChange={(e) =>
                            setEditData({ ...editData, icon: e.target.value })
                          }
                          className="border border-indigo-300 rounded px-2 py-1 w-full"
                          placeholder="URL de l’image"
                        />
                      </td>
                      <td className="p-4">
                        <input
                          value={editData.android}
                          onChange={(e) =>
                            setEditData({ ...editData, android: e.target.value })
                          }
                          className="border border-indigo-300 rounded px-2 py-1 w-full"
                        />
                      </td>
                      <td className="p-4">
                        <input
                          value={editData.ios}
                          onChange={(e) =>
                            setEditData({ ...editData, ios: e.target.value })
                          }
                          className="border border-indigo-300 rounded px-2 py-1 w-full"
                        />
                      </td>
                      <td className="p-4 text-center space-x-2">
                        <button onClick={handleSave} className={buttonClass}>
                          Save
                        </button>
                        <button onClick={handleCancel} className={buttonClass}>
                          Cancel
                        </button>
                      </td>
                    </>
                  ) : (
                    <>
                      <td className="p-4 font-semibold text-gray-800">{app.label}</td>
                      <td className="p-4">
                        <img
                          src={app.icon}
                          alt={app.label}
                          className="w-16 h-16 object-contain rounded shadow"
                        />
                      </td>
                      <td className="p-4">
                        <a
                          href={app.android}
                          className="text-blue-600 underline hover:text-blue-800"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          Android
                        </a>
                      </td>
                      <td className="p-4">
                        {app.ios ? (
                          <a
                            href={app.ios}
                            className="text-blue-600 underline hover:text-blue-800"
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            iOS
                          </a>
                        ) : (
                          <span className="italic text-gray-400">No Link</span>
                        )}
                      </td>
                      <td className="p-4 text-center space-x-2">
                        <button
                          onClick={() => handleEdit(index)}
                          className={buttonClass}
                        >
                          Edit
                        </button>
                        <button
                          onClick={() => handleDelete(index)}
                          className={buttonClass}
                        >
                          Delete
                        </button>
                      </td>
                    </>
                  )}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Admin;
