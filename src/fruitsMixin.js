export const FruitMixing ={
    data:function () {
        return {
            text: 'Hellow THere',
            fruits:['Apple', 'Orange', 'Banana', 'Pineapple', 'Grapes', 'Fig'],
            filterText: ''
        }
    },
    computed:{
        Filtered:function(){
            return this.fruits.filter((element)=>{
                return element.match(this.filterText);
            });
        }
    }
};