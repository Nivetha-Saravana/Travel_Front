import React from 'react'
import ServiceCard from './ServiceCard'
import { Col } from 'reactstrap'
import weatherImg from '../assets/images/weather.png'
import guideImg from '../assets/images/guide.png'
import customizationImg from '../assets/images/customization.png'

const servicesData = [
   {
      imgUrl: weatherImg,
      title: `Calculate Weather`,
      desc: ` Stay ahead of the weather . Plan your adventures with confidence, knowing you'll always be prepared for the elements.`,
   },
   {
      imgUrl: guideImg,
      title: `Best Tour Guide`,
      desc: ` Explore with the best - our seasoned guides offer in-depth knowledge and captivating storytelling for unforgettable journeys.`,
   },
   {
      imgUrl: customizationImg,
      title: 'Customization',
      desc: `Your adventure, your way. We craft personalized itineraries to match your unique preferences and create the perfect travel experience for you.`,
   },
]

const ServiceList = () => {
   return <>
      {
         servicesData.map((item, index) => (
            <Col lg='3' md='6' sm='12' className='mb-4' key={index}>
               <ServiceCard item={item} />
            </Col>))
      }
   </>

}

export default ServiceList