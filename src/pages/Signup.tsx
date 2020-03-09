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
          <IonButtons slot="start">
            <IonBackButton defaultHref="/landing" />
          </IonButtons>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <form onSubmit={() => {}}>
          <IonList lines="full" className="ion-no-margin ion-no-padding">
            <IonItem>
              <IonLabel position="stacked">
                Name <IonText color="danger">*</IonText>
              </IonLabel>
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
              <IonLabel position="stacked">
                Title <IonText color="danger">*</IonText>
              </IonLabel>
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
              <IonLabel position="stacked">
                Email <IonText color="danger">*</IonText>
              </IonLabel>
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
              <IonLabel position="stacked">
                Password <IonText color="danger">*</IonText>
              </IonLabel>
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
              <IonLabel position="stacked">
                Your Bootcamp <IonText color="danger">*</IonText>
              </IonLabel>
              <IonSelect
                placeholder="Select One"
                okText="Select"
                cancelText="Dismiss"
                onIonChange={(e: any) => setBootcamp(e.target.value)}
              >
                <IonSelectOption value="appAcademy">appAcademy</IonSelectOption>
                <IonSelectOption value="bloc">bloc</IonSelectOption>
                <IonSelectOption value="Coding Dojo">
                  Coding Dojo
                </IonSelectOption>
                <IonSelectOption value="Flatiron">Flatiron</IonSelectOption>
                <IonSelectOption value="General Assembly">
                  General Assembly
                </IonSelectOption>
                <IonSelectOption value="Hack Reactor">
                  Hack Reactor
                </IonSelectOption>
                <IonSelectOption value="Iron Hack">Iron Hack</IonSelectOption>
                <IonSelectOption value="Lambda School">
                  Lambda School
                </IonSelectOption>
                <IonSelectOption value="Le Wagon">Le Wagon</IonSelectOption>
                <IonSelectOption value="Udacity">Udacity</IonSelectOption>
              </IonSelect>
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
            <IonButton expand="block" type="submit" className="ion-n-margin">
              Creat my account
            </IonButton>
          </div>
        </form>
      </IonContent>
    </IonPage>
  );
};

export default Signup;
