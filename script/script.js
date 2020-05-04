// $('.point').on('click', function(){
//   let inText = $(this).text();
//   console.log(inText);
//   $('.mainFrame').text(inText);
// })

let imgList = [
  'https://st3.depositphotos.com/1819558/16529/i/450/depositphotos_165292510-stock-photo-bottle-and-a-wineglass-of.jpg',
  'https://st3.depositphotos.com/9867658/32130/i/450/depositphotos_321307974-stock-photo-beautiful-view-from-the-window.jpg',
  'https://st3.depositphotos.com/7699512/35335/i/450/depositphotos_353357254-stock-photo-woman-artisan-cutting-paper-indoor.jpg',
  'https://st4.depositphotos.com/4528425/25035/i/450/depositphotos_250359766-stock-photo-background-of-pitted-olives-close.jpg'
]

let points = $('div.point');

for (let i=0; i< points.length; i++) {
  points.eq(i).css({'background-image': `url(${imgList[i]})`});
}

$('.point').on('click', function(){
  let img = $(this).css('background-image');
  $('.mainFrame').css({'background-image': img});
  })


