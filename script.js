let one = document.querySelector("#in");
let btn = document.querySelector("#btn");
let task = document.querySelector(".tasks");
let val = 0;
btn.addEventListener("click", function () {
  if (one.value.length == 0) {
    alert("please enter input");
  } else {
    task.innerHTML += `<div class="task"
    > ${++val + "     " + one.value}

    <span>
    <button class="delete"
    >  <i class="fa-solid fa-trash-can"></i></button>
    </div>`;
    let current = document.querySelectorAll(".delete");
    for (let i = 0; i < current.length; i++) {
      current[i].addEventListener("click", function () {
        this.parentNode.parentNode.remove(); // remove the parent of the parent (div.task)
      });
    }
  }
});
// let one = document.querySelector("#in");
// let btn = document.querySelector("#btn");
// let task = document.querySelector(".tasks");
// let val = 0;

// btn.addEventListener("click", function () {
//   if (one.value.length == 0) {
//     alert("please enter input");
//   } else {
//     task.innerHTML += `<div class="task">${++val + "     " + one.value}
//         <span>
//             <button class="delete">
//                 <i class="fa-solid fa-trash-can"></i>
//             </button>
//         </span>
//     </div>`;

//   }
// });
