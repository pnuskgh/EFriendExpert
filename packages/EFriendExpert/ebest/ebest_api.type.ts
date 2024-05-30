/**
 * LS증권 EBest API용 type
 *     자동 생성되는 소스이니 수정하지 마세요.
 * 
 * @file packages/EFriendExpert/ebset/ebest_api.type.ts
 * @version 0.0.1
 * @license GNU General Public License v3.0
 * @copyright 2017~2024, EFriendExport Community Team
 * @author gye hyun james kim <pnuskgh@gmail.com>
 */


export interface TOKEN_REQUEST_HEADER {
    'content-type'?:  string
}


export interface REVOKE_REQUEST_HEADER {
    'content-type'?:  string
}

export type CDPCQ04700_REQUEST_HEADER_TR_CONT = 'Y' | 'N';
export interface CDPCQ04700_REQUEST_HEADER {
    'content-type'?:  string
    authorization?:  string
    tr_cd?:  string
    tr_cont?:  CDPCQ04700_REQUEST_HEADER_TR_CONT
    tr_cont_key?:  string
    mac_address?:  string
}

export type CSPAT00601_REQUEST_HEADER_TR_CONT = 'Y' | 'N';
export interface CSPAT00601_REQUEST_HEADER {
    'content-type'?:  string
    authorization?:  string
    tr_cd?:  string
    tr_cont?:  CSPAT00601_REQUEST_HEADER_TR_CONT
    tr_cont_key?:  string
    mac_address?:  string
}

export type CSPAT00701_REQUEST_HEADER_TR_CONT = 'Y' | 'N';
export interface CSPAT00701_REQUEST_HEADER {
    'ontent-type'?:  string
    authorization?:  string
    tr_cd?:  string
    tr_cont?:  CSPAT00701_REQUEST_HEADER_TR_CONT
    tr_cont_key?:  string
    mac_address?:  string
}

export type CSPAT00801_REQUEST_HEADER_TR_CONT = 'Y' | 'N';
export interface CSPAT00801_REQUEST_HEADER {
    'content-type'?:  string
    authorization?:  string
    tr_cd?:  string
    tr_cont?:  CSPAT00801_REQUEST_HEADER_TR_CONT
    tr_cont_key?:  string
    mac_address?:  string
}

export type CSPAQ12200_REQUEST_HEADER_TR_CONT = 'Y' | 'N';
export interface CSPAQ12200_REQUEST_HEADER {
    'content-type'?:  string
    authorization?:  string
    tr_cd?:  string
    tr_cont?:  CSPAQ12200_REQUEST_HEADER_TR_CONT
    tr_cont_key?:  string
    mac_address?:  string
}

export type CSPAQ13700_REQUEST_HEADER_TR_CONT = 'Y' | 'N';
export interface CSPAQ13700_REQUEST_HEADER {
    'content-type'?:  string
    authorization?:  string
    tr_cd?:  string
    tr_cont?:  CSPAQ13700_REQUEST_HEADER_TR_CONT
    tr_cont_key?:  string
    mac_address?:  string
}

export type CSPBQ00200_REQUEST_HEADER_TR_CONT = 'Y' | 'N';
export interface CSPBQ00200_REQUEST_HEADER {
    'content-type'?:  string
    authorization?:  string
    tr_cd?:  string
    tr_cont?:  CSPBQ00200_REQUEST_HEADER_TR_CONT
    tr_cont_key?:  string
    mac_address?:  string
}

export type T0150_REQUEST_HEADER_TR_CONT = 'Y' | 'N';
export interface T0150_REQUEST_HEADER {
    'content-type'?:  string
    authorization?:  string
    tr_cd?:  string
    tr_cont?:  T0150_REQUEST_HEADER_TR_CONT
    tr_cont_key?:  string
    mac_address?:  string
}

export type T1102_REQUEST_HEADER_TR_CONT = 'Y' | 'N';
export interface T1102_REQUEST_HEADER {
    'content-type'?:  string
    authorization?:  string
    tr_cd?:  string
    tr_cont?:  T1102_REQUEST_HEADER_TR_CONT
    tr_cont_key?:  string
    mac_address?:  string
}

export type T1305_REQUEST_HEADER_TR_CONT = 'Y' | 'N';
export interface T1305_REQUEST_HEADER {
    'content-type'?:  string
    authorization?:  string
    tr_cd?:  string
    tr_cont?:  T1305_REQUEST_HEADER_TR_CONT
    tr_cont_key?:  string
    mac_address?:  string
}

export type T8410_REQUEST_HEADER_TR_CONT = 'Y' | 'N';
export interface T8410_REQUEST_HEADER {
    'content-type'?:  string
    authorization?:  string
    tr_cd?:  string
    tr_cont?:  T8410_REQUEST_HEADER_TR_CONT
    tr_cont_key?:  string
    mac_address?:  string
}

export type T0424_REQUEST_HEADER_TR_CONT = 'Y' | 'N';
export interface T0424_REQUEST_HEADER {
    'content-type'?:  string
    authorization?:  string
    tr_cd?:  string
    tr_cont?:  T0424_REQUEST_HEADER_TR_CONT
    tr_cont_key?:  string
    mac_address?:  string
}

export type T0425_REQUEST_HEADER_TR_CONT = 'Y' | 'N';
export interface T0425_REQUEST_HEADER {
    'content-type'?:  string
    authorization?:  string
    tr_cd?:  string
    tr_cont?:  T0425_REQUEST_HEADER_TR_CONT
    tr_cont_key?:  string
    mac_address?:  string
}

export type T8430_REQUEST_HEADER_TR_CONT = 'Y' | 'N';
export interface T8430_REQUEST_HEADER {
    'content-type'?:  string
    authorization?:  string
    tr_cd?:  string
    tr_cont?:  T8430_REQUEST_HEADER_TR_CONT
    tr_cont_key?:  string
    mac_address?:  string
}

export type T8436_REQUEST_HEADER_TR_CONT = 'Y' | 'N';
export interface T8436_REQUEST_HEADER {
    'content-type'?:  string
    authorization?:  string
    tr_cd?:  string
    tr_cont?:  T8436_REQUEST_HEADER_TR_CONT
    tr_cont_key?:  string
    mac_address?:  string
}



export interface TOKEN_REQUEST_BODY {
    grant_type?:  string
    appkey?:  string
    appsecretkey?:  string
    scope?:  string
}


export interface REVOKE_REQUEST_BODY {
    appkey?:  string
    appsecretkey?:  string
    token_type_hint?:  string
    token?:  string
}


export interface CDPCQ04700_REQUEST_BODY_CDPCQ04700INBLOCK1 {
    QryTp?:  string
    QrySrtDt?:  string
    QryEndDt?:  string
    SrtNo?:  number
    PdptnCode?:  string
    IsuLgclssCode?:  string
    IsuNo?:  string
}


