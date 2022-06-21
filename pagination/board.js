const list_items = [
    "Item 1",
    "Item 2",
    "Item 3",
    "Item 4",
    "Item 5",
    "Item 6",
    "Item 7",
    "Item 8",
    "Item 9",
    "Item 10",
    "Item 11",
    "Item 12",
    "Item 13",
    "Item 14",
    "Item 15",
    "Item 16",
    "Item 17",
    "Item 18",
    "Item 19",
    "Item 20",
    "Item 21",
    "Item 22",
];

const list_element = document.getElementById("list");
const pagination_element = document.getElementById("pagination");

let current_page = 1;
let rows = 10;

function DisplayList(items, wrapper, rows_per_page, page) {
    wrapper.innerHTML = "";
    /*everytime we call this function, we want to make sure there's nothing already inside of our list element else it's going to add more and more so it's gonna if you click like next page it's gonna add the nest ones on top of the ones which already there which is not what we want. We want it to be an empty wrapper.*/
    /*비어있어야 다음 걸 추가했을 때 맨 위로 들어간다? stack같은 개념? 갯수제한한 array여서?*/
    page--; /*We don't want to set the page to -- because I've seen a page it can start one but our array will start on zero, so we need to - one from the page.*/
    /*출처 : https://youtu.be/IqYiVHrO2U8 10:24~*/

    // let loop_start = rows_per_page * page;
    // let paginatedItems = items.slice(loop_start, loop_start + rows_per_page);
    // for (let i = loop_start; i < loop_start + rows_per_page; i++) {
    // }
    let start = rows_per_page * page;
    let end = start + rows_per_page;
    let paginatedItems = items.slice(start, end);

    for (let i = 0; i < paginatedItems.length; i++) {
        let item = items[i];

        let item_element = document.createElement('div');
        item_element.classList.add('item');
        item_element.innerText = item;

        wrapper.appendChild(item_element);
    }
}

DisplayList(list_items, list_element, rows, current_page);