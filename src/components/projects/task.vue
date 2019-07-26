<template>
    <div v-show="show">
        <input type="text" :value="form.taskName" @change="changeTaskName">
        {{form.taskName}}
        <div>
            <h3>メンバー</h3>
            <button>add</button>
        </div>
        <div>
            <h3>説明</h3>
            <textarea name="説明" @change="changeTextArea" cols="30" rows="10" placeholder="ここに説明を入れてください。">{{ form.info }}</textarea>
            {{ form.info }}
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
            form: {
                taskName: "aaa",
                info: ""
            }
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
        },
        changeTaskName(e) {
           // 一つ前 e.target._value
            this.form.taskName = e.target.value
        },
        changeTextArea(e) {
           // 一つ前 e.target._value
            this.form.info = e.target.value
        },
    }
}
</script>

