const IngresoTexto=document.getElementById
("IngresoTexto")

const BotonEncriptar=document.getElementById
("BotonEncriptar")

const BotonDesencriptar=document.getElementById
("BotonDesencriptar")

const BotonCopiar=document.getElementById
("BotonCopiar")

const Munheco=document.getElementById
("Munheco")

const MensajeFinal=document.getElementById
("MensajeFinal")

const RigthInfo=document.getElementById
("RigthInfo")

const Rigth=document.getElementById
("Rigth")

//Llaves de encriptación a utilizar:
/*La letra "e" es convertida para "enter"
La letra "i" es convertida para "imes"
La letra "a" es convertida para "ai"
La letra "o" es convertida para "ober"
La letra "u" es convertida para "ufat"
*/

let reemplazar =[
	["e", "enter"],
	["o", "ober"],
	["i","imes"],
	["a", "ai"],
	["u","ufat"],
]

const remplace = (nuevoValor) =>{
	MensajeFinal.innerHTML = nuevoValor;
	Munheco.classList.add("oculto");

	IngresoTexto.value ="";
	RigthInfo.style.display="none";
	BotonCopiar.style.display="block";
	Rigth.classList.add("ajuste");
	MensajeFinal.classList.add("ajustar");
}

const reset = () =>{
	MensajeFinal.innerHTML ="";
	Munheco.classList.remove("oculto");
	RigthInfo.style.display="Block";
	BotonCopiar.style.display="none";
	Rigth.classList.remove("ajuste");
	MensajeFinal.classList.remove("ajustar");
	IngresoTexto.focus();
}

BotonEncriptar.addEventListener ("click",()=>{
	const texto=IngresoTexto.value.toLowerCase();
	if (texto !="") {
		function encriptar(newText){
			for (let i = 0; i < reemplazar.length; i++){
				if (newText.includes(reemplazar[i][0])){
					newText = newText.replaceAll(reemplazar[i][0],reemplazar[i][1]);
				};	
			};
			return newText
		};
	} else{
		reset();
	}

	remplace(encriptar(texto));

	MensajeFinal.innerHTML= encriptar(texto);

	/*const textoEncriptado = encriptar(texto);
	MensajeFinal.innerHTML = textoEncriptado;
	Munheco.style.display="none"
	RigthInfo.style.display="none"
	BotonCopiar.style.display="block"
	Rigth.classList.add("ajuste");
	MensajeFinal.classList.add("ajustar");
	//console.log(encriptar(texto));*/
})
BotonDesencriptar.addEventListener ("click",()=>{
	const texto=IngresoTexto.value.toLowerCase();
	if (texto !=""){
		function desencriptar(newText){
			for (let i = 0; i < reemplazar.length; i++){
				if (newText.includes(reemplazar[i][1])){
					newText = newText.replaceAll(reemplazar[i][1],reemplazar[i][0]);
				};	
			};
			return newText
		};
	}else{
		reset();
	}
	remplace(desencriptar(texto));

	MensajeFinal.innerHTML = desencriptar(texto);

	/*const textoDesencriptado = desencriptar(texto);
	MensajeFinal.innerHTML = textoDesencriptado;
	Munheco.style.display="none"
	RigthInfo.style.display="none"
	BotonCopiar.style.display="block"
	Rigth.classList.add("ajuste");
	MensajeFinal.classList.add("ajustar");
	//console.log(encriptar(texto));*/
})

BotonCopiar.addEventListener ("click",()=>{
	let texto = MensajeFinal;
	//navigator.clipboard.writeText(texto.value);
	texto.select();
	document.execCommand("copy");
	reset();
	
})