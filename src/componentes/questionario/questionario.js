
document.addEventListener('DOMContentLoaded', function() {
    var carousel = document.querySelectorAll('.carousel');
    var carouselOptions = {
        fullWidth: true,
        indicators: true,
        noWrap: true
    }
    var selects = document.querySelectorAll('select');
    var selectsOptions = {};

    var elems = document.querySelectorAll('.sidenav');
    
    M.Sidenav.init(elems);
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

function verify() {
    M.toast({
        html:"Todos os campos com * devem ser preechidos!",
        classes: 'rounded red text-black'
    })
}
