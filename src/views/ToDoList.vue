<template>
    <div class="todos" :class="{'ChangeBackgroound': tryChange }" :style="{'color': tryChange ? 'white' : 'green'}">
        <div class="todos_block">
            <h2 :style="{'color': tryChange ? 'white' : 'green'}">Welcome To Todo List</h2>
            <div class="input-block">
            <input v-model="todos" @keyup.enter="callEvent" :placeholder="name" type="text">
            <button @click="callEvent">Add</button>
            </div>
            <div class="input-answers">
            <ol>
                <li v-for="(item , index) in arr" :class="{'completed' : completed}" :key="index"><input type="checkbox">{{item}}<button @click="editItems">Edit</button>
                </li>
            </ol>
            </div>
            <div class="btns" v-if="arr.length">
            <button @click="deleteItems">Delete Item</button>
            <button @click="clearAll">Clear All</button>
            </div>
                <button class="themeBtn" @click="tryChange=!tryChange">Change Theme</button>
        </div>

    </div>
</template>
<script>
    export default {
        name: 'todos',
        data() {
            return {
                name: 'Enter Todos',
                todos: '',
                arr: [],
                tryChange : false,
                completed : false,
                checked : false,
            }
        },
        methods: {
            callEvent: function () {
                if (this.todos) {
                    this.arr.push(this.todos);
                    this.todos = '';
                }
            },
            deleteItems : function () {
                this.arr.pop();
            },
            editItems : function () {
                 this.todos = this.arr;
            },
            clearAll : function () {
                this.arr = [];
            }
        }
    }

</script>
<style lang="sass">
    .ChangeBackgroound
        background: gray!important
    .todos
        display: flex
        flex-direction: column
        background: lightgreen
        height: 100vh
        justify-content: flex-start
        align-items: center
        .todos_block
            width: 50vw
            display: flex
            flex-direction: column
            .input-block
                display: flex
            .input-answers
                display: flex
                flex-direction: column
                width: 100%
            .btns
                display: flex
                justify-content: flex-start
                button
                    margin-left : 20px
            input
                display: flex
                margin: 0 auto
                width: 30vw
                height: 30px
                padding: 5px
                border-radius: 5px
                border: none
            ol
                display: flex
                flex-direction: column
                li
                   display: flex
                   text-align: left
                   font-size: 22px
                   justify-content: space-between

                button
                    margin-left: 40px
                    background: red
            .completed
                text-decoration: line-through
            button
                background: darkslategrey
                color: #fff
                width: 100px
                border: none
                padding: 10px
                border-radius: 5px
                &focus
                   outline: none
            .themeBtn
                width: 200px
                margin: 20px




</style>