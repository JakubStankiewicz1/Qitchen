import React, { useEffect, useState } from "react";
import './room.css';
import axios from 'axios';
import { toast } from 'react-toastify';

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
      const res = await axios.get('http://localhost:8081/api/table-types', {
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
        `http://localhost:8081/api/table-types/${id}`,
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
      <h1 className="room-title">Zarządzanie salą</h1>
      <p className="room-desc">Edytuj ilość dostępnych stolików każdego typu w restauracji.</p>
      <div className="room-table-wrapper">
        <table className="room-table">
          <thead>
            <tr>
              <th>Typ stolika</th>
              <th>Ilość miejsc</th>
              <th>Dostępnych stolików</th>
              <th>Akcja</th>
            </tr>
          </thead>
          <tbody>
            {tableTypes.map(t => (
              <tr key={t.id}>
                <td>{t.seats}-osobowy</td>
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
                        Zapisz
                      </button>
                      <button className="room-save-btn" onClick={handleCancelClick} disabled={loading} style={{ marginLeft: '8px', backgroundColor: '#f44336' }}>
                        Anuluj
                      </button>
                    </>
                  ) : (
                    <button className="room-save-btn" onClick={() => handleEditClick(t.id)} disabled={loading}>
                      Edytuj
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