import React, { useEffect, useState } from "react";
import './room.css';
import axios from 'axios';
import { toast } from 'react-toastify';
import { API_ENDPOINTS } from '../../config/api';

const Room = () => {
  const [tableTypes, setTableTypes] = useState([]);
  const [editCounts, setEditCounts] = useState({});
  const [loading, setLoading] = useState(false);
  const [editingTableId, setEditingTableId] = useState(null);

  useEffect(() => {
    fetchTableTypes();
  }, []);

  const fetchTableTypes = async () => {
    setLoading(true);
    try {
      const token = localStorage.getItem('token');
      const res = await axios.get(API_ENDPOINTS.tableTypes, {
        headers: { Authorization: `Bearer ${token}` }
      });
      setTableTypes(res.data);
      // Set initial edit values
      const initial = {};
      res.data.forEach(t => { initial[t.id] = t.count; });
      setEditCounts(initial);
    } catch (err) {
      toast.error('Błąd pobierania typów stolików');
    } finally {
      setLoading(false);
    }
  };

  const handleCountChange = (id, value) => {
    setEditCounts({ ...editCounts, [id]: value });
  };

  const handleSave = async (id) => {
    setLoading(true);
    try {
      const token = localStorage.getItem('token');
      await axios.put(
        `${API_ENDPOINTS.tableTypes}/${id}`,
        { count: Number(editCounts[id]) },
        { headers: { Authorization: `Bearer ${token}` } }
      );
      toast.success('Zapisano zmiany!');
      fetchTableTypes();
      setEditingTableId(null);
    } catch (err) {
      toast.error('Błąd zapisu!');
    } finally {
      setLoading(false);
    }
  };

  const handleEditClick = (id) => {
    setEditingTableId(id);
  };

  const handleCancelClick = () => {
    const originalCount = tableTypes.find(t => t.id === editingTableId)?.count;
    setEditCounts({ ...editCounts, [editingTableId]: originalCount });
    setEditingTableId(null);
  };

  return (
    <div className="room-root">
      <h1 className="room-title">Tables management</h1>
      <p className="room-desc">Edit the number of available tables of each type in the restaurant.</p>
      <div className="room-table-wrapper">
        <table className="room-table">
          <thead>
            <tr>
              <th>Table type</th>
              <th>Number of seats</th>
              <th>Available tables</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {tableTypes.map(t => (
              <tr key={t.id}>
                <td>{t.seats}-seater</td>
                <td>{t.seats}</td>
                <td>
                  {editingTableId === t.id ? (
                    <input
                      type="number"
                      min="0"
                      value={editCounts[t.id]}
                      onChange={e => handleCountChange(t.id, e.target.value)}
                      className="room-input"
                    />
                  ) : (
                    <span>{t.count}</span>
                  )}
                </td>
                <td>
                  {editingTableId === t.id ? (
                    <>
                      <button className="room-save-btn" onClick={() => handleSave(t.id)} disabled={loading}>
                        Save
                      </button>
                      <button className="room-save-btn" onClick={handleCancelClick} disabled={loading} style={{ marginLeft: '8px', backgroundColor: '#f44336' }}>
                        Cancal
                      </button>
                    </>
                  ) : (
                    <button className="room-save-btn" onClick={() => handleEditClick(t.id)} disabled={loading}>
                      Edit
                    </button>
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Room; 