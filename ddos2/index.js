import axios from 'axios';

let a = 1;

async function run() {
  while (true) {
    const res = await axios.get('https://akash09.vercel.app/');
    console.log(res.status); 
    console.log({ a });
    a++;
  }
}

run();
