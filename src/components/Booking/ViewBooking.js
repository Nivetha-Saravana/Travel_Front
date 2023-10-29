// src/components/ViewBooking.js
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useHistory, useParams } from 'react-router-dom'; // For navigation
import { Table, Button } from 'react-bootstrap'; // For styling components


const ViewBooking = () => {
  const { id } = useParams();
  const [bookingData, setBookingData] = useState({});

  useEffect(() => {
    axios.get(`/api/bookings/${id}`)
      .then((response) => {
        setBookingData(response.data.data);
      })
      .catch((error) => {
        console.error(error);
      });
  }, [id]);

  return (
    <div>
      <h1>Booking Details</h1>
      <table className="table">
        <tbody>
          <tr>
            <td>Tour Name:</td>
            <td>{bookingData.tourName}</td>
          </tr>
          <tr>
            <td>Full Name:</td>
            <td>{bookingData.fullName}</td>
          </tr>
          <tr>
            <td>Guest Size:</td>
            <td>{bookingData.guestSize}</td>
          </tr>
          <tr>
            <td>Phone:</td>
            <td>{bookingData.phone}</td>
          </tr>
          {/* Add more booking details here */}
        </tbody>
      </table>
    </div>
  );
};

export default ViewBooking;
