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

var classiFier = ml5.imageClassiFier("https://teachablemachine.withgoogle.com/models/3CZtHZkXe/model.Json",modelloaded)

function modelloaded(){
    console.log("Modelo Carregado")
}
