import React, { useEffect, useState, useCallback } from 'react';
import axios from 'axios';
import { getAuth } from 'firebase/auth';

const AdminDashboard = () => {
  const [users, setUsers] = useState([]);
  const auth = getAuth();

  const getToken = async () => {
    const user = auth.currentUser;
    if (!user) return null;
    return await user.getIdToken();
  };

  // Wrap fetchUsers in useCallback to memoize it and avoid eslint warning
  const fetchUsers = useCallback(async () => {
    const token = await getToken();
    if (!token) return;

    const res = await axios.get('/api/admin/users', {
      headers: { Authorization: `Bearer ${token}` },
    });
    setUsers(res.data);
  }, [auth]);  // dependencies: auth (or leave empty if auth never changes)

  const handleBlockToggle = async (id) => {
    const token = await getToken();
    if (!token) return;

    await axios.patch(`/api/admin/user/${id}/block`, {}, {
      headers: { Authorization: `Bearer ${token}` },
    });
    fetchUsers(); // refresh
  };

  const handleDelete = async (id) => {
    const token = await getToken();
    if (!token) return;

    await axios.delete(`/api/admin/user/${id}`, {
      headers: { Authorization: `Bearer ${token}` },
    });
    fetchUsers(); // refresh
  };

  // Now add fetchUsers as dependency in useEffect
  useEffect(() => {
    fetchUsers();
  }, [fetchUsers]);

  return (
    <div className="p-4">
      <h2 className="text-2xl font-bold mb-4">Admin Panel - Users</h2>
      <table className="min-w-full border">
        <thead>
          <tr className="bg-gray-200">
            <th className="p-2 border">Name</th>
            <th className="p-2 border">Email</th>
            <th className="p-2 border">Verified</th>
            <th className="p-2 border">Actions</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user) => (
            <tr key={user._id} className="text-center">
              <td className="p-2 border">{user.fullName}</td>
              <td className="p-2 border">{user.email}</td>
              <td className="p-2 border">{user.isVerified ? 'Yes' : 'No'}</td>
              <td className="p-2 border">
                <button
                  className="bg-yellow-500 text-white px-2 py-1 rounded mr-2"
                  onClick={() => handleBlockToggle(user._id)}
                >
                  {user.isVerified ? 'Block' : 'Unblock'}
                </button>
                <button
                  className="bg-red-600 text-white px-2 py-1 rounded"
                  onClick={() => handleDelete(user._id)}
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default AdminDashboard;
