export function GetMoneyAmount(money: number) {
  const grades = [
    {value: 10 ** 3, title: ' K'},
    {value: 10 ** 6, title: ' M'},
    {value: 10 ** 9, title: ' B'},
    {value: 10 ** 12, title: ' T'},
    {value: 10 ** 15, title: ' Q'},
    {value: 10 ** 18, title: ' Qn'},
    {value: 10 ** 21, title: ' S'},
  ];
  let moneyGrade: any = {};
  grades.forEach((g: any) => {
    if (money / g.value >= 1) {
      moneyGrade = {value: money / g.value, title: g.title};
    }
  });

  const result = {
    value: Math.floor(moneyGrade?.value || money)
      .toString()
      .replace(/\B(?=(\d{3})+(?!\d))/g, ' '),
    decimal: (moneyGrade?.value || money).toFixed(2).split('.')[1],
    title: moneyGrade?.title || '',
  };

  return result;
}

export function GetMoneyAmountString(money: number) {
  return `$ ${GetMoneyAmount(money).value}.${GetMoneyAmount(money).decimal}${
    GetMoneyAmount(money).title
  }`;
}
