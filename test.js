const target = 'hnd_sin_c_m_201806_201808.pdf';
const target1 = 'hnd_sin_20_c_m_201806_201808.pdf';
const target2 = 'hnd_sin_c_m_201806.pdf';
const target3 = 'hnd_sin_20_c_m_201806.pdf';

const allWords = target.match(/[a-z]+/g);

const periods = target.match(/\d{6}/g) || null;
const departure = target.match(/[a-z]+/g)[0] || null;
const arrival = target.match(/[a-z]+/g)[1] || null;
const flightNum = ((/(?:_)(\d{1,5})(?:_)/g).exec(target))?(/(?:_)(\d{1,5})(?:_)/g).exec(target)[1]:null;
const flightCode = (flightNum)?`${arrival}_${flightNum}`:arrival;
const seatClass = target.match(/[a-z]+/g)[2] || null;
const period = target.match(/\d{6}_*\d*/g)[0] || null;



if(periods>1){
    let split = target.split('_');
    if(split.length==6){
        const departure = split[0] || null;
        const arrival = split[1] || null;
        const seatClass = target.match(/[a-z]+/g)[2] || null;
    }
    else{

    }
}
else{

}

console.log(target.split('_'));
console.log(allWords);
console.log(departure);
console.log(arrival);
console.log(seatClass);
console.dir(flightNum);
console.dir(flightCode);
console.log(period);




