const keyName = prompt("Введите название ключа:");

const array = [
    {
        jj: 'Aktan',
        l: 'batman'
    },
    {
        ll: 'Bekmyrza',
        m: 'no batman'
    }, {
        sd: 'ds',
        type: 'asd'
    }, {
        w: 'asd',
        iii: 'vfd'
    },
]
   

for(item of array){
    if(item[keyName]){
        console.log(item[keyName]);
    }
}

