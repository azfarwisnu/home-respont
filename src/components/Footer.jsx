import React from "react";

class Footer extends React.Component {
  render() {
    return (
      <div className="footer">
        <div className="container">
          <div className="row">
            <div className="col-md-3 respont-logo">
              <span className="respont">R E S P O N T</span>
            </div>
            <div className="col-md-4 socials">
              <p>Find Us On<span className="text-warning">.</span></p>
              <a href="/#" target="_blank" rel="noreferrer"><i className="bi bi-github"></i> Github</a>
              <a href="/#" target="_blank" rel="noreferrer"><i className="bi bi-envelope"></i> Email</a>
            </div>
            <div className="col-md-4 subscribe">
              <p>Subscribe to <span className="respont">R E S P O N T</span> newsletter<span className="text-warning">!</span></p>
              <div>
                <input placeholder="Type your email here" />
                <button>Submit</button>
              </div>
            </div>
          </div>
          <hr className="mt-4"/>
          <span className="copyright">Copyright &copy; <span className="respont">R E S P O N T</span> 2023.</span>
        </div>
      </div>
    );
  }
}

export default Footer;
