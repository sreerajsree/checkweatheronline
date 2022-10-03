import React from "react";
import Weather from "./Weather";
import "./App.css";
import { MDBCol, MDBContainer, MDBRow, MDBFooter, MDBNavbar, MDBNavbarBrand, MDBIcon  } from "mdbreact";



export default function App() {
  return (
          <React.Fragment>
            <div className="min-vh-100 d-flex flex-column justify-content-between">
            <MDBNavbar className="color-primary" >
              <MDBNavbarBrand>
                <img src="https://www.iblsoft.com/wp-content/uploads/2019/01/IBL_logo_OnlineWeather.png" width="100" alt="" className="py-3" />
              </MDBNavbarBrand>
            </MDBNavbar>
            <div className="row mr-0 justify-content-center">
              <div className='col-md-6 pr-0'>
                <div className="pl-3 pr-3 pt-5 pb-5">
                  <Weather defaultCity="Bangalore" />
                </div>
              </div>
            </div>
            <MDBFooter className="font-small darken-3 pt-0 color-primary">
              <MDBContainer>
                <MDBRow>
                  <MDBCol md="12" className="py-5">
                    <div className="mb-5 flex-center">
                      <a className="fb-ic" href="/#">
                        <i className="fab fa-facebook-f fa-lg white-text mr-md-5 mr-3 fa-2x">
                        </i>
                      </a>
                      <a className="tw-ic" href="/#">
                        <i className="fab fa-twitter fa-lg white-text mr-md-5 mr-3 fa-2x">
                        </i>
                      </a>
                      <a className="li-ic" href="/#">
                        <i className="fab fa-linkedin-in fa-lg white-text mr-md-5 mr-3 fa-2x">
                        </i>
                      </a>
                      <a className="ins-ic" href="/#">
                        <i className="fab fa-instagram fa-lg white-text mr-md-5 mr-3 fa-2x">
                        </i>
                      </a>
                      <a className="pin-ic" href="/#">
                        <i className="fab fa-pinterest fa-lg white-text fa-2x"> </i>
                      </a>
                    </div>
                  </MDBCol>
                </MDBRow>
              </MDBContainer>
              <div className="footer-copyright text-center py-3">
                <MDBContainer fluid>
                  <div>&copy; {new Date().getFullYear()} Made with <MDBIcon fab icon="react" /> React and hosted on <MDBIcon icon="globe" /> Netlify by<a target="_blank" href="https://sreerajsree.vercel.app/" rel="noreferrer"> Sreeraj S</a>
                </div>
                </MDBContainer>
              </div>
            </MDBFooter>
            </div>
        </React.Fragment>
  );
}
