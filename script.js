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
      let item1=document.querySelector(".comidas .select h4").innerHTML;
      let item2=document.querySelector(".bebidas .select h4").innerHTML;
      let item3=document.querySelector(".sobremesas .select h4").innerHTML;
      let valor1=document.querySelector(".comidas .select h6").innerHTML.slice(3,7).replace(",",".")
      let valor2=document.querySelector(".bebidas .select h6").innerHTML.slice(3,7).replace(",",".")
      let valor3=document.querySelector(".sobremesas .select h6").innerHTML.slice(3,7).replace(",",".")     
   let total=Number(valor1)+Number(valor2)+Number(valor3)
      let mensagem= (`Olá, gostaria de fazer o pedido:\n- Prato: ${item1}\n- Bebida: ${item2}\n- Sobremesa: ${item3}\nTotal: R$ ${total.toFixed(2)}`);
      mensagem=encodeURIComponent(mensagem)
      document.querySelector(".menuinf").innerHTML = `<a href="https://wa.me/5584998551416?text=${mensagem}" target="blank"><button>Fechar o pedido</button></a>`
      document.querySelector("button").classList.add("completed")      
   } else {
      document.querySelector(".menuinf").innerHTML = "<button>Selecione os 3 itens para fechar o pedido</button>"
      document.querySelector("button").classList.remove("completed")
   }
}