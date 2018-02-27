//Jonathan Santiago's Project 1
//Random Quotes stored in objects below:
 var quotes = [
   { quote : 'A dead thing can go with the stream, but only a living thing can go against it.',
     source: 'G.K. Chesterson',
     citation: 'The Everlasting Man',
     year: 1925,
     category: 'Timeless Truths'
   },
   {
     quote : 'The Bible tells us to love our neighbors, and also to love our enemies; probably because they are generally the same people.',
     source: 'G.K. Chesterson',
     citation: 'Illustrated London News',
     year: 1910,
     category: 'Religion and Faith'
   },
   {
     quote : 'The Christian ideal has not been tried and found wanting; it has been found difficult and left untried.',
     source: 'G.K. Chesterson',
     citation: 'What’s Wrong With The World',
     year: 1910,
     category: 'Religion and Faith'
   },
   {
     quote : 'Love means loving the unlovable – or it is no virtue at all.',
     source: 'G.K. Chesterson',
     citation: 'Heretics',
     year: 1905,
     category: 'Love, Marriage and The Sexes'
   },
   {
     quote : 'Men do not differ much about what things they will call evils; they differ enormously about what evils they will call excusable.',
     source: 'G.K. Chesterson',
     citation: 'Illustrated London News',
     year: 1909,
     category: 'Morality and Truth'
   },
   {
     quote : 'America is the only country ever founded on a creed.',
     source: 'G.K. Chesterson',
     citation: 'What I Saw In America',
     year : 1922,
     category: 'Government and Politics'
   },
   {
     quote : 'The riddles of God are more satisfying than the solutions of man.',
     source: 'G.K. Chesterson',
     citation: 'Introduction to the Book of Job',
     year: 1907,
     category:'Religion and Faith'
   },
   {
     quote : 'Men invent new ideals because they dare not attempt old ideals. They look forward with enthusiasm, because they are afraid to look back.',
     source: 'G.K. Chesterson',
     citation: 'What is Wrong with the World',
     year: 1910,
     category: 'The Cult of Progress'
   }
 ];

//Generates random quote from a random Number
function getRandomQuote() {
  var randomNumber = Math.floor(Math.random() * quotes.length);
  var randomQuote = quotes[randomNumber];
  return randomQuote;
}

//Changes Background color
function changeColor() {
  var red = Math.floor(Math.random() * 256);
  var green = Math.floor(Math.random() * 256);
  var blue = Math.floor(Math.random() * 256);
  var rgbColor = "rgb(' + red + ', ' + green + ', ' + blue + ')";
  document.body.style.background = rgbColor;
}

//Stores random quote is a variable
//Prints the random Quote to html
function printQuote(){
  var retrievedQuote = getRandomQuote();
  var html =
    '<p class="quote">' + retrievedQuote.quote + '</p>' +
    '<p class="source">' + retrievedQuote.source +
      '<span class="citation">' + retrievedQuote.citation + '</span>' +
      '<span class="year">' + retrievedQuote.year + '</span>' +
      '<span class="category">' +  retrievedQuote.category + '</span>' +
    '</p>';
    document.getElementById('quote-box').innerHTML = html

    return changeColor();
}

// event listener to respond to "Show another quote" button clicks
// when user clicks anywhere on the button, the "printQuote" function is called
document.getElementById('loadQuote').addEventListener("click", printQuote, false);
