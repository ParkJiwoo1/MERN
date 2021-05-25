import React from 'react';
import { MDBCol, MDBContainer, MDBRow, MDBFooter } from "mdbreact";



function Footer(){
 
    return(
        <MDBFooter fluid color="black" className="font-small pt-4 mt-4 ">
        <MDBContainer fluid className="text-center text-md-left">
          <MDBRow>
            <MDBCol md="9"> 
            </MDBCol>
            <MDBCol md="3">
              <h5 className="title">Links</h5>
              <ul>
                <li className="list-unstyled">
                  <a href="#!">Link 1</a>
                </li>
                <li className="list-unstyled">
                  <a href="#!">Link 2</a>
                </li>
                <li className="list-unstyled">
                  <a href="#!">Link 3</a>
                </li>
                <li className="list-unstyled">
                  <a href="#!">Link 4</a>
                </li>
                <li className="list-unstyled">
                  <a href="#!">Link 5</a>
                </li>
                <li className="list-unstyled">
                  <a href="#!">Link 6</a>
                </li>
                <li className="list-unstyled">
                  <a href="#!">Link 7</a>
                </li>
                <li className="list-unstyled">
                  <a href="#!">Link 8</a>
                </li>
                <li className="list-unstyled">
                  <a href="#!">Link 9</a>
                </li>
              </ul>
            </MDBCol>
          </MDBRow>
        </MDBContainer>
        <div className="footer-copyright text-center py-3">
          <MDBContainer fluid>
            &copy; {new Date().getFullYear()} Copyright: <a href="https://www.mdbootstrap.com"> MDBootstrap.com </a>
          </MDBContainer>
        </div>
      </MDBFooter>
    )
}
export default Footer;