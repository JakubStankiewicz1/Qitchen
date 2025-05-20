import React, { useEffect, useState, useRef } from "react";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./reservations.css";
import { BiSearch, BiSortAlt2 } from "react-icons/bi";

const Reservations = () => {
  const [reservations, setReservations] = useState([]);
  const [filteredReservations, setFilteredReservations] = useState([]);
  const [editingReservation, setEditingReservation] = useState(null);
  const [modalOpen, setModalOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [sortConfig, setSortConfig] = useState({ key: 'reservationTime', direction: 'desc' });
  const [showConfirmDialog, setShowConfirmDialog] = useState(false);
  const [addMode, setAddMode] = useState(false);
  const modalRef = useRef(null);

  useEffect(() => {
    fetchReservations();
  }, []);

  useEffect(() => {
    // Apply filtering when reservations or search query changes
    if (searchQuery.trim() === "") {
      setFilteredReservations(reservations);
    } else {
      const query = searchQuery.toLowerCase();
      const filtered = reservations.filter(
        (reservation) =>
          reservation.id.toString().includes(query) ||
          reservation.name.toLowerCase().includes(query) ||
          reservation.email.toLowerCase().includes(query) ||
          reservation.phoneNumber.includes(query) ||
          reservation.tableType.toLowerCase().includes(query) ||
          new Date(reservation.reservationTime).toLocaleString().toLowerCase().includes(query)
      );
      setFilteredReservations(filtered);
    }
  }, [reservations, searchQuery]);

  useEffect(() => {
    // Apply sorting when sortConfig or filteredReservations change
    let sortedReservations = [...filteredReservations];
    if (sortConfig.key) {
      sortedReservations.sort((a, b) => {
        let aValue = a[sortConfig.key];
        let bValue = b[sortConfig.key];
        
        // Special handling for date values
        if (sortConfig.key === 'reservationTime') {
          aValue = new Date(aValue);
          bValue = new Date(bValue);
        }

        if (aValue < bValue) {
          return sortConfig.direction === 'asc' ? -1 : 1;
        }
        if (aValue > bValue) {
          return sortConfig.direction === 'asc' ? 1 : -1;
        }
        return 0;
      });
    }
    setFilteredReservations(sortedReservations);
  }, [sortConfig]);

  const fetchReservations = async () => {
    try {
      const token = localStorage.getItem("token");
      const response = await axios.get("http://localhost:8081/api/reservations", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      const confirmedReservations = response.data.filter((reservation) => reservation.confirmed);
      setReservations(confirmedReservations);
      setFilteredReservations(confirmedReservations); // Initialize filtered list
    } catch (error) {
      console.error("Error fetching reservations:", error);
      toast.error("Failed to fetch reservations. Please check your authentication.");
    }
  };

  const deleteReservation = async (id) => {
    try {
      const token = localStorage.getItem("token");
      await axios.delete(`http://localhost:8081/api/reservations/${id}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      toast.success("Reservation deleted successfully!");
      fetchReservations();
    } catch (error) {
      console.error("Error deleting reservation:", error);
      toast.error("Failed to delete reservation.");
    }
  };

  const openEditModal = (reservation) => {
    setEditingReservation(reservation);
    setModalOpen(true);
  };

  const closeEditModal = () => {
    setEditingReservation(null);
    setModalOpen(false);
  };

  const handleEditChange = (e) => {
    const { name, value } = e.target;
    setEditingReservation({ ...editingReservation, [name]: value });
  };

  const openAddModal = () => {
    setEditingReservation({
      name: "",
      email: "",
      phoneNumber: "",
      numberOfGuests: "",
      reservationTime: "",
      tableType: ""
    });
    setAddMode(true);
    setModalOpen(true);
  };

  const handleModalConfirm = () => {
    setShowConfirmDialog(true);
  };

  const handleFinalConfirm = async () => {
    setShowConfirmDialog(false);
    await confirmEdit();
  };

  const handleCancelConfirm = () => {
    setShowConfirmDialog(false);
  };

  const confirmEdit = async () => {
    // Validation
    if (!editingReservation.name || !editingReservation.email || !editingReservation.phoneNumber || !editingReservation.numberOfGuests || !editingReservation.reservationTime) {
      toast.error("Please fill in all fields.");
      return;
    }
    // Calculate table type if adding
    let reservationToSend = { ...editingReservation };
    if (addMode) {
      reservationToSend.tableType = calculateOptimalTableType(Number(editingReservation.numberOfGuests));
    }
    try {
      const token = localStorage.getItem("token");
      if (editingReservation.id) {
        await axios.put(
          `http://localhost:8081/api/reservations/${editingReservation.id}`,
          reservationToSend,
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );
        toast.success("Reservation updated successfully!");
      } else {
        await axios.post(
          "http://localhost:8081/api/reservations",
          { ...reservationToSend, confirmed: true },
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );
        toast.success("Reservation created successfully!");
      }
      fetchReservations();
      closeEditModal();
      setAddMode(false);
    } catch (error) {
      console.error("Error saving reservation:", error);
      toast.error("Failed to save reservation.");
    }
  };

  // New function to handle sorting
  const requestSort = (key) => {
    let direction = 'asc';
    if (sortConfig.key === key && sortConfig.direction === 'asc') {
      direction = 'desc';
    }
    setSortConfig({ key, direction });
  };

  // Render sort indicator arrows
  const getSortIndicator = (key) => {
    if (sortConfig.key !== key) return <BiSortAlt2 />;
    return sortConfig.direction === 'asc' ? '↑' : '↓';
  };

  // Calculate optimal table type based on the number of guests
  const calculateOptimalTableType = (numberOfGuests) => {
    const tableSizes = [2, 4, 6, 10];
    for (const size of tableSizes) {
      if (numberOfGuests <= size) {
        return `${size}-person`;
      }
    }
    let combination = "";
    let remainingGuests = numberOfGuests;
    for (let i = tableSizes.length - 1; i >= 0 && remainingGuests > 0; i--) {
      const currentSize = tableSizes[i];
      while (remainingGuests >= currentSize) {
        if (combination.length > 0) {
          combination += " + ";
        }
        combination += `${currentSize}-person`;
        remainingGuests -= currentSize;
      }
    }
    if (remainingGuests > 0) {
      for (const size of tableSizes) {
        if (remainingGuests <= size) {
          if (combination.length > 0) {
            combination += " + ";
          }
          combination += `${size}-person`;
          break;
        }
      }
    }
    return `custom:${combination}`;
  };

  return (
    <div className="reservationsDivOne">
      <div className="reservationsDivTwo">
        <div className="reservations">
          <ToastContainer />
          <div className="reservationsContainer">
            <div className="reservationsContainerHeader">
              <div className="reservationsContainerTitle">
                <p className="reservationsContainerText">Reservations</p>
                <button 
                  className="addReservationButton"
                  onClick={openAddModal}
                >
                  Add Reservation
                </button>
              </div>
              <div className="reservationsSearchContainer">
                <div className="searchInputWrapper">
                  <BiSearch className="searchIcon" />
                  <input
                    type="text"
                    placeholder="Search reservations..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="reservationsSearchInput"
                  />
                </div>
              </div>
            </div>

            <div className="reservationsContainerBottom">
              <table className="reservationsContainerBottomTable">
                <thead className="reservationsContainerBottomTableThread">
                  <tr className="reservationsContainerBottomTableThreadTr">
                    <th 
                      className="reservationsContainerBottomTableThreadId sortable"
                      onClick={() => requestSort('id')}
                    >
                      ID {getSortIndicator('id')}
                    </th>
                    <th 
                      className="reservationsContainerBottomTableThreadName sortable" 
                      onClick={() => requestSort('name')}
                    >
                      Name {getSortIndicator('name')}
                    </th>
                    <th 
                      className="reservationsContainerBottomTableThreadEmail sortable"
                      onClick={() => requestSort('email')}
                    >
                      Email {getSortIndicator('email')}
                    </th>
                    <th 
                      className="reservationsContainerBottomTableThreadPhone sortable"
                      onClick={() => requestSort('phoneNumber')}
                    >
                      Phone {getSortIndicator('phoneNumber')}
                    </th>
                    <th 
                      className="reservationsContainerBottomTableThreadGuests sortable"
                      onClick={() => requestSort('numberOfGuests')}
                    >
                      Guests {getSortIndicator('numberOfGuests')}
                    </th>
                    <th 
                      className="reservationsContainerBottomTableThreadTime sortable"
                      onClick={() => requestSort('reservationTime')}
                    >
                      Time {getSortIndicator('reservationTime')}
                    </th>
                    <th 
                      className="reservationsContainerBottomTableThreadTableType sortable"
                      onClick={() => requestSort('tableType')}
                    >
                      Table Type {getSortIndicator('tableType')}
                    </th>
                    <th className="reservationsContainerBottomTableThreadActions">Actions</th>
                  </tr>
                </thead>
                <tbody className="reservationsContainerBottomTableBody">
                  {filteredReservations.map((reservation) => (
                    <tr key={reservation.id} className="reservationsContainerBottomTableBodyTr">
                      <td className="reservationsContainerBottomTableBodyTrId inter">{reservation.id}</td>
                      <td className="reservationsContainerBottomTableBodyTrName inter">{reservation.name}</td>
                      <td className="reservationsContainerBottomTableBodyTrEmail inter">{reservation.email}</td>
                      <td className="reservationsContainerBottomTableBodyTrPhoneNumber inter">{reservation.phoneNumber}</td>
                      <td className="reservationsContainerBottomTableBodyTrNumberOfGuests inter">{reservation.numberOfGuests}</td>
                      <td className="reservationsContainerBottomTableBodyTrDate inter">{new Date(reservation.reservationTime).toLocaleString()}</td>
                      <td className="reservationsContainerBottomTableBodyTrTableType inter">{reservation.tableType}</td>

                      <td>
                        <div className="reservationsContainerBottomTableBodyTrBtnContainer">
                          <button className="reservationsContainerBottomTableBodyTrEdit" onClick={() => openEditModal(reservation)}>
                            <p className="reservationsContainerBottomTableBodyTrEditText inter">Edit</p>
                          </button>
                          <button className="reservationsContainerBottomTableBodyTrDelete" onClick={() => deleteReservation(reservation.id)}>
                            <p className="reservationsContainerBottomTableBodyTrDeleteText inter">Delete</p>
                          </button>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          {modalOpen && (
            <div className="modalOverlay" onClick={closeEditModal}>
              <div className="modalContent" onClick={(e) => e.stopPropagation()}>
                <h2>Edit Reservation</h2>
                <label>
                  Name:
                  <input type="text" name="name" value={editingReservation.name} onChange={handleEditChange} />
                </label>
                <label>
                  Email:
                  <input type="email" name="email" value={editingReservation.email} onChange={handleEditChange} />
                </label>
                <label>
                  Phone:
                  <input type="text" name="phoneNumber" value={editingReservation.phoneNumber} onChange={handleEditChange} />
                </label>
                <label>
                  Guests:
                  <input type="number" name="numberOfGuests" value={editingReservation.numberOfGuests} onChange={handleEditChange} />
                </label>
                <label>
                  Time:
                  <input type="datetime-local" name="reservationTime" value={editingReservation.reservationTime} onChange={handleEditChange} />
                </label>
                <label>
                  Table Type:
                  <input type="text" name="tableType" value={editingReservation.tableType} onChange={handleEditChange} />
                </label>
                <div className="modalActions">
                  <button onClick={handleModalConfirm} style={{backgroundColor:'#4caf50',color:'white'}}>Confirm</button>
                  <button onClick={closeEditModal} style={{backgroundColor:'#f44336',color:'white'}}>Cancel</button>
                </div>
              </div>
            </div>
          )}

          {showConfirmDialog && (
            <div className="modalOverlay" onClick={handleCancelConfirm}>
              <div className="modalContent" onClick={e => e.stopPropagation()} style={{textAlign:'center'}}>
                <h3>Are you sure you want to add this reservation?</h3>
                <div style={{display:'flex',justifyContent:'center',gap:'20px',marginTop:'20px'}}>
                  <button onClick={handleFinalConfirm} style={{backgroundColor:'#4caf50',color:'white',padding:'8px 20px',borderRadius:'4px'}}>Yes</button>
                  <button onClick={handleCancelConfirm} style={{backgroundColor:'#f44336',color:'white',padding:'8px 20px',borderRadius:'4px'}}>No</button>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Reservations;
