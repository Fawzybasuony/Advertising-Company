
let card = document.querySelectorAll(".card");
let all = document.getElementById("all");
let all_2 = document.getElementById("all_2");
let up = document.getElementById("up");


card.forEach(eo => {

     eo.addEventListener("click", () => {
          
          all.style.display = "block";
          let photo = eo.getElementsByTagName("img")[0].src
          let text = eo.getElementsByTagName("h5")[0].innerText
          let h3_1 = eo.getElementsByTagName("h3")[0].innerText
          let h3_2 = eo.getElementsByTagName("h3")[1].innerText

          let add_class = `

           <div class="row mx-0 d-flex justify-content-between align-items-center">
               <div class="col-6 tols my-5">
                    <img src="${photo}" style="width: 250px;height: 250px;">
               </div>
               <div class="col-4 me-1 me-sm-5">
                    <p class="fs-4 fw-bold text-primary">${text}</p>
                              <h6 class="text-primary fw-bold d-block">${h3_1}</h6>
                              <h6 class="text-primary fw-bold d-block">${h3_2}</h6>
               </div>

          </div>
          `
          all_2.innerHTML = add_class;


     })

});



function upp() {

     window.scroll({
          top: 0,
          left: 0,
          behavior: "smooth",
     })

}


function bac() {
     all.style.display="none"

}