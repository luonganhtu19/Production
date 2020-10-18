let arr= new Array();
let x=0;
function addPro() {
    let arr1=document.getElementById("product").value;
    //alert(typeof arr1)
    while (arr1==""){
        arr1=prompt("Input name product");
    }
    arr[x]=arr1;
    x++;
    document.getElementById("product").value="";
    arr1="";
    display(arr);
}

function display(arr) {
    let e =`<table>`;
    for (let i=0;i<arr.length;i++){
        let pro=arr[i];
        e += `<tr> <td width="200px"><input type="produc" id="${i}" value="${pro}" disabled>
                   <td width="75px"><input type="button" id="e_pro+${i}" value="Edit" onclick="edit(${i})"></td>
                   <td width="75px"><input type="button" id="d_pro+${i}" value="Delete" onclick="deletePr(${i})"></td>`
        document.getElementById("sumPr").innerHTML=" "+arr.length;
    }
    e+=`</table>`
    document.getElementById("listProduct").innerHTML=e;
}

function deletePr(id){
    let valDelID=document.getElementById(`d_pro+${id}`);
    let valDel=valDelID.value;
    if(valDel=="Delete"){
    arr.splice(id,1);
    x--;
    if (x==0){
        document.getElementById("listProduct").innerHTML="";
        document.getElementById("sumPr").innerHTML="0 " ;
         return ;
    }
    display(arr);
    }
    else {
        display(arr);
        document.getElementById(`${id}`).disabled = true;
        valDelID.value="Delete"
        document.getElementById(`e_pro+${id}`).value="Edit"
    }
}
function edit(id) {
    let ed=document.getElementById(`e_pro+${id}`)
    let del_cal=document.getElementById(`d_pro+${id}`)
    if (ed.value=="Edit") {
        document.getElementById(`${id}`).disabled = false;
        /// cancel
        del_cal.value = "Cancel"
        /// Ok
        ed.value="OK"
    }else {
        arr[id]=document.getElementById(`${id}`).value;
        document.getElementById(`${id}`).disabled = true;
        ed.value="Edit"
        del_cal.value="Delete"
    }

}
 function confirmEdt(id) {
//     alert("1111111")
     document.getElementById(`e_pro+${id}`).value="Edit";
     document.getElementById(`${id}`).disabled=true;
 }
 function cancel(id,val1) {
     document.getElementById(`${id}`).value=val1;
     let del=document.getElementById(`d_pro+${id}`);
    // del.onclick=deletePr();
     del.value="Delete";
 }