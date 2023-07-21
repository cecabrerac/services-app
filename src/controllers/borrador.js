function mensaje(mensaje) {
  console.log(mensaje);
}

console.log("antes de setTimeout");
setTimeout(mensaje, 5000, "mensaje de prueba setTimeout");
console.log("despues de setTimeout");

console.log("antes de setInmediate");
setImmediate(mensaje, "mensaje Inmediate");
console.log("despues de setInmediate");
