function findTriangleType(a, b, c) {
  if (a === b && b === c) {
    return 'Equilátero';
  }

  if (a === b || a === c || b === c) {
    return 'Isósceles';
  }

  return 'Escaleno'
}

console.log(findTriangleType(1, 2, 3));
