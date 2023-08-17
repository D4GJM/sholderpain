import React from "react";
import "../css/IConnect.css";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import image3 from "../image/imj.jpg";

import SendMessage from "../SendMessaage/SendMessage";
export default function Fantach() {
  return (
    <>
      <Header />
      <div className="section">
        <h1>Fintech Services And Solutions</h1>
        <link
          href="https://fonts.googleapis.com/css2?family=Work+Sans:wght@400;600;700&display=swap"
          rel="stylesheet"
        />
        <link rel="stylesheet" href="fonts/icomoon/style.css" />
        <link rel="stylesheet" href="fonts/flaticon/font/flaticon.css" />
        <link
          rel="stylesheet"
          href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.8.1/font/bootstrap-icons.css"
        />
        <link rel="stylesheet" href="css/tiny-slider.css" />
        <link rel="stylesheet" href="css/aos.css" />
        <link rel="stylesheet" href="css/glightbox.min.css" />

        <link rel="stylesheet" href="css/flatpickr.min.css" />

        <br></br>
        <hr></hr>
        <br></br>

        <div className="container">
          <p>
            As one of the leading software development companies, IYKONS has
            earned the trust of fintech startups as well as other enterprises
            for their back-end Fintech needs by providing sturdy and secure
            digital fintech products powered by cutting-edge technology. We
            provide fintech app development services and dedicated teams to a
            wide range of enterprises, including fintech start-ups, traditional
            financial, banking operations and non-financial firms. Our deep
            expertise and breadth of experience assure on-time delivery of
            next-generation fintech products.
          </p>
          <br></br>
          <hr></hr>
          <br></br>

          <div className="row">
            <div className="col-lg-7 order-lg-2 mb-4 mb-lg-0">
              <img src={image3} alt="Image" className="img-fluid" />
            </div>
            <div className="col-lg-5 pe-lg-5">
              <div className="mb-5">
                <h2 className="text-black h4">
                  Straight-forward way of financing
                </h2>
              </div>
              <div className="d-flex mb-3 service-alt">
                <div>
                  <span className="bi-wallet-fill me-4"></span>
                </div>
                <div>
                  <h3>list of the fintech end-to-end solutions</h3>
                  <p>
                    <ul>
                      <li>Fintech Customization</li>
                      <li>Development of Fintech Mobile Apps</li>
                      <li>Web Design and Fintech UI/UX</li>
                      <li>Services for Digital Banking</li>
                      <li>Fintech Payment Methods</li>
                      <li>Fintech Data Analytics</li>
                      <li>Regulatory Compliance</li>
                      <li>Platform Development</li>
                      <li>Wallet Services</li>
                      <li>Business-specific wallets</li>
                      <li>Bill Payments Services</li>
                      <li>End-to-end Solution for Cross Border Remittances</li>
                    </ul>
                  </p>
                </div>
              </div>
            </div>
          </div>
          <br></br>
          <hr></hr>
          <br></br>
          <br></br>
          <div className="d-flex mb-3 service-alt">
            <div>
              <span className="bi-pie-chart-fill me-4"></span>
            </div>
            <div>
              <h3>Visibility and Management</h3>
              <p>– Track wherever every job stands</p>
            </div>
          </div>
        </div>
      </div>
      <SendMessage />
      <Footer />
    </>
  );
}
