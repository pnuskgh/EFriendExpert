/**
 * packages/EFriendExpert/templates/Secret_constant.ts
 * 
 * @version 0.0.1
 * @license GNU General Public License v3.0
 * @author gye hyun james kim <pnuskgh@gmail.com>
 */

export enum SECRET_ISACTUAL_CODE {
    ACTUAL_INVESTMENT = '실전투자',
    SIMULATED_INVESTMENT = '모의투자'
}

export const SECRET_ISACTUAL_NAME: Record<SECRET_ISACTUAL_CODE, string> = {
    [SECRET_ISACTUAL_CODE.ACTUAL_INVESTMENT]: '실전투자',
    [SECRET_ISACTUAL_CODE.SIMULATED_INVESTMENT]: '모의투자'
};

export enum SECRET_FEE_TYPE_CODE {
    BANKIES = '뱅키스',
    BRANCH = '영업점'
}

export const SECRET_FEE_TYPE_NAME: Record<SECRET_FEE_TYPE_CODE, string> = {
    [SECRET_FEE_TYPE_CODE.BANKIES]: '뱅키스',
    [SECRET_FEE_TYPE_CODE.BRANCH]: '영업점'
};

export enum SECRET_ISORDER_CODE {
    ORDER = '주문용',
    INQUIRY = '조회용'
}

export const SECRET_ISORDER_NAME: Record<SECRET_ISORDER_CODE, string> = {
    [SECRET_ISORDER_CODE.ORDER]: '주문용',
    [SECRET_ISORDER_CODE.INQUIRY]: '조회용'
};

export enum SECRET_STATUS_CODE {
    ACTIVE = '활성',
    INACTIVE = '비활성'
}

export const SECRET_STATUS_NAME: Record<SECRET_STATUS_CODE, string> = {
    [SECRET_STATUS_CODE.ACTIVE]: '활성',
    [SECRET_STATUS_CODE.INACTIVE]: '비활성'
};
