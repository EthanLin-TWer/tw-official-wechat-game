import React from 'react'
import './Footer.css'
import twBarcode from '../images/footer/tw-barcode.png'

const Footer = () => (
   <div className="app-footer">
      <div className="thoughtworks-produces">ThoughtWorks出品</div>
      <img src={twBarcode} alt="tw-barcode" className="img-responsive tw-barcode"/>
   </div>
)

export default Footer