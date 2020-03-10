import React from 'react';
import {
  IonHeader,
  IonContent,
  IonToolbar,
  IonTitle,
  IonButtons,
  IonIcon,
  IonButton,
  IonCard,
  IonCardContent,
  IonCardHeader,
  IonCardSubtitle,
  IonCardTitle
} from '@ionic/react';

type ModalProps = {
  closeAction: Function;
  src: string;
  name: string;
  about: string;
};

class Modal extends React.Component<ModalProps> {
  render() {
    return (
      <>
        <IonContent className="ion-padding">
          <IonCard>
            <div></div>
            <IonCardHeader>
              <IonCardSubtitle>About</IonCardSubtitle>
              <IonCardTitle>{this.props.name}</IonCardTitle>
            </IonCardHeader>
            <IonCardContent>{this.props.about}</IonCardContent>
          </IonCard>
          <div></div>
          <div>{this.props.about}</div>
        </IonContent>
      </>
    );
  }
}

export default ({
  closeAction,
  src,
  name,
  about
}: {
  closeAction: Function;
  src: string;
  name: string;
  about: string;
}) => (
  <Modal closeAction={closeAction} src={src} name={name} about={about}></Modal>
);
