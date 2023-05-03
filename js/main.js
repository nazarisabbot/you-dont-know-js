'use strict';

const listFour = document.querySelectorAll('.props__item_four');

const listTwo = document.querySelectorAll('.props__item_two');

const propsLists = document.querySelectorAll('.props__list');
const itemTitleFive = document.querySelectorAll('.item__title');

const itemsList = document.querySelectorAll('.item');

function insertAfter(fromItem, indexOne, toItem, indexTwo) {
  const firstItem = fromItem[indexOne];
  const secondItem = toItem[indexTwo];
  secondItem.after(firstItem);
  return;
}

function replaceItem(fromItem, indexOne, toItem, indexTwo) {
  const firstItem = fromItem[indexOne];
  const secondItem = toItem[indexTwo];
  secondItem.replaceWith(firstItem);
  return;
}

insertAfter(listFour, 5, listFour, 2);
insertAfter(listTwo, 8, listTwo, 7);
insertAfter(listTwo, 9, listTwo, 8);
replaceItem(propsLists, 4, propsLists, 3);
insertAfter(propsLists, 3, itemTitleFive, 3);
insertAfter(itemsList, 0, itemsList, 3);
