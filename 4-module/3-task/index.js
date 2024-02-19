/**
 * Метод устанавливает необходимые по условию аттрибуты таблице
 * @param {Element} table
 */
function highlight(table) {
    tbody = table.querySelector('tbody');
    
    for(let i = 0; i < tbody.rows.length; i++) {
        if(tbody.rows[i].cells[3].dataset.available === 'true') {
            tbody.rows[i].classList.add('available');
        } else if (tbody.rows[i].cells[3].dataset.available === 'false') {
            tbody.rows[i].classList.add('unavailable');
        } else {
            tbody.rows[i].setAttribute('hidden', true);
        }

        if(tbody.rows[i].cells[2].textContent === 'm') {
            tbody.rows[i].classList.add('male');
        } else {
            tbody.rows[i].classList.add('female');
        }
        
        if( tbody.rows[i].cells[1].textContent < 18) {
            tbody.rows[i].setAttribute('style', 'text-decoration: line-through');
        }
    }
}
