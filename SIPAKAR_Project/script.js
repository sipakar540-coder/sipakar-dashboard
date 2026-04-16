// script.js

const sheetURL = 'https://docs.google.com/spreadsheets/d/e/2PACX-1vQLb9sJ1YIxz1r2x0K_f89iHodz9fZ0l8IzJI7pNVK9clBN7_v7RztaCK32vQbPzxAzmTyyIlbvOjFU/pub?gid=377540299&single=true&output=csv';

async function loadData() {
    try {
        const response = await fetch(sheetURL);
        const data = await response.text();
        
        const rows = data.split('\n').length - 1; 
        
        document.getElementById('total-aset').innerText = rows;
        
        console.log("Data SIPAKAR berhasil dimuat!");
    } catch (error) {
        console.error("Gagal mengambil data Sheets:", error);
    }
}

window.onload = loadData;
