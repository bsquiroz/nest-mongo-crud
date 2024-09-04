import { Injectable } from '@nestjs/common';
import { httpAdapter } from '../interfaces/http-adapter.interface';

@Injectable()
export class FetchAdapter implements httpAdapter {
  async get<T>(url: string): Promise<T> {
    try {
      const data = await fetch(url, {
        method: 'GET',
      });

      return await data.json();
    } catch (error) {
      console.log(error);
      throw new Error('This is an Error, Check logs');
    }
  }
}
