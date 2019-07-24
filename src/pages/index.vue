<template>
  <div>
    <!-- <img src="/test.jpg" /> -->
    <div v-for="item in data" :key="item.title">
      <img :src="item.src" :alt="item.title">
      <div>{{ item.src }}</div> 
      <div>{{ item.title }}</div>
      <div>{{ item.startat }}</div>
      <div>{{ item.endat }}</div>
      <div>{{ item.status }}</div>
      <div>{{ item.place }}</div>
    </div>
    {{ data }}
  </div>
</template>

<script>
export default {
  head: {
    title: 'index'
  },
  computed: {
    data() {
      return [{
        src: '/img.jpg',
        title: '祭りの名前',
        startat: '2019-07-24',
        endat: '2019-07-24',
        status: 'open',
        place: '川崎'
      }]
    }
  }  
}
</script>
