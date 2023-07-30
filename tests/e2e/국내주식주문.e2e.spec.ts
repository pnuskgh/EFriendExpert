import { HttpMethod, fetch } from "../../packages/efriends/core/utils/fetch.util";
import { EFriend_JSON_TRID } from "../../packages/efriends/core/constants/trid.constant";
import { describe, it, expect, beforeAll, beforeEach } from "vitest";
import { testBed } from "./testbed";
import { TypeOfResult } from "./type";


describe('국내주식주문', () => {
  const APP_KEY = process.env.VIRTUAL_APP_KEY ?? '';
  const APP_SECRET = process.env.VIRTUAL_APP_SECRET ?? '';
  const VIRTUAL_ACCOUNT_NUMBER = process.env.VIRTUAL_ACCOUNT_NUMBER ?? '';

  const [CANO, ACNT_PRDT_CD] = VIRTUAL_ACCOUNT_NUMBER.split('-');

  let token = '';

  beforeAll(async () => {
    const { data } = await fetch.request<object, any>('oauth2/tokenP', {
      mode: 'virtual',
      method: 'post',
      body: {
        grant_type: 'client_credentials',
        appkey: APP_KEY, 
        appsecret: APP_SECRET, 
      }
    });
    token = data.access_token;
  })
  
  beforeEach(async () => {
    await new Promise((resolve) => setTimeout(resolve, 300));
  });

  it('주식주문(현금)[v1_국내주식-001]', async () => {  
    const body = {
      CANO,
      ACNT_PRDT_CD,
      PDNO: "009150",
      CTAC_TLNO: "P010123456781",
      ORD_DVSN: "00",
      ORD_QTY: "10",
      ORD_UNPR: "150000"
    };

    const { data } = await fetch.request<any>('/uapi/domestic-stock/v1/trading/order-cash', {
      mode: 'virtual',
      method: 'post',
      headers: {
        authorization: `Bearer ${token}`,
        appkey: process.env.VIRTUAL_APP_KEY ?? '',
        appsecret: process.env.VIRTUAL_APP_SECRET ?? '',
        tr_id: 'VTTC0802U',
        tr_cont: ''
      },
      body
    });
      expect(data).toHaveProperty('rt_cd');
      expect(data).toHaveProperty('msg_cd');
      expect(data).toHaveProperty('msg1');
      expect(data).toHaveProperty('output');
      expect(data.output).toHaveProperty('KRX_FWDG_ORD_ORGNO');
      expect(data.output).toHaveProperty('ODNO');
      expect(data.output).toHaveProperty('ORD_TMD');
  });

  it('주식주문(정정취소)[v1_국내주식-003]', async () => {
    const body = {
      CANO,
      ACNT_PRDT_CD,
      CTAC_TLNO: "P01012345678",
      QTY_ALL_ORD_YN: "N",
      ORGN_ODNO: "0001569136",
      RVSE_CNCL_DVSN_CD: "01",
      ORD_DVSN: "00",
      ORD_QTY: "1",
      KRX_FWDG_ORD_ORGNO: "06130",
      ORD_UNPR: "140000"
    };

    const { data } = await fetch.request<any>('/uapi/domestic-stock/v1/trading/order-rvsecncl', {
      mode: 'virtual',
      method: 'post',
      headers: {
        authorization: `Bearer ${token}`,
        appkey: process.env.VIRTUAL_APP_KEY ?? '',
        appsecret: process.env.VIRTUAL_APP_SECRET ?? '',
        tr_id: 'VTTC0802U',
        tr_cont: ''
      },
      body
    });
      expect(data).toHaveProperty('rt_cd');
      expect(data).toHaveProperty('msg_cd');
      expect(data).toHaveProperty('msg1');
      expect(data).toHaveProperty('output');
      expect(data.output).toHaveProperty('KRX_FWDG_ORD_ORGNO');
      expect(data.output).toHaveProperty('ODNO');
      expect(data.output).toHaveProperty('ORD_TMD');
  });

  it('주식일별주문체결조회[v1_국내주식-005]', async () => {
    const params = {
      CANO,
      ACNT_PRDT_CD,
      INQR_STRT_DT: '20220103',
      INQR_END_DT: '20220103',
      SLL_BUY_DVSN_CD: '00',
      INQR_DVSN: '00',
      PDNO: '009150',
      CCLD_DVSN: '00',
      ORD_GNO_BRNO: '',
      ODNO: '',
      INQR_DVSN_3: '00',
      INQR_DVSN_1: '',
      CTX_AREA_FK100: '',
      CTX_AREA_NK100: ''
    };

    const { data } = await fetch.request<any>('/uapi/domestic-stock/v1/trading/inquire-daily-ccld', {
      mode: 'virtual',
      method: 'get',
      headers: {
        authorization: `Bearer ${token}`,
        appkey: process.env.VIRTUAL_APP_KEY ?? '',
        appsecret: process.env.VIRTUAL_APP_SECRET ?? '',
        tr_id: 'VTTC8001R',
        tr_cont: ''
      },
      params
    });

    expect(data).toHaveProperty('ctx_area_fk100');
    expect(data).toHaveProperty('ctx_area_nk100');
    expect(data).toHaveProperty('output1');
    expect(data.output1).toBeTypeOf('object');
    expect(data).toHaveProperty('output2');
    expect(data.output2).toBeTypeOf('object');
    expect(data).toHaveProperty('rt_cd');
    expect(data).toHaveProperty('msg_cd');
    expect(data).toHaveProperty('msg1');
  });

  it('주식잔고조회[v1_국내주식-006]', async () => {
    const params = {
      CANO,
      ACNT_PRDT_CD,
      AFHR_FLPR_YN: "N",
      OFL_YN: "N",
      INQR_DVSN: "01",
      UNPR_DVSN: "01",
      FUND_STTL_ICLD_YN: "N",
      FNCG_AMT_AUTO_RDPT_YN: "N",
      PRCS_DVSN: "01",
      CTX_AREA_FK100: "",
      CTX_AREA_NK100: ""
    };

    const { data } = await fetch.request<any>('/uapi/domestic-stock/v1/trading/inquire-balance', {
      mode: 'virtual',
      method: 'get',
      headers: {
        authorization: `Bearer ${token}`,
        appkey: process.env.VIRTUAL_APP_KEY ?? '',
        appsecret: process.env.VIRTUAL_APP_SECRET ?? '',
        tr_id: 'VTTC8434R',
        tr_cont: ''
      },
      params
    });

    expect(data).toHaveProperty('ctx_area_fk100');
    expect(data).toHaveProperty('ctx_area_nk100');
    expect(data).toHaveProperty('output1');
    expect(data.output1).toBeTypeOf('object');
    expect(data).toHaveProperty('output2');
    expect(data.output2).toBeTypeOf('object');
    expect(data).toHaveProperty('rt_cd');
    expect(data).toHaveProperty('msg_cd');
    expect(data).toHaveProperty('msg1');
  });
});
