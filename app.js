var app = new Vue({
    el: '#app',
    data: {
      mensaje:"Hola soy de Perú"
      
    },
    methods:{
        mensaje2(){
            alert(this.mensaje);
        }
    }

  })