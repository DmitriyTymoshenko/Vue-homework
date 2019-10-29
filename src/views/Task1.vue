<template>
    <div class="wrapper">
        <div class="btn-authors">
            <div class="btns">
            <btn name="Harry Potter" @customEvent="showHarry"></btn>
            <p v-if="num > 0" class="counterColor">Clicked {{num}}</p>
            </div>
            <div class="btns">
            <btn name="Star Wars" @customEvent="showStar"></btn>
                <p v-if="num1 > 0" class="counterColor">Clicked {{num1}}</p>
            </div>
            <div class="btns">
            <btn name="Lord of The Ring's" @customEvent="showLord"></btn>
                <p v-if="num2 > 0" class="counterColor">Clicked {{num2}}</p>
            </div>

        </div>
        <div class="list" :class="{'yellow' : yellow ,'green' : green , 'blue' : blue}">
            <p v-for="item in arr1" v-if="harry">{{item}}</p>
            <p v-for="item2 in arr2" v-if="starwars">{{item2}}</p>
            <p v-for="item3 in arr3" v-if="lord">{{item3}}</p>
            <p v-if="!harry && !starwars && !lord" >Select The Best Film</p>
        </div>
        <div class="btn-color">
            <btn name="yellow" @customEvent="setYellow"></btn>
            <btn name="green" @customEvent="setGreen"></btn>
            <btn name="blue" @customEvent="setBlue"></btn>
        </div>
    </div>
</template>

<script>

    import btn from '../components/task3btn.vue'
    export default {
        name : "Task1",
        components: {
            btn
        },
        data() {
            return {
                harry : false ,
                starwars : false ,
                lord : false,
                num : 0,
                num1 : 0,
                num2 : 0,
                yellow : false,
                green : false,
                blue : false,
                defaultText : true,
                arr1: ["Harry Potter and the Philosopher's Stone (2001)", "Harry Potter and the Chamber of Secrets (2002)", "Harry Potter and the Prisoner of Azkaban (2004)"],
                arr2: ["Star Wars: The Visual Dictionary (1998), by David West Reynolds",
                    "Star Wars: Episode I The Visual Dictionary (1999), by David West Reynolds", "Star Wars: Attack of the Clones The Visual Dictionary (2002), by David West Reynolds"],
                arr3: ["Minas Tirith.",
                    "The Passing of the Grey Company.",
                    "The Muster of Rohan."]
            }
        },
        methods : {
            showHarry : function () {
                this.harry = !this.harry;
                this.num++;
            },
            showStar : function () {
                this.starwars = !this.starwars;
                this.num1++;
            },
            showLord : function () {
                this.lord = !this.lord;
                this.num2++;
            },
            setYellow : function () {
                this.yellow = !this.yellow
            },
            setGreen : function () {
                this.green = !this.green
            },
            setBlue : function () {
                this.blue = !this.blue
            }
        }
    }
</script>
<style lang="sass">
    .wrapper
        display: flex
        flex-direction: column
        justify-content: center
        .btn-authors
            display: flex
            justify-content: space-around
            .btns
                display: flex
                flex-direction: column
                align-items: center
                justify-content: center
                .counterColor
                    color: red
                button
                    color: #000
        .list
            display: flex
            flex-direction: column
            border: 1px solid black
            border-radius: 5px
            width: 50vw
            align-items: center
            justify-content: center
            margin : 0 auto
            p
                font-size: 20px
        .btn-color
            display: flex
            justify-content: center
            button
                margin: 0 10px
                color: #000!important
        .yellow
            background: yellow
        .green
            background: #42b983
        .blue
            background: lightblue
</style>