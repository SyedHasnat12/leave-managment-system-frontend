import React from 'react';
import { NavLink, useHistory } from 'react-router-dom';
import { Button, Form } from 'react-bootstrap';
import * as Yup from 'yup';
import { useFormik } from 'formik';
import LayoutFullpage from 'layout/LayoutFullpage';
import CsLineIcons from 'cs-line-icons/CsLineIcons';
import HtmlHead from 'components/html-head/HtmlHead';
import { useSnackbar } from 'notistack';


import axios from 'axios';
import { API_URL } from 'config';
import { setCurrentUser } from 'auth/authSlice';
import { useDispatch } from 'react-redux';

const Login = () => {
  const title = 'Login';
  const description = 'Login Page';
  const history = useHistory();
  const { enqueueSnackbar } = useSnackbar()
  const dispatch = useDispatch();

  const validationSchema = Yup.object().shape({
    email: Yup.string().email().required('Email is required'),
    password: Yup.string().min(6, 'Must be at least 6 chars!').required('Password is required'),
  });
  const initialValues = { email: '', password: '' };
  const onSubmit = (values , { setFieldError }) => {
    
    const body = {
      "email": values?.email,
      "password": values?.password
    }

    axios.post(`${API_URL}/User/login` , body).then((res) => {
      console.log('submit form', res)
      const {isSuccess , message , Token , user} = res?.data;
      if(isSuccess){
        enqueueSnackbar(message , { 
          variant: 'success',
        })
        user.name = user.firstName
        localStorage.setItem('authToken' , Token);
        localStorage.setItem('userId' , user?.userId);
        dispatch(setCurrentUser(user));
        // history.push('/dashboards/default')
        history.push('/leave_request')
      } else {
        enqueueSnackbar("Invalid Credentials. Please Try Again " , { 
          variant: 'error',
        })
      }
      

    }).catch((error) => {
      if (error.response && error.response.status === 401) {
        setFieldError('password', 'Invalid username or password');
      } else {
        setFieldError('password', 'An unexpected error occurred. Please try again later.');
      }
    })
    
    


  };

  const formik = useFormik({ initialValues, validationSchema, onSubmit });
  const { handleSubmit, handleChange, values, touched, errors } = formik;

  const leftSide = (
    <div className="min-h-100 d-flex align-items-center">
      <div className="w-100 w-lg-75 w-xxl-50">
        <div>
          <div className="mb-5">
            <h1 className="display-3 text-white">YOUR DIGITAL INNOVATION PARTNER</h1>
            {/* <h1 className="display-3 text-white">Ready for Your Project</h1> */}
          </div>
          <p className="h6 text-white lh-1-5 mb-5">
          CNS is a technology company that powers the future by providing digital solutions essential to support all enterprise and human development. While growing and managing a robust pool of supplier-partners for the benefit of our clients has always been a priority, we are constantly re-inventing ourselves.
          </p>
          <div className="mb-5">
            <Button size="lg" variant="outline-white" href="/">
              Learn More
            </Button>
          </div>
        </div>
      </div>
    </div>
  );

  const rightSide = (
    <div className="sw-lg-70 min-h-100 bg-foreground d-flex justify-content-center align-items-center shadow-deep py-5 full-page-content-right-border">
      <div className="sw-lg-50 px-5">
        <div className="sh-11">
          <NavLink to="/">
            <div className="logo-default" />
          </NavLink>
        </div>
        <div className="mb-5">
          <h2 className="cta-1 mb-0 text-primary">Welcome,</h2>
          <h2 className="cta-1 text-primary">let's get started!</h2>
        </div>
        <div className="mb-5">
          <p className="h6">Please use your credentials to login.</p>
          <p className="h6">
            If you are not a member, please <NavLink to="/register">register</NavLink>.
          </p>
        </div>
        <div>
          <form id="loginForm" className="tooltip-end-bottom" onSubmit={handleSubmit}>
            <div className="mb-3 filled form-group tooltip-end-top">
              <CsLineIcons icon="email" />
              <Form.Control type="text" name="email" placeholder="Email" value={values.email} onChange={handleChange} />
              {errors.email && touched.email && <div className="d-block invalid-tooltip">{errors.email}</div>}
            </div>
            <div className="mb-3 filled form-group tooltip-end-top">
              <CsLineIcons icon="lock-off" />
              <Form.Control type="password" name="password" onChange={handleChange} value={values.password} placeholder="Password" />
              <NavLink className="text-small position-absolute t-3 e-3" to="/forgot-password">
                Forgot?
              </NavLink>
              {errors.password && touched.password && <div className="d-block invalid-tooltip">{errors.password}</div>}
            </div>
            <Button size="lg" type="submit">
              Login
            </Button>
          </form>
        </div>
      </div>
    </div>
  );

  return (
    <>
      <HtmlHead title={title} description={description} />
      <LayoutFullpage left={leftSide} right={rightSide} />
    </>
  );
};

export default Login;
