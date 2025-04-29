import { FaArrowRightLong } from "react-icons/fa6";
import { FcDownload } from "react-icons/fc";

const Header = () => {
  return (
    <header>
      <div className="wrapper">
        <div className="container ">
          <div className="logo">
            <p className="logo-text">MobuisEngine</p>
          </div>
          <ul className="nav col-12 col-md-auto mb-2 justify-content-center mb-md-0">
            <li className="header-list">
              <a href="#" className="nav-link px-3">
                Home
              </a>
            </li>
            <li>
              <a href="#" className="nav-link px-3">
                About Us
              </a>
            </li>
            <li>
              <a href="#" className="nav-link px-3">
                Plans
              </a>
            </li>
            <li>
              <a href="#" className="nav-link px-3">
                Testimonials
              </a>
            </li>
            <li>
              <a href="#" className="nav-link px-3">
                Privacy Policy
              </a>
            </li>
            <li>
              <a href="#" className="nav-link px-3">
                More
              </a>
            </li>
          </ul>
          <div>
            <button className="get">Get Started</button>
          </div>
        </div>
        <div className="container-two">
          <div className="text-overlay">
            Land job interviews
            <br />
            <span className="ten">10x </span>faster
            <div className="text-overlay-two">
              custom-built resume that match your goals,keywords,and recruiter
              expectations.
            </div>
            <button className="get1">
              Get Started <FaArrowRightLong />
            </button>
            <div className="container3">
              <div className="card">
                <span className="card-content">
                  2024/2025
                  <br />
                  HIRING
                  <br />
                  TRENDS
                </span>
                <span className="content-second">
                  A job seekers guide to what to expect in 2024 in the new
                  normal of growing tech layoffs
                </span>
                <div className="line"></div>
                <span className="e-book">Down Load Free E-book</span>
                <FcDownload />
              </div>
            </div>
          </div>
        </div>
      </div>
      <main>
        <section>
          <p className="section-first">How we work ?</p>
        </section>
        <br />
        <br />
        <section>
          <p className="section-second"></p>
        </section>
      </main>
      <footer>
        <div className="container-footer">
          <p className="contact">Contact Us</p>
        </div>
      </footer>
    </header>
  );
};

export default Header;
