var employeeName=document.getElementById('employeeName');
var employeeAge=document.getElementById('employeeAge');
var employeeEmail=document.getElementById('employeeEmail');
var employeeAddress=document.getElementById('employeeAddress');
var employeeSalary=document.getElementById('employeeSalary');
var genderFemale=document.getElementById('genderFemale');
var genderMale=document.getElementById('genderMale');
var addBtn=document.getElementById('addBtn');
var employees;



if(localStorage.getItem('empList')==null)
{
  employees=[];
}
else {
  employees=JSON.parse(localStorage.getItem('empList'));
    displayEmployee();
}





addBtn.onclick=function(){
    addEmployee();
    displayEmployee()
}

 function addEmployee(){
    var name=employeeName.value;
    var age=employeeAge.value;
    var email=employeeEmail.value;
    var address=employeeAddress.value;
    var salary=employeeSalary.value;
    var gender;
    if(genderFemale.checked){
      gender=genderFemale.value;
    }
    else if(genderMale.checked){
        gender=genderMale.value;
      }
      else{
          gender="other";
      }

    var employee={
        empName:name,
        empAge:age,
        empEmail:email,
        empAddress:address,
        empSalary:salary,
        empGender:gender
    }
   employees.push(employee);
   localStorage.setItem('empList',JSON.stringify(employees));
    

   

 }

 function displayEmployee(){
     var trs="";
  for(var i=0;i<employees.length;i++)
  {
     trs+=`<tr>
     <td>`+(i+1)+`</td>
     <td>`+employees[i].empName+`</td>
     <td>`+employees[i].empAge+`</td>
     <td>`+employees[i].empEmail+`</td>
     <td>`+employees[i].empAddress+`</td>
     <td>`+employees[i].empSalary+`</td>
     <td>`+employees[i].empGender+`</td>
     <td><button onclick="deleteEmployee(`+i+`)"  class='btn btn-danger'>delete</button></td>
        <td><button onclick="editEmployee(`+i+`)" class='btn btn-warning'>edit</button></td>
</tr> `
  }
  document.getElementById('tableBody').innerHTML=trs;
}

function deleteEmployee(index){
    employees.splice(index,1);
    displayEmployee();

    localStorage.setItem('empList',JSON.stringify(employees));
    
}

function editEmployee(i)
{

    document.getElementById("addBtn").innerHTML="Edit Info";
    document.getElementById("addBtn").setAttribute="background-color:red";
    document.getElementById("addBtn").classList.add('btn-danger');

    employeeName.value=employees[i].empName;
    employeeAge.value=employees[i].empAge;
    employeeEmail.value=employees[i].empEmail;
    employeeAddress.value=employees[i].empAddress;
    employeeSalary.value=employees[i].empSalary;

    if(employees[i].empGender=="female"){
    genderFemale.checked="true";
    }
    else if(employees[i].empGender=="male"){
        genderMale.checked="true";
      }

      addBtn.onclick=function(){
        employees[i].empName=employeeName.value;
        employees[i].empAge=employeeAge.value;
        employees[i].empEmail=employeeEmail.value;
        employees[i].empAddress=employeeAddress.value;
        employees[i].empSalary=employeeSalary.value;
    
        if(genderFemale.checked){
        employees[i].empGender="female"
        }
        else if( genderMale.checked){
            employees[i].empGender="male"
          }

       localStorage.setItem('empList',JSON.stringify(employees));
      }

}
function search(key){
  var trs="";
  for(var i=0;i<employees.length;i++)
  {
     if(employees[i].empName.toLowerCase().includes(key.toLowerCase())){
      trs+=`<tr>
      <td>`+(i+1)+`</td>
      <td>`+employees[i].empName+`</td>
      <td>`+employees[i].empAge+`</td>
      <td>`+employees[i].empEmail+`</td>
      <td>`+employees[i].empAddress+`</td>
      <td>`+employees[i].empSalary+`</td>
      <td>`+employees[i].empGender+`</td>
      <td><button onclick="deleteEmployee(`+i+`)"  class='btn btn-danger'>delete</button></td>
         <td><button onclick="editEmployee(`+i+`)" class='btn btn-warning'>edit</button></td>
 </tr> `
     }
  }
  document.getElementById('tableBody').innerHTML=trs;

}