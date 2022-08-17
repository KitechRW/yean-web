import Keys from 'apis/utils/constants/keys';
import axios from 'axios';

class Http {
  instance: any;

  constructor(baseURL: string, headers: any) {
    this.instance = axios.create({ baseURL, headers });
  }

  static axios = axios.create({
    baseURL: Keys.DEFAULT_API as string,
  });
}
export default Http;
