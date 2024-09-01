# Linear Algebra Library

This is a Linear Algebra Library made from scratch using JS. I have implemented basic error handling, but make sure to always have valid inputs.

## Classes

### Matrix

The `Matrix` class represents a matrix and provides methods to manipulate it.

#### Constructor

```javascript
constructor(rows, cols);
```

- `rows`: Number of rows in the matrix.
- `cols`: Number of columns in the matrix.

#### Methods

- `setMatrix(arr)`: Sets the matrix elements from a given array. The array length must match the matrix size.

### LinAlg

The `LinAlg` class provides various linear algebra operations.

#### Methods

- `dotProduct(v1, v2)`: Computes the dot product of two arrays.
- `add(m1, m2)`: Adds two matrices.
- `multiply(m1, m2)`: Multiplies two matrices.
- `applyFunc(func, m)`: Applies a function to each element of a matrix.

## Usage

Here’s an example of how to use the library:

```javascript
const matrix1 = new Matrix(2, 2);
matrix1.setMatrix([1, 2, 3, 4]);

const matrix2 = new Matrix(2, 2);
matrix2.setMatrix([5, 6, 7, 8]);

const linalg = new LinAlg();
const result = linalg.add(matrix1, matrix2);

console.log(result.matrix);
```
