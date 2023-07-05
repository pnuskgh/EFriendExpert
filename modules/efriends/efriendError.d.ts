/**
 * 한국투자증권 EFriendExpert code JSON 정의
 * 
 * @file modules/efriends/efriend_json_code.d.ts
 * @version 0.0.1
 * @license GNU General Public License v3.0
 * @copyright 2017~2023, EFriendExport Community Team
 * @author gye hyun james kim <pnuskgh@gmail.com>
 */

export class EFriendError extends Error {
    code: number | string;
    message: string;

    constructor(code: number | string, message: string);
}
