import { IComponent } from "@nailsframework/nails/lib/interfaces/Component";
import { State } from "@nailsframework/nails/lib/core/state";



export class AppComponent implements IComponent {
    public selector: string;
    constructor(public state: State) {
        this.selector = "App";
    }

    public render() {
        /*html */
        return `
        <body>
            <div class="image-container bounceInUp animated">
            <img src='assets/logo.png' height="400" width="400">
            </div>
        </body>
        <yield></yield>
        `;
    }

}





