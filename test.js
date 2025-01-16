
import {TodoFormElement} from './common/TextFieldeElements.js';
			
const table = 	window.document.getElementById('todolist').childNodes;

const element = new TodoFormElement(
	table,
	table[3].childNodes[1].querySelector('td').children,
	table[9].childNodes[1].querySelector('td').children,
);

element.getbtn('#cancellation').addEventListener('click',()=>{

			if(window.confirm('選択項目を解除')){
				element.checkCancel(TodoFormElement.getNode(1))
				element.checkCancel(TodoFormElement.getNode(2))
			}
});
