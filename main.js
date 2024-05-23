Webcam.set({
    width:350,
    height:300,
    image_format : 'png',
    png_quality:90
})    

camera = document.getElementById("camera");

Webcam.attach('#camera');


function take_snapshot()
{
    Webcam.snap(function(data_uri){
        document.getElementById("result").innerHTML = '<img id="capture_image" scr="'+data_uri+'"/>';
    
    });

}
console.log('ml5 version', ml5.version);

classifier = ml5.imageClassifier("https://teachablemachine.withgoogle.com/models/PrNFCOMZc/model.json", modelloaded)

function modelloaded() {
    console.log('Model Loaded');
}

function speak(){
    var synth = window.SpeechSynthesis;
    speak_data_1 = "la primera prediccion es " + prediction_1;
    speak_data_2 = "y la segunda prediccion es" + prediccion_2;
    var utterthis = new SpeechSynthesisUtterance(speak_data_1 + speak_data_2);
    synth.speak(utterthis);    
}

function check()
{
    img = document. getElementById('capture_image');
    classifier.classify(img, gotResult);
}

function gotResult(error, results) {
    if (error) {
        console.error(error);
    } else {
        console.log(redults);
        document.getElementById("result_emoticon_name").innerHTML = results[0].label;
        document.getElementById("result_emoticon_name2").innerHTML = results[1].label;
        prediction_1 = results[0].label;
        prediccion_2 = results[1].label;
        speak();
        if(results[0].label == "feliz")
        {
            document.getElementById("update_emoji").innerHTML = '<img scr="'+messi_feliz.gif+'"/> ' ;            

        }
        if(results[0].label == "triste")
        {
            document.getElementById("update_emoji").innerHTML = '<img scr="'+messi_trite.gif+'"/> ' ;            
    
        }
        if(results[0].label == "enojado")
        {
            document.getElementById("update_emoji").innerHTML = '<img scr="'+andapallabobo-que-miras-bobo.gif+'"/> ' ; 

        }

        if(results[1].label == "feliz")
        {
            document.getElementById("update_emoji2").innerHTML = '<img scr="'+messi_feliz.gif+'"/> ' ;            
    
        }
            if(results[1].label == "triste")
        {
            document.getElementById("update_emoji2").innerHTML = '<img scr="'+messi_trite.gif+'"/> ' ;            
        
        }
            if(results[1].label == "enojado")
        {
             document.getElementById("update_emoji2").innerHTML = '<img scr="'+andapallabobo-que-miras-bobo.gif+'"/> ' ; 
    
        }   
    }   
             
}