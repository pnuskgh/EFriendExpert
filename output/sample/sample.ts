

import { Expose, Transform, Type } from "class-transformer"

export class InquirePrice {
  
  @Expose({ name: "iscd_stat_cls_code" })
  iscdStatClsCode: string;
    
}