const ordenarPorPropiedad = (array, propiedad) => {
    return array.sort((a, b) => a[propiedad] - b[propiedad]);
  }
let personas=[
  { nombre: "Juan", edad: 30 },
  { nombre: "Ana", edad: 25 },
  { nombre: "Pedro", edad: 35 },
  { nombre: "María", edad: 28 }
];

console.log(ordenarPorPropiedad(personas, "edad"))
