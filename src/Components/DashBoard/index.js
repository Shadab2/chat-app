import React from 'react';
import { Alert, Button, Drawer } from 'rsuite';
import { useProfile } from '../../context/ProfileContext';
import { database } from '../../firebase';
import AvatarButton from './AvatarButton';
import EditableInput from './EditableInput';
import ProviderBlock from './ProviderBlock';

function DashBoard({ onSignOut }) {
  const { profile } = useProfile();

  const onSave = async newData => {
    const userRef = database.ref(`/profiles/${profile.uid}`).child('name');
    try {
      await userRef.set(newData);
      Alert.success('Nickname has been updated', 4000);
    } catch (err) {
      Alert.error(err.message, 4000);
    }
  };
  return (
    <>
      <Drawer.Header>
        <Drawer.Title> DashBoard </Drawer.Title>
      </Drawer.Header>
      <Drawer.Body>
        <h3>Hello , {profile.name}</h3>
        <ProviderBlock />
        <EditableInput
          name="nickname"
          initialValue={profile.name}
          label={<h6 className="mb-2">Nickname</h6>}
          onSave={onSave}
        />
        <AvatarButton />
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
