<template>
 <header class="fixed top-0 w-full p-3">
   <div class="flex justify-between">
     <router-link to="/">
       <h1 class="text-3xl font-bold">W.</h1>
     </router-link>
     <div 
        v-if="currentUser"
        class="flex"
      > <!-- ここを変更 -->
        <router-link to="/create">
          <button 
            class="mt-2 mr-5 focus:outline-none"
          >Write</button>
        </router-link>
       <div 
          class="w-10 h-10 rounded-full bg-cover bg-center mr-2"
          :style=" 'background-image: url(' + currentUser.photoURL + ')' "
        ></div> <!-- ここを変更 -->
       <div>
         <p>{{ currentUser.displayName }}</p>
          <p 
            class="-mt-1 text-sm cursor-pointer"
            @click="signOut"
          >Log Out</p> <!-- ここを変更 -->
       </div>
     </div>

      <!-- ここから追加 -->
      <div v-else>
        <button 
          class="cursor-pointer focus:outline-none"
          @click="signIn"
        >Sign In</button>
      </div>
      <!-- ここまで追加 -->

   </div>
 </header>
</template>

<!-- ここから追加 -->
<script>
import firebase from 'firebase'
import { auth } from '@/main'
import { db } from '@/main' // ここを追加
export default {

  // ここから追加
  data() {
    return {
      currentUser: {}
    }
  },
  created() {
    auth.onAuthStateChanged(user => { 
      this.currentUser = user
    })
  },
  // ここまで追加

  methods: {
    signIn () {
      const provider = new firebase.auth.GoogleAuthProvider()
      auth.signInWithPopup(provider)
      .then((result) => {
        alert('Hello, '+result.user.displayName+'!')

        // ここから追加
        db.collection('users').doc(result.user.uid).set({
          displayName: result.user.displayName,
          photoURL: result.user.photoURL,
          email: result.user.email
        })
        // ここまで追加

      })
    },
    signOut () {
      if (window.confirm('Are You Sure to Sign Out?')) {
        auth.signOut()
        .then(() => {
          alert('You Safely Signed Out.')
          this.$router.push('/'),
          location.reload()
        })
      }
    }
  }
}
</script>
<!-- ここまで追加 -->