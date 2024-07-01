import React, { useEffect, useState } from 'react';
import { Button, Card, Col, Row } from 'react-bootstrap';
import CsLineIcons from 'cs-line-icons/CsLineIcons';
import { useSelector } from 'react-redux';
import axios from 'axios';
import { API_URL } from 'config';
import { useSnackbar } from 'notistack';

export const TabularDataButtons = () => {

  const { isLogin, currentUser } = useSelector((state) => state.auth);

  const [isShow , setIsShow ] = useState(currentUser.role != 'user'); 

  const [leavesRequest, setLeaveRequest] = useState([]);

  const { enqueueSnackbar } = useSnackbar();

  const getLeaveList = () => {
    axios.get(`${API_URL}/Leave/getLeave/${currentUser?.userId}`).then((res) => {
    // axios.get(`${API_URL}/Leave/getLeave/1`).then((res) => {
      const {isSuccess , message , data} = res.data;
      
      if(isSuccess){
        // enqueueSnackbar(message , { 
        //   variant: 'success',
        // })
        setLeaveRequest(data)
      } else {
        enqueueSnackbar("There is some error to submit Leave Request" , { 
          variant: 'error',
        })
        
      }
      
    });
  }

  useEffect(() => {
    getLeaveList();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className="mb-n2">
      {leavesRequest.map((emp, index) => (
        <Card key={index} className="mb-2">
        <Row className="g-0 sh-14 sh-md-10">
          <Col xs="auto" className="h-100">
            <img src="/img/product/small/product-2.webp" alt="user profile" className="card-img card-img-horizontal sw-11" />
          </Col>
          <Col>
            <Card.Body className="pt-0 pb-0 h-100">
              <Row style={{ flexShrink: 'initial !important' }}  className="g-0 h-100 align-content-center flex-nowrap align-items-center">
                <Col sx="3" md="3" className="d-flex flex-column mb-2 mb-md-0">
                  <div className="text-large text-muted text-truncate">{currentUser?.employeeNo}</div>
                  <div>{currentUser?.name}</div>
                  {/* <div className="text-small text-muted text-truncate"></div> */}
                </Col>
                <Col sx="2"  md={isShow ? 2 : 4} className="d-flex flex-column mb-2 mb-md-0">
                  <div>Leave Type</div>
                  <div className="text-medium text-muted text-truncate">{emp?.leaveType}</div>
                  {/* <div className="text-small text-muted text-truncate"></div> */}
                </Col>
                <Col sx="3"  md="3" className="d-flex flex-column mb-2 mb-md-0">
                  <div>Start Date</div>
                  <div className="text-medium text-muted text-truncate">{new Date(emp?.startDate).toLocaleDateString()}</div>
                  {/* <div className="text-small text-muted text-truncate"></div> */}
                </Col>
                <Col sx="3" md="3" className="d-flex flex-column mb-2 mb-md-0">
                  <div>End Date</div>
                  <div className="text-medium text-muted text-truncate">{new Date(emp?.endDate).toLocaleDateString()}</div>
                  {/* <div className="text-small text-muted text-truncate"></div> */}
                </Col>
                { isShow &&
                    <Col sx="1" md="1" className="d-flex align-items-center justify-content-md-end">
                      <Button variant="outline-primary" size="sm" className="btn-icon btn-icon-start ms-1">
                        <CsLineIcons icon="edit-square" width="15" height="15" className="me-xxl-2" />
                        <span className="d-none d-xxl-inline-block">Edit</span>
                      </Button>
                      <Button variant="outline-primary" size="sm" className="btn-icon btn-icon-start ms-1">
                        <CsLineIcons icon="bin" width="15" height="15" className="me-xxl-2" />
                        <span className="d-none d-xxl-inline-block">Delete</span>
                      </Button>
                    </Col>
                }
              </Row>
            </Card.Body>
          </Col>
        </Row>
        </Card>
      ))}
      
    </div>
  );
};
