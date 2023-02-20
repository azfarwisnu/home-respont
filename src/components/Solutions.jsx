import React from "react";

class Solutions extends React.Component {
  render() {
    return (
      <>
        <div className="row pt-5">
          <div className="col-sm-6 col-md-6 mt-4">
            <div className="solution rounded">
              <h4 className="title mb-3">
                EASY TO USE<span className="text-warning">.</span>
              </h4>
              <p className="describe mb-4">
                Our fully decentralized messaging app is not only secure and
                private, but also incredibly easy to use. With our seamless
                integration with web3 wallets, you can connect to our app
                effortlessly and start messaging in no time. No more cumbersome
                registration processes or complicated verification steps - all
                you need is your web3 wallet and you're ready to go. Our
                user-friendly interface makes it easy for you to navigate the
                app and enjoy all its features without any hassle. Join us today
                and experience the convenience of secure and easy-to-use
                messaging with our blockchain-based app.
              </p>
              <a
                href="https://respont-app.netlify.app/"
                target="_blank"
                rel="noreferrer"
              >
                Try Now
              </a>
            </div>
          </div>
          <div className="col-sm-6 col-md-6 mt-4">
            <div className="solution rounded">
              <h4 className="title mb-3">
                INTEROPERABILITY<span className="text-warning">.</span>
              </h4>
              <p className="describe mb-4">
                Our fully decentralized messaging app is designed with
                interoperability in mind. We believe in the power of
                collaboration, and that's why we've made our app compatible with
                other decentralized applications (dApps) by providing libraries
                for messaging and notifications. This makes it easy for other
                dapps to integrate our messaging capabilities and leverage the
                power of blockchain-based communication for their users. With
                our app, you'll have a seamless and hassle-free messaging
                experience, no matter which dapp you're using.
              </p>
              <button
                target="_blank"
                rel="noreferrer"
                className="cursor-no-drop text-muted"
                disabled
              >
                Coming Soon
              </button>
            </div>
          </div>
          <div className="col-sm-6 col-md-6 mt-4">
            <div className="solution rounded">
              <h4 className="title mb-3">
                SECURE AND PRIVATE<span className="text-warning">.</span>
              </h4>
              <p className="describe mb-4">
                Security and privacy are at the core of our fully decentralized
                messaging app. By leveraging the power of blockchain and web3
                wallet technology, we've created an app that is virtually
                impenetrable to cyber attacks and data breaches. Your private
                keys are securely stored on your web3 wallet, meaning that only
                you have access to your data. Our app uses end-to-end encryption
                to ensure that your conversations are completely private and
                secure. You can communicate with confidence, knowing that your
                messages are safe from prying eyes. Join us today and experience
                the ultimate in secure and private messaging with our
                blockchain-based app.
              </p>
            </div>
          </div>
          <div className="col-sm-6 col-md-6 mt-4">
            <div className="solution rounded">
              <h4 className="title mb-3">
                DECENTRALIZED<span className="text-warning">.</span>
              </h4>
              <p className="describe mb-4">
                Our fully decentralized messaging app is built on the principles
                of decentralization, ensuring that you have complete control
                over your data. Unlike traditional messaging apps that rely on
                centralized servers, our app uses blockchain and IPFS
                (InterPlanetary File System) to store your messages and files in
                a decentralized manner. This means that you own your data, and
                no one else has access to it without your permission. With our
                app, you can say goodbye to the risks of centralized servers,
                such as data breaches and censorship, and hello to the power of
                true decentralization.
              </p>
            </div>
          </div>
          <div className="col-sm-6 col-md-6 mt-4">
            <div className="solution rounded">
              <h4 className="title mb-3">
                SMART<span className="text-warning">.</span>
              </h4>
              <p className="describe mb-4">
                Get ready to experience the future of messaging with our
                upcoming Smart Message feature. Our team has been hard at work
                on this revolutionary new feature, and we can't wait to unveil
                it to our users. With Smart Message, you'll be able to take your
                conversations to the next level with advanced, cutting-edge
                technology that will change the way you communicate. Stay tuned
                for more information and be the first to try out this
                game-changing new feature!
              </p>
              <a
                href="https://respont-app.netlify.app/"
                target="_blank"
                className="cursor-no-drop text-muted"
                rel="noreferrer"
              >
                Coming Soon
              </a>
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default Solutions;
