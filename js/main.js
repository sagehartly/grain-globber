var listGrains = ['Peanuts', 'Beans', 'Lentils'];

grains.forEach(function (grains) {

  var $ul = $('ul');
  var $li = $('<li>');
  var $img = $('<img>');
  var $h2 = $('<h2>');
  var $p = $('<p>');

  $ul.append($li);
  $img.attr('src', 'images/' + grains.img);
  $li.append($img);
  $h2.html(grains.name);
  $li.append($h2);
  $p.html(grains.desc);
  $li.append($p);
});
