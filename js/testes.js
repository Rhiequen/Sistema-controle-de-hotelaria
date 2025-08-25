import Cliente from "./Cliente.js";
import Gerente from "./Gerente.js";
import Atendente from "./Atendente.js";

const cliente1 = new Cliente("Luis", "00001231412", "991404920", "99siulluis99@gmail.com", "2", "01/01/0001", undefined, "Cartão Débito");
const atendente1 = new Atendente("Dherik", "Masculino");
const gerente1 = new Gerente("BigBoss", "Masculino");

console.log(cliente1);
console.log(atendente1);
console.log(gerente1);
