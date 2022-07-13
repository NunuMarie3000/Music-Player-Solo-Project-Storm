'use strict';
console.log('up and running');

//get elements we're gonna populate later
let songTitle = document.getElementById('song-title');
let artist = document.getElementById('artist');
let songSource = document.getElementById('audio');
let playingImage = document.getElementById('playing-image');
let printGenreIdHere = document.getElementById('put-id-here');
//console.log(printGenreIdHere.getAttribute('name'));
//NOTE: THIS IS HOW TO SET SRC TO SONGSOURCE
//songSource.setAttribute('src', 'music/Alternative/stfu-riconasty.mp3');

//create function to make hamburger menu functional
let workingHamburger = ()=>{
    //get the hamburger and the navbar menu from html
    let hamburger = document.getElementById('hamburger-menu');
    let navbarMenu = document.getElementById('navbar-menu');

    //when the hamburger is clicked, add the 'active' version of class to it
    hamburger.addEventListener('click', ()=>{
        hamburger.classList.toggle('active');
        navbarMenu.classList.toggle('active');
    });

    //when any of the navbar item links are clicked, remove the active class from the hamburger and navbar menu so it goes back to the way it was
    document.querySelectorAll('.navbar-item-link').forEach(link => link.addEventListener('click', ()=>{
        hamburger.classList.remove('active');
        navbarMenu.classList.remove('active');
    }));
}
workingHamburger();

//html modal boxes
let jazzModal = document.getElementById('jazz-modal-container');
let popModal = document.getElementById('pop-modal-container');
let hiphopModal = document.getElementById('hiphop-modal-container');
let rbModal = document.getElementById('rb-modal-container');
let alternativeModal = document.getElementById('alternative-modal-container');

//array of modals, maybe i'll use later
let modalArray = [];
modalArray.push(jazzModal, popModal, hiphopModal, rbModal, alternativeModal);

//when user clicks a navbar-item-link, a modal box needs to pop up showing each of the songs that's in that genre
//when user clicks a genre from the navbar, the modal box pertaining to that genre is opened
let workingGenre = ()=>{
    //get genre links from html
    let jazzLink = document.getElementById('jazz-nav');
    let popLink = document.getElementById('pop-nav');
    let hiphopLink = document.getElementById('hiphop-nav');
    let rbLink = document.getElementById('rb-nav');
    let alternativeLink = document.getElementById('alternative-nav');

    jazzLink.addEventListener('click', ()=>{
        jazzModal.classList.toggle('show');
    });
    popLink.addEventListener('click', ()=>{
        popModal.classList.toggle('show');
    });
    hiphopLink.addEventListener('click', ()=>{
        hiphopModal.classList.toggle('show');
    });
    rbLink.addEventListener('click', ()=>{
        rbModal.classList.toggle('show');
    });
    alternativeLink.addEventListener('click', ()=>{
        alternativeModal.classList.toggle('show');
    });

    //add event listener to remove show class from modals
    //when the user clicks any of the music items inside the modal, it needs to close the modal
    document.querySelectorAll('.modal-music-item').forEach(item => item.addEventListener('click', ()=>{
        jazzModal.classList.remove('show');
        popModal.classList.remove('show');
        hiphopModal.classList.remove('show');
        rbModal.classList.remove('show');
        alternativeModal.classList.remove('show');
    }));
}
workingGenre();
//NOTE: I need to fix this later, but its buggy when the screen size is mobile sized, but works fine otherwise



//NOTE: WHAT DO I WANNA DO?
//i need to get json data so i have it to use

    //when the user clicks a song from that modal box, the info from that item populates the html src and img tag and automatically begins playing the song
