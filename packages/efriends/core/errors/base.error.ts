export class EFriendError extends Error {
  code: number;
  message: string;

  constructor(code: number, message: string) {
      super(`${code} - ${message}`);
      this.code = code;
      this.message = message;
  }
}