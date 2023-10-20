
// Ensures that the passed number's string representation is padded with leading 0 in case the number is single digit 
// Usefull to use in date strings for months and days
function helper_pad(number) {
  let str = number.toString();
  if(str.length === 1){
    str = '0' + str;
  }

  return str;
}

export class Date extends Date {
  toREDCapString() {
    const cur_year = this.getFullYear();
    const cur_month = helper_pad(this.getMonth());
    const cur_day = helper_pad(this.getDate());
    const currentDateRedCapFormatString = `${cur_year}-${cur_month}-${cur_day}`;
    return currentDateRedCapFormatString; 
  }
}
