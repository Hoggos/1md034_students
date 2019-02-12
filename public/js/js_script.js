function MenuItem(name, kCal, gluten, lactose) {
    this.name = name;
    this.kCal = kCal;
    this.gluten = gluten;
    this.lactose = lactose;

    this.burgerInfo = function () {
        return this.Name + " " + this.kCal;
    }
}

var insertBurgers = function () {

    var burgerGrid = document.getElementById('burgers');

    for (i in food) {
        let div = document.createElement('div');
        div.setAttribute('class', food[i].burgerClass);

        /* Insert title */
        let header = document.createElement('h4');
        let headerText = document.createTextNode(food[i].name);
        header.appendChild(headerText);
        div.appendChild(header);

        /* Insert image */
        let burgerImg = document.createElement("IMG");
        burgerImg.setAttribute("src", food[i].image);
        burgerImg.setAttribute("width", 450);
        div.appendChild(burgerImg);

        /* Insert infolist */
        let infoList = document.createElement('ul');

        let calBullet = document.createElement('li');
        let calText = document.createTextNode(food[i].kCal + " " + 'Cal');
        calBullet.appendChild(calText);

        let glutenBullet = document.createElement('li');
        let glutenText = document.createTextNode('Contains gluten');
        glutenBullet.appendChild(glutenText);

        let lactoseBullet = document.createElement('li');
        let lactoseText = document.createTextNode('Contains lactose')
        lactoseBullet.appendChild(lactoseText);

        infoList.appendChild(calBullet);

        if (food[i].lactose == true) {
            infoList.appendChild(lactoseBullet);
        }
        if (food[i].gluten == true) {
            infoList.appendChild(glutenBullet);
        }

        div.appendChild(infoList);

        /* Add checkbox */
        let checkbox = document.createElement('INPUT');
        checkbox.setAttribute('type', 'checkbox');
        checkbox.setAttribute('class', 'burgerCheckbox');
        checkbox.setAttribute('id', food[i].name);

        let label = document.createElement('Label');
        label.setAttribute('for', 'burgerCheckbox');
        label.innerHTML = "Select burger";

        div.appendChild(checkbox);
        div.appendChild(label);

        burgerGrid.appendChild(div);
    }
}

insertBurgers();








function buttonEvent() {

    function getGender() {
        var genders = document.getElementsByName('gender');

        for (i in genders) {
            if (genders[i].checked) {
                return genders[i].value;
            }
        }
    }



    function getburgers() {
        var burgers = document.getElementsByClassName('burgerCheckbox');
        var checkedBurgers = [];

        for (i in burgers) {
            if (burgers[i].checked) {
                checkedBurgers += burgers[i].id;
            }
        }
        return checkedBurgers;
    }



    var name = document.getElementById('fullname').value;
    var email = document.getElementById('email').value;
    var streetname = document.getElementById('streetname').value;
    var housenumber = document.getElementById('housename').value;
    var payment = document.getElementById('payment').value;
    var order = getburgers();
    var gender = getGender();

    console.log([name, email, streetname, housenumber, payment, gender, order]);
    return [name, email, streetname, housenumber, payment, gender, order];
}

function displayPurchase() {
    var purchaseInfo = buttonEvent();

    var purchaseList = document.getElementById('purchaseinfo');

    var textName = document.createElement('li');
    var textEmail = document.createElement('li');
    var textStreet = document.createElement('li');
    var textHouse = document.createElement('li');
    var textPayment = document.createElement('li');
    var textGender = document.createElement('li');
    var textOrder = document.createElement('li');


    textName.innerHTML = ('Name: ' + purchaseInfo[1]);
    textEmail.innerHTML = ('E-mail: ' + purchaseInfo[2]);
    textStreet.innerHTML = ('Street name: ' + purchaseInfo[3]);
    textHouse.innerHTML = ('House number: ' + purchaseInfo[4]);
    textPayment.innerHTML = ('Payment method: ' + purchaseInfo[5]);
    textGender.innerHTML = ('Gender: ' + purchaseInfo[6]);
    textOrder.innerHTML = ('Order: ' + purchaseInfo[7]);

    purchaseList.appendChild(textName);
    purchaseList.appendChild(textEmail);
    purchaseList.appendChild(textStreet);
    purchaseList.appendChild(textHouse);
    purchaseList.appendChild(textPayment);
    purchaseList.appendChild(textGender);
    purchaseList.appendChild(textOrder);
}

/* Jag börjar tro att jag gör något fel */

var orderbutton = document.getElementById('orderbutton');
orderbutton.onclick = displayPurchase;