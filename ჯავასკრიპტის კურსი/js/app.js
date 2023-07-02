let filterarray=[];

let galleryarray =  [
  {
  id:1,
  name: "მოსიარულე მკვდრები",
  src: "https://ntvb.tmsimg.com/assets/p8282918_b_h8_bn.jpg?w=960&h=540",
  desc: "სერიალი გადაღებულია ამავე სახელწოდების კომიქსების სერიის მიხედვით. სერიალი მოგვითხრობს ზომბი აპოკალიფსის შემდეგ მყოფი რამდენიმე ადამიანის ბრძოლაზე გადარჩენისათვის..."


},


{
  id:2,
  name: "ზებუნებრივი",
  src: "https://wallpaperaccess.com/full/1544324.jpg",
  desc: "როდესაც სემი და დინი ბავშვები იყვნენ, მათი დედა მისტიური, დემონური ზებუნებრივი ძალის წყალობით დაიკარგა. მამამისს ბავშვების მარტო, ნამდვილ ჯარისკაცებად აღზრდა მოუწია, რომლებიც მზად არიან ნებისმიერ ზებუნებრივ ქმნილებას შეებრძოლონ, ასეთები კი სამყაროში მრავლად არიან..."


}



]

showgallery(galleryarray);

function showgallery(curarra){
  document.getElementById("card").innerText = "";
  for(var i=0;i<curarra.length;i++){
      document.getElementById("card").innerHTML += `
       <div class="col-md-4 mt-3" >
          <div class="card p-3 ps-5 pe-5">
              <h4 class="text-capitalize text-center">${curarra[i].name}</h4>

         <img src="${curarra[i].src}" width="100%" height="320px"/>
         <p class="mt-2">${curarra[i].desc}</p>
         <button class="btn btn-primary w-100 mx-auto">More</button>
      
         </div>
         </div>
      `
  }

}

// For Live Searching Product

document.getElementById("myinput").addEventListener("keyup",function(){
   let text = document.getElementById("myinput").value;

   filterarray= galleryarray.filter(function(a){
       if(a.name.includes(text)){
           return a.name;
          }

  });
  if(this.value==""){
      showgallery(galleryarray);
  }
  else{
      if(filterarray == ""){
          document.getElementById("para").style.display = 'block'
          document.getElementById("card").innerHTML = ""; 
      }
      else{

          showgallery(filterarray);
          document.getElementById("para").style.display = 'none'
      }
  }

});

