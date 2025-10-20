import React from "react";
import "./about.css";
import Marquee from "react-fast-marquee";

function About() {
  return (
    <div>
      {/* <!-- Topbar Start --> */}
      <div className="container-fluid topbar px-0 d-none d-lg-block">
        <div className="container px-0">
          <div
            className="row gx-0 align-items-center"
            style={{ height: "45px" }}
          >
            <div className="col-lg-8 text-center text-lg-start mb-lg-0">
              <div className="d-flex flex-wrap">
                <a className="text-muted me-4">
                  <i className="fas fa-phone-alt text-primary me-2"></i>
                  +250788601280
                </a>
                <a href="mailto:info@fabritech.rw" className="text-muted me-0">
                  <i className="fas fa-envelope text-primary me-2"></i>
                  info@fabritech.rw
                </a>
              </div>
            </div>
            <div className="col-lg-4 text-center text-lg-end">
              <div className="d-flex align-items-center justify-content-end">
                <a
                  href="https://www.facebook.com/profile.php?id=100089523591506&amp;mibextid=ZbWKwL"
                  className="btn btn-primary btn-square rounded-circle nav-fill me-3"
                >
                  <i className="fab fa-facebook-f text-white"></i>
                </a>
                <a
                  href="https://www.instagram.com/fabritech_ltd/"
                  className="btn btn-primary btn-square rounded-circle nav-fill me-3"
                >
                  <i className="fab fa-instagram text-white"></i>
                </a>
                <a
                  href="https://www.linkedin.com/in/fabritech_ltd"
                  className="btn btn-primary btn-square rounded-circle nav-fill me-3"
                >
                  <i className="fab fa-linkedin-in text-white"></i>
                </a>
                <a
                  href="whatsapp://send?text=Hello,I'd like to chat with you about Fabritech&amp;phone=+250788601280"
                  className="btn btn-primary btn-square rounded-circle nav-fill me-3"
                >
                  <i className="fab fa-whatsapp text-white"></i>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* <!-- Topbar End --> */}

      {/* <!-- Navbar & Hero Start --> */}
      <div className="container-fluid sticky-top px-0">
        <div
          className="position-absolute bg-dark"
          style={{ left: 0, top: 0, width: "100%", height: "100%" }}
        ></div>
        <div className="container px-0">
          <nav className="navbar navbar-expand-lg navbar-dark bg-white py-3 px-4">
            <a href="/" className="navbar-brand p-0">
              {/* <!-- <h1 classNameName="text-primary m-0"><i classNameName="fas fa-donate me-3"></i>Investa</h1> --> */}
              <img
                src="img/F_logo.png"
                alt="Logo"
                style={{ height: "40px" }}
              />
            </a>
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarCollapse"
            >
              <span className="fa fa-bars"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarCollapse">
              <div className="navbar-nav ms-auto py-0">
                <a href="/" className="nav-item nav-link ">
                  Home
                </a>
                <a href="/about" className="nav-item nav-link active">
                  About
                </a>
                <a href="/service" className="nav-item nav-link">
                  Services
                </a>
                <a href="/gallery" className="nav-item nav-link">
                  Gallery
                </a>
                <a href="/contact" className="nav-item nav-link">
                  Contact
                </a>
              </div>
            </div>
          </nav>
        </div>
      </div>
      {/* <!-- Navbar & Hero End --> */}

      {/* <!-- Header Start --> */}
      <div className="container-fluid bg-breadcrumb">
        <div className="bg-breadcrumb-single"></div>
        <div
          className="container text-center py-5"
          style={{ maxWidth: "900px" }}
        >
          <h4
            className="text-white display-4 mb-4 wow fadeInDown"
            data-wow-delay="0.1s"
          >
            About Us
          </h4>
          <ol
            className="breadcrumb justify-content-center mb-0 wow fadeInDown"
            data-wow-delay="0.3s"
          >
            <li className="breadcrumb-item">
              <a href="/">Home</a>
            </li>
            <li className="breadcrumb-item active text-primary">About</li>
          </ol>
        </div>
      </div>
      {/* <!-- Header End --> */}

      {/* <!-- About Start --> */}
      <div className="container-fluid about bg-light py-5">
        <div className="container py-5">
          <div className="row g-5 align-items-center">
            <div
              className="col-lg-6 col-xl-5 wow fadeInLeft"
              data-wow-delay="0.1s"
            >
              <div className="about-img">
                <img
                  src="img/abt1.jpg"
                  className="img-fluid w-100 rounded-top bg-white"
                  alt="Image"
                />
                <img
                  src="img/abt2.jpg"
                  className="img-fluid w-100 rounded-bottom"
                  alt="Image"
                />
              </div>
            </div>
            <div
              className="col-lg-6 col-xl-7 wow fadeInRight"
              data-wow-delay="0.3s"
            >
              <h4 className="text-primary">About Us</h4>
              <h1 className="display-5 mb-4">
                Innovative Technology & Security Solutions
              </h1>
              <p className="text ps-4 mb-4">
                Fabritech is a leading provider of advanced digital security and
                IT services. We specialize in network infrastructure, CCTV
                installation, and customized software solutions designed to
                secure and optimize your business. With a commitment to
                delivering the best technology, we ensure your systems are
                reliable and future-ready.
              </p>
              <div className="row g-4 justify-content-between mb-5">
                <div className="col-lg-6 col-xl-5">
                  <p className="text-dark">
                    <i className="fas fa-check-circle text-primary me-1"></i>{" "}
                    Network Infrastructure
                  </p>
                  <p class="text-dark mb-0">
                    <i className="fas fa-check-circle text-primary me-1"></i>{" "}
                    CCTV Installation
                  </p>
                </div>
                <div className="col-lg-6 col-xl-7">
                  <p className="text-dark">
                    <i className="fas fa-check-circle text-primary me-1"></i> IT
                    Consulting
                  </p>
                  <p className="text-dark mb-0">
                    <i className="fas fa-check-circle text-primary me-1"></i>{" "}
                    Software Development
                  </p>
                </div>
              </div>
              <div className="row g-4 justify-content-between mb-5"></div>

              <div className="row g-4 text-center align-items-center justify-content-center">
                <div className="col-sm-4">
                  <div className="bg-primary rounded p-4">
                    <div className="d-flex align-items-center justify-content-center">
                      <span
                        className="counter-value fs-1 fw-bold text-dark"
                        data-toggle="counter-up"
                      >
                        50
                      </span>
                      <h4
                        className="text-dark fs-1 mb-0"
                        style={{ fontWeight: "600", fontSize: "25px" }}
                      >
                        +
                      </h4>
                    </div>
                    <div className="w-100 d-flex align-items-center justify-content-center">
                      <p className="text-white mb-0">Clients</p>
                    </div>
                  </div>
                </div>
                <div className="col-sm-4">
                  <div className="bg-dark rounded p-4">
                    <div className="d-flex align-items-center justify-content-center">
                      <span
                        className="counter-value fs-1 fw-bold text-white"
                        data-toggle="counter-up"
                      >
                        15
                      </span>
                      <h4
                        className="text-white fs-1 mb-0"
                        style={{ fontWeight: "600", fontSize: "25px" }}
                      >
                        +
                      </h4>
                    </div>
                    <div className="w-100 d-flex align-items-center justify-content-center">
                      <p className="mb-0">Years of Experience</p>
                    </div>
                  </div>
                </div>
                <div className="col-sm-4">
                  <div className="bg-primary rounded p-4">
                    <div className="d-flex align-items-center justify-content-center">
                      <span
                        className="counter-value fs-1 fw-bold text-dark"
                        data-toggle="counter-up"
                      >
                        15
                      </span>
                      <h4
                        className="text-dark fs-1 mb-0"
                        style={{ fontWeight: "600", fontSize: "25px" }}
                      >
                        +
                      </h4>
                    </div>
                    <div className="w-100 d-flex align-items-center justify-content-center">
                      <p className="text-white mb-0">Team Members</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* <!-- About End --> */}

      {/* our Clients Start */}
      <section className="bg-light py-8">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold text-center mb-8 py-4">
            Our Clients
          </h2>

          <div className="flex flex-col space-y-8">
            {/* DICEL Security */}
            <div className="row align-items-start mb-4">
              <div className="col-md-3">
                <img
                  src="img/partners/dicel.png"
                  alt="Client 1 Logo"
                  className="img-fluid"
                  style={{ maxWidth: "100px" }}
                />
              </div>
              <div className="col-md-9">
                <h3 className="font-weight-bold">DICEL Security</h3>
                <h6>
                  <b>Address:</b> Kicukiro, Kigali, Rwanda
                </h6>
                <p style={{ textAlign: "justify" }}>
                  DICEL Security was entrusted with the task of developing a
                  professional website along with an Internal E-sign Portal. We
                  successfully delivered a user-friendly website that
                  effectively represents DICEL SECURITY's brand and services.
                  Additionally, we implemented an Internal E-sign Portal,
                  streamlining document signing and submission processes within
                  the organization. The website and E-sign Portal provide a
                  seamless experience for DICEL SECURITY's staff, enhancing
                  efficiency and reducing paper-based processes.
                </p>
              </div>
            </div>

            {/* CLEO */}
            <div className="row align-items-start mb-4">
              <div className="col-md-3">
                <img
                  src="img/partners/cleo.png"
                  alt="Client 1 Logo"
                  className="img-fluid"
                  style={{ maxWidth: "100px" }}
                />
              </div>
              <div className="col-md-9">
                <h3 className="font-weight-bold">CLEO Lake Kivu Hotel</h3>
                <h6>
                  <b>Address: </b>Lake Kivu, Rwanda
                </h6>
                <p style={{ textAlign: "justify" }}>
                  We provided CLEO LAKE KIVU HOTEL with a modern and efficient
                  website that incorporates a user-friendly booking system. This
                  website enables guests to easily browse through available
                  rooms, select their desired dates, and make reservations
                  seamlessly. The booking system streamlines the reservation
                  process, allowing CLEO LAKE KIVU HOTEL to manage bookings
                  efficiently and provide a convenient experience for their
                  valued guests.
                </p>
              </div>
            </div>

            {/* Tele10 */}
            <div className="row align-items-start mb-4">
              <div className="col-md-3">
                <img
                  src="img/partners/tele10.png"
                  alt="Client 1 Logo"
                  className="img-fluid"
                  style={{ maxWidth: "100px" }}
                />
              </div>
              <div className="col-md-9">
                <h3 className="font-weight-bold">TELE10 Group</h3>
                <h6>
                  <b>Address: </b>Gishushu, Remera, Kigali, Rwanda
                </h6>
                <p style={{ textAlign: "justify" }}>
                  We provided TELE10 with a website and a secure payment gateway
                  solution. The website we developed for TELE10 is
                  user-friendly, visually appealing, and easy to navigate. It
                  serves as an effective online platform for TELE10's services,
                  programs, and information. The integrated payment gateway
                  ensures a seamless and secure payment process for TELE10's
                  customers, enhancing their overall user experience.
                </p>
              </div>
            </div>

            {/* KC ATTORNEYS */}
            <div className="row align-items-start mb-4">
              <div className="col-md-3">
                <img
                  src="img/partners/kc.png"
                  alt="Client 1 Logo"
                  className="img-fluid"
                  style={{ maxWidth: "100px" }}
                />
              </div>
              <div className="col-md-9">
                <h3 className="font-weight-bold">KC ATTORNEYS</h3>
                <h6>
                  <b>Address: </b>Gishushu - Kigali, Rwanda
                </h6>
                <p style={{ textAlign: "justify" }}>
                  KC ATTORNEYS engaged our services as IT consultants to provide
                  valuable expertise and guidance in optimizing their IT
                  infrastructure. We worked closely with their team, assessing
                  their existing systems and identifying areas for improvement.
                  Our recommendations focused on enhancing network security,
                  streamlining data management processes, and implementing
                  efficient IT solutions. Throughout the project, we provided
                  clear and concise advice, enabling KC ATTORNEYS to make
                  informed decisions and achieve a more robust and streamlined
                  IT environment.
                </p>
              </div>
            </div>

            {/* NETLINK */}
            <div className="row align-items-start mb-4">
              <div className="col-md-3">
                <img
                  src="img/netlink.png"
                  alt="Client 1 Logo"
                  className="img-fluid"
                  style={{ maxWidth: "100px" }}
                />
              </div>
              <div className="col-md-9">
                <h3 className="font-weight-bold">NETLINK</h3>
                <h6>
                  <b>Address: </b>Kinamba - Kigali, Rwanda
                </h6>
                <p style={{ textAlign: "justify" }}>
                  As an IT consultant for NETLINK, we provided valuable guidance
                  and expertise to optimize their IT infrastructure. Our
                  services included assessing their existing systems,
                  identifying areas for improvement, and offering practical
                  recommendations to enhance their overall IT capabilities. We
                  worked closely with NETLINK's team to understand their
                  specific needs and goals, providing tailored solutions that
                  align with their business objectives. Our consultancy services
                  aimed to streamline operations, improve efficiency, and ensure
                  a secure and reliable IT environment for NETLINK's ongoing
                  success.
                </p>
              </div>
            </div>

            {/* KING FAISAL HOSPITAL RWANDA */}
            <div className="row align-items-start mb-4">
              <div className="col-md-3">
                <img
                  src="img/partners/king.png"
                  alt="Client 1 Logo"
                  className="img-fluid"
                  style={{ maxWidth: "100px" }}
                />
              </div>
              <div className="col-md-9">
                <h3 className="font-weight-bold">
                  KING FAISAL HOSPITAL RWANDA
                </h3>
                <h6>
                  <b>Address: </b>Kacyiru - Kigali, Rwanda
                </h6>
                <p style={{ textAlign: "justify" }}>
                  Our company successfully provided KING FAISAL Hospital Rwanda
                  with a comprehensive digital security system. This system
                  ensures the safety and protection of the hospital's premises,
                  staff, and patients. Through the implementation of advanced
                  surveillance cameras, access control measures, and intrusion
                  detection systems, we have created a secure environment that
                  enhances the overall security posture of the hospital. Our
                  solution aims to safeguard sensitive areas, prevent
                  unauthorized access, and detect any potential threats in a
                  simple and user-friendly manner. KING FAISAL Hospital can now
                  operate with confidence, knowing that its digital security
                  system is in place to protect its valuable assets and maintain
                  a safe environment for everyone.
                </p>
              </div>
            </div>

            {/* MTN Rwanda */}
            <div className="row align-items-start mb-4">
              <div className="col-md-3">
                <img
                  src="img/partners/mtn.jpg"
                  alt="Client 1 Logo"
                  className="img-fluid"
                  style={{ maxWidth: "100px" }}
                />
              </div>
              <div className="col-md-9">
                <h3 className="font-weight-bold">MTN Rwanda</h3>
                <h6>
                  <b>Address: </b>Nyarutarama - Kigali, Rwanda
                </h6>
                <p style={{ textAlign: "justify" }}>
                  Our company successfully provided comprehensive digital
                  security solutions for MTN Rwanda's Mobile Money Office.
                  Through robust and reliable measures, we safeguarded the
                  integrity, confidentiality, and availability of critical data
                  and transactions within the office. Our expertise ensures the
                  protection of MTN Rwanda's mobile money platform, creating a
                  secure environment for customers to carry out their financial
                  transactions with peace of mind.
                </p>
              </div>
            </div>

            {/* NSS */}
            <div className="row align-items-start mb-4">
              <div className="col-md-3">
                <img
                  src="img/partners/nss.png"
                  alt="Client 1 Logo"
                  className="img-fluid"
                  style={{ maxWidth: "150px" }}
                />
              </div>
              <div className="col-md-9">
                <h3 className="font-weight-bold">NSS</h3>
                <h6>
                  <b>Address: </b>Kimironko - Kigali, Rwanda
                </h6>
                <p style={{ textAlign: "justify" }}>
                  Our company had the honor of developing the NSS website and
                  implementing a seamless payment solution for the institution.
                  The website we created for NSS is a professional platform that
                  showcases their services, events, and achievements. It
                  provides a user-friendly experience, allowing visitors to
                  easily navigate and access the information they need. The
                  integrated payment solution ensures a smooth and secure
                  transaction process, enabling NSS to efficiently handle
                  various payments, such as membership fees, event
                  registrations, and donations.
                </p>
              </div>
            </div>

            {/* RwandAir */}
            <div className="row align-items-start mb-4">
              <div className="col-md-3">
                <img
                  src="img/partners/RwandAir-logo.wine.png"
                  alt="Client 1 Logo" 
                  className="img-fluid"
                  style={{ maxWidth: "150px" }}
                />
              </div>
              <div className="col-md-9">
                <h3 className="font-weight-bold">RwandAir</h3>
                <h6>
                  <b>Address: </b>HQ - Kigali, Rwanda; Kamembe Office; Town
                  Office
                </h6>
                <p style={{ textAlign: "justify" }}>
                  Our company had the honor of providing RwandAir with Starlink
                  internet services across multiple locations, including their
                  HQ, Kamembe Office, and Town Office. The internet solution we
                  implemented ensures reliable and high-speed connectivity,
                  enabling seamless communication and operations for the
                  airline. This service enhances RwandAir's ability to stay
                  connected with its teams, customers, and partners, ensuring
                  smooth business operations and improving overall efficiency.
                </p>
              </div>
            </div>

            {/* OFFICE OF THE GOVERNMENT SPOKESPERSON */}
            <div className="row align-items-start mb-4">
              <div className="col-md-3">
                <img
                  src="img/partners/ogs.png"
                  alt="Office of the Government Spokesperson Logo"
                  className="img-fluid"
                  style={{ maxWidth: "150px" }}
                />
              </div>
              <div className="col-md-9">
                <h3 className="font-weight-bold">OFFICE OF THE GOVERNMENT SPOKESPERSON</h3>
                <h6>
                  <b>Address: </b> Kigali, Rwanda
                </h6>
                <p style={{ textAlign: "justify" }}>
                  Our company successfully provided the Office of the Government Spokesperson 
                  with high-speed Starlink internet services. This reliable connectivity 
                  solution ensures seamless communication and efficient operations for their 
                  critical government communications work. The high-speed internet access 
                  supports their daily media briefings, press releases, and real-time 
                  communication needs. With Starlink's consistent connectivity, the office 
                  can maintain effective government communication channels and respond 
                  promptly to media inquiries.
                </p>
              </div>
            </div>

            {/* JICA */}
            <div className="row align-items-start mb-4">
              <div className="col-md-3">
                <img
                  src="img/partners/jica.svg"
                  alt="Client 1 Logo"
                  className="img-fluid"
                  style={{ maxWidth: "150px" }}
                />
              </div>
              <div className="col-md-9">
                <h3 className="font-weight-bold">
                  JICA (Japan International Cooperation Agency)
                </h3>
                <h6>
                  <b>Address: </b> Kigali, Rwanda
                </h6>
                <p style={{ textAlign: "justify" }}>
                  We were privileged to provide high-speed Starlink internet
                  services to JICA at their various offices in Rwanda. This
                  cutting-edge connectivity solution empowers JICA's teams to
                  successfully execute their mission of supporting development
                  projects and fostering partnerships within the country. With
                  dependable internet access, JICA can improve communication,
                  optimize project management, and ensure smooth operations,
                  enabling them to further promote sustainable development and
                  collaboration in Rwanda.
                </p>
              </div>
            </div>

            {/* RBA */}
            <div className="row align-items-start mb-4">
              <div className="col-md-3">
                <img
                  src="img/partners/rba.png"
                  alt="Client 1 Logo"
                  className="img-fluid"
                  style={{ maxWidth: "150px" }}
                />
              </div>
              <div className="col-md-9">
                <h3 className="font-weight-bold">
                  RBA (Rwanda Broadcasting Agency)
                </h3>
                <h6>
                  <b>Address: </b> Kigali, Rwanda
                </h6>
                <p style={{ textAlign: "justify" }}>
                  Our company had the privilege of providing high-speed Starlink
                  internet services to RBA, ensuring robust and reliable
                  connectivity across their operations. With this internet
                  solution, RBA can efficiently manage broadcasting services,
                  streamline communications, and enhance content delivery to
                  their audience. The Starlink service supports RBA's mission to
                  provide timely and accurate information, keeping Rwandans
                  informed through seamless and uninterrupted media coverage.
                </p>
              </div>
            </div>

            {/* Inkomoko */}
            <div className="row align-items-start mb-4">
              <div className="col-md-3">
                <img
                  src="img/partners/inkomoko.png"
                  alt="Client 1 Logo"
                  className="img-fluid"
                  style={{ maxWidth: "150px" }}
                />
              </div>
              <div className="col-md-9">
                <h3 className="font-weight-bold">Inkomoko</h3>
                <h6>
                  <b>Address: </b> Musanze, Karongi, Huye, Kirehe, Gatsibo
                </h6>
                <p style={{ textAlign: "justify" }}>
                  Our company had the privilege of providing Inkomoko with
                  high-speed Starlink internet services across their various
                  locations, including Musanze, Karongi, Huye, Kirehe, and
                  Gatsibo. This solution ensures fast and reliable internet
                  connectivity, enabling Inkomoko to maintain smooth operations
                  across all their offices. With this service, Inkomoko can
                  efficiently manage communication, support their teams, and
                  continue their mission of empowering entrepreneurs in Rwanda,
                  even in remote areas.
                </p>
              </div>
            </div>

            {/* SFH */}
            <div className="row align-items-start mb-4">
              <div className="col-md-3">
                <img
                  src="img/partners/sfh.jpg"
                  alt="Client 1 Logo"
                  className="img-fluid"
                  style={{ maxWidth: "150px" }}
                />
              </div>
              <div className="col-md-9">
                <h3 className="font-weight-bold">
                  SFH (Society for Family Health)
                </h3>
                <h6>
                  <b>Address: </b> Kigali, Rwanda
                </h6>
                <p style={{ textAlign: "justify" }}>
                  Our company had the honor of providing high-speed Starlink
                  internet services to SFH across five different sites in
                  Rwanda. This reliable internet solution ensures seamless
                  communication and efficient operations at each location,
                  enabling SFH to effectively manage health programs and
                  outreach initiatives. With enhanced connectivity, SFH can
                  better serve communities, facilitate data sharing, and support
                  its mission of improving public health and well-being across
                  the country.
                </p>
              </div>
            </div>

            {/* DISCOVERY INTERNATIONAL SCHOOL */}
            <div className="row align-items-start mb-4">
              <div className="col-md-3">
                <img
                  src="img/partners/discover.png"
                  alt="Client 1 Logo"
                  className="img-fluid"
                  style={{ maxWidth: "150px" }}
                />
              </div>
              <div className="col-md-9">
                <h3 className="font-weight-bold">
                  DISCOVERY INTERNATIONAL SCHOOL
                </h3>
                <h6>
                  <b>Address: </b> Kigali, Rwanda
                </h6>
                <p style={{ textAlign: "justify" }}>
                  Our company had the privilege of delivering Starlink internet
                  services to Discovery International School, ensuring fast and
                  reliable connectivity for the school's operations. This
                  advanced internet solution supports the school's educational
                  activities, enabling teachers and students to access online
                  resources, facilitate virtual learning, and enhance
                  communication. With improved internet access, Discovery
                  International School can continue to provide a high-quality
                  learning experience, fostering academic excellence and
                  innovation in education.
                </p>
              </div>
            </div>

            {/* BSC LTD */}
            <div className="row align-items-start mb-4">
              <div className="col-md-3">
                <img
                  src="img/partners/BSC.png"
                  alt="Client 1 Logo"
                  className="img-fluid"
                  style={{ maxWidth: "150px" }}
                />
              </div>
              <div className="col-md-9">
                <h3 className="font-weight-bold">BSC LTD</h3>
                <h6>
                  <b>Address: </b> Kigali, Rwanda
                </h6>
                <p style={{ textAlign: "justify" }}>
                  Our company had the privilege of implementing Starlink
                  internet services for BSC Ltd at their headquarters in Kigali.
                  This high-speed internet solution ensures that BSC Ltd
                  benefits from reliable and fast connectivity, enhancing their
                  operational efficiency. With improved internet access, BSC Ltd
                  can optimize communication, streamline business processes, and
                  continue delivering top-tier services across their various
                  projects and initiatives.
                </p>
              </div>
            </div>

            {/* Qatar Embassy */}
            <div className="row align-items-start mb-4">
              <div className="col-md-3">
                <img
                  src="img/partners/Qatar.png"
                  alt="Client 1 Logo"
                  className="img-fluid"
                  style={{ maxWidth: "150px" }}
                />
              </div>
              <div className="col-md-9">
                <h3 className="font-weight-bold">QATAR EMBASSY</h3>
                <h6>
                  <b>Address: </b> HQ - Kigali, Rwanda
                </h6>
                <p style={{ textAlign: "justify" }}>
                  Our company had the honor of providing high-speed Starlink
                  internet services to the Qatar Embassy at their headquarters
                  in Kigali. This reliable internet solution ensures seamless
                  communication and efficient operations for the embassy staff.
                  With enhanced connectivity, the Qatar Embassy can effectively
                  manage diplomatic relations, provide consular services, and
                  support its mission in Rwanda with greater ease and
                  efficiency.
                </p>
              </div>
            </div>

            {/* MIGHT ENGINEERING CO */}
            <div className="row align-items-start mb-4">
              <div className="col-md-3">
                <img
                  src="img/partners/mightEngineering.webp"
                  alt="Client 1 Logo"
                  className="img-fluid"
                  style={{ maxWidth: "150px" }}
                />
              </div>
              <div className="col-md-9">
                <h3 className="font-weight-bold">MIGHT ENGINEERING CO</h3>
                <h6>
                  <b>Address: </b> Kigali, Rwanda
                </h6>
                <p style={{ textAlign: "justify" }}>
                  Our company had the honor of providing Starlink internet
                  services to Might Engineering Co., ensuring fast and reliable
                  connectivity for their operations. This solution enables the
                  company to efficiently manage projects, communicate with
                  clients, and support their engineering teams in delivering
                  high-quality services. With enhanced internet access, Might
                  Engineering Co. can streamline its processes, improve
                  collaboration, and continue to drive innovation and excellence
                  in the engineering sector.
                </p>
              </div>
            </div>

            {/* HOPE HEAVEN ACADEMY */}
            <div className="row align-items-start mb-4">
              <div className="col-md-3">
                <img
                  src="img/partners/hopeHeaven.jpg"
                  alt="Client 1 Logo"
                  className="img-fluid"
                  style={{ maxWidth: "150px" }}
                />
              </div>
              <div className="col-md-9">
                <h3 className="font-weight-bold">HOPE HEAVEN ACADEMY</h3>
                <h6>
                  <b>Address: </b> Kigali, Rwanda
                </h6>
                <p style={{ textAlign: "justify" }}>
                  Our company had the honor of providing Starlink internet
                  services to Hope Heaven Academy, ensuring reliable and
                  high-speed connectivity for the school. This internet solution
                  enhances the academy's ability to offer digital learning
                  resources, support virtual classes, and improve overall
                  communication between staff, students, and parents. With
                  seamless internet access, Hope Heaven Academy continues to
                  empower its students with a modern and connected learning
                  environment, fostering growth and academic achievement.
                </p>
              </div>
            </div>

            {/* EDPU AFRICA */}
            <div className="row align-items-start mb-4">
              <div className="col-md-3">
                <img
                  src="img/partners/edpuafrica.jpeg"
                  alt="Client 1 Logo"
                  className="img-fluid"
                  style={{ maxWidth: "150px" }}
                />
              </div>
              <div className="col-md-9">
                <h3 className="font-weight-bold">EDPU AFRICA</h3>
                <h6>
                  <b>Address: </b> Kigali, Rwanda
                </h6>
                <p style={{ textAlign: "justify" }}>
                  Our company had the privilege of implementing Starlink
                  internet services for EDPU Africa, ensuring fast and reliable
                  connectivity for their operations. This high-speed internet
                  solution enables EDPU Africa to effectively manage its
                  programs, facilitate communication with partners, and support
                  its mission of promoting education and development across the
                  continent. With enhanced connectivity, EDPU Africa can
                  streamline its initiatives, reach more beneficiaries, and
                  continue making a positive impact in the education sector.
                </p>
              </div>
            </div>

            {/* NDARU LUXURY SUITE */}
            <div className="row align-items-start mb-4">
              <div className="col-md-3">
                <img
                  src="img/partners/ndaru.png"
                  alt="Client 1 Logo"
                  className="img-fluid"
                  style={{ maxWidth: "150px" }}
                />
              </div>
              <div className="col-md-9">
                <h3 className="font-weight-bold">NDARU LUXURY SUITE</h3>
                <h6>
                  <b>Address: </b> Kigali, Rwanda
                </h6>
                <p style={{ textAlign: "justify" }}>
                  Our company had the privilege of providing high-speed Starlink
                  internet services to Ndarura Luxury Suite, ensuring fast and
                  reliable connectivity for their guests and operations. This
                  advanced internet solution enhances the guest experience by
                  enabling seamless access to online services and entertainment.
                  With improved connectivity, Ndarura Luxury Suite can
                  efficiently manage bookings, streamline communications, and
                  provide exceptional service, ensuring a luxurious stay for all
                  visitors.
                </p>
              </div>
            </div>
            {/* MVEND */}
            <div className="row align-items-start mb-4">
              <div className="col-md-3">
                <img
                  src="img/partners/mvend.png"
                  alt="MVEND Logo"
                  className="img-fluid"
                  style={{ maxWidth: "150px" }}
                />
              </div>
              <div className="col-md-9">
                <h3 className="font-weight-bold">MVEND</h3>
                <h6>
                  <b>Address: </b> Kigali, Rwanda
                </h6>
                <p style={{ textAlign: "justify" }}>
                  Our company successfully provided MVEND with comprehensive IT infrastructure 
                  and networking solutions. We implemented robust network systems and security 
                  measures to support their vending operations. This solution enables MVEND to 
                  efficiently manage their digital payment systems, maintain secure transactions, 
                  and ensure reliable connectivity across their vending network. With our 
                  technical support, MVEND can focus on delivering seamless vending services 
                  to their customers while maintaining high standards of security and operational efficiency.
                </p>
              </div>
            </div>
             {/* NCBA BANK RWANDA */}
             <div className="row align-items-start mb-4">
              <div className="col-md-3">
                <img
                  src="img/partners/ncba.png"
                  alt="NCBA Bank Rwanda Logo"
                  className="img-fluid"
                  style={{ maxWidth: "150px" }}
                />
              </div>
              <div className="col-md-9">
                <h3 className="font-weight-bold">NCBA BANK RWANDA</h3>
                <h6>
                  <b>Address: </b> Kigali, Rwanda
                </h6>
                <p style={{ textAlign: "justify" }}>
                  Our company successfully implemented comprehensive digital security solutions 
                  for NCBA Bank Rwanda. We provided and installed state-of-the-art CCTV systems 
                  across multiple branches, ensuring round-the-clock surveillance and security 
                  monitoring. The implementation included advanced access control systems and 
                  security infrastructure to protect the bank's assets and customers. This robust 
                  security solution helps NCBA Bank Rwanda maintain the highest standards of 
                  safety and security in their banking operations.
                </p>
              </div>
            </div>
            {/* THE FRONTIER CLINIC */}
            <div className="row align-items-start mb-4">
              <div className="col-md-3">
                <img
                  src="img/partners/frontier.png"
                  alt="The Frontier Clinic Logo"
                  className="img-fluid"
                  style={{ maxWidth: "150px" }}
                />
              </div>
              <div className="col-md-9">
                <h3 className="font-weight-bold">THE FRONTIER CLINIC</h3>
                <h6>
                  <b>Address: </b> Kigali, Rwanda
                </h6>
                <p style={{ textAlign: "justify" }}>
                  Our company successfully implemented comprehensive IT and security solutions 
                  for The Frontier Clinic. We installed advanced CCTV surveillance systems and 
                  provided reliable network infrastructure to support their medical operations. 
                  The solution includes secure data management systems and high-speed connectivity 
                  to ensure efficient healthcare service delivery. This integrated approach helps 
                  The Frontier Clinic maintain high standards of patient care while ensuring the 
                  security and privacy of medical information.
                </p>
              </div>
            </div>
            {/* HUAWEI */}
            <div className="row align-items-start mb-4">
              <div className="col-md-3">
                <img
                  src="img/partners/huawei.png"
                  alt="Huawei Logo"
                  className="img-fluid"
                  style={{ maxWidth: "150px" }}
                />
              </div>
              <div className="col-md-9">
                <h3 className="font-weight-bold">HUAWEI</h3>
                <h6>
                  <b>Address: </b> Kigali, Rwanda
                </h6>
                <p style={{ textAlign: "justify" }}>
                  Our company has established a strong partnership with Huawei in Rwanda, 
                  focusing on network infrastructure and security solutions. We collaborate 
                  on implementing advanced telecommunications equipment and providing technical 
                  support services. Our partnership enables us to deliver cutting-edge technology 
                  solutions to our clients, combining Huawei's innovative products with our local 
                  expertise and service capabilities. This collaboration strengthens our ability 
                  to provide enterprise-grade networking and security solutions across Rwanda.
                </p>
              </div>
            </div>
            {/* ALPHA CHOICE */}
            <div className="row align-items-start mb-4">
              <div className="col-md-3">
                <img
                  src="img/partners/alpha-choice.png"
                  alt="Alpha Choice Logo"
                  className="img-fluid"
                  style={{ maxWidth: "150px" }}
                />
              </div>
              <div className="col-md-9">
                <h3 className="font-weight-bold">ALPHA CHOICE</h3>
                <h6>
                  <b>Address: </b> Kigali, Rwanda
                </h6>
                <p style={{ textAlign: "justify" }}>
                  Our company provided comprehensive IT infrastructure and security solutions 
                  for Alpha Choice. We implemented advanced CCTV systems and access control 
                  measures to enhance their security operations. Additionally, we set up robust 
                  network infrastructure to support their business operations. This integrated 
                  solution ensures Alpha Choice maintains high standards of security while 
                  enabling efficient business operations through reliable connectivity and 
                  modern technology solutions.
                </p>
              </div>
            </div>
            {/* LINX */}
             <div className="row align-items-start mb-4">
              <div className="col-md-3">
                <img
                  src="img/partners/linx.png"
                  alt="LINX Logo"
                  className="img-fluid"
                  style={{ maxWidth: "150px" }}
                />
              </div>
              <div className="col-md-9">
                <h3 className="font-weight-bold">LINX</h3>
                <h6>
                  <b>Address: </b> Kigali, Rwanda
                </h6>
                <p style={{ textAlign: "justify" }}>
                  Our company successfully provided LINX with high-speed Starlink internet 
                  services, ensuring reliable and fast connectivity for their operations. 
                  This advanced internet solution enables seamless communication and efficient 
                  business processes across their facilities. With improved internet access, 
                  LINX can maintain smooth operations, enhance productivity, and deliver better 
                  services to their customers while enjoying consistent, high-speed connectivity 
                  through Starlink technology.
                </p>
              </div>
            </div>
            {/* IGNITE POWER RWANDA */}
            <div className="row align-items-start mb-4">
              <div className="col-md-3">
                <img
                  src="img/partners/ignite.png"
                  alt="Ignite Power Rwanda Logo"
                  className="img-fluid"
                  style={{ maxWidth: "150px" }}
                />
              </div>
              <div className="col-md-9">
                <h3 className="font-weight-bold">IGNITE POWER RWANDA</h3>
                <h6>
                  <b>Address: </b> Kigali, Rwanda
                </h6>
                <p style={{ textAlign: "justify" }}>
                  Our company successfully provided Ignite Power Rwanda with comprehensive 
                  IT solutions and high-speed Starlink internet services. We implemented 
                  reliable connectivity solutions across their operations, enabling them to 
                  efficiently manage their renewable energy projects throughout Rwanda. The 
                  high-speed internet access supports their mission of providing sustainable 
                  power solutions, allowing for real-time monitoring of solar installations 
                  and improved communication with field teams. This technology infrastructure 
                  helps Ignite Power Rwanda continue their important work in expanding access 
                  to clean energy across the country.
                </p>
              </div>
            </div>
            {/* KIVU TILAPIA FARM LTD */}
            <div className="row align-items-start mb-4">
              <div className="col-md-3">
                <img
                  src="img/partners/kivu-tilapia.png"
                  alt="Kivu Tilapia Farm Ltd Logo"
                  className="img-fluid"
                  style={{ maxWidth: "150px" }}
                />
              </div>
              <div className="col-md-9">
                <h3 className="font-weight-bold">KIVU TILAPIA FARM LTD</h3>
                <h6>
                  <b>Address: </b> Kivu Belt, Rwanda
                </h6>
                <p style={{ textAlign: "justify" }}>
                  Our company successfully provided Kivu Tilapia Farm Ltd with high-speed 
                  Starlink internet services at their lakeside facilities. This reliable 
                  connectivity solution enables them to efficiently manage their aquaculture 
                  operations and maintain communication with their teams and partners. The 
                  high-speed internet access supports their daily operations, monitoring 
                  systems, and business communications, helping them maintain their position 
                  as a leading fish farming enterprise in Rwanda. With Starlink's consistent 
                  connectivity, they can operate efficiently even in their remote lakeside 
                  location.
                </p>
              </div>
            </div>
            <div className="row align-items-start mb-4">
              <h2 className="text-3xl font-bold text-center mb-8 py-4 text-primary">
                Our Partners
              </h2>

              <div>
                <Marquee speed={50} gradient={false}>
                  <img
                    src="img/partners/cleo.png"
                    className="img-fluid"
                    alt="Image"
                    style={{
                      width: "100px",
                      height: "80px",
                      marginRight: "20px",
                      borderRadius: "0",
                      marginBottom: "10px",
                    }}
                  />
                  <img
                    src="img/partners/ogs.png"
                    className="img-fluid"
                    alt="Image"
                    style={{
                      width: "100px",
                      height: "80px",
                      marginRight: "20px",
                      borderRadius: "0",
                      marginBottom: "10px",
                    }}
                  />
                  <img
                    src="img/partners/dicel.png"
                    className="img-fluid"
                    alt="Image"
                    style={{
                      width: "100px",
                      height: "80px",
                      marginRight: "20px",
                      borderRadius: "0",
                      marginBottom: "10px",
                    }}
                  />
                  <img
                    src="img/partners/kc.png"
                    className="img-fluid"
                    alt="Image"
                    style={{
                      width: "100px",
                      height: "80px",
                      marginRight: "20px",
                      borderRadius: "0",
                      marginBottom: "10px",
                    }}
                  />
                  <img
                    src="img/partners/king.png"
                    className="img-fluid"
                    alt="Image"
                    style={{
                      width: "100px",
                      height: "80px",
                      marginRight: "20px",
                      borderRadius: "0",
                      marginBottom: "10px",
                    }}
                  />
                  <img
                    src="img/partners/mtn.jpg"
                    className="img-fluid"
                    alt="Image"
                    style={{
                      width: "100px",
                      height: "80px",
                      marginRight: "20px",
                      borderRadius: "0",
                      marginBottom: "10px",
                    }}
                  />
                  <img
                    src="img/partners/nss.png"
                    className="img-fluid"
                    alt="Image"
                    style={{
                      width: "100px",
                      height: "80px",
                      marginRight: "20px",
                      borderRadius: "0",
                      marginBottom: "10px",
                    }}
                  />
                  <img
                    src="img/partners/tele10.png"
                    className="img-fluid"
                    alt="Image"
                    style={{
                      width: "100px",
                      height: "80px",
                      marginRight: "20px",
                      borderRadius: "0",
                      marginBottom: "10px",
                    }}
                  />
                  <img
                    src="img/partners/vss.png"
                    className="img-fluid"
                    alt="Image"
                    style={{
                      width: "100px",
                      height: "80px",
                      marginRight: "20px",
                      borderRadius: "0",
                      marginBottom: "10px",
                    }}
                  />
                  <img
                    src="img/partners/rba.png"
                    className="img-fluid"
                    alt="Image"
                    style={{
                      width: "100px",
                      height: "80px",
                      marginRight: "20px",
                      borderRadius: "0",
                      marginBottom: "10px",
                    }}
                  />
                  <img
                    src="img/partners/discover.png"
                    className="img-fluid"
                    alt="Image"
                    style={{
                      width: "100px",
                      height: "80px",
                      marginRight: "20px",
                      borderRadius: "0",
                      marginBottom: "10px",
                    }}
                  />
                  <img
                    src="img/partners/inkomoko.png"
                    className="img-fluid"
                    alt="Image"
                    style={{
                      width: "100px",
                      height: "80px",
                      marginRight: "20px",
                      borderRadius: "0",
                      marginBottom: "10px",
                    }}
                  />
                  <img
                    src="img/partners/jica.svg"
                    className="img-fluid"
                    alt="Image"
                    style={{
                      width: "100px",
                      height: "80px",
                      marginRight: "20px",
                      borderRadius: "0",
                      marginBottom: "10px",
                    }}
                  />
                  <img
                    src="img/partners/RwandAir-Logo.wine.png"
                    className="img-fluid"
                    alt="Image"
                    style={{
                      width: "100px",
                      height: "80px",
                      marginRight: "20px",
                      borderRadius: "0",
                      marginBottom: "10px",
                    }}
                  />
                  <img
                    src="img/partners/sfh.jpg"
                    className="img-fluid"
                    alt="Image"
                    style={{
                      width: "100px",
                      height: "80px",
                      marginRight: "20px",
                      borderRadius: "0",
                      marginBottom: "10px",
                    }}
                  />
                  <img
                    src="img/partners/BSC.png"
                    className="img-fluid"
                    alt="Image"
                    style={{
                      width: "100px",
                      height: "80px",
                      marginRight: "20px",
                      borderRadius: "0",
                      marginBottom: "10px",
                    }}
                  />
                  <img
                    src="img/partners/hopeHeaven.jpg"
                    className="img-fluid"
                    alt="Image"
                    style={{
                      width: "100px",
                      height: "80px",
                      marginRight: "20px",
                      borderRadius: "0",
                      marginBottom: "10px",
                    }}
                  />
                  <img
                    src="img/partners/mightEngineering.webp"
                    className="img-fluid"
                    alt="Image"
                    style={{
                      width: "100px",
                      height: "80px",
                      marginRight: "20px",
                      borderRadius: "0",
                      marginBottom: "10px",
                    }}
                  />
                  <img
                    src="img/partners/edpuafrica.jpeg"
                    className="img-fluid"
                    alt="Image"
                    style={{
                      width: "100px",
                      height: "80px",
                      marginRight: "20px",
                      borderRadius: "0",
                      marginBottom: "10px",
                    }}
                  />
                  <img
                    src="img/partners/ndaru.png"
                    className="img-fluid"
                    alt="Image"
                    style={{
                      width: "100px",
                      height: "80px",
                      marginRight: "20px",
                      borderRadius: "0",
                      marginBottom: "10px",
                    }}
                  />
                  <img
                    src="img/partners/kivu-tilapia.png"
                    className="img-fluid"
                    alt="Image"
                    style={{
                      width: "100px",
                      height: "80px",
                      marginRight: "20px",
                      borderRadius: "0",
                      marginBottom: "10px",
                    }}
                  />
                  <img
                    src="img/partners/ignite.png"
                    className="img-fluid"
                    alt="Image"
                    style={{
                      width: "100px",
                      height: "80px",
                      marginRight: "20px",
                      borderRadius: "0",
                      marginBottom: "10px",
                    }}
                  />
                  <img
                    src="img/partners/mvend.png"
                    className="img-fluid"
                    alt="Image"
                    style={{
                      width: "100px",
                      height: "80px",
                      marginRight: "20px",
                      borderRadius: "0",
                      marginBottom: "10px",
                    }}
                  />
                  <img
                    src="img/partners/linx.png"
                    className="img-fluid"
                    alt="Image"
                    style={{
                      width: "100px",
                      height: "80px",
                      marginRight: "20px",
                      borderRadius: "0",
                      marginBottom: "10px",
                    }}
                  />
                  <img
                    src="img/partners/ncba.png"
                    className="img-fluid"
                    alt="Image"
                    style={{
                      width: "100px",
                      height: "80px",
                      marginRight: "20px",
                      borderRadius: "0",
                      marginBottom: "10px",
                    }}
                  />
                  <img
                    src="img/partners/frontier.png"
                    className="img-fluid"
                    alt="Image"
                    style={{
                      width: "100px",
                      height: "80px",
                      marginRight: "20px",
                      borderRadius: "0",
                      marginBottom: "10px",
                    }}
                  />
                  <img
                    src="img/partners/Huawei.png"
                    className="img-fluid"
                    alt="Image"
                    style={{
                      width: "100px",
                      height: "80px",
                      marginRight: "20px",
                      borderRadius: "0",
                      marginBottom: "10px",
                    }}
                  />
                </Marquee>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* our Clients Ends */}

      {/* <!-- Footer Start --> */}
      <div
        className="container-fluid footer py-1 wow fadeIn"
        data-wow-delay="0.2s"
      >
        <div className="container py-5">
          <div className="row g-5">
            {/* First Column - Logo and Description */}
            <div className="col-md-6 col-lg-6 col-xl-3">
              <div className="footer-item d-flex flex-column">
                <div className="footer-item">
                  {/* Company logo */}
                  <img
                    src="img/F_logo.png"
                    alt="Company Logo"
                    style={{ width: "150px", height: "auto" }}
                    className="mb-4"
                  />

                  {/* Company description */}
                  <p className="mb-3">
                    At Fabritech, we are dedicated to providing top-notch IT
                    solutions and services. From networking to surveillance, we
                    ensure high standards in every project.
                  </p>
                </div>
              </div>
            </div>

            {/* Second Column - Explore Links */}
            <div className="col-md-6 col-lg-6 col-xl-3">
              <div className="footer-item d-flex flex-column">
                <h4 className="text-white mb-4">Explore</h4>
                <a href="/">
                  <i className="fas fa-angle-right me-2"></i> Home
                </a>
                <a href="/service">
                  <i className="fas fa-angle-right me-2"></i> Services
                </a>
                <a href="/about">
                  <i className="fas fa-angle-right me-2"></i> About Us
                </a>
                <a href="/contact">
                  <i className="fas fa-angle-right me-2"></i> Contact Us
                </a>
                <a href="/gallery">
                  <i className="fas fa-angle-right me-2"></i> Gallery
                </a>
              </div>
            </div>

            {/* Third Column - Contact Info */}
            <div className="col-md-6 col-lg-6 col-xl-3">
              <div className="footer-item d-flex flex-column">
                <h4 className="text-white mb-4">Contact Info</h4>
                <a href="https://maps.app.goo.gl/GMRDwb39xqjckVDD9">
                  <i className="fa fa-map-marker-alt me-2"></i>YYUSSA Plaza,
                  Kisimenti, Remera
                </a>
                <a href="mailto:fabrice.sugira@fabritech.rw">
                  <i className="fas fa-envelope me-2"></i> info@fabritech.rw
                </a>
                <a href="tel:+250788601280">
                  <i className="fas fa-phone me-2"></i> +250788601280
                </a>
                {/* Social media icons */}
                <div className="d-flex align-items-center">
                  <a
                    className="btn btn-light btn-md-square me-2"
                    href="
