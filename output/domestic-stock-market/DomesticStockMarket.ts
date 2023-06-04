import fetch from "node-fetch"
import { HttpClient } from "../../include/HttpClient"
import { InquirePrice } from "./InquirePrice";

export enum FID_COND_MRKT_DIV_CODE {
  J = 'J',
  ETF = 'ETF',
  ETN = 'ETN'
}

export class DomesticStockMarket {
  private readonly _client: HttpClient;

  constructor() {
    this._client = new HttpClient('/uapi/domestic-stock/v1/quotations');
  }

  /**
   * 주식 현재가 시세 API입니다. 실시간 시세를 원하신다면 웹소켓 API를 활용하세요.
   * @param fidCondMrktDivCode J : 주식, ETF, ETN
   * @param fidInputIscd 종목번호 (6자리) ETN의 경우, Q로 시작 (EX. Q500001)
   */
  inquirePrice(fidCondMrktDivCode: FID_COND_MRKT_DIV_CODE, fidInputIscd: string): Promise<InquirePrice> {
    return this._client.get<InquirePrice>(`/inquire-investor?${fidCondMrktDivCode}&${fidInputIscd}`, InquirePrice);
  }
}