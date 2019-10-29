<template>
    <div>
        <form class="form" @submit.prevent="showPopup">
            <h2>{{message}}</h2>
            <input :placeholder="titleName" v-model="loginName" type="text" required>
            <input :placeholder="titlePass" v-model="loginPass" type="text" required>
            <button>{{name}}</button>
        </form>
        <div class="popup" v-if="showWindow">{{showMessage}}</div>
    </div>
</template>

<script>
    export default {
        props: {
            name: {
                type: String,
                default: "Login"
            }
        },
        name: "login",
        components: {},
        data() {
            return {
                message: 'Login Form',
                showMessage: 'Welcome to my World!',
                titleName: 'Name',
                titlePass: 'Password',
                loginName: '',
                loginPass: '',
                showWindow: false
            }
        },
        methods : {
            showPopup : function() {
                this.showWindow = true;
                this.loginName = '';
                this.loginPass = '';
                setTimeout (() => {
                    this.showWindow = false;
                    this.$router.push('/list');
                },2000)

            }
        }
    }
</script>
<style lang="sass">
    .form
        display: flex
        flex-direction: column
        width: 30vw
        height: 300px
        align-items: center
        justify-content: center
        margin: 0 auto
        background: lightgreen
        /*border-radius: 5px*/
        border-bottom-left-radius: 10px
        border-bottom-right-radius: 10px
        input
            margin: 10px
            border: 1px solid lightgreen
            border-radius: 5px
            padding: 5px
        button
            background: darkslategrey
            border-radius: 5px
            border: none
            color: #fff
            padding: 5px 10px
            margin: 10px
    .popup
       display: flex
       position: fixed
       padding: 20px
       border: 1px solid darkslategrey
       color: #fff
       top : 30%
       left : 40%
       right : 40%
       background: darkslategrey
       margin: 0 auto
       border-radius: 5px
       justify-content: center
       font-size: 20px
       font-weight: bold


</style>