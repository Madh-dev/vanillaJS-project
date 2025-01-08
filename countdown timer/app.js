const months = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December',
  ];
  const weekdays = [
    'Sunday',
    'Monday',
    'Tuesday',
    'Wednesday',
    'Thursday',
    'Friday',
    'Saturday',
  ];

  const giveaway = document.querySelector('.giveaway');
  const deadline = document.querySelector('.deadline');
  const items = document.querySelectorAll('.deadline-format h4');

  let tempDate = new Date();
  let tempYear = tempDate.getFullYear();
  let tempMonth = tempDate.getMonth();
  let tempDay = tempDate.getDate();

  const futureDate = new Date(tempYear,tempMonth,tempDay + 10, 11, 59,0);
  // console.log(futureDate);

  const futureDay = weekdays[futureDate.getDay()];
  const date = futureDate.getDate();
  const futureMonth = months[futureDate.getMonth()];
  const futureYear = futureDate.getFullYear();
  const futureHour = futureDate.getHours();
  const futureMinutes = futureDate.getMinutes();
  const futureSeconds = futureDate.getSeconds();

  giveaway.textContent = `giveaway ends on ${futureDay},${date} ${futureMonth} ${futureYear} ${futureHour}:${futureMinutes}am`;

const getRemainingTime = ()=>{
  const today = new Date().getTime();
  const futureTime = futureDate.getTime();
  const miliTime = futureDate - today;
  
  // 1s = 1000ms
  // 1m = 60s
  // 1hr = 60m
  // 1d = 24hr
  // values in milliseconds

  const aDay = 24*60*60*1000;
  const anHour = 60*60*1000;
  const aMinute = 60*1000;

  let days = miliTime / aDay;
  days = Math.floor(days);
  const hours = Math.floor( (miliTime % aDay) / anHour);
  const minutes = Math.floor( (miliTime % anHour) / aMinute);
  const seconds = Math.floor((miliTime % aMinute) / 1000);

  // set format as 2digit 
  function format(item){
    if(item < 10){
      return (item = `0${item}`);
    }
    return item;
  }
  const values = [days,hours,minutes,seconds];
  items.forEach((item,index)=>{
    item.innerHTML = format(values[index]);
  });

  if(miliTime < 0){
    clearInterval(coundown);
    deadline.innerHTML =`<h4 class="expired">sorry, this giveaway has expired!</h4>`
  }
}

let coundown = setInterval(getRemainingTime, 1000);
