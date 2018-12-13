/*
  --------------------------------------------------------------------------------------------------------------------
*   declarations
*--------------------------------------------------------------------------------------------------------------------
*/
const addButton = document.getElementById('addDep');
const depDiv = document.getElementById('depDiv');
const submit = document.getElementById('submit');
const nameBox = document.getElementById('empName');
const removeMinus = document.getElementById('firstRemDep');

/*
  --------------------------------------------------------------------------------------------------------------------
*   functions
*--------------------------------------------------------------------------------------------------------------------
*/
const getDepndents = () => {
    let locDep = [];

    depDiv.querySelectorAll("input").forEach((dep) => {
        locDep.push({ name: dep.value });
    });

    window.location.href = '/Benefits?' + encodeURIComponent(JSON.stringify({name: nameBox.value, dependents: locDep}));
            
     
};

/*
purpose: make request on form submit
*/
const addDependent = () => {

    let newDep = document.createElement('input', {
        type: 'text'
    });

    let nDepSpan = document.createElement('span');
    nDepSpan.className = 'depSpan';
    nDepSpan.appendChild(newDep)

    let nDepMinus = document.createElement('a');
    nDepMinus.innerText = '-';
    nDepMinus.className = 'removeDep';
    nDepMinus.onclick= () => {
        removeParent(nDepMinus);
    };
    nDepSpan.appendChild(nDepMinus)

    depDiv.insertBefore(nDepSpan, addButton);
    toastr.success('new dependent added');
};

const removeParent = (child) => {
    let nameText = child.parentElement.children[0].value;
    console.log(child);
    child.parentElement.remove();
    toastr.warning(`Dependant ${nameText} has been removed`);
}

/*
  --------------------------------------------------------------------------------------------------------------------
*   EVENT LISTENERS
*--------------------------------------------------------------------------------------------------------------------
*/
addButton.onclick = () => { addDependent() };

submit.onclick = () => { getDepndents() };

removeMinus.onclick = () => { removeParent(removeMinus) };
/*
  --------------------------------------------------------------------------------------------------------------------
*   MAIN METHOD
*--------------------------------------------------------------------------------------------------------------------
*/