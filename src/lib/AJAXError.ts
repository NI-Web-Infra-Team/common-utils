export default class AJAXError extends Error {
  status: number;
  url: string;

  constructor(message: string, status: number, url: string) {
    super(message);
    this.status = status;
    this.url = url;
  }

  toString(): string {
    return `${this.name}: ${this.message} (${this.status}): ${this.url}`;
  }
}
