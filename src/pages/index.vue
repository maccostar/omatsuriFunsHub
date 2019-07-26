<template>
  <div>
    <Menu />
    <div class= "titlebox">
      <h2>
        <img src="@/static/iconmonstr-megaphone-12-240.png" alt="">
        参加中のプロジェクト
      </h2>
    </div>
    <EventItemJoined :data="data" />
    <div class="titlebox">
      <h2>
        <img src="@/static/iconmonstr-undo-7-240.png" alt="">
        閲覧中のプロジェクト
      </h2>
    </div>
    <EventItemJoined :data="joindata" />
    <div>
      <h2>
        <img src="@/static/iconmonstr-favorite-13-240.png" alt="">
        人気のプロジェクト
      </h2>
    </div>
    <EventItemJoined :data="favdata" />
  </div>
</template>

<script>
import EventItemJoined from '@/components/index/EventItemJoined'
import Menu from '@/components/index/Menu'
export default {
  head: {
    title: 'index'
  },
  components: {
    EventItemJoined,
    Menu
  },
  mounted() {
    this.$store.dispatch('setData')
  },
  computed: {
    data() {
      // console.log(this.$store.getters)
      return this.$store.getters.data //スプレッド演算子
    },
    joindata() {
      // console.log(this.$store.getters)
      return this.$store.getters.data
    },
    favdata() {
      // console.log(this.$store.getters)
      return this.$store.getters.data
    }

  }  
}
</script>

<style scoped>
  img {
    width: 30px;
    height: auto;
  }
</style>

