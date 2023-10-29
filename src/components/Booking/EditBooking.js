// // src/components/EditBooking.js
// import React, { useState, useEffect } from 'react';
// import axios from 'axios';
// import { useHistory, useParams } from 'react-router-dom';
// import { Table, Button } from 'react-bootstrap'; // For styling components


// const EditBooking = () => {
//   const { id } = useParams();
//   const [bookingData, setBookingData] = useState({
//     tourName: '',
//     fullName: '',
//     guestSize: '',
//     phone: '',
//   });

//   const history = useHistory();

//   useEffect(() => {
//     axios.get(`/api/bookings/${id}`)
//       .then((response) => {
//         setBookingData(response.data.data);
//       })
//       .catch((error) => {
//         console.error(error);
//       });
//   }, [id]);

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setBookingData({ ...bookingData, [name]: value });
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     axios.put(`/api/bookings/${id}`, bookingData)
//       .then((response) => {
//         console.log(response.data);
//         history.push('/bookings');
//       })
//       .catch((error) => {
//         console.error(error);
//       });
//   };

//   return (
//     <div>
//       <h1>Edit Booking</h1>
//       <form onSubmit={handleSubmit}>
//         <div className="form-group">
//           <label>Tour Name</label>
//           <input type="text" name="tourName" value={bookingData.tourName} onChange={handleChange} className="form-control" required />
//         </div>
//         <div className="form-group">
//           <label>Full Name</label>
//           <input type="text" name="fullName" value={bookingData.fullName} onChange={handleChange} className="form-control" required />
//         </div>
//         <div className="form-group">
//           <label>Guest Size</label>
//           <input type="number" name="guestSize" value={bookingData.guestSize} onChange={handleChange} className="form-control" required />
//         </div>
//         <div className="form-group">
//           <label>Phone</label>
//           <input type="number" name="phone" value={bookingData.phone} onChange={handleChange} className="form-control" required />
//         </div>
//         <button type="submit" className="btn btn-primary">Update</button>
//       </form>
//     </div>
//   );
// };

// export default EditBooking;
