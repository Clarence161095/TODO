import { Injectable } from '@nestjs/common';
import open from 'open';

@Injectable()
export default class AppService {
  async openSwagger(): Promise<void> {
    const url = 'https://flashcard200.herokuapp.com/';

    await open(url);
  }
}
