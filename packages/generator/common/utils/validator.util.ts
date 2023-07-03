/*
 * /packages/generator/utils/validator.util.ts
 * 
 * @version 1.0.0
 * @license GNU General Public License v3.0
 * @author dalcon10028 <dalcon10280@gmail.com>
 */
import Ajv, {JSONSchemaType} from "ajv";
import { BaseError, ERROR_CODE } from "../error";

const ajv = new Ajv();

export const validatorUtil = {
  validateSchema: <T>(schema: JSONSchemaType<T>, data: unknown): T => {
    const validate = ajv.compile(schema);
    const valid = validate(data);
    if (!valid) {
      throw new BaseError({ 
        code: ERROR_CODE.EXCEL_INVALID_VALUE, 
        data,
        message: `${validate.errors?.[0].instancePath} ${validate.errors?.[0].message}`,
        details: validate.errors
      });
    }
    return data;
  }
};