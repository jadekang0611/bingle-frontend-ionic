import {
  IonContent,
  IonSlides,
  IonSlide,
  IonButton,
  IonIcon
} from '@ionic/react';
import { arrowForward } from 'ionicons/icons';

import React from 'react';
import './Onboarding.css';

// This is an optional parameter set to pass to the swiper instance
const slideOpts = {
  initialSlide: 1,
  speed: 400
};

//TODO: (1) Add corresponding images (2) Add corresponding blurb (3) Make sure the routing is added to the continue button (4) Add routing with a condition to App component that only a user who is signing up for the first time sees this.

const Onboarding: React.FC = () => {
  return (
    <IonContent fullscreen className="ion-padding" scroll-y="false">
      <IonSlides pager={false} options={slideOpts}>
        <IonSlide className="slide">
          <img src="https://via.placeholder.com/250" alt="splash-img" />
          <h2>Welcome</h2>
          <p>
            The <b>Bingle app</b> is Lorem ipsum dolor sit amet consectetur
            adipisicing elit. Ea velit laborum eligendi natus tempore soluta
            quisquam,
          </p>
        </IonSlide>
        <IonSlide className="slide">
          <img src="https://via.placeholder.com/250" alt="splash-img" />
          <h2>What is Bingle?</h2>
          <p>
            <b>Bingle</b> Lorem ipsum dolor sit amet consectetur adipisicing
            elit. Quas nostrum atque molestiae et iure modi ex quae dicta
            tempora consectetur ducimus inventore numquam
          </p>
        </IonSlide>
        <IonSlide className="slide">
          <img src="https://via.placeholder.com/250" alt="splash-img" />
          <h2>What do I do here?</h2>
          <p>
            <b>Bingle</b> Lorem ipsum dolor sit amet consectetur adipisicing
            elit. Quas nostrum atque molestiae et iure modi ex quae dicta
            tempora consectetur ducimus inventore numquam
          </p>
        </IonSlide>
        <IonSlide className="slide">
          <img src="https://via.placeholder.com/250" alt="splash-img" />
          <h2>Ready to Play?</h2>
          <IonButton fill="clear">
            Continue <IonIcon icon={arrowForward} />
          </IonButton>
        </IonSlide>
      </IonSlides>
    </IonContent>
  );
};

export default Onboarding;
