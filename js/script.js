
function initVue(){

  new Vue({

    el: '#app',
    data: {

      'text': 'Diverse Foto',
      'img': 'img/img-1.JPG',
      'timer': ''
    },
    methods: {

      start: function() {

        this.timer = setInterval(this.next, 1.5 * 1000)
      },
      stop: function() {

        this.timer = clearInterval(this.timer)
      },
      next: function () {

        if (this.img == 'img/img-1.JPG') {

          this.img = 'img/img-2.JPG'
        }
        else if (this.img == 'img/img-2.JPG') {

          this.img = 'img/img-3.JPG'
        }
        else if (this.img == 'img/img-3.JPG') {

          this.img = 'img/img-4.JPG'
        }
        else {

          this.img = 'img/img-1.JPG'
        }
      },
      prev: function () {

        if (this.img == 'img/img-4.JPG') {

          this.img = 'img/img-3.JPG'
        }
        else if (this.img == 'img/img-3.JPG') {

          this.img = 'img/img-2.JPG'
        }
        else if (this.img == 'img/img-2.JPG') {

          this.img = 'img/img-1.JPG'
        }
        else {

          this.img = 'img/img-4.JPG'
        }
      }

    }

  });
}

function init() {
  initVue();
}

$(init);
