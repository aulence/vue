<template>
    <div class="container">
        <div class="noMatching" v-if="noMatching">
            <p>-- 对不起，该书库暂未搜录该类图书 --</p>
        </div>
        <table class="table" v-else>
            <thead>
                <tr>
                    <th :class="checkboxStyle"></th>
                    <th v-for="info in thInfo" :key="info.id">{{info}}</th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="book in bookInfo" :key="book.id" :class="{'checked-style':book.selection}">
                    <td :class="checkboxStyle">
                        <input 
                            name="bookCkb" 
                            type="checkbox" 
                            v-model="book.selection"
                            :value="book.name"
                            @change="$emit('checkChange')"
                        />
                    </td>
                    <td :class="bookNameStyle">{{book.name}}</td>
                    <td :class="describeStyle">
                        <div :title="book.describe">{{book.describe}}</div>
                    </td>
                    <td>{{book.author}}</td>
                </tr>
            </tbody>
        </table>
    </div>
    
</template>

<script>
    export default {
        name: "BookInfoList",
        props: ['thInfo', 'bookInfo', 'noMatching'],
        data() {
            return {
                // 表格样式设置
                checkboxStyle: 'checkboxTd',
                bookNameStyle: 'bookName',
                describeStyle: 'describe',
                // 选中时表格行的样式
                'checked-style': false
            };
        }
    };
</script>

<style lang="less" scoped>
    @import '../styles/book-info-list.less';
</style>