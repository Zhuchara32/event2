function tableCreate() {
    let tbl = document.createElement('table');
    tbl.id = 'table';
    let tBody = document.createElement('tbody');
    let tHead = document.createElement('thead');

    for (let a = 0; a < 6; a++) {
        let tHeader = document.createElement('th');
        let tHeaderText = document.createTextNode(`header ${a + 1}`);
        tHeaderText.id = `header${a + 1}`;

        tHeader.appendChild(tHeaderText);
        tHead.appendChild(tHeader);
    }
    for (let i = 0; i <= 11; i++) {
        let row = document.createElement('tr');

        for (let j = 0; j < 6; j++) {
            let td = document.createElement('td');
            let tdText = document.createTextNode(i + j);
            td.id = `td${i + j + 1}`;

            td.appendChild(tdText);
            row.appendChild(td);


            const getCellValue = (tr, idx) => tr.children[idx].innerText || tr.children[idx].textContent;

            const comparer = (idx, asc) => (a, b) => ((v1, v2) =>
                v1 !== '' && v2 !== '' && !isNaN(v1) && !isNaN(v2) ? v1 - v2 : v1.toString().localeCompare(v2)
            )(getCellValue(asc ? a : b, idx), getCellValue(asc ? b : a, idx));

            document.querySelectorAll('th').forEach(td => td.addEventListener('click', (() => {
                const table = td.closest('table');
                Array.from(table.querySelectorAll('tr:nth-child(n+1)'))
                    .sort(comparer(Array.from(td.parentNode.children).indexOf(td), this.asc = !this.asc))
                    .forEach(tr => table.appendChild(tr));
            })));

            tBody.appendChild(row);
        }

        tbl.appendChild(tBody);
        tbl.appendChild(tHead);
        document.querySelector('body').prepend(tbl);
        tbl.setAttribute('border', '2');
    }
}
tableCreate();

