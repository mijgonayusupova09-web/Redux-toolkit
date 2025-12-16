import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  getUser,
  addUser,
  deleteUser,
  editUser,
  toggleStatus,
} from "./todoAsync";

const ReduxAsync = () => {
  const dispatch = useDispatch();
  const { data, loading } = useSelector((state) => state.users);

  const [name, setName] = useState("");
  const [editId, setEditId] = useState(null);

  useEffect(() => {
    dispatch(getUser());
  }, []);

  const handleSubmit = () => {
    if (editId) {
      dispatch(editUser({ id: editId, name }));
      setEditId(null);
    } else {
      dispatch(addUser({ name, status: true }));
    }
    setName("");
  };

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center">
      <div className="bg-white w-full max-w-md p-6 rounded-xl shadow-lg">
        <div className="flex gap-2 mb-4">
          <input
            type="text"
            placeholder="Enter name..."
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="flex-1 px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
          <button
            onClick={handleSubmit}
            className={`px-4 py-2 rounded-lg text-white ${
              editId ? "bg-blue-500" : "bg-green-500"
            } hover:opacity-90`}
          >
            {editId ? "Update" : "Add"}
          </button>
        </div>

        {loading && (
          <p className="text-center text-gray-500">Loading...</p>
        )}
        <div className="space-y-3">
          {data.map((user) => (
            <div
              key={user.id}
              className="flex justify-between items-center p-3 border rounded-lg"
            >
              <div>
                <h4 className="font-semibold">{user.name}</h4>
                <span
                  className={`text-sm ${
                    user.status ? "text-green-600" : "text-red-500"
                  }`}
                >
                  {user.status ? "Active" : "Inactive"}
                </span>
              </div>

              <div className="flex gap-1">
                <button
                  onClick={() => dispatch(toggleStatus(user.id))}
                  className="px-2 py-1 text-xs bg-yellow-400 rounded hover:bg-yellow-500"
                >
                  Status
                </button>
                <button
                  onClick={() => {
                    setEditId(user.id);
                    setName(user.name);
                  }}
                  className="px-2 py-1 text-xs bg-blue-500 text-white rounded hover:bg-blue-600"
                >
                  Edit
                </button>
                <button
                  onClick={() => dispatch(deleteUser(user.id))}
                  className="px-2 py-1 text-xs bg-red-500 text-white rounded hover:bg-red-600"
                >
                  Delete
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ReduxAsync;
