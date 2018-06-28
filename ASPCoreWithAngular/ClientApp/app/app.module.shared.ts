import { NgModule } from '@angular/core';
import { ConatctService } from './services/contactservice.service'
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';

import { AppComponent } from './components/app/app.component';
import { NavMenuComponent } from './components/navmenu/navmenu.component';
import { HomeComponent } from './components/home/home.component';
import { FetchContactComponent } from './components/fetchcontacts/fetchcontact.component'
import { createcontact as createemployee } from './components/addcontact/Addcontact.component'

@NgModule({
    declarations: [
        AppComponent,
        NavMenuComponent,
        HomeComponent,
        FetchContactComponent,
        createemployee,
    ],
    imports: [
        CommonModule,
        HttpModule,
        FormsModule,
        ReactiveFormsModule,
        RouterModule.forRoot([
            { path: '', redirectTo: 'home', pathMatch: 'full' },
            { path: 'home', component: HomeComponent },
            { path: 'fetch-contact', component: FetchContactComponent },
            { path: 'register-contact', component: createemployee },
            { path: 'contact/edit/:id', component: createemployee },
            { path: '**', redirectTo: 'home' }
        ])
    ],
    providers: [ConatctService]
})
export class AppModuleShared {
}
