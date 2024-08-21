import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello() {
    const result = this.fibonacci(1000);
    return result;
  }

  private fibonacci(n: number) {
    let a: number = 0;
    let b: number = 1;
    let temp: number;

    for (let i = 2; i <= n; i++) {
      temp = a + b;
      a = b;
      b = temp;
    }

    return n === 0 ? 0 : b;
  }
}
