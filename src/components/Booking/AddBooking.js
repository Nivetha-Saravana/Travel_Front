// // src/components/AddBooking.js
// import React, { useState } from 'react';
// import axios from 'axios';
// import { useNavigate } from 'react-router-dom'; // Use useNavigate for navigation
// import { Table, Button } from 'react-bootstrap';

// const AddBooking = () => {
//   const [bookingData, setBookingData] = useState({
//     tourName: '',
//     fullName: '',
//     guestSize: '',
//     phone: '',
//   });

//   const navigate = useNavigate(); // Initialize useNavigate

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setBookingData({ ...bookingData, [name]: value });
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     axios
//       .post('/api/bookings', bookingData)
//       .then((response) => {
//         console.log(response.data);
//         navigate('/bookings'); // Use navigate instead of history.push
//       })
//       .catch((error) => {
//         console.error(error);
//       });
//   };

//   return (
//     <div>
//       <h1>Add Booking</h1>
//       <form onSubmit={handleSubmit}>
//         <div className="form-group">
//           <label>Tour Name</label>
//           <input
//             type="text"
//             name="tourName"
//             value={bookingData.tourName}
//             onChange={handleChange}
//             className="form-control"
//             required
//           />
//         </div>
//         <div className="form-group">
//           <label>Full Name</label>
//           <input
//             type="text"
//             name="fullName"
//             value={bookingData.fullName}
//             onChange={handleChange}
//             className="form-control"
//             required
//           />
//         </div>
//         <div className="form-group">
//           <label>Guest Size</label>
//           <input
//             type="number"
//             name="guestSize"
//             value={bookingData.guestSize}
//             onChange={handleChange}
//             className="form-control"
//             required
//           />
//         </div>
//         <div className="form-group">
//           <label>Phone</label>
//           <input
//             type="number"
//             name="phone"
//             value={bookingData.phone}
//             onChange={handleChange}
//             className="form-control"
//             required
//           />
//         </div>
//         <button type="submit" className="btn btn-primary">
//           Submit
//         </button>
//       </form>
//     </div>
//   );
// };

// export default AddBooking;
// import React, { useState, useEffect } from 'react';

// function AddBooking() {
//   const [bookings, setBookings] = useState([]);

//   useEffect(() => {
//     // Fetch data from your backend API
//     fetch('/api/bookings') // Assuming this is the endpoint to retrieve bookings
//       .then((response) => response.json())
//       .then((data) => {
//         if (data.success) {
//           setBookings(data.data);
//         } else {
//           console.error(data.message);
//         }
//       })
//       .catch((error) => {
//         console.error('Error fetching data:', error);
//       });
//   }, []);

//   return (
//     <div>
//       <h1>Bookings</h1>
//       <ul>
//         {bookings.map((booking) => (
//           <li key={booking._id}>
//             <strong>Tour Name:</strong> {booking.tourName}<br />
//             <strong>Full Name:</strong> {booking.fullName}<br />
//             <strong>Guest Size:</strong> {booking.guestSize}<br />
//             <strong>Phone:</strong> {booking.phone}<br />
//             <strong>Booked At:</strong> {new Date(booking.bookAt).toLocaleString()}<br />
//           </li>
//         ))}
//       </ul>
//     </div>
//   );
// }

// export default AddBooking;
// import React, { useState, useEffect } from 'react';
// import { Container, Row, Col, ListGroup } from 'reactstrap';
// import useFetch from '../../hooks/useFetch';
// import { BASE_URL } from '../../utils/config';
// import { useParams } from 'react-router-dom'

// const AddBooking = () => {
//   // Fetch data from the backend for bookings
//   const { id } = useParams()
//   const { data: bookings, loading, error } = useFetch(`${BASE_URL}/booking/${id}`);

//   useEffect(() => {
//     // You can add any additional logic or data processing here if needed
//   }, [bookings]);

//   return (
//     <Container>
//       {loading && <h4 className="text-center pt-5">Loading bookings...</h4>}
//       {error && <h4 className="text-center pt-5">{error}</h4>}
//       {!loading && !error && (
//         <Row>
//           <Col>
//             <div className="booking-details">
//               <h2>Booking Details</h2>
//               <ListGroup className="booking-list">
//                 {bookings.map((booking) => (
//                   <div key={booking._id} className="booking-item">
//                     <p>User ID: {booking.userId}</p>
//                     <p>User Email: {booking.userEmail}</p>
//                     <p>Tour Name: {booking.tourName}</p>
//                     <p>Full Name: {booking.fullName}</p>
//                     <p>Guest Size: {booking.guestSize}</p>
//                     <p>Phone: {booking.phone}</p>
//                     <p>Booked At: {new Date(booking.bookAt).toLocaleDateString()}</p>
//                   </div>
//                 ))}
//               </ListGroup>
//             </div>
//           </Col>
//         </Row>
//       )}
//     </Container>
//   );
// };

// export default AddBooking;





