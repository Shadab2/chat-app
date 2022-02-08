import React, { memo } from 'react';
import { Icon } from 'rsuite';
import { Link } from 'react-router-dom';
import { useCurrentRoom } from '../../../context/CurrentRoomContext';
import { useMediaQuery } from '../../../customHooks/customHooks';
import RoomInfoBtnModal from './RoomInfoBtnModal';

function Top() {
  const name = useCurrentRoom(v => v.name);
  const isMobile = useMediaQuery('(max-width: 992px)');
  console.log(isMobile);

  return (
    <div>
      <div className="d-flex justify-content-between align-items-center">
        <h4 className="text-disappear d-flex align-items-center">
          <div>
            <div
              className={
                isMobile ? 'd-inline-block p-0 mr-2 text-blue' : 'd-none'
              }
            >
              <Icon
                componentClass={Link}
                to="/"
                icon="arrow-circle-left"
                size="2x"
              />
            </div>
          </div>
          <span className="text-disappear">{name}</span>
        </h4>
      </div>

      <div className="d-flex justify-content-between align-items-center">
        <RoomInfoBtnModal />
      </div>
    </div>
  );
}

export default memo(Top);
