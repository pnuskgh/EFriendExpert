import { Expose, Transform, Type } from "class-transformer"
import { typeUtil } from "../../include/TypeUtil";

export class InquirePrice {
  @Expose({ name: "iscd_stat_cls_code" })
  iscdStatClsCode: string;

  @Type(() => Number)
  @Expose({ name: "marg_rate" })
  margRate: number

  @Expose({ name: "rprs_mrkt_kor_name" })
  rprsMrktKorName: string

  @Expose({ name: "bstp_kor_isnm" })
  bstpKorIsnm: string

  @Expose({ name: "temp_stop_yn" })
  @Transform(({ value }) => typeUtil.ynToBoolean(value), { toClassOnly: true })
  tempStop: boolean

  @Expose({ name: "oprc_rang_cont_yn" })
  oprcRangCont: boolean

  @Expose({ name: "clpr_rang_cont_yn" })
  clprRangCont: boolean

  @Expose({ name: "crdt_able_yn" })
  crdtAbleYn: boolean
}