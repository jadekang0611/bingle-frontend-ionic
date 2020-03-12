import React, { useState, useEffect } from 'react';
import {
  IonText,
  IonInput,
  IonItem,
  IonLabel,
  IonContent,
  IonList,
  IonButton,
  IonButtons,
  IonDatetime,
  IonHeader,
  IonToolbar,
  IonPage,
  IonTextarea,
  IonBackButton,
  IonListHeader
} from '@ionic/react';
import { toast } from '../toast';
import { registerUser, auth } from '../firebaseConfig';
import './MyAccount.css';

const Signup: React.FC = () => {
  const [name, setName] = useState('');
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [title, setTitle] = useState('');
  const [bootcamp, setBootcamp] = useState('');
  const [blurb, setBlurb] = useState('');
  const [photo, setPhoto] = useState('');
  const [github, setGithub] = useState('');
  const [completion, setCompletion] = useState('test');

  const [] = useState();

  useEffect(() => {
    if (auth !== null) {
      if (auth.currentUser !== null) {
        const uid = auth.currentUser.uid;

        const params = {
          headers: {
            'Content-Type': 'application/json'
          },

          method: 'GET'
        };
        fetch(
          'https://us-central1-bingle-backend.cloudfunctions.net/app/api/read/user/' +
            uid,
          params
        )
          .then(res => {
            return res.json();
            console.log(res);
          })
          .then(data => {
            const userData = data[0];
            setName(userData.name);
            setUsername(userData.email);
            setPassword(userData.password);
            setTitle(userData.title);
            setBlurb(userData.blurb);
            setPhoto(userData.photo);
            setBootcamp(userData.bootcamp);
            setCompletion(userData.completion);
            console.log(userData);
          });
      }
    }
  }, []);

  function saveProfile(e: any) {
    e.preventDefault();
    if (auth !== null) {
      if (auth.currentUser !== null) {
        const uid = auth.currentUser.uid;

        const data = {
          id: uid,
          blurb: blurb,
          name: name,
          title: title,
          photo: photo,
          github: github
        };

        const params = {
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify(data),
          method: 'PUT'
        };

        fetch(
          'https://us-central1-bingle-backend.cloudfunctions.net/app/api/create/user/profile',
          params
        ).then(res => {
          toast('Profile updated successfully!');
        });
      }
    }
  }

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar className="my-account-tool-bar">
          <IonButtons className="my-account-back-button-container" slot="start">
            <IonBackButton defaultHref="/search" />
          </IonButtons>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <div id="my-account-container">
          <IonList lines="full" className="ion-no-margin ion-no-padding">
            <IonListHeader className="signup-title">My Account</IonListHeader>
            <IonItem>
              <IonButton>View my profile</IonButton>
            </IonItem>
            <IonItem>
              <IonLabel position="stacked">Photo</IonLabel>
              <IonInput
                clearInput
                value={photo}
                onIonChange={(e: any) => setPhoto(e.target.value)}
              ></IonInput>
            </IonItem>
            <IonItem>
              <IonLabel position="stacked">Name</IonLabel>
              <IonInput
                type="text"
                value={name}
                clearInput
                onIonChange={(e: any) => setName(e.target.value)}
              ></IonInput>
            </IonItem>
            <IonItem>
              <IonLabel position="stacked">Title</IonLabel>
              <IonInput
                type="text"
                value={title}
                clearInput
                onIonChange={(e: any) => setTitle(e.target.value)}
              ></IonInput>
            </IonItem>
            <IonItem>
              <IonLabel position="stacked">Email</IonLabel>
              <IonInput
                disabled
                type="email"
                clearInput
                value={username}
                onIonChange={(e: any) => setUsername(e.target.value)}
              ></IonInput>
            </IonItem>

            <IonItem>
              <IonLabel position="stacked">Your Bootcamp</IonLabel>
              <IonInput disabled value={bootcamp}></IonInput>
            </IonItem>
            <IonItem>
              <IonLabel position="stacked">Completion</IonLabel>
              <IonInput disabled value={completion}></IonInput>
            </IonItem>
            <IonItem>
              <IonLabel position="floating">About me</IonLabel>
              <IonTextarea
                autoGrow={true}
                placeholder="Please share who you are to the Bingle community!"
                value={blurb}
                onIonChange={(e: any) => setBlurb(e.target.value)}
              ></IonTextarea>
            </IonItem>
          </IonList>
          <div className="ion-padding">
            <IonButton
              expand="block"
              type="submit"
              className="ion-n-margin"
              onClick={saveProfile}
            >
              Save Changes
            </IonButton>
          </div>
        </div>
      </IonContent>
    </IonPage>
  );
};

export default Signup;
