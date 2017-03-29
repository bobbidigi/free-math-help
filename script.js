var socialMedia = {
  facebook : 'https://www.facebook.com/AllenTownn/',
  twitter: 'https://twitter.com/bobbidigi0',
  linkedin: 'https://www.linkedin.com/in/robert-allen-44020778/'
};

var socialList = function() {
  var  output = '<ul>', 
    myList = document.querySelectorAll('.socialmediaicons');

  for (var key in arguments[0]) {
    output+= '<li><a href="' + socialMedia[key] + '">' +
      '<img src="images/' + key + '.png" alt="icon for '+key+'">' +
      '</a></li>';
  }
  output+= '</ul>';
  
  for (var i = myList.length - 1; i >= 0; i--) {
    myList[i].innerHTML = output;
  };
}(socialMedia);