import React, {useState, useEffect} from 'react'
import { Link, Redirect } from 'react-router-dom'
import {
  CButton,
  CCard,
  CCardBody,
  CCardGroup,
  CCol,
  CContainer,
  CForm,
  CInput,
  CInputGroup,
  CInputGroupPrepend,
  CInputGroupText,
  CRow,
  CFormText
} from '@coreui/react'
import CIcon from '@coreui/icons-react'
import axios from 'axios';
import useLocalStorage from '../../../reusable/UseLocalStorage';
import * as Config from '../../../reusable/Config';

const Login = (props) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [data, setData] = useState([]);
  const [msgError, setMsgError] = useState("");
  const [isLogged, setIsLogged] = useState(false);
  const [localLoginStatus, setLocalLoginStatus] = useLocalStorage("is_logged", false);

  const validateInfo = () => {
    let isValid = true;
    if (email.length <= 0 || password.length <= 0) {
      isValid = false;
      setMsgError("Email & Password are require.");
    }
    return isValid;
  }

  const login = () => {
    const isValid = validateInfo();
    if (isValid) {
      setMsgError("");
      axios.post(Config.LOGIN, {
        email: email,
        password: password,
      }, { withCredentials: true })
        .then(async function (response) {
          if (response.status == 200) {
            localStorage.setItem('admin_token', response.data.access_token);
            setLocalLoginStatus(true);
            setIsLogged(true);
          }
        })
        .catch(function (error) {
          console.log("LOGIN: FAILED");
          // console.log(error);
          console.log(typeof (error.response));
          if (typeof (error.response) != 'undefined') {
            switch (error.response.status) {
              case 422:
                setMsgError("Your email or password are invalid")
                setPassword("");
                break;
              case 401:
                setMsgError("Email or Password are wrong!");
                setPassword("");
                break;
              case 500:
                setMsgError("Server error! Please try again later");
                setPassword("");
                break;
              default:
                setMsgError("Unkwown error! Please try again later");
                setPassword("");
                break;
            }
          }
          else {
            setMsgError("Network error!");
            setPassword("");
          }
        });
    }
  }

  useEffect(() => {
    console.log("RUNNED");
    const cancelTokenSource = axios.CancelToken.source();

    console.log("hi");
    console.log(localLoginStatus);
    if (!localLoginStatus) {
      axios.post(Config.CHECK_VALID_TOKEN, null,
        {
          withCredentials: true,
          cancelToken: cancelTokenSource.token
        })
        .then(async function (response) {
          if (response.status == 200) {
            console.log(" HAHAHAHAHA SUCCESS | NEED NAV LINK TO HOME");
            setIsLogged(true);
            setLocalLoginStatus(true);
          }
        })
        .catch(function (error) {
          console.log("Still do not signed in");
        });
    }
    return () => cancelTokenSource.cancel();
  }, [isLogged]);

  return isLogged ? <Redirect to='/dashboard' />
    : (
    <div className="c-app c-default-layout flex-row align-items-center">
      <CContainer>
        <CRow className="justify-content-center">
          <CCol md="8">
            <CCardGroup>
              <CCard className="p-4">
                <CCardBody>
                  <CForm>
                    <h1>Login</h1>
                    <p className="text-muted">Sign In to your account</p>
                    <CInputGroup className="mb-3">
                      <CInputGroupPrepend>
                        <CInputGroupText>
                          <CIcon name="cil-user" />
                        </CInputGroupText>
                      </CInputGroupPrepend>
                      <CInput type="email" onChange={e => setEmail(e.target.value)} placeholder="Email" autoComplete="email" />
                    </CInputGroup>
                    <CInputGroup className="mb-2">
                      <CInputGroupPrepend>
                        <CInputGroupText>
                          <CIcon name="cil-lock-locked" />
                        </CInputGroupText>
                      </CInputGroupPrepend>
                      <CInput type="password" onChange={e => setPassword(e.target.value)} placeholder="Password" autoComplete="current-password" />
                    </CInputGroup>
                    <div className="mb-4">
                      <span className="small text-danger help-block">{msgError}</span>
                    </div>
                    
                    <CRow>
                      <CCol xs="6">
                        <CButton onClick={() => login()} color="primary" className="px-4">Login</CButton>
                      </CCol>
                      <CCol xs="6" className="text-right">
                        <CButton color="link" className="px-0">Forgot password?</CButton>
                      </CCol>
                    </CRow>
                  </CForm>
                </CCardBody>
              </CCard>
              <CCard className="text-white bg-primary py-5 d-md-down-none" style={{ width: '44%' }}>
                <CCardBody className="text-center">
                  <div>
                    <h2>Sign in</h2>
                    <p>Sign in to using the management system.</p>
                  </div>
                </CCardBody>
              </CCard>
            </CCardGroup>
          </CCol>
        </CRow>
      </CContainer>
    </div>
  )
}

export default Login
