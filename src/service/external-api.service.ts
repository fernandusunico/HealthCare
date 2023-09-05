import { Injectable } from '@nestjs/common';
import axios from 'axios';

@Injectable()
export class ExternalApiService {
  async fetchData(): Promise<any> {
    try {
      console.log('responsetest');
      const response = await axios.get('https://api.github.com/users/quen2404');
      //   console.log('response', response.data);
      return response.data;
    } catch (error) {
      throw error;
    }
  }
}
