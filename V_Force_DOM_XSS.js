export class AddTrustedHtmlComponent  {	constructor(private renderer: Renderer2, private route: ActivateRoute ) {}	

appendTrustedHtml() {      	
var value = this.localStorage.getItem('item');		
var div = this.renderer.createElement('div');		
div.innerHTML = value;		
this.renderer.appendChild(outputNode, div);
}