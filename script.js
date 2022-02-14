var key  = config.api_key;
//console.log(key);
fetch('https://bhagavadgitaapi.in/slok?api_key='+key)//Please use your api_key  this is a free api key and it is has limited call.
    .then(data => data.json())
    .then(checkdata =>{
     const Textdata1 = checkdata.slok;
     const element1 = document.getElementById('paragraph1');
     element1.innerHTML = Textdata1;
     const Textdata2 = checkdata.transliteration;
     const element2 = document.getElementById('paragraph2');
     element2.innerHTML = Textdata2;

     const Textdata3 = checkdata.tej.ht;
     const element3 = document.getElementById('paragraph3');
     element3.innerHTML = Textdata3;

    //  const Textdata4 = checkdata.chapter;
    //  const element4 = document.getElementById('chapter');
    //  element4.innerHTML = Textdata4;

    //  const Textdata5 = checkdata.verse;
    //  const element5 = document.getElementById('verse');
    //  element5.innerHTML = Textdata5;
    })
