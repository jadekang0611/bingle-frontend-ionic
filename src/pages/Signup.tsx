import React from 'react';
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
  IonDatetime,
  IonHeader,
  IonToolbar,
  IonTitle,
  IonPage,
  IonTextarea
} from '@ionic/react';

const Signup = () => {
  return (
    <IonPage>
      <IonHeader translucent>
        <IonToolbar>
          <IonTitle>Creat Account</IonTitle>
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
              ></IonDatetime>
            </IonItem>
            <IonItem>
              <IonLabel position="floating">About me</IonLabel>
              <IonTextarea
                autoGrow={true}
                placeholder="Please share who you are to the Bingle community!"
                required
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
