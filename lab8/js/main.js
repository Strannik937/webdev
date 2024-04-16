function checkName(){
    let name = document.getElementById("Name").value;
    let regex = /^[а-яА-Яa-zA-Z\-\s]{2,15}$/;
    if (regex.test(name)){
        document.getElementById("Name_Check").style.display = "none";
        return true;
    }
        document.getElementById("Name_Check").style.color = "red";
        document.getElementById("Name_Check").style.display = "flex";
        document.getElementById("Name_Check").innerHTML="Имя должно состоять из 2 - 15 букв";    
        return false;
}
function checkSurname(){
    let surname = document.getElementById("Surname").value;
    let regex = /^[а-яА-Яa-zA-Z\-\s]{2,15}$/;
    if (regex.test(surname)){
        document.getElementById("Surname_Check").style.display = "none";
        return true;
    }
        document.getElementById("Surname_Check").style.color = "red";
        document.getElementById("Surname_Check").style.display = "flex";
        document.getElementById("Surname_Check").innerHTML="Фамилия должна состоять из 2 - 15 букв";    
        return false;
}
function checkPhone(){
    let phone = document.getElementById("Phone").value;
    let regex = /^(\+7|8)\s?[\(-]?[0-9]{3}[\)-]?([\-\s]?[0-9]){7}$/;
    if (regex.test(phone)){
        document.getElementById("Phone_Check").style.display = "none";
        return true;
    }
        document.getElementById("Phone_Check").style.color = "red";
        document.getElementById("Phone_Check").style.display = "flex";
        document.getElementById("Phone_Check").innerHTML="Введите номер в формате 8XXXXXXXXXX";    
        return false;
}
function checkAddress(){
    let address = document.getElementById("Address").value;
    let regex = /^[A-Za-z0-9А-Яа-я\s\d\.\,\-]{15,}$/;
    if (regex.test(address)){
        document.getElementById("Address_Check").style.display = "none";
        return true;
    }
        document.getElementById("Address_Check").style.color = "red";
        document.getElementById("Address_Check").style.display = "flex";
        document.getElementById("Address_Check").innerHTML="В адресе должно быть не меньше 15 символов";    
        return false;
}
function checkDate(){
    let date = document.getElementById("Date").value;
    if (date != ""){
        document.getElementById("Date_Check").style.display = "none";
        return true;
    }
        document.getElementById("Date_Check").style.color = "red";
        document.getElementById("Date_Check").style.display = "flex";
        document.getElementById("Date_Check").innerHTML="Выберите дату";    
        return false;
}
function checkTime(){
    let time = document.getElementById("Time").value;
    if (time != ""){
        document.getElementById("Time_Check").style.display = "none";
        return true;
    }
        document.getElementById("Time_Check").style.color = "red";
        document.getElementById("Time_Check").style.display = "flex";
        document.getElementById("Time_Check").innerHTML="Выберите время";    
        return false;
}
function checkQuantity(){
    let quantity = document.getElementById("Quantity").value;
    if (quantity != ""){
        document.getElementById("Quantity_Check").style.display = "none";
        return true;
    }
        document.getElementById("Quantity_Check").style.color = "red";
        document.getElementById("Quantity_Check").style.display = "flex";
        document.getElementById("Quantity_Check").innerHTML="Введите количество";    
        return false;
}