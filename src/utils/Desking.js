export const getMonthlyInterest = apr => (apr / 12) / 100;

export const nextMonth = (date) => {
  const month = date.getMonth();
  let year;
  if ((month + 1) < 12) {
    date.setMonth(month + 1);
  } else {
    year = date.getFullYear() + 1;
    date.setMonth(0);
    date.setFullYear(year);
  }
  return date;
};

export const getMonthlyPayment = (mount, i, term) => {
  const ic = (1 + i);
  const ip = Math.pow(ic, term);
  return ((i * mount * ip) / (ip - 1)).toFixed(2);
};

class Desking {

  constructor() {
    this.setup();
  }

  setup() {
    this.sum = {
      mount: 0,
      tax: 0,
      registration: 0,
      total: 0,
      mountBegin: 0,
      mountFinance: 0,
      monthPayment: 0,
      interest: 0,
      term: 0,
      fees: [],
    };
  }

  generateAmortization(mount, apr, term) {
    const im = this.getMonthlyInterest(apr);
    let payoff = mount;
    let date = new Date();
    const monthlyPayment = this.getMonthlyPayment(mount, im, term);
    const fees = [];
    let i;
    let ip;
    let mp;
    for (i = 1; i <= term; i += 1) {
      ip = mount * im;
      mp = monthlyPayment - ip;
      fees.push({
        couta: i,
        date: this.getDate(date),
        mount: mp,
        interest: ip,
        total: ip + mp,
      });
      payoff -= mp;
      date = this.nextMonth(date);
    }
    return fees;
  }
}

export default Desking;
