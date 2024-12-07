//Máscara para manter o celular no formato correto

var celular = document.getElementById("celular");

celular.addEventListener("input", function(){
	//Remover não-numéricos e limitar a 11 dígitos.
	var limparValor = celular.value.replace(/\D/g, "").substring(0,11);

	//Criar array de individuais
	var numerosArray = limparValor.split("");

	//Criar número formatado

	var numeroFormatado = "";

	//Só DDD
	if(numerosArray.length > 0) {
		numeroFormatado += `(${numerosArray.slice(0,2).join("")})`;

	}

	//Primeira parte do num
	if(numerosArray.length > 2){
		numeroFormatado += ` ${numerosArray.slice(2,7).join("")}`;
	}

	//Segunda parte do num
	if(numerosArray.length > 7)
		numeroFormatado += `-${numerosArray.slice(7,11).join("")}`;

	//Enviar número formato para o campo
	celular.value = numeroFormatado;
});
