import React from 'react';
import {
  IonContent,
  IonHeader,
  IonPage,
  IonTitle,
  IonToolbar,
  IonSearchbar,
  IonList,
  IonItem,
  IonRow,
  IonGrid,
  IonCol,
  IonAvatar,
  IonSlides,
  IonSlide
} from '@ionic/react';
import './SearchScreen.css';
import person1 from './image/avatars/person1.png';
import person2 from './image/avatars/person2.png';
import person3 from './image/avatars/person3.png';
import person4 from './image/avatars/person4.png';
import person5 from './image/avatars/person5.png';
import person6 from './image/avatars/person6.png';
import person7 from './image/avatars/person7.png';
import person8 from './image/avatars/person8.png';
import person9 from './image/avatars/person9.png';
import person10 from './image/avatars/person10.png';
//

const slideOpts = {
  slidesPerView: 4,
  initialSlide: 1,
  speed: 400
};

const SearchScreen: React.FC = () => {
  const avatars = [
    person1,
    person2,
    person3,
    person4,
    person5,
    person6,
    person7,
    person8,
    person9,
    person10
  ];
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Search Screen</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">Search Screen</IonTitle>
          </IonToolbar>
        </IonHeader>
        <IonSearchbar
          showCancelButton="focus"
          placeholder="Software Engineer"
          autocomplete="on"
          inputmode="text"
        ></IonSearchbar>

        <IonSlides options={slideOpts} id="avatar-container">
          {avatars.map((avatar, i) => {
            return (
              <IonSlide className="avatar-slide-single" key={i}>
                <img
                  className="avatar-img"
                  src={avatar}
                  width="200"
                  alt="avatar"
                />
              </IonSlide>
            );
          })}

          {/* <IonSlide>
            <IonAvatar>
              <img src="https://gravatar.com/avatar/dba6bae8c566f9d4041fb9cd9ada7741?d=identicon&f=y" />
            </IonAvatar>
          </IonSlide>
          <IonSlide>
            <IonAvatar>
              <img src="https://gravatar.com/avatar/dba6bae8c566f9d4041fb9cd9ada7741?d=identicon&f=y" />
            </IonAvatar>
          </IonSlide>
          <IonSlide>
            <IonAvatar>
              <img src="https://gravatar.com/avatar/dba6bae8c566f9d4041fb9cd9ada7741?d=identicon&f=y" />
            </IonAvatar>
          </IonSlide>
          <IonSlide>
            <IonAvatar>
              <img src="https://gravatar.com/avatar/dba6bae8c566f9d4041fb9cd9ada7741?d=identicon&f=y" />
            </IonAvatar>
          </IonSlide>
          <IonSlide>
            <IonAvatar>
              <img src="https://gravatar.com/avatar/dba6bae8c566f9d4041fb9cd9ada7741?d=identicon&f=y" />
            </IonAvatar>
          </IonSlide> */}
        </IonSlides>
      </IonContent>
    </IonPage>
  );
};

export default SearchScreen;
