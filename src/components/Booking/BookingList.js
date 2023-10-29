// // src/components/BookingList.js
// import React, { useState, useEffect } from 'react';
// import axios from 'axios';
// import { Table, Button } from 'react-bootstrap';
// import { Link } from 'react-router-dom';

// import { useHistory, useParams } from 'react-router-dom'; // For navigation



// const BookingList = () => {
//   const [bookings, setBookings] = useState([]);

//   useEffect(() => {
//     // Fetch bookings from your backend API
//     axios.get('/api/bookings')
//       .then((response) => {
//         setBookings(response.data.data);
//       })
//       .catch((error) => {
//         console.error(error);
//       });
//   }, []);

//   const handleDelete = (id) => {
//     // Send a delete request to your backend to delete the booking
//     axios.delete(`/api/bookings/${id}`)
//       .then(() => {
//         // Remove the deleted booking from the state
//         setBookings(bookings.filter(booking => booking._id !== id));
//       })
//       .catch((error) => {
//         console.error(error);
//       });
//   };

//   return (
//     <div>
//       <h1>Booking List</h1>
//       <Table striped bordered hover>
//         <thead>
//           <tr>
//             <th>Tour Name</th>
//             <th>Full Name</th>
//             <th>Guest Size</th>
//             <th>Phone</th>
//             <th>Booked At</th>
//             <th>Action</th>
//           </tr>
//         </thead>
//         <tbody>
//           {bookings.map((booking) => (
//             <tr key={booking._id}>
//               <td>{booking.tourName}</td>
//               <td>{booking.fullName}</td>
//               <td>{booking.guestSize}</td>
//               <td>{booking.phone}</td>
//               <td>{new Date(booking.bookAt).toLocaleDateString()}</td>
//               <td>
//                 <Link to={`/edit/${booking._id}`} className="btn btn-primary">Edit</Link>
//                 <Button variant="danger" onClick={() => handleDelete(booking._id)}>Delete</Button>
//               </td>
//             </tr>
//           ))}
//         </tbody>
//       </Table>
//     </div>
//   );
// };

// export default BookingList;
