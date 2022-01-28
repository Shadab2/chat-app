import React, { useCallback } from 'react';
import { Alert, Button, Drawer, Icon } from 'rsuite';
import { useModalState, useMediaQuery } from '../../customHooks/customHooks';
import DashBoard from '.';
import { auth } from '../../firebase';

function DashBoardToggle() {
  const { isOpen, close, open } = useModalState();
  const isMobile = useMediaQuery('(max-width: 992px)');

  const onSignOut = useCallback(() => {
    auth.signOut();
    Alert.info('Signet Out', 4000);
    close();
  }, [close]);
  return (
    <>
      <Button block color="blue" onClick={open}>
        <Icon icon="dashboard" /> DashBoard
      </Button>
      <Drawer full={isMobile} show={isOpen} onHide={close} placement="left">
        <DashBoard onSignOut={onSignOut} />
      </Drawer>
    </>
  );
}

export default DashBoardToggle;
