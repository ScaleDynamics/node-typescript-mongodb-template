import '@warpjs/engine';
import Backend from 'backend';

const backend = new Backend({
  env: 'emulator',
});

backend.hello().then((msg: string) => {
  console.log(msg);
});

// fetchMovies from mongodb
backend.fetchMovies('Star Trek').then((data: any) => {
  console.log(data);
});
