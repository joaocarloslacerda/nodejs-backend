const yargs = require("yargs/yargs");
const { hideBin } = require("yargs/helpers");
const argv = yargs(hideBin(process.argv)).argv;

const tasks = [
  {  id: 1,
    title: 'Comprar Livro'},
  {
    id: 2,
    title: 'Emprestar Livro'
  },
  {
    id: 3,
    title: 'Ir ao cinema'
  },
  {
    id: 4,
    title: 'Comprar leite'
  },
];

const listTasks = () => {
  return tasks.map( (item) => {
    console.log(item.title)
  } )
}

switch (argv.operation) {
  case 'list':
    listTasks()
  break;
default:
    console.log('Operação não encontrada')  
  break;
}