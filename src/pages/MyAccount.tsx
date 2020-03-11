import React, { useState } from 'react';
import {
  IonText,
  IonInput,
  IonItem,
  IonLabel,
  IonContent,
  IonList,
  IonSelect,
  IonSelectOption,
  IonButton,
  IonButtons,
  IonDatetime,
  IonHeader,
  IonToolbar,
  IonPage,
  IonTextarea,
  IonBackButton
} from '@ionic/react';
import { toast } from '../toast';
import { registerUser } from '../firebaseConfig';

const Signup: React.FC = () => {
  const [name, setName] = useState('');
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [title, setTitle] = useState('');
  const [bootcamp, setBootcamp] = useState('');
  const [completion, setCompletion] = useState('');
  const [aboutMe, setAboutMe] = useState('');
  async function register() {
    if (username.trim() === '' || password.trim() === '') {
      return toast('Username and password are required');
    }
    const res = await registerUser(username, password);
  }
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonButtons slot="start back">
            <IonBackButton defaultHref="/landing" />
          </IonButtons>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <form onSubmit={() => {}}>
          <IonList lines="full" className="ion-no-margin ion-no-padding">
            <IonItem>
              <IonLabel position="stacked">Photo</IonLabel>
              <IonInput
                value=""
                type="url"
                placeholder="Upload your photo"
                clearInput
                required
                onIonChange={(e: any) => setName(e.target.value)}
              ></IonInput>
            </IonItem>
            <IonItem>
              <IonLabel position="stacked">Name</IonLabel>
              <IonInput
                value=""
                type="text"
                placeholder="Enter your name"
                clearInput
                required
                onIonChange={(e: any) => setName(e.target.value)}
              ></IonInput>
            </IonItem>
            <IonItem>
              <IonLabel position="stacked">Title</IonLabel>
              <IonInput
                value=""
                type="text"
                placeholder="Enter your title"
                clearInput
                required
                onIonChange={(e: any) => setTitle(e.target.value)}
              ></IonInput>
            </IonItem>
            <IonItem>
              <IonLabel position="stacked">Email</IonLabel>
              <IonInput
                value=""
                type="email"
                placeholder="Enter your email"
                clearInput
                required
                onIonChange={(e: any) => setUsername(e.target.value)}
              ></IonInput>
            </IonItem>

            <IonItem>
              <IonLabel position="stacked">Password</IonLabel>
              <IonInput
                value=""
                type="password"
                placeholder="Enter your password"
                clearInput
                required
                onIonChange={(e: any) => setPassword(e.target.value)}
              ></IonInput>
            </IonItem>
            <IonItem>
              <IonLabel position="stacked">Your Bootcamp</IonLabel>
              <IonInput disabled>General Assembly</IonInput>
            </IonItem>
            <IonItem>
              <IonLabel position="stacked">Completion</IonLabel>
              <IonDatetime
                displayFormat="MMM YYYY"
                placeholder="Select Date"
                onIonChange={(e: any) => setCompletion(e.target.value)}
              ></IonDatetime>
            </IonItem>
            <IonItem>
              <IonLabel position="floating">About me</IonLabel>
              <IonTextarea
                autoGrow={true}
                placeholder="Please share who you are to the Bingle community!"
                required
                onIonChange={(e: any) => setAboutMe(e.target.value)}
              ></IonTextarea>
            </IonItem>
          </IonList>
          <div className="ion-padding">
            <IonButton
              expand="block"
              type="submit"
              className="ion-n-margin"
              // onClick={Loading}
            >
              Save Changes
            </IonButton>
          </div>
        </form>
      </IonContent>
    </IonPage>
  );
};

export default Signup;
