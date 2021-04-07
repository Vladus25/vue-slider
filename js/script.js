
function initVue(){

  new Vue({

    el: '#app',
    data: {

      'text': 'Diverse Foto',
      'index': 0,
      'timer': '',
      'img': ['img/img-1.JPG', 'img/img-2.JPG', 'img/img-3.JPG', 'img/img-4.JPG'],

    },
    methods: {

      start: function() {

        this.timer = setInterval(this.next, 1.5 * 1000)
      },
      stop: function() {

        this.timer = clearInterval(this.timer)
      },
      next: function () {

        // Primo metodo più efficiente
        this.index++;

        if(this.index == this.img.length) {

          this.index = 0;
        }

        // Secondo metodo

        // if (this.img == 'img/img-1.JPG') {
        //
        //   this.img = 'img/img-2.JPG'
        // }
        // else if (this.img == 'img/img-2.JPG') {
        //
        //   this.img = 'img/img-3.JPG'
        // }
        // else if (this.img == 'img/img-3.JPG') {
        //
        //   this.img = 'img/img-4.JPG'
        // }
        // else {
        //
        //   this.img = 'img/img-1.JPG'
        // }
      },
      prev: function () {

        // Primo metodo più efficiente
        this.index--;
        
        if(this.index < 0) {

          this.index = this.img.length -1;
        }

        // Secondo metodo

        // if (this.img == 'img/img-4.JPG') {
        //
        //   this.img = 'img/img-3.JPG'
        // }
        // else if (this.img == 'img/img-3.JPG') {
        //
        //   this.img = 'img/img-2.JPG'
        // }
        // else if (this.img == 'img/img-2.JPG') {
        //
        //   this.img = 'img/img-1.JPG'
        // }
        // else {
        //
        //   this.img = 'img/img-4.JPG'
        // }
      }

    }

  });
}

function init() {
  initVue();
}

$(init);
