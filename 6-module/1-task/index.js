/**
 * Компонент, который реализует таблицу
 * с возможностью удаления строк
 *
 * Пример одного элемента, описывающего строку таблицы
 *
 *      {
     *          name: '',
     *          age: 25,
     *          salary: '1000',
     *          city: 'Petrozavodsk'
     *   },
 *
 * @constructor
 */
/**
 * Компонент, который реализует таблицу
 * с возможностью удаления строк
 *
 * Пример одного элемента, описывающего строку таблицы
 *
 *      {
 *          name: 'Ilia',
 *          age: 25,
 *          salary: '1000',
 *          city: 'Petrozavodsk'
 *      },
 *
 * @constructor
 */
export default class UserTable {
  constructor(rows) {
    this.elem = document.createElement('table');
    const tHead = document.createElement('thead');
    let tHeadRow = `
    <tr>
      <th>Имя</th>
      <th>Возраст</th>
      <th>Зарплата</th>
      <th>Город</th>
      <th></th>
    </tr>
    `;
    tHead.insertAdjacentHTML('afterbegin', tHeadRow);
    this.elem.appendChild(tHead);
    this.tBody = document.createElement('tbody');

    rows.map(item => {
      const tr = document.createElement('tr');
      for(let key in item) {
        const td = document.createElement('td');
        td.innerHTML = item[key];
        tr.appendChild(td);
      }
      const button = document.createElement('button');
      button.innerHTML = 'X';
      const td = document.createElement('td');
      td.appendChild(button);
      tr.appendChild(td);
      this.tBody.appendChild(tr);
    });

    this.elem.appendChild(this.tBody);

    const buttons = this.elem.querySelectorAll('button');

    for(let button of buttons) {
      button.addEventListener('click', (e) => {
        const tr = e.target.closest('tr');
        this.tBody.removeChild(tr);
      });
    }
  }
}
