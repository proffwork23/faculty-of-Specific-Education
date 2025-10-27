const date = document.querySelectorAll(".news .date");
const today = new Date();
for (let i = 0; i < date.length; i++) {
    date[i].textContent =`تاريخ النشر ${today.toLocaleDateString()} م `;
}

