'use strict';
console.log('up and running');

//get elements we're gonna populate later
let songTitle = document.getElementById('song-title');
let artist = document.getElementById('artist');
let songSource = document.getElementById('audio');
let playingImage = document.getElementById('playing-image');
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
            // console.log(modalImg);
            // console.log(modalImg.id);
            // check if the modalImg has jazz class
            // if it does, then go through data.jazz, 
            //if modalImg.id = data.jazz.id, sontTitle.textContent = data.jazz.title, artist.textContent = data.jazz.artist, songSource.textContent = data.jazz.music-source, playingImage.textContent = data.jazz.image-source
            if(modalImg.classList.contains('jazz')){
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
}).catch((err)=>{
    console.log('rejected', err);
});

    //after that song finishes playing, it waits 2 seconds (2000) ms before playing the next song in that genre

        //to do that, the genre is already in its own array in the json file, just iterate through that array to autoplay the next song

//keep your code clean and readable...

