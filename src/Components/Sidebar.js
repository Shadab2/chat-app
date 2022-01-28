/* eslint-disable */
import React from 'react';
import { Divider } from 'rsuite';
import CreateRoomButtonModal from './DashBoard/CreateRoomButtonModal';
import DashBoardToggle from './DashBoard/DashBoardToggle';
import ChatRoomList from './Rooms/ChatRoom';

function Sidebar() {
  return (
    <div className="h-100 pt-2">
      <div>
        <DashBoardToggle />
        <CreateRoomButtonModal />
        <Divider>Join Conversation</Divider>
        <ChatRoomList />
      </div>
      bottom
    </div>
  );
}

export default Sidebar;
