//Get Slider Items | Array.from[ES6 feature]
var sliderImages = Array.from(document.querySelectorAll('.slider-container img'));
// get number of slides
var sliddesCount = sliderImages.length;

// set current slide
var currentSlide = 1;

//slide number  Element
var slideNumberElement = document.getElementById('slide-number');

// Previous and Next Buttons
var nextButton = document.getElementById('next');
var prevButton = document.getElementById('prev');



nextButton.onclick = nextSlide ;
prevButton.onclick = prevSlide;

//create the main ul Element
var paginationElement = document.createElement('ul');

// set ID On Created UL Element
paginationElement.setAttribute('id','pagination-ul');

//create list Items Based On Slides Count
for(var i = 1; i<=sliddesCount ; i++){
    //create the li
    var paginationItem = document.createElement('li');

    //set custom attribute
    paginationItem.setAttribute('data-index',i);

    //set item content
    paginationItem.appendChild(document.createTextNode(i));

    // Append Items to the main Ul 
    paginationElement.appendChild(paginationItem);
}

// add the created UL Element to The Page
document.getElementById('indicators').appendChild(paginationElement);

//get the new current ul
var paginationCreateUl = document.getElementById('pagination-ul');

// Get pagination Items |Array.from[Es6 feature]
var paginationBullets = Array.from(document.querySelectorAll('#pagination-ul li'));

// loop Through All Bullets Items
for(var i= 0; i<paginationBullets.length ;i++){
    paginationBullets[i].onclick = function(){
        currentSlide = parseInt(this.getAttribute('data-index'));
        theChecker();
    }
}
//Trigger The Checker function
theChecker()
//next slide function
function nextSlide(){
    if(nextButton.classList.contains('disabled')) {
        return false;
    } else{
     currentSlide++;
     theChecker();
    }
}

//previous slide function
function prevSlide() {
    if(prevButton.classList.contains('disabled')){
        return false;
    } else {
        currentSlide -- ;
        theChecker();
    }
}

//create the checker function
function theChecker(){
    //SET tHE Slide number
    slideNumberElement.textContent = "Slide # " +(currentSlide) +" of " +(sliddesCount);
   
    //remove all active classes
    removeAllActive();

    //Set Active Class to Current Slide
    sliderImages[currentSlide - 1].classList.add('active');
    //Set Active Class on Current Pagination Item
    paginationCreateUl.children[currentSlide - 1].classList.add('active');

    //check if Current Slide is The First
    if(currentSlide == 1){

        //add Disabled class On Previous Button
        prevButton.classList.add('disabled');
    } else {
        //Remove Disable Classes from Previous Button
        prevButton.classList.remove('disabled');
    }

    //check if Current Slide is The last
    if(currentSlide == sliddesCount){

        //add Disabled class On Next Button
        nextButton.classList.add('disabled');
    } else {
        //Remove Disable Classes from Next Button
        nextButton.classList.remove('disabled');
    }
}
//Remove All Active Classes From Images ANd Pagination Buliets
function removeAllActive() {
    //loop Through image
    sliderImages.forEach(function(img){
        img.classList.remove('active');
    });

    //loop Through pagination Bullets
    paginationBullets.forEach(function(bullet){
        bullet.classList.remove('active');
    });
}