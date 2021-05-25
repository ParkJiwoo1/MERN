import React, {Fragment, useEffect, useState} from "react";
import { useHistory } from 'react-router-dom';
import { getCurrentStorage, setCurrentUser } from '../app/LocalStorage';
import { MDBContainer, MDBRow, MDBCol, MDBCard, MDBCardBody, MDBInput, MDBBtn, MDBIcon, MDBModalFooter } from 'mdbreact';
import NavBar from '../components/NavBar';
import Footer from '../components/Footer';
import '@fortawesome/fontawesome-free/css/all.min.css';
import 'bootstrap-css-only/css/bootstrap.min.css';
import 'mdbreact/dist/css/mdb.css';

const SignIn = () => {
  const [loadedCurrentStorage, setLoadedStorage] = useState({});
    const [loginId, setLoginId] = useState('');
    const [password, setPassword] = useState('');

    const history = useHistory();

    function LogIn() {
      //Find if the user id is in the data (localstorage - users)
      if (loadedCurrentStorage[loginId]) {
          //Find if the password is same as the one in the data (localstorage - user)
          if (loadedCurrentStorage[loginId].password === password) {
              //Use setCurrentUser here
              setCurrentUser(loginId);
              //Redirect to Main page
              history.push('/');
             // console.log({loginId});
          }
          else {
              alert("비밀번호가 틀립니다.");
              setLoginId('');
              setPassword('');
          }

      }
      else {
          alert("존재하지 않는 아이디");
          setLoginId('');
          setPassword('');
      }
  }

  const changeID = (e) => setLoginId(e.target.value);
  const changePassword = (e) => setPassword(e.target.value);


  useEffect(() => {
      setLoadedStorage(getCurrentStorage());
      console.log("Currentstorage", getCurrentStorage());

      //window.localStorage.removeItem('users')
  }, []);

  return (
    <>
    <NavBar/>
    <MDBContainer>
      <MDBRow className="w-50">
        <MDBCol md="12">
          <MDBCard>
            <MDBCardBody className="mx-4">
              <div className="text-center">
                <h4 className="dark-grey-text mb-5">
                  <strong>Login</strong>
                </h4>
              </div>
              <div className="grey-text text-left">
              <MDBInput
              onChange={changeID}
                label="ID"
                icon="user"
                size="lg"
                value={loginId}
                group
                type="text"
                validate
                error="wrong"
                success="right"
                className="test1"
              />
              <MDBInput
              onChange={changePassword}
              value={password}
                label="Password"
                icon="lock"
                size="lg"
                group
                type="password"
                validate
                containerClass="mb-0"
              />
              </div>
             
              <div className="text-center mb-3">
                  <Fragment>
                <MDBBtn
                  type="button"
                  color="white"
                  rounded
                  size="lg"
                  className="btn-block gray-text z-depth-1a "
                  onClick={LogIn}
                >
                  Sign in
                </MDBBtn>
                </Fragment>
              </div>
              <p className="font-l dark-grey-text text-right d-flex justify-content-center mb-3 pt-2">

                or Sign in with:
              </p>
              <div className="row my-3 d-flex justify-content-center">
                <MDBBtn
                  type="button"
                  color="white"
                  rounded
                  className="mr-md-3 z-depth-1a"
                >
                  <MDBIcon fab icon="facebook-f" className="blue-text text-center" />
                </MDBBtn>
                <MDBBtn
                  type="button"
                  color="white"
                  rounded
                  className="mr-md-3 z-depth-1a"
                >
                  <MDBIcon fab icon="twitter" className="blue-text" />
                </MDBBtn>
                <MDBBtn
                  type="button"
                  color="white"
                  rounded
                  className="z-depth-1a"
                >
                  <MDBIcon fab icon="google-plus-g" className="blue-text" />
                </MDBBtn>
              </div>
            </MDBCardBody>
            <MDBModalFooter className="mx-5 pt-3 mb-1">
              <p className="font-small grey-text d-flex justify-content-end">
                Not a member?
                <a href="/signup" className="blue-text ml-1">

                  Sign Up
                </a>
              </p>
            </MDBModalFooter>
          </MDBCard>
        </MDBCol>
      </MDBRow>
    </MDBContainer>
    <Footer/>
    </>
  );
};

export default SignIn;