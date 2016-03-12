var $ul = $('ul');
var $li = $('<li>');
var $img = $('<img>');
var $h2 = $('<h2>');
var $p = $('<p>');

var listGrains = function (grains) {
  grains.forEach(function (item) {

    $ul.append($li);
    $img.attr('src', 'images/' + item.img);
    $li.append($img);
    $h2.html(item.name);
    $li.append($h2);
    $p.html(item.desc);
    $li.append($p);
  });
};

listGrains(grains);
