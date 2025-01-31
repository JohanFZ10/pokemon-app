import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';

const firebaseConfig = {
  apiKey: "AIzaSyALr8nnP2WezS8Fr2AkJXdFPCUSKTitw7s",
  authDomain: "pokemon-app-59cb4.firebaseapp.com",
  projectId: "pokemon-app-59cb4",
  storageBucket: "pokemon-app-59cb4.firebasestorage.app",
  messagingSenderId: "TU_MESSAGING_SENDER_ID",
  appId: "1:1027467661979:android:404fce57056196408b2c3e",
};


const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
