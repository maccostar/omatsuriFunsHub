<template>
    <div class="flexbox">
        <!-- <img src="/test.jpg" /> -->
        <div v-for="(item,i) in data" :key="i" class="item">
            <a :href="item.href">
                <img :src="item.src" :alt="item.title">
                <div class="title" >{{ item.title }}</div>
                <div class="startat" >{{ item.startat }}</div>
                <div class="endat">{{ item.endat }}</div>
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
        flex-basis: 50%;
        margin: 5px;
        border: 1px #e3e4e8 solid;
        border-radius: 5px;
    }
    .item img {
        max-width: 100%;
        height: auto;
        border-radius: 5px 5px 0px 0px;
    }
</style>


