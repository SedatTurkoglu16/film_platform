import firebase from 'firebase';

const firebaseConfig = {
  apiKey: "AIzaSyBdR_yiY2zGRWeud3i6BcdJ_p9ja7LXI7M",
  authDomain: "movie-platform-4941b.firebaseapp.com",
  projectId: "movie-platform-4941b",
  storageBucket: "movie-platform-4941b.appspot.com",
  messagingSenderId: "316371695999",
  appId: "1:316371695999:web:071b3fdb1017b42a0b824a",
  measurementId: "G-RPV28N3BQJ"
};

const fire = firebase.initializeApp(firebaseConfig);

export default fire;