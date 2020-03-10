import React from 'react';
import {
  IonHeader,
  IonContent,
  IonToolbar,
  IonTitle,
  IonButtons,
  IonButton,
  IonIcon
} from '@ionic/react';

type ModalProps = {
  closeAction: Function;
  src: string;
  name: string;
};

class Modal extends React.Component<ModalProps> {
  render() {
    return (
      <>
        <IonHeader>
          <IonToolbar color="primary">
            <IonTitle>{this.props.name}</IonTitle>
            <IonButtons slot="end">
              <IonButton onClick={() => this.props.closeAction()}>
                <IonIcon name="close" slot="icon-only"></IonIcon>
              </IonButton>
            </IonButtons>
          </IonToolbar>
        </IonHeader>
        <IonContent className="ion-padding">
          <img alt={this.props.name} src={this.props.src}></img>
        </IonContent>
      </>
    );
  }
}

export default ({
  closeAction,
  src,
  name
}: {
  closeAction: Function;
  src: string;
  name: string;
}) => <Modal closeAction={closeAction} src={src} name={name}></Modal>;
