import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { AppComponent } from './app/app.component';
import { register as registerSwiperElements } from 'swiper/element/bundle';

bootstrapApplication(AppComponent, appConfig)
.then(() => {
  console.log('Now running');
  // Log service worker registration when it's ready
  if ('serviceWorker' in navigator) {
    navigator.serviceWorker.ready
      .then(registration => {
        console.log('Service Worker is active:', registration);
      })
      .catch(err => {
        console.error('Service Worker registration error:', err);
      });
  }
})
  .catch((err) => console.error(err));

  registerSwiperElements();