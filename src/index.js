module.exports = function solveSudoku(matrix) {
  // your solution
  const REQUIRED_NUMBERS = [1, 2, 3, 4, 5, 6, 7, 8, 9];
  const EMPTY = 0;
  const sudoku = matrix.slice();
  let counter = 0;

  const checkRow = (row, number) => {
    for (let index = 0; index < 9; index += 1) {
      counter += 1;
      if (sudoku[row][index] === number) {
        return true;
      }
    }
    return false;
  };

  const checkColumn = (col, number) => {
    for (let index = 0; index < 9; index += 1) {
      counter += 1;
      if (sudoku[index][col] === number) {
        return true;
      }
    }
    return false;
  };

  const checkBox = (row, col, number) => {
    const r = row - (row % 3); 
    const c = col - (col % 3);

    for (let i = r; i < r + 3; i += 1) {
      for (let j = c; j < c + 3; j += 1) {
        counter += 1;
        if (sudoku[i][j] === number) {
          return true;
        }
      }
    }

    return false;
  }

  const isNumberAllowed = (row, col, number) => !(
    checkRow(row, number)
    || checkColumn(col, number)
    || checkBox(row, col, number)
  );


  const checkSudoku = (sudoku) => {
    for (let row = 0; row < 9; row += 1) {
      for (let col = 0; col < 9; col += 1) {
        if (sudoku[row][col] === EMPTY) {
          for (let number = 1; number <= 9; number += 1) {
            if (isNumberAllowed(row, col, number)) {
              sudoku[row][col] = number;
              if (checkSudoku(sudoku)) {
                return true;
              }
              sudoku[row][col] = EMPTY;
            }
          }
          return false;
        }
      }
    }
    return true;
  };

  // const checkSudoku = (sudokuGrid) => {
  //   if (checkRows(sudokuGrid)) {
  //     console.log('Rows are ok');
  //     if (checkColumns(sudokuGrid)) {
  //       console.log('Columns are ok');
  //       // if (checkSquares(sudokuGrid)) {
  //       //   return true;
  //       // }
  //     } else {
  //       console.log('Columns are NOT ok!!!');
  //     }
  //   } else {
  //     console.log('Rows are NOT ok!!!');
  //   }
  // };

  // const checkRows = (sudokuGrid) => {
  //   let result = true;
  //   sudokuGrid.forEach((row) => {
  //     if (!isValidRow(row)) {
  //       console.log(`заходит в !isValidRow(row) на ${row}`);
  //       result = false;
  //     }
  //   });
  //   return result;
  // };
  // const isValidRow = (row) => {
  //   let result = true;
  //   // TODO: refactor with array.every() 
  //   REQUIRED_NUMBERS.forEach((number) => {
  //     if (!row.includes(number)) {
  //       result = false;
  //     }
  //   });
  //   return result;
  // };

  // const checkColumns = (sudokuGrid) => {
  //   const columns = [];
  //   const iter = Array.from(new Array(9), (x, i) => i);
  //   iter.forEach((i) => {
  //     const newColumn = [];
  //     sudokuGrid.forEach(row => newColumn.push(row[i]));
  //     columns.push(newColumn);
  //   });
  //   return checkRows(columns);
  // };

  // const checkSquares = (sudokuGrid) => {
  //   const 
  //   const rowsOfSquares = makeSquares(sudokuGrid);
    

  // };


  // checkSudoku(sudoku);
  if (checkSudoku(sudoku)) {
    console.log(`счетчик: ${counter}`);
    return sudoku;
  }
  return 'No result, unfortunately :(';
}

// const initial = [
//   [5, 3, 4, 6, 7, 8, 9, 0, 0],
//   [6, 7, 2, 1, 9, 5, 3, 4, 8],
//   [1, 9, 8, 3, 4, 2, 5, 6, 7],
//   [8, 5, 9, 7, 6, 1, 4, 2, 3],
//   [4, 2, 6, 8, 5, 3, 7, 9, 1],
//   [7, 1, 3, 9, 2, 4, 8, 5, 6],
//   [9, 6, 1, 5, 3, 7, 2, 8, 4],
//   [2, 8, 7, 4, 1, 9, 6, 3, 5],
//   [3, 4, 5, 2, 8, 6, 1, 7, 9],
// ];
// const solvedSudoku = [
//   [9, 6, 5, 8, 7, 3, 1, 2, 4],
//   [3, 7, 4, 1, 9, 2, 8, 6, 5],
//   [2, 1, 8, 6, 4, 5, 3, 9, 7],
//   [5, 9, 1, 3, 8, 6, 7, 4, 2],
//   [6, 4, 3, 2, 1, 7, 9, 5, 8],
//   [7, 8, 2, 9, 5, 4, 6, 1, 3],
//   [4, 3, 7, 5, 6, 9, 2, 8, 1],
//   [1, 2, 9, 4, 3, 8, 5, 7, 6],
//   [8, 5, 6, 7, 2, 1, 4, 3, 9],
// ];

// console.log(solveSudoku(initial));
