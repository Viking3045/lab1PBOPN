import  { thresholdMasses }  from "./thresholdMasses.js";
const menu = document.querySelector(".menu");
const footer = document.querySelector(".footer");
const form = document.querySelector(".form");
const btn = document.querySelector(".submitFirstForm");
const selectPlatoon = document.querySelector(".selectPlatoon");
// const selectTree = document.querySelector(".selectTree");
const selectName = document.querySelector(".name");
const selectMiddleName = document.querySelector(".middleName");
const selectLastName = document.querySelector(".lastName");

selectPlatoon.addEventListener("change", inputPlatoon);
// selectTree.addEventListener("change", inputTree);
selectName.addEventListener("change", inputName);
selectMiddleName.addEventListener("change", inputMiddleName);
selectLastName.addEventListener("change", inputLastName);
btn.addEventListener("click", allInformation);

const obj = {
  name: "",
  middleName: "",
  lastName: "",
  platoon: "",
  amount:0,
  substance: 0,
  counter: 0,
  classForOne: "",
  risk: "", 
  first: "",
  second: "",
  third: "",
  fourth: "",
  fifth: "",
  sixth: "",
};
 let array = [];
function inputName(event) {
  const name = event.target.value;
  obj.name = name;
  // console.log("name",name)
}
function inputMiddleName(event) {
  const middleName = event.target.value;
  obj.middleName = middleName;
  // console.log("middleName",middleName)
}
function inputLastName(event) {
  const lastName = event.target.value;
  obj.lastName = lastName;
  // console.log("lastName",lastName)
}
function inputPlatoon(event) {
  const platoon = event.target.value;
  obj.platoon = platoon;

}
//Підсумок за результатами експерименту

