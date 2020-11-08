function doCapture()
         {
              var y;
               html2canvas(document.getElementById('to-be-downloaded')).then(function(canvas){
  
              console.log(canvas.toDataURL("image/jpeg",0.9))
              y=canvas.toDataURL("image/jpeg",0.9);

              var img=document.createElement('img');
               img.src=y;
               console.log(img.src,"seee");
          document.body.appendChild(img);
              var a = document.createElement('a');
                  a.href = img.src;

        
        a.download = 'image.png';

        a.appendChild(img);

        document.body.appendChild(a);
        a.click();
      //   a.setAttribute('display' ,'none' );
        // img.style.visibility = "hidden"
        img.style.display = 'none'
               })
          }

 var t = 0;


 function alignName(a) {
    var name = document.getElementById('card_name');

    let ty = window
       .getComputedStyle(name)
       .getPropertyValue('transform').split();

    console.log(window.getComputedStyle(name).getPropertyValue('transform'));

    ty = ty[0].split(',');
    ty = ty[5].split(")");
    ty = Number(ty[0]);
    if (!a) {
       name.style.transform = "translate(" + t + "px" + "," + ty + "px)";
       t = t + 2;
    } else {
       name.style.transform = "translate(" + t + "px" + "," + ty + "px)";
       t = t - 2;
    }
 }

 var yy = 0;
 function alignNameVertical(a) {
    var name = document.getElementById('card_name');
    let tx = window
       .getComputedStyle(name)
       .getPropertyValue('transform').split();
    tx = tx[0].split(',');
    tx = tx[4].split(")");
    tx = Number(tx[0]);

    if (!a) {
       name.style.transform = "translate(" + tx + "px" + "," + yy + "px)";
       yy = yy + 2;
    } else {
       name.style.transform = "translate(" + tx + "px" + "," + yy + "px)";
       yy = yy - 2;
    }

 }
 var r = 0;

 function alignTitle(a) {


    var name = document.getElementById('title_name');

    let ty = window
       .getComputedStyle(name)
       .getPropertyValue('transform').split();

    ty = ty[0].split(',');
    ty = ty[5].split(")");
    ty = Number(ty[0]);

    if (!a) {
       name.style.transform = "translate(" + r + "px" + "," + ty + "px)";
       r = r + 2;
    } else {
       name.style.transform = "translate(" + r + "px" + "," + ty + "px)";
       r = r - 2;
    }

 }
 var p = 0;

 function alignTitleVertical(a) {
    var name = document.getElementById('title_name');

    let tx = window
       .getComputedStyle(name)
       .getPropertyValue('transform').split();

    tx = tx[0].split(',');
    tx = tx[4].split(")");
    tx = Number(tx[0]);

    if (!a) {
       name.style.transform = "translate(" + tx + "px" + "," + p + "px)";
       p = p + 2;
    } else {
       name.style.transform = "translate(" + tx + "px" + "," + p + "px)";
       p = p - 2;
    }

 }
 const name_color_picker = document.getElementById("name_color_picker");
 const name = document.getElementById("card_name");

 const title_color_picker = document.getElementById("title_color_picker");
 const titlename = document.getElementById("title_name");

 const setFont = document.getElementById("setFont");




 name_color_picker.addEventListener('input', function (e) {
    name.style.color = e.target.value;
 })


 title_color_picker.addEventListener('input', function (e) {
    titlename.style.color = e.target.value;
 })

 setFont.addEventListener('input', function (e) {
    let size = e.target.value + "px";

    titlename.style.fontSize = size;
    name.style.fontSize = size;
 })
 function selectFonts() {
    let ul = document.getElementById('li');
 }
 const parent_font = document.getElementById('parent_font');

 parent_font.addEventListener('click', function (e) {
    let child_id = document.getElementById(e.target.id);
    let font_style = child_id.textContent;
    name.style.fontFamily = font_style;
    titlename.style.fontFamily = font_style;
 })