import React, { useState } from 'react';
import { Button, Row, Col, Card, Dropdown, Badge } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import { OverlayScrollbarsComponent } from 'overlayscrollbars-react';
import HtmlHead from 'components/html-head/HtmlHead';
import BreadcrumbList from 'components/breadcrumb-list/BreadcrumbList';
import CsLineIcons from 'cs-line-icons/CsLineIcons';
import ChartCustomHorizontalTooltip from 'views/interface/plugins/chart/ChartCustomHorizontalTooltip';
import ChartSmallLine1 from 'views/interface/plugins/chart/ChartSmallLine1';
import ChartSmallLine2 from 'views/interface/plugins/chart/ChartSmallLine2';
import ChartSmallLine3 from 'views/interface/plugins/chart/ChartSmallLine3';
import ChartSmallLine4 from 'views/interface/plugins/chart/ChartSmallLine4';
import ChartBubble from 'views/interface/plugins/chart/ChartBubble';
import ChartSmallDoughnutChart1 from 'views/interface/plugins/chart/ChartSmallDoughnutChart1';
import ChartSmallDoughnutChart2 from 'views/interface/plugins/chart/ChartSmallDoughnutChart2';
import ChartSmallDoughnutChart3 from 'views/interface/plugins/chart/ChartSmallDoughnutChart3';
import ChartSmallDoughnutChart4 from 'views/interface/plugins/chart/ChartSmallDoughnutChart4';
import ChartSmallDoughnutChart5 from 'views/interface/plugins/chart/ChartSmallDoughnutChart5';
import ChartSmallDoughnutChart6 from 'views/interface/plugins/chart/ChartSmallDoughnutChart6';
import { useSelector } from 'react-redux';
import { TabularDataBadges } from 'views/blocks/tabulardata/TabularDataBadges';

