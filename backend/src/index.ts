import { fetchMovies } from "./mongodb";

const hello = async (): Promise<string> => {
  return `Hello from ScaleDynamics Platform, MongoDB, Angular and Node.js ${process.version} !`;
};

export { hello, fetchMovies };
