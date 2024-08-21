import React from 'react'
import Footer_utils from './footer_utils'

import { FaXTwitter } from "react-icons/fa6";
import { FaFacebookSquare } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";

const Footer = () => {
  return (
    <div>
        <div className="container-fluid shadow-lg mt-5">
          <div className="container">
            <footer className="py-5">
              <div className="row">
                <div className="col-6 col-md-2 mb-3">
                  <h5>Section</h5>
                  <ul className="nav flex-column">
                    <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-body-secondary">Home</a></li>
                    <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-body-secondary">Features</a></li>
                    <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-body-secondary">Pricing</a></li>
                    <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-body-secondary">FAQs</a></li>
                    <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-body-secondary">About</a></li>
                  </ul>
                </div>

                <div className="col-6 col-md-2 mb-3">
                  <h5>Section</h5>
                  <ul className="nav flex-column">
                    <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-body-secondary">Home</a></li>
                    <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-body-secondary">Features</a></li>
                    <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-body-secondary">Pricing</a></li>
                    <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-body-secondary">FAQs</a></li>
                    <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-body-secondary">About</a></li>
                  </ul>
                </div>

                <div className="col-6 col-md-2 mb-3">
                  <h5>Section</h5>
                  <ul className="nav flex-column">
                    <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-body-secondary">Home</a></li>
                    <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-body-secondary">Features</a></li>
                    <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-body-secondary">Pricing</a></li>
                    <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-body-secondary">FAQs</a></li>
                    <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-body-secondary">About</a></li>
                  </ul>
                </div>

              </div>

              <div className="d-flex flex-column flex-sm-row justify-content-between py-4 my-4 border-top">
                <p>&copy; 2024 Codeloccol, Edu. All rights reserved.</p>
                <ul className="list-unstyled d-flex">
                  <li className="ms-3"><a className="link-body-emphasis" href="#"><FaXTwitter size={30}/></a></li>
                  <li className="ms-3"><a className="link-body-emphasis" href="#"><FaFacebookSquare size={30}/></a></li>
                  <li className="ms-3"><a className="link-body-emphasis" href="#"><FaInstagram size={30}/></a></li>
                </ul>
              </div>
            </footer>
          </div>
        </div>

        <Footer_utils/>
    </div>
  )
}

export default Footer