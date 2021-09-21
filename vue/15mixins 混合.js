var base = {
methods:{
  show:function() {
    this.visible = true;
},
hide:function() {
  this.visible = false;
},
toggle:function(){
  this.visible = !this.visible;
},
},
data:function(){
  return{
    visible:false,
  }
}
};


Vue.component('tooltip',{
  template:`
  <div>
  <span @mouseenter="show" @mouseleave="hide">拉拉</span>
  <div v-if="visible">
  刘好好
  </div>
  </div>
  `,
  mixins:[base]
});

Vue.component('popup',{
  template:`
  <div>
  <button @click="toggle">Popup</button>
  <div v-if="visible">
  <span @click="hide">X</span>
  <h4>你好吗</h4>
  alawlaldealfkawfrkaworkaokrfoafjkakwjrapjflkalf分厘卡空间的法务会计
  </div>
  </div>
  `,
  mixins:[base]
})



new Vue({
  el:'#app',
  data:{}
})