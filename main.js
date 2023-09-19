//https://teachablemachine.withgoogle.com/models/3CZtHZkXe/

var Previsao1 = ""

var Previsao2 = ""

var Camera = document.getElementById("Camera")


Webcam.set({
    width: 350,
    height: 300,
    image_format: 'jpeg',
    jpeg_quality: 90
});
Webcam.attach( '#Camera' );

function Capturar_Imagem(){
    Webcam.snap( function(data_uri) {
        // display results in page
        document.getElementById('Resultado').innerHTML = 
         '<img src="'+data_uri+'"/>';
    } );
}

console.log("Versao ML5",ml5.version)

classiFier = ml5.imageClassifier("https://teachablemachine.withgoogle.com/models/3CZtHZkXe/model.json",modelloaded)

function modelloaded(){
    console.log("Modelo Carregado")
}

function Check(){
    var img = document.getElementById("Resultado")
    classiFier.classify(img,obterResultado)
}

function speak(){
    var sintetizador = window.speechSynthesis
    var texto1 = "A primeira previsao e"+Previsao1
    var texto2 = "A Segunda previsao e"+Previsao2
    var falar = new SpeechSynthesisUtterance(texto1+texto2)
    sintetizador.speak(falar)

}

function obterResultado(error,results){
    if(error){
        console.log(error)
    }
    else{
        console.log(results)
        Previsao1 = results[0].label
        Previsao2 = results[1].label
        document.getElementById("Resultado_emocao1").innerHTML = Previsao1
        document.getElementById("Resultado_emocao2").innerHTML = Previsao2
        speak()
        if(Previsao1 == "Feliz"){
            document.getElementById("Resultado_emoji1").innerHTML = "&#128522"
        } 
        if(Previsao1 == "Triste"){
            document.getElementById("Resultado_emoji1").innerHTML = "&#128532"
        }
        if(Previsao1 == "Raiva"){
            document.getElementById("Resultado_emoji1").innerHTML = "&#128548"
        } 

        if(Previsao2 == "Feliz"){
            document.getElementById("Resultado_emoji2").innerHTML = "&#128522"
        } 
        if(Previsao2 == "Triste"){
            document.getElementById("Resultado_emoji2").innerHTML = "&#128532"
        }
        if(Previsao2 == "Raiva"){
            document.getElementById("Resultado_emoji2").innerHTML = "&#128548"
        } 
    }
}


   