const DashboardsAnalytic = () => {
  const title = 'Leave Management Dashboard';
  const description = 'Analytic Dashboard';

  const breadcrumbs = [
    { to: '', text: 'Home' },
    { to: 'dashboards', text: 'Dashboards' },
  ];


  const { isLogin, currentUser } = useSelector((state) => state.auth);

  const [isShow , setIsShow ] = useState(currentUser.role !== 'user'); 

  return (
    <>
      <HtmlHead title={title} description={description} />
      <div className="page-title-container">
        <Row>
          <Col md="7">
            <h1 className="mb-0 pb-0 display-4">{title}</h1>
            <BreadcrumbList items={breadcrumbs} />
          </Col>
          </Row>
      </div>

      <Row>
        { isShow &&
          <Col lg="12">
            <div className="d-flex">
              <Dropdown>
                <Dropdown.Toggle className="small-title p-0 align-top h-auto me-2" variant="link">
                  Report
                </Dropdown.Toggle>
                <Dropdown.Menu>
                  <Dropdown.Item>Weekly</Dropdown.Item>
                  <Dropdown.Item>Monthly</Dropdown.Item>
                  <Dropdown.Item>Yearly</Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>
              <h2 className="small-title">Leave</h2>
            </div>
            
            <Card className="mb-5 sh-40">
              <Card.Body>
                <ChartCustomHorizontalTooltip />
              </Card.Body>
            </Card>
        
          </Col>
        }

        
        <Col lg="6" className="">
        <h2 className="small-title">Leaves Report</h2>
        <div className="mb-5">
            <Row className="g-2">
              <Col sm="6">
                <Card className="sh-11 hover-scale-up cursor-pointer">
                  <Card.Body className="h-100 py-3 align-items-center">
                    <Row className="g-0 h-100 align-items-center">
                      <Col xs="auto" className="pe-3">
                        <div className="bg-gradient-light sh-5 sw-5 rounded-xl d-flex justify-content-center align-items-center">
                          <CsLineIcons icon="navigate-diagonal" className="text-white" />
                        </div>
                      </Col>
                      <Col>
                        <Row className="gx-2 d-flex align-content-center">
                          <Col xs="12" className="col-12 d-flex">
                            <div className="d-flex align-items-center lh-1-25">Total Leaves</div>
                          </Col>
                          <Col xl="auto" className="col-12">
                            <div className="cta-2 text-primary">22</div>
                          </Col>
                        </Row>
                      </Col>
                    </Row>
                  </Card.Body>
                </Card>
              </Col>
              <Col sm="6">
                <Card className="sh-11 hover-scale-up cursor-pointer">
                  <Card.Body className="h-100 py-3 align-items-center">
                    <Row className="g-0 h-100 align-items-center">
                      <Col xs="auto" className="pe-3">
                        <div className="bg-gradient-light sh-5 sw-5 rounded-xl d-flex justify-content-center align-items-center">
                          <CsLineIcons icon="check" className="text-white" />
                        </div>
                      </Col>
                      <Col>
                        <Row className="gx-2 d-flex align-content-center">
                          <Col xs="12" className="col-12 d-flex">
                            <div className="d-flex align-items-center lh-1-25">Unpaid Leaves</div>
                          </Col>
                          <Col xl="auto" className="col-12">
                            <div className="cta-2 text-primary">10</div>
                          </Col>
                        </Row>
                      </Col>
                    </Row>
                  </Card.Body>
                </Card>
              </Col>
              <Col sm="6">
                <Card className="sh-11 hover-scale-up cursor-pointer">
                  <Card.Body className="h-100 py-3 align-items-center">
                    <Row className="g-0 h-100 align-items-center">
                      <Col xs="auto" className="pe-3">
                        <div className="bg-gradient-light sh-5 sw-5 rounded-xl d-flex justify-content-center align-items-center">
                          <CsLineIcons icon="alarm" className="text-white" />
                        </div>
                      </Col>
                      <Col>
                        <Row className="gx-2 d-flex align-content-center">
                          <Col xs="12" className="col-12 d-flex">
                            <div className="d-flex align-items-center lh-1-25">Sick Leaves</div>
                          </Col>
                          <Col xl="auto" className="col-12">
                            <div className="cta-2 text-primary">4</div>
                          </Col>
                        </Row>
                      </Col>
                    </Row>
                  </Card.Body>
                </Card>
              </Col>
              <Col sm="6">
                <Card className="sh-11 hover-scale-up cursor-pointer">
                  <Card.Body className="h-100 py-3 align-items-center">
                    <Row className="g-0 h-100 align-items-center">
                      <Col xs="auto" className="pe-3">
                        <div className="bg-gradient-light sh-5 sw-5 rounded-xl d-flex justify-content-center align-items-center">
                          <CsLineIcons icon="sync-horizontal" className="text-white" />
                        </div>
                      </Col>
                      <Col>
                        <Row className="gx-2 d-flex align-content-center">
                          <Col xs="12" className="col-12 d-flex">
                            <div className="d-flex align-items-center lh-1-25">Other Leaves</div>
                          </Col>
                          <Col xl="auto" className="col-12">
                            <div className="cta-2 text-primary">8</div>
                          </Col>
                        </Row>
                      </Col>
                    </Row>
                  </Card.Body>
                </Card>
              </Col>
            </Row>
        </div>
        </Col>
        { isShow && 
          <Col lg="6" className="mb-5">
            <div className="d-flex justify-content-between">
              <h2 className="small-title">Today's Leave Request</h2>
              <Button variant="background-alternate" size="xs" className="btn-icon btn-icon-end p-0 text-small">
                <span className="align-bottom">View More</span> <CsLineIcons icon="chevron-right" className="align-middle" size="12" />
              </Button>
            </div>
            <div className="mb-n2">
              <Card className="mb-2 sh-10 sh-md-8">
                <Card.Body className="pt-0 pb-0 h-100">
                  <Row className="g-0 h-100 align-content-center">
                    <Col md="4" className="d-flex align-items-center mb-2 mb-md-0">
                      <NavLink to="/" className="body-link text-truncate">
                        7871 | Employee Name
                      </NavLink>
                    </Col>
                    <Col md="2" className="d-flex align-items-center text-muted text-medium mb-1 mb-md-0">
                      <Badge bg="outline-tertiary" className="me-1">
                        Unpaid Leave
                      </Badge>
                    </Col>
                    <Col md="3" className="d-flex align-items-center text-medium text-success justify-content-center">
                      {/* <CsLineIcons icon="arrow-bottom" className="me-1" size="14" /> */}
                      <span className="text-medium">5/21/2024</span>
                    </Col>
                    <Col md="3" className="d-flex align-items-center text-medium text-success justify-content-center">
                      {/* <CsLineIcons icon="arrow-bottom" className="me-1" size="14" /> */}
                      <span className="text-medium">5/21/2024</span>
                    </Col>
                    {/* <Col md="2" className="d-flex align-items-center justify-content-end text-muted text-medium">
                      <span>5/21/2024</span>
                    </Col> */}
                  </Row>
                </Card.Body>
              </Card>
              <Card className="mb-2 sh-10 sh-md-8">
                <Card.Body className="pt-0 pb-0 h-100">
                  <Row className="g-0 h-100 align-content-center">
                    <Col md="4" className="d-flex align-items-center mb-2 mb-md-0">
                      <NavLink to="/" className="body-link text-truncate">
                        7871 | Employee Name
                      </NavLink>
                    </Col>
                    <Col md="2" className="d-flex align-items-center text-muted text-medium mb-1 mb-md-0">
                      <Badge bg="outline-tertiary" className="me-1">
                        Unpaid Leave
                      </Badge>
                    </Col>
                    <Col md="3" className="d-flex align-items-center text-medium text-success justify-content-center">
                      {/* <CsLineIcons icon="arrow-bottom" className="me-1" size="14" /> */}
                      <span className="text-medium">5/21/2024</span>
                    </Col>
                    <Col md="3" className="d-flex align-items-center text-medium text-success justify-content-center">
                      {/* <CsLineIcons icon="arrow-bottom" className="me-1" size="14" /> */}
                      <span className="text-medium">5/21/2024</span>
                    </Col>
                    {/* <Col md="2" className="d-flex align-items-center justify-content-end text-muted text-medium">
                      <span>5/21/2024</span>
                    </Col> */}
                  </Row>
                </Card.Body>
              </Card>
              <Card className="mb-2 sh-10 sh-md-8">
                <Card.Body className="pt-0 pb-0 h-100">
                  <Row className="g-0 h-100 align-content-center">
                    <Col md="4" className="d-flex align-items-center mb-2 mb-md-0">
                      <NavLink to="/" className="body-link text-truncate">
                        7871 | Employee Name
                      </NavLink>
                    </Col>
                    <Col md="2" className="d-flex align-items-center text-muted text-medium mb-1 mb-md-0">
                      <Badge bg="outline-tertiary" className="me-1">
                        Unpaid Leave
                      </Badge>
                    </Col>
                    <Col md="3" className="d-flex align-items-center text-medium text-success justify-content-center">
                      {/* <CsLineIcons icon="arrow-bottom" className="me-1" size="14" /> */}
                      <span className="text-medium">5/21/2024</span>
                    </Col>
                    <Col md="3" className="d-flex align-items-center text-medium text-success justify-content-center">
                      {/* <CsLineIcons icon="arrow-bottom" className="me-1" size="14" /> */}
                      <span className="text-medium">5/21/2024</span>
                    </Col>
                    {/* <Col md="2" className="d-flex align-items-center justify-content-end text-muted text-medium">
                      <span>5/21/2024</span>
                    </Col> */}
                  </Row>
                </Card.Body>
              </Card>
              <Card className="mb-2 sh-10 sh-md-8">
                <Card.Body className="pt-0 pb-0 h-100">
                  <Row className="g-0 h-100 align-content-center">
                    <Col md="4" className="d-flex align-items-center mb-2 mb-md-0">
                      <NavLink to="/" className="body-link text-truncate">
                        7871 | Employee Name
                      </NavLink>
                    </Col>
                    <Col md="2" className="d-flex align-items-center text-muted text-medium mb-1 mb-md-0">
                      <Badge bg="outline-tertiary" className="me-1">
                        Unpaid Leave
                      </Badge>
                    </Col>
                    <Col md="3" className="d-flex align-items-center text-medium text-success justify-content-center">
                      {/* <CsLineIcons icon="arrow-bottom" className="me-1" size="14" /> */}
                      <span className="text-medium">5/21/2024</span>
                    </Col>
                    <Col md="3" className="d-flex align-items-center text-medium text-success justify-content-center">
                      {/* <CsLineIcons icon="arrow-bottom" className="me-1" size="14" /> */}
                      <span className="text-medium">5/21/2024</span>
                    </Col>
                    {/* <Col md="2" className="d-flex align-items-center justify-content-end text-muted text-medium">
                      <span>5/21/2024</span>
                    </Col> */}
                  </Row>
                </Card.Body>
              </Card>
              
            </div>
          </Col>
        }

        <Col md="6" lg="6">
          <section className="scroll-section" id="buttons">
              <h2 className="small-title">This Month Holiday's</h2>
              <Row className="mb-5">
                <Col xl="12">
                  <TabularDataBadges />
                </Col>
              </Row>
        </section>
        </Col>
        
        
      </Row>

      {/* <Row>
        <Col xl="6" className="mb-5">
          <h2 className="small-title">Leaves</h2>
          <Row className="g-2">
            <Col md="6">
              <Card className="sh-13">
                <Card.Body className="py-0 d-flex align-items-center">
                  <ChartSmallDoughnutChart1 />
                </Card.Body>
              </Card>
            </Col>
            <Col md="6">
              <Card className="sh-13">
                <Card.Body className="py-0 d-flex align-items-center">
                  <ChartSmallDoughnutChart2 />
                </Card.Body>
              </Card>
            </Col>
            <Col md="6">
              <Card className="sh-13">
                <Card.Body className="py-0 d-flex align-items-center">
                  <ChartSmallDoughnutChart3 />
                </Card.Body>
              </Card>
            </Col>
            <Col md="6">
              <Card className="sh-13">
                <Card.Body className="py-0 d-flex align-items-center">
                  <ChartSmallDoughnutChart4 />
                </Card.Body>
              </Card>
            </Col>
            <Col md="6">
              <Card className="sh-13">
                <Card.Body className="py-0 d-flex align-items-center">
                  <ChartSmallDoughnutChart5 />
                </Card.Body>
              </Card>
            </Col>
            <Col md="6">
              <Card className="sh-13">
                <Card.Body className="py-0 d-flex align-items-center">
                  <ChartSmallDoughnutChart6 />
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Col>

      </Row> */}

    
    </>
  );
};

export default DashboardsAnalytic;
