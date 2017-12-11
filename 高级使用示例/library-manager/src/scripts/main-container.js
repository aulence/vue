import HeaderBlock from '@/components/HeaderBlock'
import SearchTools from '@/components/SearchTools'
import BookInfoList from '@/components/BookInfoList'

export default {
    name: "MainContainer",
    components: {
        // header标签部分
        HeaderBlock,
        // 搜索框部分（含计数器和删除按钮）
        SearchTools,
        // 图书信息表格部分
        BookInfoList
    },
    data() {
        return {
            thItem: ['书名','描述','作者'],
            bookList: [],
            // 搜索输入时匹配的数组
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
                // 设置搜索状态（这个状态在删除的时候会用到）
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
            // 根据选中项的个数返回布尔值
            return this.checkedBook.length > 0 ? true : false;
        }
    },
    methods: {
        loadBookInfo() {
            // 使用axios进行数据请求
            axios.get('../../static/book-info.json')
            .then((res) => {
                // 如果请求成功，将bookList空数组替换为请求到的数组
                this.bookList = res.data;
            })
            .catch(function(){
                console.error('数据请求错误');
            });
        },
        // 匹配搜索的值
        searchBook(val) {
            // 如果输入的值为空（去处字符串两端空格）
            if(val.trim() === "") {
                this.matching = this.bookList;
            }
            else {
                // 将满足条件的对象数组项返回为一个新的对象数组
                this.matching = this.bookList.filter((item) => {
                    // 将搜索框输入的值作为正则搜索条件
                    const matchReg = new RegExp(val, "ig");
                    // 匹配书名或作者名
                    return matchReg.test(item.name) || matchReg.test(item.author);
                });
            }
        },
        // 图书单项选择
        checkChange() {
            // 筛选中被选中的book对象返回为一个新的数组对象
            this.checkedBook = this.bookFilter.filter((book) => {
                // 返回true或者undefined
                return book.selection;
            });
        },
        // 删除被选中的图书项
        deleteChecked() {
            // 获取被选中项的个数
            let checkedBookCount = this.checkedBook.length;
            // 设置计数索引
            let index = 0;
            
            /**
             * 这里的checkedBookCount只有在执行删除后才会-1
             * 而index只有在没有找到选中项的时候才+1
             */
            while(checkedBookCount) {
                if(this.bookList[index].selection) {
                    // 删除数组内对应索引的图书对象
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
        // 执行书库列表加载
        this.loadBookInfo();
    }
};