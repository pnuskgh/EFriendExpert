/**
 * packages/EFriendExpert/templates/EFriendExpert_constants.ts
 * 
 * @version 0.0.1
 * @license GNU General Public License v3.0
 * @author gye hyun james kim <pnuskgh@gmail.com>
 */

export enum TTTC0802U_REQUEST_TR_CONT_CODE {
    QUERY_BLANK = ' ',
    QUERY_N = 'N'
};

export const TTTC0802U_REQUEST_TR_CONT_NAME: Record<TTTC0802U_REQUEST_TR_CONT_CODE, string> = {
    [TTTC0802U_REQUEST_TR_CONT_CODE.QUERY_BLANK]: '초기 조회',
    [TTTC0802U_REQUEST_TR_CONT_CODE.QUERY_N]: '다음 데이터 조회'
};

export enum TTTC0802U_REQUEST_CUSTTYPE_CODE {
    CORPORATION = 'B',
    INDIVIDUAL = 'P'
};

export const TTTC0802U_REQUEST_CUSTTYPE_NAME: Record<TTTC0802U_REQUEST_CUSTTYPE_CODE, string> = {
    [TTTC0802U_REQUEST_CUSTTYPE_CODE.CORPORATION]: '법인',
    [TTTC0802U_REQUEST_CUSTTYPE_CODE.INDIVIDUAL]: '개인'
};

export enum TTTC0802U_REQUEST_ORD_DVSN_CODE {
    CODE_00 = '00',
    CODE_01 = '01'
};

export const TTTC0802U_REQUEST_ORD_DVSN_NAME: Record<TTTC0802U_REQUEST_ORD_DVSN_CODE, string> = {
    [TTTC0802U_REQUEST_ORD_DVSN_CODE.CODE_00]: '지정가',
    [TTTC0802U_REQUEST_ORD_DVSN_CODE.CODE_01]: '시장가'
};

export enum TTTC0802U_TR_CONT_CODE {
    CODE_F = 'F',
    CODE_M = 'M'
};

export const TTTC0802U_TR_CONT_NAME: Record<TTTC0802U_TR_CONT_CODE, string> = {
    [TTTC0802U_TR_CONT_CODE.CODE_F]: '다음 데이터 있음',
    [TTTC0802U_TR_CONT_CODE.CODE_M]: '마지막 데이터'
};

export enum TTTC0802U_RT_CD_CODE {
    CODE_0 = '0',
    CODE_nnn = 'nnn'
};

export const TTTC0802U_RT_CD_NAME: Record<TTTC0802U_RT_CD_CODE, string> = {
    [TTTC0802U_RT_CD_CODE.CODE_0]: '성공',
    [TTTC0802U_RT_CD_CODE.CODE_nnn]: '실패 nnn'
};
