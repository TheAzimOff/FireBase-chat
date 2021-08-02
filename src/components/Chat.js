import { Container, Grid } from '@material-ui/core';
import React, { useContext, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { context } from '..';
import { useCollectionData } from 'react-firebase-hooks/firestore';
import Loader from './loader';
import firebase from 'firebase';

export default function Chat() {
  const [auth, firestore] = useContext(context);
  const [user] = useAuthState(auth);
  const [value, setValue] = useState('');
  const [messages, loading] = useCollectionData(
    firestore.collection('messages').orderBy('createdAt')
  );
  const sendMessage = async () => {
    if (value !== '') {
      firestore.collection('messages').add({
        uid: user.uid,
        displayName: user.displayName,
        photoURL: user.photoURL,
        text: value,
        createdAt: firebase.firestore.FieldValue.serverTimestamp(),
      });
      setValue('');
    }
  };
  if (loading) return <Loader />;

  return (
    <Container style={{ overflowX: 'hidden' }}>
      <Grid
        container
        alignItems="center"
        justifyContent="center"
        style={{ height: 'calc(100vh - 48px)', background: '#1d1d1d' }}
      >
        <div
          style={{
            width: '100%',
            overflowY: 'scroll',
            height: 'calc(100% - 50px)',
            position: 'relative',
          }}
        >
          {messages.map((message) => (
            <div
              key={message.uid}
              className={message.uid === user.uid ? 'message self' : 'message'}
            >
              <img src={message.photoURL} className="avatar" alt="avatar" />
              <div style={{ width: '100%' }}>
                <h3>{message.displayName}</h3>
                <p>{message.text}</p>
              </div>
            </div>
          ))}
        </div>
        <div className="textarea">
          <input
            className="text"
            type="text"
            placeholder="Message"
            value={value}
            onChange={(e) => setValue(e.target.value)}
          />
          <button className="send" onClick={sendMessage}></button>
        </div>
      </Grid>
    </Container>
  );
}
