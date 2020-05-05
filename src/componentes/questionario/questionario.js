
document.addEventListener('DOMContentLoaded', function() {
    var carousel = document.querySelectorAll('.carousel');
    var carouselOptions = {
        fullWidth: true,
        indicators: true,
        noWrap: true
    }
    var selects = document.querySelectorAll('select');
    var selectsOptions = {};
    M.FormSelect.init(selects, selectsOptions);
    M.Carousel.init(carousel, carouselOptions);
  });


const questionario = new Vue({
    el: "#questionario",
    data: {
        motivacao: "",
        restricao: "",
        sexo: "",
        dtNascimento: "",
        atividadeFisica: [],
        peso: 0,
        altura: 0,
        circQuadril: null,
        circCintura: null
    },
    methods: {}
});