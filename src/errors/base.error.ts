/*
 * /src/errors/base.error.ts
 * 
 * @version 1.0.0
 * @license GNU General Public License v3.0
 * @author dalcon10028 <dalcon10280@gmail.com>
 */
import { ErrorObject } from "ajv";
import { errorUtil } from "../utils";
import { ERROR_CODE } from "./error.constant";

interface BaseErrorProps {
  code: ERROR_CODE;
  message?: string;
  details?: ErrorObject[] | null;
  error?: unknown;
  data?: unknown;
}

export class BaseError extends Error {
  code: ERROR_CODE;
  message: string;
  data?: unknown;
  details?: ErrorObject[] | null;
  trace?: string | unknown;

  constructor({ code, message, error, data, details }: BaseErrorProps) {
    super(message);
    this.code = code;
    this.message = message ?? errorUtil.getMessage(code);
    this.trace = error instanceof Error ? error?.stack : error;
    this.data = data;
    this.details = details;
  }
}