export const getMonthlyInterest = (apr: number) => (apr / 12) / 100;

export const nextMonth = (date: Date) => {
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

export const getMonthlyPayment = (mount: number, i: number, term: number) => {
  const ic = (1 + i);
  const ip = Math.pow(ic, term);
  return parseFloat(((i * mount * ip) / (ip - 1)).toFixed(2));
};

export type Quota = {
  couta: number;
  date: any;
  mount: number;
  interest: number;
  total: number;
};


class Desking {
  

  getDate(d: Date) {
    return `${(d.getMonth() + 1).toString().padStart(2, '0')}-${d.getFullYear()}`
  }

  generateAmortization(mount: number, apr: number, term: number): Quota[] {
    const im = getMonthlyInterest(apr);
    let payoff = mount;
    let date = new Date();
    const monthlyPayment: number = getMonthlyPayment(mount, im, term);
    const fees = [];
    let i;
    let ip;
    let mp;
    for (i = 1; i <= term; i += 1) {
      ip = payoff * im;
      mp = monthlyPayment - ip;
      payoff -= mp;
      fees.push({
        couta: i,
        date: this.getDate(date),
        mount: mp,
        interest: ip,
        total: ip + mp,
        payoff
      });
      date = nextMonth(date);
    }
    return fees;
  }
}

export default Desking;
