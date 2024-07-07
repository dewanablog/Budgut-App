let des = document.getElementById('des');
let value = document.getElementById('value');
let addBtn = document.getElementById('add-btn');
let options = document.querySelectorAll('.options');
let incomeList = document.getElementById('income-list');
let expenseList = document.getElementById('expense-list');
let totalIncome = document.querySelector('.total-income');
let totalExpense = document.querySelector('.total-expense');
let totalBudg = document.querySelector('.total-budget');
let currentIncome = 0;
let currentExpense = 0;


addBtn.addEventListener('click', () => {
     let description = des.value;
     let numVal = parseFloat(value.value);
     options.forEach(val => {
          // >>>>>>>>>>>>>>>Expense functionality
          if (val.selected) {
               if (val.value == '+') {
                    currentIncome += numVal;
                    totalIncome.innerHTML = `Icncom: ${currentIncome}`;
                    let li = document.createElement('li');
                    let span = document.createElement('span');
                    let deleteButton = document.createElement('button')
                    deleteButton.classList.add('del-btn')
                    deleteButton.addEventListener('click',()=>{
                         let parent = deleteButton.parentElement;
                         incomeListRemove(parent)
                         updateTotalBudget()
                         parent.remove()
                    })
                    incomeList.appendChild(li);
                    deleteButton.innerText = 'X'
                    // console.log(deleteButton)
                    
                    li.innerHTML = description;
                    li.appendChild(deleteButton)
                    li.appendChild(span);
                    
                    span.innerHTML = ` ${numVal}`;
                    
                    des.value = "";
                    value.value = "";

// >>>>>>>>>>>>>>>Expense functionality

               } else {
                    currentExpense += numVal;
                    totalExpense.innerHTML = `Expense: ${currentExpense}`;
                    let li = document.createElement('li');
                    let span = document.createElement('span');
                    expenseList.appendChild(li);
                    let deleteButton = document.createElement('button')
                    deleteButton.classList.add('del-btn')
                    deleteButton.addEventListener('click',()=>{
                         let parent = deleteButton.parentElement;
                         expenseListRemove(parent)
                         parent.remove()
                         updateTotalBudget()
                    })
                    expenseList.appendChild(li);
                    deleteButton.innerText = 'X'
                    li.innerHTML = description;
                    li.appendChild(deleteButton)
                    li.appendChild(span);
                    span.innerHTML = ` ${numVal}`;

                    des.value = "";
                    value.value = "";
               }
               //  update the totalBudget value after add list 

               let totalBudgetValue = currentIncome - currentExpense;
               totalBudg.innerHTML = `+ ${totalBudgetValue}`

               //>>>>>>>> function for updating the Total Budget value after deleting list >>>>> 

               function updateTotalBudget() {

                    let totalBudgetValue = currentIncome - currentExpense;
                    totalBudg.innerHTML = `+${totalBudgetValue}`;
               }


          }
     });

     //>>>>>>>>>>>>>>>>>>>>  Update the Icome Value after Delete List



     function incomeListRemove(parent){
          let val = parseFloat(parent.lastChild.innerText);
           totalIncome.innerHTML = `Income:${currentIncome -= val}`
          //  console.log(val)
     }


     //>>>>>>>>>>>>>>>>>>>>   Update the Expense Value after Delete List

     function expenseListRemove(parent){
          let val = parseFloat(parent.lastChild.innerText);
          totalExpense.innerHTML = `Income:${currentExpense -= val}`
          let valForTotalBdg = parent.lastChild.innerText
          console.log(valForTotalBdg)
          totalBudg.innerHTML = `+${valForTotalBdg}`
          
          //  console.log(val)
     }

     
});

