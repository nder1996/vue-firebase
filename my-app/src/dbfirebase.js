import { initializeApp } from "firebase/app";
import 'firebase/database';



const firebaseConfig = {
    apiKey: "AIzaSyAhIor7gR-KndII0ZNgwKkAVx2Hc2N-OPo",
    authDomain: "lenguaje-khippar.firebaseapp.com",
    databaseURL: "https://lenguaje-khippar-default-rtdb.firebaseio.com",
    projectId: "lenguaje-khippar",
    storageBucket: "lenguaje-khippar.appspot.com",
    messagingSenderId: "1079967630722",
    appId: "1:1079967630722:web:4aa4d385ba26cf7a0c7b9b"
};

firebase.initializeApp(firebaseConfig);

export default firebase.database();

