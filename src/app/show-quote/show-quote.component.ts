import { Component, OnInit } from '@angular/core';
import { QuotesService } from '../quotes.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-show-quote',
  templateUrl: './show-quote.component.html',
  styleUrls: ['./show-quote.component.scss']
})
export class ShowQuoteComponent implements OnInit {

  quote: any

  constructor(private service: QuotesService, private router: Router) { }

  ngOnInit(): void {
    this.quote = this.service.getQuote()
    if (!this.quote) {
      this.router.navigate(['get-quote'])
    }
  }

  calc() {
    this.service.calculateQuote()
  }

}
