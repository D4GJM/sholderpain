import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "../css/TechnologyandInnovation.css";
import about1 from "../image/image/BSSS.jpg";
import about2 from "../image/image/it_infrastructor.jpg";
import about3 from "../image/image/Fintech.jpg";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import SendMessage from "../SendMessaage/SendMessage";
import { Link } from "react-router-dom";
export default function TechnologyandInnovation() {
  return (
    <>
      <Header />

      <div class="page-head2 header-text">
        <div class="container">
          <div class="row">
            <div class="col-md-12">
              <h1>Technology & Innovation</h1>
              <span>
                <a href="/">Home / </a>Technology & Innovation
              </span>
            </div>
          </div>
        </div>
      </div>
      <div className="body">
        <div class="container1-fluid py-5">
          <div class="container py-5">
            <div class="row gx-0 mb-3 mb-lg-0">
              <div class="col-lg-6 my-lg-5 py-lg-5">
                <div class="about-start bg-primary p-5">
                  <h4 class="mb-4">Bespoke Application Development</h4>
                  <p>
                    We have a complete framework of IT services which can
                    deliver Apps and solutions designed to drive efficiency and
                    add value to your business. We manage projects through the
                    mobile, web, embedded and cloud technologies, immaterial of
                    their size; along with mobile solutions that enhance the
                    user experience. Whether you have any existing mobile
                    solutions or are looking to develop a completely new one, we
                    can help you with our expert review. Our developers focus on
                    all dimensions of the solution with user interface,
                    cross-platform coverage, scalability & interoperability,
                    security & compliance and accelerated delivery.{" "}
                  </p>
                  <br />
                  <p>
                    With our expertise in multiple domains, our team of analysts
                    will guide you in analysing your application concept and
                    assess it from the aspects of:
                  </p>

                  <ul>
                    <li>Feasibility</li>
                    <li>Technological complication</li>
                    <li>Platform and device compatibility</li>
                    <li>Market potential and competitiveness</li>
                    <li>Budget</li>
                    <li>Code reuse</li>
                    <li>Backend functionality reuse</li>
                    <li>UI/UX compatibility</li>
                  </ul>
                </div>
              </div>
              <div class="col-lg-6" style={{ minheight: "400px" }}>
                <div class="position-relative h-100">
                  <img
                    class="position-absolute w-100 h-100"
                    src={about1}
                    style={{ objectFit: "cover" }}
                  />
                </div>
              </div>
            </div>
            <div class="row gx-0">
              <div class="col-lg-6" style={{ minheight: "400px" }}>
                <div class="position-relative h-100">
                  <img
                    class="position-absolute w-100 h-100"
                    src={about2}
                    style={{ objectFit: "cover" }}
                  />
                </div>
              </div>
              <div class="col-lg-6 my-lg-5 py-lg-5">
                <div class="about-end bg-primary p-5">
                  <h4 class=" mb-4">IT Infrastructure Management</h4>
                  <p>
                    Our IT services and managed network services are designed to
                    help organisations increase collaboration, achieve potential
                    savings and increase competence, while transmuting the
                    network to drive impact for the future.
                    <b>
                      {" "}
                      We help you to systematise and streamline your IT
                      infrastructure to enhance and support critical business
                      requirements and new capabilities while increasing
                      security and reducing risk.
                    </b>{" "}
                  </p>
                  <h5>Benefits:</h5>
                  <ul>
                    <li>
                      Increase reliability with a network that is continually
                      available
                    </li>
                    <li>
                      Take advantage of the latest cutting-edge technologies
                    </li>
                    <li>Build agility and flexibility,</li>
                    <li>
                      Equip you to be dynamic and operate in real time, meeting
                      the requirements of new applications
                    </li>
                    <li>
                      Develop virtualization and use commoditised hardware
                    </li>
                    <li>Reduce complexity and costs</li>
                  </ul>
                </div>
              </div>
            </div>
            <div class="row gx-0 mb-3 mb-lg-0">
              <div class="col-lg-6 my-lg-5 py-lg-5">
                <div class="about-start bg-primary p-5">
                  <h4 class=" mb-4">Fintech Services And Solutions</h4>
                  <p>
                    As one of the leading software development companies, IYKONS
                    has earned the trust of fintech startups as well as other
                    enterprises for their back-end Fintech needs by providing
                    sturdy and secure digital fintech products powered by
                    cutting-edge technology. We provide fintech app development
                    services and dedicated teams to a wide range of enterprises,
                    including fintech start-ups, traditional financial, banking
                    operations and non-financial firms. Our deep expertise and
                    breadth of experience assure on-time delivery of
                    next-generation fintech products.{" "}
                  </p>

                  <Link
                    to="/Fantach"
                    class="btn btn-secondary rounded py-md-3 px-md-5 mt-4"
                  >
                    Read More..
                  </Link>
                </div>
              </div>
              <div class="col-lg-6" style={{ minheight: "400px" }}>
                <div class="position-relative h-100">
                  <img
                    class="position-absolute w-100 h-100"
                    src={about3}
                    style={{ objectFit: "cover" }}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <SendMessage />
      <Footer />
    </>
  );
}
