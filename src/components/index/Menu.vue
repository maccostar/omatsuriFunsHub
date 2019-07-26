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
        list-style-type: disc;
        margin-block-start: 1em;
        margin-block-end: 1em;
        margin-inline-start: 0px;
        margin-inline-end: 0px;
        padding-inline-start: 40px;
    }
    li {
        width: 100%;
        border-top: 1px #e3e4e8 solid;
        border-bottom: 1px #e3e4e8 solid;
        display: block;
        color: #434a54;
        font-size: 13px;
        font-weight: bold;
    }
</style>
