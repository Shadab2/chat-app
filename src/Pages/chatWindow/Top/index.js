import React from 'react';
import { useCurrentRoom } from '../../../context/CurrentRoomContext';

function index() {
  const name = useCurrentRoom(v => v.name);
  return <div>{name}</div>;
}

export default index;
