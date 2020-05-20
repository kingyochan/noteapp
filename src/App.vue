<template>
  <div id="app">

  <Header /> <!-- ここを追加 -->

      <main class="my-16 mx-auto"> <!-- ここを追加 -->
        <router-view/>
      </main> <!-- ここを追加 -->
    </div>
  </template>

<script>
import Header from '@/components/Header' // ここを追加
export default {

 // ここから追加
 components: {
   Header
 }
 // ここまで追加

}
</script>

<style lang="stylus">
main
  width: 95%
  max-width: 500px
</style>
