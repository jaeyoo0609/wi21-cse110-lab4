var interval = setInterval(myTimer, 1000);

function myTimer() {
  let d = new Date();
  let time = d.toLocaleTimeString();
  console.log(time);
}