export interface CDPCQ04700_REQUEST_BODY {
    CDPCQ04700InBlock1?:  CDPCQ04700_REQUEST_BODY_CDPCQ04700INBLOCK1
}

export type CSPAT00601_REQUEST_BODY_CSPAT00601INBLOCK1_BNSTPCODE = '1' | '2';
export type CSPAT00601_REQUEST_BODY_CSPAT00601INBLOCK1_ORDPRCPTNCODE = '00' | '03' | '05' | '06' | '07' | '61' | '81' | '82';
export type CSPAT00601_REQUEST_BODY_CSPAT00601INBLOCK1_MGNTRNCODE = '000' | '003' | '005' | '007' | '101' | '103' | '105' | '107' | '180';
export interface CSPAT00601_REQUEST_BODY_CSPAT00601INBLOCK1 {
    IsuNo?:  string
    OrdQty?:  number
    OrdPrc?:  number
    BnsTpCode?:  CSPAT00601_REQUEST_BODY_CSPAT00601INBLOCK1_BNSTPCODE
    OrdprcPtnCode?:  CSPAT00601_REQUEST_BODY_CSPAT00601INBLOCK1_ORDPRCPTNCODE
    MgntrnCode?:  CSPAT00601_REQUEST_BODY_CSPAT00601INBLOCK1_MGNTRNCODE
    LoanDt?:  string
    OrdCndiTpCode?:  string
}


export interface CSPAT00601_REQUEST_BODY {
    CSPAT00601InBlock1?:  CSPAT00601_REQUEST_BODY_CSPAT00601INBLOCK1
}

export type CSPAT00701_REQUEST_BODY_CSPAT00701INBLOCK1_ISUNO = '주식' | 'ELW' | 'ETN';
export interface CSPAT00701_REQUEST_BODY_CSPAT00701INBLOCK1 {
    OrgOrdNo?:  number
    IsuNo?:  CSPAT00701_REQUEST_BODY_CSPAT00701INBLOCK1_ISUNO
    OrdQty?:  number
    OrdprcPtnCode?:  string
    OrdCndiTpCode?:  string
    OrdPrc?:  number
}


export interface CSPAT00701_REQUEST_BODY {
    CSPAT00701InBlock1?:  CSPAT00701_REQUEST_BODY_CSPAT00701INBLOCK1
}

export type CSPAT00801_REQUEST_BODY_CSPAT00801INBLOCK1_ISUNO = '주식' | 'ELW' | 'ETN';
export interface CSPAT00801_REQUEST_BODY_CSPAT00801INBLOCK1 {
    OrgOrdNo?:  number
    IsuNo?:  CSPAT00801_REQUEST_BODY_CSPAT00801INBLOCK1_ISUNO
    OrdQty?:  number
}


export interface CSPAT00801_REQUEST_BODY {
    CSPAT00801InBlock1?:  CSPAT00801_REQUEST_BODY_CSPAT00801INBLOCK1
}


export interface CSPAQ12200_REQUEST_BODY_CSPAQ12200INBLOCK1 {
    BalCreTp?:  string
}


export interface CSPAQ12200_REQUEST_BODY {
    CSPAQ12200InBlock1?:  CSPAQ12200_REQUEST_BODY_CSPAQ12200INBLOCK1
}

export type CSPAQ13700_REQUEST_BODY_CSPAQ13700INBLOCK1_ORDMKTCODE = '00' | '10' | '20' | '30';
export type CSPAQ13700_REQUEST_BODY_CSPAQ13700INBLOCK1_BNSTPCODE = '0' | '1' | '2';
export type CSPAQ13700_REQUEST_BODY_CSPAQ13700INBLOCK1_EXECYN = '0' | '1' | '3';
export interface CSPAQ13700_REQUEST_BODY_CSPAQ13700INBLOCK1 {
    OrdMktCode?:  CSPAQ13700_REQUEST_BODY_CSPAQ13700INBLOCK1_ORDMKTCODE
    BnsTpCode?:  CSPAQ13700_REQUEST_BODY_CSPAQ13700INBLOCK1_BNSTPCODE
    IsuNo?:  string
    ExecYn?:  CSPAQ13700_REQUEST_BODY_CSPAQ13700INBLOCK1_EXECYN
    OrdDt?:  string
    SrtOrdNo2?:  number
    BkseqTpCode?:  string
    OrdPtnCode?:  string
}


export interface CSPAQ13700_REQUEST_BODY {
    CSPAQ13700InBlock1?:  CSPAQ13700_REQUEST_BODY_CSPAQ13700INBLOCK1
}


export interface CSPBQ00200_REQUEST_BODY_CSPBQ00200INBLOCK1 {
    BnsTpCode?:  string
    IsuNo?:  string
    OrdPrc?:  number
}


export interface CSPBQ00200_REQUEST_BODY {
    CSPBQ00200InBlock1?:  CSPBQ00200_REQUEST_BODY_CSPBQ00200INBLOCK1
}


export interface T0150_REQUEST_BODY_T0150INBLOCK {
    cts_medosu?:  string
    cts_expcode?:  string
    cts_price?:  string
    cts_middiv?:  string
}


export interface T0150_REQUEST_BODY {
    t0150InBlock?:  T0150_REQUEST_BODY_T0150INBLOCK
}


export interface T1102_REQUEST_BODY_T1102INBLOCK {
    shcode?:  string
}


export interface T1102_REQUEST_BODY {
    t1102InBlock?:  T1102_REQUEST_BODY_T1102INBLOCK
}


export interface T1305_REQUEST_BODY_T1305INBLOCK {
    shcode?:  string
    dwmcode?:  number
    date?:  string
    idx?:  number
    cnt?:  number
}


export interface T1305_REQUEST_BODY {
    t1305InBlock?:  T1305_REQUEST_BODY_T1305INBLOCK
}

export type T8410_REQUEST_BODY_T8410INBLOCK_SDATE = '조회구간종료일 Space';
export interface T8410_REQUEST_BODY_T8410INBLOCK {
    shcode?:  string
    gubun?:  string
    qrycnt?:  number
    sdate?:  T8410_REQUEST_BODY_T8410INBLOCK_SDATE
    edate?:  string
    cts_date?:  string
    comp_yn?:  string
    sujung?:  string
}


export interface T8410_REQUEST_BODY {
    t8410InBlock?:  T8410_REQUEST_BODY_T8410INBLOCK
}


export interface T0424_REQUEST_BODY_T0424INBLOCK {
    prcgb?:  string
    chegb?:  string
    dangb?:  string
    charge?:  string
    cts_expcode?:  string
}


