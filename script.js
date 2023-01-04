//making dom elements by id const
const quoteContainer =document.getElementById('quotecontainer');
const quoteText = document.getElementById('quote');
const authorText = document.getElementById('author');
const twitterBtn = document.getElementById('twitter');
const newQuoteBtn = document.getElementById('new-quote');



// Get quotes from API
    //To do this we are going to use an async fetch request.
    // Async function runs independently and won't stop the browser in loading of a page.
    let apiQuotes=[];
    
    //now we are just defining a function but it would only when it is called
    function newQuote(){
        const quote = apiQuotes[Math.floor(Math.random()*apiQuotes.length)]; //apiQuotes is already with us so no need to use await
        quoteText.textContent = quote.text;
        if(!quote.author){
            
        authorText.textContent = "Unknown";
        }
        else
        
        authorText.textContent = quote.author;
        
    }
    async function getQuotes(){
        const apiUrl ='https://jacintodesign.github.io/quotes-api/data/quotes.json';
        try{
            const response = await fetch(apiUrl); 
            //fetch api fetch inforamtion asynchronously
            // await is used because response has to wait for fetch to get inforamtion from the source otherwise this will run and response will become empty
            apiQuotes = await response.json();
            
            newQuote();
        }
        catch(error){
            console.log(error);
        }
        
    } 
    function tweetQuote(){
        const twitterUrl = `https://twitter.com/intent/tweet?text= ${quoteText.textContent} - ${authorText.textContent}`;
         //these are not quotes , they are called back ticks due to which we can edit the url and put in variables
         window.open(twitterUrl,'_blank');

    }



    //event listeners , Usually at the bottom
    newQuoteBtn.addEventListener('click',newQuote);
    twitterBtn.addEventListener('click',tweetQuote);
    
    //here we will make function call , JS works like a sequential language and ignore the function definitons till the time function is not called
    // actual control comes here after the declaration of the function is seen.
    getQuotes();