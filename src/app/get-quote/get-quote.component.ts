import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-get-quote',
  templateUrl: './get-quote.component.html',
  styleUrls: ['./get-quote.component.scss']
})
export class GetQuoteComponent implements OnInit {

  quoteForm: any

  constructor() { }

  ngOnInit(): void {
    
    this.quoteForm = new FormGroup({
      contact: new FormGroup({
        firstName: new FormControl('', Validators.required),
        lastName: new FormControl('', Validators.required),
        address: new FormControl('', Validators.required),
        city: new FormControl('', Validators.required),
        state: new FormControl('', Validators.required),
        zip: new FormControl('', Validators.required)
      }),
      fence: new FormGroup({
        length: new FormControl('', Validators.required),
        height: new FormControl(''),
        type: new FormControl(''),
        gate: new FormControl('')
      })
    })

  }

}
