"use strict";
const add = document.getElementById('addButton');
const del = document.getElementById('deleteButton');
const edit = document.getElementById('editButton');
const biancaTr = document.getElementById('biancaTr');
const container = document.getElementById('mainTable');
const tbody = document.getElementById('tbody');
const namei = document.getElementById('nameInput');
const age = document.getElementById('ageInput');
const phone = document.getElementById('phoneInput');
const email = document.getElementById('emailInput');
add.addEventListener('click', () => {
    const tr = document.createElement('tr');
    const tdName = document.createElement('td');
    const tdAge = document.createElement('td');
    const tdPhone = document.createElement('td');
    const tdEmail = document.createElement('td');
    const tdButtons = document.createElement('td');
    const newDel = document.createElement('button');
    const newEdit = document.createElement('button');
    tdButtons.append(newDel, newEdit);
    newDel.setAttribute('id', 'deleteButton');
    newEdit.setAttribute('id', 'edit');
    newDel.innerText = 'DELETE';
    newEdit.innerText = 'EDIT';
    tdName.innerHTML = namei.value;
    tdAge.innerHTML = age.value;
    tdPhone.innerHTML = phone.value;
    tdEmail.innerHTML = email.value;
    newDel.addEventListener('click', () => {
        if (window.confirm(`Are you sure you want to DELETE the choosen user?`)) {
            tbody.removeChild(tr);
        }
    });
    newEdit.addEventListener('click', () => {
        if (window.confirm('Are you sure you want to EDIT the choosen user?')) {
            tbody.removeChild(tr);
            namei.value = tdName.innerText;
            age.value = tdAge.innerText;
            phone.value = tdPhone.innerText;
            email.value = tdEmail.innerText;
        }
    });
    if ((namei.value == '') || (age.value == '') || (phone.value == '') || (email.value == '')) {
        alert('Make sure you fullfill all fields');
    }
    else {
        namei.value = '';
        age.value = '';
        phone.value = '';
        email.value = '';
        tbody.append(tr);
        tr.append(tdName, tdAge, tdPhone, tdEmail, tdButtons);
    }
});