function allInformation() {
  if (
    obj.lastName.length > 1 &&
    obj.name.length > 1 &&
    obj.middleName.length > 1 &&
    obj.platoon.length > 1 

  ) {

 footer.innerHTML =""
// const name = thresholdMasses.map(function(word) {

//   const option = document.createElement("option")
//   option.value = `${word.individualNamesOfDangerousSubstances}`
//   option.textContent = `${word.individualNamesOfDangerousSubstances}`
//   // option.classList = 
//   selectDangerousSubstance.append(option)
//   // console.log('word',word.individualNamesOfDangerousSubstances );
// })

    menu.innerHTML = "";
    menu.classList = "styleMenu"
    const tableContainer = document.createElement("div")
    const tableHTML = `
<table class="dark-table">
<caption>Варіанти для визначення небезпечних речовин за індивідуальними назвами</caption>
<thead>
<tr>
<th rowspan="2">Остання цифра №<br>індивідуальному плані</th>
<th colspan="10">Передостання цифра номера індивідуального плану</th>
</tr>
<tr>
<th>1</th><th>2</th><th>3</th><th>4</th><th>5</th>
<th>6</th><th>7</th><th>8</th><th>9</th><th>0</th>
</tr>
</thead>
<tbody>
<tr><th>1</th><td>1</td><td>11</td><td>21</td><td>31</td><td>41</td><td>1</td><td>11</td><td>21</td><td>31</td><td>41</td></tr>
<tr><th>2</th><td>2</td><td>12</td><td>22</td><td>32</td><td>42</td><td>2</td><td>12</td><td>22</td><td>32</td><td>42</td></tr>
<tr><th>3</th><td>3</td><td>13</td><td>23</td><td>33</td><td>43</td><td>3</td><td>13</td><td>23</td><td>33</td><td>43</td></tr>
<tr><th>4</th><td>4</td><td>14</td><td>24</td><td>34</td><td>44</td><td>4</td><td>14</td><td>24</td><td>34</td><td>44</td></tr>
<tr><th>5</th><td>5</td><td>15</td><td>25</td><td>35</td><td>45</td><td>5</td><td>15</td><td>25</td><td>35</td><td>45</td></tr>
<tr><th>6</th><td>6</td><td>16</td><td>26</td><td>36</td><td>46</td><td>6</td><td>16</td><td>26</td><td>36</td><td>46</td></tr>
<tr><th>7</th><td>7</td><td>17</td><td>27</td><td>37</td><td>47</td><td>7</td><td>17</td><td>27</td><td>37</td><td>47</td></tr>
<tr><th>8</th><td>8</td><td>18</td><td>28</td><td>38</td><td>48</td><td>8</td><td>18</td><td>28</td><td>38</td><td>48</td></tr>
<tr><th>9</th><td>9</td><td>19</td><td>29</td><td>39</td><td>1</td><td>9</td><td>19</td><td>29</td><td>39</td><td>3</td></tr>
<tr><th>0</th><td>10</td><td>20</td><td>30</td><td>40</td><td>2</td><td>10</td><td>20</td><td>30</td><td>40</td><td>4</td></tr>
</tbody>
</table>
`;

const tableContainer2 = document.createElement("div")
const tableHTML2 = `<style>
  .danger-table {
    background: #000;
    color: #fff;
    border-collapse: collapse;
    width: 100%;
    font-family: Arial, sans-serif;
    text-align: center;
  }
  .danger-table th, .danger-table td {
    border: 1px solid #fff;
    padding: 6px 10px;
  }
  .danger-table caption {
    caption-side: top;
    color: #fff;
    font-weight: bold;
    padding: 10px;
  }
</style>

<table class="danger-table">
<caption>Варіанти для визначення маси небезпечних речовин в тонах</caption>

<tr>
  <th rowspan="2">Остання цифра № індивідуального плану</th>
  <th colspan="10">Передостання цифра номера індивідуального плану</th>
</tr>
<tr>
  <th>1</th><th>2</th><th>3</th><th>4</th><th>5</th>
  <th>6</th><th>7</th><th>8</th><th>9</th><th>0</th>
</tr>

<tr><th>1</th><td>5000</td><td>1</td><td>50</td><td>75</td><td>200</td><td>5000</td><td>1</td><td>50</td><td>75</td><td>200</td></tr>
<tr><th>2</th><td>1250</td><td>10</td><td>5000</td><td>0,001</td><td>500</td><td>1250</td><td>10</td><td>5000</td><td>0,001</td><td>500</td></tr>
<tr><th>3</th><td>350</td><td>10</td><td>0,01</td><td>0,5</td><td>200</td><td>350</td><td>10</td><td>0,01</td><td>0,5</td><td>200</td></tr>
<tr><th>4</th><td>10</td><td>5</td><td>0,15</td><td>2500</td><td>500</td><td>10</td><td>5</td><td>0,15</td><td>2500</td><td>500</td></tr>

<tr><th>5</th><td>5000</td><td>5</td><td>2000</td><td>50</td><td>100</td><td>5000</td><td>5</td><td>2000</td><td>50</td><td>100</td></tr>
<tr><th>6</th><td>1250</td><td>25</td><td>100</td><td>5</td><td>500</td><td>1250</td><td>25</td><td>100</td><td>5</td><td>500</td></tr>
<tr><th>7</th><td>1</td><td>5</td><td>0,75</td><td>5</td><td>500</td><td>1</td><td>5</td><td>0,75</td><td>5</td><td>500</td></tr>
<tr><th>8</th><td>0,2</td><td>50</td><td>1</td><td>50</td><td>500</td><td>0,2</td><td>50</td><td>1</td><td>50</td><td>500</td></tr>
<tr><th>9</th><td>20</td><td>5</td><td>1</td><td>50</td><td>5000</td><td>20</td><td>5</td><td>1</td><td>50</td><td>350</td></tr>
<tr><th>0</th><td>4</td><td>5</td><td>1</td><td>50</td><td>1250</td><td>4</td><td>5</td><td>1</td><td>50</td><td>10</td></tr>

</table>`
tableContainer.innerHTML = tableHTML
tableContainer2.innerHTML = tableHTML2
    const container = document.createElement("div")
    container.classList = "container"
    const section = document.createElement("div")
    section.classList = "section"
    section.append(container)
    const ul = document.createElement("ul");
    const title = document.createElement("h2")
    title.classList = "title1"
    title.textContent = "Кількість речовини"
    container.append(tableContainer)
    container.append(tableContainer2)
    container.append(title)

    const li = document.createElement("li")
    const title2 = document.createElement("h3")
    title2.classList = "calculation__name primaryTextcolor"
        title2.textContent = "Кількість небезпечної речовини"
        li.append(title2)

      const amountSubstance  = document.createElement("input")
      amountSubstance.classList = "amount input initialData__input"
      amountSubstance.placeholder = "Введіть кількість речовини"
      amountSubstance.name = "amount"
      amountSubstance.type = "number"
      amountSubstance.pattern = "[1-9]"
// amountSubstance.addEventListener("amountSubstance", () => {
//     // if (amountSubstance.value.length > 5) {
//     //     amountSubstance.value = amountSubstance.value.slice(0, 5);
//     // }
// });
        li.append(amountSubstance)
        ul.append(li)

        const selectDangerousSubstance = document.createElement("select")
        selectDangerousSubstance.classList = "selectDangerousSubstance selectTree"
        const value = document.createElement("option")
      value.textContent = "Оберіть тип небезпечної речовини"
      selectDangerousSubstance.append(value)
           container.append(selectDangerousSubstance)
       container.append(ul)
 const submitFirstForm = document.createElement("button")
 submitFirstForm.classList = "submitFirstForm btn"
 submitFirstForm.textContent = "Додати небезпечну речовину"
 selectDangerousSubstance.addEventListener("change", setOutputSubstance);
submitFirstForm.addEventListener("click", submit);
amountSubstance.addEventListener("change", submitAmount)


const name = thresholdMasses.map(function(word) {

  const option = document.createElement("option")
  option.value = `${word.individualNamesOfDangerousSubstances}`
  option.textContent = `${word.individualNamesOfDangerousSubstances}`
  // option.classList = 
  selectDangerousSubstance.append(option)
  // console.log('word',word.individualNamesOfDangerousSubstances );
})
  container.append(submitFirstForm)



function submitAmount(event){
    const selectAmount = event.target.value;
    obj.amount = selectAmount;
  }
function setOutputSubstance(event) {
    const selectSubstance = event.target.value;
    obj.substance = selectSubstance;
  }



  function submit() {
    const { substance, amount } = obj;
  
  
    if (substance.length > 1 && amount >0) {
      console.log("11111111111111111111111111", amount)
      const objWhichSubstances =  thresholdMasses.find(option => option.individualNamesOfDangerousSubstances === obj.substance)
      const thresholdMassesForOne = objWhichSubstances.thresholdMassNorm
 if (Number(amount) < Number(thresholdMassesForOne.thirdClass)){
  obj.classForOne = "Не відноситься до об’єктів підвищеної небезпеки"
  console.log("Не відноситься до об’єктів підвищеної небезпеки")
 }  else if(Number(thresholdMassesForOne.thirdClass) <= Number(amount)&& Number(amount) < Number(thresholdMassesForOne.secondClass)){ 
  obj.classForOne = "3 клас";
  console.log("3 клас")
 } else if(Number(thresholdMassesForOne.secondClass) <= Number(amount) && Number(amount) < Number(thresholdMassesForOne.firstClass)){ 
 obj.classForOne = "2 клас";
 console.log("2 клас")
 }else if( Number(amount) >= Number(thresholdMassesForOne.firstClass)){ 
 obj.classForOne = "1 клас";
 console.log("1 клас")
 }
 else{
  console.log("Помилка, зверніться будь ласка до адміністратора")
 }

 array.push({ ...obj });
console.log("arrrrrr", array)







      title.innerHTML = " Небезпечні речовини для розрахунку";
      title.classList = "titlesSubstance";
  
      const item = document.createElement("li");
      const ul = document.createElement("ul");
      ul.classList = "substanceWhoAdd";
      const substance1 = document.createElement("li");
      substance1.classList = "substanceWhoAddItem  cont";
      substance1.textContent = `Небезпечна речовина: ${substance}`;

      const amount1 = document.createElement("li");
      amount1.classList = "amountWhoAddItem";
      amount1.textContent = `Кількість речовини: ${amount}`;
      ul.append(substance1, amount1);

      item.append(ul);
 
      // Створення кнопки для розрахунків
      const submitFinalForm = document.createElement("button");
      submitFinalForm.textContent = "Розрахувати";
      submitFinalForm.type = "button";
      submitFinalForm.style = "padding: 20px";
     
      submitFinalForm.classList = "submitFinaltForm btn";
      submitFinalForm.addEventListener("click", disabledFinalFormButton);
      function disabledFinalFormButton() {
        submitFinalForm.disabled = true;
      }

      calculationForm.append(item);

      if (obj.counter !== 1) {
        // secondForm.append(title)
        calculationForm.after(submitFinalForm);
      }
   


      const submitFinaltForm2 = document.querySelector(".submitFinaltForm");
      submitFinaltForm2.addEventListener("click", heightOfCollapse);
  
      //Скидаємо данні форми та очищаємо обєкт
      selectDangerousSubstance.selectedIndex = 0;
      amountSubstance.value =""
      obj.substance = 0;
      obj.amount = 0;
      obj.counter = 1;
    } else {
      alert("Будь ласка заповніть всі поля");
    }
  }



//Функція для фінального розрахунку
function heightOfCollapse (){

   

    //Перебираю класи об'єкта
  const allClassesForOne = array.map((arr) => arr.classForOne);
  let cherry = ""
  const first = allClassesForOne.includes("1 клас")
  if(first === true){
    cherry = "належить до 1 класу небезпечних речовин"
    obj.classForOne = cherry
    // console.log("1111", first)
  } else if(first === false){
const second = allClassesForOne.includes("2 клас")
if(second === true){
   cherry = "належить до 2 класу небезпечних речовин"
      obj.classForOne = cherry
} else if(second === false){
  const third = allClassesForOne.includes("3 клас")
   
  if(third ===true){
     cherry = "належить до 3 класу небезпечних речовин"
       obj.classForOne = cherry
  } else if(third === false){
    cherry = "не відноситься до об’єктів підвищеної небезпеки"
      obj.classForOne = cherry
  }
}
  }
  const finalFirstContainer = document.createElement("div")
  finalFirstContainer.classList = "container"
  const firstTitle = document.createElement("p")
  firstTitle.textContent = `Об'єкт  ${cherry}`
  firstTitle.classList = "firstResult substanceWhoAdd calculationForm cont"

      //  // Змінити введені данні ідентифікацію
      //  const refreshFirstStep = document.createElement("button");
      //  refreshFirstStep.textContent = "Змінити введені данні";
      //  refreshFirstStep.type = "button";
      //  refreshFirstStep.style = "padding: 20px";
      //  refreshFirstStep.classList = "refreshFirstStep, btn";
      //  refreshFirstStep.addEventListener("click", refreshFirstStepButton);
      //  function refreshFirstStepButton() {
      //   submitFirstForm.disabled = false;
      //   const firstResult = document.querySelector(".firstResult")
      //   const submitFinaltForm = document.querySelector(".submitFinaltForm")
      //   const  refreshFirstStep = document.querySelector(".refreshFirstStep")
       
      //   firstResult.remove()
      //   submitFinaltForm.disabled = false;
      //   refreshFirstStep.remove();
      //   firstStepEnd.remove()
      //  }

// кнопка переходу від першого кроку до наступного
const firstStepEnd = document.createElement("button")
const tableContainer3 = document.createElement("div")
const tableHTML3 = `
<style>
  .table-wrapper {
    width: 100%;
    overflow-x: auto;
    -webkit-overflow-scrolling: touch;
    background: #000;
    padding: 6px;
  }

  .lab-table {
    border-collapse: collapse;
    min-width: 700px; /* щоб з'являвся скрол на 320px */
    background: #000;
    color: #fff;
    font-family: Arial, sans-serif;
    font-size: 13px;
    text-align: center;
  }

  .lab-table th, .lab-table td {
    border: 1px solid #fff;
    padding: 6px 8px;
    white-space: nowrap;
  }

  .lab-table caption {
    caption-side: top;
    color: #fff;
    font-weight: bold;
    padding: 8px 4px;
    font-size: 14px;
  }

  .sticky-col {
    position: sticky;
    left: 0;
    background: #000;
    z-index: 2;
  }

  .sticky-head {
    position: sticky;
    top: 0;
    background: #000;
    z-index: 3;
  }
</style>

<div class="table-wrapper">
<table class="lab-table">
<caption>Варіанти для обрання відповіді на теоретичні питання лабораторної роботи №1</caption>

<tr>
  <th class="sticky-head sticky-col" rowspan="2">Остання цифра № індивідуального плану</th>
  <th class="sticky-head" colspan="10">Передостання цифра номера індивідуального плану</th>
</tr>
<tr>
  <th class="sticky-head">1</th><th class="sticky-head">2</th><th class="sticky-head">3</th><th class="sticky-head">4</th><th class="sticky-head">5</th>
  <th class="sticky-head">6</th><th class="sticky-head">7</th><th class="sticky-head">8</th><th class="sticky-head">9</th><th class="sticky-head">0</th>
</tr>

<tr><th class="sticky-col">1</th><td>1, 30</td><td>11, 20</td><td>21, 10</td><td>1, 30</td><td>11, 20</td><td>21, 10</td><td>1, 30</td><td>11, 20</td><td>21, 10</td><td>1, 30</td></tr>
<tr><th class="sticky-col">2</th><td>2, 29</td><td>12, 19</td><td>22, 9</td><td>2, 29</td><td>12, 19</td><td>22, 9</td><td>2, 29</td><td>12, 19</td><td>22, 9</td><td>2, 29</td></tr>
<tr><th class="sticky-col">3</th><td>3, 28</td><td>13, 18</td><td>23, 8</td><td>3, 28</td><td>13, 18</td><td>23, 8</td><td>3, 28</td><td>13, 18</td><td>23, 8</td><td>3, 28</td></tr>
<tr><th class="sticky-col">4</th><td>4, 27</td><td>14, 17</td><td>24, 7</td><td>4, 27</td><td>14, 17</td><td>24, 7</td><td>4, 27</td><td>14, 17</td><td>24, 7</td><td>4, 27</td></tr>
<tr><th class="sticky-col">5</th><td>5, 26</td><td>15, 16</td><td>25, 6</td><td>5, 26</td><td>15, 16</td><td>25, 6</td><td>5, 26</td><td>15, 16</td><td>25, 6</td><td>5, 26</td></tr>
<tr><th class="sticky-col">6</th><td>6, 25</td><td>16, 15</td><td>26, 5</td><td>6, 25</td><td>16, 15</td><td>26, 5</td><td>6, 25</td><td>16, 15</td><td>26, 5</td><td>6, 25</td></tr>
<tr><th class="sticky-col">7</th><td>7, 24</td><td>17, 14</td><td>27, 4</td><td>7, 24</td><td>17, 14</td><td>27, 4</td><td>7, 24</td><td>17, 14</td><td>27, 4</td><td>7, 24</td></tr>
<tr><th class="sticky-col">8</th><td>8, 23</td><td>18, 13</td><td>28, 3</td><td>8, 23</td><td>18, 13</td><td>28, 3</td><td>8, 23</td><td>18, 13</td><td>28, 3</td><td>8, 23</td></tr>
<tr><th class="sticky-col">9</th><td>9, 22</td><td>19, 12</td><td>29, 2</td><td>9, 22</td><td>19, 12</td><td>29, 2</td><td>9, 22</td><td>19, 12</td><td>29, 2</td><td>9, 22</td></tr>
<tr><th class="sticky-col">0</th><td>10, 21</td><td>20, 11</td><td>30, 1</td><td>10, 21</td><td>20, 11</td><td>30, 1</td><td>10, 21</td><td>20, 11</td><td>30, 1</td><td>10, 21</td></tr>

</table>
</div>
`;
tableContainer3.innerHTML = tableHTML3
      firstStepEnd.textContent = "Підготувати звіт";
    
      firstStepEnd.type = "button";
      firstStepEnd.style = "padding: 20px"; 
      firstStepEnd.classList = "submitFinaltForm btn";
      firstStepEnd.addEventListener("click", firstStepEndButton);
      function firstStepEndButton() {
          console.log("213231323", obj) 
        firstStepEnd.onclick = function() {
            menu.innerHTML = "";
            // const result = array.map((arr) => arr)
            // console.log("result", result)
        const sectionReport = document.createElement("section")
        sectionReport.classList = "initialData reportSection"
        const containerReport = document.createElement("div")
        containerReport.classList = "container"
        const form = document.createElement("form");
        // form.id = "content"
        form.classList = "formClear"
        form.autocomplete = "off"
        const fieldset = document.createElement("fieldset");
        fieldset.classList = "fieldsetReport"

        const firstQuestion = document.createElement("div");
        firstQuestion.classList = "firstInput"
        firstQuestion.textContent =
          "1. Що є основною метою процедури ідентифікації об'єкта підвищеної небезпеки (ОПН)?";
        const firstInput = document.createElement("textarea");
        firstInput.classList = " initialData__input";
        firstInput.name = "firstInput"
        firstInput.rows = "3"

        const secondQuestion = document.createElement("div");
        secondQuestion.classList = "firstInput"
        secondQuestion.textContent =
          "2. За яким основним показником речовина відноситься до категорії небезпечних під час ідентифікації?";
        const secondInput = document.createElement("textarea");
        secondInput.classList = "secondInput initialData__input";
        secondInput.name = "secondInput"
       
        secondInput.rows = "3"

        const thirdQuestion = document.createElement("div");
        thirdQuestion.classList = "firstInput"
        thirdQuestion.textContent =
          "3. Хто несе відповідальність за проведення ідентифікації ОПН на підприємстві?";
        const thirdInput = document.createElement("textarea");
        thirdInput.classList = "thirdInput initialData__input";
        thirdInput.name = "thirdInput"
      
        thirdInput.rows = "3"

        const fourthQuestion = document.createElement("div");
        fourthQuestion.classList = "firstInput"
        fourthQuestion.textContent =
          "4. На скільки класів поділяються об'єкти підвищеної небезпеки за результатами ідентифікації? ";
        const fourthInput = document.createElement("textarea");
        fourthInput.classList = "fourthInput initialData__input";
        fourthInput.name = "fourthInput"
       
        fourthInput.rows = "3"

        const fifthQuestion = document.createElement("div");
        fifthQuestion.classList = "firstInput"
        fifthQuestion.textContent =
          "5. Що таке 'порогова маса' небезпечної речовини? ";
        const fifthInput = document.createElement("textarea");
        fifthInput.classList = "fifthInput initialData__input";
        fifthInput.name = "fifthInput"
     
        fifthInput.rows = "3"
        const qQuestion = document.createElement("div");
        qQuestion.classList = "firstInput"
        qQuestion.textContent =
          "6. Який документ є результатом успішного проведення ідентифікації?";
        const qInput = document.createElement("textarea");
        qInput.classList = "qInput initialData__input";
        qInput.name = "qInput"
     
        qInput.rows = "3"
        const wQuestion = document.createElement("div");
        wQuestion.classList = "firstInput"
        wQuestion.textContent =
          "7.	Якщо на об'єкті зберігаються різні види небезпечних речовин, маси яких менші за порогові, як проводиться ідентифікація?";
        const wInput = document.createElement("textarea");
        wInput.classList = "wInput initialData__input";
        wInput.name = "wInput"
     
        wInput.rows = "3"
        const eQuestion = document.createElement("div");
        eQuestion.classList = "firstInput"
        eQuestion.textContent =
          "8.	Як часто суб'єкт господарювання повинен проводити повторну ідентифікацію ОПН? ";
        const eInput = document.createElement("textarea");
        eInput.classList = "eInput initialData__input";
        eInput.name = "eInput"
     
        eInput.rows = "3"
        const rQuestion = document.createElement("div");
        rQuestion.classList = "firstInput"
        rQuestion.textContent =
          "9.	Яка категорія речовин включає в себе горючі гази та легкозаймисті рідини, наведіть приклади? ";
        const rInput = document.createElement("textarea");
        rInput.classList = "rInput initialData__input";
        rInput.name = "rInput"
     
        rInput.rows = "3"
        const tQuestion = document.createElement("div");
        tQuestion.classList = "firstInput"
        tQuestion.textContent =
          "10.	У якому реєстрі накопичуються дані про ідентифіковані об'єкти підвищеної небезпеки? ";
        const tInput = document.createElement("textarea");
        tInput.classList = "tInput initialData__input";
        tInput.name = "tInput"
     
        tInput.rows = "3"
        const yQuestion = document.createElement("div");
        yQuestion.classList = "firstInput"
        yQuestion.textContent =
          "11.	Який нормативно-правовий акт є основним у регулюванні діяльності, пов'язаної з об'єктами підвищеної небезпеки в Україні?";
        const yInput = document.createElement("textarea");
        yInput.classList = "yInput initialData__input";
        yInput.name = "yInput"
     
        yInput.rows = "3"
        const uQuestion = document.createElement("div");
        uQuestion.classList = "firstInput"
        uQuestion.textContent =
          "12.	Як класифікуються об'єкти підвищеної небезпеки відповідно до ступеня ризику, який вони становлять?";
        const uInput = document.createElement("textarea");
        uInput.classList = "uInput initialData__input";
        uInput.name = "uInput"
     
        uInput.rows = "3"
        const iQuestion = document.createElement("div");
        iQuestion.classList = "firstInput"
        iQuestion.textContent =
          "13.	При проведенні ідентифікації за 'правилом додавання', які речовини сумуються між собою? ";
        const iInput = document.createElement("textarea");
        iInput.classList = "iInput initialData__input";
        iInput.name = "iInput"
     
        iInput.rows = "3"
        const oQuestion = document.createElement("div");
        oQuestion.classList = "firstInput"
        oQuestion.textContent =
          "14.	Хто здійснює державний контроль (нагляд) за повнотою та достовірністю проведеної ідентифікації ОПН?";
        const oInput = document.createElement("textarea");
        oInput.classList = "oInput initialData__input";
        oInput.name = "oInput"
     
        oInput.rows = "3"
        const pQuestion = document.createElement("div");
        pQuestion.classList = "firstInput"
        pQuestion.textContent =
          "15.	Протягом якого терміну після проведення ідентифікації суб'єкт господарювання має надіслати результати уповноваженим органам?";
        const pInput = document.createElement("textarea");
        pInput.classList = "pInput initialData__input";
        pInput.name = "pInput"
     
        pInput.rows = "3"
        const aQuestion = document.createElement("div");
        aQuestion.classList = "firstInput"
        aQuestion.textContent =
          "16.	Яка інформація НЕ є обов'язковою в результатах ідентифікації ОПН?";
        const aInput = document.createElement("textarea");
        aInput.classList = "aInput initialData__input";
        aInput.name = "aInput"
     
        aInput.rows = "3"
        const sQuestion = document.createElement("div");
        sQuestion.classList = "firstInput"
        sQuestion.textContent =
          "17.	Що таке 'Державний реєстр об'єктів підвищеної небезпеки'?";
        const sInput = document.createElement("textarea");
        sInput.classList = "sInput initialData__input";
        sInput.name = "sInput"
     
        sInput.rows = "3"
        const dQuestion = document.createElement("div");
        dQuestion.classList = "firstInput"
        dQuestion.textContent =
          "18.	Чи потрібно проводити ідентифікацію для об'єктів, де речовини знаходяться лише у транзиті (наприклад, на залізничних коліях поза станцією)?";
        const dInput = document.createElement("textarea");
        dInput.classList = "dInput initialData__input";
        dInput.name = "dInput"
     
        dInput.rows = "3"
        const fQuestion = document.createElement("div");
        fQuestion.classList = "firstInput"
        fQuestion.textContent =
          "19.	Яка основна відмінність між 1-м та 2-м класами ОПН? ";
        const fInput = document.createElement("textarea");
        fInput.classList = "fInput initialData__input";
        fInput.name = "fInput"
     
        fInput.rows = "3"  
        const gQuestion = document.createElement("div");
        gQuestion.classList = "firstInput"
        gQuestion.textContent =
        "20.	У разі зміни назви юридичної особи без зміни технологічного процесу, чи потрібно проводити нову ідентифікацію? ";
        const gInput = document.createElement("textarea");
        gInput.classList = "gInput initialData__input";
        gInput.name = "gInput"
     
        gInput.rows = "3" 
        const hQuestion = document.createElement("div");
        hQuestion.classList = "firstInput"
        hQuestion.textContent =
         "21.	Що таке 'максимально можлива маса' речовини, яка враховується під час ідентифікації? ";
        const hInput = document.createElement("textarea");
        hInput.classList = "hInput initialData__input";
        hInput.name = "hInput"
     
        hInput.rows = "3" 
        const jQuestion = document.createElement("div");
        jQuestion.classList = "firstInput"
        jQuestion.textContent =
         "22.	Який документ зобов'язаний розробити власник ОПН 1-го або 2-го класу після ідентифікації для запобігання аваріям?";
        const jInput = document.createElement("textarea");
        jInput.classList = "jInput initialData__input";
        jInput.name = "jInput"
     
        jInput.rows = "3" 
        const kQuestion = document.createElement("div");
        kQuestion.classList = "firstInput"
        kQuestion.textContent =
         "23.	При розрахунку небезпеки, як враховуються речовини, що знаходяться на відстані менше 500 метрів одна від одної (на різних майданчиках одного суб'єкта)? ";
        const kInput = document.createElement("textarea");
        kInput.classList = "kInput initialData__input";
        kInput.name = "kInput"
     
        kInput.rows = "3" 
        const lQuestion = document.createElement("div");
        lQuestion.classList = "firstInput"
        lQuestion.textContent =
         "24.	Хто має право підписувати Повідомлення про результати ідентифікації ОПН?";
        const lInput = document.createElement("textarea");
        lInput.classList = "lInput initialData__input";
        lInput.name = "lInput"
     
        lInput.rows = "3" 
        const zQuestion = document.createElement("div");
        zQuestion.classList = "firstInput"
        zQuestion.textContent =
         "25.	Яка дія є обов'язковою, якщо за результатами ідентифікації об'єкт отримав 1-й клас небезпеки?";
        const zInput = document.createElement("textarea");
        zInput.classList = "zInput initialData__input";
        zInput.name = "zInput"
     
        zInput.rows = "3" 
        const xQuestion = document.createElement("div");
        xQuestion.classList = "firstInput"
        xQuestion.textContent =
         "26.	Що таке «ефект доміно» в контексті ідентифікації ОПН?";
        const xInput = document.createElement("textarea");
        xInput.classList = "xInput initialData__input";
        xInput.name = "xInput"
     
        xInput.rows = "3" 
        const cQuestion = document.createElement("div");
        cQuestion.classList = "firstInput"
        cQuestion.textContent =
         "27.	Яка міжнародна директива лягла в основу сучасної української системи ідентифікації ОПН?";
        const cInput = document.createElement("textarea");
        cInput.classList = "cInput initialData__input";
        cInput.name = "cInput"
     
        cInput.rows = "3"  
        const vQuestion = document.createElement("div");
        vQuestion.classList = "firstInput"
        vQuestion.textContent =
        "28.	Чи підлягає ідентифікація ОПН обов'язковому страхуванню цивільної відповідальності? ";
        const vInput = document.createElement("textarea");
        vInput.classList = "vInput initialData__input";
        vInput.name = "vInput"
     
        vInput.rows = "3"  
        const bQuestion = document.createElement("div");
        bQuestion.classList = "firstInput"
        bQuestion.textContent =
        "29.	У якому випадку результати ідентифікації вважаються недійсними під час перевірки? ";
        const bInput = document.createElement("textarea");
        bInput.classList = "bInput initialData__input";
        bInput.name = "bInput"
     
        bInput.rows = "3" 
        const nQuestion = document.createElement("div");
        nQuestion.classList = "firstInput"
        nQuestion.textContent =
         "30.	Яка роль Плану локалізації та ліквідації аварій (ПЛАС) після ідентифікації ОПН? ";
        const nInput = document.createElement("textarea");
        nInput.classList = "nInput initialData__input";
        nInput.name = "nInput"
     
        nInput.rows = "3"  
   
        const sixthQuestion = document.createElement("div");
          sixthQuestion.classList = "firstInput"
        sixthQuestion.textContent = "Висновок";
        sixthQuestion.overflow = "scroll";
        const sixthInput = document.createElement("textarea");
        sixthInput.classList = "sixthInput initialData__input";
        sixthInput.name = "sixthInput"
      
        sixthInput.rows = "5"

    sixthInput.overflow = "scroll";
        const print = document.createElement("button");
        print.textContent = "Зберегти звіт";
        print.type = "button";
        print.classList = "print btn";
        const p = document.createElement("p")
        p.textContent = 

        firstQuestion.append(firstInput);
        fieldset.append(firstQuestion);
        secondQuestion.append(secondInput);
        fieldset.append(secondQuestion);
        thirdQuestion.append(thirdInput);
        fieldset.append(thirdQuestion);
        fourthQuestion.append(fourthInput);
        fieldset.append(fourthQuestion);
        fifthQuestion.append(fifthInput);
        fieldset.append(fifthQuestion);
        qQuestion.append(qInput);
        fieldset.append(qQuestion);
        wQuestion.append(wInput);
        fieldset.append(wQuestion);
        eQuestion.append(eInput);
        fieldset.append(eQuestion);
        rQuestion.append(rInput);
        fieldset.append(rQuestion);
        tQuestion.append(tInput);
        fieldset.append(tQuestion);
        yQuestion.append(yInput);
        fieldset.append(yQuestion);
        uQuestion.append(uInput);
        fieldset.append(uQuestion);
        iQuestion.append(iInput);
        fieldset.append(iQuestion);
       oQuestion.append(oInput);
        fieldset.append(oQuestion);
        pQuestion.append(pInput);
        fieldset.append(pQuestion);
        aQuestion.append(aInput);
        fieldset.append(aQuestion);
        sQuestion.append(sInput);
        fieldset.append(sQuestion);
        dQuestion.append(dInput);
        fieldset.append(dQuestion);
        fQuestion.append(fInput);
        fieldset.append(fQuestion);
        gQuestion.append(gInput);
        fieldset.append(gQuestion);
        hQuestion.append(hInput);
        fieldset.append(hQuestion);
        jQuestion.append(jInput);
        fieldset.append(jQuestion);
        kQuestion.append(kInput);
        fieldset.append(kQuestion);
        lQuestion.append(lInput);
        fieldset.append(lQuestion);
        zQuestion.append(zInput);
        fieldset.append(zQuestion);
        xQuestion.append(xInput);
        fieldset.append(xQuestion);
        cQuestion.append(cInput);
        fieldset.append(cQuestion);
        vQuestion.append(vInput);
        fieldset.append(vQuestion);
         bQuestion.append(bInput);
        fieldset.append(bQuestion);
         nQuestion.append(nInput);
        fieldset.append(nQuestion);
        sixthQuestion.append(sixthInput);
        fieldset.append(sixthQuestion);
      
      
        form.append(fieldset);
        form.append(print);
        containerReport.append(tableContainer3)
        containerReport.append(form)
        sectionReport.append(containerReport)
        menu.append(sectionReport);

// Кнопка збереження звіту

    const saveFirstInput = document.querySelector(".firstInput")
        saveFirstInput.addEventListener("change", saveFirst)
        function saveFirst (event){
          const first = event.target.value;
          obj.first = first
        }
        const saveSecondInput = document.querySelector(".secondInput")
        saveSecondInput.addEventListener("change", saveSecond)
        function saveSecond (event){
          const second = event.target.value;
          obj.second = second
        }
        const saveThirdInput = document.querySelector(".thirdInput")
        saveThirdInput.addEventListener("change", saveThird)
        function saveThird (event){
          const third = event.target.value;
          obj.third = third
        }
        const saveFourthInput = document.querySelector(".fourthInput")
        saveFourthInput.addEventListener("change", saveFourth)
        function saveFourth (event){
          const fourth = event.target.value;
          obj.fourth = fourth
        }
        const saveFifthInput = document.querySelector(".fifthInput")
        saveFifthInput.addEventListener("change", saveFifth)
        function saveFifth (event){
          const fifth = event.target.value;
          obj.fifth = fifth
        }
              const saveqInput = document.querySelector(".qInput")
        saveqInput.addEventListener("change", saveq)
        function saveq (event){
          const q = event.target.value;
          obj.q = q
        }

              const savewInput = document.querySelector(".wInput")
        savewInput.addEventListener("change", savew)
        function savew (event){
          const w = event.target.value;
          obj.w = w
        }
              const saveeInput = document.querySelector(".eInput")
        saveeInput.addEventListener("change", savee)
        function savee (event){
          const e = event.target.value;
          obj.e = e
        }
              const saverInput = document.querySelector(".rInput")
        saverInput.addEventListener("change", saver)
        function saver (event){
          const r = event.target.value;
          obj.r = r
        }
              const savetInput = document.querySelector(".tInput")
        savetInput.addEventListener("change", savet)
        function savet (event){
          const t = event.target.value;
          obj.t = t
        }
              const saveyInput = document.querySelector(".yInput")
        saveyInput.addEventListener("change", savey)
        function savey (event){
          const y = event.target.value;
          obj.y = y
        }
              const saveuInput = document.querySelector(".uInput")
        saveuInput.addEventListener("change", saveu)
        function saveu (event){
          const u = event.target.value;
          obj.u = u
        }
              const saveiInput = document.querySelector(".iInput")
        saveiInput.addEventListener("change", savei)
        function savei (event){
          const i = event.target.value;
          obj.i = i
        }
              const saveoInput = document.querySelector(".oInput")
        saveoInput.addEventListener("change", saveo)
        function saveo (event){
          const o = event.target.value;
          obj.o = o
        }
              const savepInput = document.querySelector(".pInput")
        savepInput.addEventListener("change", savep)
        function savep (event){
          const p = event.target.value;
          obj.p = p
        }
              const saveaInput = document.querySelector(".aInput")
        saveaInput.addEventListener("change", savea)
        function savea (event){
          const a = event.target.value;
          obj.a = a
        }
              const savesInput = document.querySelector(".sInput")
        savesInput.addEventListener("change", saves)
        function saves (event){
          const s = event.target.value;
          obj.s = s
        }
              const savedInput = document.querySelector(".dInput")
        savedInput.addEventListener("change", saved)
        function saved (event){
          const d = event.target.value;
          obj.d = d
        }
              const savefInput = document.querySelector(".fInput")
        savefInput.addEventListener("change", savef)
        function savef (event){
          const f = event.target.value;
          obj.f = f
        }
              const savegInput = document.querySelector(".gInput")
        savegInput.addEventListener("change", saveg)
        function saveg (event){
          const g = event.target.value;
          obj.g = g
        }
              const savehInput = document.querySelector(".hInput")
        savehInput.addEventListener("change", saveh)
        function saveh (event){
          const h = event.target.value;
          obj.h = h
        }
              const savejInput = document.querySelector(".jInput")
        savejInput.addEventListener("change", savej)
        function savej (event){
          const j = event.target.value;
          obj.j = j
        }
              const savekInput = document.querySelector(".kInput")
        savekInput.addEventListener("change", savek)
        function savek (event){
          const k = event.target.value;
          obj.k = k
        }
              const savelInput = document.querySelector(".lInput")
        savelInput.addEventListener("change", savel)
        function savel (event){
          const l = event.target.value;
          obj.l = l
        }
              const savezInput = document.querySelector(".zInput")
        savezInput.addEventListener("change", savez)
        function savez (event){
          const z = event.target.value;
          obj.z = z
        }
              const savexInput = document.querySelector(".xInput")
        savexInput.addEventListener("change", savex)
        function savex (event){
          const x = event.target.value;
          obj.x = x
        }
              const savecInput = document.querySelector(".cInput")
        savecInput.addEventListener("change", savec)
        function savec (event){
          const c = event.target.value;
          obj.c = c
        }
              const savevInput = document.querySelector(".vInput")
        savevInput.addEventListener("change", savev)
        function savev (event){
          const v = event.target.value;
          obj.v = v
        }
          const savebInput = document.querySelector(".bInput")
        savebInput.addEventListener("change", saveb)
        function saveb (event){
          const b = event.target.value;
          obj.b = b
        }
          const savenInput = document.querySelector(".nInput")
        savenInput.addEventListener("change", saven)
        function saven (event){
          const n = event.target.value;
          obj.n = n
        }
        const saveSixthInput = document.querySelector(".sixthInput")
        saveSixthInput.addEventListener("change", saveSixth)
        function saveSixth (event){
          const sixth = event.target.value;
          obj.sixth = sixth
        }
        console.log("obj333333333333333333333333", obj)
        const saveButton = document.querySelector(".print")
        saveButton.addEventListener("click", saveButtonFunction)
        function saveButtonFunction(){
          if (
            obj.first.length >= 1 &&
            obj.second.length >= 1 &&
            obj.third.length >= 1 &&
            obj.fourth.length >= 1 &&
            obj.fifth.length >= 1 &&
            obj.sixth.length >=1 
          ){
         
const first = document.createElement("div")
const a2 = document.createElement("p")
const a1 = document.createElement("span")
a2.textContent = ` Автор звіту : ${obj.name} ${obj.middleName} ${obj.lastName}`
a2.style.fontWeight =  "bold"
const b2 = document.createElement("p")
b2.textContent = `Взвод/група :${obj.platoon} `
// const c = document.createElement("p")
// c.textContent = `Данні по експерименту`
// c.style.fontWeight =  "bold"
// c.style.textAlign = "center"
const d1 = document.createElement("p")
d1.textContent = `Належність до об'єкту підвищеної небезпек : ${obj.classForOne};`
// const e = document.createElement("p")
// e.textContent = `Розмір зразка: 60*150*30 мм;`
// const  f= document.createElement("p")
// f.textContent = `Густина:${obj.density} г/см;`
// const g = document.createElement("p")
// g.textContent = `Початкова маса: ${obj.firstMass} г;`
// const l = document.createElement("p")
// l.textContent = `Маса після проведення експерименту: ${obj.secondMass} г;`
// const i = document.createElement("p")
// i.textContent = `Максимальна температура: ${obj.secondTemperature} ^C;`
// const k = document.createElement("p")
// k.textContent = `Максимальний приріст температури: ${obj.maximumTemperatureIncrease} ^C;`
// const m = document.createElement("p")
// m.textContent = `Втрата маси зразка: ${obj.semplMassLost} г;`
const n1 = document.createElement("p")
n1.textContent = `Відповіді на запитання`
n1.style.fontWeight =  "bold"
n1.style.textAlign = "center"
const p1 = document.createElement("p")
p1.textContent = ` 1. ${obj.first}.`
const r1 = document.createElement("p")
r1.textContent = `2. ${obj.second}.`
const s1 = document.createElement("p")
s1.textContent = `3. ${obj.third}.`
const t1 = document.createElement("p")
t1.textContent = `4. ${obj.fourth}.`
const q = document.createElement("p")
q.textContent = `5. ${obj.fifth}.`
const w = document.createElement("p")
w.textContent = `6. ${obj.q}.`
const e = document.createElement("p")
e.textContent = `7. ${obj.w}.`
const r = document.createElement("p")
r.textContent = `8. ${obj.e}.`
const t = document.createElement("p")
t.textContent = `9. ${obj.r}.`
const y = document.createElement("p")
y.textContent = `10. ${obj.t}.`
const u = document.createElement("p")
u.textContent = `11. ${obj.y}.`
const i = document.createElement("p")
i.textContent = `12. ${obj.u}.`
const o = document.createElement("p")
o.textContent = `13. ${obj.i}.`
const p = document.createElement("p")
p.textContent = `14. ${obj.o}.`
const a = document.createElement("p")
a.textContent = `15. ${obj.p}.`
const s = document.createElement("p")
s.textContent = `16. ${obj.a}.`
const d = document.createElement("p")
d.textContent = `17. ${obj.s}.`
const f = document.createElement("p")
f.textContent = `18. ${obj.d}.`
const g = document.createElement("p")
g.textContent = `19. ${obj.f}.`
const h = document.createElement("p")
h.textContent = `20. ${obj.g}.`
const j = document.createElement("p")
j.textContent = `21. ${obj.h}.`
const k = document.createElement("p")
k.textContent = `22. ${obj.j}.`
const l = document.createElement("p")
l.textContent = `23. ${obj.k}.`
const z = document.createElement("p")
z.textContent = `24. ${obj.l}.`
const x = document.createElement("p")
x.textContent = `25. ${obj.z}.`
const c = document.createElement("p")
c.textContent = `26. ${obj.x}.`
const v = document.createElement("p")
v.textContent = `27. ${obj.c}.`
const b = document.createElement("p")
b.textContent = `28. ${obj.v}.`
const n = document.createElement("p")
n.textContent = `29. ${obj.b}.`
const m = document.createElement("p")
m.textContent = `30. ${obj.n}.`
const y1 = document.createElement("p")
y1.textContent = `Висновок: ${obj.sixth}.`
y1.style.fontWeight =  "bold"

// Назва зразка: ${obj.typeOfTree} ;
first.append(a2)
first.append(b2)
// first.append(c)
first.append(d1)
// first.append(e)
// first.append(f)
// first.append(g)
// first.append(l)
// first.append(i)
// first.append(k)
// first.append(m)
first.append(n1)
first.append(p1)
first.append(r1)
first.append(s1)
first.append(t1)
first.append(q)
first.append(w)
first.append(e)
first.append(r)
first.append(t)
first.append(y)
first.append(u)
first.append(i)
first.append(o)
first.append(p)
first.append(a)
first.append(s)
first.append(d)
first.append(f)
first.append(g)
first.append(h)
first.append(j)
first.append(k)
first.append(l)
first.append(z)
first.append(x)
first.append(c)
first.append(v)
first.append(b)
first.append(n)
first.append(m)
first.append(y1)

  const pro = `${first.outerHTML}`


const header =  `<html xmlns:o='urn:schemas-microsoft-com:office:office'
              xmlns:w='urn:schemas-microsoft-com:office:word'
              xmlns='http://www.w3.org/TR/REC-html40'>
        <head>
          <meta charset="utf-8">
          <style>
            body { font-family: "Times New Roman", Times, serif; }
          </style>
        </head>
        <body>`;
        //  const footer = "</body></html>";
   const source = header + pro + footer;
const blob = new Blob([source],  { type: "application/msword;charset=utf-8;fonts=timesNewRoman" });
   saveAs(blob, "document.doc");
    
menu.innerHTML = ""
const sectionRefresh = document.createElement("section")
sectionRefresh.classList = "initialData refreshSection"
        const containerRefresh = document.createElement("div")
        containerRefresh.classList = "container"
const h5 = document.createElement("h2")
h5.textContent = "Ваша робота збережена, відправте її викладачу"
h5.classList ="lastText"
const refreshBtn = document.createElement("button")
refreshBtn.classList = "btn"
refreshBtn.textContent = "Провести експеримент знову"
refreshBtn.type = "reset"
refreshBtn.addEventListener("click", function(){
  location. reload()
})
containerRefresh.append(h5)
containerRefresh.append(refreshBtn)
sectionRefresh.append(containerRefresh)
menu.append(sectionRefresh)
          } else {
            alert("Будь ласка заповніть всі поля");
          }
          
        } 
      }
      }


  finalFirstContainer.append(firstTitle)
  // finalFirstContainer.append(refreshFirstStep)
  finalFirstContainer.append(firstStepEnd)
  
  menu.append(finalFirstContainer)
console.log("cherry", cherry)

    submitFirstForm.disabled = true;
}





   const secondSection = document.createElement("section")
   secondSection.classList = "secondSection calculation"
   const container2 = document.createElement("div")
   container2.classList = "container"
   const title0 = document.createElement("h2")
   title0.classList = "title"
   const calculationForm = document.createElement("ul")
container2.append(title0)
container2.append(calculationForm)
secondSection.append(container2)









    menu.append(section);
menu.append(secondSection)
    // const liData = document.createElement("li");
  
    // const tree = document.createElement("ul");
    // tree.classList = "tankWhoAdd cont"
  

    // liData.append(tree);
    // ul.append(liData);
    // const final = document.createElement("li");
    // final.classList = "result"
    // final.textContent =
    //   "Після завершення випробування фінальні данні з'являться тут:";
// Результати випробувань
//     const timerId = setTimeout(() => {
// //      
//       // const report = document.createElement("button");
//       // report.textContent = "Піготувати звіт";
//       // report.classList = "report  btn";
//       // report.classList = "";
//       // report.type = "button";
    
//       // const report = document.querySelector(".report");
//       // report.addEventListener("click", reportButton);

//       // кнопка для початку виконання звіту

//       // function reportButton() {
       
//       // }
//     }, 10);
    // ul.append(final);
    
  } else {
    alert("Будь ласка заповніть всі поля");
  }
}
