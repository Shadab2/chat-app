/* eslint-disable */
import React from 'react';
import { RoomsProvider } from '../context/RoomContext';
import Sidebar from '../Components/Sidebar';
import { Grid, Row, Col } from 'rsuite';

function Home() {
  return (
    <RoomsProvider>
      <Grid fluid className="h-100">
        <Row className="h-100">
          <Col xs={24} md={8} className="h-100">
            <Sidebar />
          </Col>
        </Row>
      </Grid>
    </RoomsProvider>
  );
}

export default Home;
