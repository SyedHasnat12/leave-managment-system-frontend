import React, { useEffect, useState } from 'react';
import { Button, Col, Form, Row } from 'react-bootstrap';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import Select from 'react-select';
import CsLineIcons from 'cs-line-icons/CsLineIcons';
import { useDispatch, useSelector } from 'react-redux';
import axios from 'axios';
import { API_URL } from 'config';
import {  useSnackbar } from 'notistack'


const ValidationFilled = () => {

  const { enqueueSnackbar } = useSnackbar()
  const [excludedDates, setExcludedDates] = useState([]);


  const validationSchema = Yup.object().shape({
    name: Yup.string().required('Name is required'),
    empNo: Yup.string().required('Email is required'),
    leaveType: Yup.string().required('Leave Type is required'),
    startDate: Yup.date().nullable().required('Start Date is required'),
    endDate: Yup.date().nullable().required('End Date is required'),
  });
  const { isLogin, currentUser } = useSelector((state) => state.auth);
  const initialValues = { name: currentUser?.name, empNo: currentUser?.employeeNo, leaveType: '', startDate: null ,endDate: null  };
  const onSubmit = (values) => {
    let body = {
      "userId" : currentUser?.userId,
      "startDate" :values?.startDate,
      "endDate" : values?.endDate,
      "leaveType" : values?.leaveType
    }

    axios.post(`${API_URL}/Leave/insertLeave` , body).then((res) => {
      console.log('submit form', res)
      const {isSuccess , message} = res.data;
      
      if(isSuccess){
        enqueueSnackbar(message , { 
          variant: 'success',
        })
        resetForm();
        setSelectValue('');
      } else {
        enqueueSnackbar("There is some error to submit Leave Request" , { 
          variant: 'error',
        })
      }
      
    });
  }
  const getHolidays = () => {
    axios.get(`${API_URL}/Holiday/getHolidays`).then((res) => {
      console.log('submit form', res)
      const {isSuccess , message , data} = res.data;
      if(isSuccess){
        let ex = data.map(holiday => new Date(holiday.date));
        setExcludedDates(ex);
      } else {
        enqueueSnackbar("There is some error to submit Leave Request" , { 
          variant: 'error',
        })
      }
      
    });
  }

  const formik = useFormik({ initialValues, validationSchema, onSubmit });
  const { handleSubmit, handleChange, values, touched, errors, setFieldValue , resetForm  } = formik;


  useEffect(() => {
    getHolidays();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);


  const isWeekday = (date) => {
    const day = date.getDay();
    return day !== 0 && day !== 6;
  };
  // Select
  const [selectValue, setSelectValue] = useState();
  const options = [
    { value: 'Annual Leave', label: 'Annual Leave' },
    { value: 'Sick Leave', label: 'Sick Leave' },
    { value: 'Unpaid Leave', label: 'Unpaid Leave' },
    { value: 'Other', label: 'Other' },
  ];
  const selectOnChange = (selectedOption) => {
    setFieldValue('leaveType', selectedOption.value);
    setSelectValue(selectedOption);
  };

  // Datepicker
  const startDateOnChange = (date) => {
    setFieldValue("startDate", new Date(date));
  };
  // Datepicker
  const endDateOnChange = (date) => {
    setFieldValue("endDate", new Date(date));
  };

  return (
    <Form onSubmit={handleSubmit} className="tooltip-end-top">
      <Row>
        <Col md="4">
          <div className="mb-3 filled">
            <CsLineIcons icon="lock-on" />
            <Form.Control type="number" name="empNo" value={values.empNo} onChange={handleChange} placeholder="Employee Number" />
            {errors.empNo && touched.empNo && <div className="error">{errors.empNo}</div>}
          </div>
        </Col>
        <Col>
          <div className="mb-3 filled">
            <CsLineIcons icon="user" />
            <Form.Control type="text" name="name" value={values.name} onChange={handleChange} placeholder="Name" />
            {errors.name && touched.name && <div className="error">{errors.name}</div>}
          </div>
        </Col>
      </Row>
      <Row className="g-3">
        <Col md="6">
          <div className="mb-3 filled">
            <CsLineIcons icon="calendar" />
            <DatePicker filterDate={isWeekday} excludeDates={excludedDates} className="form-control" name="date" selected={values.startDate} onChange={startDateOnChange} placeholderText="Start Date" />
            {errors.startDate && touched.startDate && <div className="error">{errors.startDate}</div>}
          </div>
        </Col>
        <Col md="6">
          <div className="mb-3 filled">
            <CsLineIcons icon="calendar" />
            <DatePicker filterDate={isWeekday} excludeDates={excludedDates} className="form-control" name="date" selected={values.endDate} onChange={endDateOnChange} placeholderText="End Date" />
            {errors.endDate && touched.endDate && <div className="error">{errors.endDate}</div>}
          </div>
        </Col>
      </Row>
      <div className="mb-3 filled">
        <CsLineIcons icon="loaf" />
        <Select classNamePrefix="react-select" name="select" options={options} value={selectValue} onChange={selectOnChange} placeholder="Select Leave Type" />
        {errors.leaveType && touched.leaveType && <div className="error">{errors.leaveType}</div>}
      </div>
      <Button type="submit" variant="primary">
        Submit
      </Button>
    </Form>
  );
};

export default ValidationFilled;
