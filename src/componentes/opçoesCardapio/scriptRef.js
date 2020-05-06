
     document.addEventListener('DOMContentLoaded', function () {
        var elems = document.querySelectorAll('.sidenav');
        var instances = M.Sidenav.init(elems);
    });


let vm = new Vue({
    el: "#app",
    data: {
        contadorP: 0,
        contadorL: 0,
        contadorC: 0,
        contadorPr: 0,
        contadorS: 0,

        pão: {
            tipo: 'Francês',
            quantidade: '1 Pão',
            img: 'https://savegnago.vteximg.com.br/arquivos/ids/297270-1000-1000/PAO-FRANCES-250G-PORCAO.jpg?v=636964555164900000',
        },

        leite: {
            tipo: 'Desnatado',
            quantidade: '200ml',
            img: 'https://static.carrefour.com.br/medias/sys_master/images/images/h11/hca/h00/h00/9460861829150.jpg',
        },

        cereal: {
            tipo: 'Risoto Integral',
            quantidade: '275g',
            img: '',
        },

        proteina: {
            tipo: 'Omelete',
            quantidade: '150g',
            img: '',
        },

        salada: {
            tipo: 'Alface',
            quantidade: '5 folhas',
            img: '',
        },

        

    },

    methods: {
        changeItem1: function () {

            var img = document.getElementById("pãoImg");

            if (this.contadorP == 0) {

                img.src = 'https://pt.petitchef.com/imgupl/recipe/pao-de-forma-caseiro-e-bem-facil--lg-455898p708561.jpg'
                this.pão.tipo = document.getElementById("pão").innerHTML = "Forma"
                this.pão.quantidade = document.getElementById("qntPão").innerHTML = "2 Fatias"
                this.contadorP = this.contadorP + 1;

            } else if (this.contadorP == 1) {

                img.src = 'https://www.confeiteiradesucesso.com/wp-content/uploads/2019/03/paociabattarceita56.jpg'
                this.pão.tipo = document.getElementById("pão").innerHTML = "Ciabata"
                this.pão.quantidade = document.getElementById("qntPão").innerHTML = "¹/² Pão"
                this.contadorP = this.contadorP + 1;

            } else if (this.contadorP == 2) {

                img.src = 'https://4.bp.blogspot.com/-fPLguACEg9k/VwqKOZhjSFI/AAAAAAAAB3k/iyBlWuzHf_YtS6ps-OQaQpl5vH3fHGPWg/s1600/maxi-baguete.jpg'
                this.pão.tipo = document.getElementById("pão").innerHTML = "Bisnaga"
                this.pão.quantidade = document.getElementById("qntPão").innerHTML = "100g"
                this.contadorP = this.contadorP + 1;

            } else if (this.contadorP == 3) {


                img.src = 'https://savegnago.vteximg.com.br/arquivos/ids/297270-1000-1000/PAO-FRANCES-250G-PORCAO.jpg?v=636964555164900000'
                this.pão.tipo = document.getElementById("pão").innerHTML = "Francês"
                this.pão.quantidade = document.getElementById("qntPão").innerHTML = "1 Pão"
                this.contadorP = 0;

            }

        },
        changeItem2: function () {

            var img = document.getElementById("leiteImg");

            if (this.contadorL == 0) {

                img.src = 'https://static.carrefour.com.br/medias/sys_master/images/images/hf0/h13/h00/h00/9460858880030.jpg'
                this.leite.tipo = document.getElementById("leite").innerHTML = "Integral"
                this.leite.quantidade = document.getElementById("qntLeite").innerHTML = "225ml"
                this.contadorL = this.contadorL + 1;

            } else if (this.contadorL == 1) {

                img.src = 'https://static.carrefour.com.br/medias/sys_master/images/images/h5d/h63/h00/h00/17523031474206.jpg'
                this.leite.tipo = document.getElementById("leite").innerHTML = "Sem Lactose"
                this.leite.quantidade = document.getElementById("qntLeite").innerHTML = "250ml"
                this.contadorL = this.contadorL + 1;

            } else if (this.contadorL == 2) {

                img.src = 'https://tendaatacado.vteximg.com.br/arquivos/ids/230174/984796.jpg?v=637106330318600000'
                this.leite.tipo = document.getElementById("leite").innerHTML = "Natural"
                this.leite.quantidade = document.getElementById("qntLeite").innerHTML = "275ml"
                this.contadorL = this.contadorL + 1;

            } else if (this.contadorL == 3) {


                img.src = 'https://static.carrefour.com.br/medias/sys_master/images/images/h11/hca/h00/h00/9460861829150.jpg'
                this.leite.tipo = document.getElementById("leite").innerHTML = "Desnatado"
                this.leite.quantidade = document.getElementById("qntLeite").innerHTML = "200ml"
                this.contadorL = 0;

            }

        },
        changeItem3: function () {

            var img = document.getElementById("cerealImg");

            if (this.contadorC == 0) {

                img.src = ''
                this.cereal.tipo = document.getElementById("cereal").innerHTML = "Arroz"
                this.cereal.quantidade = document.getElementById("qntCereal").innerHTML = "250g"
                this.contadorC = this.contadorC + 1;

            } else if (this.contadorC == 1) {

                img.src = ''
                this.cereal.tipo = document.getElementById("cereal").innerHTML = "Linhaça"
                this.cereal.quantidade = document.getElementById("qntCereal").innerHTML = "300g"
                this.contadorC = this.contadorC + 1;

            } else if (this.contadorC == 2) {

                img.src = ''
                this.cereal.tipo = document.getElementById("cereal").innerHTML = "Soja"
                this.cereal.quantidade = document.getElementById("qntCereal").innerHTML = "280g"
                this.contadorC = this.contadorC + 1;

            } else if (this.contadorC == 3) {


                img.src = ''
                this.cereal.tipo = document.getElementById("cereal").innerHTML = "Risoto Integral"
                this.cereal.quantidade = document.getElementById("qntCereal").innerHTML = "275g"
                this.contadorC = 0;

            }

        },

        changeItem4: function () {

            var img = document.getElementById("proteinaImg");

            if (this.contadorPr == 0) {

                img.src = ''
                this.proteina.tipo = document.getElementById("proteina").innerHTML = "Ovo Frito"
                this.proteina.quantidade = document.getElementById("qntProteina").innerHTML = "1 unidade"
                this.contadorPr = this.contadorPr + 1;

            } else if (this.contadorPr == 1) {

                img.src = ''
                this.proteina.tipo = document.getElementById("proteina").innerHTML = "Ovo de Codorna"
                this.proteina.quantidade = document.getElementById("qntProteina").innerHTML = "6 unidades"
                this.contadorPr = this.contadorPr + 1;

            } else if (this.contadorPr == 2) {

                img.src = ''
                this.proteina.tipo = document.getElementById("proteina").innerHTML = "Quinoa"
                this.proteina.quantidade = document.getElementById("qntProteina").innerHTML = "200g"
                this.contadorPr = this.contadorPr + 1;

            } else if (this.contadorPr == 3) {

                img.src = ''
                this.proteina.tipo = document.getElementById("proteina").innerHTML = "Omelete de queijo"
                this.proteina.quantidade = document.getElementById("qntProteina").innerHTML = "150g"
                this.contadorPr = 0;

            }

        },

        changeItem5: function () {

            var img = document.getElementById("saladaImg");

            if (this.contadorS == 0) {

                img.src = ''
                this.salada.tipo = document.getElementById("salada").innerHTML = "Beterraba"
                this.salada.quantidade = document.getElementById("qntSalada").innerHTML = "1 unidade"
                this.contadorS = this.contadorS + 1;

            } else if (this.contadorS == 1) {

                img.src = ''
                this.salada.tipo = document.getElementById("salada").innerHTML = "Cenoura ralada"
                this.salada.quantidade = document.getElementById("qntSalada").innerHTML = "2 unidade"
                this.contadorS = this.contadorS + 1;

            } else if (this.contadorS == 2) {

                img.src = ''
                this.salada.tipo = document.getElementById("salada").innerHTML = "Tomate"
                this.salada.quantidade = document.getElementById("qntSalada").innerHTML = "1 unidade"
                this.contadorS = this.contadorS + 1;

            } else if (this.contadorS == 3) {

                img.src = ''
                this.salada.tipo = document.getElementById("salada").innerHTML = "Alface"
                this.salada.quantidade = document.getElementById("qntSalada").innerHTML = "6 folhas"
                this.contadorS = 0;

            }

        },




    },
});
