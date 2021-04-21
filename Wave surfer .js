//reference https://wavesurfer-js.org/docs/methods.html



// common vanilla js
window.addEventListener('DOMContentLoaded', (event) => {
    // audio element
    let audioControl = [];
    [...document.querySelectorAll('.wave--wrapper')].map((elem)=>{
    	let selector = elem.getAttribute('id');
    	audioControl.push(selector)
    	let src = elem.getAttribute('src');
    	window[selector] = WaveSurfer.create({
    		container: document.querySelector(`#${selector}`),
    		waveColor: '#facfd3',
    		progressColor: '#fe4545',
    		cursorColor: '#fe4545',
    		barWidth: 3,
    		barRadius: 3,
    		cursorWidth: 3,
    		height: 200,
    		barGap: 3,
    		backend:'MediaElement',
    		// mediaControls:true,
    	});

    	window[selector].load(src);
    	elem.previousElementSibling.addEventListener('click',(e)=>{
    		e.preventDefault();
    		debugger;
    		audioControl.map((elem)=>{
    			if(elem != selector){
    				window[elem].pause();
    			}
    		})
    		window[selector].playPause()

    	})

    	window[selector].on('play', function () {
    		debugger;
    		// active means song is playing
    		elem.previousElementSibling.classList.add('active')
    		elem.previousElementSibling.querySelector('i').classList.remove('bi-play-fill');
    		elem.previousElementSibling.querySelector('i').classList.add('bi-pause');


    	})
    	window[selector].on('pause', function () {
    		debugger;
    		elem.previousElementSibling.classList.remove('active')
    		elem.previousElementSibling.querySelector('i').classList.add('bi-play-fill');
    		elem.previousElementSibling.querySelector('i').classList.remove('bi-pause');

    	})


    });



    
});
