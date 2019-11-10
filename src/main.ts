import { AppComponent } from "./app.component";
// tslint:disable-next-line: ordered-imports
import { Nails } from "@nailsframework/nails";
import { State } from "@nailsframework/nails/lib/core/state";
import { Router } from "@nailsframework/nails/lib/core/components/router.component";


const nails = new Nails({
    el: "body", // Start with # to specify id
    // tslint:disable:object-literal-sort-keys
    data: {
        title: "Your Nails App",
    },
    methods: {
        onInit() {
            // tslint:disable-next-line:max-line-length
            // This method is called during early construction of the State. As a result, there no state supplied as an argument.
            // tslint:disable-next-line:max-line-length
            // You may use this, to trigger your own scripts. Beware, that the dom is not rendered at this time, so use OnMounted for any DOM operations.
        },
        onMounted(currentState: State) {
        },
    },
    components: [
        Router, AppComponent
    ],
    routings: [
    ],
    declarations: [

    ],
});



