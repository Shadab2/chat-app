/* eslint-disable */
import React, { createContext, useContext, useEffect, useState } from 'react';
import { auth, database } from '../firebase';

const ProfileContext = createContext();

export const ProfileProvider = ({ children }) => {
  const [profile, setProfile] = useState(null);
  const [isLoading, setIsloading] = useState(true);

  useEffect(() => {
    let userRef = null;
    const unsubAuth = auth.onAuthStateChanged(user => {
      if (user) {
        userRef = database.ref(`/profiles/${user.uid}`);
        userRef.on('value', snap => {
          const { name, createdAt, avatar } = snap.val();
          const data = {
            uid: user.uid,
            createdAt,
            avatar,
            name,
            email: user.email,
          };
          setProfile(data);
          setIsloading(false);
        });
      } else {
        if (userRef) userRef.off();
        setProfile(null);
        setIsloading(false);
      }
    });
    return () => {
      unsubAuth();
      if (userRef) userRef.off();
    };
  }, []);
  return (
    <ProfileContext.Provider value={{ profile, isLoading }}>
      {children}
    </ProfileContext.Provider>
  );
};

export const useProfile = () => useContext(ProfileContext);
