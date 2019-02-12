var vm = new Vue({
    el: '#main',
    data: {
        burgerTitle: 'Burger selection',
        menu: food,
        checkedBurgers: [],
        picked: "Do not wish to provide",
        payment: "",
        fullname: "",
        email: "",
        streetname: "",
        housenr: "",
        visible: false,
    },

    methods: {
        showOrder: function () {
            vm.visible = true;
        }
    }

})