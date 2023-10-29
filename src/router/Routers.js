import React from 'react'
import { Routes, Route, Navigate } from 'react-router-dom'
import ThankYou from '../pages/ThankYou'
import Home from './../pages/Home'
import Login from './../pages/Login'
import Register from './../pages/Register'
import SearchResultList from './../pages/SearchResultList'
import TourDetails from './../pages/TourDetails'
import Tours from './../pages/Tours'
import About from './../pages/About'

// import BookingList from './../components/Booking/BookingList'
import AddBooking from './../components/Booking/AddBooking'
// import EditBooking from './../components/Booking/EditBooking'
// import ViewBooking from './../components/Booking/ViewBooking'


const Routers = () => {
   return (
      <Routes>
         <Route path='/' element={<Navigate to='/home'/>} />
         <Route path='/home' element={<Home/>} />
         <Route path='/tours' element={<Tours/>} />
         <Route path='/tours/:id' element={<TourDetails/>} />
         <Route path='/login' element={<Login/>} />
         <Route path='/register' element={<Register/>} />
         <Route path='/thank-you' element={<ThankYou/>} />
         <Route path='/about' element={<About/>} />
         <Route path='/tours/search' element={<SearchResultList/>} />
         {/* <Route exact path="/booking" component={BookingList} /> */}
          {/* <Route path="/add" element={<AddBooking/>} /> */}
         {/* //  <Route path="/edit/:id" component={EditBooking} />
         //  <Route path="/view/:id" component={ViewBooking} /> */ }
      </Routes>
   );
}

export default Routers