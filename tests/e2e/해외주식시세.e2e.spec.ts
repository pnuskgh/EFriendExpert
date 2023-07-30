import { fetch } from "../../packages/efriends/core/utils/fetch.util";
import { describe, it, expect, beforeAll } from "vitest";


describe('해외주식시세', () => {
  const APP_KEY = process.env.VIRTUAL_APP_KEY ?? '';
  const APP_SECRET = process.env.VIRTUAL_APP_SECRET ?? '';

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

  it('해외주식 현재체결가[v1_해외주식-009]', async () => {
    const params = {
      AUTH: "",
      EXCD: "NAS",
      SYMB: "AAPL"
    };

    const { data } = await fetch.request<any>('/uapi/overseas-price/v1/quotations/price', {
      mode: 'virtual',
      method: 'get',
      headers: {
        authorization: `Bearer ${token}`,
        appkey: process.env.VIRTUAL_APP_KEY ?? '',
        appsecret: process.env.VIRTUAL_APP_SECRET ?? '',
        tr_id: 'HHDFS00000300',
        tr_cont: ''
      },
      params
    });

    expect(data).toHaveProperty('rt_cd');
    expect(data.rt_cd).toBe('1');
    expect(data).toHaveProperty('msg_cd');
    expect(data).toHaveProperty('msg1');
    expect(data).toHaveProperty('output');
    expect(data.output).toHaveProperty('rsym');
    expect(data.output).toHaveProperty('zdiv');
    expect(data.output).toHaveProperty('base');
    expect(data.output).toHaveProperty('pvol');
    expect(data.output).toHaveProperty('last');
    expect(data.output).toHaveProperty('sign');
    expect(data.output).toHaveProperty('diff');
    expect(data.output).toHaveProperty('fltt_rt');
    expect(data.output).toHaveProperty('tvol');
    expect(data.output).toHaveProperty('tamt');
    expect(data.output).toHaveProperty('ordy');
  });

  it('해외주식 기간별시세[v1_해외주식-010]', async () => {
    const params = {
      AUTH: "",
      EXCD: "NAS",
      SYMB: "AAPL",
      GUBN: 0,
      BYMD: '',
      MODP: 1
    };

    const { data } = await fetch.request<any>('/uapi/overseas-price/v1/quotations/dailyprice', {
      mode: 'virtual',
      method: 'get',
      headers: {
        authorization: `Bearer ${token}`,
        appkey: process.env.VIRTUAL_APP_KEY ?? '',
        appsecret: process.env.VIRTUAL_APP_SECRET ?? '',
        tr_id: 'HHDFS00000300',
        tr_cont: ''
      },
      params
    });

    expect(data).toHaveProperty('rt_cd');
    expect(data.rt_cd).toBe('1');
    expect(data).toHaveProperty('msg_cd');
    expect(data).toHaveProperty('msg1');
    expect(data).toHaveProperty('output');
    expect(data.output).toHaveProperty('rsym');
    expect(data.output).toHaveProperty('zdiv');
    expect(data.output).toHaveProperty('base');
    expect(data.output).toHaveProperty('pvol');
    expect(data.output).toHaveProperty('last');
    expect(data.output).toHaveProperty('sign');
    expect(data.output).toHaveProperty('diff');
    expect(data.output).toHaveProperty('fltt_rt');
    expect(data.output).toHaveProperty('tvol');
    expect(data.output).toHaveProperty('tamt');
    expect(data.output).toHaveProperty('ordy');
  });

  it('해외주식 종목/지수/환율기간별시세(일/주/월/년)[v1_해외주식-012]', async () => {
    const params = {
      FID_COND_MRKT_DIV_CODE: "N",
      FID_INPUT_ISCD: "DJI",
      FID_INPUT_DATE_1: '20220401',
      FID_INPUT_DATE_2: '20220613',
      FID_PERIOD_DIV_CODE: 'D'
    };

    const { data } = await fetch.request<any>('/uapi/overseas-price/v1/quotations/inquire-daily-chartprice', {
      mode: 'virtual',
      method: 'get',
      headers: {
        authorization: `Bearer ${token}`,
        appkey: process.env.VIRTUAL_APP_KEY ?? '',
        appsecret: process.env.VIRTUAL_APP_SECRET ?? '',
        tr_id: 'HHDFS00000300',
        tr_cont: ''
      },
      params
    });

    expect(data).toHaveProperty('rt_cd');
    expect(data.rt_cd).toBe('1');
    expect(data).toHaveProperty('msg_cd');
    expect(data).toHaveProperty('msg1');
    expect(data).toHaveProperty('output1');
    expect(data.output1).toHaveProperty('ovrs_nmix_prdy_vrss');
    expect(data.output1).toHaveProperty('prdy_vrss_sign');
    expect(data.output1).toHaveProperty('prdy_ctrt');
    expect(data.output1).toHaveProperty('ovrs_nmix_prdy_clpr');
    expect(data.output1).toHaveProperty('acml_vol');
    expect(data.output1).toHaveProperty('hts_kor_isnm');
    expect(data.output1).toHaveProperty('ovrs_nmix_prpr');
    expect(data.output1).toHaveProperty('stck_shrn_iscd');
    expect(data.output1).toHaveProperty('prdy_vol');
    expect(data.output1).toHaveProperty('ovrs_prod_oprc');
    expect(data.output1).toHaveProperty('ovrs_prod_hgpr');
    expect(data.output1).toHaveProperty('ovrs_prod_lwpr');
    expect(data).toHaveProperty('output2');
    expect(data.output2).toBeInstanceOf(Array);
    expect(data.output2[0]).toHaveProperty('stck_bsop_date');
    expect(data.output2[0]).toHaveProperty('ovrs_nmix_prpr');
    expect(data.output2[0]).toHaveProperty('ovrs_nmix_oprc');
    expect(data.output2[0]).toHaveProperty('ovrs_nmix_hgpr');
    expect(data.output2[0]).toHaveProperty('ovrs_nmix_lwpr');
    expect(data.output2[0]).toHaveProperty('acml_vol');
    expect(data.output2[0]).toHaveProperty('mod_yn');
  });
  
  it('해외주식조건검색[v1_해외주식-015]', async () => {
    const params = {
      CO_EN_RATE: '1.1',
      CO_ST_RATE: '1.0',
      CO_YN_RATE: '1',
      EXCD: 'HKS',
      auth: 'D'
    };

    const { data } = await fetch.request<any>('/uapi/overseas-price/v1/quotations/inquire-search', {
      mode: 'virtual',
      method: 'get',
      headers: {
        authorization: `Bearer ${token}`,
        appkey: process.env.VIRTUAL_APP_KEY ?? '',
        appsecret: process.env.VIRTUAL_APP_SECRET ?? '',
        tr_id: 'HHDFS00000300',
        tr_cont: ''
      },
      params
    });

    expect(data).toHaveProperty('output1');
    expect(data.output1).toHaveProperty('nrec');
    expect(data.output1).toHaveProperty('stat');
    expect(data.output1).toHaveProperty('crec');
    expect(data.output1).toHaveProperty('trec');
    expect(data.output1).toHaveProperty('zdiv');
    expect(data).toHaveProperty('output2');
    expect(data.output2).toBeInstanceOf(Array);
    expect(data.output2[0]).toHaveProperty('rsym');
    expect(data.output2[0]).toHaveProperty('valx');
    expect(data.output2[0]).toHaveProperty('last');
    expect(data.output2[0]).toHaveProperty('popen');
    expect(data.output2[0]).toHaveProperty('sign');
    expect(data.output2[0]).toHaveProperty('eps');
    expect(data.output2[0]).toHaveProperty('phigh');
    expect(data.output2[0]).toHaveProperty('tvol');
    expect(data.output2[0]).toHaveProperty('diff');
    expect(data.output2[0]).toHaveProperty('symb');
    expect(data.output2[0]).toHaveProperty('plow');
    expect(data.output2[0]).toHaveProperty('ename');
    expect(data.output2[0]).toHaveProperty('shar');
    expect(data.output2[0]).toHaveProperty('rate');
    expect(data.output2[0]).toHaveProperty('name');
    expect(data.output2[0]).toHaveProperty('rank');
    expect(data.output2[0]).toHaveProperty('excd');
    expect(data.output2[0]).toHaveProperty('per');
    expect(data.output2[0]).toHaveProperty('avol');
    expect(data.output2[0]).toHaveProperty('e_ordyn');
  });

  it('해외결제일자조회', async () => {
    const params = {
      CO_EN_RATE: '1.1',
      CO_ST_RATE: '1.0',
      CO_YN_RATE: '1',
      EXCD: 'HKS',
      auth: 'D'
    };

    const { data } = await fetch.request<any>('/uapi/overseas-price/v1/quotations/inquire-search', {
      mode: 'virtual',
      method: 'get',
      headers: {
        authorization: `Bearer ${token}`,
        appkey: process.env.VIRTUAL_APP_KEY ?? '',
        appsecret: process.env.VIRTUAL_APP_SECRET ?? '',
        tr_id: 'HHDFS00000300',
        tr_cont: ''
      },
      params
    });

    expect(data).toHaveProperty('output1');
    expect(data.output1).toHaveProperty('nrec');
    expect(data.output1).toHaveProperty('stat');
    expect(data.output1).toHaveProperty('crec');
    expect(data.output1).toHaveProperty('trec');
    expect(data.output1).toHaveProperty('zdiv');
    expect(data).toHaveProperty('output2');
    expect(data.output2).toBeInstanceOf(Array);
    expect(data.output2[0]).toHaveProperty('rsym');
    expect(data.output2[0]).toHaveProperty('valx');
    expect(data.output2[0]).toHaveProperty('last');
    expect(data.output2[0]).toHaveProperty('popen');
    expect(data.output2[0]).toHaveProperty('sign');
    expect(data.output2[0]).toHaveProperty('eps');
    expect(data.output2[0]).toHaveProperty('phigh');
    expect(data.output2[0]).toHaveProperty('tvol');
    expect(data.output2[0]).toHaveProperty('diff');
    expect(data.output2[0]).toHaveProperty('symb');
    expect(data.output2[0]).toHaveProperty('plow');
    expect(data.output2[0]).toHaveProperty('ename');
    expect(data.output2[0]).toHaveProperty('shar');
    expect(data.output2[0]).toHaveProperty('rate');
    expect(data.output2[0]).toHaveProperty('name');
    expect(data.output2[0]).toHaveProperty('rank');
    expect(data.output2[0]).toHaveProperty('excd');
    expect(data.output2[0]).toHaveProperty('per');
    expect(data.output2[0]).toHaveProperty('avol');
    expect(data.output2[0]).toHaveProperty('e_ordyn');
  });
});
