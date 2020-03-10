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
  about: string;
  details: string;
  mainColor: string;
  url: string;
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
          <div>
            <img alt={this.props.name} src={this.props.src}></img>
          </div>
          <div>{this.props.about}</div>
          <div>{this.props.details}</div>
        </IonContent>
      </>
    );
  }
}

export default ({
  closeAction,
  src,
  name,
  about,
  details,
  mainColor,
  url
}: {
  closeAction: Function;
  src: string;
  name: string;
  about: string;
  details: string;
  mainColor: string;
  url: string;
}) => (
  <Modal
    closeAction={closeAction}
    src={src}
    name={name}
    about={about}
    details={details}
    mainColor={mainColor}
    url={url}
  ></Modal>
);
