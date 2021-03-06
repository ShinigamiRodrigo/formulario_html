//Mascara as informações, deixando elas editadas e bonitinhas
$(document).ready(function(){
  $('.date').mask('00/00/0000');
  $('.cep').mask('00000-000');
  $('.telefone').mask('(00) 0000-0000');
  $('.cpf').mask('000.000.000-00', {reverse: true});

});

//Impede que Números sejam digitados
function bloqueiaNumero(texto){
  var tecla = texto.which || texto.keyCode;
  if ((tecla >= 65 && tecla <= 90) || (tecla >=97 && tecla <=122) || (tecla == 199 || tecla == 231)){
    return true;
  }else{
    return false;
  }
}
//Impede que Letras sejam digitadas
function bloqueiaLetra(texto){
  var tecla = texto.which || texto.keyCode;
  if ((tecla >=48 && tecla <= 57)){
    return true;
  }else{
    return false;
  }
}

/*$("#cep").focusout(function(){
		//Início do Comando AJAX
		$.ajax({
			//O campo URL diz o caminho de onde virá os dados
			//É importante concatenar o valor digitado no CEP
			url: 'https://viacep.com.br/ws/'+$(this).val()+'/json/unicode/',
			//Aqui você deve preencher o tipo de dados que será lido,
			//no caso, estamos lendo JSON.
			dataType: 'json',
			//SUCESS é referente a função que será executada caso
			//ele consiga ler a fonte de dados com sucesso.
			//O parâmetro dentro da função se refere ao nome da variável
			//que você vai dar para ler esse objeto.
			success: function(resposta){
				//Agora basta definir os valores que você deseja preencher
				//automaticamente nos campos acima.
				$("#logradouro").val(resposta.logradouro);
				$("#complemento").val(resposta.complemento);
				$("#bairro").val(resposta.bairro);
				$("#cidade").val(resposta.localidade);
				$("#uf").val(resposta.uf);
				//Vamos incluir para que o Número seja focado automaticamente
				//melhorando a experiência do usuário
				$("#numero").focus();
			}
		});
	});*/