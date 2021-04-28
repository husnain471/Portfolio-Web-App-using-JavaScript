var professionID=1
var eduID=4
var skill=1
var project=1
$(function(){

$('#fileUpload').change(function(event){
   var x = URL.createObjectURL(event.target.files[0]);
     $("#profilePicture").attr("src",x);});
  }
)
//******************************************************************************* */

//var personalDetailNodes= new Array;
function addCustomDetails(){
    let id = document.getElementById("customerArea");
    let clone = id.cloneNode(true);
    clone.setAttribute('id', ("customerArea"+professionID));
    id.parentNode.appendChild(clone);
    professionID++;
    return;
}


//**This function deletes the node if user wants
function deleteThisDetail(id){
    let parent = id.parentNode;
    if(parent==customerArea){
        alert("Can't delete!")
        return;
    }
    else{
     parent.remove();
     return;
    }
}

function deleteBiographySection(id){
    let parent = id.parentNode;
    let child  = document.getElementById("biographyArea");
    let result = prompt("Biography Section will be deleted Permanently type do or don't","don't");
    if(result=="do"){
        child.remove();
       parent.remove();
    }
    if(result=="don't"){
        return;
    }
}


function addEduDetails(){
    let id = document.getElementById("educationArea");
    let menu = prompt("Enter title for new box");
    let newDivId = "e"+eduID;

    let div = document.createElement('div')
    div.setAttribute("id",newDivId);

    let node = document.createElement('INPUT')
    node.setAttribute("placeholder",menu);
    node.setAttribute("type","text");

    let button = document.createElement('button');
    button.setAttribute("class","btn");
    button.setAttribute("title","Click to delete it");
    button.setAttribute("id","u"+eduID);
    button.setAttribute("onclick","deleteThisEduDetail(this)");
    let b2 =  document.createElement('i');
    b2.setAttribute("class","fa fa-close");
    button.appendChild(b2);


    div.appendChild(node);
    div.appendChild(button);
    id.appendChild(div);
    eduID++;
    return;
}

//**This function deletes the node if user wants
function deleteThisEduDetail(id){
    let parent = id.parentNode;
    parent.remove()
    return;
}


function deleteThisProfDetail(id){
    let parent = id.parentNode;
    parent.remove()
    return;
}

//**This function will delete a part from educationdetails
function deleteThisEduDetail(id){
  if(id==degreeDeleteButton || id==degreeNameDeleteButton || id==universityNameFromMenu){
      alert("Compulsory!")
      return;
  }
  else{
   let parent = id.parentNode;
   parent.remove();
   return;
  }
}

function addSkills(){
    let id = document.getElementById("skilsArea");
    let clone = id.cloneNode(true);
    clone.setAttribute('id', ("skilsArea"+skill));
    id.parentNode.appendChild(clone);
    skill++;
    return;
}

function addProjects(){
    let id = document.getElementById("projectArea");
    let clone = id.cloneNode(true);
    clone.setAttribute('id', ("projectArea"+project));
    id.parentNode.appendChild(clone);
    project++;
    return;
}

function deleteThisProject(id){
    let parent = id.parentNode;
    if(parent==projectArea){
        alert("Primary one can't be deleted");
    }
    else{
        parent.remove();
    }
}

function deleteThisSkill(id){
    let parent = id.parentNode;
    if(parent==skilsArea){
        alert("Primary one can't be deleted");
    }
    else{
        parent.remove();
    }    
}


function hide(id){
	  document.getElementById(id).style.visibility = "hidden";
}
function show(id){
	  document.getElementById(id).style.visibility = "visible";
}


//function to rearrange or drag elements from custom section
function rearrangeIt(event){
    event.dataTransfer.setData("text",event.target.id);
}

//This function is called when dragged element is dropped
function dropHere(event){
   //event.preventDefault();
   //var data = event.dataTransfer.getData("text");
   //event.target.insertBefore(document.getElementById(data), );
   event.preventDefault();
   var drop_target = event.target;
   var drag_target_id = event.dataTransfer.getData('text');
   var drag_target = $('#'+drag_target_id)[0];


   var tmp = document.createElement('div');
   drop_target.before(tmp);
   drag_target.before();
   tmp.replaceWith(drag_target);
}

function allowDrop(ev) {
    ev.preventDefault();
  }

  function rearrangeProject(event){
    event.dataTransfer.setData("text",event.target.id);
  }

  function rearrangeSkills(event){
    event.dataTransfer.setData("text",event.target.id);
  }

  function allowDropForProfessional(event){
    event.preventDefault();
  }

  function dropHereForProfessional(event){
    event.preventDefault();
    var drop_target = event.target;
    var drag_target_id = event.dataTransfer.getData('text');
    var drag_target = $('#'+drag_target_id)[0];
 
 
    var tmp = document.createElement('div');
    drop_target.before(tmp);
    drag_target.before();
    tmp.replaceWith(drag_target);
  }

function  showTheView()
{
    let phoneNo = /^\(?([0-9]{4})\)?[-. ]?([0-9]{7})$/;
     let emailFormat = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
//************************Personal Data************************** */    
     let name = document.getElementById('name').value;
     let email = document.getElementById('mail').value;
     let dob = document.getElementById('DOB').value;
     let phone = document.getElementById('number').value;
     let address = document.getElementById('address').value;


if((name=="")||(dob=="")||(phone=="")||(email=="")||(address=="")){
	    alert("Kindly, fill all the fields");
	 }
     else if(!(email.match(emailFormat)))
     {
             alert("Enter a valid Email");
     }
     else if(!(phone.match(phoneNo)))
     {
             alert("Phone Number format is (XXXX-XXXXXXX)")
     }
     if((name!=="")&&(dob!="")&&(phone.match(phoneNo))&&(email.match(emailFormat))&&(address!=="")){
        window.location.href ='./finalView.html';
     }

}
