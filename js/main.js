var $ul = $('ul');
var $li = $('<li>');
var $img = $('<img>');
var $h2 = $('<h2>');
var $p = $('<p>');

grains.forEach(function(item) {
$ul.append($li);
$img.attr('src', 'images/' + item.img)
$li.append($img);
$h2.html(item.name)
$li.append($h2);
$li.append($p);
});
