
for (let n = 1; n <= 10; n++) { // Bucle exterior: recorre los números del 1 al 10 de cada tabla de multiplicar
  
  console.log(`\n\u{2705} Tabla del ${n}`); // Imprime un título para cada tabla con un emoji
  
  for (let i = 1; i <= 10; i++) { // Bucle interior: recorre los números del 1 al 10 para multiplicar por "n"
   
    console.log(`${n} x ${i} = ${n * i}`); // Imprime la operación completa: n x i = resultado
  }
}