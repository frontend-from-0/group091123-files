const entireHtml = document.documentElement.outerHTML;
// console.log('entireHtml', entireHtml);

// const bodyHtml = document.body.innerHTML;
// console.log('bodyHtml', bodyHtml);

const heading1 = document.getElementById('heading-1');
heading1.classList.add('text-uppercase');

const listItems = document.getElementsByClassName('list-group-item');
console.log(listItems);

let firstListItem = listItems[0];
console.log(firstListItem);
firstListItem.innerText = 'firstListItem';
console.log(firstListItem);

const allDivElements = document.getElementsByTagName('div');
console.log(allDivElements);
// "border" class (see https://getbootstrap.com/docs/5.3/utilities/borders/)
console.log(allDivElements.classList);
for (let i = 0; i < allDivElements.length; i++) {
	console.log(allDivElements[i]);
	allDivElements[i].classList.add('border', 'border-danger');
}

const listElementByCssQuery = document.querySelector(".list-group");
console.log('firstListItemByCssQuery', listElementByCssQuery);

const newListItem = document.createElement("li");
console.log('createElement', newListItem);
newListItem.innerText = "second list item";
console.log(newListItem);
newListItem.classList.add('list-group-item');
console.log(newListItem);

listElementByCssQuery.append(newListItem);





