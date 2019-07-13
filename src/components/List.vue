<template>
    <div>
            <input type="text" v-model="filterText">
            <ul>
                <li v-for="fruit in Filtered">{{fruit}}</li>
            </ul>
    </div>
</template>

<script>

import { FruitMixing } from "../fruitsMixin";

export default {
    mixins: [FruitMixing]
}
</script>

<style>

</style>