export interface T0424_REQUEST_BODY {
    t0424InBlock?:  T0424_REQUEST_BODY_T0424INBLOCK
}

export type T0425_REQUEST_BODY_T0425INBLOCK_CHEGB = '1' | '2';
export type T0425_REQUEST_BODY_T0425INBLOCK_MEDOSU = '0' | '1' | '2';
export type T0425_REQUEST_BODY_T0425INBLOCK_SORTGB = '1' | '2';
export interface T0425_REQUEST_BODY_T0425INBLOCK {
    expcode?:  string
    chegb?:  T0425_REQUEST_BODY_T0425INBLOCK_CHEGB
    medosu?:  T0425_REQUEST_BODY_T0425INBLOCK_MEDOSU
    sortgb?:  T0425_REQUEST_BODY_T0425INBLOCK_SORTGB
    cts_ordno?:  string
}


export interface T0425_REQUEST_BODY {
    t0425InBlock?:  T0425_REQUEST_BODY_T0425INBLOCK
}


export interface T8430_REQUEST_BODY_T8430INBLOCK {
    gubun?:  string
}


export interface T8430_REQUEST_BODY {
    t8430InBlock?:  T8430_REQUEST_BODY_T8430INBLOCK
}


export interface T8436_REQUEST_BODY_T8436INBLOCK {
    gubun?:  string
}


export interface T8436_REQUEST_BODY {
    t8436InBlock?:  T8436_REQUEST_BODY_T8436INBLOCK
}



export interface TOKEN_RESPONSE {
    code: number | string,
    message: string,
    header?: TOKEN_RESPONSE_HEADER,
    body?: TOKEN_RESPONSE_BODY
}
                    
export interface REVOKE_RESPONSE {
    code: number | string,
    message: string,
    header?: REVOKE_RESPONSE_HEADER,
    body?: REVOKE_RESPONSE_BODY
}
                    
export interface CDPCQ04700_RESPONSE {
    code: number | string,
    message: string,
    header?: CDPCQ04700_RESPONSE_HEADER,
    body?: CDPCQ04700_RESPONSE_BODY
}
                    
export interface CSPAT00601_RESPONSE {
    code: number | string,
    message: string,
    header?: CSPAT00601_RESPONSE_HEADER,
    body?: CSPAT00601_RESPONSE_BODY
}
                    
export interface CSPAT00701_RESPONSE {
    code: number | string,
    message: string,
    header?: CSPAT00701_RESPONSE_HEADER,
    body?: CSPAT00701_RESPONSE_BODY
}
                    
export interface CSPAT00801_RESPONSE {
    code: number | string,
    message: string,
    header?: CSPAT00801_RESPONSE_HEADER,
    body?: CSPAT00801_RESPONSE_BODY
}
                    
export interface CSPAQ12200_RESPONSE {
    code: number | string,
    message: string,
    header?: CSPAQ12200_RESPONSE_HEADER,
    body?: CSPAQ12200_RESPONSE_BODY
}
                    
export interface CSPAQ13700_RESPONSE {
    code: number | string,
    message: string,
    header?: CSPAQ13700_RESPONSE_HEADER,
    body?: CSPAQ13700_RESPONSE_BODY
}
                    
export interface CSPBQ00200_RESPONSE {
    code: number | string,
    message: string,
    header?: CSPBQ00200_RESPONSE_HEADER,
    body?: CSPBQ00200_RESPONSE_BODY
}
                    
export interface T0150_RESPONSE {
    code: number | string,
    message: string,
    header?: T0150_RESPONSE_HEADER,
    body?: T0150_RESPONSE_BODY
}
                    
export interface T1102_RESPONSE {
    code: number | string,
    message: string,
    header?: T1102_RESPONSE_HEADER,
    body?: T1102_RESPONSE_BODY
}
                    
export interface T1305_RESPONSE {
    code: number | string,
    message: string,
    header?: T1305_RESPONSE_HEADER,
    body?: T1305_RESPONSE_BODY
}
                    
export interface T8410_RESPONSE {
    code: number | string,
    message: string,
    header?: T8410_RESPONSE_HEADER,
    body?: T8410_RESPONSE_BODY
}
                    
export interface T0424_RESPONSE {
    code: number | string,
    message: string,
    header?: T0424_RESPONSE_HEADER,
    body?: T0424_RESPONSE_BODY
}
                    
export interface T0425_RESPONSE {
    code: number | string,
    message: string,
    header?: T0425_RESPONSE_HEADER,
    body?: T0425_RESPONSE_BODY
}
                    
export interface T8430_RESPONSE {
    code: number | string,
    message: string,
    header?: T8430_RESPONSE_HEADER,
    body?: T8430_RESPONSE_BODY
}
                    
export interface T8436_RESPONSE {
    code: number | string,
    message: string,
    header?: T8436_RESPONSE_HEADER,
    body?: T8436_RESPONSE_BODY
}
                    

export interface TOKEN_RESPONSE_HEADER {
    'content-type'?:  string
}


export interface REVOKE_RESPONSE_HEADER {
    'content-type'?:  string
}

export type CDPCQ04700_RESPONSE_HEADER_TR_CONT = '' | 'Y' | 'N';
export interface CDPCQ04700_RESPONSE_HEADER {
    'content-type'?:  string
    tr_cd?:  string
    tr_cont?:  CDPCQ04700_RESPONSE_HEADER_TR_CONT
    tr_cont_key?:  string
}

export type CSPAT00601_RESPONSE_HEADER_TR_CONT = '' | 'Y' | 'N';
export interface CSPAT00601_RESPONSE_HEADER {
    'content-type'?:  string
    tr_cd?:  string
    tr_cont?:  CSPAT00601_RESPONSE_HEADER_TR_CONT
    tr_cont_key?:  string
}

export type CSPAT00701_RESPONSE_HEADER_TR_CONT = '' | 'Y' | 'N';
export interface CSPAT00701_RESPONSE_HEADER {
    'content-type'?:  string
    tr_cd?:  string
    tr_cont?:  CSPAT00701_RESPONSE_HEADER_TR_CONT
    tr_cont_key?:  string
}

export type CSPAT00801_RESPONSE_HEADER_TR_CONT = '' | 'Y' | 'N';
export interface CSPAT00801_RESPONSE_HEADER {
    'content-type'?:  string
    tr_cd?:  string
    tr_cont?:  CSPAT00801_RESPONSE_HEADER_TR_CONT
    tr_cont_key?:  string
}

export type CSPAQ12200_RESPONSE_HEADER_TR_CONT = '' | 'Y' | 'N';
export interface CSPAQ12200_RESPONSE_HEADER {
    'content-type'?:  string
    tr_cd?:  string
    tr_cont?:  CSPAQ12200_RESPONSE_HEADER_TR_CONT
    tr_cont_key?:  string
}

