export default function Header() {
  return (
    <header className="we-header btn-open block">
      <div className="primary-nav">
        <div className="container">
          <div className="logo careers-logo">
            <a href="#" target="_self">
              <img src="/images/cohesity_logo.svg" alt="Cohesity Logo" className="main-logo" />
            </a>
            <a href="#" target="_self">
              <img src="/images/careers-logo.svg" alt="Cohesity Careers Logo" className="careers-logo" />
            </a>
          </div>

          <div className="main-menu we-desktop en-menu">
            <ul>
              <li className="hover-menu careers-home">
                <a href="#" target="_self" className="active">Careers<span className="line-animate"></span></a>
                <div className="sub-menu">
                  <ul className="left-part">
                    <li className="inner-link active">
                      <a href="#" target="_self">Home</a>
                      <div className="sub-menu-block ">
                        <div className="col-seven">
                          <ul className="has-link ">
                          </ul>
                          <div>
                          </div>
                        </div>
                      </div>
                    </li>
                    <li className="inner-link">
                      <a href="#" target="_self">Our Hiring Process</a>
                      <div className="sub-menu-block">
                        <div className="col-seven">
                          <ul className="has-link ">
                          </ul>
                          <div>
                          </div>
                        </div>
                      </div>
                    </li>
                  </ul>
                </div>
              </li>
              <li className="hover-menu life-at-cohesity">
                <a href="#" target="_self">Life at Cohesity<span className="line-animate"></span></a>
              </li>
              <li className="direct-menu hover-menu dei">
                <a href="#" target="_self">Diversity &amp; Inclusion<span className="line-animate"></span></a>
              </li>
              <li className="direct-menu hover-menu cohesity-for-good">
                <a href="#" target="_self">Cohesity For Good<span className="line-animate"></span></a>
              </li>
              <li className="hover-menu teams">
                <a href="#" target="_self">Teams<span className="line-animate"></span></a>
              </li>
              <li className="direct-menu hover-menu open-positions">
                <a href="#" target="_self">Open Positions<span className="line-animate"></span></a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </header>
  )
}