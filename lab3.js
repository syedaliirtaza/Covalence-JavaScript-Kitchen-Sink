var name = 'irtaza';
const noOfState = 4;
var addresult = 5+4;

function sayhello() {
    alert('hello world!');
}
sayhello();
function checkage(name,age) {
    if(age < 21){
    alert('sorry' + name + ", you're not old enough to view this page")
    }
}
checkage("charles",21);
checkage("abby",27);
checkage('james',18);
checkage('john',17);

var vegetables = ['bhindi','alo','pyaaz','blah'];
var count = 0;
while(count < vegetables.length)
{
    console.log(vegetables[count]);
    count++;
}

var pet = {
    name: 'german sheferd',
    breed: 'usa'
};
console.log(pet);

 var petarray = [
        {
            name: 'will',
            age: 12
    },
    {
        name: 'irtaza',
        age: 21

    },
    {
        name: 'mutu',
        age: 17

    },
    {
        name: 'matt',
        age: 27

    },
    {
        name: 'balo',
        age: 20

    }

];
for (var i=0; i < petarray.length; i++) {
    checkage(petarray[i].name, petarray[i].age);
}

function getLength(any) {
    return getLength.length;
}
var lenResult = getLength('hello word');
if(lenResult % 2 === 0)
{
    console.log('this world is even');
}
else
{
    console.log('this world is odd');
}
