var hasRadio = false
var speaker = 2;

window.addEventListener('message', function (event) {
    if(event.data.pauseMenu == false){
        $("#statusHud").fadeIn();
        switch (event.data.action) {
            case 'updateStatusHud':
                $("body").css("display", event.data.show ? "block" : "none");
                $("#boxSetHealth").css("width", event.data.health + "%");
                $("#boxSetArmour").css("width", event.data.armour + "%");
    
                widthHeightSplit(event.data.hunger, $("#boxSetHunger"));
                widthHeightSplit(event.data.thirst, $("#boxSetThirst"));
                widthHeightSplit(event.data.oxygen, $("#boxSetOxygen"));
                widthHeightSplit(event.data.stress, $("#boxSetStress"));
                setTalking(event.data.voice, event.data.isOnRadio, event.data.voiceMode);
        }

    }else{
        $("#statusHud").fadeOut();
    }
});


function widthHeightSplit(value, ele) {
    let height = 25.5;
    let eleHeight = (value / 100) * height;
    let leftOverHeight = height - eleHeight;

    ele.css("height", eleHeight + "px");
    ele.css("top", leftOverHeight + "px");
};

function setTalking(talking, isOnRadio, voiceMode){
   if(talking){
    $("#boxSetVoice").css("background", '#4289ff');
    $("#boxSetVoice").css("box-shadow", '0px 0px 0px #4289ff');
   }else{
        if(isOnRadio){
            $("#boxSetVoice").css("background", '#4289ff');
        }else{
            $("#boxSetVoice").css("background", '');
        }
    $("#boxSetVoice").css("box-shadow", '0px 0px 0px '); 
   }
   if(voiceMode == 'talk'){
    document.getElementById("boxSetVoice1").src = "img/speaker2.svg";
   }else if(voiceMode == 'whisper'){
    document.getElementById("boxSetVoice1").src = "img/speaker1.svg";
   }else{
    document.getElementById("boxSetVoice1").src = "img/speaker3.svg";
   }
};

function setProximity(value) {
	if (value == "whisper") {
		speaker = 1;
	} else if (value == "normal") {
		speaker = 2;
	} else if (value == "shout") {
		speaker = 3;
    }
    
	$('#varVoice img').attr('src', 'img/speaker' + speaker + '.png');
}

function joinRadio() {
    hasRadio = true
}

function leaveRadio() {
    hasRadio = false
}
