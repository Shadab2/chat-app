/* eslint-disable */
import React, { useState, useCallback } from 'react';
import firebase from 'firebase/app';
import { database } from '../../../firebase';
import { useParams } from 'react-router';
import { InputGroup, Icon, Input, Alert } from 'rsuite';
import { useProfile } from '../../../context/ProfileContext';

function formatMessage(chatId, profile, text) {
  return {
    roomId: chatId,
    author: {
      name: profile.name,
      uid: profile.uid,
      createdAt: profile.createdAt,
      ...(profile.avatar ? { avatar: profile.avatar } : {}),
    },
    text,
    createdAt: firebase.database.ServerValue.TIMESTAMP,
  };
}

function index() {
  const [message, setMessage] = useState('');
  const [loading, setLoading] = useState(false);
  const { profile } = useProfile();
  const { chatId } = useParams();

  const onHandleChange = useCallback(value => {
    setMessage(value);
  }, []);

  const onSendClick = async () => {
    if (message.trim() === '') return;
    const formatedMessage = formatMessage(chatId, profile, message);

    const updates = {};
    const messageId = database.ref('messages').push().key;
    updates[`/messages/${messageId}`] = formatedMessage;
    updates[`/rooms/${chatId}/lastMessage`] = {
      ...formatedMessage,
      msgId: messageId,
    };
    setLoading(true);
    try {
      await database.ref().update(updates);
      setMessage('');
      setLoading(false);
    } catch (e) {
      Alert.error(e, 2000);
      setLoading(false);
    }
  };

  return (
    <InputGroup>
      <Input
        placeholder="Write your message here..."
        onChange={onHandleChange}
      />
      <InputGroup.Button
        appearance="primary"
        color="blue"
        onClick={onSendClick}
        disabled={loading}
      >
        <Icon icon="send" />
      </InputGroup.Button>
    </InputGroup>
  );
}

export default index;