https://www.facebook.com/profile.php?id=100089523591506&amp;mibextid=ZbWKwL"
                  >
                    <i className="fab fa-facebook-f"></i>
                  </a>
                  <a
                    className="btn btn-light btn-md-square me-2"
                    href="https://www.instagram.com/fabritech_ltd"
                  >
                    <i className="fab fa-instagram"></i>
                  </a>
                  <a
                    className="btn btn-light btn-md-square me-2"
                    href="https://www.linkedin.com/in/fabritech_ltd"
                  >
                    <i className="fab fa-linkedin-in"></i>
                  </a>
                  <a
                    href="whatsapp://send?text=Hello,I'd like to chat with you about Fabritech&amp;phone=+250788601280"
                    className="btn btn-light btn-md-square me-2"
                  >
                    <i className="fab fa-whatsapp text-white"></i>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* <!-- Footer End --> */}

      {/* <!-- Copyright Start --> */}
      <div className="container-fluid copyright py-4">
            <div className="container">
                <div className="row g-4 align-items-center">
                    <div className="col-md-6 text-center text-md-start mb-md-0">
                        <span className="text-body">
                            Fabritech, <i className="fas fa-copyright text-light me-2"></i>All rights reserved 2025.
                        </span>
                    </div>
                    <div className="col-md-6 text-center text-md-end mb-md-0">
                        <span className="text-body">
                            Developed by <a href="YOUR_PORTFOLIO_LINK" target="_blank" rel="noopener noreferrer">Maliki NTWALI</a>
                        </span>
                    </div>
                </div>
            </div>
        </div>
        <a href="#" className="btn btn-primary btn-lg-square back-to-top">
            <i className="fa fa-arrow-up"></i>
        </a>
        {/* <!-- Copyright End --> */}
    </div>
  );
}

export default About;