export type CSPAQ13700_RESPONSE_HEADER_TR_CONT = '' | 'Y' | 'N';
export interface CSPAQ13700_RESPONSE_HEADER {
    'content-type'?:  string
    tr_cd?:  string
    tr_cont?:  CSPAQ13700_RESPONSE_HEADER_TR_CONT
    tr_cont_key?:  string
}

export type CSPBQ00200_RESPONSE_HEADER_TR_CONT = '' | 'Y' | 'N';
export interface CSPBQ00200_RESPONSE_HEADER {
    'content-type'?:  string
    tr_cd?:  string
    tr_cont?:  CSPBQ00200_RESPONSE_HEADER_TR_CONT
    tr_cont_key?:  string
}

export type T0150_RESPONSE_HEADER_TR_CONT = '' | 'Y' | 'N';
export interface T0150_RESPONSE_HEADER {
    'content-type'?:  string
    tr_cd?:  string
    tr_cont?:  T0150_RESPONSE_HEADER_TR_CONT
    tr_cont_key?:  string
}

export type T1102_RESPONSE_HEADER_TR_CONT = '' | 'Y' | 'N';
export interface T1102_RESPONSE_HEADER {
    'content-type'?:  string
    tr_cd?:  string
    tr_cont?:  T1102_RESPONSE_HEADER_TR_CONT
    tr_cont_key?:  string
}

export type T1305_RESPONSE_HEADER_TR_CONT = '' | 'Y' | 'N';
export interface T1305_RESPONSE_HEADER {
    'content-type'?:  string
    tr_cd?:  string
    tr_cont?:  T1305_RESPONSE_HEADER_TR_CONT
    tr_cont_key?:  string
}

export type T8410_RESPONSE_HEADER_TR_CONT = '' | 'Y' | 'N';
export interface T8410_RESPONSE_HEADER {
    'content-type'?:  string
    tr_cd?:  string
    tr_cont?:  T8410_RESPONSE_HEADER_TR_CONT
    tr_cont_key?:  string
}

export type T0424_RESPONSE_HEADER_TR_CONT = '' | 'Y' | 'N';
export interface T0424_RESPONSE_HEADER {
    'content-type'?:  string
    tr_cd?:  string
    tr_cont?:  T0424_RESPONSE_HEADER_TR_CONT
    tr_cont_key?:  string
}

export type T0425_RESPONSE_HEADER_TR_CONT = '' | 'Y' | 'N';
export interface T0425_RESPONSE_HEADER {
    'content-type'?:  string
    tr_cd?:  string
    tr_cont?:  T0425_RESPONSE_HEADER_TR_CONT
    tr_cont_key?:  string
}

export type T8430_RESPONSE_HEADER_TR_CONT = '' | 'Y' | 'N';
export interface T8430_RESPONSE_HEADER {
    'content-type'?:  string
    tr_cd?:  string
    tr_cont?:  T8430_RESPONSE_HEADER_TR_CONT
    tr_cont_key?:  string
}

export type T8436_RESPONSE_HEADER_TR_CONT = '' | 'Y' | 'N';
export interface T8436_RESPONSE_HEADER {
    'content-type'?:  string
    tr_cd?:  string
    tr_cont?:  T8436_RESPONSE_HEADER_TR_CONT
    tr_cont_key?:  string
}



export interface TOKEN_RESPONSE_BODY {
    access_token?:  string
    expires_in?:  number
    scope?:  string
    token_type?:  string
}


export interface REVOKE_RESPONSE_BODY {
    code?:  string
    message?:  string
}


export interface CDPCQ04700_RESPONSE_BODY_CDPCQ04700OUTBLOCK1 {
    RecCnt?:  number
    QryTp?:  string
    AcntNo?:  string
    Pwd?:  string
    QrySrtDt?:  string
    QryEndDt?:  string
    SrtNo?:  number
    PdptnCode?:  string
    IsuLgclssCode?:  string
    IsuNo?:  string
}



export interface CDPCQ04700_RESPONSE_BODY_CDPCQ04700OUTBLOCK2 {
    RecCnt?:  number
    AcntNm?:  string
}



export interface CDPCQ04700_RESPONSE_BODY_CDPCQ04700OUTBLOCK3 {
    AcntNo?:  string
    TrdDt?:  string
    TrdNo?:  number
    TpCodeNm?:  string
    SmryNo?:  string
    SmryNm?:  string
    CancTpNm?:  string
    TrdQty?:  number
    Trtax?:  number
    FcurrAdjstAmt?:  number
    AdjstAmt?:  number
    OvdSum?:  number
    DpsBfbalAmt?:  number
    SellPldgRfundAmt?:  number
    DpspdgLoanBfbalAmt?:  number
    TrdmdaNm?:  string
    OrgTrdNo?:  number
    IsuNm?:  string
    TrdUprc?:  number
    CmsnAmt?:  number
    FcurrCmsnAmt?:  number
    RfundDiffAmt?:  number
    RepayAmtSum?:  number
    SecCrbalQty?:  number
    CslLoanRfundIntrstAmt?:  number
    DpspdgLoanCrbalAmt?:  number
    TrxTime?:  string
    Inouno?:  number
    IsuNo?:  string
    TrdAmt?:  number
    ChckAmt?:  number
    TaxSumAmt?:  number
    FcurrTaxSumAmt?:  number
    IntrstUtlfee?:  number
    MnyDvdAmt?:  number
    RcvblOcrAmt?:  number
    TrxBrnNo?:  string
    TrxBrnNm?:  string
    DpspdgLoanAmt?:  number
    DpspdgLoanRfundAmt?:  number
    BasePrc?:  number
    DpsCrbalAmt?:  number
    BoaAmt?:  number
    MnyoutAbleAmt?:  number
    BcrLoanOcrAmt?:  number
    BcrLoanBfbalAmt?:  number
    BnsBasePrc?:  number
    TaxchrBasePrc?:  number
    TrdUnit?:  number
    BalUnit?:  number
    EvrTax?:  number
    EvalAmt?:  number
    BcrLoanRfundAmt?:  number
    BcrLoanCrbalAmt?:  number
    AddMgnOcrTotamt?:  number
    AddMnyMgnOcrAmt?:  number
    AddMgnDfryTotamt?:  number
    AddMnyMgnDfryAmt?:  number
    BnsplAmt?:  number
    Ictax?:  number
    Ihtax?:  number
    LoanDt?:  string
    CrcyCode?:  string
    FcurrAmt?:  number
    FcurrTrdAmt?:  number
    FcurrDps?:  number
    FcurrDpsBfbalAmt?:  number
    OppAcntNm?:  string
    OppAcntNo?:  string
    LoanRfundAmt?:  number
    LoanIntrstAmt?:  number
    AskpsnNm?:  string
    OrdDt?:  string
    TrdXchrat?:  number
    RdctCmsn?:  number
    FcurrStmpTx?:  number
    FcurrElecfnTrtax?:  number
    FcstckTrtax?:  number
}



