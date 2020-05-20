import Vue from 'vue'
import App from './App.vue'
import router from './router'
import './registerServiceWorker'


// ここから追加
import '@/assets/css/tailwind.css' 
import { firestorePlugin } from 'vuefire'          
import firebase from 'firebase'     
import 'firebase/firestore'
import VueDateFns from "vue-date-fns";

Vue.use(VueDateFns);

Vue.use(firestorePlugin)
firebase.initializeApp({              
  apiKey: "AIzaSyB3Y7K2pNf35G4JaCWCfwJCNB-rgn253pU",
  authDomain: "words-1d966.firebaseapp.com",
  databaseURL: "https://words-1d966.firebaseio.com",
  projectId: "words-1d966",
  storageBucket: "words-1d966.appspot.com",
  messagingSenderId: "1056654094309",
  appId: "1:1056654094309:web:f627717b7f8a0335b6090c"
})
export const db = firebase.firestore()
export const auth = firebase.auth()
// ここまで追加

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
