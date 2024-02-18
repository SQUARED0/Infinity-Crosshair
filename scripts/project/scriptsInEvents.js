


const scriptsInEvents = {

	async Egame_Event161_Act2(runtime, localVars)
	{
		
		var seconds = runtime.globalVars.GameTime; 
		
		
		var minutes = Math.floor(seconds / 60);
		var remainingSeconds = seconds % 60;
		
		
		var formattedSeconds = remainingSeconds < 10 ? '0' + remainingSeconds : remainingSeconds;
		
		
		var formattedTime = minutes + ':' + formattedSeconds;
		
		
		runtime.globalVars.FormateTime = formattedTime;
	}

};

self.C3.ScriptsInEvents = scriptsInEvents;

