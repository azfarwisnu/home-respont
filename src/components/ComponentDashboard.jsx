import React from "react";
import ComponentHeader from "./ComponentHeader";

class ComponentDashboard extends React.Component {
  render() {
    return (
      <>
        <div className="container">
          <ComponentHeader />
          <div className="section-one pb-5">
            <div className="row">
              <div className="col-12 col-md-6 pb-4 mb-4">
                <h2>
                  <b>LOREM IPSUM SIT DOLOR AMET</b>
                </h2>
                <p className="text-justify pt-2">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Aenean aliquet sapien et tempus egestas. Aenean lacinia velit
                  vel arcu varius, id auctor libero malesuada. Nullam nulla
                  nisl, scelerisque et bibendum vitae, hendrerit quis lacus.
                  Aliquam erat volutpat. Morbi id nisl nec sapien maximus
                  molestie.Lorem ipsum dolor sit amet, consectetur adipiscing
                  elit.
                </p>
                <button className="btn-set btn">
                  <b>contact us</b>
                </button>
                <button className="btn-set2 btn mx-3">
                  <b>contact us</b>
                </button>
              </div>

              <div className="col-12 col-md-6 right">
                <div className="box-dot">
                  <img src="https://media.discordapp.net/attachments/893057124983255080/1075806649719201883/image.png" alt="potobg" />
                </div>
              </div>
            </div>
          </div>
          <div className="section-two pb-5">
            <h2>
              <b>THE SOLUTIONS</b>
            </h2>
            <div className="pt-4 mt-4">
              <div className="row">
                <div className="col-12 col-md-4 mb-4">
                  <div className="content mx-3">
                    <p className="text-center lrsum">
                      <b>LOREM IPSUM</b>
                    </p>
                    <p className="text-justify">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Aenean aliquet sapien et tempus egestas. Aenean lacinia
                      velit vel arcu varius, id auctor libero malesuada.
                    </p>
                  </div>
                </div>
                <div className="col-12 col-md-4 mb-4">
                  <div className="content mx-3">
                    <p className="text-center lrsum">
                      <b>LOREM IPSUM</b>
                    </p>
                    <p className="text-justify">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Aenean aliquet sapien et tempus egestas. Aenean lacinia
                      velit vel arcu varius, id auctor libero malesuada.
                    </p>
                  </div>
                </div>
                <div className="col-12 col-md-4 mb-4">
                  <div className="content mx-3">
                    <p className="text-center lrsum">
                      <b>LOREM IPSUM</b>
                    </p>
                    <p className="text-justify">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Aenean aliquet sapien et tempus egestas. Aenean lacinia
                      velit vel arcu varius, id auctor libero malesuada.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="section-three pb-5">
            <div className="col-12 border box-yellow shadow">
              <div className="col-12 mx-4 pt-4 mt-4 pb-4">
                <div className="row">
                  <div className="col-11 col-md-6 text-justify left">
                    <div className="mx-2">
                      <h2>TECHNOLOGY</h2>
                      <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Aenean aliquet sapien et tempus egestas. Aenean lacinia
                        velit vel arcu varius, id auctor libero malesuada.
                      </p>
                    </div>
                  </div>
                  <div className="col-12 col-md-5 right">
                    <img
                      src="https://upload.wikimedia.org/wikipedia/commons/2/24/Polygon_blockchain_logo.png"
                      alt="polygon"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default ComponentDashboard;
