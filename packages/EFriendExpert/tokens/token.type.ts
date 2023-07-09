/**
 * Tokens
 * 
 * @file packages/EFriendExpert/tokens/token.type.ts
 * @version 0.0.1
 * @license GNU General Public License v3.0
 * @copyright 2017~2023, EFriendExport Community Team
 * @author gye hyun james kim <pnuskgh@gmail.com>
 */

export interface Token {
    id: number,
    access_token: string,
    token_type: string,
    expires_in: number,
    access_token_token_expired: string

    secretId: number
}
