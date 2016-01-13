
//	Variables
pictures = new PictureList();



function show_superdisplay(imgn) {
	console.log(imgn + pictures.get(imgn));
	pictures.current = imgn;
	$('img', '#superdisplay').attr("src", pictures.get(imgn));
	$('#superdisplay').show();
};

function hide_superdisplay() {
	$('#superdisplay').hide();
};

$(function(){
	
	$(document).bind('keyup', navigate);
});

function navigate(keyevent)  {
	if (keyevent.which == 39 ) //right
		goRight();
	else if (keyevent.which == 37 ) //left
		goLeft();
	else if (keyevent.which == 27 ) //esc
		hide_superdisplay();
};



//new way:
/*
var img = $("<img />").attr('src', 'http://somedomain.com/image.jpg')
    .load(function() {
        if (!this.complete || typeof this.naturalWidth == "undefined" || this.naturalWidth == 0) {
            alert('broken image!');
        } else {
            $("#something").append(img);
        }
    });

*/




function goRight () {
	img = 	$('img', '#superdisplay');
	img.attr('src', pictures.getNext() );

};

function goLeft () {
	img = 	$('img', '#superdisplay');
	img.attr('src', pictures.getTheOneFromBeforeOrLastOrPreviousOrSomeOtherAbstractSynonym() );

};


/*
 *	PictureList class
 *	Iterable in a cyclic list :)
 * 
 */

function PictureList ()  {
	this.pictures = []; 	//Storing src of pictures as of now.
	this.current = 0;		//	Which picture is shown at the moment.
};



/*
 *	Get a picture('s src attribute) from the set
 *	@param index	Integer index
 *	@return			src attribute of 
 */
PictureList.prototype.get = function(index) {
	if ( this.index >= this.pictures.length ) 
		index = 0;
	if ( this.index < 0)
		index = this.pictures.length-1;
	this.current = index;
	return this.pictures[index];
};


/**
 * Get the next picture in the sequence (the one to the right)
 * @return src attribute of the next picture in the set.
 */
PictureList.prototype.getNext = function() {
	
	if (this.pictures.length == 0 ) return ""; //Empty set

	this.current++;
	if ( this.current >= this.pictures.length ) 
		this.current = 0;
	console.log(this.pictures[this.current])
	return this.pictures[this.current]
};


/**
 * Get the previous picture
 * @return {src attribute of the previous picture in the set}
 */
PictureList.prototype.getTheOneFromBeforeOrLastOrPreviousOrSomeOtherAbstractSynonym = function() {
	if (this.pictures.length == 0 ) return ""; //Empty set

	this.current--;
	if ( this.current < 0 ) 
		this.current = this.pictures.length-1;

	return this.pictures[this.current];
};