export interface CDPCQ04700_RESPONSE_BODY_CDPCQ04700OUTBLOCK4 {
    RecCnt?:  number
    PnlSumAmt?:  number
    CtrctAsm?:  number
    CmsnAmtSumAmt?:  number
}



export interface CDPCQ04700_RESPONSE_BODY_CDPCQ04700OUTBLOCK5 {
    RecCnt?:  number
    MnyinAmt?:  number
    SecinAmt?:  number
    MnyoutAmt?:  number
    SecoutAmt?:  number
    DiffAmt?:  number
    DiffAmt0?:  number
    SellQty?:  number
    SellAmt?:  number
    SellCmsn?:  number
    EvrTax?:  number
    FcurrSellAdjstAmt?:  number
    BuyQty?:  number
    BuyAmt?:  number
    BuyCmsn?:  number
    ExecTax?:  number
    FcurrBuyAdjstAmt?:  number
}


export interface CDPCQ04700_RESPONSE_BODY {
    CDPCQ04700OutBlock1?:  CDPCQ04700_RESPONSE_BODY_CDPCQ04700OUTBLOCK1
    CDPCQ04700OutBlock2?:  CDPCQ04700_RESPONSE_BODY_CDPCQ04700OUTBLOCK2
    CDPCQ04700OutBlock3?:  Array<CDPCQ04700_RESPONSE_BODY_CDPCQ04700OUTBLOCK3>
    CDPCQ04700OutBlock4?:  CDPCQ04700_RESPONSE_BODY_CDPCQ04700OUTBLOCK4
    CDPCQ04700OutBlock5?:  CDPCQ04700_RESPONSE_BODY_CDPCQ04700OUTBLOCK5
}


export interface CSPAT00601_RESPONSE_BODY_CSPAT00601OUTBLOCK1 {
    RecCnt?:  number
    AcntNo?:  string
    InptPwd?:  string
    IsuNo?:  string
    OrdQty?:  number
    OrdPrc?:  number
    BnsTpCode?:  string
    OrdprcPtnCode?:  string
    PrgmOrdprcPtnCode?:  string
    StslAbleYn?:  string
    StslOrdprcTpCode?:  string
    CommdaCode?:  string
    MgntrnCode?:  string
    LoanDt?:  string
    MbrNo?:  string
    OrdCndiTpCode?:  string
    StrtgCode?:  string
    GrpId?:  string
    OrdSeqNo?:  number
    PtflNo?:  number
    BskNo?:  number
    TrchNo?:  number
    ItemNo?:  number
    OpDrtnNo?:  string
    LpYn?:  string
    CvrgTpCode?:  string
}



export interface CSPAT00601_RESPONSE_BODY_CSPAT00601OUTBLOCK2 {
    RecCnt?:  number
    OrdNo?:  number
    OrdTime?:  string
    OrdMktCode?:  string
    OrdPtnCode?:  string
    ShtnIsuNo?:  string
    MgempNo?:  string
    OrdAmt?:  number
    SpareOrdNo?:  number
    CvrgSeqno?:  number
    RsvOrdNo?:  number
    SpotOrdQty?:  number
    RuseOrdQty?:  number
    MnyOrdAmt?:  number
    SubstOrdAmt?:  number
    RuseOrdAmt?:  number
    AcntNm?:  string
    IsuNm?:  string
}


export interface CSPAT00601_RESPONSE_BODY {
    CSPAT00601OutBlock1?:  CSPAT00601_RESPONSE_BODY_CSPAT00601OUTBLOCK1
    CSPAT00601OutBlock2?:  CSPAT00601_RESPONSE_BODY_CSPAT00601OUTBLOCK2
}


export interface CSPAT00701_RESPONSE_BODY_CSPAT00701OUTBLOCK1 {
    RecCnt?:  number
    OrgOrdNo?:  number
    AcntNo?:  string
    InptPwd?:  string
    IsuNo?:  string
    OrdQty?:  number
    OrdprcPtnCode?:  string
    OrdCndiTpCode?:  string
    OrdPrc?:  number
    CommdaCode?:  string
    StrtgCode?:  string
    GrpId?:  string
    OrdSeqNo?:  number
    PtflNo?:  number
    BskNo?:  number
    TrchNo?:  number
    ItemNo?:  number
}



export interface CSPAT00701_RESPONSE_BODY_CSPAT00701OUTBLOCK2 {
    RecCnt?:  number
    OrdNo?:  number
    PrntOrdNo?:  number
    OrdTime?:  string
    OrdMktCode?:  string
    OrdPtnCode?:  string
    ShtnIsuNo?:  string
    PrgmOrdprcPtnCode?:  string
    StslOrdprcTpCode?:  string
    StslAbleYn?:  string
    MgntrnCode?:  string
    LoanDt?:  string
    CvrgOrdTp?:  string
    LpYn?:  string
    MgempNo?:  string
    OrdAmt?:  number
    BnsTpCode?:  string
    SpareOrdNo?:  number
    CvrgSeqno?:  number
    RsvOrdNo?:  number
    MnyOrdAmt?:  number
    SubstOrdAmt?:  number
    RuseOrdAmt?:  number
    AcntNm?:  string
    IsuNm?:  string
}


export interface CSPAT00701_RESPONSE_BODY {
    CSPAT00701OutBlock1?:  CSPAT00701_RESPONSE_BODY_CSPAT00701OUTBLOCK1
    CSPAT00701OutBlock2?:  CSPAT00701_RESPONSE_BODY_CSPAT00701OUTBLOCK2
}


export interface CSPAT00801_RESPONSE_BODY_CSPAT00801OUTBLOCK1 {
    RecCnt?:  number
    OrgOrdNo?:  number
    AcntNo?:  string
    InptPwd?:  string
    IsuNo?:  string
    OrdQty?:  number
    CommdaCode?:  string
    GrpId?:  string
    StrtgCode?:  string
    OrdSeqNo?:  number
    PtflNo?:  number
    BskNo?:  number
    TrchNo?:  number
    ItemNo?:  number
}



