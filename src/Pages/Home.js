import React from 'react';
import Sidebar from '../Components/Sidebar';
import { Grid, Row, Col } from 'rsuite';

function Home() {
  return (
    <Grid fluid className="h-100">
      <Row>
        <Col xs={24} md={8}>
          <Sidebar />
        </Col>
      </Row>
    </Grid>
  );
}

export default Home;
