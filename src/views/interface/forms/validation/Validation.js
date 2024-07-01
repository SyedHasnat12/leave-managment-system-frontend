import React from 'react';
import { Card, Col, Row } from 'react-bootstrap';
import BreadcrumbList from 'components/breadcrumb-list/BreadcrumbList';
import HtmlHead from 'components/html-head/HtmlHead';
import Scrollspy from 'components/scrollspy/Scrollspy';
import ValidationFormikBasic from './ValidationFormikBasic';
import ValidationStandard from './ValidationStandard';
import ValidationStandardWithTooltip from './ValidationStandardWithTooltip';
import ValidationCommonRules from './ValidationCommonRules';
import ValidationTopLabel from './ValidationTopLabel';
import ValidationFloatingLabel from './ValidationFloatingLabel';
import ValidationFilled from './ValidationFilled';
import ValidationPositions from './ValidationPositions';
import { TabularDataButtons } from 'views/blocks/tabulardata/TabularDataButtons';

const Validation = () => {
  const title = 'Leave Request Form';
  const description = "A Leave Request Form documents employees' time off details, including leave type, dates, and reasons, requiring managerial for record-keeping.";

  const breadcrumbs = [
    { to: '', text: 'Home' },
    // { to: 'interface', text: 'Interface' },
    { to: 'interface/forms', title: 'Leave Request Form' },
  ];

  const scrollspyItems = [
    { id: 'title', text: 'Title' },
    { id: 'standard', text: 'Standard' },
    { id: 'standardWithTooltip', text: 'Standard With Tooltip' },
    { id: 'formikBasic', text: 'Formik Basic' },
    { id: 'commonRules', text: 'Common Rules' },
    { id: 'topLabel', text: 'Top Label' },
    { id: 'floatingLabel', text: 'Floating Label' },
    { id: 'filled', text: 'Filled' },
    { id: 'positions', text: 'Positions' },
  ];

  return (
    <>
      <HtmlHead title={title} description={description} />
      <Row>
        <Col>
          {/* Title Start */}
          <section className="scroll-section" id="title">
            <div className="page-title-container">
              <h1 className="mb-0 pb-0 display-4">{title}</h1>
              <BreadcrumbList items={breadcrumbs} />
            </div>
            <Card className="mb-5" body>
              <Card.Text>{description}</Card.Text>
            </Card>
          </section>

          <section className="scroll-section" id="filled">
            <h2 className="small-title">Leave Request Form</h2>
            <Card body className="mb-5">
              <ValidationFilled />
            </Card>
          </section>
          <section className="scroll-section" id="buttons">
            <h2 className="small-title">List of Submitted Requests</h2>
            <Row className="mb-6">
              <Col xl="12">
                <TabularDataButtons />
              </Col>
            </Row>
          </section>

        </Col>
        {/* <Scrollspy items={scrollspyItems} /> */}
      </Row>
    </>
  );
};

export default Validation;
