/* eslint-disable */
import React from 'react';
import { RoomsProvider } from '../context/RoomContext';
import Sidebar from '../Components/Sidebar';
import { Grid, Row, Col } from 'rsuite';
import { Routes, Route } from 'react-router-dom';
import Chat from './Chat';
import { useMediaQuery } from '../customHooks/customHooks';
import { useMatch } from 'react-router';

function Home() {
  const isDesktop = useMediaQuery('(min-width:992px)');
  const isExact = useMatch('/');
  const canRenderSidebar = isExact || isDesktop;
  return (
    <RoomsProvider>
      <Grid fluid className="h-100">
        <Row className="h-100">
          {canRenderSidebar && (
            <Col xs={24} md={8} className="h-100">
              <Sidebar />
            </Col>
          )}

          <Routes>
            <Route
              path="/chat/:chatId"
              element={
                <Col xs={24} md={16} className="h-100">
                  <Chat />
                </Col>
              }
            />
            <Route
              path="*"
              element={
                isDesktop && (
                  <Col xs={24} md={16} className="h-100">
                    <h6 className="text-center mt-page">Please select chat</h6>
                  </Col>
                )
              }
            />
          </Routes>
        </Row>
      </Grid>
    </RoomsProvider>
  );
}

export default Home;
