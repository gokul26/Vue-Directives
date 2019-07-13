<template>
    <div class="container">
        <div class="row">
            <h1>Filters and Mixins</h1>
            <p>{{text | toUpperCase | toLowerCase}}</p>
            <input type="text" v-model="filterText">
            <ul>
                <li v-for="fruit in Filtered">{{fruit}}</li>
            </ul>
        </div>
        <app-List></app-List>
    </div>
</template>

<script>

import List from './components/List';
import { FruitMixing } from "./fruitsMixin";


export default {
    data:function () {
        return {
            text: 'Hellow THere',
        }
    },
    mixins:[FruitMixing],
    filters:{
        // LocalFilter
        toUpperCase:function(val){
            return val.toUpperCase();
        }
    },
    components:{
        appList: List
    }
}
</script>

<style>

</style>