let getAndUseMusicJson = fetch('./music.json').then((response)=>{
    //console.log('resolved', response);
    //response.json returns a promise
    //promises usually take a second to do and can either be rejected or resolved
    //since we're using the return keyword, the overall value of this fetch method is gonna be this response.json() data, because of this, we can chain a .then()
    return response.json();
    //we can take the data we get back from the json method so the above gives back a promise that, when resolved, gives us the data we went out to fetch
}).then(data =>{

    let populateImage = ()=>{
        //add event listeners to all img in modal boxes
        //when the user clicks a specific image, that's how we'll get the info to populate with
        //selecting and adding event listener to every element with modal-music-item class

        //NOTE: checking how to access all img in modal boxes, this WORKS!
        // let images = document.querySelectorAll('div.modal-music-item > img');
        // console.log(images);

        document.querySelectorAll('div.modal-music-item > img').forEach(modalImg => modalImg.addEventListener('click', ()=>{
            songSource.setAttribute('autoplay', '');
            // console.log(modalImg);
            // console.log(modalImg.id);
            // check if the modalImg has jazz class
            // if it does, then go through data.jazz, 
            //if modalImg.id = data.jazz.id, sontTitle.textContent = data.jazz.title, artist.textContent = data.jazz.artist, songSource.textContent = data.jazz.music-source, playingImage.textContent = data.jazz.image-source
            if(modalImg.classList.contains('jazz')){
                //print genre id so i can access and check later
                printGenreIdHere.setAttribute('name','jazz');
                //if it's a jazz item, check what modalImage.id is, and correspond the data that way
                if(modalImg.id === 'fitzgerald'){
                    songTitle.textContent = data.jazz[0].title;
                    artist.textContent = data.jazz[0].artist;
                    songSource.setAttribute('src', `${data.jazz[0].musicSource}`);
                    playingImage.setAttribute('src', `${data.jazz[0].imageSource}`);
                }
                else if(modalImg.id === 'sinatra'){
                    songTitle.textContent = data.jazz[1].title;
                    artist.textContent = data.jazz[1].artist;
                    songSource.setAttribute('src', `${data.jazz[1].musicSource}`);
                    playingImage.setAttribute('src', `${data.jazz[1].imageSource}`);
                }
                else if(modalImg.id === 'kitt'){
                    songTitle.textContent = data.jazz[2].title;
                    artist.textContent = data.jazz[2].artist;
                    songSource.setAttribute('src', `${data.jazz[2].musicSource}`);
                    playingImage.setAttribute('src', `${data.jazz[2].imageSource}`);
                }
                else if(modalImg.id === 'wine-simone'){
                    songTitle.textContent = data.jazz[3].title;
                    artist.textContent = data.jazz[3].artist;
                    songSource.setAttribute('src', `${data.jazz[3].musicSource}`);
                    playingImage.setAttribute('src', `${data.jazz[3].imageSource}`);
                }
                else{
                    songTitle.textContent = data.jazz[4].title;
                    artist.textContent = data.jazz[4].artist;
                    songSource.setAttribute('src', `${data.jazz[4].musicSource}`);
                    playingImage.setAttribute('src', `${data.jazz[4].imageSource}`);
                }
            }else if(modalImg.classList.contains('alternative')){
                printGenreIdHere.setAttribute('name','alternative');
                if(modalImg.id === 'chapman'){
                    songTitle.textContent = data.alternative[0].title;
                    artist.textContent = data.alternative[0].artist;
                    songSource.setAttribute('src', `${data.alternative[0].musicSource}`);
                    playingImage.setAttribute('src', `${data.alternative[0].imageSource}`);
                }
                else if(modalImg.id === 'prince'){
                    songTitle.textContent = data.alternative[1].title;
                    artist.textContent = data.alternative[1].artist;
                    songSource.setAttribute('src', `${data.alternative[1].musicSource}`);
                    playingImage.setAttribute('src', `${data.alternative[1].imageSource}`);
                }
                else if(modalImg.id === 'turner'){
                    songTitle.textContent = data.alternative[2].title;
                    artist.textContent = data.alternative[2].artist;
                    songSource.setAttribute('src', `${data.alternative[2].musicSource}`);
                    playingImage.setAttribute('src', `${data.alternative[2].imageSource}`);
                }
                else if(modalImg.id === 'rage-riconasty'){
                    songTitle.textContent = data.alternative[3].title;
                    artist.textContent = data.alternative[3].artist;
                    songSource.setAttribute('src', `${data.alternative[3].musicSource}`);
                    playingImage.setAttribute('src', `${data.alternative[3].imageSource}`);
                }
                else{
                    songTitle.textContent = data.alternative[4].title;
                    artist.textContent = data.alternative[4].artist;
                    songSource.setAttribute('src', `${data.alternative[4].musicSource}`);
                    playingImage.setAttribute('src', `${data.alternative[4].imageSource}`);
                }
            }else if(modalImg.classList.contains('hiphop')){
                printGenreIdHere.setAttribute('name','hiphop');
                if(modalImg.id === 'leray'){
                    songTitle.textContent = data.hiphop[0].title;
                    artist.textContent = data.hiphop[0].artist;
                    songSource.setAttribute('src', `${data.hiphop[0].musicSource}`);
                    playingImage.setAttribute('src', `${data.hiphop[0].imageSource}`);
                }
                else if(modalImg.id === 'megan'){
                    songTitle.textContent = data.hiphop[1].title;
                    artist.textContent = data.hiphop[1].artist;
                    songSource.setAttribute('src', `${data.hiphop[1].musicSource}`);
                    playingImage.setAttribute('src', `${data.hiphop[1].imageSource}`);
                }
                else if(modalImg.id === 'harlow'){
                    songTitle.textContent = data.hiphop[2].title;
                    artist.textContent = data.hiphop[2].artist;
                    songSource.setAttribute('src', `${data.hiphop[2].musicSource}`);
                    playingImage.setAttribute('src', `${data.hiphop[2].imageSource}`);
                }
                else if(modalImg.id === 'industry-nasx'){
                    songTitle.textContent = data.hiphop[3].title;
                    artist.textContent = data.hiphop[3].artist;
                    songSource.setAttribute('src', `${data.hiphop[3].musicSource}`);
                    playingImage.setAttribute('src', `${data.hiphop[3].imageSource}`);
                }
                else{
                    songTitle.textContent = data.hiphop[4].title;
                    artist.textContent = data.hiphop[4].artist;
                    songSource.setAttribute('src', `${data.hiphop[4].musicSource}`);
                    playingImage.setAttribute('src', `${data.hiphop[4].imageSource}`);
                }
            }else if(modalImg.classList.contains('pop')){
                printGenreIdHere.setAttribute('name','popMusic');
                if(modalImg.id === 'mcclain'){
                    songTitle.textContent = data.popMusic[0].title;
                    artist.textContent = data.popMusic[0].artist;
                    songSource.setAttribute('src', `${data.popMusic[0].musicSource}`);
                    playingImage.setAttribute('src', `${data.popMusic[0].imageSource}`);
                }
                else if(modalImg.id === 'backstreetboys'){
                    songTitle.textContent = data.popMusic[1].title;
                    artist.textContent = data.popMusic[1].artist;
                    songSource.setAttribute('src', `${data.popMusic[1].musicSource}`);
                    playingImage.setAttribute('src', `${data.popMusic[1].imageSource}`);
                }
                else if(modalImg.id === 'normani'){
                    songTitle.textContent = data.popMusic[2].title;
                    artist.textContent = data.popMusic[2].artist;
                    songSource.setAttribute('src', `${data.popMusic[2].musicSource}`);
                    playingImage.setAttribute('src', `${data.popMusic[2].imageSource}`);
                }
                else if(modalImg.id === 'bedingfield'){
                    songTitle.textContent = data.popMusic[3].title;
                    artist.textContent = data.popMusic[3].artist;
                    songSource.setAttribute('src', `${data.popMusic[3].musicSource}`);
                    playingImage.setAttribute('src', `${data.popMusic[3].imageSource}`);
                }
                else{
                    songTitle.textContent = data.popMusic[4].title;
                    artist.textContent = data.popMusic[4].artist;
                    songSource.setAttribute('src', `${data.popMusic[4].musicSource}`);
                    playingImage.setAttribute('src', `${data.popMusic[4].imageSource}`);
                }
            }else{
                printGenreIdHere.setAttribute('name','rb');
                if(modalImg.id === 'nao'){
                    songTitle.textContent = data.rb[0].title;
                    artist.textContent = data.rb[0].artist;
                    songSource.setAttribute('src', `${data.rb[0].musicSource}`);
                    playingImage.setAttribute('src', `${data.rb[0].imageSource}`);
                }
                else if(modalImg.id === 'magic-riconasty'){
                    songTitle.textContent = data.rb[1].title;
                    artist.textContent = data.rb[1].artist;
                    songSource.setAttribute('src', `${data.rb[1].musicSource}`);
                    playingImage.setAttribute('src', `${data.rb[1].imageSource}`);
                }
                else if(modalImg.id === 'foushee'){
                    songTitle.textContent = data.rb[2].title;
                    artist.textContent = data.rb[2].artist;
                    songSource.setAttribute('src', `${data.rb[2].musicSource}`);
                    playingImage.setAttribute('src', `${data.rb[2].imageSource}`);
                }
                else if(modalImg.id === 'silksonic'){
                    songTitle.textContent = data.rb[3].title;
                    artist.textContent = data.rb[3].artist;
                    songSource.setAttribute('src', `${data.rb[3].musicSource}`);
                    playingImage.setAttribute('src', `${data.rb[3].imageSource}`);
                }
                else{
                    songTitle.textContent = data.rb[4].title;
                    artist.textContent = data.rb[4].artist;
                    songSource.setAttribute('src', `${data.rb[4].musicSource}`);
                    playingImage.setAttribute('src', `${data.rb[4].imageSource}`);
                }
            }
        }));
    }
    populateImage();
    //I think i need to create a function to loop through genres, before looping through all songs, regardless of genre
    //to loop through songs in genre, it's already array format in json file, so json.parse(data) to get the array, then, maybe , ex: let altArray = data.alternative;, then altArray.forEach(songProp =>{})
    let alternativeArray = data.alternative;
    let hiphopArray = data.hiphop;
    let popMusicArray = data.popMusic;
    let rbArray = data.rb;
    let jazArray = data.jazz;
    let newAltArray = [];

    // if(printGenreIdHere.name === 'alternative'){
        //     alternativeArray.forEach(obj =>{
        //         //so, now that i can access each song object in the alternative array, i need to set the main song's information to the object's property values, but only after a song is done playing, add event listener to the audio(songSource), so that when it ends, it populates and plays
        //         songSource.addEventListener('ended', ()=>{
                //console.log('song ended');
            //})
        //     })
        // }
    let loopAlternative = ()=>{
        newAltArray.push(alternativeArray.shift());
        newAltArray.forEach(arrObj =>{
            songTitle.textContent = arrObj.title;
            artist.textContent = arrObj.artist;
            songSource.setAttribute('src', `${arrObj.musicSource}`);
            playingImage.setAttribute('src', `${arrObj.imageSource}`);
        });
        if(songSource.getAttribute('src') === 'music/Alternative/stfu-riconasty.mp3'){
            songTitle.textContent = alternativeArray[0].title;
            artist.textContent = alternativeArray[0].artist;
            songSource.setAttribute('src', `${alternativeArray[0].musicSource}`);
            playingImage.setAttribute('src', `${alternativeArray[0].imageSource}`);
        }
    };
    // let loopHiphop = ()=>{

    // }
    // let loopPopMusic = ()=>{

    // }
    // let loopRb = ()=>{

    // }
    // let loopJazz = ()=>{

    // }
    let loopThroughGenre = ()=>{
        //okay, before i can loop through these genres, i need to know what song is playing/what genre the user is playing from
        //NOTE: i did this by creating div with id='print-id-here' and set its name attribute to whatever genre the user is listening to
        //so, i need to first check what the div's(printGenreIdHere) name is, then loop through the array that follows
        //i need to check the id of what's playing and move accordingly
        //i could check the id of the img that the user is viewing 
        //so, printGenreIdHere.getAttribute('name')
        songSource.addEventListener('ended', ()=>{
            if(printGenreIdHere.getAttribute('name') === 'alternative'){
                loopAlternative();
                
            // }else if(printGenreIdHere.getAttribute('name') === 'hiphop'){
            //     loopHiphop();
            // }else if(printGenreIdHere.getAttribute('name') === 'popMusic'){
            //     loopPopMusic();
            // }else if(printGenreIdHere.getAttribute('name') === 'rb'){
            //     loopRb();
            }else{
                //loopJazz();
                console.log('space filler');
            }
        })

    }
    loopThroughGenre();
}).catch((err)=>{
    console.log('rejected', err);
});

    //after that song finishes playing, it waits 2 seconds (2000) ms before playing the next song in that genre

        //to do that, the genre is already in its own array in the json file, just iterate through that array to autoplay the next song

//keep your code clean and readable...