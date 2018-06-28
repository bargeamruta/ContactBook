import { Component, OnInit } from '@angular/core';
import { Http, Headers } from '@angular/http';
import { NgForm, FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { FetchContactComponent } from '../fetchcontacts/fetchcontact.component';
import { ConatctService } from '../../services/contactservice.service';

@Component({
    selector: 'createcontact',
    templateUrl: './AddContact.component.html'
})

export class createcontact implements OnInit {
    contactForm: FormGroup;
    title: string = "Create";
    id: number;
    errorMessage: any;

    constructor(private _fb: FormBuilder, private _avRoute: ActivatedRoute,
        private _contactService: ConatctService, private _router: Router) {
        if (this._avRoute.snapshot.params["id"]) {
            this.id = this._avRoute.snapshot.params["id"];
        }

        this.contactForm = this._fb.group({
            id:[0],
            firstName: ['', [Validators.required, Validators.pattern("^[a-zA-Z\s]*$")]],
            lastName: ['', [Validators.required, Validators.pattern("^[a-zA-Z\s]*$")]],
            status: [false, [Validators.required]],
            email: ['', [Validators.required, Validators.email]],
            mobile: ['', [Validators.required, Validators.pattern("[0-9]{10}")]]
        });
    }

    ngOnInit() {
        if (this.id > 0) {
            this.title = "Edit";
            this._contactService.getContactById(this.id)
                .subscribe(resp => this.contactForm.setValue(resp)
                , error => this.errorMessage = error);
        }
    }

    save() {

        if (!this.contactForm.valid) {
            return;
        }

        if (this.title == "Create") {
            this._contactService.saveContact(this.contactForm.value)
                .subscribe((data) => {
                    this._router.navigate(['/fetch-contact']);
                    },
                    error => this.errorMessage = error);
        }
        else if (this.title == "Edit") {
            this._contactService.updateContact(this.contactForm.value)
                .subscribe((data) => {
                    this._router.navigate(['/fetch-contact']);
                    },
                    error => this.errorMessage = error);
        }
    }

    cancel() {
        this._router.navigate(['/fetch-contact']);
    }


    get firstName() { return this.contactForm.get('firstName'); }
    get lastName() { return this.contactForm.get('lastName'); }
    get status() { return this.contactForm.get('status'); }
    get email() { return this.contactForm.get('email'); }
    get mobile() { return this.contactForm.get('mobile'); }
}