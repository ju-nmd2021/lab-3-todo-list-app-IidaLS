//If a user clicks on the add button 
//and there is a value in the inputfield, add to list
document.getElementById('taskButton').addEventListener('click', function( {
    var value = document.getElementById('taskInput').value;
    if (value) addItemTodo(value);
    function addItemTodo(item) {

        var item = document.createElement('li');
        item.innerText = text;

        var buttons = document.createElement('div');
        buttons.classList.add('buttons');

        var remove = document.createElement('button');
        remove.classList.add('remove');

        var add = document.createElement('button');
        complete.classList.add('add');
    }
