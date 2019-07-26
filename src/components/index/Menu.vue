<template>
    <div>
        <ul class="flexbox">
            <li>プロジェクトをはじめる</li>
            <li>プロジェクトを手伝う</li>
            <li>参加中プロジェクトを見る</li>
            <li>プロジェクトを調べる</li>
        </ul>
    </div>
</template>

<style scoped>
    .flexbox {
        display: flex;
        flex-wrap: wrap;
    }
    ul {
        max-width: none;
        display: block;
        list-style-type: none;
        margin: 0px;
        padding: 0px;
        border-bottom: 1px solid;
    }
    li {
        flex-basis: 50%;
        padding: 10px;
        color: #434a54;
        font-size: 13px;
        font-weight: bold;
        border-top: 1px solid;
    }
    li:nth-of-type(odd) {
        border-right: 1px solid;
    }    
</style>
