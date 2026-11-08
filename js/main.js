document.addEventListener("DOMContentLoaded", function() { //event listener for when the page fully loads. This will then run the contained functions
Title();
Picture();
Table();
});

function Title() { //function to create the title of the page
    let title = document.getElementById("title");
    title.innerHTML = "<h1 class='bg-warning border border-dark p-2'>Favorite Singers</h1>";
}
function Picture(){ //function to show a picture to the left of the table in the first column
    let picture = document.getElementById("picture");
    picture.innerHTML = "<img src='images/singers.jpg' alt='singers' class='img-fluid'>";
}
function Table() { //function to create the table of singers, their most popular song, and the number of songs they have released
    let list = [ //Json array of objects containing the singers, their most popular song, and the number of songs they have released
  {
    "singer": "The Weeknd",
    "most_popular_song": "Blinding Lights",
    "songs_released": 147
  },
  {
    "singer": "Taylor Swift",
    "most_popular_song": "Cruel Summer",
    "songs_released": 243
  },
  {
    "singer": "Bruno Mars",
    "most_popular_song": "Uptown Funk",
    "songs_released": 82
  },
  {
    "singer": "Adele",
    "most_popular_song": "Rolling in the Deep",
    "songs_released": 61
  },
  {
    "singer": "Ed Sheeran",
    "most_popular_song": "Shape of You",
    "songs_released": 195
  },
  {
    "singer": "Billie Eilish",
    "most_popular_song": "Bad Guy",
    "songs_released": 54
  },
  {
    "singer": "Dua Lipa",
    "most_popular_song": "Levitating",
    "songs_released": 78
  }
]
    let table = document.getElementById("table");
    let tableHTML = "<table class='table table-striped table-bordered'><thead><tr><th>Singer</th><th>Most Popular Song</th><th>Songs Released</th></tr></thead><tbody>"; //add the table headers for the bootstrap table
    tableHTML += list.map(item => `<tr><td>${item.singer}</td><td>${item.most_popular_song}</td><td>${item.songs_released}</td></tr>`).join('');  //use the map function to loop through the list and create a table row for each item in the list
    tableHTML += "</tbody></table>"; //close the table body and table tags
    table.innerHTML = tableHTML; //add the table to the table div in the html
}

