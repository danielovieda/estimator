import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class QuotesService {
  quote: any
  cost: any
  savedQuotes: any


  constructor() { }

  setQuote(quote: any) {
    this.quote = quote
  }

  getQuote() {
    return this.quote
  }

  getQuoteNumber() {
    return Math.floor(Math.random() * 9999)
  }

  calculateQuote() {
    const costPerFoot = 46
    const costPerGate = 350
    const sixFootMultiplier = 1
    const eightFootMultiplier = 1.2
    const taxes = 0.075

    let length = this.quote.fence.length
    let height = this.quote.fence.height
    let gates = this.quote.fence.gate
    let subtotal = length * costPerFoot


    height === 6 ? subtotal = subtotal * sixFootMultiplier : subtotal = subtotal * eightFootMultiplier


    let costOfGates = costPerGate * gates

    subtotal = subtotal + costOfGates



    let grandTotal = subtotal + (subtotal * taxes)





    this.quote.cost = {
      costPerFoot: costPerFoot,
      costPerGate: costPerGate,
      subtotal: subtotal,
      taxes: (subtotal * taxes),
      taxRate: taxes,
      grandTotal: grandTotal
    }

    return grandTotal






  }

}
