const lyricButton = document.querySelector('#lyricButton');
document.querySelector('#bringBackBox').style.display = 'none'

lyricButton.addEventListener('click', function(){
    let lyrics = document.querySelector('#lyricBox').value;
    const lyricList = document.querySelector('#lyricsListSpanish');
    const lyricList2 = document.querySelector('#lyricsListEnlgish');

    let updatedLyrics = lyrics.replace(/\n/g,'##');
    array = updatedLyrics.split('##');
    
    for(let i = 0; i < array.length; i++){
        const item = document.createElement('li');
        item.innerHTML = array[i];
        item.setAttribute('id','spanishLyric');
        lyricList.append(item);
    }
    
    for(let i = 0; i < array.length; i++){
        const item = document.createElement('li');
        item.innerHTML = array[i];
        item.setAttribute('id','englishLyric');
        lyricList2.append(item);
    }

document.querySelector('#pasteMessage').style.display = 'none'
document.querySelector('#lyricBox').style.display = 'none';//removes input box
document.querySelector('#lyricButton').style.display = 'none'
document.querySelector('#bringBackBox').style.display = 'block'
})


const bringBack = document.querySelector('#bringBackBox');

bringBack.addEventListener('click', function(){
    document.querySelector('#bringBackBox').style.display = 'none'

    //need to create a variable for the length, because if we used a query selector within the 
    //for loop, the list length would constantly change, and our removals would be inconsistant
let spanishLength = document.querySelectorAll('#spanishLyric').length;
let englishLength = document.querySelectorAll('#englishLyric').length

    //removing list items from english list
    //must use [0] for each iteration because if you had the value in the bracket
    //change, you would get to a point where you are at an index where there isn't an item
    //So, remove first index for all iterations, and the way a list works will work itself out.
    //e.g. you have a list 1,2,3,4,5,6. When you remove an item, they reindex. For example, if you
    //remove index 0, the new list becomes 2,3,4,5,6. So, now index 0 has a value of 2. If you
    //constantly worked your way through the list and changed the i values, you would get to a point
    //where the values worked there way towards the beginning indexes, you have an i value too high, 
    //and you would be removing nothing on each iteration. That is why we stick with index 0 when removing

    for(let i = 0; i <  englishLength ;i++){
        document.querySelectorAll('#englishLyric')[0].remove();
    }
    //removing list items from spanish list
    for(let i = 0; i <  spanishLength ;i++){
        document.querySelectorAll('#spanishLyric')[0].remove();
    }
    


    document.querySelector('#pasteMessage').style.display = 'block'
    document.querySelector('#lyricBox').value = '';     //sets the box to blank again
    document.querySelector('#lyricBox').style.display = 'block';//adds input box back
    document.querySelector('#lyricButton').style.display = 'block'  //adds side by side button back
})
