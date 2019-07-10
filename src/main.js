import Vue from 'vue'
import App from './App.vue'

Vue.config.productionTip = false

Vue.directive('highlight',{
  bind(el,binding,vnode){
    // el.style.background='green';
    // el.style.background=binding.value;  //Value of the binding 

    // Check whether Modifiers is there are not
    var delay =0;
    if(binding.modifiers['delayed'])
    {
      delay = 3000; //if modifiers is present in ObjectModifier
    }
    setTimeout(() => {
      if(binding.arg =='background')
      {
        el.style.backgroundColor = binding.value;
      }
      else
      {
        el.style.color = binding.value;
      }
      
    }, delay);
  }
})

new Vue({
  render: h => h(App),
}).$mount('#app')
