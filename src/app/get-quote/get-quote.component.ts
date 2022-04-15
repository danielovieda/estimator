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
        email: new FormControl('', [Validators.required, Validators.email, Validators.minLength(5)]),
        firstName: new FormControl('', Validators.required),
        lastName: new FormControl('', Validators.required),
        address: new FormControl('', Validators.required),
        city: new FormControl('', Validators.required),
        state: new FormControl('', Validators.required),
        zip: new FormControl('', Validators.required)
      }),
      fence: new FormGroup({
        length: new FormControl('', [Validators.required, Validators.pattern(/^[0-9]*$/)]),
        height: new FormControl('', Validators.required),
        type: new FormControl('', Validators.required),
        gate: new FormControl('', Validators.required)
      })
    })

  }

  validateForm(form: FormGroup) {
    for (let i in form.controls) {
      form.controls[i].markAsTouched()
    }
  }

  submit() {
    this.validateForm(this.quoteForm.get('contact'))
    this.validateForm(this.quoteForm.get('fence'))

    if (this.quoteForm.valid) {
      
    }
  }

  get email() {
    return this.quoteForm.get('contact').get('email')
  }

  get firstName() {
    return this.quoteForm.get('contact').get('firstName')
  }

  get lastName() {
    return this.quoteForm.get('contact').get('lastName')
  }

  get address() {
    return this.quoteForm.get('contact').get('address')
  }

  get city() {
    return this.quoteForm.get('contact').get('city')
  }

  get state() {
    return this.quoteForm.get('contact').get('state')
  }

  get zip() {
    return this.quoteForm.get('contact').get('zip')
  }

  get length() {
    return this.quoteForm.get('fence').get('length')
  }

  get height() {
    return this.quoteForm.get('fence').get('height')
  }

  get type() {
    return this.quoteForm.get('fence').get('type')
  }

  get gate() {
    return this.quoteForm.get('fence').get('gate')
  }

  

  states = [
    { value: 'AK', name: 'Alaska'},
    { value: 'TX', name: 'Texas'},
    { value: 'AL', name: 'Alabama'},
    { value: 'AR', name: 'Arkansas'},
    { value: 'AZ', name: 'Arizona'},
    { value: 'CA', name: 'California'},
    { value: 'CO', name: 'Colorado'},
    { value: 'CT', name: 'Connecticut'},
    { value: 'DC', name: 'District of Columbia'},
    { value: 'DE', name: 'Delaware'},
    { value: 'FL', name: 'Florida'},
    { value: 'GA', name: 'Georgia'},
    { value: 'HI', name: 'Hawaii'},
    { value: 'IA', name: 'Iowa'},
    { value: 'ID', name: 'Idaho'},
    { value: 'IL', name: 'Illinois'},
    { value: 'IN', name: 'Indiana'},
    { value: 'KS', name: 'Kansas'},
    { value: 'KY', name: 'Kentucky'},
    { value: 'LA', name: 'Louisiana'},
    { value: 'MA', name: 'Massachusetts'},
    { value: 'MD', name: 'Maryland'},
    { value: 'ME', name: 'Maine'},
    { value: 'MI', name: 'Michigan'},
    { value: 'MN', name: 'Minnesota'},
    { value: 'MO', name: 'Missouri'},
    { value: 'MS', name: 'Mississippi'},
    { value: 'MT', name: 'Montana'},
    { value: 'NC', name: 'North Carolina'},
    { value: 'ND', name: 'North Dakota'},
    { value: 'NE', name: 'Nebraska'},
    { value: 'NH', name: 'New Hampshire'},
    { value: 'NJ', name: 'New Jersey'},
    { value: 'NM', name: 'New Mexico'},
    { value: 'NV', name: 'Nevada'},
    { value: 'NY', name: 'New York'},
    { value: 'OH', name: 'Ohio'},
    { value: 'OK', name: 'Oklahoma'},
    { value: 'OR', name: 'Oregon'},
    { value: 'PA', name: 'Pennsylvania'},
    { value: 'RI', name: 'RhodeIsland'},
    { value: 'SC', name: 'South Carolina'},
    { value: 'SD', name: 'South Dakota'},
    { value: 'TN', name: 'Tennessee'},
    { value: 'TX', name: 'Texas'},
    { value: 'UT', name: 'Utah'},
    { value: 'VA', name: 'Virginia'},
    { value: 'VT', name: 'Vermont'},
    { value: 'WA', name: 'Washington'},
    { value: 'WI', name: 'Wisconsin'},
    { value: 'WV', name: 'West Virginia'},
    { value: 'WY', name: 'Wyoming'}
    ];

}
