const {readFileSync, promises: fsPromises} = require('fs');

function syncReadFile(filename) {
    const contents = readFileSync(filename, 'utf-8');
  
    const arr = contents.split(/\r?\n/);
  
    return arr;
  }

function problem1FormatInput(filename) {
  const file_arr = syncReadFile(filename);

  const test_cases = Number(file_arr[0]);
  let test_array = []
  

  for(let i = 1; i < test_cases+1; i++){
    let odd_line = file_arr[2*i-1]
    let even_line = file_arr[2*i]
    let threshold = Number(odd_line.split(' ')[1])
    let answer = odd_line.split(' ')[2]
    let student_array = even_line.split(' ').map(x => +x)
    let each_case = [student_array, threshold, answer]
    test_array.push(each_case)
  }
  
  return test_array;

}

function problem2FormatInput(filename) {
  const file_arr = syncReadFile(filename);

  const test_cases = Number(file_arr[0]);
  let test_array = []
  

  for(let i = 1; i < test_cases+1; i++){
    let odd_line = file_arr[2*i-1]
    let even_line = file_arr[2*i]
    let answer = Number(odd_line)
    let socks_array = even_line.split(', ').map(x => +x)
    let each_case = [socks_array, answer]
    test_array.push(each_case)
  }
  
  return test_array;

}

function problem3FormatInput(filename) {
  const file_arr = syncReadFile(filename);

  const test_cases = Number(file_arr[0]);
  let test_array = []
  

  for(let i = 1; i < test_cases+1; i++){
    let line = file_arr[i]
    let year = Number(line.split(' ')[0])
    let leap = Boolean(Number(line.split(' ')[1]))
    let each_case = [year, leap]
    test_array.push(each_case)
  }
  
  return test_array;

}

module.exports = {
    syncReadFile,
    problem1FormatInput,
    problem2FormatInput,
    problem3FormatInput,
  };