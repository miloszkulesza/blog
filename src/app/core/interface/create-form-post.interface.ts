import { FormControl } from "@angular/forms";

export interface CreateFormPostInterface {
    text: FormControl<string>,
    publicationDate: FormControl<string>
}