<template>
  <EventItemJoined :data="data" />
</template>

<script>
import EventItemJoined from '@/components/index/EventItemJoined'
export default {
  head: {
    title: 'index'
  },
  components: {
    EventItemJoined
  },
  mounted() {
    this.$store.dispatch('setData')
  },
  computed: {
    data() {
      // console.log(this.$store.getters)
      return this.$store.getters.data
    }
  }  
}
</script>
