import React, { useState, useEffect } from 'react';
import {
  IonContent,
  IonPage,
  IonSearchbar,
  IonList,
  IonItem,
  IonAvatar,
  IonSlides,
  IonSlide,
  IonLabel,
  IonFab,
  IonFabButton,
  IonIcon,
  IonFabList,
  IonLoading
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
import { IonReactRouter } from '@ionic/react-router';
import { logoutUser } from '../firebaseConfig';
import { useHistory } from 'react-router-dom';
import {
  arrowBackCircle,
  logOutOutline,
  search,
  starOutline,
  personCircleOutline
} from 'ionicons/icons';

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

  let count = 0;

  function alternateColors() {
    if (count === 4) {
      count = 1;
    } else {
      count++;
    }
  }

  const selectedItem = {
    id: '',
    name: '',
    email: '',
    bootcamp: '',
    followers: '',
    following: '',
    blurb: '',
    github: '',
    photo: '',
    projects: '',
    title: ''
  };

  const [searchList, setSearchList] = useState([selectedItem]);
  const [loadedList, setLoadedList] = useState([selectedItem]);
  const [people, setPeople] = useState([selectedItem]);
  const [busy, setBusy] = useState<boolean>(false);
  const history = useHistory();

  useEffect(() => {
    setBusy(true);
console.log("set busy");
    const params = {
      headers: {
        'Content-Type': 'application/json'
      },
      method: 'GET'
    };
    fetch(
      'https://us-central1-bingle-backend.cloudfunctions.net/app/api/read/users',
      params
    )
      .then(res => {
        return res.json();
        console.log(res);
      })
      .then(data => {
        setSearchList(data);
        setLoadedList(data);
        setPeople(data);
        console.log(data);
        setBusy(false);
      });
  }, []);

  function goToHome() {
    history.push('/search');
  }

  function goToFollows() {
    history.push('/follows');
  }

  function goToEdit() {
    history.push('/myaccount');
  }
  function filterList(e: any) {
    const searchTerm = e.srcElement.value;
    setSearchList(people);
    if (!searchTerm) {
      return;
    }
    console.log('Loaded List: ' + loadedList);
    console.log('People: ' + people);
    setSearchList(
      loadedList.filter(item => {
        if (item && searchTerm) {
          if (
            item.name.toLowerCase().indexOf(searchTerm.toLowerCase()) > -1 ||
            item.title.toLowerCase().indexOf(searchTerm.toLowerCase()) > -1 ||
            item.bootcamp.toLowerCase().indexOf(searchTerm.toLowerCase()) > -1
          ) {
            return true;
          }
          return false;
        }
      })
    );
  }
  return (
    <IonPage>
      <IonContent>
        <IonSearchbar
          className="searchBar-container"
          // showCancelButton="focus"
          placeholder="Software Engineer"
          autocomplete="on"
          inputmode="text"
          onIonChange={e => filterList(e)}
          // value={searchString}
          // onChange={searchHandler}
        ></IonSearchbar>
      <IonLoading message="Loading..." duration={0} isOpen={busy}></IonLoading>
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
        </IonSlides>
        <br></br>
        <IonList id="show-users-container">
          {/* TypeScript gave me an error that my object possibly underfined; therefore, I wrapped my whole mapped array with a condition  */}
          {searchList.map((user, id) => {
            alternateColors();
            if (user !== undefined) {
              let link = '/user/' + user.id;
              return (
                <IonItem
                  routerLink={link}
                  key={id}
                  className={`alt-color-${count} search-users-container`}
                >
                  <IonAvatar className="search-image-container" slot="start">
                    <img
                      className="user-image-md"
                      src={user.photo}
                      alt="avatar"
                    />
                  </IonAvatar>
                  <IonLabel className="user-info-basic">
                    <h2>{user.name}</h2>
                    <div className="spacing"></div>
                    <h3>{user.title}</h3>
                    <div className="spacing"></div>
                    <p>{user.bootcamp}</p>
                  </IonLabel>
                </IonItem>
              );
            }
          })}
        </IonList>
      </IonContent>
      <IonFab vertical="bottom" horizontal="end" slot="fixed">
        <IonFabButton>
          <IonIcon icon={arrowBackCircle} />
        </IonFabButton>
        <IonFabList side="start">
          <IonFabButton>
            <IonIcon icon={logOutOutline} onClick={logoutUser} />
          </IonFabButton>
          <IonFabButton>
            <IonIcon icon={starOutline} onClick={goToFollows} />
          </IonFabButton>
          <IonFabButton>
            <IonIcon icon={personCircleOutline} onClick={goToEdit} />
          </IonFabButton>
        </IonFabList>
      </IonFab>
    </IonPage>
  );
};

export default SearchScreen;
