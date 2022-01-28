/* eslint-disable */
import React from 'react';
import { Navigate } from 'react-router';
import {
  Container,
  Row,
  Col,
  Grid,
  Panel,
  Button,
  Icon,
  Alert,
  Loader,
} from 'rsuite';
import { auth, database } from '../firebase';
import firebase from 'firebase/app';
import { useProfile } from '../context/ProfileContext';

function Signin() {
  const { profile, isLoading } = useProfile();
  const signInWithProvider = async provider => {
    try {
      const { user, additionalUserInfo } = await auth.signInWithPopup(provider);
      if (additionalUserInfo.isNewUser) {
        await database.ref(`/profiles/${user.uid}`).set({
          name: user.displayName,
          createdAt: firebase.database.ServerValue.TIMESTAMP,
        });
      }
      console.log(user, additionalUserInfo);
      Alert.success('Signed in', 4000);
    } catch (error) {
      Alert.error(error.message, 3000);
    }
  };

  const onGoogleSignIn = () => {
    signInWithProvider(new firebase.auth.GoogleAuthProvider());
  };
  const onFacebookSignIn = () => {
    signInWithProvider(new firebase.auth.FacebookAuthProvider());
  };
  if (isLoading && !profile) {
    <div
      style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100vh',
      }}
    >
      <Loader vertical speed="slow" size="md" content="Loading" />
    </div>;
  }
  if (profile && !isLoading) return <Navigate to="/" />;
  return (
    <Container>
      <Grid className="mt-page">
        <Row>
          <Col xs={24} md={12} mdOffset={6}>
            <Panel>
              <div className="text-center">
                <h2>Welcome to Chat</h2>
                <p>Progressive chat platform for neophytes</p>
              </div>

              <div className="mt-3">
                <Button block color="blue" onClick={onFacebookSignIn}>
                  <Icon icon="facebook" /> Continue with Facebook
                </Button>

                <Button block color="green" onClick={onGoogleSignIn}>
                  <Icon icon="google" /> Continue with Google
                </Button>
              </div>
            </Panel>
          </Col>
        </Row>
      </Grid>
    </Container>
  );
}

export default Signin;
