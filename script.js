let produto = {
    nome: 'Celular',
    preco: 1500
}

console.log(Object.entries(produto))
console.log(Object.values(produto))

for(let entry of Object.entries(produto)){
    console.log(entry)
}