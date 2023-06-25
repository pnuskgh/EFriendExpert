/**
 * packages/EFriendExpert/templates/EFriendExpert_constants.ts
 * 
 * @version 0.0.1
 * @license GNU General Public License v3.0
 * @author gye hyun james kim <pnuskgh@gmail.com>
 */

export enum TR_CONT_CODE {
    QUERY_FIRST = ' ',
    QUERY_NEXT = 'N'
};

export const CUSTTYPE_NAME: Record<TR_CONT_CODE, string> = {
    [TR_CONT_CODE.QUERY_FIRST]: '초기 조회',
    [TR_CONT_CODE.QUERY_NEXT]: '다음 데이터 조회'
};

export enum CUSTTYPE_CODE {
    CORPORATION = 'B',
    INDIVIDUAL = 'P'
};

export const CUSTTYPE_NAME: Record<CUSTTYPE_CODE, string> = {
    [CUSTTYPE_CODE.CORPORATION]: '법인',
    [CUSTTYPE_CODE.INDIVIDUAL]: '개인'
};
