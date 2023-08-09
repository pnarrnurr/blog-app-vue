import { initializeApp } from "firebase/app";
const firebaseConfig = {
    apiKey: "AIzaSyD_hEi3ismw8yxo9bb431bP71NPFgxboIQ",
    authDomain: "blog-vue3-6aabc.firebaseapp.com",
    projectId: "blog-vue3-6aabc",
    storageBucket: "blog-vue3-6aabc.appspot.com",
    messagingSenderId: "375070443923",
    appId: "1:375070443923:web:af5220049ad8863adb8066"
};

const fb = initializeApp(firebaseConfig);

export default { fb };