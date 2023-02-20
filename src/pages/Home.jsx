import React from "react";

import Solutions from "../components/Solutions";

import IPFSLogo from "../assets/ipfs.png";
import SkaleLogo from "../assets/skale.svg";
import SolidityLogo from "../assets/solidity.png";

class Home extends React.Component {

  componentDidMount(){
    document.title = "Respont | Secure messaging, decentralized future.";
  }

  render() {
    return (
      <div className="container">
        <div className="section-one pb-5">
          <div className="intro text-center">
            <h1 className="title text-uppercase">
              Empowering Secure Communication with Full Decentralization
              <span className="text-warning">.</span>
            </h1>
            <p className="text-center pt-2">
              Welcome to the future of messaging
              <span className="text-warning">.</span> Our revolutionary
              blockchain-based messaging app is designed with privacy and
              security in mind<span className="text-warning">.</span> With fully
              decentralized architecture, your messages are stored on a secure,
              tamper-proof blockchain, ensuring that your data is safe from
              prying eyes<span className="text-warning">.</span> Our app is easy
              to use and provides a seamless messaging experience without
              compromising on security<span className="text-warning">.</span>{" "}
              Say goodbye to data breaches and hello to the new era of messaging
              <span className="text-warning">.</span> Join us today and
              experience the power of truly secure messaging
              <span className="text-warning">.</span>
            </p>
          </div>
          <div className="pt-5 mt-5 text-center">
            <a href="#solutions">
              <i className="bi bi-arrow-down text-warning h3"></i>
            </a>
          </div>
        </div>

        <div className="section-two pb-5" id="solutions">
          <div className="row">
            <div class="col-lg-5 col-md-4 text-left solution-vector px-2 mb-5">
              <h1 className="title">
                THE FUTURE OF MESSAGING<span className="text-warning">.</span>
              </h1>
              <span className="title-describe">
                The future of messaging is here, and it's fully decentralized.
                With our cutting-edge blockchain technology, we're redefining
                the way people communicate online. Our app ensures that your
                conversations are secure, private, and completely under your
                control. By leveraging the power of blockchain, we've eliminated
                the need for centralized servers, making our app resistant to
                data breaches and other security threats. Say goodbye to the
                limitations of traditional messaging apps and embrace the future
                with us. Join the movement towards a more secure and private
                digital world with our fully decentralized messaging app.
              </span>
            </div>
            <div className="col-lg-7 col-md-8 pt-5">
              <Solutions />
            </div>
          </div>
        </div>

        <div className="section-three" id="technology">
          <div className="rounded">
            <h1 className="title">
              THE TECHNOLOGY BEHIND<span className="text-warning">.</span>
            </h1>
            <div className="technology">
              <a href="https://ipfs.tech" target="_blank" rel="noreferrer">
                <div>
                  <img src={IPFSLogo} alt="IPFS File System" />
                </div>
              </a>
              <a
                href="https://soliditylang.org/"
                target="_blank"
                rel="noreferrer"
              >
                <div>
                  <img src={SolidityLogo} alt="Solidity Smart Contract" />
                </div>
              </a>
              <a href="https://skale.space" target="_blank" rel="noreferrer">
                <div className="bg-dark">
                  <img src={SkaleLogo} alt="Skale Network" />
                </div>
              </a>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Home;
