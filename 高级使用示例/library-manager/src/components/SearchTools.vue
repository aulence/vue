<template>
    <div class="container search-tools">
        <div class="chooseInfo">
            共有：{{totalCount}} 本，选中 {{checkedCount.length}} 本
        </div>
        <input type="search" :placeholder="placeholder" @keyup="$emit('search', $event.target.value)">
        <i class="glyphicon glyphicon-search"></i>
        <button 
            type="button" 
            class="btn btn-default delete" 
            title="删除选中" 
            v-if="hasCheckedBook"
            @click="$emit('deleteChecked')"
        >
            <span class="glyphicon glyphicon-trash"></span>
        </button>
    </div>
</template>

<script>
    export default {
        name: "SearchTools",
        props: ['placeholder', 'totalCount', 'checkedCount', 'hasCheckedBook'],
        data() {
            return {
               
            };
        }
    };
</script>

<style lang="less" scoped>
    @theme-color: rgb(100, 90, 82);

    .search-tools {
        height: 90px;
        padding: 20px 15px;
        position: relative;
        margin-top: 12px;
        margin-bottom: 12px;
        /* 选择信息 */
        .chooseInfo {
            position: absolute;
            left: 15px; 
            top: 30px;
        }
        /* 搜索框 */
        input[type="search"] {
            width: 70%;
            padding: 12px;
            background-color: lighten(@theme-color, 20%);
            border: 1px solid #aaa;
            border-radius: 3px;
            vertical-align: middle;
            color: #ffffff;
            position: absolute;
            right: 68px; 
            top: 18px;
            &::-webkit-input-placeholder {
                color: lighten(@theme-color, 50%);
            }
            & + i {
                margin-left: -35px;
                color: lighten(@theme-color, 50%);
                transition: all .3s;
                position: absolute;
                right: 86px; 
                top: 32px;
            }
            &:focus + i {
                color: lighten(@theme-color, 70%);
                transform: scale(1.2);
            }
        }
        /* 删除按钮 */
        .delete {
            border: none;
            background-color: transparent;
            font-size: 1.2rem;
            color: lighten(@theme-color, 50%);
            cursor: pointer;
            position: absolute;
            right: 15px;
            top: 24px;
            &:hover {
                color: lighten(@theme-color, 70%);
            }
            &:active {
                color: lighten(@theme-color, 50%);
            }
            &:focus {
                outline: none;
            }
        }
    }
</style>