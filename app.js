var app = new Vue({
    el: '#app',
    data: {
      message: 'Hello ' ,
      city: 'Lima',
      country: 'Peru'
    },
    methods:{
        imprimirEnConsola(){
            console.log("Hola mundo");
        }
    },
    computed:{
        alert:function(){
            alert(this.message);
        }
    }

  })