<template>
    <div v-show="show">
        <input type="text" :value="taskName">
        {{taskName}}
        <div>
            <h3>メンバー</h3>
            <button>add</button>
        </div>
        <div>
            <h3>説明</h3>
            <textarea name="説明" id="" cols="30" rows="10" placeholder="ここに説明を入れてください。"></textarea>
        </div>
        <div>
            <button @click="close">close</button>
        </div>
    </div>
</template>
<script>
export default {
    data() {
        return {
            taskName: "aaa"
        }
    },
    props: {
        show: {
            type: Boolean,
            default: false
        }
    },
    methods: {
        close() {
            this.$emit("emitClose")
        }
    }
}
</script>

