<template>
    <div class="main">
        <!-- header部分 -->
        <HeaderBlock 
            set-title="图书管理" 
            small-title="Library Manager" 
        />
        <!-- 搜索工具栏部分 -->
        <SearchTools 
            placeholder="请输入图书名称或者书籍的作者进行搜索" 
            @search="searchBook" 
            :total-count="bookLength"
            :checked-count="checkedBook"
            :has-checked-book="hasCheckedBook"
            @deleteChecked="deleteChecked"
        />
        <!-- 图书表格列表部分 -->
        <BookInfoList 
            :th-info="thItem" 
            :book-info="bookFilter" 
            :noMatching="notFindMatch" 
            @checkChange="checkChange"
        />
    </div>
</template>

<script src="../scripts/main-container.js"></script>

<style lang="less">

</style>