export interface CSPAT00801_RESPONSE_BODY_CSPAT00801OUTBLOCK2 {
    RecCnt?:  number
    OrdNo?:  number
    PrntOrdNo?:  number
    OrdTime?:  string
    OrdMktCode?:  string
    OrdPtnCode?:  string
    ShtnIsuNo?:  string
    PrgmOrdprcPtnCode?:  string
    StslOrdprcTpCode?:  string
    StslAbleYn?:  string
    MgntrnCode?:  string
    LoanDt?:  string
    CvrgOrdTp?:  string
    LpYn?:  string
    MgempNo?:  string
    BnsTpCode?:  string
    SpareOrdNo?:  number
    CvrgSeqno?:  number
    RsvOrdNo?:  number
    AcntNm?:  string
    IsuNm?:  string
}


export interface CSPAT00801_RESPONSE_BODY {
    CSPAT00801OutBlock1?:  CSPAT00801_RESPONSE_BODY_CSPAT00801OUTBLOCK1
    CSPAT00801OutBlock2?:  CSPAT00801_RESPONSE_BODY_CSPAT00801OUTBLOCK2
}


export interface CSPAQ12200_RESPONSE_BODY_CSPAQ12200OUTBLOCK1 {
    RecCnt?:  number
    MgmtBrnNo?:  string
    AcntNo?:  string
    Pwd?:  string
    BalCreTp?:  string
}



export interface CSPAQ12200_RESPONSE_BODY_CSPAQ12200OUTBLOCK2 {
    RecCnt?:  number
    BrnNm?:  string
    AcntNm?:  string
    MnyOrdAbleAmt?:  number
    MnyoutAbleAmt?:  number
    SeOrdAbleAmt?:  number
    KdqOrdAbleAmt?:  number
    BalEvalAmt?:  number
    RcvblAmt?:  number
    DpsastTotamt?:  number
    PnlRat?:  number
    InvstOrgAmt?:  number
    InvstPlAmt?:  number
    CrdtPldgOrdAmt?:  number
    Dps?:  number
    SubstAmt?:  number
    D1Dps?:  number
    D2Dps?:  number
    MnyrclAmt?:  number
    MgnMny?:  number
    MgnSubst?:  number
    ChckAmt?:  number
    SubstOrdAbleAmt?:  number
    MgnRat100pctOrdAbleAmt?:  number
    MgnRat35ordAbleAmt?:  number
    MgnRat50ordAbleAmt?:  number
    PrdaySellAdjstAmt?:  number
    PrdayBuyAdjstAmt?:  number
    CrdaySellAdjstAmt?:  number
    CrdayBuyAdjstAmt?:  number
    D1ovdRepayRqrdAmt?:  number
    D2ovdRepayRqrdAmt?:  number
    D1PrsmptWthdwAbleAmt?:  number
    D2PrsmptWthdwAbleAmt?:  number
    DpspdgLoanAmt?:  number
    Imreq?:  number
    MloanAmt?:  number
    ChgAfPldgRat?:  number
    OrgPldgAmt?:  number
    SubPldgAmt?:  number
    RqrdPldgAmt?:  number
    OrgPdlckAmt?:  number
    PdlckAmt?:  number
    AddPldgMny?:  number
    D1OrdAbleAmt?:  number
    CrdtIntdltAmt?:  number
    EtclndAmt?:  number
    NtdayPrsmptCvrgAmt?:  number
    OrgPldgSumAmt?:  number
    CrdtOrdAbleAmt?:  number
    SubPldgSumAmt?:  number
    CrdtPldgAmtMny?:  number
    CrdtPldgSubstAmt?:  number
    AddCrdtPldgMny?:  number
    CrdtPldgRuseAmt?:  number
    AddCrdtPldgSubst?:  number
    CslLoanAmtdt1?:  number
    DpslRestrcAmt?:  number
}


export interface CSPAQ12200_RESPONSE_BODY {
    CSPAQ12200OutBlock1?:  CSPAQ12200_RESPONSE_BODY_CSPAQ12200OUTBLOCK1
    CSPAQ12200OutBlock2?:  CSPAQ12200_RESPONSE_BODY_CSPAQ12200OUTBLOCK2
}


export interface CSPAQ13700_RESPONSE_BODY_CSPAQ13700OUTBLOCK1 {
    RecCnt?:  number
    AcntNo?:  string
    InptPwd?:  string
    OrdMktCode?:  string
    BnsTpCode?:  string
    IsuNo?:  string
    ExecYn?:  string
    OrdDt?:  string
    SrtOrdNo2?:  number
    BkseqTpCode?:  string
    OrdPtnCode?:  string
}



export interface CSPAQ13700_RESPONSE_BODY_CSPAQ13700OUTBLOCK2 {
    RecCnt?:  number
    SellExecAmt?:  number
    BuyExecAmt?:  number
    SellExecQty?:  number
    BuyExecQty?:  number
    SellOrdQty?:  number
    BuyOrdQty?:  number
}



export interface CSPAQ13700_RESPONSE_BODY_CSPAQ13700OUTBLOCK3 {
    OrdDt?:  string
    MgmtBrnNo?:  string
    OrdMktCode?:  string
    OrdNo?:  number
    OrgOrdNo?:  number
    IsuNo?:  string
    IsuNm?:  string
    BnsTpCode?:  string
    BnsTpNm?:  string
    OrdPtnCode?:  string
    OrdPtnNm?:  string
    OrdTrxPtnCode?:  number
    OrdTrxPtnNm?:  string
    MrcTpCode?:  string
    MrcTpNm?:  string
    MrcQty?:  number
    MrcAbleQty?:  number
    OrdQty?:  number
    OrdPrc?:  number
    ExecQty?:  number
    ExecPrc?:  number
    ExecTrxTime?:  string
    LastExecTime?:  string
    OrdprcPtnCode?:  string
    OrdprcPtnNm?:  string
    OrdCndiTpCode?:  string
    AllExecQty?:  number
    RegCommdaCode?:  string
    CommdaNm?:  string
    MbrNo?:  string
    RsvOrdYn?:  string
    LoanDt?:  string
    OrdTime?:  string
    OpDrtnNo?:  string
    OdrrId?:  string
}


export interface CSPAQ13700_RESPONSE_BODY {
    CSPAQ13700OutBlock1?:  CSPAQ13700_RESPONSE_BODY_CSPAQ13700OUTBLOCK1
    CSPAQ13700OutBlock2?:  CSPAQ13700_RESPONSE_BODY_CSPAQ13700OUTBLOCK2
    CSPAQ13700OutBlock3?:  Array<CSPAQ13700_RESPONSE_BODY_CSPAQ13700OUTBLOCK3>
}


export interface CSPBQ00200_RESPONSE_BODY_CSPBQ00200OUTBLOCK1 {
    RecCnt?:  number
    BnsTpCode?:  string
    AcntNo?:  string
    InptPwd?:  string
    IsuNo?:  string
    OrdPrc?:  number
    RegCommdaCode?:  string
}



