import React, { useState } from "react";

const EPsTable = () => {
  const [eps, setEps] = useState([
    {
      picture: "https://static.vecteezy.com/system/resources/previews/006/390/348/non_2x/simple-flat-isolated-people-icon-free-vector.jpg",
      name: "Zeynep",
      internship: "volunteering",
      term: "short",
      phone: "5à620818",
    },
  ]);

  const [editIndex, setEditIndex] = useState(null);
  const [editData, setEditData] = useState({
    picture: "",
    name: "",
    internship: "",
    term: "",
    phone: "",
  });

  const handleAdd = () => {
    setEps([...eps, { ...editData }]);
    setEditIndex(eps.length);
    setEditData({
      picture: "",
      name: "",
      internship: "",
      term: "",
      phone: "",
    });
  };

  const handleEdit = (index) => {
    setEditIndex(index);
    setEditData({ ...eps[index] });
  };

  const handleSave = () => {
    const updated = [...eps];
    updated[editIndex] = editData;
    setEps(updated);
    setEditIndex(null);
  };

  const handleDelete = (index) => {
    const updated = eps.filter((_, i) => i !== index);
    setEps(updated);
    if (editIndex === index) setEditIndex(null);
  };

  return (
    <div className="mb-12">
      <h2 className="text-2xl font-bold text-indigo-800 mb-4">EPs</h2>
      <button
        onClick={handleAdd}
        className="bg-green-500 text-black px-4 py-2 rounded mb-4"
      >
        Add an EP
      </button>
      <div className="overflow-auto bg-white rounded-xl shadow">
        <table className="w-full text-left">
          <thead className="bg-indigo-300 text-indigo-900">
            <tr>
              <th className="p-3">Picture</th>
              <th className="p-3">Name</th>
              <th className="p-3">Internship</th>
              <th className="p-3">Term</th>
              <th className="p-3">Phone</th>
              <th className="p-3 text-center">Actions</th>
            </tr>
          </thead>
          <tbody>
            {eps.map((ep, index) => (
              <tr key={index} className="border-t border-gray-200">
                {editIndex === index ? (
                  <>
                    <td className="p-3 flex flex-col items-center">
                      <input
                        type="file"
                        accept="image/*"
                        onChange={(e) => {
                          const file = e.target.files[0];
                          if (file) {
                            const reader = new FileReader();
                            reader.onload = (event) => {
                              setEditData({ ...editData, picture: event.target.result });
                            };
                            reader.readAsDataURL(file);
                          }
                        }}
                      />
                      {editData.picture && (
                        <img
                          src={editData.picture}
                          alt="preview"
                          className="w-12 h-12 rounded-full mt-2"
                        />
                      )}
                    </td>
                    <td className="p-3">
                      <input
                        value={editData.name}
                        onChange={(e) =>
                          setEditData({ ...editData, name: e.target.value })
                        }
                        className="w-full border rounded px-2 py-1"
                      />
                    </td>
                    <td className="p-3">
                      <input
                        value={editData.internship}
                        onChange={(e) =>
                          setEditData({ ...editData, internship: e.target.value })
                        }
                        className="w-full border rounded px-2 py-1"
                      />
                    </td>
                    <td className="p-3">
                      <input
                        value={editData.term}
                        onChange={(e) =>
                          setEditData({ ...editData, term: e.target.value })
                        }
                        className="w-full border rounded px-2 py-1"
                      />
                    </td>
                    <td className="p-3">
                      <input
                        type="tel"
                        value={editData.phone}
                        onChange={(e) =>
                          setEditData({ ...editData, phone: e.target.value })
                        }
                        className="w-full border rounded px-2 py-1"
                      />
                    </td>
                    <td className="p-3 space-x-2 text-center">
                      <button
                        onClick={handleSave}
                        className="bg-blue-500 text-black px-3 py-1 rounded"
                      >
                        Save
                      </button>
                      <button
                        onClick={() => setEditIndex(null)}
                        className="bg-gray-400 text-black px-3 py-1 rounded"
                      >
                        Cancel
                      </button>
                    </td>
                  </>
                ) : (
                  <>
                    <td className="p-3">
                      <img
                        src={ep.picture}
                        alt="pic"
                        className="w-12 h-12 rounded-full"
                      />
                    </td>
                    <td className="p-3">{ep.name}</td>
                    <td className="p-3">{ep.internship}</td>
                    <td className="p-3">{ep.term}</td>
                    <td className="p-3">
                      <a href={`tel:${ep.phone}`} className="text-blue-600 underline">
                        {ep.phone}
                      </a>
                    </td>
                    <td className="p-3 space-x-2 text-center">
                      <button
                        onClick={() => handleEdit(index)}
                        className="bg-yellow-400 text-black px-3 py-1 rounded"
                      >
                        Edit
                      </button>
                      <button
                        onClick={() => handleDelete(index)}
                        className="bg-red-500 text-black px-3 py-1 rounded"
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
  );
};

export default EPsTable;
