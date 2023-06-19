/*
 * /packages/generator/utils/error.util.ts
 * 
 * @version 1.0.0
 * @license GNU General Public License v3.0
 * @author dalcon10028 <dalcon10280@gmail.com>
 */
import { ERROR_CODE, ERROR_MESSAGE } from "../errors";

export const errorUtil = {
  getMessage: (code: ERROR_CODE): string => {
    return ERROR_MESSAGE[code];
  } 
};