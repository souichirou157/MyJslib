
export class TodoFormElement{
    
    static inputElement =[];
 
    constructor(...node){
     for(let i = 0; i < node.length;i++){
         TodoFormElement.inputElement[i] = node[i];
     }
    }
 
 
     getbtn(name){
        return document.querySelector(name);
     }
 
 
      checkCancel(node){
 
         for(const n  of  node){
             if(n.checked == true) {
                 n.checked = false;
             }
         }	
     }
 
 }
 
 