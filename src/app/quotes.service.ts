import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class QuotesService {
  quote: any
  cost: any

  constructor() { }

  setQuote(quote: any) {
    this.quote = quote
  }

  getQuote() {
    return this.quote
  }

  calculateQuote() {
    let costPerFoot = 46
    let costPerGate = 350
    let length = this.quote.fence.length
    let height = this.quote.fence.height
    let type = this.quote.fence.type
    let gates = this.quote.fence.gate

    let subtotal = length * costPerFoot
    console.log('subtotal:',subtotal)
    height === 6 ? subtotal = subtotal * 1.2 : subtotal = subtotal * 1.3
    console.log('subtotal:',subtotal)

    let costOfGates = costPerGate * gates

    switch(type) {
      case "1":
        subtotal = subtotal * 1.05
        break
      case "2":
        subtotal = subtotal * 1.07
        break
      case "3":
        subtotal = subtotal * 1.1
        break
      case "4":
        subtotal = subtotal * 1.12
        break
      default:
        break
    }

    console.log('subtotal:',subtotal)




  }

}
