import React from 'react';
import { Button, Drawer } from 'rsuite';
import { useProfile } from '../../context/ProfileContext';

function DashBoard({ onSignOut }) {
  const { profile } = useProfile();
  return (
    <>
      <Drawer.Header>
        <Drawer.Title> DashBoard </Drawer.Title>
      </Drawer.Header>
      <Drawer.Body>
        <h3>Hello , {profile.name}</h3>
      </Drawer.Body>
      <Drawer.Footer>
        <Button color="red" block onClick={onSignOut}>
          Sign Out
        </Button>
      </Drawer.Footer>
    </>
  );
}

export default DashBoard;
