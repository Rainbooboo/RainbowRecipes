import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ServiceWorkerListenerService {

  constructor() {  
    this.initializeServiceWorker();  
  }  

  private initializeServiceWorker() {  
    console.log('working')
    if ('serviceWorker' in navigator) {  
      navigator.serviceWorker.register('/ngsw-worker.js').then((registration) => {  
        console.log('Service Worker registered with scope:', registration.scope);  
      }).catch((error) => {  
        console.error('Service Worker registration failed:', error);  
      });  

      navigator.serviceWorker.ready.then((registration) => {  
        console.log('Service Worker is ready to handle fetch events:', registration);  
      });  

      navigator.serviceWorker.addEventListener('controllerchange', () => {  
        console.log('A new service worker is controlling this page.');  
      });  

      navigator.serviceWorker.addEventListener('message', (event) => {  
        console.log('Received message from Service Worker:', event.data);  
      });  
    } else {  
      console.warn('Service Workers are not supported in this browser.');  
    }  
  }  
}
