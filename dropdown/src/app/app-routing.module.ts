import {Routes, RouterModule} from '@angular/router';

import {DropdownComponent} from "./droppdown/droppdown.component";


const appRoutes: Routes = [
    {
        path: '',
        pathMatch: "full",
        component: DropdownComponent
    },

    {path: '**', redirectTo: ''}


];

export const AppRoutingModule = RouterModule.forRoot(appRoutes);