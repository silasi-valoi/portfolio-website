//document.addEventListener('DOMContentLoaded', ) 

import { Select } from "./utils";

export const TypeWriter = () =>{
    // array with texts to type in typewriter
    var dataText = ['Designer', 'Developer', 'Freelancer'];
    
    // type one text in the typwriter
    // keeps calling itself until the text is finished
    function typeWriter(text:string, i:number, fnCallback:()=>void) {
      	// chekc if text isn't finished yet
      	if (i < (text.length)) {
        	// add next character to h1
			const t = Select('.typed') as HTMLSpanElement;
       		
	   		t.innerHTML = text.substring(0, i+1) +'<span aria-hidden="true"></span>';
        	// wait for a while and call this function again for next character
        	setTimeout(function() {
          		typeWriter(text, i + 1, fnCallback)
        	}, 100);
      	}
      	// text finished, call callback if there is a callback function
      	else if (typeof fnCallback == 'function') {
        	// call callback after timeout
			setTimeout(fnCallback, 700);
      	}
    }

    // start a typewriter animation for a text in the dataText array
    function StartTextAnimation(i:number) {
        if (typeof dataText[i] == 'undefined'){
            setTimeout(function() {
				StartTextAnimation(0);
       		}, 2000);
        }
        // check if dataText[i] exists
		if (dataText[i] && dataText[i].length > i) {
        	// text exists! start typewriter animation
            typeWriter(dataText[i], 0, function(){
         		// after callback (and whole text has been animated), start next text
         		StartTextAnimation(i + 1);
       		});
      	}
    }

    // start the text animation
    StartTextAnimation(0);
}
  
  