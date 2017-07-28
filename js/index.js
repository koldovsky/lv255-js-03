var clientData = ['John', 'James', 'Jakobs'];

var $clientData = document.getElementById('client-data');

clientData.forEach(function(el){
   $clientData.innerHTML += '<li>' + el + '</li>';
});

var h1 = document.getElementsByTagName('h1')[0];
h1.addEventListener('click', function() {
    alert('Goodbye!');
});
h1.addEventListener('click', function() {
    alert('Hello');
});


var googleLink = document.getElementsByTagName('a')[0];

// googleLink.addEventListener('click', function(e){
//     e.preventDefault();
//     alert('No Google!');
// });

