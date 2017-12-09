<template>
    <div class="axios">
        <h1>{{ msg }}</h1>
        <ul>
            <li v-for="role in roleList" :key="role.id">
                <span>角色名：{{role.name}}</span>
                <span> -- </span>
                <span>等级：{{role.level}}</span>
            </li>
        </ul>
    </div>
</template>

<script>
    export default {
        name: 'axios',
        data() {
            return {
                msg: '角色列表',
                roleList: []
            }
        },
        methods: {
            setRoleList() {
                const self = this;
                axios.get('../../static/role-info.json')
                .then(function(res) {
                    self.roleList = res.data;
                }).catch(function(err) {
                    console.error('请求错误，原因不知道！');
                });
            }
        },
        created() {
            this.setRoleList();
        }
    }
</script>

<style scoped>
</style>