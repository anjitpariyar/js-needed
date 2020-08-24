
const dropItem= $('.d-flex.categories .dropdown-menu');

dropItem.each(function( index, elem ) {
  console.log(index);
  let currentItem = $(elem) 
  console.log(currentItem.parent() )
  currentItem.css("left", currentItem.parent().position().left);
})
