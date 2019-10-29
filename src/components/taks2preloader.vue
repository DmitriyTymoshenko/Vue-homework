<template>
    <div class="container">
        <h1>The Content is Loading</h1>
        <div class="circular-container">
            <div class="circle circular-loader1">
                <div class="circle circular-loader2">    </div>
            </div>
        </div>
    </div>
</template>
<style scoped="">
    body{

    }
    .container{
        text-align: center;
        color: #fff;
        background-color: #2a2a2a;
        margin: 0;
        height: 100vh;
        width: 100vw;
        display: flex;
        align-items: center;
        flex-direction: column;
    }
    .circular-container{
        width:10%;
        margin: 0 auto;
    }

    .circle{
        border: 5px solid transparent;
        border-radius: 50%;
    }

    .circular-loader1{
        width: 100px;
        height: 100px;
        display: table;
        padding: 10px;
        border-top: 5px solid #006495;
        border-bottom: 5px solid #006495;
        animation: circular_loader1 linear 2s infinite;
    }

    .circular-loader2{
        width: 10px;
        height: 10px;
        display: table-cell;
        border-right: 5px solid #3498db;
        border-left: 5px solid #3498db;
        animation: circular_loader2 linear 2s infinite;
    }

    @keyframes circular_loader1 {
        0% {
            transform: rotate(0deg);
        }
        50% {
            transform: rotate(-90deg);
        }
        100% {
            transform: rotate(360deg);
        }
    }

    @keyframes circular_loader2 {
        0% {
            transform: rotate(0deg);
        }
        50% {
            transform: rotate(-180deg);
        }
        100% {
            transform: rotate(360deg);
        }
    }
</style>