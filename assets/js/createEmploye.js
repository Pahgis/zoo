let valuePortrait;
let recruterButton = document.querySelector(".recruter")
let imgSrc = document.querySelectorAll("input[type='radio']")
let nameEmployer = document.querySelector("input[name='nomEmployer']")
let idzoo = document.querySelector("input[type='hidden']")
let listeWorker = document.querySelector("#listeEmployer")

imgSrc.forEach(el => {
    el.addEventListener("click", function (e) {

        valuePortrait = el.value
    })
});
listEmployer()
recruterButton.addEventListener("click", function (e) {

    createWorker(valuePortrait, nameEmployer.value, idzoo.value)
    listEmployer()
})

function createWorker(img, name, id) {
    let workerObj = new FormData()
    workerObj.append("img", img)
    workerObj.append("name", name)
    workerObj.append("idzoo", id)
    fetch("./process/db_add.php", {
        method: "POST",
        body: workerObj
    })
}

function listEmployer() {
    setTimeout(() => {
        fetch("./process/db_add.php")
            .then((res) => {
                return res.json();
                
            })
            .then((datas) =>{
                listeWorker.innerHTML = ""
                datas.forEach(data => {
                   
                    
                    if(data.id_zoo == idzoo.value){
                        listeWorker.innerHTML += `
                    
                    <div class="d-flex flex-row justify-content-between">
                    <img src="${data.img}" style="height:40px;">
                        <p>${data.name}</p>
                        <input type="hidden" value="${data.id}" name="idSupp">
                        <button class="btn btn-danger suppEmployer"  value="${data.id}">Supp</button>
                    </div>
                    
                    `
                    }
                    
                });
                let suppWorker = document.querySelectorAll(".suppEmployer")
            })
    }, 2000);

}





window.addEventListener("click", function(e){
    if(e.target.classList.contains("suppEmployer")){
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
          }).then((result) => {
            if (result.isConfirmed) {
              Swal.fire({
                title: "Deleted!",
                text: "Your file has been deleted.",
                icon: "success"
                
              });
              let id_zoo_supp = new FormData()
              id_zoo_supp.append("idSupp", e.target.value)
              fetch("/process/worker_erase.php", {
                method: "POST",
                body: id_zoo_supp
              })
              .then((res) =>{
                listEmployer()
              })
              
            }
          });
    }
})
