class Matrix {
  matrix = [];

  constructor(rows, cols) {
    this.cols = cols;
    this.rows = rows;

    for (let r = 0; r < rows; r++) {
      this.matrix.push([]);
      for (let c = 0; c < cols; c++) {
        this.matrix[r].push(0);
      }
    }
  }

  setMatrix(arr) {
    let length = this.cols * this.rows;
    if (length == arr.length) {
      this.matrix = [];
      for (let r = 0; r < this.rows; r++) {
        this.matrix.push([]);
        for (let c = 0; c < this.cols; c++) {
          this.matrix[r].push(arr[0]);
          arr.shift();
        }
      }
    } else {
      throw new Error("array does not match size of matrix");
    }
  }
}

class LinAlg {
  dotProduct(v1, v2) {
    //arrays only
    if (v1.length == v2.length) {
      sum = 0;
      for (let i = 0; i < v1.length; i++) {
        sum += v1[i] * v2[i];
      }
    } else {
      throw new Error("array sizes must match");
    }
    return sum;
  }

  add(m1, m2) {
    if (m1 instanceof Matrix && m2 instanceof Matrix) {
      //need to be matrix objects
      if (m1.rows == m2.rows && m1.cols == m2.cols) {
        //m1 and m2 must be the same size
        //making sure all criteria are met
        addMatrix = new Matrix(m1.rows, m1.cols);

        for (let r = 0; r < addMatrix.rows; r++) {
          for (let c = 0; c < addMatrix.cols; c++) {
            addMatrix.matrix[r][c] = m1.matrix[r][c] + m2.matrix[r][c]; //adding each element
          }
        }
      } else {
        throw new Error("m1 and m2 must be the same size!");
      }
    } else {
      throw new Error("Both m1 and m2 must be Matrix objects.");
    }

    return addMatrix;
  }

  multiply(m1, m2) {
    if (m1 instanceof Matrix && m2 instanceof Matrix) {
      if (m1.cols == m2.rows) {
        multMatrix = new Matrix(m1.rows, m2.cols);
        for (let i = 0; i < multMatrix.rows; i++) {
          for (let j = 0; j < multMatrix.cols; j++) {
            for (let k = 0; k < m1.cols; k++) {
              multMatrix.matrix[i][j] += m1.matrix[i][k] * m2.matrix[k][j];
            }
          }
        }
      } else {
        throw new Error("rows of m1 must be equal to columns of m2");
      }
    } else {
      throw new Error("Both m1 and m2 must be Matrix objects.");
    }

    return multMatrix;
  }

  applyFunc(func, m) {
    if (m instanceof Matrix) {
      for (let r = 0; r < m.rows; r++) {
        for (let c = 0; c < m.cols; c++) {
          m.matrix[r][c] = func(m.matrix[r][c]);
        }
      }
    } else {
      throw new Error("must be a matrix");
    }
    return m;
  }
}
