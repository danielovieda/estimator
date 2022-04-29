import { Component, OnInit } from '@angular/core';
import { QuotesService } from '../quotes.service';
import { Router } from '@angular/router';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-show-quote',
  templateUrl: './show-quote.component.html',
  styleUrls: ['./show-quote.component.scss']
})
export class ShowQuoteComponent implements OnInit {

  quote: any

  constructor(private service: QuotesService, private router: Router, private datePipe: DatePipe) { }

  ngOnInit(): void {
    this.quote = this.service.getQuote()
    if (!this.quote) {
      this.router.navigate(['get-quote'])
    }

    this.service.calculateQuote()
  }

  quoteNumber() {
    return this.service.getQuoteNumber()
  }

  today() {
    return this.datePipe.transform(new Date(), 'MM/dd/YYYY');
  }

  get firstName() {
    return this.quote.contact.firstName
  }

  get lastName() {
    return this.quote.contact.lastName
  }

  get address() {
    return this.quote.contact.address
  }

  get city() {
    return this.quote.contact.city
  }

  get state() {
    return this.quote.contact.state
  }

  get zip() {
    return this.quote.contact.zip
  }

  get email() {
    return this.quote.contact.email
  }

  get length() {
    return this.quote.fence.length
  }

  get gates() {
    return this.quote.fence.gate
  }

  get height() {
    return this.quote.fence.height
  }

  get type() {
    return this.quote.fence.type
  }

  get costPerFoot() {
    return this.quote.cost.costPerFoot
  }

  get costPerGate() {
    return this.quote.cost.costPerGate
  }

  get subtotal() {
    return this.quote.cost.subtotal
  }

  get taxes() {
    return this.quote.cost.taxes
  }

  get taxRate() {
    return this.quote.cost.taxRate
  }

  get grandTotal() {
    return this.quote.cost.grandTotal
  }

}
