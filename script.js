let comidasel;
let iconecomida;
let bebidasel;
let iconebebida;
let sobremesasel;
let iconesobremesa;
function selComida(selecionado) {
   comidasel = document.querySelector(".comidas .select");
   iconecomida = document.querySelector(".comidas .select ion-icon");
   if (comidasel !== null) {
      iconecomida.classList.add("hide");
      selecionado.classList.add("select");
      comidasel.classList.remove("select");
      if (selecionado !== comidasel) {
         document.querySelector(".comidas .select .hide").classList.remove("hide");
      }
      fechar();
   } else {
      selecionado.classList.toggle("select");
      document.querySelector(".comidas .select .hide").classList.remove("hide");
      fechar();
   }
}
function selBebida(selecionado) {
   bebidasel = document.querySelector(".bebidas .select");
   iconebebida = document.querySelector(".bebidas .select ion-icon");
   if (bebidasel !== null) {
      iconebebida.classList.add("hide");
      selecionado.classList.add("select");
      bebidasel.classList.remove("select");
      if (selecionado !== bebidasel) {
         document.querySelector(".bebidas .select .hide").classList.remove("hide");
      }
      fechar();
   } else {
      selecionado.classList.toggle("select");
      document.querySelector(".bebidas .select .hide").classList.remove("hide");
      fechar();
   }
}
function selSobremesa(selecionado) {
   sobremesasel = document.querySelector(".sobremesas .select");
   iconesobremesa = document.querySelector(".sobremesas .select ion-icon");
   if (sobremesasel !== null) {
      iconesobremesa.classList.add("hide");
      selecionado.classList.add("select");
      sobremesasel.classList.remove("select");
      if (selecionado !== sobremesasel) {
         document.querySelector(".sobremesas .select .hide").classList.remove("hide");
      }
      fechar();
   } else {
      selecionado.classList.toggle("select");
      document.querySelector(".sobremesas .select .hide").classList.remove("hide");
      fechar();
   }
}
function fechar() {
   if (document.querySelector(".comidas .select") !== null && document.querySelector(".bebidas .select") !== null && document.querySelector(".sobremesas .select") !== null) {
      document.querySelector("button").innerHTML = "Fechar o pedido";
      document.querySelector("button").classList.add("completed")
   } else {
      document.querySelector("button").innerHTML = "Selecione os 3 itens para fechar o pedido";
      document.querySelector("button").classList.remove("completed")
   }
}