export interface CSPBQ00200_RESPONSE_BODY_CSPBQ00200OUTBLOCK2 {
    RecCnt?:  number
    AcntNm?:  string
    IsuNm?:  string
    Dps?:  number
    SubstAmt?:  number
    CrdtPldgRuseAmt?:  number
    MnyOrdAbleAmt?:  number
    SubstOrdAbleAmt?:  number
    MnyMgn?:  number
    SubstMgn?:  number
    SeOrdAbleAmt?:  number
    KdqOrdAbleAmt?:  number
    PrsmptDpsD1?:  number
    PrsmptDpsD2?:  number
    MnyoutAbleAmt?:  number
    RcvblAmt?:  number
    CmsnRat?:  number
    AddLevyAmt?:  number
    RuseObjAmt?:  number
    MnyRuseObjAmt?:  number
    FirmMgnRat?:  number
    SubstRuseObjAmt?:  number
    IsuMgnRat?:  number
    AcntMgnRat?:  number
    TrdMgnrt?:  number
    Cmsn?:  number
    MgnRat20pctOrdAbleAmt?:  number
    MgnRat20OrdAbleQty?:  number
    MgnRat30pctOrdAbleAmt?:  number
    MgnRat30OrdAbleQty?:  number
    MgnRat40pctOrdAbleAmt?:  number
    MgnRat40OrdAbleQty?:  number
    MgnRat100pctOrdAbleAmt?:  number
    MgnRat100OrdAbleQty?:  number
    MgnRat100MnyOrdAbleAmt?:  number
    MgnRat100MnyOrdAbleQty?:  number
    MgnRat20pctRuseAbleAmt?:  number
    MgnRat30pctRuseAbleAmt?:  number
    MgnRat40pctRuseAbleAmt?:  number
    MgnRat100pctRuseAbleAmt?:  number
    OrdAbleQty?:  number
    OrdAbleAmt?:  number
}


export interface CSPBQ00200_RESPONSE_BODY {
    CSPBQ00200OutBlock1?:  CSPBQ00200_RESPONSE_BODY_CSPBQ00200OUTBLOCK1
    CSPBQ00200OutBlock2?:  CSPBQ00200_RESPONSE_BODY_CSPBQ00200OUTBLOCK2
}


export interface T0150_RESPONSE_BODY_T0150OUTBLOCK {
    mdqty?:  number
    mdamt?:  number
    mdfee?:  number
    mdtax?:  number
    mdargtax?:  number
    tmdtax?:  number
    mdadjamt?:  number
    msqty?:  number
    msamt?:  number
    msfee?:  number
    tmstax?:  number
    msadjamt?:  number
    tqty?:  number
    tamt?:  number
    tfee?:  number
    tottax?:  number
    targtax?:  number
    ttax?:  number
    tadjamt?:  number
    cts_medosu?:  string
    cts_expcode?:  string
    cts_price?:  string
    cts_middiv?:  string
}



export interface T0150_RESPONSE_BODY_T0150OUTBLOCK1 {
    medosu?:  string
    expcode?:  string
    qty?:  number
    price?:  number
    amt?:  number
    fee?:  number
    tax?:  number
    argtax?:  number
    adjamt?:  number
    middiv?:  string
}


export interface T0150_RESPONSE_BODY {
    t0150OutBlock?:  T0150_RESPONSE_BODY_T0150OUTBLOCK
    t0150OutBlock1?:  Array<T0150_RESPONSE_BODY_T0150OUTBLOCK1>
}


export interface T1102_RESPONSE_BODY_T1102OUTBLOCK {
    hname?:  string
    price?:  number
    sign?:  string
    change?:  number
    diff?:  number
    volume?:  number
    recprice?:  number
    avg?:  number
    uplmtprice?:  number
    dnlmtprice?:  number
    jnilvolume?:  number
    volumediff?:  number
    open?:  number
    opentime?:  string
    high?:  number
    hightime?:  string
    low?:  number
    lowtime?:  string
    high52w?:  number
    high52wdate?:  string
    low52w?:  number
    low52wdate?:  string
    exhratio?:  number
    per?:  number
    pbrx?:  number
    listing?:  number
    jkrate?:  number
    memedan?:  string
    offernocd1?:  string
    bidnocd1?:  string
    offerno1?:  string
    bidno1?:  string
    dvol1?:  number
    svol1?:  number
    dcha1?:  number
    scha1?:  number
    ddiff1?:  number
    sdiff1?:  number
    offernocd2?:  string
    bidnocd2?:  string
    offerno2?:  string
    bidno2?:  string
    dvol2?:  number
    svol2?:  number
    dcha2?:  number
    scha2?:  number
    ddiff2?:  number
    sdiff2?:  number
    offernocd3?:  string
    bidnocd3?:  string
    offerno3?:  string
    bidno3?:  string
    dvol3?:  number
    svol3?:  number
    dcha3?:  number
    scha3?:  number
    ddiff3?:  number
    sdiff3?:  number
    offernocd4?:  string
    bidnocd4?:  string
    offerno4?:  string
    bidno4?:  string
    dvol4?:  number
    svol4?:  number
    dcha4?:  number
    scha4?:  number
    ddiff4?:  number
    sdiff4?:  number
    offernocd5?:  string
    bidnocd5?:  string
    offerno5?:  string
    bidno5?:  string
    dvol5?:  number
    svol5?:  number
    dcha5?:  number
    scha5?:  number
    ddiff5?:  number
    sdiff5?:  number
    fwdvl?:  number
    ftradmdcha?:  number
    ftradmddiff?:  number
    fwsvl?:  number
    ftradmscha?:  number
    ftradmsdiff?:  number
    vol?:  number
    shcode?:  string
    value?:  number
    jvolume?:  number
    highyear?:  number
    highyeardate?:  string
    lowyear?:  number
    lowyeardate?:  string
    target?:  number
    capital?:  number
    abscnt?:  number
    parprice?:  number
    gsmm?:  string
    subprice?:  number
    total?:  number
    listdate?:  string
    name?:  string
    bfsales?:  number
    bfoperatingincome?:  number
    bfordinaryincome?:  number
    bfnetincome?:  number
    bfeps?:  number
    name2?:  string
    bfsales2?:  number
    bfoperatingincome2?:  number
    bfordinaryincome2?:  number
    bfnetincome2?:  number
    bfeps2?:  number
    salert?:  number
    opert?:  number
    ordrt?:  number
    netrt?:  number
    epsrt?:  number
    info1?:  string
    info2?:  string
    info3?:  string
    info4?:  string
    janginfo?:  string
    t_per?:  number
    tonghwa?:  string
    dval1?:  number
    sval1?:  number
    dval2?:  number
    sval2?:  number
    dval3?:  number
    sval3?:  number
    dval4?:  number
    sval4?:  number
    dval5?:  number
    sval5?:  number
    davg1?:  number
    savg1?:  number
    davg2?:  number
    savg2?:  number
    davg3?:  number
    savg3?:  number
    davg4?:  number
    savg4?:  number
    davg5?:  number
    savg5?:  number
    ftradmdval?:  number
    ftradmsval?:  number
    ftradmdvag?:  number
    ftradmsvag?:  number
    info5?:  string
    spac_gubun?:  string
    issueprice?:  number
    alloc_gubun?:  string
    alloc_text?:  string
    shterm_text?:  string
    svi_uplmtprice?:  number
    svi_dnlmtprice?:  number
    low_lqdt_gu?:  string
    abnormal_rise_gu?:  string
    lend_text?:  string
    ty_text?:  string
}


