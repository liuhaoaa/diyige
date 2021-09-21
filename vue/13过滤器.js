Vue.filter('meter',function(val,unit) {
  val = val || 0;
  unit = unit || 'm';
  return (val / 100).toFixed(2) + unit;
});



// currency 过滤器 
Vue.filter('currency',function(val,unit) {
  unit = unit || '元';
  val = val || 0;
  return val + '元';
});

new Vue ({
  el:'#app',
  data:{
price:10,
length:10
  }
})