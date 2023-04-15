let input = prompt("Enter a command");
const todos = ['complete assignment'];
while(input!=='quit')
{
    input = prompt('Enter a command');
    if(input == 'List')
    {
        for(let i=0;i<todos.length;i++)
        {
            console.log(`${i}:${todos[i]}`);
        }
    }
    else if(input == 'new')
    {
        const new_text = prompt("What is the task?");
        todos.push(new_text);
        console.log("added");
    }
    else if(input=='delete')
    {
        const index = prompt("Enter the index of todo you want to delete.");
        todos.splice(index,1);
        console.log(index);
    }
}
console.log("App is closed.")