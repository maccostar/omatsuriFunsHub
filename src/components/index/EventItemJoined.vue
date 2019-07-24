<template>
    <div>
        <!-- <img src="/test.jpg" /> -->
        <div v-for="(item,i) in data" :key="i">
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
    props: {
        data: {
            type: Array,
            default: () => [] //関数じゃないといけない
        }
    }
}
</script>

