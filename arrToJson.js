// combine first and last names
const validateName = data => `${data[1]} ${data[0]}`;

// delete all chars that is not a number
const validatePhone = data => data[5].replace(/[^\d]/g, '');

// delete all chars that is not a number
const validateCost = data => data[6].replace(/[^\d]/g, '');

// set up the wright date format
const validateDate = data => {
  // dateArr: ['2345', '2', '11']
  const dateArr = data[8].split('/');
  const year = dateArr[2];
  const month = ('0' + dateArr[1]).slice(-2);
  const day = ('0' + dateArr[0]).slice(-2);
  return `${year}-${month}-${day}`;
};


module.exports = data => {
  return {
    name: validateName(data),
    phone: validatePhone(data),
    // either i doesnt get the task or this data makes no sense
    person: { firstName: { type: 'string' }, lastName: { type: 'string' } },
    amount: data[7],
    date: validateDate(data),
    costCenterNum: validateCost(data),
  };
}
