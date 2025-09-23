const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

// Función que muestra el menú
function mostrarMenu() {
  console.log("\n🧮 Calculadora de Anlly 👌");
  console.log("1️. Sumar");
  console.log("2️. Restar");
  console.log("3️. Multiplicar");
  console.log("4️. Dividir");
  console.log("5️. Raíz cuadrada");
  console.log("0️. Salir o presiona Enter");

  rl.question("👉 Elige una opción (0-5): ", function(opcion) {

    // Si no escribe nada o elige 0 sale de la calculadora
    if (opcion === "" || opcion === "0") {
      console.log("👋 ¡Chao Vuelve Pronto! 🤞");
      return rl.close();
    }

    // Validar opción
    if (!["1","2","3","4","5"].includes(opcion)) {
      console.log("❌ Error: Debes elegir un número entre 0 y 5.");
      return mostrarMenu(); 
    }

    if (opcion === "5") {
      // Raíz cuadrada solo necesita un número
      rl.question("Escribe el número: ", function(num) {
        num = parseFloat(num);
        if (isNaN(num)) {
          console.log("⚠️ Error: Debes escribir un número válido.");
        } else if (num < 0) {
          console.log("⚠️ Error: No se puede calcular raíz cuadrada de un número negativo.");
        } else {
          console.log(`✅ La raíz cuadrada de ${num} es: ${Math.sqrt(num)}`);
        }
        mostrarMenu(); 
      });
    } else {
      // Las operaciones que necesitan dos números
      rl.question("Escribe el primer número: ", function(num1) {
        rl.question("Escribe el segundo número: ", function(num2) {
          
          num1 = parseFloat(num1);
          num2 = parseFloat(num2);

          if (isNaN(num1) || isNaN(num2)) {
            console.log("⚠️ Error: Debes escribir números válidos.");
            return mostrarMenu();
          }

          let resultado;

          if (opcion == "1") {
            resultado = num1 + num2;
            console.log(`✅ La suma es: ${resultado}`);
          } else if (opcion == "2") {
            resultado = num1 - num2;
            console.log(`✅ La resta es: ${resultado}`);
          } else if (opcion == "3") {
            resultado = num1 * num2;
            console.log(`✅ La multiplicación es: ${resultado}`);
          } else if (opcion == "4") {
            if (num2 !== 0) {
              resultado = num1 / num2;
              console.log(`✅ La división es: ${resultado}`);
            } else {
              console.log("❌ Error: No se puede dividir entre 0");
            }
          }

          mostrarMenu(); 
        });
      });
    }
  });
}

// Iniciar de nuevo
mostrarMenu();