const binarySearch = (nums, target) => {
  const numbersSorted = nums.sort((a, b) => a - b); // reorganizo o array em ordem crescente
  let minor = numbersSorted[0]; // capturo o menor valor do array
  let major = numbersSorted[numbersSorted.length - 1] // capturo o maior valor do array
  while(minor <= major) { // enquanto o menor valor for menor ou igual ao maior valor
    let mid = Math.floor((minor + major) / 2); // calculo a metade do array arrendondando para baixo
    let midValue = numbersSorted[mid]; // capturo o valor da metade do array
    if(midValue < target) { // se o valor da metade for menor que o valor procurado
      minor = mid + 1 // atualizo o menor valor para a metade + 1
    }
    else if(midValue > target) { // se o valor da metade for maior que o valor procurado
      
      major = mid - 1; // atualizo o maior valor para a metade - 1
    }
    else { 
      return mid; // se o valor da metade for igual ao valor procurado retorno a posição da metade
    }
  }
  return -1; // se não encontrar o valor retorno -1
}

const searchWithIndexOf = (nums, target) => nums.indexOf(target); // código implementado e otimizado pelo proprio javascript

module.exports = {
  binarySearch,
  searchWithIndexOf
};
