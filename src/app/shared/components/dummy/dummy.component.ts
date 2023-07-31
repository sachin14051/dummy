import { style } from "@angular/animations";
import { Component } from "@angular/core";

@Component({
    selector: "app-dummy",
    template : `
    <h3>only one file using using ng component</h3>
      <p class="header"> this is dummy component </p>
      <p class="para">
      Lorem ipsum dolor, sit amet consectetur adipisicing elit. Qui odit, alias perspiciatis quae blanditiis sapiente dolor doloribus molestiae illo? Laudantium dolore, consequatur natus velit totam doloribus perferendis veniam mollitia eaque assumenda at cumque voluptas error dignissimos est deserunt facere. Quo neque illum dicta delectus numquam dolores cumque libero nam? Voluptate.

      </p>
    `,
    styles:[`
    h3{
        background-color:yellow;
        padding: 20px;
        margin: 10px;
        text-transform:uppercase;
        text-align:center;
        font-size:40px
    }
    .header{
    
        background-color:black;
        padding: 20px;
        margin: 10px;
        text-transform:uppercase;
        text-align:center;
        font-size:20px;
        color: white;
    
    }
    .para{
    
    background-color:green;
    padding: 20px;
    margin: 10px;
    text-transform:uppercase;
    text-align:center;
    font-size:20px;
    color: white;

}
    `]
    
    

})
export class DummyComponent{

}