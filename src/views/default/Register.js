import React, { useState } from 'react';
import { NavLink , useHistory } from 'react-router-dom';
import { Button, Col, Form, Row } from 'react-bootstrap';
import * as Yup from 'yup';
import { useFormik } from 'formik';
import LayoutFullpage from 'layout/LayoutFullpage';
import CsLineIcons from 'cs-line-icons/CsLineIcons';
import HtmlHead from 'components/html-head/HtmlHead';
import { USER_ROLE } from 'constants.js';
import Select from 'react-select';
import { API_URL } from 'config';
import axios from 'axios';
import { useSnackbar } from 'notistack';

const Register = () => {
  const { enqueueSnackbar } = useSnackbar();
  const title = 'Register';
  const description = 'Register Page';

  const history = useHistory();

  const validationSchema = Yup.object().shape({
    employeeNo: Yup.string().required('employee No is required'),
    firstName: Yup.string().required('First Name is required'),
    lastName: Yup.string().required('Last Name is required'),
    email: Yup.string().email().required('Email is required'),
    password: Yup.string().min(6, 'Must be at least 6 chars!').required('Password is required'),
    role: Yup.string().required('Role is required'),
    managerId: Yup.string().required('Manage Id is required'),
  });
  const initialValues = { name: '', email: '', password: '', terms: false };
  const onSubmit = (values , { setFieldError }) => {
    const body = {
      "employeeNo": values?.employeeNo,
      "firstName": values?.firstName,
      "lastName": values?.lastName,
      "email": values?.email,
      "managerId": values?.managerId,
      "role": values?.role,
      "password": values?.password
    }

    axios.post(`${API_URL}/User/register` , body).then((res) => {
      const {isSuccess , message} = res.data;
      if(isSuccess){
        enqueueSnackbar(message , { 
          variant: 'success',
        })
        history.push('/login')
      } else {
        enqueueSnackbar("There is some error to register this user. Please try again" , { 
          variant: 'error',
        })
      }
    }).catch((error) => {  
      setFieldError('employeeNo', 'Already Exist EmployeeNo');
      enqueueSnackbar("There is some error to register this user. Please try again" , { 
        variant: 'error',
      })
    });
  }
  const formik = useFormik({ initialValues, validationSchema, onSubmit });
  const { handleSubmit, handleChange, values, touched, errors , setFieldValue } = formik;

  const [selectValue, setSelectValue] = useState();
  const options = [
    { value: USER_ROLE.User, label: USER_ROLE.User },
    { value: USER_ROLE.Manager, label: USER_ROLE.Manager }
  ];
  const selectOnChange = (selectedOption) => {
    setFieldValue('role', selectedOption.value);
    setSelectValue(selectedOption);
  };
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
          <h2 className="cta-1 text-primary">let's get the ball rolling!</h2>
        </div>
        <div className="mb-5">
          <p className="h6">
            If you are a member, please <NavLink to="/login">login</NavLink>.
          </p>
        </div>
        <div>
          <form id="registerForm" className="tooltip-end-bottom" onSubmit={handleSubmit}>
          <Row>
            <Col md="6">
              <div className="mb-3 filled form-group tooltip-end-top">
                  <CsLineIcons icon="user" />
                  <Form.Control type="text" name="employeeNo" placeholder="employee no" value={values.employeeNo} onChange={handleChange} />
                  {errors.employeeNo && touched.employeeNo && <div className="d-block invalid-tooltip">{errors.employeeNo}</div>}
              </div>
            </Col>
            <Col md="6">
              <div className="mb-3 filled form-group tooltip-end-top">
                  <CsLineIcons icon="user" />
                  <Form.Control type="text" name="managerId" placeholder="manager id" value={values.managerId} onChange={handleChange} />
                  {errors.managerId && touched.managerId && <div className="d-block invalid-tooltip">{errors.managerId}</div>}
                </div>
            </Col>
          </Row>

          <Row>
            <Col md="6">
            <div className="mb-3 filled form-group tooltip-end-top">
              <CsLineIcons icon="user" />
              <Form.Control type="text" name="firstName" placeholder="first name" value={values.firstName} onChange={handleChange} />
              {errors.firstName && touched.firstName && <div className="d-block invalid-tooltip">{errors.firstName}</div>}
            </div>
            </Col>
            <Col md="6">
            <div className="mb-3 filled form-group tooltip-end-top">
              <CsLineIcons icon="user" />
              <Form.Control type="text" name="lastName" placeholder="last name" value={values.lastName} onChange={handleChange} />
              {errors.lastName && touched.lastName && <div className="d-block invalid-tooltip">{errors.lastName}</div>}
            </div>
            </Col>
          </Row>
            <div className="mb-3 filled form-group tooltip-end-top">
              <CsLineIcons icon="email" />
              <Form.Control type="text" name="email" placeholder="Email" value={values.email} onChange={handleChange} />
              {errors.email && touched.email && <div className="d-block invalid-tooltip">{errors.email}</div>}
            </div>
            <div className="mb-3 filled form-group tooltip-end-top">
              <CsLineIcons icon="lock-off" />
              <Form.Control type="password" name="password" onChange={handleChange} value={values.password} placeholder="Password" />
              {errors.password && touched.password && <div className="d-block invalid-tooltip">{errors.password}</div>}
            </div>
            <div className="mb-3 filled">
              <CsLineIcons icon="loaf" />
              <Select classNamePrefix="react-select" name="select" options={options} value={selectValue} onChange={selectOnChange} placeholder="Select Role" />
              {errors.role && touched.role && <div className="error">{errors.role}</div>}
            </div>
            <Button size="lg" type="submit">
              Signup
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

export default Register;
