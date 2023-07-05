'use strict'
/**
 * 에러 클래스
 * 
 * @file modules/efriends/efriendError.js
 * @version 0.0.1
 * @license GNU General Public License v3.0
 * @copyright 2017~2023, EFriendExport Community Team
 * @author gye hyun james kim <pnuskgh@gmail.com>
 */

class EFriendError extends Error {
    code: number | string;
    message: string

    constructor(code, message) {
        super(`${code} - ${message}`);
        
        this.code = code;
        this.message = message;
    }
}

export default EFriendError;
export { EFriendError };
