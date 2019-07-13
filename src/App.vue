<template>
    <div class="container">
        <div class="row">
            <h1>Filters and Mixins</h1>
            <p>{{text | toUpperCase}}</p>
            <p>{{text | toLowerCase}}</p>
        </div>
    </div>
</template>

<script>
export default {
    data:function () {
        return {
            text: 'Hellow THere'
        }
    },
    filters:{
        toUpperCase:function(val){
            return val.toUpperCase();
        },
        toLowerCase:function(val){
            return val.toLowerCase();
        }
    }
}
</script>

<style>

</style>
