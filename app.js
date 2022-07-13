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
                    printGenreIdHere.textContent = '0';
                    songTitle.textContent = data.jazz[0].title;
                    artist.textContent = data.jazz[0].artist;
                    songSource.setAttribute('src', `${data.jazz[0].musicSource}`);
                    playingImage.setAttribute('src', `${data.jazz[0].imageSource}`);
                }
                else if(modalImg.id === 'sinatra'){
                    printGenreIdHere.textContent = '1';
                    songTitle.textContent = data.jazz[1].title;
                    artist.textContent = data.jazz[1].artist;
                    songSource.setAttribute('src', `${data.jazz[1].musicSource}`);
                    playingImage.setAttribute('src', `${data.jazz[1].imageSource}`);
                }
                else if(modalImg.id === 'kitt'){
                    printGenreIdHere.textContent = '2';
                    songTitle.textContent = data.jazz[2].title;
                    artist.textContent = data.jazz[2].artist;
                    songSource.setAttribute('src', `${data.jazz[2].musicSource}`);
                    playingImage.setAttribute('src', `${data.jazz[2].imageSource}`);
                }
                else if(modalImg.id === 'wine-simone'){
                    printGenreIdHere.textContent = '3';
                    songTitle.textContent = data.jazz[3].title;
                    artist.textContent = data.jazz[3].artist;
                    songSource.setAttribute('src', `${data.jazz[3].musicSource}`);
                    playingImage.setAttribute('src', `${data.jazz[3].imageSource}`);
                }
                else{
                    printGenreIdHere.textContent = '4';
                    songTitle.textContent = data.jazz[4].title;
                    artist.textContent = data.jazz[4].artist;
                    songSource.setAttribute('src', `${data.jazz[4].musicSource}`);
                    playingImage.setAttribute('src', `${data.jazz[4].imageSource}`);
                }
            }else if(modalImg.classList.contains('alternative')){
                printGenreIdHere.setAttribute('name','alternative');
                if(modalImg.id === 'chapman'){
                    printGenreIdHere.textContent = '0';
                    songTitle.textContent = data.alternative[0].title;
                    artist.textContent = data.alternative[0].artist;
                    songSource.setAttribute('src', `${data.alternative[0].musicSource}`);
                    playingImage.setAttribute('src', `${data.alternative[0].imageSource}`);
                }
                else if(modalImg.id === 'prince'){
                    printGenreIdHere.textContent = '1';
                    songTitle.textContent = data.alternative[1].title;
                    artist.textContent = data.alternative[1].artist;
                    songSource.setAttribute('src', `${data.alternative[1].musicSource}`);
                    playingImage.setAttribute('src', `${data.alternative[1].imageSource}`);
                }
                else if(modalImg.id === 'turner'){
                    printGenreIdHere.textContent = '2';
                    songTitle.textContent = data.alternative[2].title;
                    artist.textContent = data.alternative[2].artist;
                    songSource.setAttribute('src', `${data.alternative[2].musicSource}`);
                    playingImage.setAttribute('src', `${data.alternative[2].imageSource}`);
                }
                else if(modalImg.id === 'rage-riconasty'){
                    printGenreIdHere.textContent = '3';
                    songTitle.textContent = data.alternative[3].title;
                    artist.textContent = data.alternative[3].artist;
                    songSource.setAttribute('src', `${data.alternative[3].musicSource}`);
                    playingImage.setAttribute('src', `${data.alternative[3].imageSource}`);
                }
                else{
                    printGenreIdHere.textContent = '4';
                    songTitle.textContent = data.alternative[4].title;
                    artist.textContent = data.alternative[4].artist;
                    songSource.setAttribute('src', `${data.alternative[4].musicSource}`);
                    playingImage.setAttribute('src', `${data.alternative[4].imageSource}`);
                }
            }else if(modalImg.classList.contains('hiphop')){
                printGenreIdHere.setAttribute('name','hiphop');
                if(modalImg.id === 'leray'){
                    printGenreIdHere.setAttribute('class', '0');
                    songTitle.textContent = data.hiphop[0].title;
                    artist.textContent = data.hiphop[0].artist;
                    songSource.setAttribute('src', `${data.hiphop[0].musicSource}`);
                    playingImage.setAttribute('src', `${data.hiphop[0].imageSource}`);
                }
                else if(modalImg.id === 'megan'){
                    printGenreIdHere.setAttribute('class', '1');
                    songTitle.textContent = data.hiphop[1].title;
                    artist.textContent = data.hiphop[1].artist;
                    songSource.setAttribute('src', `${data.hiphop[1].musicSource}`);
                    playingImage.setAttribute('src', `${data.hiphop[1].imageSource}`);
                }
                else if(modalImg.id === 'harlow'){
                    printGenreIdHere.setAttribute('class', '2');
                    songTitle.textContent = data.hiphop[2].title;
                    artist.textContent = data.hiphop[2].artist;
                    songSource.setAttribute('src', `${data.hiphop[2].musicSource}`);
                    playingImage.setAttribute('src', `${data.hiphop[2].imageSource}`);
                }
                else if(modalImg.id === 'industry-nasx'){
                    printGenreIdHere.setAttribute('class', '3');
                    songTitle.textContent = data.hiphop[3].title;
                    artist.textContent = data.hiphop[3].artist;
                    songSource.setAttribute('src', `${data.hiphop[3].musicSource}`);
                    playingImage.setAttribute('src', `${data.hiphop[3].imageSource}`);
                }
                else{
                    printGenreIdHere.setAttribute('class', '4');
                    songTitle.textContent = data.hiphop[4].title;
                    artist.textContent = data.hiphop[4].artist;
                    songSource.setAttribute('src', `${data.hiphop[4].musicSource}`);
                    playingImage.setAttribute('src', `${data.hiphop[4].imageSource}`);
                }
            }else if(modalImg.classList.contains('pop')){
                printGenreIdHere.setAttribute('name','popMusic');
                if(modalImg.id === 'mcclain'){
                    printGenreIdHere.setAttribute('class', '0');
                    songTitle.textContent = data.popMusic[0].title;
                    artist.textContent = data.popMusic[0].artist;
                    songSource.setAttribute('src', `${data.popMusic[0].musicSource}`);
                    playingImage.setAttribute('src', `${data.popMusic[0].imageSource}`);
                }
                else if(modalImg.id === 'backstreetboys'){
                    printGenreIdHere.setAttribute('class', '1');
                    songTitle.textContent = data.popMusic[1].title;
                    artist.textContent = data.popMusic[1].artist;
                    songSource.setAttribute('src', `${data.popMusic[1].musicSource}`);
                    playingImage.setAttribute('src', `${data.popMusic[1].imageSource}`);
                }
                else if(modalImg.id === 'normani'){
                    printGenreIdHere.setAttribute('class', '2');
                    songTitle.textContent = data.popMusic[2].title;
                    artist.textContent = data.popMusic[2].artist;
                    songSource.setAttribute('src', `${data.popMusic[2].musicSource}`);
                    playingImage.setAttribute('src', `${data.popMusic[2].imageSource}`);
                }
                else if(modalImg.id === 'bedingfield'){
                    printGenreIdHere.setAttribute('class', '3');
                    songTitle.textContent = data.popMusic[3].title;
                    artist.textContent = data.popMusic[3].artist;
                    songSource.setAttribute('src', `${data.popMusic[3].musicSource}`);
                    playingImage.setAttribute('src', `${data.popMusic[3].imageSource}`);
                }
                else{
                    printGenreIdHere.setAttribute('class', '4');
                    songTitle.textContent = data.popMusic[4].title;
                    artist.textContent = data.popMusic[4].artist;
                    songSource.setAttribute('src', `${data.popMusic[4].musicSource}`);
                    playingImage.setAttribute('src', `${data.popMusic[4].imageSource}`);
                }
            }else{
                printGenreIdHere.setAttribute('name','rb');
                if(modalImg.id === 'nao'){
                    printGenreIdHere.setAttribute('class', '0');
                    songTitle.textContent = data.rb[0].title;
                    artist.textContent = data.rb[0].artist;
                    songSource.setAttribute('src', `${data.rb[0].musicSource}`);
                    playingImage.setAttribute('src', `${data.rb[0].imageSource}`);
                }
                else if(modalImg.id === 'magic-riconasty'){
                    printGenreIdHere.setAttribute('class', '1');
                    songTitle.textContent = data.rb[1].title;
                    artist.textContent = data.rb[1].artist;
                    songSource.setAttribute('src', `${data.rb[1].musicSource}`);
                    playingImage.setAttribute('src', `${data.rb[1].imageSource}`);
                }
                else if(modalImg.id === 'foushee'){
                    printGenreIdHere.setAttribute('class', '2');
                    songTitle.textContent = data.rb[2].title;
                    artist.textContent = data.rb[2].artist;
                    songSource.setAttribute('src', `${data.rb[2].musicSource}`);
                    playingImage.setAttribute('src', `${data.rb[2].imageSource}`);
                }
                else if(modalImg.id === 'silksonic'){
                    printGenreIdHere.setAttribute('class', '3');
                    songTitle.textContent = data.rb[3].title;
                    artist.textContent = data.rb[3].artist;
                    songSource.setAttribute('src', `${data.rb[3].musicSource}`);
                    playingImage.setAttribute('src', `${data.rb[3].imageSource}`);
                }
                else{
                    printGenreIdHere.setAttribute('class', '4');
                    songTitle.textContent = data.rb[4].title;
                    artist.textContent = data.rb[4].artist;
                    songSource.setAttribute('src', `${data.rb[4].musicSource}`);
                    playingImage.setAttribute('src', `${data.rb[4].imageSource}`);
                }
            }
        }));
    }
    populateImage();
    //setting the alternative array from fetched data
    //create counter for each genre
    let alternativeArray = data.alternative;
    let alternativeCounter = 0;
    let popMusicArray = data.popMusic;
    let popMusicCounter = 0;
    let hiphopArray = data.hiphop;
    let hiphopCounter = 0;
    let jazzArray = data.jazz;
    let jazzCounter = 0;
    let rbArray = data.rb;
    let rbCounter = 0;
    
    //initializing a counter specifically for alternative array business, to 0
    //let alternativeCounter = printGenreIdHere.getAttribute('class');
    //function, that when called, prints the title of the object, whos index position corresponds to the counter, and adds 1 to the counter. when the counter reaches the same number as the length of the array, the counter resets to 0 so it can start over again
    // let cycleThroughAltArray = ()=>{
    //     let arrObj = alternativeArray[alternativeCounter];
    //     console.log(arrObj.title);
    //     alternativeCounter++;
    //     if(alternativeCounter == alternativeArray.length){
    //         alternativeCounter = 0;
    //     }
    // }
    // //add event listener to songSource, so whenever a song ends, it calls the cycleThroughAltArray function
    // songSource.addEventListener('ended', cycleThroughAltArray);
    //so...i need to apply this to populating
    //initialize counter to 0

    let cycleThroughAltArray = ()=>{
        //the array object we're on is gonna be the index position of the counter value we're at
        let arrObj = alternativeArray[alternativeCounter];

        //populate music container
        songTitle.textContent = arrObj.title;
        artist.textContent = arrObj.artist;
        songSource.setAttribute('src', `${arrObj.musicSource}`);
        playingImage.setAttribute('src', `${arrObj.imageSource}`);

        //increase counter by 1
        alternativeCounter++;

        //if the counter gets to 4, the length of the array, meaning we're at the last song, set the counter back to 0, meaning go back to the first song
        if(alternativeCounter === alternativeArray.length){
            alternativeCounter = 0;
        }
    }

    let cycleThroughPopMusicArray = ()=>{
        //the array object we're on is gonna be the index position of the counter value we're at
        let arrObj = popMusicArray[popMusicCounter];

        //populate music container
        songTitle.textContent = arrObj.title;
        artist.textContent = arrObj.artist;
        songSource.setAttribute('src', `${arrObj.musicSource}`);
        playingImage.setAttribute('src', `${arrObj.imageSource}`);

        //increase counter by 1
        popMusicCounter++;

        //if the counter gets to 4, the length of the array, meaning we're at the last song, set the counter back to 0, meaning go back to the first song
        if(popMusicCounter === alternativeArray.length){
            popMusicCounter = 0;
        }
    }

    let cycleThroughHiphopArray = ()=>{
        //the array object we're on is gonna be the index position of the counter value we're at
        let arrObj = hiphopArray[hiphopCounter];

        //populate music container
        songTitle.textContent = arrObj.title;
        artist.textContent = arrObj.artist;
        songSource.setAttribute('src', `${arrObj.musicSource}`);
        playingImage.setAttribute('src', `${arrObj.imageSource}`);

        //increase counter by 1
        hiphopCounter++;

        //if the counter gets to 4, the length of the array, meaning we're at the last song, set the counter back to 0, meaning go back to the first song
        if(hiphopCounter === alternativeArray.length){
            hiphopCounter = 0;
        }
    }

    let cycleThroughJazzArray = ()=>{
        //the array object we're on is gonna be the index position of the counter value we're at
        let arrObj = jazzArray[jazzCounter];

        //populate music container
        songTitle.textContent = arrObj.title;
        artist.textContent = arrObj.artist;
        songSource.setAttribute('src', `${arrObj.musicSource}`);
        playingImage.setAttribute('src', `${arrObj.imageSource}`);

        //increase counter by 1
        jazzCounter++;

        //if the counter gets to 4, the length of the array, meaning we're at the last song, set the counter back to 0, meaning go back to the first song
        if(jazzCounter === alternativeArray.length){
            jazzCounter = 0;
        }
    }

    let cycleThroughRbArray = ()=>{
        //the array object we're on is gonna be the index position of the counter value we're at
        let arrObj = rbArray[rbCounter];

        //populate music container
        songTitle.textContent = arrObj.title;
        artist.textContent = arrObj.artist;
        songSource.setAttribute('src', `${arrObj.musicSource}`);
        playingImage.setAttribute('src', `${arrObj.imageSource}`);

        //increase counter by 1
        rbCounter++;

        //if the counter gets to 4, the length of the array, meaning we're at the last song, set the counter back to 0, meaning go back to the first song
        if(rbCounter === alternativeArray.length){
            rbCounter = 0;
        }
    }
       
    //create function to check genre of song
    //this function needs to be called at the end of a song being played
    let checkGenre = ()=>{
        //looks at all the modal images that can be clicked on, adding another event listener to each of them
        if(printGenreIdHere.getAttribute('name') === 'alternative'){
            cycleThroughAltArray();
        }else if(printGenreIdHere.getAttribute('name') === 'popMusic'){
            cycleThroughPopMusicArray();
        }else if(printGenreIdHere.getAttribute('name') === 'hiphop'){
            cycleThroughHiphopArray();
        }else if(printGenreIdHere.getAttribute('name') === 'jazz'){
            cycleThroughJazzArray();
        }else{
            cycleThroughRbArray();
        }
    }
    songSource.addEventListener('ended', checkGenre);

    //it checks the genre, which is dependent upon clicking a modal, that's not it...
    //songSource.addEventListener('ended', checkGenre);
    //add event listener to the modalImages? once its clicked, call the loop function for the genre that's clicked

    //NOTE: This is me trying to figure out how to set the counter based on the index position, number, the user is currently on

    //let number = printGenreIdHere.textContent;
    //let alternativeCounter = parseInt(number);
    //set the array
    //initialize a counter for that array, set it to 0
    // let cycleThroughAltArray = ()=>{
    //     console.log(`Song ${alternativeCounter} just played!`);
    //     console.log(typeof alternativeCounter);
    //     console.log(`${alternativeArray[alternativeCounter]}`);
    //     alternativeCounter++;
    //     console.log(`I just added 1 to the previous number`);
    //     console.log(`${alternativeArray[alternativeCounter]}`);
    //     let arrObj = alternativeArray[alternativeCounter];

    //     songTitle.textContent = arrObj.title;
    //     artist.textContent = arrObj.artist;
    //     songSource.setAttribute('src', `${arrObj.musicSource}`);
    //     playingImage.setAttribute('src', `${arrObj.imageSource}`);

    //     if(alternativeCounter === alternativeArray.length){
    //         alternativeCounter = 0;
    //     }
    // }

    //when the song ends, call the cycleThroughAltArrayFunction
    //songSource.addEventListener('ended', cycleThroughAltArray);
    //when the function is called, populate info to correspond to the counter
        //what if i also set a number on each song 0-4, so depending on what number of the song is, corresponds to the counter number, that way, the loop can continue NOTE: COME BACK TO THIS THOUGHT
    //then add 1 to the counter
    //so...it'd look something like songSource.addEventListener('ended', cycleBasedOnGenre), cycleBasedOnGenre will be a function that checks the genre, then sends you to the corresponding function, ex: cycleThroughAltArray
}).catch((err)=>{
    console.log('rejected', err);
});

        //to do that, the genre is already in its own array in the json file, just iterate through that array to autoplay the next song

//keep your code clean and readable...