<template>
    <div>
        <h1><img src="" alt="">川崎ハロウィン</h1>
        <div>
           <h2>task</h2>
           <div>
               <h3>todo</h3>
               <ul>
                   <li @click="toggle">testtask1</li>
                   <li>testtask2</li>
                   <li>testtask3</li>
               </ul>
               <button>plusButton</button>
           </div>
        </div>
        <div>
            <h2>member</h2>
        </div>
        <div>
            <h2>mtg</h2>
        </div>
        <Projects :show="show" @emitClose="show=false"/>
    </div>
</template>
<script>
import Projects from '@/components/projects/task.vue'
export default {
    data() {
        return {
            show: false
        }
    },
    components: {
        Projects
    },
    methods: {
        toggle() {
            this.show = !this.show 
        }
    }
}
</script>