export interface T1102_RESPONSE_BODY {
    t1102OutBlock?:  T1102_RESPONSE_BODY_T1102OUTBLOCK
}


export interface T1305_RESPONSE_BODY_T1305OUTBLOCK {
    cnt?:  number
    date?:  string
    idx?:  number
}



export interface T1305_RESPONSE_BODY_T1305OUTBLOCK1 {
    date?:  string
    open?:  number
    high?:  number
    low?:  number
    close?:  number
    sign?:  string
    change?:  number
    diff?:  number
    volume?:  number
    diff_vol?:  number
    chdegree?:  number
    sojinrate?:  number
    changerate?:  number
    fpvolume?:  number
    covolume?:  number
    shcode?:  string
    value?:  number
    ppvolume?:  number
    o_sign?:  string
    o_change?:  number
    o_diff?:  number
    h_sign?:  string
    h_change?:  number
    h_diff?:  number
    l_sign?:  string
    l_change?:  number
    l_diff?:  number
    marketcap?:  number
}


export interface T1305_RESPONSE_BODY {
    t1305OutBlock?:  T1305_RESPONSE_BODY_T1305OUTBLOCK
    t1305OutBlock1?:  Array<T1305_RESPONSE_BODY_T1305OUTBLOCK1>
}


export interface T8410_RESPONSE_BODY_T8410OUTBLOCK {
    shcode?:  string
    jisiga?:  number
    jihigh?:  number
    jilow?:  number
    jiclose?:  number
    jivolume?:  number
    disiga?:  number
    dihigh?:  number
    dilow?:  number
    diclose?:  number
    highend?:  number
    lowend?:  number
    cts_date?:  string
    s_time?:  string
    e_time?:  string
    dshmin?:  string
    rec_count?:  number
    svi_uplmtprice?:  number
    svi_dnlmtprice?:  number
}



export interface T8410_RESPONSE_BODY_T8410OUTBLOCK1 {
    date?:  string
    open?:  number
    high?:  number
    low?:  number
    close?:  number
    jdiff_vol?:  number
    value?:  number
    jongchk?:  number
    rate?:  number
    pricechk?:  number
    ratevalue?:  number
    sign?:  string
}


export interface T8410_RESPONSE_BODY {
    t8410OutBlock?:  T8410_RESPONSE_BODY_T8410OUTBLOCK
    t8410OutBlock1?:  Array<T8410_RESPONSE_BODY_T8410OUTBLOCK1>
}


export interface T0424_RESPONSE_BODY_T0424OUTBLOCK {
    sunamt?:  number
    dtsunik?:  number
    mamt?:  number
    sunamt1?:  number
    cts_expcode?:  string
    tappamt?:  number
    tdtsunik?:  number
}



export interface T0424_RESPONSE_BODY_T0424OUTBLOCK1 {
    expcode?:  string
    jangb?:  string
    janqty?:  number
    mdposqt?:  number
    pamt?:  number
    mamt?:  number
    sinamt?:  number
    lastdt?:  string
    msat?:  number
    mpms?:  number
    mdat?:  number
    mpmd?:  number
    jsat?:  number
    jpms?:  number
    jdat?:  number
    jpmd?:  number
    sysprocseq?:  number
    loandt?:  string
    hname?:  string
    marketgb?:  string
    jonggb?:  string
    janrt?:  number
    price?:  number
    appamt?:  number
    dtsunik?:  number
    sunikrt?:  number
    fee?:  number
    tax?:  number
    sininter?:  number
}


export interface T0424_RESPONSE_BODY {
    t0424OutBlock?:  T0424_RESPONSE_BODY_T0424OUTBLOCK
    t0424OutBlock1?:  Array<T0424_RESPONSE_BODY_T0424OUTBLOCK1>
}


export interface T0425_RESPONSE_BODY_T0425OUTBLOCK {
    tqty?:  number
    tcheqty?:  number
    tordrem?:  number
    cmss?:  number
    tamt?:  number
    tmdamt?:  number
    tmsamt?:  number
    tax?:  number
    cts_ordno?:  string
}



export interface T0425_RESPONSE_BODY_T0425OUTBLOCK1 {
    ordno?:  number
    expcode?:  string
    medosu?:  string
    qty?:  number
    price?:  number
    cheqty?:  number
    cheprice?:  number
    ordrem?:  number
    cfmqty?:  number
    status?:  string
    orgordno?:  number
    ordgb?:  string
    ordtime?:  string
    ordermtd?:  string
    sysprocseq?:  number
    hogagb?:  string
    price1?:  number
    orggb?:  string
    singb?:  string
    loandt?:  string
}


export interface T0425_RESPONSE_BODY {
    t0425OutBlock?:  T0425_RESPONSE_BODY_T0425OUTBLOCK
    t0425OutBlock1?:  Array<T0425_RESPONSE_BODY_T0425OUTBLOCK1>
}


export interface T8430_RESPONSE_BODY_T8430OUTBLOCK {
    hname?:  string
    shcode?:  string
    expcode?:  string
    etfgubun?:  string
    uplmtprice?:  number
    dnlmtprice?:  number
    jnilclose?:  number
    memedan?:  string
    recprice?:  number
    gubun?:  string
}


export interface T8430_RESPONSE_BODY {
    t8430OutBlock?:  Array<T8430_RESPONSE_BODY_T8430OUTBLOCK>
}


export interface T8436_RESPONSE_BODY_T8436OUTBLOCK {
    hname?:  string
    shcode?:  string
    expcode?:  string
    etfgubun?:  string
    uplmtprice?:  number
    dnlmtprice?:  number
    jnilclose?:  number
    memedan?:  string
    recprice?:  number
    gubun?:  string
    bu12gubun?:  string
    spac_gubun?:  string
    filler?:  string
}


export interface T8436_RESPONSE_BODY {
    t8436OutBlock?:  Array<T8436_RESPONSE_BODY_T8436OUTBLOCK>
}


