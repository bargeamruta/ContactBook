import { Component, Inject } from '@angular/core';
import { Http, Headers } from '@angular/http';
import { Router, ActivatedRoute } from '@angular/router';
import { ConatctService } from '../../services/contactservice.service'

@Component({
    selector: 'fetchcontacts',
    templateUrl: './fetchcontact.component.html'
})

export class FetchContactComponent {
    public contactList: ContactData[];

    constructor(public http: Http, private _router: Router, private _contactService: ConatctService) {
        this.getContacts();
    }

    getContacts() {
        this._contactService.getContacts().subscribe(
            data => this.contactList = data
        );
    }

    delete(id) {
        var ans = confirm("Do you want to delete ? ");
        if (ans) {
            this._contactService.deleteContact(id).subscribe((data) => {
                    this.getContacts();
                },
                error => console.error(error));
        }
    }
}

interface ContactData {
    contactId:number;
    firstName: string;
    lastName: string;
    email: string;
    mobile: number;
    status: boolean;
}