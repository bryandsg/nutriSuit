
document.addEventListener('DOMContentLoaded', function() {
    var elems = document.querySelectorAll('select');
    var instances = M.FormSelect.init(elems);
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