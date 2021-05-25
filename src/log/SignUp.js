import React, { useEffect, useState } from 'react';
import { checkPW, getCurrentStorage, saveUser } from '../app/LocalStorage';
import { useHistory } from 'react-router-dom';
import { MDBContainer, MDBRow, MDBCol, MDBBtn, MDBInput, MDBCard, MDBCardBody, MDBIcon } from 'mdbreact';
import NavBar from '../components/NavBar';
import Footer from '../components/Footer';
import '@fortawesome/fontawesome-free/css/all.min.css';
import 'bootstrap-css-only/css/bootstrap.min.css';
import 'mdbreact/dist/css/mdb.css';


function SignUp() {
  const [loginID, setLoginID] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');

    const [loadedCurrentStorage, setLoadedStorage] = useState({})

    const changeID = (e) => setLoginID(e.target.value);
    const changePassword = (e) => setPassword(e.target.value);
    const confirming = (e) => setConfirmPassword(e.target.value);

    useEffect(() => {
        //console.log("Currentstorage", getCurrentStorage());
        setLoadedStorage(getCurrentStorage());

        //window.localStorage.removeItem('users')
    }, []);

    const register = () => {
        saveUser(loginID, password);
        setLoadedStorage(getCurrentStorage());
        console.log("updated storage", getCurrentStorage());
        setLoginID('')
        setPassword('')
        setConfirmPassword('')

    }
    const checkDuplicatePW = () => {
        if (password !== confirmPassword) {
            alert('비밀번호 다름')
            setLoginID('')
            setPassword('')
            setConfirmPassword('')
        }
        else {
            if (!checkPW(password)) {
                alert('영문, 숫자 조합 비밀번호 6자리 이상 입력해주세요')
                setLoginID('')
                setPassword('')
                setConfirmPassword('')
            }
            else {
                checkDuplicateID();
                history.push('/');
            }
        }
    }
    const history=useHistory();

    /*currentuser 만들어 데이터 있으면 자동 로그인, 데이터없으면 로그아웃*/
    const checkDuplicateID = () => {
        if (loadedCurrentStorage[loginID]) {
            alert('아이디 중복')
            setLoginID('')
            setPassword('')
            setConfirmPassword('')
        }
        else {
            register();
            alert('가입 성공')
        };
      }
return (
  <>
    <NavBar/>
      <MDBContainer >
        <MDBRow className="w-50">
          <MDBCol md="12">
            <MDBCard>
              <MDBCardBody>
                
                <form>
                  <p className="h4 text-center py-3">Sign up</p>
                  <div className="grey-text text-left">
                    <MDBInput 
                    onChange={changeID}
                      label="ID"
                      icon="user"
                      size="lg"
                      group
                      type="text"
                      validate
                      error="wrong"
                      success="right"
                    />
                    <MDBInput
                    onChange={changePassword}
                      label="PW(영문/숫자 6자 이상)"
                      size="lg"
                      icon="lock"
                      group
                      type="password"
                      validate
                    />
                    <MDBInput
                    onChange={confirming}
                      label="Confirm your password"
                      size="lg"
                      icon="exclamation-triangle"
                      group
                      type="password"
                      validate
                      error="wrong"
                      success="right"
                    />
                  </div>
                  <div className="text-center py-9 mt-9">
                    <MDBBtn color="" type="submit" size="lg" onClick={checkDuplicatePW}> 
                      Register
                    </MDBBtn>
                  </div>
                </form>
              </MDBCardBody>
            </MDBCard>
          </MDBCol>
        </MDBRow>
      </MDBContainer>
      <Footer/>
      </>
    );
  };

export default SignUp;