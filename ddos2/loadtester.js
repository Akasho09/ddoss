import http from 'k6/http';
import { sleep, check } from 'k6';

export const options = {
  vus: 50,           // virtual users (simulated clients)
  duration: '30s',   // test duration
};

export default function () {
  const res = http.get('https://akash17.vercel.app/');

  // Optional: validate response
  check(res, {
    'status is 200': (r) => r.status === 200,
  });

  sleep(1); // wait 1 second between requests per user
}
