export class Generator {

  greeting: string;

  public constructor(message: string) {
    this.greeting = message;
  }

  public foo(): string {
    return this.greeting;
  }

  public foo3(): string {
    return 'Hello!';
  }
}
