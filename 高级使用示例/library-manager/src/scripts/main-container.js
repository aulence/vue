import HeaderBlock from '@/components/HeaderBlock'
import SearchTools from '@/components/SearchTools'
import BookInfoList from '@/components/BookInfoList'

export default {
    name: "MainContainer",
    components: {
        HeaderBlock,
        SearchTools,
        BookInfoList
    },
    data() {
        return {
            thItem: ['书名','描述','作者'],
            bookList: [],
            matching: null,
            notFindMatch: false,
            checkedBook: [],
            // 是否处在搜索状态
            searching: false
        };
    },
    computed: {
        // 匹配的图书本数
        bookLength() {
            return this.bookFilter.length;
        },
        // 匹配的图书列表
        bookFilter() {
            // 如果输入值为空的时候
            if(!this.matching) {
                // 设置搜索状态
                this.searching = false;
                // 显示原有图书列表
                return this.bookList;
            }
            // 如果存在输入匹配的结果
            else if(this.matching.length) {
                // 清除“找不到匹配项”的容器
                this.notFindMatch = false;
                // 设置搜索状态
                this.searching = true;
                // 获得匹配项数组
                return this.matching;
            }
            // 如果找不到输入结果的匹配项
            else {
                // 找不到的状态为真
                this.notFindMatch = true;
                this.searching = true;
                return [];
            }
        },
        // 是否有图书被选中
        hasCheckedBook() {
            return this.checkedBook.length > 0 ? true : false;
        }
    },
    methods: {
        loadBookInfo() {
            axios.get('../../static/book-info.json')
            .then((res) => {
                this.bookList = res.data;
            })
            .catch(function(){
                console.error('数据请求错误');
            });
        },
        // 匹配搜索的值
        searchBook(val) {
            if(val.trim() === "") {
                this.matching = this.bookList;
            }
            else {
                this.matching = this.bookList.filter((item) => {
                    const matchReg = new RegExp(val, "ig");
                    return matchReg.test(item.name) || matchReg.test(item.author);
                });
            }
        },
        // 图书单项选择
        checkChange() {
            // 筛选中被选中的book对象
            this.checkedBook = this.bookFilter.filter((book) => {
                return book.selection;
            });
        },
        // 删除被选中的图书项
        deleteChecked() {
            // 获取被选中项的个数
            let checkedBookCount = this.checkedBook.length;
            // 设置计数索引
            let index = 0;
            
            while(checkedBookCount) {
                if(this.bookList[index].selection) {
                    this.bookList.splice(index,1);
                    checkedBookCount--;
                }
                else {
                    index++;
                }
            }

            /**
             * 如果当前处于搜索状态，搜索中删除后并不会马上同步到视图上
             * 这里的操作是为了让搜索结果中的操作也能立即同步到视图上 
             */ 
            // 获取被选中项的个数（搜索状态）
            let checkedBookCount_search = this.checkedBook.length;
            // 设置计数索引（搜索状态）
            let index_search = 0;
            // 如果处于搜索状态
            if(this.searching) {
                while(checkedBookCount_search) {
                    if(this.bookFilter[index_search].selection) {
                        this.bookFilter.splice(index_search,1);
                        checkedBookCount--;
                    }
                    else {
                        index_search++;
                    }
                }
            }

            // 消除删除按钮
            /**
             * 这里利用了checkedBook属性
             * 它是hasCheckedBook（是否有选中项）的计算属性执行来源
             * 而hasCheckedBook正是删除按钮v-if的值
             */
            this.checkedBook = [];
        }
    },
    created(errMesg) {
        this.loadBookInfo();
    },
    watch: {
        bookList() {
            
        }
    }
};