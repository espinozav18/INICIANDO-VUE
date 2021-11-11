var app = new Vue({
    el: '#app',
    data: {
      message: 'Hello ' ,
      city: 'Lima',
      country: 'Peru',
      name: 'Espinoza',
      numero1:20,
      numero2:30
    },
    methods:{
        imprimirEnConsola(){
            console.log("Hola mundo");
        }
    },
    computed:{
        alert(){
            alert(this.message);
        }
    }

  })