function saveEdits() {

    //get the editable element
    var editElem = document.getElementById("edit");

    //get the edited element content
    var userVersion = editElem.innerHTML;

    //save the content to local storage
    localStorage.userEdits = userVersion;

    //write a confirmation to the user
    document.getElementById("update").innerHTML="Edits saved!";
    document.getElementById("update").style.color = "lightgreen";
    document.getElementById("update").style.textShadow = "green 0px 0px 20px";
    }
    function checkEdits() {

    //find out if the user has previously saved edits
    if(localStorage.userEdits!=null){
      document.getElementById("edit").innerHTML=localStorage.userEdits;
    } 
    }

function newRequest() {
        
        var newEdit = document.createElement("div");
        document.getElementById('newEdits').appendChild(newEdit);
        newEdit.id = "edit";
        newEdit.innerHTML = "<div contenteditable=true>"+ 
          document.getElementById("edit").innerHTML; 
          + "</div>";
        newEdit.style.marginTop = "10px";
      }

function runAll() {
        saveEdits();
        newRequest(); 
      }

