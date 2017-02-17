const $img = document.createElement('img');
$img.src = 'https://unsplash.it/'+window.innerWidth+'/'+window.innerHeight+'?random&gravity=center';
$img.style='opacity:0';
$img.onload = () => {
  $img.style='';
}
document.body.appendChild($img);
