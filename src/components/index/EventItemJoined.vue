<template>
    <div class="flexbox">
        <!-- <img src="/test.jpg" /> -->
        <div v-for="(item,i) in data" :key="i" class="item">
            <a :href="item.href">
                <img :src="item.src" :alt="item.title">
                <div class="src" >{{ item.src }}</div> 
                <div class="title" >{{ item.title }}</div>
                <div class="startat" >{{ item.startat }}</div>
                <div class="endat">{{ item.endat }}</div>
                <div class="status" >{{ item.status }}</div>
                <div class="place" >{{ item.place }}</div>
            </a>
        </div>
        <!-- {{ data }} -->
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

<style scoped>
    .flexbox {
       display: flex;
    }
    .item {
        margin: 5px;
        border: 1px #e3e4e8 solid;
    }
    .item img {
        width: 160px;
        height: auto;
    }
</style>


