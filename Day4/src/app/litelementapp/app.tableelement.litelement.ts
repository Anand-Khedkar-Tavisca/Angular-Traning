import {LitElement, html, customElement, property, css} from 'lit-element';
const myStyle = css `
   input {
     color: yellow;
     background-color: red;
   }
`;

@customElement('table-element')
export class TableElement extends LitElement{
  // define properties, to accept input
  // from the container
  @property({type: Array}) dataSource;

 // style getter
 static get styles() {
  return [
    myStyle,
    css `
      div {color: green; }
  ` ]
}

  constructor() {
    super();
  }

  delete() {
     // alert(`Value received ${this.name}`);
     const bubbleEvent = new CustomEvent('delete', {
       detail: {
         data: JSON.stringify([1, 2, 3])
       },
       bubbles: true,
       composed: true
     });

     this.dispatchEvent(bubbleEvent);
  }



  render(){

    let header = new Array<string>();
    for(let h in this.dataSource[0]) {
      header.push(h);
    }

    return html `
    <h2>LitElement table</h2>
    <button @click="${this.delete}">Delete</button>
    <div class="container">
        <table class="table table-striped table-bordered table-dark">
            <thead>
                <tr>
                <th><input type="checkbox"></th>
                ${header.map(item =>
                  html`<th>${item}</th>`)}
                </tr>
            </thead>
            <tbody>
                ${this.dataSource.map(r =>
                  html `<tr> <td><input type="checkbox"></td>
                    ${header.map(c =>
                      html`<td>${r[c]}</td>`)}
                  </tr>`)}
            </tbody>
        </table>
    </div>
    `;
  }
}
