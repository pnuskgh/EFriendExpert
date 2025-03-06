/**
 * LS증권 EBest API용 type
 *     자동 생성되는 소스이니 수정하지 마세요.
 * 
 * @file packages/EFriendExpert/ebset/ebest_api.type.ts
 * @version 0.0.1
 * @license GNU General Public License v3.0
 * @copyright 2017~2025, EFriendExport Community Team
 * @author gye hyun james kim <pnuskgh@gmail.com>
 */


export interface TOKEN_REQUEST_HEADER {
    'content-type'?:  string
}


export interface REVOKE_REQUEST_HEADER {
    'content-type'?:  string
}

export type T1514_REQUEST_HEADER_TR_CONT = 'Y' | 'N';
export interface T1514_REQUEST_HEADER {
    'content-type'?:  string
    authorization?:  string
    tr_cd?:  string
    tr_cont?:  T1514_REQUEST_HEADER_TR_CONT
    tr_cont_key?:  string
    mac_address?:  string
}

export type T8424_REQUEST_HEADER_TR_CONT = 'Y' | 'N';
export interface T8424_REQUEST_HEADER {
    'content-type'?:  string
    authorization?:  string
    tr_cd?:  string
    tr_cont?:  T8424_REQUEST_HEADER_TR_CONT
    tr_cont_key?:  string
    mac_address?:  string
}

export type T1485_REQUEST_HEADER_TR_CONT = 'Y' | 'N';
export interface T1485_REQUEST_HEADER {
    'content-type'?:  string
    authorization?:  string
    tr_cd?:  string
    tr_cont?:  T1485_REQUEST_HEADER_TR_CONT
    tr_cont_key?:  string
    mac_address?:  string
}

export type T1511_REQUEST_HEADER_TR_CONT = 'Y' | 'N';
export interface T1511_REQUEST_HEADER {
    'content-type'?:  string
    authorization?:  string
    tr_cd?:  string
    tr_cont?:  T1511_REQUEST_HEADER_TR_CONT
    tr_cont_key?:  string
    mac_address?:  string
}

export type T1516_REQUEST_HEADER_TR_CONT = 'Y' | 'N';
export interface T1516_REQUEST_HEADER {
    'content-type'?:  string
    authorization?:  string
    tr_cd?:  string
    tr_cont?:  T1516_REQUEST_HEADER_TR_CONT
    tr_cont_key?:  string
    mac_address?:  string
}

export type T4203_REQUEST_HEADER_TR_CONT = 'Y' | 'N';
export interface T4203_REQUEST_HEADER {
    'content-type'?:  string
    authorization?:  string
    tr_cd?:  string
    tr_cont?:  T4203_REQUEST_HEADER_TR_CONT
    tr_cont_key?:  string
    mac_address?:  string
}

export type T8417_REQUEST_HEADER_TR_CONT = 'Y' | 'N';
export interface T8417_REQUEST_HEADER {
    'content-type'?:  string
    authorization?:  string
    tr_cd?:  string
    tr_cont?:  T8417_REQUEST_HEADER_TR_CONT
    tr_cont_key?:  string
    mac_address?:  string
}

export type T8418_REQUEST_HEADER_TR_CONT = 'Y' | 'N';
export interface T8418_REQUEST_HEADER {
    'content-type'?:  string
    authorization?:  string
    tr_cd?:  string
    tr_cont?:  T8418_REQUEST_HEADER_TR_CONT
    tr_cont_key?:  string
    mac_address?:  string
}

export type T8419_REQUEST_HEADER_TR_CONT = 'Y' | 'N';
export interface T8419_REQUEST_HEADER {
    'content-type'?:  string
    authorization?:  string
    tr_cd?:  string
    tr_cont?:  T8419_REQUEST_HEADER_TR_CONT
    tr_cont_key?:  string
    mac_address?:  string
}

export type T1101_REQUEST_HEADER_TR_CONT = 'Y' | 'N';
export interface T1101_REQUEST_HEADER {
    'content-type'?:  string
    authorization?:  string
    tr_cd?:  string
    tr_cont?:  T1101_REQUEST_HEADER_TR_CONT
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

export type T1104_REQUEST_HEADER_TR_CONT = 'Y' | 'N';
export interface T1104_REQUEST_HEADER {
    'content-type'?:  string
    authorization?:  string
    tr_cd?:  string
    tr_cont?:  T1104_REQUEST_HEADER_TR_CONT
    tr_cont_key?:  string
    mac_address?:  string
}

export type T1105_REQUEST_HEADER_TR_CONT = 'Y' | 'N';
export interface T1105_REQUEST_HEADER {
    'content-type'?:  string
    authorization?:  string
    tr_cd?:  string
    tr_cont?:  T1105_REQUEST_HEADER_TR_CONT
    tr_cont_key?:  string
    mac_address?:  string
}

export type T1109_REQUEST_HEADER_TR_CONT = 'Y' | 'N';
export interface T1109_REQUEST_HEADER {
    'content-type'?:  string
    authorization?:  string
    tr_cd?:  string
    tr_cont?:  T1109_REQUEST_HEADER_TR_CONT
    tr_cont_key?:  string
    mac_address?:  string
}

export type T1301_REQUEST_HEADER_TR_CONT = 'Y' | 'N';
export interface T1301_REQUEST_HEADER {
    'content-type'?:  string
    authorization?:  string
    tr_cd?:  string
    tr_cont?:  T1301_REQUEST_HEADER_TR_CONT
    tr_cont_key?:  string
    mac_address?:  string
}

export type T1302_REQUEST_HEADER_TR_CONT = 'Y' | 'N';
export interface T1302_REQUEST_HEADER {
    'content-type'?:  string
    authorization?:  string
    tr_cd?:  string
    tr_cont?:  T1302_REQUEST_HEADER_TR_CONT
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

export type T1308_REQUEST_HEADER_TR_CONT = 'Y' | 'N';
export interface T1308_REQUEST_HEADER {
    'content-type'?:  string
    authorization?:  string
    tr_cd?:  string
    tr_cont?:  T1308_REQUEST_HEADER_TR_CONT
    tr_cont_key?:  string
    mac_address?:  string
}

export type T1310_REQUEST_HEADER_TR_CONT = 'Y' | 'N';
export interface T1310_REQUEST_HEADER {
    'content-type'?:  string
    authorization?:  string
    tr_cd?:  string
    tr_cont?:  T1310_REQUEST_HEADER_TR_CONT
    tr_cont_key?:  string
    mac_address?:  string
}

export type T1404_REQUEST_HEADER_TR_CONT = 'Y' | 'N';
export interface T1404_REQUEST_HEADER {
    'content-type'?:  string
    authorization?:  string
    tr_cd?:  string
    tr_cont?:  T1404_REQUEST_HEADER_TR_CONT
    tr_cont_key?:  string
    mac_address?:  string
}

export type T1405_REQUEST_HEADER_TR_CONT = 'Y' | 'N';
export interface T1405_REQUEST_HEADER {
    'content-type'?:  string
    authorization?:  string
    tr_cd?:  string
    tr_cont?:  T1405_REQUEST_HEADER_TR_CONT
    tr_cont_key?:  string
    mac_address?:  string
}

export type T1410_REQUEST_HEADER_TR_CONT = 'Y' | 'N';
export interface T1410_REQUEST_HEADER {
    'content-type'?:  string
    authorization?:  string
    tr_cd?:  string
    tr_cont?:  T1410_REQUEST_HEADER_TR_CONT
    tr_cont_key?:  string
    mac_address?:  string
}

export type T1422_REQUEST_HEADER_TR_CONT = 'Y' | 'N';
export interface T1422_REQUEST_HEADER {
    'content-type'?:  string
    authorization?:  string
    tr_cd?:  string
    tr_cont?:  T1422_REQUEST_HEADER_TR_CONT
    tr_cont_key?:  string
    mac_address?:  string
}

export type T1427_REQUEST_HEADER_TR_CONT = 'Y' | 'N';
export interface T1427_REQUEST_HEADER {
    'content-type'?:  string
    authorization?:  string
    tr_cd?:  string
    tr_cont?:  T1427_REQUEST_HEADER_TR_CONT
    tr_cont_key?:  string
    mac_address?:  string
}

export type T1442_REQUEST_HEADER_TR_CONT = 'Y' | 'N';
export interface T1442_REQUEST_HEADER {
    'content-type'?:  string
    authorization?:  string
    tr_cd?:  string
    tr_cont?:  T1442_REQUEST_HEADER_TR_CONT
    tr_cont_key?:  string
    mac_address?:  string
}

export type T1449_REQUEST_HEADER_TR_CONT = 'Y' | 'N';
export interface T1449_REQUEST_HEADER {
    'content-type'?:  string
    authorization?:  string
    tr_cd?:  string
    tr_cont?:  T1449_REQUEST_HEADER_TR_CONT
    tr_cont_key?:  string
    mac_address?:  string
}

export type T1471_REQUEST_HEADER_TR_CONT = 'Y' | 'N';
export interface T1471_REQUEST_HEADER {
    'content-type'?:  string
    authorization?:  string
    tr_cd?:  string
    tr_cont?:  T1471_REQUEST_HEADER_TR_CONT
    tr_cont_key?:  string
    mac_address?:  string
}

export type T1475_REQUEST_HEADER_TR_CONT = 'Y' | 'N';
export interface T1475_REQUEST_HEADER {
    'content-type'?:  string
    authorization?:  string
    tr_cd?:  string
    tr_cont?:  T1475_REQUEST_HEADER_TR_CONT
    tr_cont_key?:  string
    mac_address?:  string
}

export type T1486_REQUEST_HEADER_TR_CONT = 'Y' | 'N';
export interface T1486_REQUEST_HEADER {
    'content-type'?:  string
    authorization?:  string
    tr_cd?:  string
    tr_cont?:  T1486_REQUEST_HEADER_TR_CONT
    tr_cont_key?:  string
    mac_address?:  string
}

export type T1488_REQUEST_HEADER_TR_CONT = 'Y' | 'N';
export interface T1488_REQUEST_HEADER {
    'content-type'?:  string
    authorization?:  string
    tr_cd?:  string
    tr_cont?:  T1488_REQUEST_HEADER_TR_CONT
    tr_cont_key?:  string
    mac_address?:  string
}

export type T8407_REQUEST_HEADER_TR_CONT = 'Y' | 'N';
export interface T8407_REQUEST_HEADER {
    'content-type'?:  string
    authorization?:  string
    tr_cd?:  string
    tr_cont?:  T8407_REQUEST_HEADER_TR_CONT
    tr_cont_key?:  string
    mac_address?:  string
}

export type T9945_REQUEST_HEADER_TR_CONT = 'Y' | 'N';
export interface T9945_REQUEST_HEADER {
    'content-type'?:  string
    authorization?:  string
    tr_cd?:  string
    tr_cont?:  T9945_REQUEST_HEADER_TR_CONT
    tr_cont_key?:  string
    mac_address?:  string
}

export type T1752_REQUEST_HEADER_TR_CONT = 'Y' | 'N';
export interface T1752_REQUEST_HEADER {
    'content-type'?:  string
    authorization?:  string
    tr_cd?:  string
    tr_cont?:  T1752_REQUEST_HEADER_TR_CONT
    tr_cont_key?:  string
    mac_address?:  string
}

export type T1764_REQUEST_HEADER_TR_CONT = 'Y' | 'N';
export interface T1764_REQUEST_HEADER {
    'content-type'?:  string
    authorization?:  string
    tr_cd?:  string
    tr_cont?:  T1764_REQUEST_HEADER_TR_CONT
    tr_cont_key?:  string
    mac_address?:  string
}

export type T1771_REQUEST_HEADER_TR_CONT = 'Y' | 'N';
export interface T1771_REQUEST_HEADER {
    'content-type'?:  string
    authorization?:  string
    tr_cd?:  string
    tr_cont?:  T1771_REQUEST_HEADER_TR_CONT
    tr_cont_key?:  string
    mac_address?:  string
}

export type T3102_REQUEST_HEADER_TR_CONT = 'Y' | 'N';
export interface T3102_REQUEST_HEADER {
    'content-type'?:  string
    authorization?:  string
    tr_cd?:  string
    tr_cont?:  T3102_REQUEST_HEADER_TR_CONT
    tr_cont_key?:  string
    mac_address?:  string
}

export type T3202_REQUEST_HEADER_TR_CONT = 'Y' | 'N';
export interface T3202_REQUEST_HEADER {
    'content-type'?:  string
    authorization?:  string
    tr_cd?:  string
    tr_cont?:  T3202_REQUEST_HEADER_TR_CONT
    tr_cont_key?:  string
    mac_address?:  string
}

export type T3320_REQUEST_HEADER_TR_CONT = 'Y' | 'N';
export interface T3320_REQUEST_HEADER {
    'content-type'?:  string
    authorization?:  string
    tr_cd?:  string
    tr_cont?:  T3320_REQUEST_HEADER_TR_CONT
    tr_cont_key?:  string
    mac_address?:  string
}

export type T3341_REQUEST_HEADER_TR_CONT = 'Y' | 'N';
export interface T3341_REQUEST_HEADER {
    'content-type'?:  string
    authorization?:  string
    tr_cd?:  string
    tr_cont?:  T3341_REQUEST_HEADER_TR_CONT
    tr_cont_key?:  string
    mac_address?:  string
}

export type T3401_REQUEST_HEADER_TR_CONT = 'Y' | 'N';
export interface T3401_REQUEST_HEADER {
    'content-type'?:  string
    authorization?:  string
    tr_cd?:  string
    tr_cont?:  T3401_REQUEST_HEADER_TR_CONT
    tr_cont_key?:  string
    mac_address?:  string
}

export type T3518_REQUEST_HEADER_TR_CONT = 'Y' | 'N';
export interface T3518_REQUEST_HEADER {
    'content-type'?:  string
    authorization?:  string
    tr_cd?:  string
    tr_cont?:  T3518_REQUEST_HEADER_TR_CONT
    tr_cont_key?:  string
    mac_address?:  string
}

export type T3521_REQUEST_HEADER_TR_CONT = 'Y' | 'N';
export interface T3521_REQUEST_HEADER {
    'content-type'?:  string
    authorization?:  string
    tr_cd?:  string
    tr_cont?:  T3521_REQUEST_HEADER_TR_CONT
    tr_cont_key?:  string
    mac_address?:  string
}

export type T8428_REQUEST_HEADER_TR_CONT = 'Y' | 'N';
export interface T8428_REQUEST_HEADER {
    'content-type'?:  string
    authorization?:  string
    tr_cd?:  string
    tr_cont?:  T8428_REQUEST_HEADER_TR_CONT
    tr_cont_key?:  string
    mac_address?:  string
}

export type T1631_REQUEST_HEADER_TR_CONT = 'Y' | 'N';
export interface T1631_REQUEST_HEADER {
    'content-type'?:  string
    authorization?:  string
    tr_cd?:  string
    tr_cont?:  T1631_REQUEST_HEADER_TR_CONT
    tr_cont_key?:  string
    mac_address?:  string
}

export type T1632_REQUEST_HEADER_TR_CONT = 'Y' | 'N';
export interface T1632_REQUEST_HEADER {
    'content-type'?:  string
    authorization?:  string
    tr_cd?:  string
    tr_cont?:  T1632_REQUEST_HEADER_TR_CONT
    tr_cont_key?:  string
    mac_address?:  string
}

export type T1633_REQUEST_HEADER_TR_CONT = 'Y' | 'N';
export interface T1633_REQUEST_HEADER {
    'content-type'?:  string
    authorization?:  string
    tr_cd?:  string
    tr_cont?:  T1633_REQUEST_HEADER_TR_CONT
    tr_cont_key?:  string
    mac_address?:  string
}

export type T1636_REQUEST_HEADER_TR_CONT = 'Y' | 'N';
export interface T1636_REQUEST_HEADER {
    'content-type'?:  string
    authorization?:  string
    tr_cd?:  string
    tr_cont?:  T1636_REQUEST_HEADER_TR_CONT
    tr_cont_key?:  string
    mac_address?:  string
}

export type T1637_REQUEST_HEADER_TR_CONT = 'Y' | 'N';
export interface T1637_REQUEST_HEADER {
    'content-type'?:  string
    authorization?:  string
    tr_cd?:  string
    tr_cont?:  T1637_REQUEST_HEADER_TR_CONT
    tr_cont_key?:  string
    mac_address?:  string
}

export type T1640_REQUEST_HEADER_TR_CONT = 'Y' | 'N';
export interface T1640_REQUEST_HEADER {
    'content-type'?:  string
    authorization?:  string
    tr_cd?:  string
    tr_cont?:  T1640_REQUEST_HEADER_TR_CONT
    tr_cont_key?:  string
    mac_address?:  string
}

export type T1662_REQUEST_HEADER_TR_CONT = 'Y' | 'N';
export interface T1662_REQUEST_HEADER {
    'content-type'?:  string
    authorization?:  string
    tr_cd?:  string
    tr_cont?:  T1662_REQUEST_HEADER_TR_CONT
    tr_cont_key?:  string
    mac_address?:  string
}

export type T1601_REQUEST_HEADER_TR_CONT = 'Y' | 'N';
export interface T1601_REQUEST_HEADER {
    'content-type'?:  string
    authorization?:  string
    tr_cd?:  string
    tr_cont?:  T1601_REQUEST_HEADER_TR_CONT
    tr_cont_key?:  string
    mac_address?:  string
}

export type T1602_REQUEST_HEADER_TR_CONT = 'Y' | 'N';
export interface T1602_REQUEST_HEADER {
    'content-type'?:  string
    authorization?:  string
    tr_cd?:  string
    tr_cont?:  T1602_REQUEST_HEADER_TR_CONT
    tr_cont_key?:  string
    mac_address?:  string
}

export type T1603_REQUEST_HEADER_TR_CONT = 'Y' | 'N';
export interface T1603_REQUEST_HEADER {
    'content-type'?:  string
    authorization?:  string
    tr_cd?:  string
    tr_cont?:  T1603_REQUEST_HEADER_TR_CONT
    tr_cont_key?:  string
    mac_address?:  string
}

export type T1615_REQUEST_HEADER_TR_CONT = 'Y' | 'N';
export interface T1615_REQUEST_HEADER {
    'content-type'?:  string
    authorization?:  string
    tr_cd?:  string
    tr_cont?:  T1615_REQUEST_HEADER_TR_CONT
    tr_cont_key?:  string
    mac_address?:  string
}

export type T1617_REQUEST_HEADER_TR_CONT = 'Y' | 'N';
export interface T1617_REQUEST_HEADER {
    'content-type'?:  string
    authorization?:  string
    tr_cd?:  string
    tr_cont?:  T1617_REQUEST_HEADER_TR_CONT
    tr_cont_key?:  string
    mac_address?:  string
}

export type T1621_REQUEST_HEADER_TR_CONT = 'Y' | 'N';
export interface T1621_REQUEST_HEADER {
    'content-type'?:  string
    authorization?:  string
    tr_cd?:  string
    tr_cont?:  T1621_REQUEST_HEADER_TR_CONT
    tr_cont_key?:  string
    mac_address?:  string
}

export type T1664_REQUEST_HEADER_TR_CONT = 'Y' | 'N';
export interface T1664_REQUEST_HEADER {
    'content-type'?:  string
    authorization?:  string
    tr_cd?:  string
    tr_cont?:  T1664_REQUEST_HEADER_TR_CONT
    tr_cont_key?:  string
    mac_address?:  string
}

export type T1702_REQUEST_HEADER_TR_CONT = 'Y' | 'N';
export interface T1702_REQUEST_HEADER {
    'content-type'?:  string
    authorization?:  string
    tr_cd?:  string
    tr_cont?:  T1702_REQUEST_HEADER_TR_CONT
    tr_cont_key?:  string
    mac_address?:  string
}

export type T1716_REQUEST_HEADER_TR_CONT = 'Y' | 'N';
export interface T1716_REQUEST_HEADER {
    'content-type'?:  string
    authorization?:  string
    tr_cd?:  string
    tr_cont?:  T1716_REQUEST_HEADER_TR_CONT
    tr_cont_key?:  string
    mac_address?:  string
}

export type T1717_REQUEST_HEADER_TR_CONT = 'Y' | 'N';
export interface T1717_REQUEST_HEADER {
    'content-type'?:  string
    authorization?:  string
    tr_cd?:  string
    tr_cont?:  T1717_REQUEST_HEADER_TR_CONT
    tr_cont_key?:  string
    mac_address?:  string
}

export type T1950_REQUEST_HEADER_TR_CONT = 'Y' | 'N';
export interface T1950_REQUEST_HEADER {
    'content-type'?:  string
    authorization?:  string
    tr_cd?:  string
    tr_cont?:  T1950_REQUEST_HEADER_TR_CONT
    tr_cont_key?:  string
    mac_address?:  string
}

export type T1951_REQUEST_HEADER_TR_CONT = 'Y' | 'N';
export interface T1951_REQUEST_HEADER {
    'content-type'?:  string
    authorization?:  string
    tr_cd?:  string
    tr_cont?:  T1951_REQUEST_HEADER_TR_CONT
    tr_cont_key?:  string
    mac_address?:  string
}

export type T1954_REQUEST_HEADER_TR_CONT = 'Y' | 'N';
export interface T1954_REQUEST_HEADER {
    'content-type'?:  string
    authorization?:  string
    tr_cd?:  string
    tr_cont?:  T1954_REQUEST_HEADER_TR_CONT
    tr_cont_key?:  string
    mac_address?:  string
}

export type T1956_REQUEST_HEADER_TR_CONT = 'Y' | 'N';
export interface T1956_REQUEST_HEADER {
    'content-type'?:  string
    authorization?:  string
    tr_cd?:  string
    tr_cont?:  T1956_REQUEST_HEADER_TR_CONT
    tr_cont_key?:  string
    mac_address?:  string
}

export type T1958_REQUEST_HEADER_TR_CONT = 'Y' | 'N';
export interface T1958_REQUEST_HEADER {
    'content-type'?:  string
    authorization?:  string
    tr_cd?:  string
    tr_cont?:  T1958_REQUEST_HEADER_TR_CONT
    tr_cont_key?:  string
    mac_address?:  string
}

export type T1959_REQUEST_HEADER_TR_CONT = 'Y' | 'N';
export interface T1959_REQUEST_HEADER {
    'content-type'?:  string
    authorization?:  string
    tr_cd?:  string
    tr_cont?:  T1959_REQUEST_HEADER_TR_CONT
    tr_cont_key?:  string
    mac_address?:  string
}

export type T1960_REQUEST_HEADER_TR_CONT = 'Y' | 'N';
export interface T1960_REQUEST_HEADER {
    'content-type'?:  string
    authorization?:  string
    tr_cd?:  string
    tr_cont?:  T1960_REQUEST_HEADER_TR_CONT
    tr_cont_key?:  string
    mac_address?:  string
}

export type T1961_REQUEST_HEADER_TR_CONT = 'Y' | 'N';
export interface T1961_REQUEST_HEADER {
    'content-type'?:  string
    authorization?:  string
    tr_cd?:  string
    tr_cont?:  T1961_REQUEST_HEADER_TR_CONT
    tr_cont_key?:  string
    mac_address?:  string
}

export type T1964_REQUEST_HEADER_TR_CONT = 'Y' | 'N';
export interface T1964_REQUEST_HEADER {
    'content-type'?:  string
    authorization?:  string
    tr_cd?:  string
    tr_cont?:  T1964_REQUEST_HEADER_TR_CONT
    tr_cont_key?:  string
    mac_address?:  string
}

export type T1966_REQUEST_HEADER_TR_CONT = 'Y' | 'N';
export interface T1966_REQUEST_HEADER {
    'content-type'?:  string
    authorization?:  string
    tr_cd?:  string
    tr_cont?:  T1966_REQUEST_HEADER_TR_CONT
    tr_cont_key?:  string
    mac_address?:  string
}

export type T1969_REQUEST_HEADER_TR_CONT = 'Y' | 'N';
export interface T1969_REQUEST_HEADER {
    'content-type'?:  string
    authorization?:  string
    tr_cd?:  string
    tr_cont?:  T1969_REQUEST_HEADER_TR_CONT
    tr_cont_key?:  string
    mac_address?:  string
}

export type T1971_REQUEST_HEADER_TR_CONT = 'Y' | 'N';
export interface T1971_REQUEST_HEADER {
    'content-type'?:  string
    authorization?:  string
    tr_cd?:  string
    tr_cont?:  T1971_REQUEST_HEADER_TR_CONT
    tr_cont_key?:  string
    mac_address?:  string
}

export type T1972_REQUEST_HEADER_TR_CONT = 'Y' | 'N';
export interface T1972_REQUEST_HEADER {
    'content-type'?:  string
    authorization?:  string
    tr_cd?:  string
    tr_cont?:  T1972_REQUEST_HEADER_TR_CONT
    tr_cont_key?:  string
    mac_address?:  string
}

export type T1973_REQUEST_HEADER_TR_CONT = 'Y' | 'N';
export interface T1973_REQUEST_HEADER {
    'content-type'?:  string
    authorization?:  string
    tr_cd?:  string
    tr_cont?:  T1973_REQUEST_HEADER_TR_CONT
    tr_cont_key?:  string
    mac_address?:  string
}

export type T1974_REQUEST_HEADER_TR_CONT = 'Y' | 'N';
export interface T1974_REQUEST_HEADER {
    'content-type'?:  string
    authorization?:  string
    tr_cd?:  string
    tr_cont?:  T1974_REQUEST_HEADER_TR_CONT
    tr_cont_key?:  string
    mac_address?:  string
}

export type T1988_REQUEST_HEADER_TR_CONT = 'Y' | 'N';
export interface T1988_REQUEST_HEADER {
    'content-type'?:  string
    authorization?:  string
    tr_cd?:  string
    tr_cont?:  T1988_REQUEST_HEADER_TR_CONT
    tr_cont_key?:  string
    mac_address?:  string
}

export type T8431_REQUEST_HEADER_TR_CONT = 'Y' | 'N';
export interface T8431_REQUEST_HEADER {
    'content-type'?:  string
    authorization?:  string
    tr_cd?:  string
    tr_cont?:  T8431_REQUEST_HEADER_TR_CONT
    tr_cont_key?:  string
    mac_address?:  string
}

export type T9905_REQUEST_HEADER_TR_CONT = 'Y' | 'N';
export interface T9905_REQUEST_HEADER {
    'content-type'?:  string
    authorization?:  string
    tr_cd?:  string
    tr_cont?:  T9905_REQUEST_HEADER_TR_CONT
    tr_cont_key?:  string
    mac_address?:  string
}

export type T9907_REQUEST_HEADER_TR_CONT = 'Y' | 'N';
export interface T9907_REQUEST_HEADER {
    'content-type'?:  string
    authorization?:  string
    tr_cd?:  string
    tr_cont?:  T9907_REQUEST_HEADER_TR_CONT
    tr_cont_key?:  string
    mac_address?:  string
}

export type T9942_REQUEST_HEADER_TR_CONT = 'Y' | 'N';
export interface T9942_REQUEST_HEADER {
    'content-type'?:  string
    authorization?:  string
    tr_cd?:  string
    tr_cont?:  T9942_REQUEST_HEADER_TR_CONT
    tr_cont_key?:  string
    mac_address?:  string
}

export type T1901_REQUEST_HEADER_TR_CONT = 'Y' | 'N';
export interface T1901_REQUEST_HEADER {
    'content-type'?:  string
    authorization?:  string
    tr_cd?:  string
    tr_cont?:  T1901_REQUEST_HEADER_TR_CONT
    tr_cont_key?:  string
    mac_address?:  string
}

export type T1902_REQUEST_HEADER_TR_CONT = 'Y' | 'N';
export interface T1902_REQUEST_HEADER {
    'content-type'?:  string
    authorization?:  string
    tr_cd?:  string
    tr_cont?:  T1902_REQUEST_HEADER_TR_CONT
    tr_cont_key?:  string
    mac_address?:  string
}

export type T1903_REQUEST_HEADER_TR_CONT = 'Y' | 'N';
export interface T1903_REQUEST_HEADER {
    'content-type'?:  string
    authorization?:  string
    tr_cd?:  string
    tr_cont?:  T1903_REQUEST_HEADER_TR_CONT
    tr_cont_key?:  string
    mac_address?:  string
}

export type T1904_REQUEST_HEADER_TR_CONT = 'Y' | 'N';
export interface T1904_REQUEST_HEADER {
    'content-type'?:  string
    authorization?:  string
    tr_cd?:  string
    tr_cont?:  T1904_REQUEST_HEADER_TR_CONT
    tr_cont_key?:  string
    mac_address?:  string
}

export type T1906_REQUEST_HEADER_TR_CONT = 'Y' | 'N';
export interface T1906_REQUEST_HEADER {
    'content-type'?:  string
    authorization?:  string
    tr_cd?:  string
    tr_cont?:  T1906_REQUEST_HEADER_TR_CONT
    tr_cont_key?:  string
    mac_address?:  string
}

export type T1531_REQUEST_HEADER_TR_CONT = 'Y' | 'N';
export interface T1531_REQUEST_HEADER {
    'content-type'?:  string
    authorization?:  string
    tr_cd?:  string
    tr_cont?:  T1531_REQUEST_HEADER_TR_CONT
    tr_cont_key?:  string
    mac_address?:  string
}

export type T1532_REQUEST_HEADER_TR_CONT = 'Y' | 'N';
export interface T1532_REQUEST_HEADER {
    'content-type'?:  string
    authorization?:  string
    tr_cd?:  string
    tr_cont?:  T1532_REQUEST_HEADER_TR_CONT
    tr_cont_key?:  string
    mac_address?:  string
}

export type T1533_REQUEST_HEADER_TR_CONT = 'Y' | 'N';
export interface T1533_REQUEST_HEADER {
    'content-type'?:  string
    authorization?:  string
    tr_cd?:  string
    tr_cont?:  T1533_REQUEST_HEADER_TR_CONT
    tr_cont_key?:  string
    mac_address?:  string
}

export type T1537_REQUEST_HEADER_TR_CONT = 'Y' | 'N';
export interface T1537_REQUEST_HEADER {
    'content-type'?:  string
    authorization?:  string
    tr_cd?:  string
    tr_cont?:  T1537_REQUEST_HEADER_TR_CONT
    tr_cont_key?:  string
    mac_address?:  string
}

export type T8425_REQUEST_HEADER_TR_CONT = 'Y' | 'N';
export interface T8425_REQUEST_HEADER {
    'content-type'?:  string
    authorization?:  string
    tr_cd?:  string
    tr_cont?:  T8425_REQUEST_HEADER_TR_CONT
    tr_cont_key?:  string
    mac_address?:  string
}

export type T1809_REQUEST_HEADER_TR_CONT = 'Y' | 'N';
export interface T1809_REQUEST_HEADER {
    'content-type'?:  string
    authorization?:  string
    tr_cd?:  string
    tr_cont?:  T1809_REQUEST_HEADER_TR_CONT
    tr_cont_key?:  string
    mac_address?:  string
}

export type T1825_REQUEST_HEADER_TR_CONT = 'Y' | 'N';
export interface T1825_REQUEST_HEADER {
    'content-type'?:  string
    authorization?:  string
    tr_cd?:  string
    tr_cont?:  T1825_REQUEST_HEADER_TR_CONT
    tr_cont_key?:  string
    mac_address?:  string
}

export type T1826_REQUEST_HEADER_TR_CONT = 'Y' | 'N';
export interface T1826_REQUEST_HEADER {
    'content-type'?:  string
    authorization?:  string
    tr_cd?:  string
    tr_cont?:  T1826_REQUEST_HEADER_TR_CONT
    tr_cont_key?:  string
    mac_address?:  string
}

export type T1866_REQUEST_HEADER_TR_CONT = 'Y' | 'N';
export interface T1866_REQUEST_HEADER {
    'content-type'?:  string
    authorization?:  string
    tr_cd?:  string
    tr_cont?:  T1866_REQUEST_HEADER_TR_CONT
    tr_cont_key?:  string
    mac_address?:  string
}

export type T1859_REQUEST_HEADER_TR_CONT = 'Y' | 'N';
export interface T1859_REQUEST_HEADER {
    'content-type'?:  string
    authorization?:  string
    tr_cd?:  string
    tr_cont?:  T1859_REQUEST_HEADER_TR_CONT
    tr_cont_key?:  string
    mac_address?:  string
}

export type T1860_REQUEST_HEADER_TR_CONT = 'Y' | 'N';
export interface T1860_REQUEST_HEADER {
    'content-type'?:  string
    authorization?:  string
    tr_cd?:  string
    tr_cont?:  T1860_REQUEST_HEADER_TR_CONT
    tr_cont_key?:  string
    mac_address?:  string
}

export type T1441_REQUEST_HEADER_TR_CONT = 'Y' | 'N';
export interface T1441_REQUEST_HEADER {
    'content-type'?:  string
    authorization?:  string
    tr_cd?:  string
    tr_cont?:  T1441_REQUEST_HEADER_TR_CONT
    tr_cont_key?:  string
    mac_address?:  string
}

export type T1444_REQUEST_HEADER_TR_CONT = 'Y' | 'N';
export interface T1444_REQUEST_HEADER {
    'content-type'?:  string
    authorization?:  string
    tr_cd?:  string
    tr_cont?:  T1444_REQUEST_HEADER_TR_CONT
    tr_cont_key?:  string
    mac_address?:  string
}

export type T1452_REQUEST_HEADER_TR_CONT = 'Y' | 'N';
export interface T1452_REQUEST_HEADER {
    'content-type'?:  string
    authorization?:  string
    tr_cd?:  string
    tr_cont?:  T1452_REQUEST_HEADER_TR_CONT
    tr_cont_key?:  string
    mac_address?:  string
}

export type T1463_REQUEST_HEADER_TR_CONT = 'Y' | 'N';
export interface T1463_REQUEST_HEADER {
    'content-type'?:  string
    authorization?:  string
    tr_cd?:  string
    tr_cont?:  T1463_REQUEST_HEADER_TR_CONT
    tr_cont_key?:  string
    mac_address?:  string
}

export type T1466_REQUEST_HEADER_TR_CONT = 'Y' | 'N';
export interface T1466_REQUEST_HEADER {
    'content-type'?:  string
    authorization?:  string
    tr_cd?:  string
    tr_cont?:  T1466_REQUEST_HEADER_TR_CONT
    tr_cont_key?:  string
    mac_address?:  string
}

export type T1481_REQUEST_HEADER_TR_CONT = 'Y' | 'N';
export interface T1481_REQUEST_HEADER {
    'content-type'?:  string
    authorization?:  string
    tr_cd?:  string
    tr_cont?:  T1481_REQUEST_HEADER_TR_CONT
    tr_cont_key?:  string
    mac_address?:  string
}

export type T1482_REQUEST_HEADER_TR_CONT = 'Y' | 'N';
export interface T1482_REQUEST_HEADER {
    'content-type'?:  string
    authorization?:  string
    tr_cd?:  string
    tr_cont?:  T1482_REQUEST_HEADER_TR_CONT
    tr_cont_key?:  string
    mac_address?:  string
}

export type T1489_REQUEST_HEADER_TR_CONT = 'Y' | 'N';
export interface T1489_REQUEST_HEADER {
    'content-type'?:  string
    authorization?:  string
    tr_cd?:  string
    tr_cont?:  T1489_REQUEST_HEADER_TR_CONT
    tr_cont_key?:  string
    mac_address?:  string
}

export type T1492_REQUEST_HEADER_TR_CONT = 'Y' | 'N';
export interface T1492_REQUEST_HEADER {
    'content-type'?:  string
    authorization?:  string
    tr_cd?:  string
    tr_cont?:  T1492_REQUEST_HEADER_TR_CONT
    tr_cont_key?:  string
    mac_address?:  string
}

export type T1665_REQUEST_HEADER_TR_CONT = 'Y' | 'N';
export interface T1665_REQUEST_HEADER {
    'content-type'?:  string
    authorization?:  string
    tr_cd?:  string
    tr_cont?:  T1665_REQUEST_HEADER_TR_CONT
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

export type T8411_REQUEST_HEADER_TR_CONT = 'Y' | 'N';
export interface T8411_REQUEST_HEADER {
    'content-type'?:  string
    authorization?:  string
    tr_cd?:  string
    tr_cont?:  T8411_REQUEST_HEADER_TR_CONT
    tr_cont_key?:  string
    mac_address?:  string
}

export type T8412_REQUEST_HEADER_TR_CONT = 'Y' | 'N';
export interface T8412_REQUEST_HEADER {
    'content-type'?:  string
    authorization?:  string
    tr_cd?:  string
    tr_cont?:  T8412_REQUEST_HEADER_TR_CONT
    tr_cont_key?:  string
    mac_address?:  string
}

export type CLNAQ00100_REQUEST_HEADER_TR_CONT = 'Y' | 'N';
export interface CLNAQ00100_REQUEST_HEADER {
    'content-type'?:  string
    authorization?:  string
    tr_cd?:  string
    tr_cont?:  CLNAQ00100_REQUEST_HEADER_TR_CONT
    tr_cont_key?:  string
    mac_address?:  string
}

export type T1403_REQUEST_HEADER_TR_CONT = 'Y' | 'N';
export interface T1403_REQUEST_HEADER {
    'content-type'?:  string
    authorization?:  string
    tr_cd?:  string
    tr_cont?:  T1403_REQUEST_HEADER_TR_CONT
    tr_cont_key?:  string
    mac_address?:  string
}

export type T1411_REQUEST_HEADER_TR_CONT = 'Y' | 'N';
export interface T1411_REQUEST_HEADER {
    'content-type'?:  string
    authorization?:  string
    tr_cd?:  string
    tr_cont?:  T1411_REQUEST_HEADER_TR_CONT
    tr_cont_key?:  string
    mac_address?:  string
}

export type T1638_REQUEST_HEADER_TR_CONT = 'Y' | 'N';
export interface T1638_REQUEST_HEADER {
    'content-type'?:  string
    authorization?:  string
    tr_cd?:  string
    tr_cont?:  T1638_REQUEST_HEADER_TR_CONT
    tr_cont_key?:  string
    mac_address?:  string
}

export type T1921_REQUEST_HEADER_TR_CONT = 'Y' | 'N';
export interface T1921_REQUEST_HEADER {
    'content-type'?:  string
    authorization?:  string
    tr_cd?:  string
    tr_cont?:  T1921_REQUEST_HEADER_TR_CONT
    tr_cont_key?:  string
    mac_address?:  string
}

export type T1926_REQUEST_HEADER_TR_CONT = 'Y' | 'N';
export interface T1926_REQUEST_HEADER {
    'content-type'?:  string
    authorization?:  string
    tr_cd?:  string
    tr_cont?:  T1926_REQUEST_HEADER_TR_CONT
    tr_cont_key?:  string
    mac_address?:  string
}

export type T1927_REQUEST_HEADER_TR_CONT = 'Y' | 'N';
export interface T1927_REQUEST_HEADER {
    'content-type'?:  string
    authorization?:  string
    tr_cd?:  string
    tr_cont?:  T1927_REQUEST_HEADER_TR_CONT
    tr_cont_key?:  string
    mac_address?:  string
}

export type T1941_REQUEST_HEADER_TR_CONT = 'Y' | 'N';
export interface T1941_REQUEST_HEADER {
    'content-type'?:  string
    authorization?:  string
    tr_cd?:  string
    tr_cont?:  T1941_REQUEST_HEADER_TR_CONT
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

export type CDPCQ04700_REQUEST_HEADER_TR_CONT = 'Y' | 'N';
export interface CDPCQ04700_REQUEST_HEADER {
    'content-type'?:  string
    authorization?:  string
    tr_cd?:  string
    tr_cont?:  CDPCQ04700_REQUEST_HEADER_TR_CONT
    tr_cont_key?:  string
    mac_address?:  string
}

export type CSPAQ00600_REQUEST_HEADER_TR_CONT = 'Y' | 'N';
export interface CSPAQ00600_REQUEST_HEADER {
    'content-type'?:  string
    authorization?:  string
    tr_cd?:  string
    tr_cont?:  CSPAQ00600_REQUEST_HEADER_TR_CONT
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

export type CSPAQ12300_REQUEST_HEADER_TR_CONT = 'Y' | 'N';
export interface CSPAQ12300_REQUEST_HEADER {
    'content-type'?:  string
    authorization?:  string
    tr_cd?:  string
    tr_cont?:  CSPAQ12300_REQUEST_HEADER_TR_CONT
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

export type CSPAQ22200_REQUEST_HEADER_TR_CONT = 'Y' | 'N';
export interface CSPAQ22200_REQUEST_HEADER {
    'content-type'?:  string
    authorization?:  string
    tr_cd?:  string
    tr_cont?:  CSPAQ22200_REQUEST_HEADER_TR_CONT
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

export type FOCCQ33600_REQUEST_HEADER_TR_CONT = 'Y' | 'N';
export interface FOCCQ33600_REQUEST_HEADER {
    'content-type'?:  string
    authorization?:  string
    tr_cd?:  string
    tr_cont?:  FOCCQ33600_REQUEST_HEADER_TR_CONT
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

export type T0151_REQUEST_HEADER_TR_CONT = 'Y' | 'N';
export interface T0151_REQUEST_HEADER {
    'content-type'?:  string
    authorization?:  string
    tr_cd?:  string
    tr_cont?:  T0151_REQUEST_HEADER_TR_CONT
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
    'content-type'?:  string
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

export type T2101_REQUEST_HEADER_TR_CONT = 'Y' | 'N';
export interface T2101_REQUEST_HEADER {
    'content-type'?:  string
    authorization?:  string
    tr_cd?:  string
    tr_cont?:  T2101_REQUEST_HEADER_TR_CONT
    tr_cont_key?:  string
    mac_address?:  string
}

export type T2105_REQUEST_HEADER_TR_CONT = 'Y' | 'N';
export interface T2105_REQUEST_HEADER {
    'content-type'?:  string
    authorization?:  string
    tr_cd?:  string
    tr_cont?:  T2105_REQUEST_HEADER_TR_CONT
    tr_cont_key?:  string
    mac_address?:  string
}

export type T2106_REQUEST_HEADER_TR_CONT = 'Y' | 'N';
export interface T2106_REQUEST_HEADER {
    'content-type'?:  string
    authorization?:  string
    tr_cd?:  string
    tr_cont?:  T2106_REQUEST_HEADER_TR_CONT
    tr_cont_key?:  string
    mac_address?:  string
}

export type T2201_REQUEST_HEADER_TR_CONT = 'Y' | 'N';
export interface T2201_REQUEST_HEADER {
    'content-type'?:  string
    authorization?:  string
    tr_cd?:  string
    tr_cont?:  T2201_REQUEST_HEADER_TR_CONT
    tr_cont_key?:  string
    mac_address?:  string
}

export type T2203_REQUEST_HEADER_TR_CONT = 'Y' | 'N';
export interface T2203_REQUEST_HEADER {
    'content-type'?:  string
    authorization?:  string
    tr_cd?:  string
    tr_cont?:  T2203_REQUEST_HEADER_TR_CONT
    tr_cont_key?:  string
    mac_address?:  string
}

export type T2210_REQUEST_HEADER_TR_CONT = 'Y' | 'N';
export interface T2210_REQUEST_HEADER {
    'content-type'?:  string
    authorization?:  string
    tr_cd?:  string
    tr_cont?:  T2210_REQUEST_HEADER_TR_CONT
    tr_cont_key?:  string
    mac_address?:  string
}

export type T2301_REQUEST_HEADER_TR_CONT = 'Y' | 'N';
export interface T2301_REQUEST_HEADER {
    'content-type'?:  string
    authorization?:  string
    tr_cd?:  string
    tr_cont?:  T2301_REQUEST_HEADER_TR_CONT
    tr_cont_key?:  string
    mac_address?:  string
}

export type T2405_REQUEST_HEADER_TR_CONT = 'Y' | 'N';
export interface T2405_REQUEST_HEADER {
    'content-type'?:  string
    authorization?:  string
    tr_cd?:  string
    tr_cont?:  T2405_REQUEST_HEADER_TR_CONT
    tr_cont_key?:  string
    mac_address?:  string
}

export type T2421_REQUEST_HEADER_TR_CONT = 'Y' | 'N';
export interface T2421_REQUEST_HEADER {
    'content-type'?:  string
    authorization?:  string
    tr_cd?:  string
    tr_cont?:  T2421_REQUEST_HEADER_TR_CONT
    tr_cont_key?:  string
    mac_address?:  string
}

export type T2830_REQUEST_HEADER_TR_CONT = 'Y' | 'N';
export interface T2830_REQUEST_HEADER {
    'content-type'?:  string
    authorization?:  string
    tr_cd?:  string
    tr_cont?:  T2830_REQUEST_HEADER_TR_CONT
    tr_cont_key?:  string
    mac_address?:  string
}

export type T2831_REQUEST_HEADER_TR_CONT = 'Y' | 'N';
export interface T2831_REQUEST_HEADER {
    'content-type'?:  string
    authorization?:  string
    tr_cd?:  string
    tr_cont?:  T2831_REQUEST_HEADER_TR_CONT
    tr_cont_key?:  string
    mac_address?:  string
}

export type T2832_REQUEST_HEADER_TR_CONT = 'Y' | 'N';
export interface T2832_REQUEST_HEADER {
    'content-type'?:  string
    authorization?:  string
    tr_cd?:  string
    tr_cont?:  T2832_REQUEST_HEADER_TR_CONT
    tr_cont_key?:  string
    mac_address?:  string
}

export type T2833_REQUEST_HEADER_TR_CONT = 'Y' | 'N';
export interface T2833_REQUEST_HEADER {
    'content-type'?:  string
    authorization?:  string
    tr_cd?:  string
    tr_cont?:  T2833_REQUEST_HEADER_TR_CONT
    tr_cont_key?:  string
    mac_address?:  string
}

export type T2835_REQUEST_HEADER_TR_CONT = 'Y' | 'N';
export interface T2835_REQUEST_HEADER {
    'content-type'?:  string
    authorization?:  string
    tr_cd?:  string
    tr_cont?:  T2835_REQUEST_HEADER_TR_CONT
    tr_cont_key?:  string
    mac_address?:  string
}

export type T8401_REQUEST_HEADER_TR_CONT = 'Y' | 'N';
export interface T8401_REQUEST_HEADER {
    'content-type'?:  string
    authorization?:  string
    tr_cd?:  string
    tr_cont?:  T8401_REQUEST_HEADER_TR_CONT
    tr_cont_key?:  string
    mac_address?:  string
}

export type T8402_REQUEST_HEADER_TR_CONT = 'Y' | 'N';
export interface T8402_REQUEST_HEADER {
    'content-type'?:  string
    authorization?:  string
    tr_cd?:  string
    tr_cont?:  T8402_REQUEST_HEADER_TR_CONT
    tr_cont_key?:  string
    mac_address?:  string
}

export type T8403_REQUEST_HEADER_TR_CONT = 'Y' | 'N';
export interface T8403_REQUEST_HEADER {
    'content-type'?:  string
    authorization?:  string
    tr_cd?:  string
    tr_cont?:  T8403_REQUEST_HEADER_TR_CONT
    tr_cont_key?:  string
    mac_address?:  string
}

export type T8404_REQUEST_HEADER_TR_CONT = 'Y' | 'N';
export interface T8404_REQUEST_HEADER {
    'content-type'?:  string
    authorization?:  string
    tr_cd?:  string
    tr_cont?:  T8404_REQUEST_HEADER_TR_CONT
    tr_cont_key?:  string
    mac_address?:  string
}

export type T8405_REQUEST_HEADER_TR_CONT = 'Y' | 'N';
export interface T8405_REQUEST_HEADER {
    'content-type'?:  string
    authorization?:  string
    tr_cd?:  string
    tr_cont?:  T8405_REQUEST_HEADER_TR_CONT
    tr_cont_key?:  string
    mac_address?:  string
}

export type T8406_REQUEST_HEADER_TR_CONT = 'Y' | 'N';
export interface T8406_REQUEST_HEADER {
    'content-type'?:  string
    authorization?:  string
    tr_cd?:  string
    tr_cont?:  T8406_REQUEST_HEADER_TR_CONT
    tr_cont_key?:  string
    mac_address?:  string
}

export type T8426_REQUEST_HEADER_TR_CONT = 'Y' | 'N';
export interface T8426_REQUEST_HEADER {
    'content-type'?:  string
    authorization?:  string
    tr_cd?:  string
    tr_cont?:  T8426_REQUEST_HEADER_TR_CONT
    tr_cont_key?:  string
    mac_address?:  string
}

export type T8427_REQUEST_HEADER_TR_CONT = 'Y' | 'N';
export interface T8427_REQUEST_HEADER {
    'content-type'?:  string
    authorization?:  string
    tr_cd?:  string
    tr_cont?:  T8427_REQUEST_HEADER_TR_CONT
    tr_cont_key?:  string
    mac_address?:  string
}

export type T8432_REQUEST_HEADER_TR_CONT = 'Y' | 'N';
export interface T8432_REQUEST_HEADER {
    'content-type'?:  string
    authorization?:  string
    tr_cd?:  string
    tr_cont?:  T8432_REQUEST_HEADER_TR_CONT
    tr_cont_key?:  string
    mac_address?:  string
}

export type T8433_REQUEST_HEADER_TR_CONT = 'Y' | 'N';
export interface T8433_REQUEST_HEADER {
    'content-type'?:  string
    authorization?:  string
    tr_cd?:  string
    tr_cont?:  T8433_REQUEST_HEADER_TR_CONT
    tr_cont_key?:  string
    mac_address?:  string
}

export type T8434_REQUEST_HEADER_TR_CONT = 'Y' | 'N';
export interface T8434_REQUEST_HEADER {
    'content-type'?:  string
    authorization?:  string
    tr_cd?:  string
    tr_cont?:  T8434_REQUEST_HEADER_TR_CONT
    tr_cont_key?:  string
    mac_address?:  string
}

export type T8435_REQUEST_HEADER_TR_CONT = 'Y' | 'N';
export interface T8435_REQUEST_HEADER {
    'content-type'?:  string
    authorization?:  string
    tr_cd?:  string
    tr_cont?:  T8435_REQUEST_HEADER_TR_CONT
    tr_cont_key?:  string
    mac_address?:  string
}

export type T8437_REQUEST_HEADER_TR_CONT = 'Y' | 'N';
export interface T8437_REQUEST_HEADER {
    'content-type'?:  string
    authorization?:  string
    tr_cd?:  string
    tr_cont?:  T8437_REQUEST_HEADER_TR_CONT
    tr_cont_key?:  string
    mac_address?:  string
}

export type T9943_REQUEST_HEADER_TR_CONT = 'Y' | 'N';
export interface T9943_REQUEST_HEADER {
    'content-type'?:  string
    authorization?:  string
    tr_cd?:  string
    tr_cont?:  T9943_REQUEST_HEADER_TR_CONT
    tr_cont_key?:  string
    mac_address?:  string
}

export type T9944_REQUEST_HEADER_TR_CONT = 'Y' | 'N';
export interface T9944_REQUEST_HEADER {
    'content-type'?:  string
    authorization?:  string
    tr_cd?:  string
    tr_cont?:  T9944_REQUEST_HEADER_TR_CONT
    tr_cont_key?:  string
    mac_address?:  string
}

export type T2541_REQUEST_HEADER_TR_CONT = 'Y' | 'N';
export interface T2541_REQUEST_HEADER {
    'content-type'?:  string
    authorization?:  string
    tr_cd?:  string
    tr_cont?:  T2541_REQUEST_HEADER_TR_CONT
    tr_cont_key?:  string
    mac_address?:  string
}

export type T2545_REQUEST_HEADER_TR_CONT = 'Y' | 'N';
export interface T2545_REQUEST_HEADER {
    'content-type'?:  string
    authorization?:  string
    tr_cd?:  string
    tr_cont?:  T2545_REQUEST_HEADER_TR_CONT
    tr_cont_key?:  string
    mac_address?:  string
}

export type T2209_REQUEST_HEADER_TR_CONT = 'Y' | 'N';
export interface T2209_REQUEST_HEADER {
    'content-type'?:  string
    authorization?:  string
    tr_cd?:  string
    tr_cont?:  T2209_REQUEST_HEADER_TR_CONT
    tr_cont_key?:  string
    mac_address?:  string
}

export type T8414_REQUEST_HEADER_TR_CONT = 'Y' | 'N';
export interface T8414_REQUEST_HEADER {
    'content-type'?:  string
    authorization?:  string
    tr_cd?:  string
    tr_cont?:  T8414_REQUEST_HEADER_TR_CONT
    tr_cont_key?:  string
    mac_address?:  string
}

export type T8415_REQUEST_HEADER_TR_CONT = 'Y' | 'N';
export interface T8415_REQUEST_HEADER {
    'content-type'?:  string
    authorization?:  string
    tr_cd?:  string
    tr_cont?:  T8415_REQUEST_HEADER_TR_CONT
    tr_cont_key?:  string
    mac_address?:  string
}

export type T8416_REQUEST_HEADER_TR_CONT = 'Y' | 'N';
export interface T8416_REQUEST_HEADER {
    'content-type'?:  string
    authorization?:  string
    tr_cd?:  string
    tr_cont?:  T8416_REQUEST_HEADER_TR_CONT
    tr_cont_key?:  string
    mac_address?:  string
}

export type T8429_REQUEST_HEADER_TR_CONT = 'Y' | 'N';
export interface T8429_REQUEST_HEADER {
    'content-type'?:  string
    authorization?:  string
    tr_cd?:  string
    tr_cont?:  T8429_REQUEST_HEADER_TR_CONT
    tr_cont_key?:  string
    mac_address?:  string
}

export type CFOAQ00600_REQUEST_HEADER_TR_CONT = 'Y' | 'N';
export interface CFOAQ00600_REQUEST_HEADER {
    'content-type'?:  string
    authorization?:  string
    tr_cd?:  string
    tr_cont?:  CFOAQ00600_REQUEST_HEADER_TR_CONT
    tr_cont_key?:  string
    mac_address?:  string
}


export interface CFOAQ50600_REQUEST_HEADER {
    'content-type'?:  string
}

export type CFOAQ10100_REQUEST_HEADER_TR_CONT = 'Y' | 'N';
export interface CFOAQ10100_REQUEST_HEADER {
    'content-type'?:  string
    authorization?:  string
    tr_cd?:  string
    tr_cont?:  CFOAQ10100_REQUEST_HEADER_TR_CONT
    tr_cont_key?:  string
    mac_address?:  string
}

export type CFOBQ10500_REQUEST_HEADER_TR_CONT = 'Y' | 'N';
export interface CFOBQ10500_REQUEST_HEADER {
    'content-type'?:  string
    authorization?:  string
    tr_cd?:  string
    tr_cont?:  CFOBQ10500_REQUEST_HEADER_TR_CONT
    tr_cont_key?:  string
    mac_address?:  string
}

export type CFOEQ11100_REQUEST_HEADER_TR_CONT = 'Y' | 'N';
export interface CFOEQ11100_REQUEST_HEADER {
    'content-type'?:  string
    authorization?:  string
    tr_cd?:  string
    tr_cont?:  CFOEQ11100_REQUEST_HEADER_TR_CONT
    tr_cont_key?:  string
    mac_address?:  string
}

export type CFOEQ82600_REQUEST_HEADER_TR_CONT = 'Y' | 'N';
export interface CFOEQ82600_REQUEST_HEADER {
    'content-type'?:  string
    authorization?:  string
    tr_cd?:  string
    tr_cont?:  CFOEQ82600_REQUEST_HEADER_TR_CONT
    tr_cont_key?:  string
    mac_address?:  string
}

export type CFOFQ02400_REQUEST_HEADER_TR_CONT = 'Y' | 'N';
export interface CFOFQ02400_REQUEST_HEADER {
    'content-type'?:  string
    authorization?:  string
    tr_cd?:  string
    tr_cont?:  CFOFQ02400_REQUEST_HEADER_TR_CONT
    tr_cont_key?:  string
    mac_address?:  string
}

export type T0434_REQUEST_HEADER_TR_CONT = 'Y' | 'N';
export interface T0434_REQUEST_HEADER {
    'content-type'?:  string
    authorization?:  string
    tr_cd?:  string
    tr_cont?:  T0434_REQUEST_HEADER_TR_CONT
    tr_cont_key?:  string
    mac_address?:  string
}

export type T0441_REQUEST_HEADER_TR_CONT = 'Y' | 'N';
export interface T0441_REQUEST_HEADER {
    'content-type'?:  string
    authorization?:  string
    tr_cd?:  string
    tr_cont?:  T0441_REQUEST_HEADER_TR_CONT
    tr_cont_key?:  string
    mac_address?:  string
}

export type CEXAQ21100_REQUEST_HEADER_TR_CONT = 'Y' | 'N';
export interface CEXAQ21100_REQUEST_HEADER {
    'content-type'?:  string
    authorization?:  string
    tr_cd?:  string
    tr_cont?:  CEXAQ21100_REQUEST_HEADER_TR_CONT
    tr_cont_key?:  string
    mac_address?:  string
}

export type CEXAQ21200_REQUEST_HEADER_TR_CONT = 'Y' | 'N';
export interface CEXAQ21200_REQUEST_HEADER {
    'content-type'?:  string
    authorization?:  string
    tr_cd?:  string
    tr_cont?:  CEXAQ21200_REQUEST_HEADER_TR_CONT
    tr_cont_key?:  string
    mac_address?:  string
}

export type CEXAQ31100_REQUEST_HEADER_TR_CONT = 'Y' | 'N';
export interface CEXAQ31100_REQUEST_HEADER {
    'content-type'?:  string
    authorization?:  string
    tr_cd?:  string
    tr_cont?:  CEXAQ31100_REQUEST_HEADER_TR_CONT
    tr_cont_key?:  string
    mac_address?:  string
}

export type CEXAQ31200_REQUEST_HEADER_TR_CONT = 'Y' | 'N';
export interface CEXAQ31200_REQUEST_HEADER {
    'content-type'?:  string
    authorization?:  string
    tr_cd?:  string
    tr_cont?:  CEXAQ31200_REQUEST_HEADER_TR_CONT
    tr_cont_key?:  string
    mac_address?:  string
}

export type CEXAQ44200_REQUEST_HEADER_TR_CONT = 'Y' | 'N';
export interface CEXAQ44200_REQUEST_HEADER {
    'content-type'?:  string
    authorization?:  string
    tr_cd?:  string
    tr_cont?:  CEXAQ44200_REQUEST_HEADER_TR_CONT
    tr_cont_key?:  string
    mac_address?:  string
}

export type FOCCQ33700_REQUEST_HEADER_TR_CONT = 'Y' | 'N';
export interface FOCCQ33700_REQUEST_HEADER {
    'content-type'?:  string
    authorization?:  string
    tr_cd?:  string
    tr_cont?:  FOCCQ33700_REQUEST_HEADER_TR_CONT
    tr_cont_key?:  string
    mac_address?:  string
}

export type CFOAT00100_REQUEST_HEADER_TR_CONT = 'Y' | 'N';
export interface CFOAT00100_REQUEST_HEADER {
    'content-type'?:  string
    authorization?:  string
    tr_cd?:  string
    tr_cont?:  CFOAT00100_REQUEST_HEADER_TR_CONT
    tr_cont_key?:  string
    mac_address?:  string
}

export type CFOAT00200_REQUEST_HEADER_TR_CONT = 'Y' | 'N';
export interface CFOAT00200_REQUEST_HEADER {
    'content-type'?:  string
    authorization?:  string
    tr_cd?:  string
    tr_cont?:  CFOAT00200_REQUEST_HEADER_TR_CONT
    tr_cont_key?:  string
    mac_address?:  string
}

export type CFOAT00300_REQUEST_HEADER_TR_CONT = 'Y' | 'N';
export interface CFOAT00300_REQUEST_HEADER {
    'content-type'?:  string
    authorization?:  string
    tr_cd?:  string
    tr_cont?:  CFOAT00300_REQUEST_HEADER_TR_CONT
    tr_cont_key?:  string
    mac_address?:  string
}

export type CFOBQ10800_REQUEST_HEADER_TR_CONT = 'Y' | 'N';
export interface CFOBQ10800_REQUEST_HEADER {
    'content-type'?:  string
    authorization?:  string
    tr_cd?:  string
    tr_cont?:  CFOBQ10800_REQUEST_HEADER_TR_CONT
    tr_cont_key?:  string
    mac_address?:  string
}

export type CEXAT11100_REQUEST_HEADER_TR_CONT = 'Y' | 'N';
export interface CEXAT11100_REQUEST_HEADER {
    'content-type'?:  string
    authorization?:  string
    tr_cd?:  string
    tr_cont?:  CEXAT11100_REQUEST_HEADER_TR_CONT
    tr_cont_key?:  string
    mac_address?:  string
}

export type CEXAT11200_REQUEST_HEADER_TR_CONT = 'Y' | 'N';
export interface CEXAT11200_REQUEST_HEADER {
    'content-type'?:  string
    authorization?:  string
    tr_cd?:  string
    tr_cont?:  CEXAT11200_REQUEST_HEADER_TR_CONT
    tr_cont_key?:  string
    mac_address?:  string
}

export type CEXAT11300_REQUEST_HEADER_TR_CONT = 'Y' | 'N';
export interface CEXAT11300_REQUEST_HEADER {
    'content-type'?:  string
    authorization?:  string
    tr_cd?:  string
    tr_cont?:  CEXAT11300_REQUEST_HEADER_TR_CONT
    tr_cont_key?:  string
    mac_address?:  string
}

export type MMDAQ91200_REQUEST_HEADER_TR_CONT = 'Y' | 'N';
export interface MMDAQ91200_REQUEST_HEADER {
    'content-type'?:  string
    authorization?:  string
    tr_cd?:  string
    tr_cont?:  MMDAQ91200_REQUEST_HEADER_TR_CONT
    tr_cont_key?:  string
    mac_address?:  string
}

export type O3101_REQUEST_HEADER_TR_CONT = 'Y' | 'N';
export interface O3101_REQUEST_HEADER {
    'content-type'?:  string
    authorization?:  string
    tr_cd?:  string
    tr_cont?:  O3101_REQUEST_HEADER_TR_CONT
    tr_cont_key?:  string
    mac_address?:  string
}

export type O3104_REQUEST_HEADER_TR_CONT = 'Y' | 'N';
export interface O3104_REQUEST_HEADER {
    'content-type'?:  string
    authorization?:  string
    tr_cd?:  string
    tr_cont?:  O3104_REQUEST_HEADER_TR_CONT
    tr_cont_key?:  string
    mac_address?:  string
}

export type O3105_REQUEST_HEADER_TR_CONT = 'Y' | 'N';
export interface O3105_REQUEST_HEADER {
    'content-type'?:  string
    authorization?:  string
    tr_cd?:  string
    tr_cont?:  O3105_REQUEST_HEADER_TR_CONT
    tr_cont_key?:  string
    mac_address?:  string
}

export type O3106_REQUEST_HEADER_TR_CONT = 'Y' | 'N';
export interface O3106_REQUEST_HEADER {
    'content-type'?:  string
    authorization?:  string
    tr_cd?:  string
    tr_cont?:  O3106_REQUEST_HEADER_TR_CONT
    tr_cont_key?:  string
    mac_address?:  string
}

export type O3107_REQUEST_HEADER_TR_CONT = 'Y' | 'N';
export interface O3107_REQUEST_HEADER {
    'content-type'?:  string
    authorization?:  string
    tr_cd?:  string
    tr_cont?:  O3107_REQUEST_HEADER_TR_CONT
    tr_cont_key?:  string
    mac_address?:  string
}

export type O3116_REQUEST_HEADER_TR_CONT = 'Y' | 'N';
export interface O3116_REQUEST_HEADER {
    'content-type'?:  string
    authorization?:  string
    tr_cd?:  string
    tr_cont?:  O3116_REQUEST_HEADER_TR_CONT
    tr_cont_key?:  string
    mac_address?:  string
}

export type O3121_REQUEST_HEADER_TR_CONT = 'Y' | 'N';
export interface O3121_REQUEST_HEADER {
    'content-type'?:  string
    authorization?:  string
    tr_cd?:  string
    tr_cont?:  O3121_REQUEST_HEADER_TR_CONT
    tr_cont_key?:  string
    mac_address?:  string
}

export type O3123_REQUEST_HEADER_TR_CONT = 'Y' | 'N';
export interface O3123_REQUEST_HEADER {
    'content-type'?:  string
    authorization?:  string
    tr_cd?:  string
    tr_cont?:  O3123_REQUEST_HEADER_TR_CONT
    tr_cont_key?:  string
    mac_address?:  string
}

export type O3125_REQUEST_HEADER_TR_CONT = 'Y' | 'N';
export interface O3125_REQUEST_HEADER {
    'content-type'?:  string
    authorization?:  string
    tr_cd?:  string
    tr_cont?:  O3125_REQUEST_HEADER_TR_CONT
    tr_cont_key?:  string
    mac_address?:  string
}

export type O3126_REQUEST_HEADER_TR_CONT = 'Y' | 'N';
export interface O3126_REQUEST_HEADER {
    'content-type'?:  string
    authorization?:  string
    tr_cd?:  string
    tr_cont?:  O3126_REQUEST_HEADER_TR_CONT
    tr_cont_key?:  string
    mac_address?:  string
}

export type O3127_REQUEST_HEADER_TR_CONT = 'Y' | 'N';
export interface O3127_REQUEST_HEADER {
    'content-type'?:  string
    authorization?:  string
    tr_cd?:  string
    tr_cont?:  O3127_REQUEST_HEADER_TR_CONT
    tr_cont_key?:  string
    mac_address?:  string
}

export type O3128_REQUEST_HEADER_TR_CONT = 'Y' | 'N';
export interface O3128_REQUEST_HEADER {
    'content-type'?:  string
    authorization?:  string
    tr_cd?:  string
    tr_cont?:  O3128_REQUEST_HEADER_TR_CONT
    tr_cont_key?:  string
    mac_address?:  string
}

export type O3136_REQUEST_HEADER_TR_CONT = 'Y' | 'N';
export interface O3136_REQUEST_HEADER {
    'content-type'?:  string
    authorization?:  string
    tr_cd?:  string
    tr_cont?:  O3136_REQUEST_HEADER_TR_CONT
    tr_cont_key?:  string
    mac_address?:  string
}

export type O3137_REQUEST_HEADER_TR_CONT = 'Y' | 'N';
export interface O3137_REQUEST_HEADER {
    'content-type'?:  string
    authorization?:  string
    tr_cd?:  string
    tr_cont?:  O3137_REQUEST_HEADER_TR_CONT
    tr_cont_key?:  string
    mac_address?:  string
}

export type CIDBQ01400_REQUEST_HEADER_TR_CONT = 'Y' | 'N';
export interface CIDBQ01400_REQUEST_HEADER {
    'content-type'?:  string
    authorization?:  string
    tr_cd?:  string
    tr_cont?:  CIDBQ01400_REQUEST_HEADER_TR_CONT
    tr_cont_key?:  string
    mac_address?:  string
}

export type CIDBQ01500_REQUEST_HEADER_TR_CONT = 'Y' | 'N';
export interface CIDBQ01500_REQUEST_HEADER {
    'content-type'?:  string
    authorization?:  string
    tr_cd?:  string
    tr_cont?:  CIDBQ01500_REQUEST_HEADER_TR_CONT
    tr_cont_key?:  string
    mac_address?:  string
}

export type CIDBQ01800_REQUEST_HEADER_TR_CONT = 'Y' | 'N';
export interface CIDBQ01800_REQUEST_HEADER {
    'content-type'?:  string
    authorization?:  string
    tr_cd?:  string
    tr_cont?:  CIDBQ01800_REQUEST_HEADER_TR_CONT
    tr_cont_key?:  string
    mac_address?:  string
}

export type CIDBQ02400_REQUEST_HEADER_TR_CONT = 'Y' | 'N';
export interface CIDBQ02400_REQUEST_HEADER {
    'content-type'?:  string
    authorization?:  string
    tr_cd?:  string
    tr_cont?:  CIDBQ02400_REQUEST_HEADER_TR_CONT
    tr_cont_key?:  string
    mac_address?:  string
}

export type CIDBQ03000_REQUEST_HEADER_TR_CONT = 'Y' | 'N';
export interface CIDBQ03000_REQUEST_HEADER {
    'content-type'?:  string
    authorization?:  string
    tr_cd?:  string
    tr_cont?:  CIDBQ03000_REQUEST_HEADER_TR_CONT
    tr_cont_key?:  string
    mac_address?:  string
}

export type CIDBQ05300_REQUEST_HEADER_TR_CONT = 'Y' | 'N';
export interface CIDBQ05300_REQUEST_HEADER {
    'content-type'?:  string
    authorization?:  string
    tr_cd?:  string
    tr_cont?:  CIDBQ05300_REQUEST_HEADER_TR_CONT
    tr_cont_key?:  string
    mac_address?:  string
}

export type CIDEQ00800_REQUEST_HEADER_TR_CONT = 'Y' | 'N';
export interface CIDEQ00800_REQUEST_HEADER {
    'content-type'?:  string
    authorization?:  string
    tr_cd?:  string
    tr_cont?:  CIDEQ00800_REQUEST_HEADER_TR_CONT
    tr_cont_key?:  string
    mac_address?:  string
}

export type CIDBT00100_REQUEST_HEADER_TR_CONT = 'Y' | 'N';
export interface CIDBT00100_REQUEST_HEADER {
    'content-type'?:  string
    authorization?:  string
    tr_cd?:  string
    tr_cont?:  CIDBT00100_REQUEST_HEADER_TR_CONT
    tr_cont_key?:  string
    mac_address?:  string
}

export type CIDBT00900_REQUEST_HEADER_TR_CONT = 'Y' | 'N';
export interface CIDBT00900_REQUEST_HEADER {
    'content-type'?:  string
    authorization?:  string
    tr_cd?:  string
    tr_cont?:  CIDBT00900_REQUEST_HEADER_TR_CONT
    tr_cont_key?:  string
    mac_address?:  string
}

export type CIDBT01000_REQUEST_HEADER_TR_CONT = 'Y' | 'N';
export interface CIDBT01000_REQUEST_HEADER {
    'content-type'?:  string
    authorization?:  string
    tr_cd?:  string
    tr_cont?:  CIDBT01000_REQUEST_HEADER_TR_CONT
    tr_cont_key?:  string
    mac_address?:  string
}

export type O3103_REQUEST_HEADER_TR_CONT = 'Y' | 'N';
export interface O3103_REQUEST_HEADER {
    'content-type'?:  string
    authorization?:  string
    tr_cd?:  string
    tr_cont?:  O3103_REQUEST_HEADER_TR_CONT
    tr_cont_key?:  string
    mac_address?:  string
}

export type O3108_REQUEST_HEADER_TR_CONT = 'Y' | 'N';
export interface O3108_REQUEST_HEADER {
    'content-type'?:  string
    authorization?:  string
    tr_cd?:  string
    tr_cont?:  O3108_REQUEST_HEADER_TR_CONT
    tr_cont_key?:  string
    mac_address?:  string
}

export type O3117_REQUEST_HEADER_TR_CONT = 'Y' | 'N';
export interface O3117_REQUEST_HEADER {
    'content-type'?:  string
    authorization?:  string
    tr_cd?:  string
    tr_cont?:  O3117_REQUEST_HEADER_TR_CONT
    tr_cont_key?:  string
    mac_address?:  string
}

export type O3139_REQUEST_HEADER_TR_CONT = 'Y' | 'N';
export interface O3139_REQUEST_HEADER {
    'content-type'?:  string
    authorization?:  string
    tr_cd?:  string
    tr_cont?:  O3139_REQUEST_HEADER_TR_CONT
    tr_cont_key?:  string
    mac_address?:  string
}

export type T0167_REQUEST_HEADER_TR_CONT = 'Y' | 'N';
export interface T0167_REQUEST_HEADER {
    'content-type'?:  string
    authorization?:  string
    tr_cd?:  string
    tr_cont?:  T0167_REQUEST_HEADER_TR_CONT
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

export type T1514_REQUEST_BODY_T1514INBLOCK_GUBUN2 = '일';
export type T1514_REQUEST_BODY_T1514INBLOCK_CTS_DATE = '- 연속조회일 경우 이 값 기준으로 조회(cont';
export type T1514_REQUEST_BODY_T1514INBLOCK_RATE_GBN = '- 1' | '- 2';
export interface T1514_REQUEST_BODY_T1514INBLOCK {
    upcode?:  string
    gubun1?:  string
    gubun2?:  T1514_REQUEST_BODY_T1514INBLOCK_GUBUN2
    cts_date?:  T1514_REQUEST_BODY_T1514INBLOCK_CTS_DATE
    cnt?:  number
    rate_gbn?:  T1514_REQUEST_BODY_T1514INBLOCK_RATE_GBN
}


export interface T1514_REQUEST_BODY {
    t1514InBlock?:  T1514_REQUEST_BODY_T1514INBLOCK
}


export interface T8424_REQUEST_BODY_T8424INBLOCK {
    gubun1?:  string
}


export interface T8424_REQUEST_BODY {
    t8424InBlock?:  T8424_REQUEST_BODY_T8424INBLOCK
}

export type T1485_REQUEST_BODY_T1485INBLOCK_UPCODE = '코스피';
export type T1485_REQUEST_BODY_T1485INBLOCK_GUBUN = '1' | '2';
export interface T1485_REQUEST_BODY_T1485INBLOCK {
    upcode?:  T1485_REQUEST_BODY_T1485INBLOCK_UPCODE
    gubun?:  T1485_REQUEST_BODY_T1485INBLOCK_GUBUN
}


export interface T1485_REQUEST_BODY {
    t1485InBlock?:  T1485_REQUEST_BODY_T1485INBLOCK
}

export type T1511_REQUEST_BODY_T1511INBLOCK_UPCODE = '코스피';
export interface T1511_REQUEST_BODY_T1511INBLOCK {
    upcode?:  T1511_REQUEST_BODY_T1511INBLOCK_UPCODE
}


export interface T1511_REQUEST_BODY {
    t1511InBlock?:  T1511_REQUEST_BODY_T1511INBLOCK
}

export type T1516_REQUEST_BODY_T1516INBLOCK_GUBUN = '1' | '2' | '3';
export interface T1516_REQUEST_BODY_T1516INBLOCK {
    upcode?:  string
    gubun?:  T1516_REQUEST_BODY_T1516INBLOCK_GUBUN
    shcode?:  string
}


export interface T1516_REQUEST_BODY {
    t1516InBlock?:  T1516_REQUEST_BODY_T1516INBLOCK
}

export type T4203_REQUEST_BODY_T4203INBLOCK_GUBUN = '0' | '1' | '2' | '3' | '4';
export type T4203_REQUEST_BODY_T4203INBLOCK_TDGB = '0' | '1';
export type T4203_REQUEST_BODY_T4203INBLOCK_SDATE = 'Space';
export interface T4203_REQUEST_BODY_T4203INBLOCK {
    shcode?:  string
    gubun?:  T4203_REQUEST_BODY_T4203INBLOCK_GUBUN
    ncnt?:  number
    qrycnt?:  number
    tdgb?:  T4203_REQUEST_BODY_T4203INBLOCK_TDGB
    sdate?:  T4203_REQUEST_BODY_T4203INBLOCK_SDATE
    edate?:  string
    cts_date?:  string
    cts_time?:  string
    cts_daygb?:  string
}


export interface T4203_REQUEST_BODY {
    t4203InBlock?:  T4203_REQUEST_BODY_T4203INBLOCK
}

export type T8417_REQUEST_BODY_T8417INBLOCK_QRYCNT = '압축모듈인 경우 최대 2000건까지 조회가능';
export type T8417_REQUEST_BODY_T8417INBLOCK_NDAY = '0';
export type T8417_REQUEST_BODY_T8417INBLOCK_SDATE = '기본값';
export type T8417_REQUEST_BODY_T8417INBLOCK_COMP_YN = 'N' | 'Y';
export interface T8417_REQUEST_BODY_T8417INBLOCK {
    shcode?:  string
    ncnt?:  number
    qrycnt?:  T8417_REQUEST_BODY_T8417INBLOCK_QRYCNT
    nday?:  T8417_REQUEST_BODY_T8417INBLOCK_NDAY
    sdate?:  T8417_REQUEST_BODY_T8417INBLOCK_SDATE
    stime?:  string
    edate?:  string
    etime?:  string
    cts_date?:  string
    cts_time?:  string
    comp_yn?:  T8417_REQUEST_BODY_T8417INBLOCK_COMP_YN
}


export interface T8417_REQUEST_BODY {
    t8417InBlock?:  T8417_REQUEST_BODY_T8417INBLOCK
}

export type T8418_REQUEST_BODY_T8418INBLOCK_NCNT = '0' | '1' | '2' | 'n';
export type T8418_REQUEST_BODY_T8418INBLOCK_NDAY = '0';
export type T8418_REQUEST_BODY_T8418INBLOCK_SDATE = '기본값';
export type T8418_REQUEST_BODY_T8418INBLOCK_COMP_YN = 'N' | 'Y';
export interface T8418_REQUEST_BODY_T8418INBLOCK {
    shcode?:  string
    ncnt?:  T8418_REQUEST_BODY_T8418INBLOCK_NCNT
    qrycnt?:  number
    nday?:  T8418_REQUEST_BODY_T8418INBLOCK_NDAY
    sdate?:  T8418_REQUEST_BODY_T8418INBLOCK_SDATE
    stime?:  string
    edate?:  string
    etime?:  string
    cts_date?:  string
    cts_time?:  string
    comp_yn?:  T8418_REQUEST_BODY_T8418INBLOCK_COMP_YN
}


export interface T8418_REQUEST_BODY {
    t8418InBlock?:  T8418_REQUEST_BODY_T8418INBLOCK
}

export type T8419_REQUEST_BODY_T8419INBLOCK_SDATE = '기본값';
export type T8419_REQUEST_BODY_T8419INBLOCK_COMP_YN = 'N' | 'Y';
export interface T8419_REQUEST_BODY_T8419INBLOCK {
    shcode?:  string
    gubun?:  string
    qrycnt?:  number
    sdate?:  T8419_REQUEST_BODY_T8419INBLOCK_SDATE
    edate?:  string
    cts_date?:  string
    comp_yn?:  T8419_REQUEST_BODY_T8419INBLOCK_COMP_YN
}


export interface T8419_REQUEST_BODY {
    t8419InBlock?:  T8419_REQUEST_BODY_T8419INBLOCK
}


export interface T1101_REQUEST_BODY_T1101INBLOCK {
    shcode?:  string
}


export interface T1101_REQUEST_BODY {
    t1101InBlock?:  T1101_REQUEST_BODY_T1101INBLOCK
}


export interface T1102_REQUEST_BODY_T1102INBLOCK {
    shcode?:  string
}


export interface T1102_REQUEST_BODY {
    t1102InBlock?:  T1102_REQUEST_BODY_T1102INBLOCK
}


export interface T1104_REQUEST_BODY_T1104INBLOCK {
    code?:  string
    nrec?:  string
}


export type T1104_REQUEST_BODY_T1104INBLOCK1_GUBN = '1' | '2' | '3' | '4';
export type T1104_REQUEST_BODY_T1104INBLOCK1_DAT1 = '1' | '2' | '3' | '4';
export type T1104_REQUEST_BODY_T1104INBLOCK1_DAT2 = '1' | '2';
export interface T1104_REQUEST_BODY_T1104INBLOCK1 {
    indx?:  string
    gubn?:  T1104_REQUEST_BODY_T1104INBLOCK1_GUBN
    dat1?:  T1104_REQUEST_BODY_T1104INBLOCK1_DAT1
    dat2?:  T1104_REQUEST_BODY_T1104INBLOCK1_DAT2
}


export interface T1104_REQUEST_BODY {
    t1104InBlock?:  T1104_REQUEST_BODY_T1104INBLOCK
    t1104InBlock1?:  Array<T1104_REQUEST_BODY_T1104INBLOCK1>
}


export interface T1105_REQUEST_BODY_T1105INBLOCK {
    shcode?:  string
}


export interface T1105_REQUEST_BODY {
    t1105InBlock?:  T1105_REQUEST_BODY_T1105INBLOCK
}


export interface T1109_REQUEST_BODY_T1109INBLOCK {
    shcode?:  string
    dan_chetime?:  string
    idx?:  number
}


export interface T1109_REQUEST_BODY {
    t1109InBlock?:  T1109_REQUEST_BODY_T1109INBLOCK
}


export interface T1301_REQUEST_BODY_T1301INBLOCK {
    shcode?:  string
    cvolume?:  number
    starttime?:  string
    endtime?:  string
    cts_time?:  string
}


export interface T1301_REQUEST_BODY {
    t1301InBlock?:  T1301_REQUEST_BODY_T1301INBLOCK
}

export type T1302_REQUEST_BODY_T1302INBLOCK_GUBUN = '0' | '1' | '2' | '3' | '4' | '5' | '6';
export interface T1302_REQUEST_BODY_T1302INBLOCK {
    shcode?:  string
    gubun?:  T1302_REQUEST_BODY_T1302INBLOCK_GUBUN
    time?:  string
}


export interface T1302_REQUEST_BODY {
    t1302InBlock?:  T1302_REQUEST_BODY_T1302INBLOCK
    cnt?:  number
}

export type T1305_REQUEST_BODY_T1305INBLOCK_DWMCODE = '1';
export interface T1305_REQUEST_BODY_T1305INBLOCK {
    shcode?:  string
    dwmcode?:  T1305_REQUEST_BODY_T1305INBLOCK_DWMCODE
    date?:  string
    idx?:  number
    cnt?:  number
}


export interface T1305_REQUEST_BODY {
    t1305InBlock?:  T1305_REQUEST_BODY_T1305INBLOCK
}


export interface T1308_REQUEST_BODY_T1308INBLOCK {
    shcode?:  string
    starttime?:  string
    endtime?:  string
    bun_term?:  string
}


export interface T1308_REQUEST_BODY {
    t1308InBlock?:  T1308_REQUEST_BODY_T1308INBLOCK
}

export type T1310_REQUEST_BODY_T1310INBLOCK_DAYGB = '0' | '1';
export type T1310_REQUEST_BODY_T1310INBLOCK_TIMEGB = '0' | '1';
export type T1310_REQUEST_BODY_T1310INBLOCK_CTS_TIME = '다음 조회시 t1310OutBlock';
export interface T1310_REQUEST_BODY_T1310INBLOCK {
    daygb?:  T1310_REQUEST_BODY_T1310INBLOCK_DAYGB
    timegb?:  T1310_REQUEST_BODY_T1310INBLOCK_TIMEGB
    shcode?:  string
    endtime?:  string
    cts_time?:  T1310_REQUEST_BODY_T1310INBLOCK_CTS_TIME
}


export interface T1310_REQUEST_BODY {
    t1310InBlock?:  T1310_REQUEST_BODY_T1310INBLOCK
}

export type T1404_REQUEST_BODY_T1404INBLOCK_GUBUN = '0' | '1' | '2';
export type T1404_REQUEST_BODY_T1404INBLOCK_JONGCHK = '1' | '2' | '3' | '4';
export interface T1404_REQUEST_BODY_T1404INBLOCK {
    gubun?:  T1404_REQUEST_BODY_T1404INBLOCK_GUBUN
    jongchk?:  T1404_REQUEST_BODY_T1404INBLOCK_JONGCHK
    cts_shcode?:  string
}


export interface T1404_REQUEST_BODY {
    t1404InBlock?:  T1404_REQUEST_BODY_T1404INBLOCK
}

export type T1405_REQUEST_BODY_T1405INBLOCK_GUBUN = '0' | '1' | '2';
export type T1405_REQUEST_BODY_T1405INBLOCK_JONGCHK = '1' | '2' | '3' | '4' | '5' | '6' | '7' | '8' | '9';
export interface T1405_REQUEST_BODY_T1405INBLOCK {
    gubun?:  T1405_REQUEST_BODY_T1405INBLOCK_GUBUN
    jongchk?:  T1405_REQUEST_BODY_T1405INBLOCK_JONGCHK
    cts_shcode?:  string
}


export interface T1405_REQUEST_BODY {
    t1405InBlock?:  T1405_REQUEST_BODY_T1405INBLOCK
}

export type T1410_REQUEST_BODY_T1410INBLOCK_GUBUN = '0' | '1' | '2';
export interface T1410_REQUEST_BODY_T1410INBLOCK {
    gubun?:  T1410_REQUEST_BODY_T1410INBLOCK_GUBUN
    cts_shcode?:  string
}


export interface T1410_REQUEST_BODY {
    t1410InBlock?:  T1410_REQUEST_BODY_T1410INBLOCK
}

export type T1422_REQUEST_BODY_T1422INBLOCK_QRYGB = '1' | '2';
export type T1422_REQUEST_BODY_T1422INBLOCK_GUBUN = '0' | '1' | '2';
export type T1422_REQUEST_BODY_T1422INBLOCK_JNILGUBUN = '0' | '1';
export type T1422_REQUEST_BODY_T1422INBLOCK_SIGN = '1' | '4';
export type T1422_REQUEST_BODY_T1422INBLOCK_JC_NUM = '증거금50' | '증거금100' | '증거금50/100' | '관리종목' | '시장경보' | '거래정지' | '우선주' | '투자유의' | '정리매매' | '불성실공시';
export interface T1422_REQUEST_BODY_T1422INBLOCK {
    qrygb?:  T1422_REQUEST_BODY_T1422INBLOCK_QRYGB
    gubun?:  T1422_REQUEST_BODY_T1422INBLOCK_GUBUN
    jnilgubun?:  T1422_REQUEST_BODY_T1422INBLOCK_JNILGUBUN
    sign?:  T1422_REQUEST_BODY_T1422INBLOCK_SIGN
    jc_num?:  T1422_REQUEST_BODY_T1422INBLOCK_JC_NUM
    sprice?:  number
    eprice?:  number
    volume?:  number
    idx?:  number
}


export interface T1422_REQUEST_BODY {
    t1422InBlock?:  T1422_REQUEST_BODY_T1422INBLOCK
}

export type T1427_REQUEST_BODY_T1427INBLOCK_QRYGB = '1' | '그외';
export type T1427_REQUEST_BODY_T1427INBLOCK_GUBUN = '0' | '1' | '2';
export type T1427_REQUEST_BODY_T1427INBLOCK_SIGNGUBUN = '1' | '2';
export type T1427_REQUEST_BODY_T1427INBLOCK_JC_NUM = 'Default' | '000000000128(0x00000080)' | '000000000256(0x00000100)' | '000000000512(0x00000200)' | '000000016384(0x00004000)' | '000002097152(0x00200000)' | '000004194304(0x00400000)' | '000008388608(0x00800000)' | '000016777216(0x01000000)' | '000067108864(0x04000000)' | '002147483648(0x80000000)' | 'ex) 관리종목, 시장경보 종목 제외시';
export interface T1427_REQUEST_BODY_T1427INBLOCK {
    qrygb?:  T1427_REQUEST_BODY_T1427INBLOCK_QRYGB
    gubun?:  T1427_REQUEST_BODY_T1427INBLOCK_GUBUN
    signgubun?:  T1427_REQUEST_BODY_T1427INBLOCK_SIGNGUBUN
    diff?:  number
    jc_num?:  T1427_REQUEST_BODY_T1427INBLOCK_JC_NUM
    sprice?:  number
    eprice?:  number
    volume?:  number
    idx?:  number
    jshex?:  string
}


export interface T1427_REQUEST_BODY {
    t1427InBlock?:  T1427_REQUEST_BODY_T1427INBLOCK
}

export type T1442_REQUEST_BODY_T1442INBLOCK_GUBUN = '0' | '1' | '2';
export type T1442_REQUEST_BODY_T1442INBLOCK_TYPE1 = '0' | '1';
export type T1442_REQUEST_BODY_T1442INBLOCK_TYPE2 = '0';
export type T1442_REQUEST_BODY_T1442INBLOCK_TYPE3 = '0' | '1';
export type T1442_REQUEST_BODY_T1442INBLOCK_JC_NUM = '증거금50' | '증거금100' | '증거금50/100' | '관리종목' | '시장경보' | '거래정지' | '우선주' | '투자유의' | '정리매매' | '불성실공시';
export interface T1442_REQUEST_BODY_T1442INBLOCK {
    gubun?:  T1442_REQUEST_BODY_T1442INBLOCK_GUBUN
    type1?:  T1442_REQUEST_BODY_T1442INBLOCK_TYPE1
    type2?:  T1442_REQUEST_BODY_T1442INBLOCK_TYPE2
    type3?:  T1442_REQUEST_BODY_T1442INBLOCK_TYPE3
    jc_num?:  T1442_REQUEST_BODY_T1442INBLOCK_JC_NUM
    sprice?:  number
    eprice?:  number
    volume?:  number
    idx?:  number
    jc_num2?:  number
}


export interface T1442_REQUEST_BODY {
    t1442InBlock?:  T1442_REQUEST_BODY_T1442INBLOCK
}

export type T1449_REQUEST_BODY_T1449INBLOCK_DATEGB = '1';
export interface T1449_REQUEST_BODY_T1449INBLOCK {
    shcode?:  string
    dategb?:  T1449_REQUEST_BODY_T1449INBLOCK_DATEGB
}


export interface T1449_REQUEST_BODY {
    t1449InBlock?:  T1449_REQUEST_BODY_T1449INBLOCK
}

export type T1471_REQUEST_BODY_T1471INBLOCK_GUBUN = '00' | '01' | '02' | '03';
export type T1471_REQUEST_BODY_T1471INBLOCK_TIME = '기본값';
export interface T1471_REQUEST_BODY_T1471INBLOCK {
    shcode?:  string
    gubun?:  T1471_REQUEST_BODY_T1471INBLOCK_GUBUN
    time?:  T1471_REQUEST_BODY_T1471INBLOCK_TIME
    cnt?:  string
}


export interface T1471_REQUEST_BODY {
    t1471InBlock?:  T1471_REQUEST_BODY_T1471INBLOCK
}

export type T1475_REQUEST_BODY_T1475INBLOCK_VPTYPE = '0' | '1';
export type T1475_REQUEST_BODY_T1475INBLOCK_DATE = '다음 조회시 입력';
export type T1475_REQUEST_BODY_T1475INBLOCK_TIME = '다음 조회시 입력';
export type T1475_REQUEST_BODY_T1475INBLOCK_GUBUN = '일반 조회' | '차트 조회' | 'OutBlock1의 volume 필드 값 구분함' | '일반' | '차트';
export interface T1475_REQUEST_BODY_T1475INBLOCK {
    shcode?:  string
    vptype?:  T1475_REQUEST_BODY_T1475INBLOCK_VPTYPE
    datacnt?:  number
    date?:  T1475_REQUEST_BODY_T1475INBLOCK_DATE
    time?:  T1475_REQUEST_BODY_T1475INBLOCK_TIME
    rankcnt?:  number
    gubun?:  T1475_REQUEST_BODY_T1475INBLOCK_GUBUN
}


export interface T1475_REQUEST_BODY {
    t1475InBlock?:  T1475_REQUEST_BODY_T1475INBLOCK
}


export interface T1486_REQUEST_BODY_T1486INBLOCK {
    shcode?:  string
    cts_time?:  string
    cnt?:  number
}


export interface T1486_REQUEST_BODY {
    t1486InBlock?:  T1486_REQUEST_BODY_T1486INBLOCK
}

export type T1488_REQUEST_BODY_T1488INBLOCK_GUBUN = '0' | '1' | '2';
export type T1488_REQUEST_BODY_T1488INBLOCK_SIGN = '1' | '2';
export type T1488_REQUEST_BODY_T1488INBLOCK_JGUBUN = '1' | '2' | '3';
export type T1488_REQUEST_BODY_T1488INBLOCK_JONGCHK = '0x00000080' | '0x00000100' | '0x00000200' | '0x00004000' | '0x00200000' | '0x00400000' | '0x00800000' | '0x01000000' | '0x04000000' | '0x80000000';
export type T1488_REQUEST_BODY_T1488INBLOCK_VOLUME = '전체';
export interface T1488_REQUEST_BODY_T1488INBLOCK {
    gubun?:  T1488_REQUEST_BODY_T1488INBLOCK_GUBUN
    sign?:  T1488_REQUEST_BODY_T1488INBLOCK_SIGN
    jgubun?:  T1488_REQUEST_BODY_T1488INBLOCK_JGUBUN
    jongchk?:  T1488_REQUEST_BODY_T1488INBLOCK_JONGCHK
    idx?:  number
    volume?:  T1488_REQUEST_BODY_T1488INBLOCK_VOLUME
    yesprice?:  number
    yeeprice?:  number
    yevolume?:  number
}


export interface T1488_REQUEST_BODY {
    t1488InBlock?:  T1488_REQUEST_BODY_T1488INBLOCK
}


export interface T8407_REQUEST_BODY_T8407INBLOCK {
    nrec?:  number
    shcode?:  string
}


export interface T8407_REQUEST_BODY {
    t8407InBlock?:  T8407_REQUEST_BODY_T8407INBLOCK
}


export interface T9945_REQUEST_BODY_T9945INBLOCK {
    gubun?:  string
}


export interface T9945_REQUEST_BODY {
    t9945InBlock?:  T9945_REQUEST_BODY_T9945INBLOCK
}

export type T1752_REQUEST_BODY_T1752INBLOCK_FWGUBUN1 = '0' | '1';
export interface T1752_REQUEST_BODY_T1752INBLOCK {
    shcode?:  string
    traddate1?:  string
    traddate2?:  string
    fwgubun1?:  T1752_REQUEST_BODY_T1752INBLOCK_FWGUBUN1
    cts_idx?:  number
}


export interface T1752_REQUEST_BODY {
    t1752InBlock?:  T1752_REQUEST_BODY_T1752INBLOCK
}

export type T1764_REQUEST_BODY_T1764INBLOCK_GUBUN1 = '0 or 1' | '0,1 이외의 값 입력시 InBlock';
export interface T1764_REQUEST_BODY_T1764INBLOCK {
    shcode?:  string
    gubun1?:  T1764_REQUEST_BODY_T1764INBLOCK_GUBUN1
}


export interface T1764_REQUEST_BODY {
    t1764InBlock?:  T1764_REQUEST_BODY_T1764INBLOCK
}

export type T1771_REQUEST_BODY_T1771INBLOCK_GUBUN1 = '0' | '1';
export type T1771_REQUEST_BODY_T1771INBLOCK_TRADDATE1 = 'OutBlock1';
export type T1771_REQUEST_BODY_T1771INBLOCK_TRADDATE2 = 'OutBlock1';
export interface T1771_REQUEST_BODY_T1771INBLOCK {
    shcode?:  string
    tradno?:  string
    gubun1?:  T1771_REQUEST_BODY_T1771INBLOCK_GUBUN1
    traddate1?:  T1771_REQUEST_BODY_T1771INBLOCK_TRADDATE1
    traddate2?:  T1771_REQUEST_BODY_T1771INBLOCK_TRADDATE2
    cts_idx?:  number
    cnt?:  number
}


export interface T1771_REQUEST_BODY {
    t1771InBlock?:  T1771_REQUEST_BODY_T1771INBLOCK
}


export interface T3102_REQUEST_BODY_T3102INBLOCK {
    sNewsno?:  string
}


export interface T3102_REQUEST_BODY {
    t3102InBlock?:  T3102_REQUEST_BODY_T3102INBLOCK
}


export interface T3202_REQUEST_BODY_T3202INBLOCK {
    shcode?:  string
    date?:  string
}


export interface T3202_REQUEST_BODY {
    t3202InBlock?:  T3202_REQUEST_BODY_T3202INBLOCK
}


export interface T3320_REQUEST_BODY_T3320INBLOCK {
    gicode?:  string
}


export interface T3320_REQUEST_BODY {
    t3320InBlock?:  T3320_REQUEST_BODY_T3320INBLOCK
}

export type T3341_REQUEST_BODY_T3341INBLOCK_GUBUN = '0' | '1' | '2';
export type T3341_REQUEST_BODY_T3341INBLOCK_GUBUN1 = '1' | '9@PER' | 'a@PBR' | 'b@PEG';
export interface T3341_REQUEST_BODY_T3341INBLOCK {
    gubun?:  T3341_REQUEST_BODY_T3341INBLOCK_GUBUN
    gubun1?:  T3341_REQUEST_BODY_T3341INBLOCK_GUBUN1
    gubun2?:  string
    idx?:  number
}


export interface T3341_REQUEST_BODY {
    t3341InBlock?:  T3341_REQUEST_BODY_T3341INBLOCK
}


export interface T3401_REQUEST_BODY_T3401INBLOCK {
    shcode?:  string
    gubun1?:  string
    tradno?:  string
    cts_date?:  string
}


export interface T3401_REQUEST_BODY {
    t3401InBlock?:  T3401_REQUEST_BODY_T3401INBLOCK
}

export type T3518_REQUEST_BODY_T3518INBLOCK_KIND = 'S' | 'F' | 'R';
export type T3518_REQUEST_BODY_T3518INBLOCK_JGBN = '0' | '1' | '2' | '3' | '4';
export interface T3518_REQUEST_BODY_T3518INBLOCK {
    kind?:  T3518_REQUEST_BODY_T3518INBLOCK_KIND
    symbol?:  string
    cnt?:  number
    jgbn?:  T3518_REQUEST_BODY_T3518INBLOCK_JGBN
    nmin?:  number
    cts_date?:  string
    cts_time?:  string
}


export interface T3518_REQUEST_BODY {
    t3518InBlock?:  T3518_REQUEST_BODY_T3518INBLOCK
}

export type T3521_REQUEST_BODY_T3521INBLOCK_KIND = 'S' | 'R' | 'F';
export type T3521_REQUEST_BODY_T3521INBLOCK_SYMBOL = 'USDKRWSMBS' | 'USDJPYCOMP' | 'EURUSDCOMP' | 'JPYKRWCOMP' | 'USDCNYCOMP';
export interface T3521_REQUEST_BODY_T3521INBLOCK {
    kind?:  T3521_REQUEST_BODY_T3521INBLOCK_KIND
    symbol?:  T3521_REQUEST_BODY_T3521INBLOCK_SYMBOL
}


export interface T3521_REQUEST_BODY {
    t3521InBlock?:  T3521_REQUEST_BODY_T3521INBLOCK
}

export type T8428_REQUEST_BODY_T8428INBLOCK_GUBUN = '1' | '2';
export type T8428_REQUEST_BODY_T8428INBLOCK_KEY_DATE = '다음 조회시 사용함';
export type T8428_REQUEST_BODY_T8428INBLOCK_UPCODE = '001' | '301';
export interface T8428_REQUEST_BODY_T8428INBLOCK {
    fdate?:  string
    tdate?:  string
    gubun?:  T8428_REQUEST_BODY_T8428INBLOCK_GUBUN
    key_date?:  T8428_REQUEST_BODY_T8428INBLOCK_KEY_DATE
    upcode?:  T8428_REQUEST_BODY_T8428INBLOCK_UPCODE
    cnt?:  number
}


export interface T8428_REQUEST_BODY {
    t8428InBlock?:  T8428_REQUEST_BODY_T8428INBLOCK
}

export type T1631_REQUEST_BODY_T1631INBLOCK_GUBUN = '1' | '2';
export type T1631_REQUEST_BODY_T1631INBLOCK_DGUBUN = '1' | '2';
export interface T1631_REQUEST_BODY_T1631INBLOCK {
    gubun?:  T1631_REQUEST_BODY_T1631INBLOCK_GUBUN
    dgubun?:  T1631_REQUEST_BODY_T1631INBLOCK_DGUBUN
    sdate?:  string
    edate?:  string
}


export interface T1631_REQUEST_BODY {
    t1631InBlock?:  T1631_REQUEST_BODY_T1631INBLOCK
}

export type T1632_REQUEST_BODY_T1632INBLOCK_GUBUN = '0';
export type T1632_REQUEST_BODY_T1632INBLOCK_GUBUN1 = '0' | '1';
export type T1632_REQUEST_BODY_T1632INBLOCK_GUBUN2 = '1';
export type T1632_REQUEST_BODY_T1632INBLOCK_GUBUN3 = '1';
export interface T1632_REQUEST_BODY_T1632INBLOCK {
    gubun?:  T1632_REQUEST_BODY_T1632INBLOCK_GUBUN
    gubun1?:  T1632_REQUEST_BODY_T1632INBLOCK_GUBUN1
    gubun2?:  T1632_REQUEST_BODY_T1632INBLOCK_GUBUN2
    gubun3?:  T1632_REQUEST_BODY_T1632INBLOCK_GUBUN3
    date?:  string
    time?:  string
}


export interface T1632_REQUEST_BODY {
    t1632InBlock?:  T1632_REQUEST_BODY_T1632INBLOCK
}

export type T1633_REQUEST_BODY_T1633INBLOCK_GUBUN = '0';
export type T1633_REQUEST_BODY_T1633INBLOCK_GUBUN1 = '0' | '1';
export type T1633_REQUEST_BODY_T1633INBLOCK_GUBUN2 = '0';
export type T1633_REQUEST_BODY_T1633INBLOCK_GUBUN3 = '1';
export type T1633_REQUEST_BODY_T1633INBLOCK_GUBUN4 = '0' | '1';
export interface T1633_REQUEST_BODY_T1633INBLOCK {
    gubun?:  T1633_REQUEST_BODY_T1633INBLOCK_GUBUN
    gubun1?:  T1633_REQUEST_BODY_T1633INBLOCK_GUBUN1
    gubun2?:  T1633_REQUEST_BODY_T1633INBLOCK_GUBUN2
    gubun3?:  T1633_REQUEST_BODY_T1633INBLOCK_GUBUN3
    fdate?:  string
    tdate?:  string
    gubun4?:  T1633_REQUEST_BODY_T1633INBLOCK_GUBUN4
    date?:  string
}


export interface T1633_REQUEST_BODY {
    t1633InBlock?:  T1633_REQUEST_BODY_T1633INBLOCK
}

export type T1636_REQUEST_BODY_T1636INBLOCK_GUBUN = '0' | '1';
export type T1636_REQUEST_BODY_T1636INBLOCK_GUBUN1 = '0' | '1';
export type T1636_REQUEST_BODY_T1636INBLOCK_GUBUN2 = '0' | '1' | '2' | '3' | '4';
export interface T1636_REQUEST_BODY_T1636INBLOCK {
    gubun?:  T1636_REQUEST_BODY_T1636INBLOCK_GUBUN
    gubun1?:  T1636_REQUEST_BODY_T1636INBLOCK_GUBUN1
    gubun2?:  T1636_REQUEST_BODY_T1636INBLOCK_GUBUN2
    shcode?:  string
    cts_idx?:  number
}


export interface T1636_REQUEST_BODY {
    t1636InBlock?:  T1636_REQUEST_BODY_T1636INBLOCK
}


export interface T1637_REQUEST_BODY_T1637INBLOCK {
    gubun1?:  string
    gubun2?:  string
    shcode?:  string
    date?:  string
    time?:  string
    cts_idx?:  number
}


export interface T1637_REQUEST_BODY {
    t1637InBlock?:  T1637_REQUEST_BODY_T1637INBLOCK
}

export type T1640_REQUEST_BODY_T1640INBLOCK_GUBUN = '11';
export interface T1640_REQUEST_BODY_T1640INBLOCK {
    gubun?:  T1640_REQUEST_BODY_T1640INBLOCK_GUBUN
}


export interface T1640_REQUEST_BODY {
    t1640InBlock?:  T1640_REQUEST_BODY_T1640INBLOCK
}

export type T1662_REQUEST_BODY_T1662INBLOCK_GUBUN = '0';
export type T1662_REQUEST_BODY_T1662INBLOCK_GUBUN1 = '0' | '1';
export type T1662_REQUEST_BODY_T1662INBLOCK_GUBUN3 = '0' | '1';
export interface T1662_REQUEST_BODY_T1662INBLOCK {
    gubun?:  T1662_REQUEST_BODY_T1662INBLOCK_GUBUN
    gubun1?:  T1662_REQUEST_BODY_T1662INBLOCK_GUBUN1
    gubun3?:  T1662_REQUEST_BODY_T1662INBLOCK_GUBUN3
}


export interface T1662_REQUEST_BODY {
    t1662InBlock?:  T1662_REQUEST_BODY_T1662INBLOCK
}

export type T1601_REQUEST_BODY_T1601INBLOCK_GUBUN1 = '1' | '2';
export type T1601_REQUEST_BODY_T1601INBLOCK_GUBUN2 = '1' | '2';
export type T1601_REQUEST_BODY_T1601INBLOCK_GUBUN4 = '1' | '2';
export interface T1601_REQUEST_BODY_T1601INBLOCK {
    gubun1?:  T1601_REQUEST_BODY_T1601INBLOCK_GUBUN1
    gubun2?:  T1601_REQUEST_BODY_T1601INBLOCK_GUBUN2
    gubun3?:  string
    gubun4?:  T1601_REQUEST_BODY_T1601INBLOCK_GUBUN4
}


export interface T1601_REQUEST_BODY {
    t1601InBlock?:  T1601_REQUEST_BODY_T1601INBLOCK
}

export type T1602_REQUEST_BODY_T1602INBLOCK_MARKET = '1';
export type T1602_REQUEST_BODY_T1602INBLOCK_UPCODE = '001' | '101' | '301' | '900' | '700' | '800' | '550' | '560';
export type T1602_REQUEST_BODY_T1602INBLOCK_GUBUN1 = '1' | '2';
export type T1602_REQUEST_BODY_T1602INBLOCK_GUBUN2 = '0' | '1';
export interface T1602_REQUEST_BODY_T1602INBLOCK {
    market?:  T1602_REQUEST_BODY_T1602INBLOCK_MARKET
    upcode?:  T1602_REQUEST_BODY_T1602INBLOCK_UPCODE
    gubun1?:  T1602_REQUEST_BODY_T1602INBLOCK_GUBUN1
    gubun2?:  T1602_REQUEST_BODY_T1602INBLOCK_GUBUN2
    cts_time?:  string
    cts_idx?:  number
    cnt?:  number
    gubun3?:  string
}


export interface T1602_REQUEST_BODY {
    t1602InBlock?:  T1602_REQUEST_BODY_T1602INBLOCK
}

export type T1603_REQUEST_BODY_T1603INBLOCK_MARKET = '1' | '2' | '3' | '4' | '5' | '6' | '7';
export type T1603_REQUEST_BODY_T1603INBLOCK_GUBUN1 = '1' | '2' | '3' | '4' | '5' | '6' | '7' | '8' | '9' | 'A' | 'B' | 'C';
export type T1603_REQUEST_BODY_T1603INBLOCK_GUBUN2 = '0' | '1';
export interface T1603_REQUEST_BODY_T1603INBLOCK {
    market?:  T1603_REQUEST_BODY_T1603INBLOCK_MARKET
    gubun1?:  T1603_REQUEST_BODY_T1603INBLOCK_GUBUN1
    gubun2?:  T1603_REQUEST_BODY_T1603INBLOCK_GUBUN2
    cts_time?:  string
    cts_idx?:  number
    cnt?:  number
    upcode?:  string
}


export interface T1603_REQUEST_BODY {
    t1603InBlock?:  T1603_REQUEST_BODY_T1603INBLOCK
}

export type T1615_REQUEST_BODY_T1615INBLOCK_GUBUN1 = '1' | '2';
export type T1615_REQUEST_BODY_T1615INBLOCK_GUBUN2 = '1' | '2';
export interface T1615_REQUEST_BODY_T1615INBLOCK {
    gubun1?:  T1615_REQUEST_BODY_T1615INBLOCK_GUBUN1
    gubun2?:  T1615_REQUEST_BODY_T1615INBLOCK_GUBUN2
}


export interface T1615_REQUEST_BODY {
    t1615InBlock?:  T1615_REQUEST_BODY_T1615INBLOCK
}

export type T1617_REQUEST_BODY_T1617INBLOCK_GUBUN1 = '1' | '2' | '3' | '4' | '5' | '6' | '7' | '8' | '9' | '0';
export interface T1617_REQUEST_BODY_T1617INBLOCK {
    gubun1?:  T1617_REQUEST_BODY_T1617INBLOCK_GUBUN1
    gubun2?:  string
    gubun3?:  string
    cts_date?:  string
    cts_time?:  string
}


export interface T1617_REQUEST_BODY {
    t1617InBlock?:  T1617_REQUEST_BODY_T1617INBLOCK
}

export type T1621_REQUEST_BODY_T1621INBLOCK_BGUBUN = '0' | '1';
export interface T1621_REQUEST_BODY_T1621INBLOCK {
    upcode?:  string
    nmin?:  number
    cnt?:  number
    bgubun?:  T1621_REQUEST_BODY_T1621INBLOCK_BGUBUN
}


export interface T1621_REQUEST_BODY {
    t1621InBlock?:  T1621_REQUEST_BODY_T1621INBLOCK
}

export type T1664_REQUEST_BODY_T1664INBLOCK_MGUBUN = '1';
export type T1664_REQUEST_BODY_T1664INBLOCK_VAGUBUN = '1' | '2';
export type T1664_REQUEST_BODY_T1664INBLOCK_BDGUBUN = '1' | '2';
export interface T1664_REQUEST_BODY_T1664INBLOCK {
    mgubun?:  T1664_REQUEST_BODY_T1664INBLOCK_MGUBUN
    vagubun?:  T1664_REQUEST_BODY_T1664INBLOCK_VAGUBUN
    bdgubun?:  T1664_REQUEST_BODY_T1664INBLOCK_BDGUBUN
    cnt?:  number
}


export interface T1664_REQUEST_BODY {
    t1664InBlock?:  T1664_REQUEST_BODY_T1664INBLOCK
}

export type T1702_REQUEST_BODY_T1702INBLOCK_TODT = 't1702OutBlock1';
export type T1702_REQUEST_BODY_T1702INBLOCK_CTS_DATE = '연속조회시 t1702OutBlock';
export interface T1702_REQUEST_BODY_T1702INBLOCK {
    shcode?:  string
    todt?:  T1702_REQUEST_BODY_T1702INBLOCK_TODT
    volvalgb?:  string
    msmdgb?:  string
    cumulgb?:  string
    cts_date?:  T1702_REQUEST_BODY_T1702INBLOCK_CTS_DATE
    cts_idx?:  number
}


export interface T1702_REQUEST_BODY {
    t1702InBlock?:  T1702_REQUEST_BODY_T1702INBLOCK
}

export type T1716_REQUEST_BODY_T1716INBLOCK_GUBUN = '0' | '1';
export type T1716_REQUEST_BODY_T1716INBLOCK_PRGUBUN = '0' | '1';
export type T1716_REQUEST_BODY_T1716INBLOCK_ORGGUBUN = '0' | '1';
export type T1716_REQUEST_BODY_T1716INBLOCK_FRGGUBUN = '0' | '1';
export interface T1716_REQUEST_BODY_T1716INBLOCK {
    shcode?:  string
    gubun?:  T1716_REQUEST_BODY_T1716INBLOCK_GUBUN
    fromdt?:  string
    todt?:  string
    prapp?:  number
    prgubun?:  T1716_REQUEST_BODY_T1716INBLOCK_PRGUBUN
    orggubun?:  T1716_REQUEST_BODY_T1716INBLOCK_ORGGUBUN
    frggubun?:  T1716_REQUEST_BODY_T1716INBLOCK_FRGGUBUN
}


export interface T1716_REQUEST_BODY {
    t1716InBlock?:  T1716_REQUEST_BODY_T1716INBLOCK
}

export type T1717_REQUEST_BODY_T1717INBLOCK_FROMDT = 'OutBlock';
export type T1717_REQUEST_BODY_T1717INBLOCK_TODT = 'OutBlock';
export interface T1717_REQUEST_BODY_T1717INBLOCK {
    shcode?:  string
    gubun?:  string
    fromdt?:  T1717_REQUEST_BODY_T1717INBLOCK_FROMDT
    todt?:  T1717_REQUEST_BODY_T1717INBLOCK_TODT
}


export interface T1717_REQUEST_BODY {
    t1717InBlock?:  T1717_REQUEST_BODY_T1717INBLOCK
}


export interface T1950_REQUEST_BODY_T1950INBLOCK {
    shcode?:  string
}


export interface T1950_REQUEST_BODY {
    t1950InBlock?:  T1950_REQUEST_BODY_T1950INBLOCK
}


export interface T1951_REQUEST_BODY_T1951INBLOCK {
    shcode?:  string
    cvolume?:  number
    starttime?:  string
    endtime?:  string
    cts_time?:  string
}


export interface T1951_REQUEST_BODY {
    t1951InBlock?:  T1951_REQUEST_BODY_T1951INBLOCK
}


export interface T1954_REQUEST_BODY_T1954INBLOCK {
    shcode?:  string
    date?:  string
    cnt?:  number
}


export interface T1954_REQUEST_BODY {
    t1954InBlock?:  T1954_REQUEST_BODY_T1954INBLOCK
}


export interface T1956_REQUEST_BODY_T1956INBLOCK {
    shcode?:  string
}


export interface T1956_REQUEST_BODY {
    t1956InBlock?:  T1956_REQUEST_BODY_T1956INBLOCK
}


export interface T1958_REQUEST_BODY_T1958INBLOCK {
    shcode1?:  string
    shcode2?:  string
}


export interface T1958_REQUEST_BODY {
    t1958InBlock?:  T1958_REQUEST_BODY_T1958INBLOCK
}


export interface T1959_REQUEST_BODY_T1959INBLOCK {
    shcode?:  string
}


export interface T1959_REQUEST_BODY {
    t1959InBlock?:  T1959_REQUEST_BODY_T1959INBLOCK
}

export type T1960_REQUEST_BODY_T1960INBLOCK_GUBUN = '0' | '1';
export type T1960_REQUEST_BODY_T1960INBLOCK_GGUBUN = '';
export type T1960_REQUEST_BODY_T1960INBLOCK_ITEMCODE = '- 스페이스' | '- basket';
export type T1960_REQUEST_BODY_T1960INBLOCK_LASTDATE = '스페이스';
export type T1960_REQUEST_BODY_T1960INBLOCK_EXGUBUN = '1번째Byte &gt; 0' | '2번째Byte &gt; 0' | '3번재Byte &gt; 0' | '4번째Byte &gt; 0' | '1' | '2' | '3' | '4' | '5' | '6' | '7' | '6번째Byte &gt; 0';
export interface T1960_REQUEST_BODY_T1960INBLOCK {
    gubun?:  T1960_REQUEST_BODY_T1960INBLOCK_GUBUN
    ggubun?:  T1960_REQUEST_BODY_T1960INBLOCK_GGUBUN
    itemcode?:  T1960_REQUEST_BODY_T1960INBLOCK_ITEMCODE
    lastdate?:  T1960_REQUEST_BODY_T1960INBLOCK_LASTDATE
    exgubun?:  T1960_REQUEST_BODY_T1960INBLOCK_EXGUBUN
    sprice?:  number
    eprice?:  number
    volume?:  number
    sjanday?:  number
    ejanday?:  number
    idx?:  number
}


export interface T1960_REQUEST_BODY {
    t1960InBlock?:  T1960_REQUEST_BODY_T1960INBLOCK
}

export type T1961_REQUEST_BODY_T1961INBLOCK_GUBUN = '0' | '1';
export type T1961_REQUEST_BODY_T1961INBLOCK_GGUBUN = '';
export type T1961_REQUEST_BODY_T1961INBLOCK_EXGUBUN = '1번째Byte &gt; 0' | '2번째Byte &gt; 0' | '3번재Byte &gt; 0' | '4번째Byte &gt; 0' | '1' | '2' | '3' | '4' | '5' | '6' | '7' | '6번째Byte &gt; 0';
export interface T1961_REQUEST_BODY_T1961INBLOCK {
    gubun?:  T1961_REQUEST_BODY_T1961INBLOCK_GUBUN
    ggubun?:  T1961_REQUEST_BODY_T1961INBLOCK_GGUBUN
    itemcode?:  string
    lastdate?:  string
    exgubun?:  T1961_REQUEST_BODY_T1961INBLOCK_EXGUBUN
    sprice?:  number
    eprice?:  number
    volume?:  number
    sjanday?:  number
    ejanday?:  number
    idx?:  number
}


export interface T1961_REQUEST_BODY {
    t1961InBlock?:  T1961_REQUEST_BODY_T1961INBLOCK
}

export type T1964_REQUEST_BODY_T1964INBLOCK_ITEM = '0' | 'basket';
export type T1964_REQUEST_BODY_T1964INBLOCK_ISSUERCD = '000000000000';
export type T1964_REQUEST_BODY_T1964INBLOCK_LASTMONTH = '전체';
export type T1964_REQUEST_BODY_T1964INBLOCK_ELWOPT = '전체';
export type T1964_REQUEST_BODY_T1964INBLOCK_ATMGUBUN = '전체';
export type T1964_REQUEST_BODY_T1964INBLOCK_ELWTYPE = '권리전체';
export type T1964_REQUEST_BODY_T1964INBLOCK_SETTLETYPE = '결제방법전체';
export interface T1964_REQUEST_BODY_T1964INBLOCK {
    item?:  T1964_REQUEST_BODY_T1964INBLOCK_ITEM
    issuercd?:  T1964_REQUEST_BODY_T1964INBLOCK_ISSUERCD
    lastmonth?:  T1964_REQUEST_BODY_T1964INBLOCK_LASTMONTH
    elwopt?:  T1964_REQUEST_BODY_T1964INBLOCK_ELWOPT
    atmgubun?:  T1964_REQUEST_BODY_T1964INBLOCK_ATMGUBUN
    elwtype?:  T1964_REQUEST_BODY_T1964INBLOCK_ELWTYPE
    settletype?:  T1964_REQUEST_BODY_T1964INBLOCK_SETTLETYPE
    elwexecgubun?:  string
    fromrat?:  string
    torat?:  string
    volume?:  string
}


export interface T1964_REQUEST_BODY {
    t1964InBlock?:  T1964_REQUEST_BODY_T1964INBLOCK
}

export type T1966_REQUEST_BODY_T1966INBLOCK_GUBUN = '0' | '1';
export type T1966_REQUEST_BODY_T1966INBLOCK_GGUBUN = '';
export type T1966_REQUEST_BODY_T1966INBLOCK_EXGUBUN = '1번째Byte &gt; 0' | '2번째Byte &gt; 0' | '3번재Byte &gt; 0' | '4번째Byte &gt; 0' | '1' | '2' | '3' | '4' | '5' | '6' | '7' | '6번째Byte &gt; 0';
export interface T1966_REQUEST_BODY_T1966INBLOCK {
    gubun?:  T1966_REQUEST_BODY_T1966INBLOCK_GUBUN
    ggubun?:  T1966_REQUEST_BODY_T1966INBLOCK_GGUBUN
    itemcode?:  string
    lastdate?:  string
    exgubun?:  T1966_REQUEST_BODY_T1966INBLOCK_EXGUBUN
    sprice?:  number
    eprice?:  number
    volume?:  number
    sjanday?:  number
    ejanday?:  number
    idx?:  number
}


export interface T1966_REQUEST_BODY {
    t1966InBlock?:  T1966_REQUEST_BODY_T1966INBLOCK
}

export type T1969_REQUEST_BODY_T1969INBLOCK_CHKITEM = '0' | '1';
export type T1969_REQUEST_BODY_T1969INBLOCK_CBITEM = '전체' | 'basket';
export type T1969_REQUEST_BODY_T1969INBLOCK_CHKISSUER = '0' | '1';
export type T1969_REQUEST_BODY_T1969INBLOCK_CBISSUER = '전체';
export type T1969_REQUEST_BODY_T1969INBLOCK_CHKCALLPUT = '0' | '1';
export type T1969_REQUEST_BODY_T1969INBLOCK_CBCALLPUT = '전체';
export type T1969_REQUEST_BODY_T1969INBLOCK_CHKEXEC = '0' | '1';
export type T1969_REQUEST_BODY_T1969INBLOCK_CBEXEC = '&gt;=';
export type T1969_REQUEST_BODY_T1969INBLOCK_CHKTYPE = '0' | '1';
export type T1969_REQUEST_BODY_T1969INBLOCK_CBTYPE = '전체';
export type T1969_REQUEST_BODY_T1969INBLOCK_CHKSETTLE = '0' | '1';
export type T1969_REQUEST_BODY_T1969INBLOCK_CBSETTLE = '전체';
export type T1969_REQUEST_BODY_T1969INBLOCK_CHKLAST = '0' | '1';
export type T1969_REQUEST_BODY_T1969INBLOCK_CBLAST = '전체';
export type T1969_REQUEST_BODY_T1969INBLOCK_CHKELWEXEC = '0' | '1';
export type T1969_REQUEST_BODY_T1969INBLOCK_CHKVOLUME = '0' | '1';
export type T1969_REQUEST_BODY_T1969INBLOCK_CHKRATE = '0' | '1';
export type T1969_REQUEST_BODY_T1969INBLOCK_CHKPREMIUM = '0' | '1';
export type T1969_REQUEST_BODY_T1969INBLOCK_CHKPARITY = '0' | '1';
export type T1969_REQUEST_BODY_T1969INBLOCK_CHKBERATE = '0' | '1';
export type T1969_REQUEST_BODY_T1969INBLOCK_CHKCAPT = '0' | '1';
export type T1969_REQUEST_BODY_T1969INBLOCK_CHKEGEARING = '1';
export type T1969_REQUEST_BODY_T1969INBLOCK_EGEARINGS = 'e';
export type T1969_REQUEST_BODY_T1969INBLOCK_EGEARINGE = 'e';
export type T1969_REQUEST_BODY_T1969INBLOCK_CHKGEARING = '0' | '1';
export type T1969_REQUEST_BODY_T1969INBLOCK_CHKDELTA = '0' | '1';
export type T1969_REQUEST_BODY_T1969INBLOCK_CHKTHETA = '0' | '1';
export type T1969_REQUEST_BODY_T1969INBLOCK_CHKDUEDATE = '0' | '1';
export type T1969_REQUEST_BODY_T1969INBLOCK_CBKOBA = '전체';
export interface T1969_REQUEST_BODY_T1969INBLOCK {
    chkitem?:  T1969_REQUEST_BODY_T1969INBLOCK_CHKITEM
    cbitem?:  T1969_REQUEST_BODY_T1969INBLOCK_CBITEM
    chkissuer?:  T1969_REQUEST_BODY_T1969INBLOCK_CHKISSUER
    cbissuer?:  T1969_REQUEST_BODY_T1969INBLOCK_CBISSUER
    chkcallput?:  T1969_REQUEST_BODY_T1969INBLOCK_CHKCALLPUT
    cbcallput?:  T1969_REQUEST_BODY_T1969INBLOCK_CBCALLPUT
    chkexec?:  T1969_REQUEST_BODY_T1969INBLOCK_CHKEXEC
    cbexec?:  T1969_REQUEST_BODY_T1969INBLOCK_CBEXEC
    chktype?:  T1969_REQUEST_BODY_T1969INBLOCK_CHKTYPE
    cbtype?:  T1969_REQUEST_BODY_T1969INBLOCK_CBTYPE
    chksettle?:  T1969_REQUEST_BODY_T1969INBLOCK_CHKSETTLE
    cbsettle?:  T1969_REQUEST_BODY_T1969INBLOCK_CBSETTLE
    chklast?:  T1969_REQUEST_BODY_T1969INBLOCK_CHKLAST
    cblast?:  T1969_REQUEST_BODY_T1969INBLOCK_CBLAST
    chkelwexec?:  T1969_REQUEST_BODY_T1969INBLOCK_CHKELWEXEC
    elwexecs?:  number
    elwexece?:  number
    chkvolume?:  T1969_REQUEST_BODY_T1969INBLOCK_CHKVOLUME
    volumes?:  number
    volumee?:  number
    chkrate?:  T1969_REQUEST_BODY_T1969INBLOCK_CHKRATE
    rates?:  number
    ratee?:  number
    chkpremium?:  T1969_REQUEST_BODY_T1969INBLOCK_CHKPREMIUM
    premiums?:  number
    premiume?:  number
    chkparity?:  T1969_REQUEST_BODY_T1969INBLOCK_CHKPARITY
    paritys?:  number
    paritye?:  number
    chkberate?:  T1969_REQUEST_BODY_T1969INBLOCK_CHKBERATE
    berates?:  number
    beratee?:  number
    chkcapt?:  T1969_REQUEST_BODY_T1969INBLOCK_CHKCAPT
    capts?:  number
    capte?:  number
    chkegearing?:  T1969_REQUEST_BODY_T1969INBLOCK_CHKEGEARING
    egearings?:  T1969_REQUEST_BODY_T1969INBLOCK_EGEARINGS
    egearinge?:  T1969_REQUEST_BODY_T1969INBLOCK_EGEARINGE
    chkgearing?:  T1969_REQUEST_BODY_T1969INBLOCK_CHKGEARING
    gearings?:  number
    gearinge?:  number
    chkdelta?:  T1969_REQUEST_BODY_T1969INBLOCK_CHKDELTA
    deltas?:  number
    deltae?:  number
    chktheta?:  T1969_REQUEST_BODY_T1969INBLOCK_CHKTHETA
    thetas?:  number
    thetae?:  number
    chkduedate?:  T1969_REQUEST_BODY_T1969INBLOCK_CHKDUEDATE
    duedates?:  string
    duedatee?:  string
    onetickgubun?:  string
    lp_liquidity?:  string
    chklp_code?:  string
    lp_code?:  string
    chkkoba?:  string
    cbkoba?:  T1969_REQUEST_BODY_T1969INBLOCK_CBKOBA
}


export interface T1969_REQUEST_BODY {
    t1969InBlock?:  T1969_REQUEST_BODY_T1969INBLOCK
}


export interface T1971_REQUEST_BODY_T1971INBLOCK {
    shcode?:  string
}


export interface T1971_REQUEST_BODY {
    t1971InBlock?:  T1971_REQUEST_BODY_T1971INBLOCK
}


export interface T1972_REQUEST_BODY_T1972INBLOCK {
    shcode?:  string
}


export interface T1972_REQUEST_BODY {
    t1972InBlock?:  T1972_REQUEST_BODY_T1972INBLOCK
}


export interface T1973_REQUEST_BODY_T1973INBLOCK {
    shcode?:  string
    cts_time?:  string
}


export interface T1973_REQUEST_BODY {
    t1973InBlock?:  T1973_REQUEST_BODY_T1973INBLOCK
}


export interface T1974_REQUEST_BODY_T1974INBLOCK {
    shcode?:  string
}


export interface T1974_REQUEST_BODY {
    t1974InBlock?:  T1974_REQUEST_BODY_T1974INBLOCK
}

export type T1988_REQUEST_BODY_T1988INBLOCK_MKT_GB = '0' | '1' | '2';
export interface T1988_REQUEST_BODY_T1988INBLOCK {
    mkt_gb?:  T1988_REQUEST_BODY_T1988INBLOCK_MKT_GB
    chk_price?:  string
    from_price?:  string
    to_price?:  string
    chk_vol?:  string
    from_vol?:  string
    to_vol?:  string
    chk_rate?:  string
    from_rate?:  number
    to_rate?:  number
    chk_amt?:  string
    from_amt?:  string
    to_amt?:  string
    chk_up?:  string
    chk_down?:  string
}


export interface T1988_REQUEST_BODY {
    t1988InBlock?:  T1988_REQUEST_BODY_T1988INBLOCK
}


export interface T8431_REQUEST_BODY_T8431INBLOCK {
    dummy?:  string
}


export interface T8431_REQUEST_BODY {
    t8431InBlock?:  T8431_REQUEST_BODY_T8431INBLOCK
}


export interface T9905_REQUEST_BODY_T9905INBLOCK {
    dummy?:  string
}


export interface T9905_REQUEST_BODY {
    t9905InBlock?:  T9905_REQUEST_BODY_T9905INBLOCK
}


export interface T9907_REQUEST_BODY_T9907INBLOCK {
    dummy?:  string
}


export interface T9907_REQUEST_BODY {
    t9907InBlock?:  T9907_REQUEST_BODY_T9907INBLOCK
}


export interface T9942_REQUEST_BODY_T9942INBLOCK {
    dummy?:  string
}


export interface T9942_REQUEST_BODY {
    t9942InBlock?:  T9942_REQUEST_BODY_T9942INBLOCK
}


export interface T1901_REQUEST_BODY_T1901INBLOCK {
    shcode?:  string
}


export interface T1901_REQUEST_BODY {
    t1901InBlock?:  T1901_REQUEST_BODY_T1901INBLOCK
}


export interface T1902_REQUEST_BODY_T1902INBLOCK {
    shcode?:  string
    time?:  string
}


export interface T1902_REQUEST_BODY {
    t1902InBlock?:  T1902_REQUEST_BODY_T1902INBLOCK
}


export interface T1903_REQUEST_BODY_T1903INBLOCK {
    shcode?:  string
    date?:  string
}


export interface T1903_REQUEST_BODY {
    t1903InBlock?:  T1903_REQUEST_BODY_T1903INBLOCK
}


export interface T1904_REQUEST_BODY_T1904INBLOCK {
    shcode?:  string
    date?:  string
    sgb?:  string
}


export interface T1904_REQUEST_BODY {
    t1904InBlock?:  T1904_REQUEST_BODY_T1904INBLOCK
}


export interface T1906_REQUEST_BODY_T1906INBLOCK {
    shcode?:  string
}


export interface T1906_REQUEST_BODY {
    t1906InBlock?:  T1906_REQUEST_BODY_T1906INBLOCK
}


export interface T1531_REQUEST_BODY_T1531INBLOCK {
    tmname?:  string
    tmcode?:  string
}


export interface T1531_REQUEST_BODY {
    t1531InBlock?:  T1531_REQUEST_BODY_T1531INBLOCK
}


export interface T1532_REQUEST_BODY_T1532INBLOCK {
    shcode?:  string
}


export interface T1532_REQUEST_BODY {
    t1532InBlock?:  T1532_REQUEST_BODY_T1532INBLOCK
}

export type T1533_REQUEST_BODY_T1533INBLOCK_GUBUN = '1';
export interface T1533_REQUEST_BODY_T1533INBLOCK {
    gubun?:  T1533_REQUEST_BODY_T1533INBLOCK_GUBUN
    chgdate?:  number
}


export interface T1533_REQUEST_BODY {
    t1533InBlock?:  T1533_REQUEST_BODY_T1533INBLOCK
}


export interface T1537_REQUEST_BODY_T1537INBLOCK {
    tmcode?:  string
}


export interface T1537_REQUEST_BODY {
    t1537InBlock?:  T1537_REQUEST_BODY_T1537INBLOCK
}


export interface T8425_REQUEST_BODY_T8425INBLOCK {
    dummy?:  string
}


export interface T8425_REQUEST_BODY {
    t8425InBlock?:  T8425_REQUEST_BODY_T8425INBLOCK
}


export interface T1809_REQUEST_BODY_T1809INBLOCK {
    gubun?:  string
    jmGb?:  string
    jmcode?:  string
    cts?:  string
}


export interface T1809_REQUEST_BODY {
    t1809InBlock?:  T1809_REQUEST_BODY_T1809INBLOCK
}


export interface T1825_REQUEST_BODY_T1825INBLOCK {
    search_cd?:  string
    gubun?:  string
}


export interface T1825_REQUEST_BODY {
    t1825InBlock?:  T1825_REQUEST_BODY_T1825INBLOCK
}


export interface T1826_REQUEST_BODY_T1826INBLOCK {
    search_gb?:  string
}


export interface T1826_REQUEST_BODY {
    t1826InBlock?:  T1826_REQUEST_BODY_T1826INBLOCK
}

export type T1866_REQUEST_BODY_T1866INBLOCK_GB = '0' | '1' | '2';
export interface T1866_REQUEST_BODY_T1866INBLOCK {
    user_id?:  string
    gb?:  T1866_REQUEST_BODY_T1866INBLOCK_GB
    group_name?:  string
    cont?:  string
    cont_key?:  string
}


export interface T1866_REQUEST_BODY {
    t1866InBlock?:  T1866_REQUEST_BODY_T1866INBLOCK
}

export type T1859_REQUEST_BODY_T1859INBLOCK_QUERY_INDEX = 't1866  TR에서 조회한 t1866OutBlock1';
export interface T1859_REQUEST_BODY_T1859INBLOCK {
    query_index?:  T1859_REQUEST_BODY_T1859INBLOCK_QUERY_INDEX
}


export interface T1859_REQUEST_BODY {
    t1859InBlock?:  T1859_REQUEST_BODY_T1859INBLOCK
}

export type T1860_REQUEST_BODY_T1860INBLOCK_SFLAG = 'E' | 'D';
export type T1860_REQUEST_BODY_T1860INBLOCK_QUERY_INDEX = 't1866 TR에서 조회한 t1866OutBlock1';
export interface T1860_REQUEST_BODY_T1860INBLOCK {
    sSysUserFlag?:  string
    sFlag?:  T1860_REQUEST_BODY_T1860INBLOCK_SFLAG
    sAlertNum?:  string
    query_index?:  T1860_REQUEST_BODY_T1860INBLOCK_QUERY_INDEX
}


export interface T1860_REQUEST_BODY {
    t1860InBlock?:  T1860_REQUEST_BODY_T1860INBLOCK
}

export type T1441_REQUEST_BODY_T1441INBLOCK_GUBUN1 = '0' | '1' | '2';
export type T1441_REQUEST_BODY_T1441INBLOCK_GUBUN2 = '0' | '1' | '2';
export type T1441_REQUEST_BODY_T1441INBLOCK_GUBUN3 = '0' | '1';
export type T1441_REQUEST_BODY_T1441INBLOCK_JC_NUM = '증거금50' | '증거금100' | '증거금50/100' | '관리종목' | '시장경보' | '거래정지' | '우선주' | '투자유의' | '정리매매' | '불성실공시';
export interface T1441_REQUEST_BODY_T1441INBLOCK {
    gubun1?:  T1441_REQUEST_BODY_T1441INBLOCK_GUBUN1
    gubun2?:  T1441_REQUEST_BODY_T1441INBLOCK_GUBUN2
    gubun3?:  T1441_REQUEST_BODY_T1441INBLOCK_GUBUN3
    jc_num?:  T1441_REQUEST_BODY_T1441INBLOCK_JC_NUM
    sprice?:  number
    eprice?:  number
    volume?:  number
    idx?:  number
    jc_num2?:  number
}


export interface T1441_REQUEST_BODY {
    t1441InBlock?:  T1441_REQUEST_BODY_T1441INBLOCK
}


export interface T1444_REQUEST_BODY_T1444INBLOCK {
    upcode?:  string
    idx?:  number
}


export interface T1444_REQUEST_BODY {
    t1444InBlock?:  T1444_REQUEST_BODY_T1444INBLOCK
}

export type T1452_REQUEST_BODY_T1452INBLOCK_GUBUN = '0' | '1' | '2';
export type T1452_REQUEST_BODY_T1452INBLOCK_JNILGUBUN = '1' | '2';
export interface T1452_REQUEST_BODY_T1452INBLOCK {
    gubun?:  T1452_REQUEST_BODY_T1452INBLOCK_GUBUN
    jnilgubun?:  T1452_REQUEST_BODY_T1452INBLOCK_JNILGUBUN
    sdiff?:  number
    ediff?:  number
    jc_num?:  number
    sprice?:  number
    eprice?:  number
    volume?:  number
    idx?:  number
}


export interface T1452_REQUEST_BODY {
    t1452InBlock?:  T1452_REQUEST_BODY_T1452INBLOCK
}

export type T1463_REQUEST_BODY_T1463INBLOCK_GUBUN = '0' | '1' | '2';
export type T1463_REQUEST_BODY_T1463INBLOCK_JNILGUBUN = '0' | '1';
export interface T1463_REQUEST_BODY_T1463INBLOCK {
    gubun?:  T1463_REQUEST_BODY_T1463INBLOCK_GUBUN
    jnilgubun?:  T1463_REQUEST_BODY_T1463INBLOCK_JNILGUBUN
    jc_num?:  number
    sprice?:  number
    eprice?:  number
    volume?:  number
    idx?:  number
    jc_num2?:  number
}


export interface T1463_REQUEST_BODY {
    t1463InBlock?:  T1463_REQUEST_BODY_T1463INBLOCK
}

export type T1466_REQUEST_BODY_T1466INBLOCK_GUBUN = '0' | '1' | '2';
export type T1466_REQUEST_BODY_T1466INBLOCK_TYPE1 = '0';
export type T1466_REQUEST_BODY_T1466INBLOCK_TYPE2 = '0';
export interface T1466_REQUEST_BODY_T1466INBLOCK {
    gubun?:  T1466_REQUEST_BODY_T1466INBLOCK_GUBUN
    type1?:  T1466_REQUEST_BODY_T1466INBLOCK_TYPE1
    type2?:  T1466_REQUEST_BODY_T1466INBLOCK_TYPE2
    jc_num?:  number
    sprice?:  number
    eprice?:  number
    volume?:  number
    idx?:  number
    jc_num2?:  number
}


export interface T1466_REQUEST_BODY {
    t1466InBlock?:  T1466_REQUEST_BODY_T1466INBLOCK
}

export type T1481_REQUEST_BODY_T1481INBLOCK_GUBUN1 = '0' | '1' | '2';
export type T1481_REQUEST_BODY_T1481INBLOCK_GUBUN2 = '0' | '1';
export type T1481_REQUEST_BODY_T1481INBLOCK_JONGCHK = '0' | '1' | '2' | '3';
export type T1481_REQUEST_BODY_T1481INBLOCK_VOLUME = '0' | '1' | '2' | '3' | '4' | '5' | '6' | '7';
export interface T1481_REQUEST_BODY_T1481INBLOCK {
    gubun1?:  T1481_REQUEST_BODY_T1481INBLOCK_GUBUN1
    gubun2?:  T1481_REQUEST_BODY_T1481INBLOCK_GUBUN2
    jongchk?:  T1481_REQUEST_BODY_T1481INBLOCK_JONGCHK
    volume?:  T1481_REQUEST_BODY_T1481INBLOCK_VOLUME
    idx?:  number
}


export interface T1481_REQUEST_BODY {
    t1481InBlock?:  T1481_REQUEST_BODY_T1481INBLOCK
}

export type T1482_REQUEST_BODY_T1482INBLOCK_GUBUN = '0' | '1' | '2';
export type T1482_REQUEST_BODY_T1482INBLOCK_JONGCHK = '0' | '1' | '2' | '3';
export interface T1482_REQUEST_BODY_T1482INBLOCK {
    gubun?:  T1482_REQUEST_BODY_T1482INBLOCK_GUBUN
    jongchk?:  T1482_REQUEST_BODY_T1482INBLOCK_JONGCHK
    idx?:  number
}


export interface T1482_REQUEST_BODY {
    t1482InBlock?:  T1482_REQUEST_BODY_T1482INBLOCK
}

export type T1489_REQUEST_BODY_T1489INBLOCK_GUBUN = '0' | '1' | '2';
export type T1489_REQUEST_BODY_T1489INBLOCK_JGUBUN = '0' | '1';
export type T1489_REQUEST_BODY_T1489INBLOCK_JONGCHK = '증거금50' | '증거금100' | '증거금50/100' | '관리종목' | '시장경보' | '거래정지' | '우선주' | '투자유의' | '정리매매' | '불성실공시';
export interface T1489_REQUEST_BODY_T1489INBLOCK {
    gubun?:  T1489_REQUEST_BODY_T1489INBLOCK_GUBUN
    jgubun?:  T1489_REQUEST_BODY_T1489INBLOCK_JGUBUN
    jongchk?:  T1489_REQUEST_BODY_T1489INBLOCK_JONGCHK
    idx?:  number
    yesprice?:  number
    yeeprice?:  number
    yevolume?:  number
}


export interface T1489_REQUEST_BODY {
    t1489InBlock?:  T1489_REQUEST_BODY_T1489INBLOCK
}

export type T1492_REQUEST_BODY_T1492INBLOCK_GUBUN1 = '0' | '1' | '2';
export type T1492_REQUEST_BODY_T1492INBLOCK_GUBUN2 = '0' | '1';
export type T1492_REQUEST_BODY_T1492INBLOCK_JONGCHK = '전체';
export type T1492_REQUEST_BODY_T1492INBLOCK_VOLUME = '전체거래량';
export interface T1492_REQUEST_BODY_T1492INBLOCK {
    gubun1?:  T1492_REQUEST_BODY_T1492INBLOCK_GUBUN1
    gubun2?:  T1492_REQUEST_BODY_T1492INBLOCK_GUBUN2
    jongchk?:  T1492_REQUEST_BODY_T1492INBLOCK_JONGCHK
    volume?:  T1492_REQUEST_BODY_T1492INBLOCK_VOLUME
    idx?:  number
}


export interface T1492_REQUEST_BODY {
    t1492InBlock?:  T1492_REQUEST_BODY_T1492INBLOCK
}

export type T1665_REQUEST_BODY_T1665INBLOCK_MARKET = '1' | '2' | '3' | '4' | '5' | '6';
export interface T1665_REQUEST_BODY_T1665INBLOCK {
    market?:  T1665_REQUEST_BODY_T1665INBLOCK_MARKET
    upcode?:  string
    gubun2?:  string
    gubun3?:  string
    from_date?:  string
    to_date?:  string
}


export interface T1665_REQUEST_BODY {
    t1665InBlock?:  T1665_REQUEST_BODY_T1665INBLOCK
}

export type T8410_REQUEST_BODY_T8410INBLOCK_SDATE = 'Space';
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

export type T8411_REQUEST_BODY_T8411INBLOCK_SDATE = '기본값';
export interface T8411_REQUEST_BODY_T8411INBLOCK {
    shcode?:  string
    ncnt?:  number
    qrycnt?:  number
    nday?:  string
    sdate?:  T8411_REQUEST_BODY_T8411INBLOCK_SDATE
    stime?:  string
    edate?:  string
    etime?:  string
    cts_date?:  string
    cts_time?:  string
    comp_yn?:  string
}


export interface T8411_REQUEST_BODY {
    t8411InBlock?:  T8411_REQUEST_BODY_T8411INBLOCK
}

export type T8412_REQUEST_BODY_T8412INBLOCK_SDATE = '기본값';
export interface T8412_REQUEST_BODY_T8412INBLOCK {
    shcode?:  string
    ncnt?:  number
    qrycnt?:  number
    nday?:  string
    sdate?:  T8412_REQUEST_BODY_T8412INBLOCK_SDATE
    stime?:  string
    edate?:  string
    etime?:  string
    cts_date?:  string
    cts_time?:  string
    comp_yn?:  string
}


export interface T8412_REQUEST_BODY {
    t8412InBlock?:  T8412_REQUEST_BODY_T8412INBLOCK
}

export type CLNAQ00100_REQUEST_BODY_CLNAQ00100INBLOCK1_QRYTP = '0';
export type CLNAQ00100_REQUEST_BODY_CLNAQ00100INBLOCK1_SECTPCODE = '0';
export type CLNAQ00100_REQUEST_BODY_CLNAQ00100INBLOCK1_LOANTP = '1';
export interface CLNAQ00100_REQUEST_BODY_CLNAQ00100INBLOCK1 {
    QryTp?:  CLNAQ00100_REQUEST_BODY_CLNAQ00100INBLOCK1_QRYTP
    IsuNo?:  string
    SecTpCode?:  CLNAQ00100_REQUEST_BODY_CLNAQ00100INBLOCK1_SECTPCODE
    LoanIntrstGrdCode?:  string
    LoanTp?:  CLNAQ00100_REQUEST_BODY_CLNAQ00100INBLOCK1_LOANTP
}


export interface CLNAQ00100_REQUEST_BODY {
    CLNAQ00100InBlock1?:  CLNAQ00100_REQUEST_BODY_CLNAQ00100INBLOCK1
}

export type T1403_REQUEST_BODY_T1403INBLOCK_GUBUN = '0' | '1' | '2';
export interface T1403_REQUEST_BODY_T1403INBLOCK {
    gubun?:  T1403_REQUEST_BODY_T1403INBLOCK_GUBUN
    styymm?:  string
    enyymm?:  string
    idx?:  number
}


export interface T1403_REQUEST_BODY {
    t1403InBlock?:  T1403_REQUEST_BODY_T1403INBLOCK
}

export type T1411_REQUEST_BODY_T1411INBLOCK_GUBUN = '0' | '1' | '2';
export type T1411_REQUEST_BODY_T1411INBLOCK_JONGCHK = '1' | '2';
export type T1411_REQUEST_BODY_T1411INBLOCK_JKRATE = '2' | '3' | '5' | '1';
export interface T1411_REQUEST_BODY_T1411INBLOCK {
    gubun?:  T1411_REQUEST_BODY_T1411INBLOCK_GUBUN
    jongchk?:  T1411_REQUEST_BODY_T1411INBLOCK_JONGCHK
    jkrate?:  T1411_REQUEST_BODY_T1411INBLOCK_JKRATE
    shcode?:  string
    idx?:  number
}


export interface T1411_REQUEST_BODY {
    t1411InBlock?:  T1411_REQUEST_BODY_T1411INBLOCK
}

export type T1638_REQUEST_BODY_T1638INBLOCK_GUBUN1 = '1' | '2';
export type T1638_REQUEST_BODY_T1638INBLOCK_GUBUN2 = '1' | '2' | '3' | '4' | '5' | '6' | '7';
export interface T1638_REQUEST_BODY_T1638INBLOCK {
    gubun1?:  T1638_REQUEST_BODY_T1638INBLOCK_GUBUN1
    shcode?:  string
    gubun2?:  T1638_REQUEST_BODY_T1638INBLOCK_GUBUN2
}


export interface T1638_REQUEST_BODY {
    t1638InBlock?:  T1638_REQUEST_BODY_T1638INBLOCK
}

export type T1921_REQUEST_BODY_T1921INBLOCK_GUBUN = '1' | '2';
export interface T1921_REQUEST_BODY_T1921INBLOCK {
    shcode?:  string
    gubun?:  T1921_REQUEST_BODY_T1921INBLOCK_GUBUN
    date?:  string
    idx?:  number
}


export interface T1921_REQUEST_BODY {
    t1921InBlock?:  T1921_REQUEST_BODY_T1921INBLOCK
}


export interface T1926_REQUEST_BODY_T1926INBLOCK {
    shcode?:  string
}


export interface T1926_REQUEST_BODY {
    t1926InBlock?:  T1926_REQUEST_BODY_T1926INBLOCK
}


export interface T1927_REQUEST_BODY_T1927INBLOCK {
    shcode?:  string
    date?:  string
    sdate?:  string
    edate?:  string
}


export interface T1927_REQUEST_BODY {
    t1927InBlock?:  T1927_REQUEST_BODY_T1927INBLOCK
}


export interface T1941_REQUEST_BODY_T1941INBLOCK {
    shcode?:  string
    sdate?:  string
    edate?:  string
}


export interface T1941_REQUEST_BODY {
    t1941InBlock?:  T1941_REQUEST_BODY_T1941INBLOCK
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

export type CDPCQ04700_REQUEST_BODY_CDPCQ04700INBLOCK1_QRYTP = '0';
export type CDPCQ04700_REQUEST_BODY_CDPCQ04700INBLOCK1_ISULGCLSSCODE = '00';
export interface CDPCQ04700_REQUEST_BODY_CDPCQ04700INBLOCK1 {
    QryTp?:  CDPCQ04700_REQUEST_BODY_CDPCQ04700INBLOCK1_QRYTP
    QrySrtDt?:  string
    QryEndDt?:  string
    SrtNo?:  number
    PdptnCode?:  string
    IsuLgclssCode?:  CDPCQ04700_REQUEST_BODY_CDPCQ04700INBLOCK1_ISULGCLSSCODE
    IsuNo?:  string
}


export interface CDPCQ04700_REQUEST_BODY {
    CDPCQ04700InBlock1?:  CDPCQ04700_REQUEST_BODY_CDPCQ04700INBLOCK1
}

export type CSPAQ00600_REQUEST_BODY_CSPAQ00600INBLOCK1_LOANDTLCLSSCODE = '01';
export type CSPAQ00600_REQUEST_BODY_CSPAQ00600INBLOCK1_COMMDACODE = '41';
export interface CSPAQ00600_REQUEST_BODY_CSPAQ00600INBLOCK1 {
    LoanDtlClssCode?:  CSPAQ00600_REQUEST_BODY_CSPAQ00600INBLOCK1_LOANDTLCLSSCODE
    IsuNo?:  string
    OrdPrc?:  number
    CommdaCode?:  CSPAQ00600_REQUEST_BODY_CSPAQ00600INBLOCK1_COMMDACODE
}


export interface CSPAQ00600_REQUEST_BODY {
    CSPAQ00600InBlock1?:  CSPAQ00600_REQUEST_BODY_CSPAQ00600INBLOCK1
}


export interface CSPAQ12200_REQUEST_BODY_CSPAQ12200INBLOCK1 {
    BalCreTp?:  string
}


export interface CSPAQ12200_REQUEST_BODY {
    CSPAQ12200InBlock1?:  CSPAQ12200_REQUEST_BODY_CSPAQ12200INBLOCK1
}

export type CSPAQ12300_REQUEST_BODY_CSPAQ12300INBLOCK1_BALCRETP = '0' | '1' | '9';
export type CSPAQ12300_REQUEST_BODY_CSPAQ12300INBLOCK1_CMSNAPPTPCODE = '0' | '1';
export type CSPAQ12300_REQUEST_BODY_CSPAQ12300INBLOCK1_D2BALBASEQRYTP = '0' | '1';
export type CSPAQ12300_REQUEST_BODY_CSPAQ12300INBLOCK1_UPRCTPCODE = '0' | '1';
export interface CSPAQ12300_REQUEST_BODY_CSPAQ12300INBLOCK1 {
    BalCreTp?:  CSPAQ12300_REQUEST_BODY_CSPAQ12300INBLOCK1_BALCRETP
    CmsnAppTpCode?:  CSPAQ12300_REQUEST_BODY_CSPAQ12300INBLOCK1_CMSNAPPTPCODE
    D2balBaseQryTp?:  CSPAQ12300_REQUEST_BODY_CSPAQ12300INBLOCK1_D2BALBASEQRYTP
    UprcTpCode?:  CSPAQ12300_REQUEST_BODY_CSPAQ12300INBLOCK1_UPRCTPCODE
}


export interface CSPAQ12300_REQUEST_BODY {
    CSPAQ12300InBlock1?:  CSPAQ12300_REQUEST_BODY_CSPAQ12300INBLOCK1
}

export type CSPAQ13700_REQUEST_BODY_CSPAQ13700INBLOCK1_ORDMKTCODE = '00' | '10' | '20' | '30';
export type CSPAQ13700_REQUEST_BODY_CSPAQ13700INBLOCK1_BNSTPCODE = '0' | '1' | '2';
export type CSPAQ13700_REQUEST_BODY_CSPAQ13700INBLOCK1_ISUNO = '주식' | 'ELW';
export type CSPAQ13700_REQUEST_BODY_CSPAQ13700INBLOCK1_EXECYN = '0' | '1' | '3';
export type CSPAQ13700_REQUEST_BODY_CSPAQ13700INBLOCK1_SRTORDNO2 = '역순구분이 순' | '역순구분이 역순';
export type CSPAQ13700_REQUEST_BODY_CSPAQ13700INBLOCK1_BKSEQTPCODE = '0' | '1';
export type CSPAQ13700_REQUEST_BODY_CSPAQ13700INBLOCK1_ORDPTNCODE = '00' | '98' | '99' | '01' | '02' | '05' | '06' | '09' | '10' | '03' | '04' | '07' | '08' | '11' | '13' | '14' | '17' | '18';
export interface CSPAQ13700_REQUEST_BODY_CSPAQ13700INBLOCK1 {
    OrdMktCode?:  CSPAQ13700_REQUEST_BODY_CSPAQ13700INBLOCK1_ORDMKTCODE
    BnsTpCode?:  CSPAQ13700_REQUEST_BODY_CSPAQ13700INBLOCK1_BNSTPCODE
    IsuNo?:  CSPAQ13700_REQUEST_BODY_CSPAQ13700INBLOCK1_ISUNO
    ExecYn?:  CSPAQ13700_REQUEST_BODY_CSPAQ13700INBLOCK1_EXECYN
    OrdDt?:  string
    SrtOrdNo2?:  CSPAQ13700_REQUEST_BODY_CSPAQ13700INBLOCK1_SRTORDNO2
    BkseqTpCode?:  CSPAQ13700_REQUEST_BODY_CSPAQ13700INBLOCK1_BKSEQTPCODE
    OrdPtnCode?:  CSPAQ13700_REQUEST_BODY_CSPAQ13700INBLOCK1_ORDPTNCODE
}


export interface CSPAQ13700_REQUEST_BODY {
    CSPAQ13700InBlock1?:  CSPAQ13700_REQUEST_BODY_CSPAQ13700INBLOCK1
}


export interface CSPAQ22200_REQUEST_BODY_CSPAQ22200INBLOCK1 {
    BalCreTp?:  string
}


export interface CSPAQ22200_REQUEST_BODY {
    CSPAQ22200InBlock1?:  CSPAQ22200_REQUEST_BODY_CSPAQ22200INBLOCK1
}

export type CSPBQ00200_REQUEST_BODY_CSPBQ00200INBLOCK1_BNSTPCODE = '1';
export interface CSPBQ00200_REQUEST_BODY_CSPBQ00200INBLOCK1 {
    BnsTpCode?:  CSPBQ00200_REQUEST_BODY_CSPBQ00200INBLOCK1_BNSTPCODE
    IsuNo?:  string
    OrdPrc?:  number
}


export interface CSPBQ00200_REQUEST_BODY {
    CSPBQ00200InBlock1?:  CSPBQ00200_REQUEST_BODY_CSPBQ00200INBLOCK1
}

export type FOCCQ33600_REQUEST_BODY_FOCCQ33600INBLOCK1_TERMTP = '1' | '2' | '3';
export interface FOCCQ33600_REQUEST_BODY_FOCCQ33600INBLOCK1 {
    QrySrtDt?:  string
    QryEndDt?:  string
    TermTp?:  FOCCQ33600_REQUEST_BODY_FOCCQ33600INBLOCK1_TERMTP
}


export interface FOCCQ33600_REQUEST_BODY {
    FOCCQ33600InBlock1?:  FOCCQ33600_REQUEST_BODY_FOCCQ33600INBLOCK1
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


export interface T0151_REQUEST_BODY_T0151INBLOCK {
    date?:  string
    cts_medosu?:  string
    cts_expcode?:  string
    cts_price?:  string
    cts_middiv?:  string
}


export interface T0151_REQUEST_BODY {
    t0151InBlock?:  T0151_REQUEST_BODY_T0151INBLOCK
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

export type CSPAT00601_REQUEST_BODY_CSPAT00601INBLOCK1_ISUNO = '주식/ETF' | 'ELW' | 'ETN';
export type CSPAT00601_REQUEST_BODY_CSPAT00601INBLOCK1_BNSTPCODE = '1' | '2';
export type CSPAT00601_REQUEST_BODY_CSPAT00601INBLOCK1_ORDPRCPTNCODE = '00' | '03' | '05' | '06' | '07' | '61' | '81' | '82';
export type CSPAT00601_REQUEST_BODY_CSPAT00601INBLOCK1_MGNTRNCODE = '000' | '003' | '005' | '007' | '101' | '103' | '105' | '107' | '180';
export type CSPAT00601_REQUEST_BODY_CSPAT00601INBLOCK1_ORDCNDITPCODE = '0' | '1' | '2';
export interface CSPAT00601_REQUEST_BODY_CSPAT00601INBLOCK1 {
    IsuNo?:  CSPAT00601_REQUEST_BODY_CSPAT00601INBLOCK1_ISUNO
    OrdQty?:  number
    OrdPrc?:  number
    BnsTpCode?:  CSPAT00601_REQUEST_BODY_CSPAT00601INBLOCK1_BNSTPCODE
    OrdprcPtnCode?:  CSPAT00601_REQUEST_BODY_CSPAT00601INBLOCK1_ORDPRCPTNCODE
    MgntrnCode?:  CSPAT00601_REQUEST_BODY_CSPAT00601INBLOCK1_MGNTRNCODE
    LoanDt?:  string
    OrdCndiTpCode?:  CSPAT00601_REQUEST_BODY_CSPAT00601INBLOCK1_ORDCNDITPCODE
}


export interface CSPAT00601_REQUEST_BODY {
    CSPAT00601InBlock1?:  CSPAT00601_REQUEST_BODY_CSPAT00601INBLOCK1
}

export type CSPAT00701_REQUEST_BODY_CSPAT00701INBLOCK1_ISUNO = '주식' | 'ELW' | 'ETN';
export type CSPAT00701_REQUEST_BODY_CSPAT00701INBLOCK1_ORDPRCPTNCODE = '00' | '03' | '05' | '06' | '07' | '61' | '81' | '82';
export type CSPAT00701_REQUEST_BODY_CSPAT00701INBLOCK1_ORDCNDITPCODE = '0' | '1' | '2';
export interface CSPAT00701_REQUEST_BODY_CSPAT00701INBLOCK1 {
    OrgOrdNo?:  number
    IsuNo?:  CSPAT00701_REQUEST_BODY_CSPAT00701INBLOCK1_ISUNO
    OrdQty?:  number
    OrdprcPtnCode?:  CSPAT00701_REQUEST_BODY_CSPAT00701INBLOCK1_ORDPRCPTNCODE
    OrdCndiTpCode?:  CSPAT00701_REQUEST_BODY_CSPAT00701INBLOCK1_ORDCNDITPCODE
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


export interface T2101_REQUEST_BODY_T2101INBLOCK {
    focode?:  string
}


export interface T2101_REQUEST_BODY {
    t2101InBlock?:  T2101_REQUEST_BODY_T2101INBLOCK
}


export interface T2105_REQUEST_BODY_T2105INBLOCK {
    shcode?:  string
}


export interface T2105_REQUEST_BODY {
    t2105InBlock?:  T2105_REQUEST_BODY_T2105INBLOCK
}


export interface T2106_REQUEST_BODY_T2106INBLOCK {
    code?:  string
    nrec?:  string
}


export type T2106_REQUEST_BODY_T2106INBLOCK1_GUBN = '1' | '2' | '3' | '4';
export type T2106_REQUEST_BODY_T2106INBLOCK1_DAT1 = '1' | '2' | '3' | '4';
export type T2106_REQUEST_BODY_T2106INBLOCK1_DAT2 = '1' | '2';
export interface T2106_REQUEST_BODY_T2106INBLOCK1 {
    indx?:  string
    gubn?:  T2106_REQUEST_BODY_T2106INBLOCK1_GUBN
    dat1?:  T2106_REQUEST_BODY_T2106INBLOCK1_DAT1
    dat2?:  T2106_REQUEST_BODY_T2106INBLOCK1_DAT2
}


export interface T2106_REQUEST_BODY {
    t2106InBlock?:  T2106_REQUEST_BODY_T2106INBLOCK
    t2106InBlock1?:  Array<T2106_REQUEST_BODY_T2106INBLOCK1>
}


export interface T2201_REQUEST_BODY_T2201INBLOCK {
    focode?:  string
    cvolume?:  number
    stime?:  string
    etime?:  string
    cts_time?:  string
}


export interface T2201_REQUEST_BODY {
    t2201InBlock?:  T2201_REQUEST_BODY_T2201INBLOCK
}

export type T2203_REQUEST_BODY_T2203INBLOCK_FUTCHECK = '0' | '1';
export interface T2203_REQUEST_BODY_T2203INBLOCK {
    shcode?:  string
    futcheck?:  T2203_REQUEST_BODY_T2203INBLOCK_FUTCHECK
    date?:  string
    cts_code?:  string
    lastdate?:  string
    cnt?:  number
}


export interface T2203_REQUEST_BODY {
    t2203InBlock?:  T2203_REQUEST_BODY_T2203INBLOCK
}


export interface T2210_REQUEST_BODY_T2210INBLOCK {
    focode?:  string
    cvolume?:  number
    stime?:  string
    etime?:  string
}


export interface T2210_REQUEST_BODY {
    t2210InBlock?:  T2210_REQUEST_BODY_T2210INBLOCK
}

export type T2301_REQUEST_BODY_T2301INBLOCK_YYYYMM = 'ex) 미니,정규' | '위클리';
export type T2301_REQUEST_BODY_T2301INBLOCK_GUBUN = 'M' | 'G' | 'W';
export interface T2301_REQUEST_BODY_T2301INBLOCK {
    yyyymm?:  T2301_REQUEST_BODY_T2301INBLOCK_YYYYMM
    gubun?:  T2301_REQUEST_BODY_T2301INBLOCK_GUBUN
}


export interface T2301_REQUEST_BODY {
    t2301InBlock?:  T2301_REQUEST_BODY_T2301INBLOCK
}

export type T2405_REQUEST_BODY_T2405INBLOCK_BGUBUN = '0' | '1';
export type T2405_REQUEST_BODY_T2405INBLOCK_HGUBUN = '0';
export interface T2405_REQUEST_BODY_T2405INBLOCK {
    focode?:  string
    bgubun?:  T2405_REQUEST_BODY_T2405INBLOCK_BGUBUN
    nmin?:  number
    etime?:  string
    hgubun?:  T2405_REQUEST_BODY_T2405INBLOCK_HGUBUN
    cnt?:  number
    cts_time?:  string
}


export interface T2405_REQUEST_BODY {
    t2405InBlock?:  T2405_REQUEST_BODY_T2405INBLOCK
}

export type T2421_REQUEST_BODY_T2421INBLOCK_BDGUBUN = '0' | '1' | '2';
export type T2421_REQUEST_BODY_T2421INBLOCK_NMIN = 't2421InBlock';
export type T2421_REQUEST_BODY_T2421INBLOCK_TCGUBUN = '0' | '1';
export interface T2421_REQUEST_BODY_T2421INBLOCK {
    focode?:  string
    bdgubun?:  T2421_REQUEST_BODY_T2421INBLOCK_BDGUBUN
    nmin?:  T2421_REQUEST_BODY_T2421INBLOCK_NMIN
    tcgubun?:  T2421_REQUEST_BODY_T2421INBLOCK_TCGUBUN
    cnt?:  number
}


export interface T2421_REQUEST_BODY {
    t2421InBlock?:  T2421_REQUEST_BODY_T2421INBLOCK
}


export interface T2830_REQUEST_BODY_T2830INBLOCK {
    focode?:  string
}


export interface T2830_REQUEST_BODY {
    t2830InBlock?:  T2830_REQUEST_BODY_T2830INBLOCK
}


export interface T2831_REQUEST_BODY_T2831INBLOCK {
    shcode?:  string
}


export interface T2831_REQUEST_BODY {
    t2831InBlock?:  T2831_REQUEST_BODY_T2831INBLOCK
}


export interface T2832_REQUEST_BODY_T2832INBLOCK {
    focode?:  string
    cvolume?:  number
    stime?:  string
    etime?:  string
    cts_time?:  string
}


export interface T2832_REQUEST_BODY {
    t2832InBlock?:  T2832_REQUEST_BODY_T2832INBLOCK
}


export interface T2833_REQUEST_BODY_T2833INBLOCK {
    shcode?:  string
    futcheck?:  string
    date?:  string
    cts_code?:  string
    lastdate?:  string
    cnt?:  number
}


export interface T2833_REQUEST_BODY {
    t2833InBlock?:  T2833_REQUEST_BODY_T2833INBLOCK
}


export interface T2835_REQUEST_BODY_T2835INBLOCK {
    yyyymm?:  string
    gubun?:  string
    gmprice?:  number
    gmsign?:  string
    gmchange?:  number
    gmdiff?:  number
    gmvolume?:  number
    gmshcode?:  string
}


export interface T2835_REQUEST_BODY {
    t2835InBlock?:  T2835_REQUEST_BODY_T2835INBLOCK
}


export interface T8401_REQUEST_BODY_T8401INBLOCK {
    dummy?:  string
}


export interface T8401_REQUEST_BODY {
    t8401InBlock?:  T8401_REQUEST_BODY_T8401INBLOCK
}


export interface T8402_REQUEST_BODY_T8402INBLOCK {
    focode?:  string
}


export interface T8402_REQUEST_BODY {
    t8402InBlock?:  T8402_REQUEST_BODY_T8402INBLOCK
}


export interface T8403_REQUEST_BODY_T8403INBLOCK {
    shcode?:  string
}


export interface T8403_REQUEST_BODY {
    t8403InBlock?:  T8403_REQUEST_BODY_T8403INBLOCK
}


export interface T8404_REQUEST_BODY_T8404INBLOCK {
    focode?:  string
    cvolume?:  number
    stime?:  string
    etime?:  string
    cts_time?:  string
}


export interface T8404_REQUEST_BODY {
    t8404InBlock?:  T8404_REQUEST_BODY_T8404INBLOCK
}

export type T8405_REQUEST_BODY_T8405INBLOCK_FUTCHECK = '0' | '1';
export interface T8405_REQUEST_BODY_T8405INBLOCK {
    shcode?:  string
    futcheck?:  T8405_REQUEST_BODY_T8405INBLOCK_FUTCHECK
    date?:  string
    cts_code?:  string
    lastdate?:  string
    cnt?:  number
}


export interface T8405_REQUEST_BODY {
    t8405InBlock?:  T8405_REQUEST_BODY_T8405INBLOCK
}

export type T8406_REQUEST_BODY_T8406INBLOCK_CGUBUN = 'T' | 'B';
export type T8406_REQUEST_BODY_T8406INBLOCK_BGUBUN = '0' | '0초과';
export interface T8406_REQUEST_BODY_T8406INBLOCK {
    focode?:  string
    cgubun?:  T8406_REQUEST_BODY_T8406INBLOCK_CGUBUN
    bgubun?:  T8406_REQUEST_BODY_T8406INBLOCK_BGUBUN
    cnt?:  number
}


export interface T8406_REQUEST_BODY {
    t8406InBlock?:  T8406_REQUEST_BODY_T8406INBLOCK
}


export interface T8426_REQUEST_BODY_T8426INBLOCK {
    dummy?:  string
}


export interface T8426_REQUEST_BODY {
    t8426InBlock?:  T8426_REQUEST_BODY_T8426INBLOCK
}

export type T8427_REQUEST_BODY_T8427INBLOCK_FO_GBN = 'F' | 'O';
export type T8427_REQUEST_BODY_T8427INBLOCK_CP_GBN = '2' | '3';
export type T8427_REQUEST_BODY_T8427INBLOCK_DT_GBN = 'D' | 'M';
export interface T8427_REQUEST_BODY_T8427INBLOCK {
    fo_gbn?:  T8427_REQUEST_BODY_T8427INBLOCK_FO_GBN
    yyyy?:  string
    mm?:  string
    cp_gbn?:  T8427_REQUEST_BODY_T8427INBLOCK_CP_GBN
    actprice?:  number
    focode?:  string
    dt_gbn?:  T8427_REQUEST_BODY_T8427INBLOCK_DT_GBN
    min_term?:  string
    date?:  string
    time?:  string
}


export interface T8427_REQUEST_BODY {
    t8427InBlock?:  T8427_REQUEST_BODY_T8427INBLOCK
}

export type T8432_REQUEST_BODY_T8432INBLOCK_GUBUN = 'V' | 'S';
export interface T8432_REQUEST_BODY_T8432INBLOCK {
    gubun?:  T8432_REQUEST_BODY_T8432INBLOCK_GUBUN
}


export interface T8432_REQUEST_BODY {
    t8432InBlock?:  T8432_REQUEST_BODY_T8432INBLOCK
}


export interface T8433_REQUEST_BODY_T8433INBLOCK {
    dummy?:  string
}


export interface T8433_REQUEST_BODY {
    t8433InBlock?:  T8433_REQUEST_BODY_T8433INBLOCK
}


export interface T8434_REQUEST_BODY_T8434INBLOCK {
    qrycnt?:  number
    focode?:  string
}


export interface T8434_REQUEST_BODY {
    t8434InBlock?:  T8434_REQUEST_BODY_T8434INBLOCK
}

export type T8435_REQUEST_BODY_T8435INBLOCK_GUBUN = 'MF' | 'MO' | 'WK' | 'SF';
export interface T8435_REQUEST_BODY_T8435INBLOCK {
    gubun?:  T8435_REQUEST_BODY_T8435INBLOCK_GUBUN
}


export interface T8435_REQUEST_BODY {
    t8435InBlock?:  T8435_REQUEST_BODY_T8435INBLOCK
}

export type T8437_REQUEST_BODY_T8437INBLOCK_GUBUN = 'NF' | 'NM' | 'NO';
export interface T8437_REQUEST_BODY_T8437INBLOCK {
    gubun?:  T8437_REQUEST_BODY_T8437INBLOCK_GUBUN
}


export interface T8437_REQUEST_BODY {
    t8437InBlock?:  T8437_REQUEST_BODY_T8437INBLOCK
}

export type T9943_REQUEST_BODY_T9943INBLOCK_GUBUN = 'V' | 'S';
export interface T9943_REQUEST_BODY_T9943INBLOCK {
    gubun?:  T9943_REQUEST_BODY_T9943INBLOCK_GUBUN
}


export interface T9943_REQUEST_BODY {
    t9943InBlock?:  T9943_REQUEST_BODY_T9943INBLOCK
}


export interface T9944_REQUEST_BODY_T9944INBLOCK {
    dummy?:  string
}


export interface T9944_REQUEST_BODY {
    t9944InBlock?:  T9944_REQUEST_BODY_T9944INBLOCK
}

export type T2541_REQUEST_BODY_T2541INBLOCK_EITEM = '01';
export type T2541_REQUEST_BODY_T2541INBLOCK_MARKET = '0';
export interface T2541_REQUEST_BODY_T2541INBLOCK {
    eitem?:  T2541_REQUEST_BODY_T2541INBLOCK_EITEM
    market?:  T2541_REQUEST_BODY_T2541INBLOCK_MARKET
    upcode?:  string
    gubun1?:  string
    gubun2?:  string
    cts_time?:  string
    cts_idx?:  number
    cnt?:  number
}


export interface T2541_REQUEST_BODY {
    t2541InBlock?:  T2541_REQUEST_BODY_T2541INBLOCK
}

export type T2545_REQUEST_BODY_T2545INBLOCK_EITEM = '01';
export type T2545_REQUEST_BODY_T2545INBLOCK_SGUBUN = '0';
export interface T2545_REQUEST_BODY_T2545INBLOCK {
    eitem?:  T2545_REQUEST_BODY_T2545INBLOCK_EITEM
    sgubun?:  T2545_REQUEST_BODY_T2545INBLOCK_SGUBUN
    upcode?:  string
    nmin?:  number
    cnt?:  number
    bgubun?:  string
}


export interface T2545_REQUEST_BODY {
    t2545InBlock?:  T2545_REQUEST_BODY_T2545INBLOCK
}

export type T2209_REQUEST_BODY_T2209INBLOCK_CGUBUN = 'T' | 'B';
export type T2209_REQUEST_BODY_T2209INBLOCK_BGUBUN = '0' | '0초과';
export interface T2209_REQUEST_BODY_T2209INBLOCK {
    focode?:  string
    cgubun?:  T2209_REQUEST_BODY_T2209INBLOCK_CGUBUN
    bgubun?:  T2209_REQUEST_BODY_T2209INBLOCK_BGUBUN
    cnt?:  number
}


export interface T2209_REQUEST_BODY {
    t2209InBlock?:  T2209_REQUEST_BODY_T2209INBLOCK
}

export type T8414_REQUEST_BODY_T8414INBLOCK_QRYCNT = '압축모듈인 경우 최대 2000건까지 조회가능';
export type T8414_REQUEST_BODY_T8414INBLOCK_NDAY = '0';
export type T8414_REQUEST_BODY_T8414INBLOCK_SDATE = '기본값';
export type T8414_REQUEST_BODY_T8414INBLOCK_CTS_TIME = 'N';
export type T8414_REQUEST_BODY_T8414INBLOCK_COMP_YN = 'N' | 'Y';
export interface T8414_REQUEST_BODY_T8414INBLOCK {
    shcode?:  string
    ncnt?:  number
    qrycnt?:  T8414_REQUEST_BODY_T8414INBLOCK_QRYCNT
    nday?:  T8414_REQUEST_BODY_T8414INBLOCK_NDAY
    sdate?:  T8414_REQUEST_BODY_T8414INBLOCK_SDATE
    stime?:  string
    edate?:  string
    etime?:  string
    cts_date?:  string
    cts_time?:  T8414_REQUEST_BODY_T8414INBLOCK_CTS_TIME
    comp_yn?:  T8414_REQUEST_BODY_T8414INBLOCK_COMP_YN
}


export interface T8414_REQUEST_BODY {
    t8414InBlock?:  T8414_REQUEST_BODY_T8414INBLOCK
}

export type T8415_REQUEST_BODY_T8415INBLOCK_NCNT = '0' | '1' | '2' | 'n';
export type T8415_REQUEST_BODY_T8415INBLOCK_NDAY = '0';
export type T8415_REQUEST_BODY_T8415INBLOCK_SDATE = '기본값';
export type T8415_REQUEST_BODY_T8415INBLOCK_COMP_YN = 'N' | 'Y';
export interface T8415_REQUEST_BODY_T8415INBLOCK {
    shcode?:  string
    ncnt?:  T8415_REQUEST_BODY_T8415INBLOCK_NCNT
    qrycnt?:  number
    nday?:  T8415_REQUEST_BODY_T8415INBLOCK_NDAY
    sdate?:  T8415_REQUEST_BODY_T8415INBLOCK_SDATE
    stime?:  string
    edate?:  string
    etime?:  string
    cts_date?:  string
    cts_time?:  string
    comp_yn?:  T8415_REQUEST_BODY_T8415INBLOCK_COMP_YN
}


export interface T8415_REQUEST_BODY {
    t8415InBlock?:  T8415_REQUEST_BODY_T8415INBLOCK
}

export type T8416_REQUEST_BODY_T8416INBLOCK_SDATE = '기본값';
export type T8416_REQUEST_BODY_T8416INBLOCK_COMP_YN = 'N' | 'Y';
export interface T8416_REQUEST_BODY_T8416INBLOCK {
    shcode?:  string
    gubun?:  string
    qrycnt?:  number
    sdate?:  T8416_REQUEST_BODY_T8416INBLOCK_SDATE
    edate?:  string
    cts_date?:  string
    comp_yn?:  T8416_REQUEST_BODY_T8416INBLOCK_COMP_YN
}


export interface T8416_REQUEST_BODY {
    t8416InBlock?:  T8416_REQUEST_BODY_T8416INBLOCK
}


export interface T8429_REQUEST_BODY_T8429INBLOCK {
    focode?:  string
    cgubun?:  string
    bgubun?:  string
    cnt?:  number
}


export interface T8429_REQUEST_BODY {
    t8429InBlock?:  T8429_REQUEST_BODY_T8429INBLOCK
}

export type CFOAQ00600_REQUEST_BODY_CFOAQ00600INBLOCK1_FNOCLSSCODE = '00' | '11' | '12';
export type CFOAQ00600_REQUEST_BODY_CFOAQ00600INBLOCK1_PRDGRPCODE = '00' | '01' | '02' | '03' | '04' | '05' | '06';
export type CFOAQ00600_REQUEST_BODY_CFOAQ00600INBLOCK1_PRDTEXECTPCODE = '0' | '1' | '2';
export type CFOAQ00600_REQUEST_BODY_CFOAQ00600INBLOCK1_STNLNSEQTP = '3' | '4';
export interface CFOAQ00600_REQUEST_BODY_CFOAQ00600INBLOCK1 {
    QrySrtDt?:  string
    QryEndDt?:  string
    FnoClssCode?:  CFOAQ00600_REQUEST_BODY_CFOAQ00600INBLOCK1_FNOCLSSCODE
    PrdgrpCode?:  CFOAQ00600_REQUEST_BODY_CFOAQ00600INBLOCK1_PRDGRPCODE
    PrdtExecTpCode?:  CFOAQ00600_REQUEST_BODY_CFOAQ00600INBLOCK1_PRDTEXECTPCODE
    StnlnSeqTp?:  CFOAQ00600_REQUEST_BODY_CFOAQ00600INBLOCK1_STNLNSEQTP
    CommdaCode?:  string
}


export interface CFOAQ00600_REQUEST_BODY {
    CFOAQ00600InBlock1?:  CFOAQ00600_REQUEST_BODY_CFOAQ00600INBLOCK1
}

export type CFOAQ50600_REQUEST_BODY_CFOAQ50600INBLOCK1_BALEVALTP = '0' | '1' | '2';
export type CFOAQ50600_REQUEST_BODY_CFOAQ50600INBLOCK1_FUTSPRCEVALTP = '1' | '2';
export type CFOAQ50600_REQUEST_BODY_CFOAQ50600INBLOCK1_LQDTQTYQRYTP = '1';
export interface CFOAQ50600_REQUEST_BODY_CFOAQ50600INBLOCK1 {
    OrdDt?:  string
    BalEvalTp?:  CFOAQ50600_REQUEST_BODY_CFOAQ50600INBLOCK1_BALEVALTP
    FutsPrcEvalTp?:  CFOAQ50600_REQUEST_BODY_CFOAQ50600INBLOCK1_FUTSPRCEVALTP
    LqdtQtyQryTp?:  CFOAQ50600_REQUEST_BODY_CFOAQ50600INBLOCK1_LQDTQTYQRYTP
}


export interface CFOAQ50600_REQUEST_BODY {
    CFOAQ50600InBlock1?:  CFOAQ50600_REQUEST_BODY_CFOAQ50600INBLOCK1
}

export type CFOAQ10100_REQUEST_BODY_CFOAQ10100INBLOCK1_QRYTP = '1' | '2' | '3';
export type CFOAQ10100_REQUEST_BODY_CFOAQ10100INBLOCK1_BNSTPCODE = '1' | '2';
export type CFOAQ10100_REQUEST_BODY_CFOAQ10100INBLOCK1_FNOORDPRCPTNCODE = '00' | '03' | '05' | '06';
export interface CFOAQ10100_REQUEST_BODY_CFOAQ10100INBLOCK1 {
    QryTp?:  CFOAQ10100_REQUEST_BODY_CFOAQ10100INBLOCK1_QRYTP
    OrdAmt?:  number
    RatVal?:  number
    FnoIsuNo?:  string
    BnsTpCode?:  CFOAQ10100_REQUEST_BODY_CFOAQ10100INBLOCK1_BNSTPCODE
    FnoOrdPrc?:  number
    FnoOrdprcPtnCode?:  CFOAQ10100_REQUEST_BODY_CFOAQ10100INBLOCK1_FNOORDPRCPTNCODE
}


export interface CFOAQ10100_REQUEST_BODY {
    CFOAQ10100InBlock1?:  CFOAQ10100_REQUEST_BODY_CFOAQ10100INBLOCK1
}


export interface CFOBQ10500_REQUEST_BODY_CFOBQ10500INBLOCK1 {
}


export interface CFOBQ10500_REQUEST_BODY {
    CFOBQ10500InBlock1?:  CFOBQ10500_REQUEST_BODY_CFOBQ10500INBLOCK1
}


export interface CFOEQ11100_REQUEST_BODY_CFOEQ11100INBLOCK1 {
    BnsDt?:  string
}


export interface CFOEQ11100_REQUEST_BODY {
    CFOEQ11100InBlock1?:  CFOEQ11100_REQUEST_BODY_CFOEQ11100INBLOCK1
}

export type CFOEQ82600_REQUEST_BODY_CFOEQ82600INBLOCK1_QRYTP = '1' | '2' | '3';
export type CFOEQ82600_REQUEST_BODY_CFOEQ82600INBLOCK1_STNLNSEQTP = '1' | '2';
export type CFOEQ82600_REQUEST_BODY_CFOEQ82600INBLOCK1_FNOBALEVALTPCODE = '0' | '1' | '2';
export interface CFOEQ82600_REQUEST_BODY_CFOEQ82600INBLOCK1 {
    QrySrtDt?:  string
    QryEndDt?:  string
    QryTp?:  CFOEQ82600_REQUEST_BODY_CFOEQ82600INBLOCK1_QRYTP
    StnlnSeqTp?:  CFOEQ82600_REQUEST_BODY_CFOEQ82600INBLOCK1_STNLNSEQTP
    FnoBalEvalTpCode?:  CFOEQ82600_REQUEST_BODY_CFOEQ82600INBLOCK1_FNOBALEVALTPCODE
}


export interface CFOEQ82600_REQUEST_BODY {
    CFOEQ82600InBlock1?:  CFOEQ82600_REQUEST_BODY_CFOEQ82600INBLOCK1
}

export type CFOFQ02400_REQUEST_BODY_CFOFQ02400INBLOCK1_REGMKTCODE = '99' | '40' | '20' | '10' | '50';
export interface CFOFQ02400_REQUEST_BODY_CFOFQ02400INBLOCK1 {
    RegMktCode?:  CFOFQ02400_REQUEST_BODY_CFOFQ02400INBLOCK1_REGMKTCODE
    BuyDt?:  string
}


export interface CFOFQ02400_REQUEST_BODY {
    CFOFQ02400InBlock1?:  CFOFQ02400_REQUEST_BODY_CFOFQ02400INBLOCK1
}

export type T0434_REQUEST_BODY_T0434INBLOCK_CHEGB = '1' | '2';
export type T0434_REQUEST_BODY_T0434INBLOCK_SORTGB = '1' | '2';
export interface T0434_REQUEST_BODY_T0434INBLOCK {
    expcode?:  string
    chegb?:  T0434_REQUEST_BODY_T0434INBLOCK_CHEGB
    sortgb?:  T0434_REQUEST_BODY_T0434INBLOCK_SORTGB
    cts_ordno?:  string
}


export interface T0434_REQUEST_BODY {
    t0434InBlock?:  T0434_REQUEST_BODY_T0434INBLOCK
}


export interface T0441_REQUEST_BODY_T0441INBLOCK {
    cts_expcode?:  string
    cts_medocd?:  string
}


export interface T0441_REQUEST_BODY {
    t0441InBlock?:  T0441_REQUEST_BODY_T0441INBLOCK
}

export type CEXAQ21100_REQUEST_BODY_CEXAQ21100INBLOCK1_CHOICINPTTPCODE = '1';
export type CEXAQ21100_REQUEST_BODY_CEXAQ21100INBLOCK1_PRDTEXECTPCODE = '0' | '1' | '2';
export type CEXAQ21100_REQUEST_BODY_CEXAQ21100INBLOCK1_STNLNSEQTP = '0' | '1';
export interface CEXAQ21100_REQUEST_BODY_CEXAQ21100INBLOCK1 {
    ChoicInptTpCode?:  CEXAQ21100_REQUEST_BODY_CEXAQ21100INBLOCK1_CHOICINPTTPCODE
    PrdtExecTpCode?:  CEXAQ21100_REQUEST_BODY_CEXAQ21100INBLOCK1_PRDTEXECTPCODE
    StnlnSeqTp?:  CEXAQ21100_REQUEST_BODY_CEXAQ21100INBLOCK1_STNLNSEQTP
}


export interface CEXAQ21100_REQUEST_BODY {
    CEXAQ21100InBlock1?:  CEXAQ21100_REQUEST_BODY_CEXAQ21100INBLOCK1
}

export type CEXAQ21200_REQUEST_BODY_CEXAQ21200INBLOCK1_QRYTP = '';
export type CEXAQ21200_REQUEST_BODY_CEXAQ21200INBLOCK1_ORDAMT = '';
export type CEXAQ21200_REQUEST_BODY_CEXAQ21200INBLOCK1_RATVAL = '';
export type CEXAQ21200_REQUEST_BODY_CEXAQ21200INBLOCK1_BNSTPCODE = '1' | '2';
export type CEXAQ21200_REQUEST_BODY_CEXAQ21200INBLOCK1_ERXPRCCNDITPCODE = '1' | '2';
export interface CEXAQ21200_REQUEST_BODY_CEXAQ21200INBLOCK1 {
    QryTp?:  CEXAQ21200_REQUEST_BODY_CEXAQ21200INBLOCK1_QRYTP
    OrdAmt?:  CEXAQ21200_REQUEST_BODY_CEXAQ21200INBLOCK1_ORDAMT
    RatVal?:  CEXAQ21200_REQUEST_BODY_CEXAQ21200INBLOCK1_RATVAL
    FnoIsuNo?:  string
    BnsTpCode?:  CEXAQ21200_REQUEST_BODY_CEXAQ21200INBLOCK1_BNSTPCODE
    OrdPrc?:  number
    ErxPrcCndiTpCode?:  CEXAQ21200_REQUEST_BODY_CEXAQ21200INBLOCK1_ERXPRCCNDITPCODE
}


export interface CEXAQ21200_REQUEST_BODY {
    CEXAQ21200InBlock1?:  CEXAQ21200_REQUEST_BODY_CEXAQ21200INBLOCK1
}

export type CEXAQ31100_REQUEST_BODY_CEXAQ31100INBLOCK1_BALEVALTP = '';
export type CEXAQ31100_REQUEST_BODY_CEXAQ31100INBLOCK1_FUTSPRCEVALTP = '';
export interface CEXAQ31100_REQUEST_BODY_CEXAQ31100INBLOCK1 {
    IsuCode?:  string
    BalEvalTp?:  CEXAQ31100_REQUEST_BODY_CEXAQ31100INBLOCK1_BALEVALTP
    FutsPrcEvalTp?:  CEXAQ31100_REQUEST_BODY_CEXAQ31100INBLOCK1_FUTSPRCEVALTP
}


export interface CEXAQ31100_REQUEST_BODY {
    CEXAQ31100InBlock1?:  CEXAQ31100_REQUEST_BODY_CEXAQ31100INBLOCK1
}

export type CEXAQ31200_REQUEST_BODY_CEXAQ31200INBLOCK1_BALEVALTP = '1';
export type CEXAQ31200_REQUEST_BODY_CEXAQ31200INBLOCK1_FUTSPRCEVALTP = '1';
export interface CEXAQ31200_REQUEST_BODY_CEXAQ31200INBLOCK1 {
    BalEvalTp?:  CEXAQ31200_REQUEST_BODY_CEXAQ31200INBLOCK1_BALEVALTP
    FutsPrcEvalTp?:  CEXAQ31200_REQUEST_BODY_CEXAQ31200INBLOCK1_FUTSPRCEVALTP
}


export interface CEXAQ31200_REQUEST_BODY {
    CEXAQ31200InBlock1?:  CEXAQ31200_REQUEST_BODY_CEXAQ31200INBLOCK1
}

export type CEXAQ44200_REQUEST_BODY_CEXAQ44200INBLOCK1_PRDTEXECTPCODE = '0' | '1' | '2';
export type CEXAQ44200_REQUEST_BODY_CEXAQ44200INBLOCK1_STNLNSEQTP = '3' | '4';
export interface CEXAQ44200_REQUEST_BODY_CEXAQ44200INBLOCK1 {
    QrySrtDt?:  string
    QryEndDt?:  string
    PrdtExecTpCode?:  CEXAQ44200_REQUEST_BODY_CEXAQ44200INBLOCK1_PRDTEXECTPCODE
    FnoTrdPtnCode?:  string
    SrtOrdNo2?:  number
    StnlnSeqTp?:  CEXAQ44200_REQUEST_BODY_CEXAQ44200INBLOCK1_STNLNSEQTP
}


export interface CEXAQ44200_REQUEST_BODY {
    CEXAQ44200InBlock1?:  CEXAQ44200_REQUEST_BODY_CEXAQ44200INBLOCK1
}

export type FOCCQ33700_REQUEST_BODY_FOCCQ33700INBLOCK1_QRYTP = '1' | '2' | '3';
export type FOCCQ33700_REQUEST_BODY_FOCCQ33700INBLOCK1_BASEAMTTP = '1' | '2' | '3';
export interface FOCCQ33700_REQUEST_BODY_FOCCQ33700INBLOCK1 {
    QrySrtDt?:  string
    QryEndDt?:  string
    QryTp?:  FOCCQ33700_REQUEST_BODY_FOCCQ33700INBLOCK1_QRYTP
    BaseAmtTp?:  FOCCQ33700_REQUEST_BODY_FOCCQ33700INBLOCK1_BASEAMTTP
    QryTermTp?:  string
    PnlCalcTpCode?:  string
}


export interface FOCCQ33700_REQUEST_BODY {
    FOCCQ33700InBlock1?:  FOCCQ33700_REQUEST_BODY_FOCCQ33700INBLOCK1
}

export type CFOAT00100_REQUEST_BODY_CFOAT00100INBLOCK1_BNSTPCODE = '1' | '2';
export type CFOAT00100_REQUEST_BODY_CFOAT00100INBLOCK1_FNOORDPRCPTNCODE = '00' | '03' | '05' | '06' | '10' | '20' | '13' | '23' | '16' | '26';
export interface CFOAT00100_REQUEST_BODY_CFOAT00100INBLOCK1 {
    FnoIsuNo?:  string
    BnsTpCode?:  CFOAT00100_REQUEST_BODY_CFOAT00100INBLOCK1_BNSTPCODE
    FnoOrdprcPtnCode?:  CFOAT00100_REQUEST_BODY_CFOAT00100INBLOCK1_FNOORDPRCPTNCODE
    FnoOrdPrc?:  number
    OrdQty?:  number
}


export interface CFOAT00100_REQUEST_BODY {
    CFOAT00100InBlock1?:  CFOAT00100_REQUEST_BODY_CFOAT00100INBLOCK1
}

export type CFOAT00200_REQUEST_BODY_CFOAT00200INBLOCK1_FNOORDPRCPTNCODE = '00' | '03' | '05' | '06' | '10' | '20' | '13' | '23' | '16' | '26';
export interface CFOAT00200_REQUEST_BODY_CFOAT00200INBLOCK1 {
    FnoIsuNo?:  string
    OrgOrdNo?:  number
    FnoOrdprcPtnCode?:  CFOAT00200_REQUEST_BODY_CFOAT00200INBLOCK1_FNOORDPRCPTNCODE
    FnoOrdPrc?:  number
    MdfyQty?:  number
}


export interface CFOAT00200_REQUEST_BODY {
    CFOAT00200InBlock1?:  CFOAT00200_REQUEST_BODY_CFOAT00200INBLOCK1
}


export interface CFOAT00300_REQUEST_BODY_CFOAT00300INBLOCK1 {
    FnoIsuNo?:  string
    OrgOrdNo?:  number
    CancQty?:  number
}


export interface CFOAT00300_REQUEST_BODY {
    CFOAT00300InBlock1?:  CFOAT00300_REQUEST_BODY_CFOAT00300INBLOCK1
}

export type CFOBQ10800_REQUEST_BODY_CFOBQ10800INBLOCK1_ISUSMCLSSCODE = '501' | '505' | '506' | '509' | '5AF';
export type CFOBQ10800_REQUEST_BODY_CFOBQ10800INBLOCK1_ISUMDCLSSCODE = '00' | '01' | '02' | '03' | '04' | '05' | '06' | '10';
export interface CFOBQ10800_REQUEST_BODY_CFOBQ10800INBLOCK1 {
    SpclDtPtnCode?:  string
    SettWklyCnt?:  string
    DueYymm?:  string
    IsuSmclssCode?:  CFOBQ10800_REQUEST_BODY_CFOBQ10800INBLOCK1_ISUSMCLSSCODE
    IsuMdclssCode?:  CFOBQ10800_REQUEST_BODY_CFOBQ10800INBLOCK1_ISUMDCLSSCODE
}


export interface CFOBQ10800_REQUEST_BODY {
    CFOBQ10800InBlock1?:  CFOBQ10800_REQUEST_BODY_CFOBQ10800INBLOCK1
}

export type CEXAT11100_REQUEST_BODY_CEXAT11100INBLOCK1_BNSTPCODE = '1' | '2';
export type CEXAT11100_REQUEST_BODY_CEXAT11100INBLOCK1_ERXPRCCNDITPCODE = '1' | '2';
export interface CEXAT11100_REQUEST_BODY_CEXAT11100INBLOCK1 {
    FnoIsuNo?:  string
    BnsTpCode?:  CEXAT11100_REQUEST_BODY_CEXAT11100INBLOCK1_BNSTPCODE
    ErxPrcCndiTpCode?:  CEXAT11100_REQUEST_BODY_CEXAT11100INBLOCK1_ERXPRCCNDITPCODE
    OrdPrc?:  number
    OrdQty?:  number
}


export interface CEXAT11100_REQUEST_BODY {
    CEXAT11100InBlock1?:  CEXAT11100_REQUEST_BODY_CEXAT11100INBLOCK1
}


export interface CEXAT11200_REQUEST_BODY_CEXAT11200INBLOCK1 {
    OrgOrdNo?:  number
    FnoIsuNo?:  string
    OrdPrc?:  number
}


export interface CEXAT11200_REQUEST_BODY {
    CEXAT11200InBlock1?:  CEXAT11200_REQUEST_BODY_CEXAT11200INBLOCK1
}


export interface CEXAT11300_REQUEST_BODY_CEXAT11300INBLOCK1 {
    OrgOrdNo?:  number
    FnoIsuNo?:  string
}


export interface CEXAT11300_REQUEST_BODY {
    CEXAT11300InBlock1?:  CEXAT11300_REQUEST_BODY_CEXAT11300INBLOCK1
}


export interface MMDAQ91200_REQUEST_BODY_MMDAQ91200INBLOCK1 {
    IsuLgclssCode?:  string
    IsuMdclssCode?:  string
}


export interface MMDAQ91200_REQUEST_BODY {
    MMDAQ91200InBlock1?:  MMDAQ91200_REQUEST_BODY_MMDAQ91200INBLOCK1
}


export interface O3101_REQUEST_BODY_O3101INBLOCK {
    gubun?:  string
}


export interface O3101_REQUEST_BODY {
    o3101InBlock?:  O3101_REQUEST_BODY_O3101INBLOCK
}

export type O3104_REQUEST_BODY_O3104INBLOCK_GUBUN = '0' | '1' | '2';
export interface O3104_REQUEST_BODY_O3104INBLOCK {
    gubun?:  O3104_REQUEST_BODY_O3104INBLOCK_GUBUN
    shcode?:  string
    date?:  string
}


export interface O3104_REQUEST_BODY {
    o3104InBlock?:  O3104_REQUEST_BODY_O3104INBLOCK
}


export interface O3105_REQUEST_BODY_O3105INBLOCK {
    symbol?:  string
}


export interface O3105_REQUEST_BODY {
    o3105InBlock?:  O3105_REQUEST_BODY_O3105INBLOCK
}


export interface O3106_REQUEST_BODY_O3106INBLOCK {
    symbol?:  string
}


export interface O3106_REQUEST_BODY {
    o3106InBlock?:  O3106_REQUEST_BODY_O3106INBLOCK
}


export interface O3107_REQUEST_BODY_O3107INBLOCK {
    symbol?:  string
}


export interface O3107_REQUEST_BODY {
    o3107InBlock?:  Array<O3107_REQUEST_BODY_O3107INBLOCK>
}

export type O3116_REQUEST_BODY_O3116INBLOCK_GUBUN = '0';
export interface O3116_REQUEST_BODY_O3116INBLOCK {
    gubun?:  O3116_REQUEST_BODY_O3116INBLOCK_GUBUN
    shcode?:  string
    readcnt?:  number
    cts_seq?:  number
}


export interface O3116_REQUEST_BODY {
    o3116InBlock?:  O3116_REQUEST_BODY_O3116INBLOCK
}


export interface O3121_REQUEST_BODY_O3121INBLOCK {
    MktGb?:  string
    BscGdsCd?:  string
}


export interface O3121_REQUEST_BODY {
    o3121InBlock?:  O3121_REQUEST_BODY_O3121INBLOCK
}


export interface O3123_REQUEST_BODY_O3123INBLOCK {
    mktgb?:  string
    shcode?:  string
    ncnt?:  number
    readcnt?:  number
    cts_date?:  string
    cts_time?:  string
}


export interface O3123_REQUEST_BODY {
    o3123InBlock?:  O3123_REQUEST_BODY_O3123INBLOCK
}


export interface O3125_REQUEST_BODY_O3125INBLOCK {
    mktgb?:  string
    symbol?:  string
}


export interface O3125_REQUEST_BODY {
    o3125InBlock?:  O3125_REQUEST_BODY_O3125INBLOCK
}


export interface O3126_REQUEST_BODY_O3126INBLOCK {
    mktgb?:  string
    symbol?:  string
}


export interface O3126_REQUEST_BODY {
    o3126InBlock?:  O3126_REQUEST_BODY_O3126INBLOCK
}


export interface O3127_REQUEST_BODY_O3127INBLOCK {
    nrec?:  number
}



export interface O3127_REQUEST_BODY_O3127INBLOCK1 {
    mktgb?:  string
    symbol?:  string
}


export interface O3127_REQUEST_BODY {
    o3127InBlock?:  O3127_REQUEST_BODY_O3127INBLOCK
    o3127InBlock1?:  Array<O3127_REQUEST_BODY_O3127INBLOCK1>
}


export interface O3128_REQUEST_BODY_O3128INBLOCK {
    mktgb?:  string
    shcode?:  string
    gubun?:  string
    qrycnt?:  number
    sdate?:  string
    edate?:  string
    cts_date?:  string
}


export interface O3128_REQUEST_BODY {
    o3128InBlock?:  O3128_REQUEST_BODY_O3128INBLOCK
}


export interface O3136_REQUEST_BODY_O3136INBLOCK {
    gubun?:  string
    mktgb?:  string
    shcode?:  string
    readcnt?:  number
    cts_seq?:  number
}


export interface O3136_REQUEST_BODY {
    o3136InBlock?:  O3136_REQUEST_BODY_O3136INBLOCK
}


export interface O3137_REQUEST_BODY_O3137INBLOCK {
    mktgb?:  string
    shcode?:  string
    ncnt?:  number
    qrycnt?:  number
    cts_seq?:  string
    cts_daygb?:  string
}


export interface O3137_REQUEST_BODY {
    o3137InBlock?:  O3137_REQUEST_BODY_O3137INBLOCK
}

export type CIDBQ01400_REQUEST_BODY_CIDBQ01400INBLOCK1_QRYTPCODE = '1' | '2' | '3';
export type CIDBQ01400_REQUEST_BODY_CIDBQ01400INBLOCK1_BNSTPCODE = '1' | '2';
export type CIDBQ01400_REQUEST_BODY_CIDBQ01400INBLOCK1_ABRDFUTSORDPTNCODE = '1' | '2';
export interface CIDBQ01400_REQUEST_BODY_CIDBQ01400INBLOCK1 {
    QryTpCode?:  CIDBQ01400_REQUEST_BODY_CIDBQ01400INBLOCK1_QRYTPCODE
    IsuCodeVal?:  string
    BnsTpCode?:  CIDBQ01400_REQUEST_BODY_CIDBQ01400INBLOCK1_BNSTPCODE
    OvrsDrvtOrdPrc?:  number
    AbrdFutsOrdPtnCode?:  CIDBQ01400_REQUEST_BODY_CIDBQ01400INBLOCK1_ABRDFUTSORDPTNCODE
}


export interface CIDBQ01400_REQUEST_BODY {
    CIDBQ01400InBlock1?:  CIDBQ01400_REQUEST_BODY_CIDBQ01400INBLOCK1
}

export type CIDBQ01500_REQUEST_BODY_CIDBQ01500INBLOCK1_ACNTTPCODE = '1';
export type CIDBQ01500_REQUEST_BODY_CIDBQ01500INBLOCK1_BALTPCODE = '1' | '2';
export interface CIDBQ01500_REQUEST_BODY_CIDBQ01500INBLOCK1 {
    AcntTpCode?:  CIDBQ01500_REQUEST_BODY_CIDBQ01500INBLOCK1_ACNTTPCODE
    QryDt?:  string
    BalTpCode?:  CIDBQ01500_REQUEST_BODY_CIDBQ01500INBLOCK1_BALTPCODE
}


export interface CIDBQ01500_REQUEST_BODY {
    CIDBQ01500InBlock1?:  CIDBQ01500_REQUEST_BODY_CIDBQ01500INBLOCK1
}

export type CIDBQ01800_REQUEST_BODY_CIDBQ01800INBLOCK1_ORDSTATCODE = '0' | '1' | '2';
export type CIDBQ01800_REQUEST_BODY_CIDBQ01800INBLOCK1_BNSTPCODE = '0' | '1' | '2';
export type CIDBQ01800_REQUEST_BODY_CIDBQ01800INBLOCK1_QRYTPCODE = '1' | '2';
export type CIDBQ01800_REQUEST_BODY_CIDBQ01800INBLOCK1_ORDPTNCODE = '00' | '01' | '02' | '03';
export type CIDBQ01800_REQUEST_BODY_CIDBQ01800INBLOCK1_OVRSDRVTFNOTPCODE = 'A' | 'F' | 'O';
export interface CIDBQ01800_REQUEST_BODY_CIDBQ01800INBLOCK1 {
    IsuCodeVal?:  string
    OrdDt?:  string
    ThdayTpCode?:  string
    OrdStatCode?:  CIDBQ01800_REQUEST_BODY_CIDBQ01800INBLOCK1_ORDSTATCODE
    BnsTpCode?:  CIDBQ01800_REQUEST_BODY_CIDBQ01800INBLOCK1_BNSTPCODE
    QryTpCode?:  CIDBQ01800_REQUEST_BODY_CIDBQ01800INBLOCK1_QRYTPCODE
    OrdPtnCode?:  CIDBQ01800_REQUEST_BODY_CIDBQ01800INBLOCK1_ORDPTNCODE
    OvrsDrvtFnoTpCode?:  CIDBQ01800_REQUEST_BODY_CIDBQ01800INBLOCK1_OVRSDRVTFNOTPCODE
}


export interface CIDBQ01800_REQUEST_BODY {
    CIDBQ01800InBlock1?:  CIDBQ01800_REQUEST_BODY_CIDBQ01800INBLOCK1
}

export type CIDBQ02400_REQUEST_BODY_CIDBQ02400INBLOCK1_THDAYTPCODE = '0' | '1';
export type CIDBQ02400_REQUEST_BODY_CIDBQ02400INBLOCK1_ORDSTATCODE = '0' | '1' | '2';
export type CIDBQ02400_REQUEST_BODY_CIDBQ02400INBLOCK1_BNSTPCODE = '0' | '1' | '2';
export type CIDBQ02400_REQUEST_BODY_CIDBQ02400INBLOCK1_QRYTPCODE = '1' | '2';
export type CIDBQ02400_REQUEST_BODY_CIDBQ02400INBLOCK1_ORDPTNCODE = '00' | '01' | '02' | '03';
export type CIDBQ02400_REQUEST_BODY_CIDBQ02400INBLOCK1_OVRSDRVTFNOTPCODE = 'A' | 'F' | 'O';
export interface CIDBQ02400_REQUEST_BODY_CIDBQ02400INBLOCK1 {
    IsuCodeVal?:  string
    QrySrtDt?:  string
    QryEndDt?:  string
    ThdayTpCode?:  CIDBQ02400_REQUEST_BODY_CIDBQ02400INBLOCK1_THDAYTPCODE
    OrdStatCode?:  CIDBQ02400_REQUEST_BODY_CIDBQ02400INBLOCK1_ORDSTATCODE
    BnsTpCode?:  CIDBQ02400_REQUEST_BODY_CIDBQ02400INBLOCK1_BNSTPCODE
    QryTpCode?:  CIDBQ02400_REQUEST_BODY_CIDBQ02400INBLOCK1_QRYTPCODE
    OrdPtnCode?:  CIDBQ02400_REQUEST_BODY_CIDBQ02400INBLOCK1_ORDPTNCODE
    OvrsDrvtFnoTpCode?:  CIDBQ02400_REQUEST_BODY_CIDBQ02400INBLOCK1_OVRSDRVTFNOTPCODE
}


export interface CIDBQ02400_REQUEST_BODY {
    CIDBQ02400InBlock1?:  CIDBQ02400_REQUEST_BODY_CIDBQ02400INBLOCK1
}

export type CIDBQ03000_REQUEST_BODY_CIDBQ03000INBLOCK1_ACNTTPCODE = '1' | '2';
export interface CIDBQ03000_REQUEST_BODY_CIDBQ03000INBLOCK1 {
    AcntTpCode?:  CIDBQ03000_REQUEST_BODY_CIDBQ03000INBLOCK1_ACNTTPCODE
    TrdDt?:  string
}


export interface CIDBQ03000_REQUEST_BODY {
    CIDBQ03000InBlock1?:  CIDBQ03000_REQUEST_BODY_CIDBQ03000INBLOCK1
}

export type CIDBQ05300_REQUEST_BODY_CIDBQ05300INBLOCK1_OVRSACNTTPCODE = '1';
export type CIDBQ05300_REQUEST_BODY_CIDBQ05300INBLOCK1_CRCYCODE = 'ALL' | 'CAD' | 'CHF' | 'EUR' | 'GBP' | 'HKD' | 'JPY' | 'SGD' | 'USD';
export interface CIDBQ05300_REQUEST_BODY_CIDBQ05300INBLOCK1 {
    OvrsAcntTpCode?:  CIDBQ05300_REQUEST_BODY_CIDBQ05300INBLOCK1_OVRSACNTTPCODE
    CrcyCode?:  CIDBQ05300_REQUEST_BODY_CIDBQ05300INBLOCK1_CRCYCODE
}


export interface CIDBQ05300_REQUEST_BODY {
    CIDBQ05300InBlock1?:  CIDBQ05300_REQUEST_BODY_CIDBQ05300INBLOCK1
}


export interface CIDEQ00800_REQUEST_BODY_CIDEQ00800INBLOCK1 {
    RecCnt?:  number
    TrdDt?:  string
}


export interface CIDEQ00800_REQUEST_BODY {
    CIDEQ00800InBlock1?:  CIDEQ00800_REQUEST_BODY_CIDEQ00800INBLOCK1
}

export type CIDBT00100_REQUEST_BODY_CIDBT00100INBLOCK1_FUTSORDTPCODE = '1';
export type CIDBT00100_REQUEST_BODY_CIDBT00100INBLOCK1_BNSTPCODE = '1' | '2';
export type CIDBT00100_REQUEST_BODY_CIDBT00100INBLOCK1_ABRDFUTSORDPTNCODE = '1' | '2';
export interface CIDBT00100_REQUEST_BODY_CIDBT00100INBLOCK1 {
    OrdDt?:  string
    IsuCodeVal?:  string
    FutsOrdTpCode?:  CIDBT00100_REQUEST_BODY_CIDBT00100INBLOCK1_FUTSORDTPCODE
    BnsTpCode?:  CIDBT00100_REQUEST_BODY_CIDBT00100INBLOCK1_BNSTPCODE
    AbrdFutsOrdPtnCode?:  CIDBT00100_REQUEST_BODY_CIDBT00100INBLOCK1_ABRDFUTSORDPTNCODE
    CrcyCode?:  string
    OvrsDrvtOrdPrc?:  number
    CndiOrdPrc?:  number
    OrdQty?:  number
    PrdtCode?:  string
    DueYymm?:  string
    ExchCode?:  string
}


export interface CIDBT00100_REQUEST_BODY {
    CIDBT00100InBlock1?:  CIDBT00100_REQUEST_BODY_CIDBT00100INBLOCK1
}

export type CIDBT00900_REQUEST_BODY_CIDBT00900INBLOCK1_FUTSORDTPCODE = '2';
export type CIDBT00900_REQUEST_BODY_CIDBT00900INBLOCK1_BNSTPCODE = '1' | '2';
export type CIDBT00900_REQUEST_BODY_CIDBT00900INBLOCK1_FUTSORDPTNCODE = '2';
export interface CIDBT00900_REQUEST_BODY_CIDBT00900INBLOCK1 {
    OrdDt?:  string
    OvrsFutsOrgOrdNo?:  string
    IsuCodeVal?:  string
    FutsOrdTpCode?:  CIDBT00900_REQUEST_BODY_CIDBT00900INBLOCK1_FUTSORDTPCODE
    BnsTpCode?:  CIDBT00900_REQUEST_BODY_CIDBT00900INBLOCK1_BNSTPCODE
    FutsOrdPtnCode?:  CIDBT00900_REQUEST_BODY_CIDBT00900INBLOCK1_FUTSORDPTNCODE
    CrcyCodeVal?:  string
    OvrsDrvtOrdPrc?:  number
    CndiOrdPrc?:  number
    OrdQty?:  number
    OvrsDrvtPrdtCode?:  string
    DueYymm?:  string
    ExchCode?:  string
}


export interface CIDBT00900_REQUEST_BODY {
    CIDBT00900InBlock1?:  CIDBT00900_REQUEST_BODY_CIDBT00900INBLOCK1
}

export type CIDBT01000_REQUEST_BODY_CIDBT01000INBLOCK1_FUTSORDTPCODE = '3';
export interface CIDBT01000_REQUEST_BODY_CIDBT01000INBLOCK1 {
    OrdDt?:  string
    IsuCodeVal?:  string
    OvrsFutsOrgOrdNo?:  string
    FutsOrdTpCode?:  CIDBT01000_REQUEST_BODY_CIDBT01000INBLOCK1_FUTSORDTPCODE
    PrdtTpCode?:  string
    ExchCode?:  string
}


export interface CIDBT01000_REQUEST_BODY {
    CIDBT01000InBlock1?:  CIDBT01000_REQUEST_BODY_CIDBT01000INBLOCK1
}


export interface O3103_REQUEST_BODY_O3103INBLOCK {
    shcode?:  string
    ncnt?:  number
    readcnt?:  number
    cts_date?:  string
    cts_time?:  string
}


export interface O3103_REQUEST_BODY {
    o3103InBlock?:  O3103_REQUEST_BODY_O3103INBLOCK
}


export interface O3108_REQUEST_BODY_O3108INBLOCK {
    shcode?:  string
    gubun?:  string
    qrycnt?:  number
    sdate?:  string
    edate?:  string
    cts_date?:  string
}


export interface O3108_REQUEST_BODY {
    o3108InBlock?:  O3108_REQUEST_BODY_O3108INBLOCK
}


export interface O3117_REQUEST_BODY_O3117INBLOCK {
    shcode?:  string
    ncnt?:  number
    qrycnt?:  number
    cts_seq?:  string
    cts_daygb?:  string
}


export interface O3117_REQUEST_BODY {
    o3117InBlock?:  O3117_REQUEST_BODY_O3117INBLOCK
}


export interface O3139_REQUEST_BODY_O3139INBLOCK {
    mktgb?:  string
    shcode?:  string
    ncnt?:  number
    qrycnt?:  number
    cts_seq?:  string
    cts_daygb?:  string
}


export interface O3139_REQUEST_BODY {
    o3139InBlock?:  O3139_REQUEST_BODY_O3139INBLOCK
}


export interface T0167_REQUEST_BODY_T0167INBLOCK {
    id?:  string
}


export interface T0167_REQUEST_BODY {
    t0167InBlock?:  T0167_REQUEST_BODY_T0167INBLOCK
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
                    
export interface T1514_RESPONSE {
    code: number | string,
    message: string,
    header?: T1514_RESPONSE_HEADER,
    body?: T1514_RESPONSE_BODY
}
                    
export interface T8424_RESPONSE {
    code: number | string,
    message: string,
    header?: T8424_RESPONSE_HEADER,
    body?: T8424_RESPONSE_BODY
}
                    
export interface T1485_RESPONSE {
    code: number | string,
    message: string,
    header?: T1485_RESPONSE_HEADER,
    body?: T1485_RESPONSE_BODY
}
                    
export interface T1511_RESPONSE {
    code: number | string,
    message: string,
    header?: T1511_RESPONSE_HEADER,
    body?: T1511_RESPONSE_BODY
}
                    
export interface T1516_RESPONSE {
    code: number | string,
    message: string,
    header?: T1516_RESPONSE_HEADER,
    body?: T1516_RESPONSE_BODY
}
                    
export interface T4203_RESPONSE {
    code: number | string,
    message: string,
    header?: T4203_RESPONSE_HEADER,
    body?: T4203_RESPONSE_BODY
}
                    
export interface T8417_RESPONSE {
    code: number | string,
    message: string,
    header?: T8417_RESPONSE_HEADER,
    body?: T8417_RESPONSE_BODY
}
                    
export interface T8418_RESPONSE {
    code: number | string,
    message: string,
    header?: T8418_RESPONSE_HEADER,
    body?: T8418_RESPONSE_BODY
}
                    
export interface T8419_RESPONSE {
    code: number | string,
    message: string,
    header?: T8419_RESPONSE_HEADER,
    body?: T8419_RESPONSE_BODY
}
                    
export interface T1101_RESPONSE {
    code: number | string,
    message: string,
    header?: T1101_RESPONSE_HEADER,
    body?: T1101_RESPONSE_BODY
}
                    
export interface T1102_RESPONSE {
    code: number | string,
    message: string,
    header?: T1102_RESPONSE_HEADER,
    body?: T1102_RESPONSE_BODY
}
                    
export interface T1104_RESPONSE {
    code: number | string,
    message: string,
    header?: T1104_RESPONSE_HEADER,
    body?: T1104_RESPONSE_BODY
}
                    
export interface T1105_RESPONSE {
    code: number | string,
    message: string,
    header?: T1105_RESPONSE_HEADER,
    body?: T1105_RESPONSE_BODY
}
                    
export interface T1109_RESPONSE {
    code: number | string,
    message: string,
    header?: T1109_RESPONSE_HEADER,
    body?: T1109_RESPONSE_BODY
}
                    
export interface T1301_RESPONSE {
    code: number | string,
    message: string,
    header?: T1301_RESPONSE_HEADER,
    body?: T1301_RESPONSE_BODY
}
                    
export interface T1302_RESPONSE {
    code: number | string,
    message: string,
    header?: T1302_RESPONSE_HEADER,
    body?: T1302_RESPONSE_BODY
}
                    
export interface T1305_RESPONSE {
    code: number | string,
    message: string,
    header?: T1305_RESPONSE_HEADER,
    body?: T1305_RESPONSE_BODY
}
                    
export interface T1308_RESPONSE {
    code: number | string,
    message: string,
    header?: T1308_RESPONSE_HEADER,
    body?: T1308_RESPONSE_BODY
}
                    
export interface T1310_RESPONSE {
    code: number | string,
    message: string,
    header?: T1310_RESPONSE_HEADER,
    body?: T1310_RESPONSE_BODY
}
                    
export interface T1404_RESPONSE {
    code: number | string,
    message: string,
    header?: T1404_RESPONSE_HEADER,
    body?: T1404_RESPONSE_BODY
}
                    
export interface T1405_RESPONSE {
    code: number | string,
    message: string,
    header?: T1405_RESPONSE_HEADER,
    body?: T1405_RESPONSE_BODY
}
                    
export interface T1410_RESPONSE {
    code: number | string,
    message: string,
    header?: T1410_RESPONSE_HEADER,
    body?: T1410_RESPONSE_BODY
}
                    
export interface T1422_RESPONSE {
    code: number | string,
    message: string,
    header?: T1422_RESPONSE_HEADER,
    body?: T1422_RESPONSE_BODY
}
                    
export interface T1427_RESPONSE {
    code: number | string,
    message: string,
    header?: T1427_RESPONSE_HEADER,
    body?: T1427_RESPONSE_BODY
}
                    
export interface T1442_RESPONSE {
    code: number | string,
    message: string,
    header?: T1442_RESPONSE_HEADER,
    body?: T1442_RESPONSE_BODY
}
                    
export interface T1449_RESPONSE {
    code: number | string,
    message: string,
    header?: T1449_RESPONSE_HEADER,
    body?: T1449_RESPONSE_BODY
}
                    
export interface T1471_RESPONSE {
    code: number | string,
    message: string,
    header?: T1471_RESPONSE_HEADER,
    body?: T1471_RESPONSE_BODY
}
                    
export interface T1475_RESPONSE {
    code: number | string,
    message: string,
    header?: T1475_RESPONSE_HEADER,
    body?: T1475_RESPONSE_BODY
}
                    
export interface T1486_RESPONSE {
    code: number | string,
    message: string,
    header?: T1486_RESPONSE_HEADER,
    body?: T1486_RESPONSE_BODY
}
                    
export interface T1488_RESPONSE {
    code: number | string,
    message: string,
    header?: T1488_RESPONSE_HEADER,
    body?: T1488_RESPONSE_BODY
}
                    
export interface T8407_RESPONSE {
    code: number | string,
    message: string,
    header?: T8407_RESPONSE_HEADER,
    body?: T8407_RESPONSE_BODY
}
                    
export interface T9945_RESPONSE {
    code: number | string,
    message: string,
    header?: T9945_RESPONSE_HEADER,
    body?: T9945_RESPONSE_BODY
}
                    
export interface T1752_RESPONSE {
    code: number | string,
    message: string,
    header?: T1752_RESPONSE_HEADER,
    body?: T1752_RESPONSE_BODY
}
                    
export interface T1764_RESPONSE {
    code: number | string,
    message: string,
    header?: T1764_RESPONSE_HEADER,
    body?: T1764_RESPONSE_BODY
}
                    
export interface T1771_RESPONSE {
    code: number | string,
    message: string,
    header?: T1771_RESPONSE_HEADER,
    body?: T1771_RESPONSE_BODY
}
                    
export interface T3102_RESPONSE {
    code: number | string,
    message: string,
    header?: T3102_RESPONSE_HEADER,
    body?: T3102_RESPONSE_BODY
}
                    
export interface T3202_RESPONSE {
    code: number | string,
    message: string,
    header?: T3202_RESPONSE_HEADER,
    body?: T3202_RESPONSE_BODY
}
                    
export interface T3320_RESPONSE {
    code: number | string,
    message: string,
    header?: T3320_RESPONSE_HEADER,
    body?: T3320_RESPONSE_BODY
}
                    
export interface T3341_RESPONSE {
    code: number | string,
    message: string,
    header?: T3341_RESPONSE_HEADER,
    body?: T3341_RESPONSE_BODY
}
                    
export interface T3401_RESPONSE {
    code: number | string,
    message: string,
    header?: T3401_RESPONSE_HEADER,
    body?: T3401_RESPONSE_BODY
}
                    
export interface T3518_RESPONSE {
    code: number | string,
    message: string,
    header?: T3518_RESPONSE_HEADER,
    body?: T3518_RESPONSE_BODY
}
                    
export interface T3521_RESPONSE {
    code: number | string,
    message: string,
    header?: T3521_RESPONSE_HEADER,
    body?: T3521_RESPONSE_BODY
}
                    
export interface T8428_RESPONSE {
    code: number | string,
    message: string,
    header?: T8428_RESPONSE_HEADER,
    body?: T8428_RESPONSE_BODY
}
                    
export interface T1631_RESPONSE {
    code: number | string,
    message: string,
    header?: T1631_RESPONSE_HEADER,
    body?: T1631_RESPONSE_BODY
}
                    
export interface T1632_RESPONSE {
    code: number | string,
    message: string,
    header?: T1632_RESPONSE_HEADER,
    body?: T1632_RESPONSE_BODY
}
                    
export interface T1633_RESPONSE {
    code: number | string,
    message: string,
    header?: T1633_RESPONSE_HEADER,
    body?: T1633_RESPONSE_BODY
}
                    
export interface T1636_RESPONSE {
    code: number | string,
    message: string,
    header?: T1636_RESPONSE_HEADER,
    body?: T1636_RESPONSE_BODY
}
                    
export interface T1637_RESPONSE {
    code: number | string,
    message: string,
    header?: T1637_RESPONSE_HEADER,
    body?: T1637_RESPONSE_BODY
}
                    
export interface T1640_RESPONSE {
    code: number | string,
    message: string,
    header?: T1640_RESPONSE_HEADER,
    body?: T1640_RESPONSE_BODY
}
                    
export interface T1662_RESPONSE {
    code: number | string,
    message: string,
    header?: T1662_RESPONSE_HEADER,
    body?: T1662_RESPONSE_BODY
}
                    
export interface T1601_RESPONSE {
    code: number | string,
    message: string,
    header?: T1601_RESPONSE_HEADER,
    body?: T1601_RESPONSE_BODY
}
                    
export interface T1602_RESPONSE {
    code: number | string,
    message: string,
    header?: T1602_RESPONSE_HEADER,
    body?: T1602_RESPONSE_BODY
}
                    
export interface T1603_RESPONSE {
    code: number | string,
    message: string,
    header?: T1603_RESPONSE_HEADER,
    body?: T1603_RESPONSE_BODY
}
                    
export interface T1615_RESPONSE {
    code: number | string,
    message: string,
    header?: T1615_RESPONSE_HEADER,
    body?: T1615_RESPONSE_BODY
}
                    
export interface T1617_RESPONSE {
    code: number | string,
    message: string,
    header?: T1617_RESPONSE_HEADER,
    body?: T1617_RESPONSE_BODY
}
                    
export interface T1621_RESPONSE {
    code: number | string,
    message: string,
    header?: T1621_RESPONSE_HEADER,
    body?: T1621_RESPONSE_BODY
}
                    
export interface T1664_RESPONSE {
    code: number | string,
    message: string,
    header?: T1664_RESPONSE_HEADER,
    body?: T1664_RESPONSE_BODY
}
                    
export interface T1702_RESPONSE {
    code: number | string,
    message: string,
    header?: T1702_RESPONSE_HEADER,
    body?: T1702_RESPONSE_BODY
}
                    
export interface T1716_RESPONSE {
    code: number | string,
    message: string,
    header?: T1716_RESPONSE_HEADER,
    body?: T1716_RESPONSE_BODY
}
                    
export interface T1717_RESPONSE {
    code: number | string,
    message: string,
    header?: T1717_RESPONSE_HEADER,
    body?: T1717_RESPONSE_BODY
}
                    
export interface T1950_RESPONSE {
    code: number | string,
    message: string,
    header?: T1950_RESPONSE_HEADER,
    body?: T1950_RESPONSE_BODY
}
                    
export interface T1951_RESPONSE {
    code: number | string,
    message: string,
    header?: T1951_RESPONSE_HEADER,
    body?: T1951_RESPONSE_BODY
}
                    
export interface T1954_RESPONSE {
    code: number | string,
    message: string,
    header?: T1954_RESPONSE_HEADER,
    body?: T1954_RESPONSE_BODY
}
                    
export interface T1956_RESPONSE {
    code: number | string,
    message: string,
    header?: T1956_RESPONSE_HEADER,
    body?: T1956_RESPONSE_BODY
}
                    
export interface T1958_RESPONSE {
    code: number | string,
    message: string,
    header?: T1958_RESPONSE_HEADER,
    body?: T1958_RESPONSE_BODY
}
                    
export interface T1959_RESPONSE {
    code: number | string,
    message: string,
    header?: T1959_RESPONSE_HEADER,
    body?: T1959_RESPONSE_BODY
}
                    
export interface T1960_RESPONSE {
    code: number | string,
    message: string,
    header?: T1960_RESPONSE_HEADER,
    body?: T1960_RESPONSE_BODY
}
                    
export interface T1961_RESPONSE {
    code: number | string,
    message: string,
    header?: T1961_RESPONSE_HEADER,
    body?: T1961_RESPONSE_BODY
}
                    
export interface T1964_RESPONSE {
    code: number | string,
    message: string,
    header?: T1964_RESPONSE_HEADER,
    body?: T1964_RESPONSE_BODY
}
                    
export interface T1966_RESPONSE {
    code: number | string,
    message: string,
    header?: T1966_RESPONSE_HEADER,
    body?: T1966_RESPONSE_BODY
}
                    
export interface T1969_RESPONSE {
    code: number | string,
    message: string,
    header?: T1969_RESPONSE_HEADER,
    body?: T1969_RESPONSE_BODY
}
                    
export interface T1971_RESPONSE {
    code: number | string,
    message: string,
    header?: T1971_RESPONSE_HEADER,
    body?: T1971_RESPONSE_BODY
}
                    
export interface T1972_RESPONSE {
    code: number | string,
    message: string,
    header?: T1972_RESPONSE_HEADER,
    body?: T1972_RESPONSE_BODY
}
                    
export interface T1973_RESPONSE {
    code: number | string,
    message: string,
    header?: T1973_RESPONSE_HEADER,
    body?: T1973_RESPONSE_BODY
}
                    
export interface T1974_RESPONSE {
    code: number | string,
    message: string,
    header?: T1974_RESPONSE_HEADER,
    body?: T1974_RESPONSE_BODY
}
                    
export interface T1988_RESPONSE {
    code: number | string,
    message: string,
    header?: T1988_RESPONSE_HEADER,
    body?: T1988_RESPONSE_BODY
}
                    
export interface T8431_RESPONSE {
    code: number | string,
    message: string,
    header?: T8431_RESPONSE_HEADER,
    body?: T8431_RESPONSE_BODY
}
                    
export interface T9905_RESPONSE {
    code: number | string,
    message: string,
    header?: T9905_RESPONSE_HEADER,
    body?: T9905_RESPONSE_BODY
}
                    
export interface T9907_RESPONSE {
    code: number | string,
    message: string,
    header?: T9907_RESPONSE_HEADER,
    body?: T9907_RESPONSE_BODY
}
                    
export interface T9942_RESPONSE {
    code: number | string,
    message: string,
    header?: T9942_RESPONSE_HEADER,
    body?: T9942_RESPONSE_BODY
}
                    
export interface T1901_RESPONSE {
    code: number | string,
    message: string,
    header?: T1901_RESPONSE_HEADER,
    body?: T1901_RESPONSE_BODY
}
                    
export interface T1902_RESPONSE {
    code: number | string,
    message: string,
    header?: T1902_RESPONSE_HEADER,
    body?: T1902_RESPONSE_BODY
}
                    
export interface T1903_RESPONSE {
    code: number | string,
    message: string,
    header?: T1903_RESPONSE_HEADER,
    body?: T1903_RESPONSE_BODY
}
                    
export interface T1904_RESPONSE {
    code: number | string,
    message: string,
    header?: T1904_RESPONSE_HEADER,
    body?: T1904_RESPONSE_BODY
}
                    
export interface T1906_RESPONSE {
    code: number | string,
    message: string,
    header?: T1906_RESPONSE_HEADER,
    body?: T1906_RESPONSE_BODY
}
                    
export interface T1531_RESPONSE {
    code: number | string,
    message: string,
    header?: T1531_RESPONSE_HEADER,
    body?: T1531_RESPONSE_BODY
}
                    
export interface T1532_RESPONSE {
    code: number | string,
    message: string,
    header?: T1532_RESPONSE_HEADER,
    body?: T1532_RESPONSE_BODY
}
                    
export interface T1533_RESPONSE {
    code: number | string,
    message: string,
    header?: T1533_RESPONSE_HEADER,
    body?: T1533_RESPONSE_BODY
}
                    
export interface T1537_RESPONSE {
    code: number | string,
    message: string,
    header?: T1537_RESPONSE_HEADER,
    body?: T1537_RESPONSE_BODY
}
                    
export interface T8425_RESPONSE {
    code: number | string,
    message: string,
    header?: T8425_RESPONSE_HEADER,
    body?: T8425_RESPONSE_BODY
}
                    
export interface T1809_RESPONSE {
    code: number | string,
    message: string,
    header?: T1809_RESPONSE_HEADER,
    body?: T1809_RESPONSE_BODY
}
                    
export interface T1825_RESPONSE {
    code: number | string,
    message: string,
    header?: T1825_RESPONSE_HEADER,
    body?: T1825_RESPONSE_BODY
}
                    
export interface T1826_RESPONSE {
    code: number | string,
    message: string,
    header?: T1826_RESPONSE_HEADER,
    body?: T1826_RESPONSE_BODY
}
                    
export interface T1866_RESPONSE {
    code: number | string,
    message: string,
    header?: T1866_RESPONSE_HEADER,
    body?: T1866_RESPONSE_BODY
}
                    
export interface T1859_RESPONSE {
    code: number | string,
    message: string,
    header?: T1859_RESPONSE_HEADER,
    body?: T1859_RESPONSE_BODY
}
                    
export interface T1860_RESPONSE {
    code: number | string,
    message: string,
    header?: T1860_RESPONSE_HEADER,
    body?: T1860_RESPONSE_BODY
}
                    
export interface T1441_RESPONSE {
    code: number | string,
    message: string,
    header?: T1441_RESPONSE_HEADER,
    body?: T1441_RESPONSE_BODY
}
                    
export interface T1444_RESPONSE {
    code: number | string,
    message: string,
    header?: T1444_RESPONSE_HEADER,
    body?: T1444_RESPONSE_BODY
}
                    
export interface T1452_RESPONSE {
    code: number | string,
    message: string,
    header?: T1452_RESPONSE_HEADER,
    body?: T1452_RESPONSE_BODY
}
                    
export interface T1463_RESPONSE {
    code: number | string,
    message: string,
    header?: T1463_RESPONSE_HEADER,
    body?: T1463_RESPONSE_BODY
}
                    
export interface T1466_RESPONSE {
    code: number | string,
    message: string,
    header?: T1466_RESPONSE_HEADER,
    body?: T1466_RESPONSE_BODY
}
                    
export interface T1481_RESPONSE {
    code: number | string,
    message: string,
    header?: T1481_RESPONSE_HEADER,
    body?: T1481_RESPONSE_BODY
}
                    
export interface T1482_RESPONSE {
    code: number | string,
    message: string,
    header?: T1482_RESPONSE_HEADER,
    body?: T1482_RESPONSE_BODY
}
                    
export interface T1489_RESPONSE {
    code: number | string,
    message: string,
    header?: T1489_RESPONSE_HEADER,
    body?: T1489_RESPONSE_BODY
}
                    
export interface T1492_RESPONSE {
    code: number | string,
    message: string,
    header?: T1492_RESPONSE_HEADER,
    body?: T1492_RESPONSE_BODY
}
                    
export interface T1665_RESPONSE {
    code: number | string,
    message: string,
    header?: T1665_RESPONSE_HEADER,
    body?: T1665_RESPONSE_BODY
}
                    
export interface T8410_RESPONSE {
    code: number | string,
    message: string,
    header?: T8410_RESPONSE_HEADER,
    body?: T8410_RESPONSE_BODY
}
                    
export interface T8411_RESPONSE {
    code: number | string,
    message: string,
    header?: T8411_RESPONSE_HEADER,
    body?: T8411_RESPONSE_BODY
}
                    
export interface T8412_RESPONSE {
    code: number | string,
    message: string,
    header?: T8412_RESPONSE_HEADER,
    body?: T8412_RESPONSE_BODY
}
                    
export interface CLNAQ00100_RESPONSE {
    code: number | string,
    message: string,
    header?: CLNAQ00100_RESPONSE_HEADER,
    body?: CLNAQ00100_RESPONSE_BODY
}
                    
export interface T1403_RESPONSE {
    code: number | string,
    message: string,
    header?: T1403_RESPONSE_HEADER,
    body?: T1403_RESPONSE_BODY
}
                    
export interface T1411_RESPONSE {
    code: number | string,
    message: string,
    header?: T1411_RESPONSE_HEADER,
    body?: T1411_RESPONSE_BODY
}
                    
export interface T1638_RESPONSE {
    code: number | string,
    message: string,
    header?: T1638_RESPONSE_HEADER,
    body?: T1638_RESPONSE_BODY
}
                    
export interface T1921_RESPONSE {
    code: number | string,
    message: string,
    header?: T1921_RESPONSE_HEADER,
    body?: T1921_RESPONSE_BODY
}
                    
export interface T1926_RESPONSE {
    code: number | string,
    message: string,
    header?: T1926_RESPONSE_HEADER,
    body?: T1926_RESPONSE_BODY
}
                    
export interface T1927_RESPONSE {
    code: number | string,
    message: string,
    header?: T1927_RESPONSE_HEADER,
    body?: T1927_RESPONSE_BODY
}
                    
export interface T1941_RESPONSE {
    code: number | string,
    message: string,
    header?: T1941_RESPONSE_HEADER,
    body?: T1941_RESPONSE_BODY
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
                    
export interface CDPCQ04700_RESPONSE {
    code: number | string,
    message: string,
    header?: CDPCQ04700_RESPONSE_HEADER,
    body?: CDPCQ04700_RESPONSE_BODY
}
                    
export interface CSPAQ00600_RESPONSE {
    code: number | string,
    message: string,
    header?: CSPAQ00600_RESPONSE_HEADER,
    body?: CSPAQ00600_RESPONSE_BODY
}
                    
export interface CSPAQ12200_RESPONSE {
    code: number | string,
    message: string,
    header?: CSPAQ12200_RESPONSE_HEADER,
    body?: CSPAQ12200_RESPONSE_BODY
}
                    
export interface CSPAQ12300_RESPONSE {
    code: number | string,
    message: string,
    header?: CSPAQ12300_RESPONSE_HEADER,
    body?: CSPAQ12300_RESPONSE_BODY
}
                    
export interface CSPAQ13700_RESPONSE {
    code: number | string,
    message: string,
    header?: CSPAQ13700_RESPONSE_HEADER,
    body?: CSPAQ13700_RESPONSE_BODY
}
                    
export interface CSPAQ22200_RESPONSE {
    code: number | string,
    message: string,
    header?: CSPAQ22200_RESPONSE_HEADER,
    body?: CSPAQ22200_RESPONSE_BODY
}
                    
export interface CSPBQ00200_RESPONSE {
    code: number | string,
    message: string,
    header?: CSPBQ00200_RESPONSE_HEADER,
    body?: CSPBQ00200_RESPONSE_BODY
}
                    
export interface FOCCQ33600_RESPONSE {
    code: number | string,
    message: string,
    header?: FOCCQ33600_RESPONSE_HEADER,
    body?: FOCCQ33600_RESPONSE_BODY
}
                    
export interface T0150_RESPONSE {
    code: number | string,
    message: string,
    header?: T0150_RESPONSE_HEADER,
    body?: T0150_RESPONSE_BODY
}
                    
export interface T0151_RESPONSE {
    code: number | string,
    message: string,
    header?: T0151_RESPONSE_HEADER,
    body?: T0151_RESPONSE_BODY
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
                    
export interface T2101_RESPONSE {
    code: number | string,
    message: string,
    header?: T2101_RESPONSE_HEADER,
    body?: T2101_RESPONSE_BODY
}
                    
export interface T2105_RESPONSE {
    code: number | string,
    message: string,
    header?: T2105_RESPONSE_HEADER,
    body?: T2105_RESPONSE_BODY
}
                    
export interface T2106_RESPONSE {
    code: number | string,
    message: string,
    header?: T2106_RESPONSE_HEADER,
    body?: T2106_RESPONSE_BODY
}
                    
export interface T2201_RESPONSE {
    code: number | string,
    message: string,
    header?: T2201_RESPONSE_HEADER,
    body?: T2201_RESPONSE_BODY
}
                    
export interface T2203_RESPONSE {
    code: number | string,
    message: string,
    header?: T2203_RESPONSE_HEADER,
    body?: T2203_RESPONSE_BODY
}
                    
export interface T2210_RESPONSE {
    code: number | string,
    message: string,
    header?: T2210_RESPONSE_HEADER,
    body?: T2210_RESPONSE_BODY
}
                    
export interface T2301_RESPONSE {
    code: number | string,
    message: string,
    header?: T2301_RESPONSE_HEADER,
    body?: T2301_RESPONSE_BODY
}
                    
export interface T2405_RESPONSE {
    code: number | string,
    message: string,
    header?: T2405_RESPONSE_HEADER,
    body?: T2405_RESPONSE_BODY
}
                    
export interface T2421_RESPONSE {
    code: number | string,
    message: string,
    header?: T2421_RESPONSE_HEADER,
    body?: T2421_RESPONSE_BODY
}
                    
export interface T2830_RESPONSE {
    code: number | string,
    message: string,
    header?: T2830_RESPONSE_HEADER,
    body?: T2830_RESPONSE_BODY
}
                    
export interface T2831_RESPONSE {
    code: number | string,
    message: string,
    header?: T2831_RESPONSE_HEADER,
    body?: T2831_RESPONSE_BODY
}
                    
export interface T2832_RESPONSE {
    code: number | string,
    message: string,
    header?: T2832_RESPONSE_HEADER,
    body?: T2832_RESPONSE_BODY
}
                    
export interface T2833_RESPONSE {
    code: number | string,
    message: string,
    header?: T2833_RESPONSE_HEADER,
    body?: T2833_RESPONSE_BODY
}
                    
export interface T2835_RESPONSE {
    code: number | string,
    message: string,
    header?: T2835_RESPONSE_HEADER,
    body?: T2835_RESPONSE_BODY
}
                    
export interface T8401_RESPONSE {
    code: number | string,
    message: string,
    header?: T8401_RESPONSE_HEADER,
    body?: T8401_RESPONSE_BODY
}
                    
export interface T8402_RESPONSE {
    code: number | string,
    message: string,
    header?: T8402_RESPONSE_HEADER,
    body?: T8402_RESPONSE_BODY
}
                    
export interface T8403_RESPONSE {
    code: number | string,
    message: string,
    header?: T8403_RESPONSE_HEADER,
    body?: T8403_RESPONSE_BODY
}
                    
export interface T8404_RESPONSE {
    code: number | string,
    message: string,
    header?: T8404_RESPONSE_HEADER,
    body?: T8404_RESPONSE_BODY
}
                    
export interface T8405_RESPONSE {
    code: number | string,
    message: string,
    header?: T8405_RESPONSE_HEADER,
    body?: T8405_RESPONSE_BODY
}
                    
export interface T8406_RESPONSE {
    code: number | string,
    message: string,
    header?: T8406_RESPONSE_HEADER,
    body?: T8406_RESPONSE_BODY
}
                    
export interface T8426_RESPONSE {
    code: number | string,
    message: string,
    header?: T8426_RESPONSE_HEADER,
    body?: T8426_RESPONSE_BODY
}
                    
export interface T8427_RESPONSE {
    code: number | string,
    message: string,
    header?: T8427_RESPONSE_HEADER,
    body?: T8427_RESPONSE_BODY
}
                    
export interface T8432_RESPONSE {
    code: number | string,
    message: string,
    header?: T8432_RESPONSE_HEADER,
    body?: T8432_RESPONSE_BODY
}
                    
export interface T8433_RESPONSE {
    code: number | string,
    message: string,
    header?: T8433_RESPONSE_HEADER,
    body?: T8433_RESPONSE_BODY
}
                    
export interface T8434_RESPONSE {
    code: number | string,
    message: string,
    header?: T8434_RESPONSE_HEADER,
    body?: T8434_RESPONSE_BODY
}
                    
export interface T8435_RESPONSE {
    code: number | string,
    message: string,
    header?: T8435_RESPONSE_HEADER,
    body?: T8435_RESPONSE_BODY
}
                    
export interface T8437_RESPONSE {
    code: number | string,
    message: string,
    header?: T8437_RESPONSE_HEADER,
    body?: T8437_RESPONSE_BODY
}
                    
export interface T9943_RESPONSE {
    code: number | string,
    message: string,
    header?: T9943_RESPONSE_HEADER,
    body?: T9943_RESPONSE_BODY
}
                    
export interface T9944_RESPONSE {
    code: number | string,
    message: string,
    header?: T9944_RESPONSE_HEADER,
    body?: T9944_RESPONSE_BODY
}
                    
export interface T2541_RESPONSE {
    code: number | string,
    message: string,
    header?: T2541_RESPONSE_HEADER,
    body?: T2541_RESPONSE_BODY
}
                    
export interface T2545_RESPONSE {
    code: number | string,
    message: string,
    header?: T2545_RESPONSE_HEADER,
    body?: T2545_RESPONSE_BODY
}
                    
export interface T2209_RESPONSE {
    code: number | string,
    message: string,
    header?: T2209_RESPONSE_HEADER,
    body?: T2209_RESPONSE_BODY
}
                    
export interface T8414_RESPONSE {
    code: number | string,
    message: string,
    header?: T8414_RESPONSE_HEADER,
    body?: T8414_RESPONSE_BODY
}
                    
export interface T8415_RESPONSE {
    code: number | string,
    message: string,
    header?: T8415_RESPONSE_HEADER,
    body?: T8415_RESPONSE_BODY
}
                    
export interface T8416_RESPONSE {
    code: number | string,
    message: string,
    header?: T8416_RESPONSE_HEADER,
    body?: T8416_RESPONSE_BODY
}
                    
export interface T8429_RESPONSE {
    code: number | string,
    message: string,
    header?: T8429_RESPONSE_HEADER,
    body?: T8429_RESPONSE_BODY
}
                    
export interface CFOAQ00600_RESPONSE {
    code: number | string,
    message: string,
    header?: CFOAQ00600_RESPONSE_HEADER,
    body?: CFOAQ00600_RESPONSE_BODY
}
                    
export interface CFOAQ50600_RESPONSE {
    code: number | string,
    message: string,
    header?: CFOAQ50600_RESPONSE_HEADER,
    body?: CFOAQ50600_RESPONSE_BODY
}
                    
export interface CFOAQ10100_RESPONSE {
    code: number | string,
    message: string,
    header?: CFOAQ10100_RESPONSE_HEADER,
    body?: CFOAQ10100_RESPONSE_BODY
}
                    
export interface CFOBQ10500_RESPONSE {
    code: number | string,
    message: string,
    header?: CFOBQ10500_RESPONSE_HEADER,
    body?: CFOBQ10500_RESPONSE_BODY
}
                    
export interface CFOEQ11100_RESPONSE {
    code: number | string,
    message: string,
    header?: CFOEQ11100_RESPONSE_HEADER,
    body?: CFOEQ11100_RESPONSE_BODY
}
                    
export interface CFOEQ82600_RESPONSE {
    code: number | string,
    message: string,
    header?: CFOEQ82600_RESPONSE_HEADER,
    body?: CFOEQ82600_RESPONSE_BODY
}
                    
export interface CFOFQ02400_RESPONSE {
    code: number | string,
    message: string,
    header?: CFOFQ02400_RESPONSE_HEADER,
    body?: CFOFQ02400_RESPONSE_BODY
}
                    
export interface T0434_RESPONSE {
    code: number | string,
    message: string,
    header?: T0434_RESPONSE_HEADER,
    body?: T0434_RESPONSE_BODY
}
                    
export interface T0441_RESPONSE {
    code: number | string,
    message: string,
    header?: T0441_RESPONSE_HEADER,
    body?: T0441_RESPONSE_BODY
}
                    
export interface CEXAQ21100_RESPONSE {
    code: number | string,
    message: string,
    header?: CEXAQ21100_RESPONSE_HEADER,
    body?: CEXAQ21100_RESPONSE_BODY
}
                    
export interface CEXAQ21200_RESPONSE {
    code: number | string,
    message: string,
    header?: CEXAQ21200_RESPONSE_HEADER,
    body?: CEXAQ21200_RESPONSE_BODY
}
                    
export interface CEXAQ31100_RESPONSE {
    code: number | string,
    message: string,
    header?: CEXAQ31100_RESPONSE_HEADER,
    body?: CEXAQ31100_RESPONSE_BODY
}
                    
export interface CEXAQ31200_RESPONSE {
    code: number | string,
    message: string,
    header?: CEXAQ31200_RESPONSE_HEADER,
    body?: CEXAQ31200_RESPONSE_BODY
}
                    
export interface CEXAQ44200_RESPONSE {
    code: number | string,
    message: string,
    header?: CEXAQ44200_RESPONSE_HEADER,
    body?: CEXAQ44200_RESPONSE_BODY
}
                    
export interface FOCCQ33700_RESPONSE {
    code: number | string,
    message: string,
    header?: FOCCQ33700_RESPONSE_HEADER,
    body?: FOCCQ33700_RESPONSE_BODY
}
                    
export interface CFOAT00100_RESPONSE {
    code: number | string,
    message: string,
    header?: CFOAT00100_RESPONSE_HEADER,
    body?: CFOAT00100_RESPONSE_BODY
}
                    
export interface CFOAT00200_RESPONSE {
    code: number | string,
    message: string,
    header?: CFOAT00200_RESPONSE_HEADER,
    body?: CFOAT00200_RESPONSE_BODY
}
                    
export interface CFOAT00300_RESPONSE {
    code: number | string,
    message: string,
    header?: CFOAT00300_RESPONSE_HEADER,
    body?: CFOAT00300_RESPONSE_BODY
}
                    
export interface CFOBQ10800_RESPONSE {
    code: number | string,
    message: string,
    header?: CFOBQ10800_RESPONSE_HEADER,
    body?: CFOBQ10800_RESPONSE_BODY
}
                    
export interface CEXAT11100_RESPONSE {
    code: number | string,
    message: string,
    header?: CEXAT11100_RESPONSE_HEADER,
    body?: CEXAT11100_RESPONSE_BODY
}
                    
export interface CEXAT11200_RESPONSE {
    code: number | string,
    message: string,
    header?: CEXAT11200_RESPONSE_HEADER,
    body?: CEXAT11200_RESPONSE_BODY
}
                    
export interface CEXAT11300_RESPONSE {
    code: number | string,
    message: string,
    header?: CEXAT11300_RESPONSE_HEADER,
    body?: CEXAT11300_RESPONSE_BODY
}
                    
export interface MMDAQ91200_RESPONSE {
    code: number | string,
    message: string,
    header?: MMDAQ91200_RESPONSE_HEADER,
    body?: MMDAQ91200_RESPONSE_BODY
}
                    
export interface O3101_RESPONSE {
    code: number | string,
    message: string,
    header?: O3101_RESPONSE_HEADER,
    body?: O3101_RESPONSE_BODY
}
                    
export interface O3104_RESPONSE {
    code: number | string,
    message: string,
    header?: O3104_RESPONSE_HEADER,
    body?: O3104_RESPONSE_BODY
}
                    
export interface O3105_RESPONSE {
    code: number | string,
    message: string,
    header?: O3105_RESPONSE_HEADER,
    body?: O3105_RESPONSE_BODY
}
                    
export interface O3106_RESPONSE {
    code: number | string,
    message: string,
    header?: O3106_RESPONSE_HEADER,
    body?: O3106_RESPONSE_BODY
}
                    
export interface O3107_RESPONSE {
    code: number | string,
    message: string,
    header?: O3107_RESPONSE_HEADER,
    body?: O3107_RESPONSE_BODY
}
                    
export interface O3116_RESPONSE {
    code: number | string,
    message: string,
    header?: O3116_RESPONSE_HEADER,
    body?: O3116_RESPONSE_BODY
}
                    
export interface O3121_RESPONSE {
    code: number | string,
    message: string,
    header?: O3121_RESPONSE_HEADER,
    body?: O3121_RESPONSE_BODY
}
                    
export interface O3123_RESPONSE {
    code: number | string,
    message: string,
    header?: O3123_RESPONSE_HEADER,
    body?: O3123_RESPONSE_BODY
}
                    
export interface O3125_RESPONSE {
    code: number | string,
    message: string,
    header?: O3125_RESPONSE_HEADER,
    body?: O3125_RESPONSE_BODY
}
                    
export interface O3126_RESPONSE {
    code: number | string,
    message: string,
    header?: O3126_RESPONSE_HEADER,
    body?: O3126_RESPONSE_BODY
}
                    
export interface O3127_RESPONSE {
    code: number | string,
    message: string,
    header?: O3127_RESPONSE_HEADER,
    body?: O3127_RESPONSE_BODY
}
                    
export interface O3128_RESPONSE {
    code: number | string,
    message: string,
    header?: O3128_RESPONSE_HEADER,
    body?: O3128_RESPONSE_BODY
}
                    
export interface O3136_RESPONSE {
    code: number | string,
    message: string,
    header?: O3136_RESPONSE_HEADER,
    body?: O3136_RESPONSE_BODY
}
                    
export interface O3137_RESPONSE {
    code: number | string,
    message: string,
    header?: O3137_RESPONSE_HEADER,
    body?: O3137_RESPONSE_BODY
}
                    
export interface CIDBQ01400_RESPONSE {
    code: number | string,
    message: string,
    header?: CIDBQ01400_RESPONSE_HEADER,
    body?: CIDBQ01400_RESPONSE_BODY
}
                    
export interface CIDBQ01500_RESPONSE {
    code: number | string,
    message: string,
    header?: CIDBQ01500_RESPONSE_HEADER,
    body?: CIDBQ01500_RESPONSE_BODY
}
                    
export interface CIDBQ01800_RESPONSE {
    code: number | string,
    message: string,
    header?: CIDBQ01800_RESPONSE_HEADER,
    body?: CIDBQ01800_RESPONSE_BODY
}
                    
export interface CIDBQ02400_RESPONSE {
    code: number | string,
    message: string,
    header?: CIDBQ02400_RESPONSE_HEADER,
    body?: CIDBQ02400_RESPONSE_BODY
}
                    
export interface CIDBQ03000_RESPONSE {
    code: number | string,
    message: string,
    header?: CIDBQ03000_RESPONSE_HEADER,
    body?: CIDBQ03000_RESPONSE_BODY
}
                    
export interface CIDBQ05300_RESPONSE {
    code: number | string,
    message: string,
    header?: CIDBQ05300_RESPONSE_HEADER,
    body?: CIDBQ05300_RESPONSE_BODY
}
                    
export interface CIDEQ00800_RESPONSE {
    code: number | string,
    message: string,
    header?: CIDEQ00800_RESPONSE_HEADER,
    body?: CIDEQ00800_RESPONSE_BODY
}
                    
export interface CIDBT00100_RESPONSE {
    code: number | string,
    message: string,
    header?: CIDBT00100_RESPONSE_HEADER,
    body?: CIDBT00100_RESPONSE_BODY
}
                    
export interface CIDBT00900_RESPONSE {
    code: number | string,
    message: string,
    header?: CIDBT00900_RESPONSE_HEADER,
    body?: CIDBT00900_RESPONSE_BODY
}
                    
export interface CIDBT01000_RESPONSE {
    code: number | string,
    message: string,
    header?: CIDBT01000_RESPONSE_HEADER,
    body?: CIDBT01000_RESPONSE_BODY
}
                    
export interface O3103_RESPONSE {
    code: number | string,
    message: string,
    header?: O3103_RESPONSE_HEADER,
    body?: O3103_RESPONSE_BODY
}
                    
export interface O3108_RESPONSE {
    code: number | string,
    message: string,
    header?: O3108_RESPONSE_HEADER,
    body?: O3108_RESPONSE_BODY
}
                    
export interface O3117_RESPONSE {
    code: number | string,
    message: string,
    header?: O3117_RESPONSE_HEADER,
    body?: O3117_RESPONSE_BODY
}
                    
export interface O3139_RESPONSE {
    code: number | string,
    message: string,
    header?: O3139_RESPONSE_HEADER,
    body?: O3139_RESPONSE_BODY
}
                    
export interface T0167_RESPONSE {
    code: number | string,
    message: string,
    header?: T0167_RESPONSE_HEADER,
    body?: T0167_RESPONSE_BODY
}
                    

export interface TOKEN_RESPONSE_HEADER {
    'content-type'?:  string
}


export interface REVOKE_RESPONSE_HEADER {
    'content-type'?:  string
}

export type T1514_RESPONSE_HEADER_TR_CONT = 'Y' | 'N';
export interface T1514_RESPONSE_HEADER {
    'content-type'?:  string
    tr_cd?:  string
    tr_cont?:  T1514_RESPONSE_HEADER_TR_CONT
    tr_cont_key?:  string
}

export type T8424_RESPONSE_HEADER_TR_CONT = 'Y' | 'N';
export interface T8424_RESPONSE_HEADER {
    'content-type'?:  string
    tr_cd?:  string
    tr_cont?:  T8424_RESPONSE_HEADER_TR_CONT
    tr_cont_key?:  string
}

export type T1485_RESPONSE_HEADER_TR_CONT = 'Y' | 'N';
export interface T1485_RESPONSE_HEADER {
    'content-type'?:  string
    tr_cd?:  string
    tr_cont?:  T1485_RESPONSE_HEADER_TR_CONT
    tr_cont_key?:  string
}

export type T1511_RESPONSE_HEADER_TR_CONT = 'Y' | 'N';
export interface T1511_RESPONSE_HEADER {
    'content-type'?:  string
    tr_cd?:  string
    tr_cont?:  T1511_RESPONSE_HEADER_TR_CONT
    tr_cont_key?:  string
}

export type T1516_RESPONSE_HEADER_TR_CONT = 'Y' | 'N';
export interface T1516_RESPONSE_HEADER {
    'content-type'?:  string
    tr_cd?:  string
    tr_cont?:  T1516_RESPONSE_HEADER_TR_CONT
    tr_cont_key?:  string
}

export type T4203_RESPONSE_HEADER_TR_CONT = 'Y' | 'N';
export interface T4203_RESPONSE_HEADER {
    'content-type'?:  string
    tr_cd?:  string
    tr_cont?:  T4203_RESPONSE_HEADER_TR_CONT
    tr_cont_key?:  string
}

export type T8417_RESPONSE_HEADER_TR_CONT = 'Y' | 'N';
export interface T8417_RESPONSE_HEADER {
    'content-type'?:  string
    tr_cd?:  string
    tr_cont?:  T8417_RESPONSE_HEADER_TR_CONT
    tr_cont_key?:  string
}

export type T8418_RESPONSE_HEADER_TR_CONT = 'Y' | 'N';
export interface T8418_RESPONSE_HEADER {
    'content-type'?:  string
    tr_cd?:  string
    tr_cont?:  T8418_RESPONSE_HEADER_TR_CONT
    tr_cont_key?:  string
}

export type T8419_RESPONSE_HEADER_TR_CONT = 'Y' | 'N';
export interface T8419_RESPONSE_HEADER {
    'content-type'?:  string
    tr_cd?:  string
    tr_cont?:  T8419_RESPONSE_HEADER_TR_CONT
    tr_cont_key?:  string
}

export type T1101_RESPONSE_HEADER_TR_CONT = 'Y' | 'N';
export interface T1101_RESPONSE_HEADER {
    'content-type'?:  string
    tr_cd?:  string
    tr_cont?:  T1101_RESPONSE_HEADER_TR_CONT
    tr_cont_key?:  string
}

export type T1102_RESPONSE_HEADER_TR_CONT = 'Y' | 'N';
export interface T1102_RESPONSE_HEADER {
    'content-type'?:  string
    tr_cd?:  string
    tr_cont?:  T1102_RESPONSE_HEADER_TR_CONT
    tr_cont_key?:  string
}

export type T1104_RESPONSE_HEADER_TR_CONT = 'Y' | 'N';
export interface T1104_RESPONSE_HEADER {
    'content-type'?:  string
    tr_cd?:  string
    tr_cont?:  T1104_RESPONSE_HEADER_TR_CONT
    tr_cont_key?:  string
}

export type T1105_RESPONSE_HEADER_TR_CONT = 'Y' | 'N';
export interface T1105_RESPONSE_HEADER {
    'content-type'?:  string
    tr_cd?:  string
    tr_cont?:  T1105_RESPONSE_HEADER_TR_CONT
    tr_cont_key?:  string
}

export type T1109_RESPONSE_HEADER_TR_CONT = 'Y' | 'N';
export interface T1109_RESPONSE_HEADER {
    'content-type'?:  string
    tr_cd?:  string
    tr_cont?:  T1109_RESPONSE_HEADER_TR_CONT
    tr_cont_key?:  string
}

export type T1301_RESPONSE_HEADER_TR_CONT = 'Y' | 'N';
export interface T1301_RESPONSE_HEADER {
    'content-type'?:  string
    tr_cd?:  string
    tr_cont?:  T1301_RESPONSE_HEADER_TR_CONT
    tr_cont_key?:  string
}

export type T1302_RESPONSE_HEADER_TR_CONT = 'Y' | 'N';
export interface T1302_RESPONSE_HEADER {
    'content-type'?:  string
    tr_cd?:  string
    tr_cont?:  T1302_RESPONSE_HEADER_TR_CONT
    tr_cont_key?:  string
}

export type T1305_RESPONSE_HEADER_TR_CONT = 'Y' | 'N';
export interface T1305_RESPONSE_HEADER {
    'content-type'?:  string
    tr_cd?:  string
    tr_cont?:  T1305_RESPONSE_HEADER_TR_CONT
    tr_cont_key?:  string
}

export type T1308_RESPONSE_HEADER_TR_CONT = 'Y' | 'N';
export interface T1308_RESPONSE_HEADER {
    'content-type'?:  string
    tr_cd?:  string
    tr_cont?:  T1308_RESPONSE_HEADER_TR_CONT
    tr_cont_key?:  string
}

export type T1310_RESPONSE_HEADER_TR_CONT = 'Y' | 'N';
export interface T1310_RESPONSE_HEADER {
    'content-type'?:  string
    tr_cd?:  string
    tr_cont?:  T1310_RESPONSE_HEADER_TR_CONT
    tr_cont_key?:  string
}

export type T1404_RESPONSE_HEADER_TR_CONT = 'Y' | 'N';
export interface T1404_RESPONSE_HEADER {
    'content-type'?:  string
    tr_cd?:  string
    tr_cont?:  T1404_RESPONSE_HEADER_TR_CONT
    tr_cont_key?:  string
}

export type T1405_RESPONSE_HEADER_TR_CONT = 'Y' | 'N';
export interface T1405_RESPONSE_HEADER {
    'content-type'?:  string
    tr_cd?:  string
    tr_cont?:  T1405_RESPONSE_HEADER_TR_CONT
    tr_cont_key?:  string
}

export type T1410_RESPONSE_HEADER_TR_CONT = 'Y' | 'N';
export interface T1410_RESPONSE_HEADER {
    'content-type'?:  string
    tr_cd?:  string
    tr_cont?:  T1410_RESPONSE_HEADER_TR_CONT
    tr_cont_key?:  string
}

export type T1422_RESPONSE_HEADER_TR_CONT = 'Y' | 'N';
export interface T1422_RESPONSE_HEADER {
    'content-type'?:  string
    tr_cd?:  string
    tr_cont?:  T1422_RESPONSE_HEADER_TR_CONT
    tr_cont_key?:  string
}

export type T1427_RESPONSE_HEADER_TR_CONT = 'Y' | 'N';
export interface T1427_RESPONSE_HEADER {
    'content-type'?:  string
    tr_cd?:  string
    tr_cont?:  T1427_RESPONSE_HEADER_TR_CONT
    tr_cont_key?:  string
}

export type T1442_RESPONSE_HEADER_TR_CONT = 'Y' | 'N';
export interface T1442_RESPONSE_HEADER {
    'content-type'?:  string
    tr_cd?:  string
    tr_cont?:  T1442_RESPONSE_HEADER_TR_CONT
    tr_cont_key?:  string
}

export type T1449_RESPONSE_HEADER_TR_CONT = 'Y' | 'N';
export interface T1449_RESPONSE_HEADER {
    'content-type'?:  string
    tr_cd?:  string
    tr_cont?:  T1449_RESPONSE_HEADER_TR_CONT
    tr_cont_key?:  string
}

export type T1471_RESPONSE_HEADER_TR_CONT = 'Y' | 'N';
export interface T1471_RESPONSE_HEADER {
    'content-type'?:  string
    tr_cd?:  string
    tr_cont?:  T1471_RESPONSE_HEADER_TR_CONT
    tr_cont_key?:  string
}

export type T1475_RESPONSE_HEADER_TR_CONT = 'Y' | 'N';
export interface T1475_RESPONSE_HEADER {
    'content-type'?:  string
    tr_cd?:  string
    tr_cont?:  T1475_RESPONSE_HEADER_TR_CONT
    tr_cont_key?:  string
}

export type T1486_RESPONSE_HEADER_TR_CONT = 'Y' | 'N';
export interface T1486_RESPONSE_HEADER {
    'content-type'?:  string
    tr_cd?:  string
    tr_cont?:  T1486_RESPONSE_HEADER_TR_CONT
    tr_cont_key?:  string
}

export type T1488_RESPONSE_HEADER_TR_CONT = 'Y' | 'N';
export interface T1488_RESPONSE_HEADER {
    'content-type'?:  string
    tr_cd?:  string
    tr_cont?:  T1488_RESPONSE_HEADER_TR_CONT
    tr_cont_key?:  string
}

export type T8407_RESPONSE_HEADER_TR_CONT = 'Y' | 'N';
export interface T8407_RESPONSE_HEADER {
    'content-type'?:  string
    tr_cd?:  string
    tr_cont?:  T8407_RESPONSE_HEADER_TR_CONT
    tr_cont_key?:  string
}

export type T9945_RESPONSE_HEADER_TR_CONT = 'Y' | 'N';
export interface T9945_RESPONSE_HEADER {
    'content-type'?:  string
    tr_cd?:  string
    tr_cont?:  T9945_RESPONSE_HEADER_TR_CONT
    tr_cont_key?:  string
}

export type T1752_RESPONSE_HEADER_TR_CONT = 'Y' | 'N';
export interface T1752_RESPONSE_HEADER {
    'content-type'?:  string
    tr_cd?:  string
    tr_cont?:  T1752_RESPONSE_HEADER_TR_CONT
    tr_cont_key?:  string
}

export type T1764_RESPONSE_HEADER_TR_CONT = 'Y' | 'N';
export interface T1764_RESPONSE_HEADER {
    'content-type'?:  string
    tr_cd?:  string
    tr_cont?:  T1764_RESPONSE_HEADER_TR_CONT
    tr_cont_key?:  string
}

export type T1771_RESPONSE_HEADER_TR_CONT = 'Y' | 'N';
export interface T1771_RESPONSE_HEADER {
    'content-type'?:  string
    tr_cd?:  string
    tr_cont?:  T1771_RESPONSE_HEADER_TR_CONT
    tr_cont_key?:  string
}

export type T3102_RESPONSE_HEADER_TR_CONT = 'Y' | 'N';
export interface T3102_RESPONSE_HEADER {
    'content-type'?:  string
    tr_cd?:  string
    tr_cont?:  T3102_RESPONSE_HEADER_TR_CONT
    tr_cont_key?:  string
}

export type T3202_RESPONSE_HEADER_TR_CONT = 'Y' | 'N';
export interface T3202_RESPONSE_HEADER {
    'content-type'?:  string
    tr_cd?:  string
    tr_cont?:  T3202_RESPONSE_HEADER_TR_CONT
    tr_cont_key?:  string
}

export type T3320_RESPONSE_HEADER_TR_CONT = 'Y' | 'N';
export interface T3320_RESPONSE_HEADER {
    'content-type'?:  string
    tr_cd?:  string
    tr_cont?:  T3320_RESPONSE_HEADER_TR_CONT
    tr_cont_key?:  string
}

export type T3341_RESPONSE_HEADER_TR_CONT = 'Y' | 'N';
export interface T3341_RESPONSE_HEADER {
    'content-type'?:  string
    tr_cd?:  string
    tr_cont?:  T3341_RESPONSE_HEADER_TR_CONT
    tr_cont_key?:  string
}

export type T3401_RESPONSE_HEADER_TR_CONT = 'Y' | 'N';
export interface T3401_RESPONSE_HEADER {
    'content-type'?:  string
    tr_cd?:  string
    tr_cont?:  T3401_RESPONSE_HEADER_TR_CONT
    tr_cont_key?:  string
}

export type T3518_RESPONSE_HEADER_TR_CONT = 'Y' | 'N';
export interface T3518_RESPONSE_HEADER {
    'content-type'?:  string
    tr_cd?:  string
    tr_cont?:  T3518_RESPONSE_HEADER_TR_CONT
    tr_cont_key?:  string
}

export type T3521_RESPONSE_HEADER_TR_CONT = 'Y' | 'N';
export interface T3521_RESPONSE_HEADER {
    'content-type'?:  string
    tr_cd?:  string
    tr_cont?:  T3521_RESPONSE_HEADER_TR_CONT
    tr_cont_key?:  string
}

export type T8428_RESPONSE_HEADER_TR_CONT = 'Y' | 'N';
export interface T8428_RESPONSE_HEADER {
    'content-type'?:  string
    tr_cd?:  string
    tr_cont?:  T8428_RESPONSE_HEADER_TR_CONT
    tr_cont_key?:  string
}

export type T1631_RESPONSE_HEADER_TR_CONT = 'Y' | 'N';
export interface T1631_RESPONSE_HEADER {
    'content-type'?:  string
    tr_cd?:  string
    tr_cont?:  T1631_RESPONSE_HEADER_TR_CONT
    tr_cont_key?:  string
}

export type T1632_RESPONSE_HEADER_TR_CONT = 'Y' | 'N';
export interface T1632_RESPONSE_HEADER {
    'content-type'?:  string
    tr_cd?:  string
    tr_cont?:  T1632_RESPONSE_HEADER_TR_CONT
    tr_cont_key?:  string
}

export type T1633_RESPONSE_HEADER_TR_CONT = 'Y' | 'N';
export interface T1633_RESPONSE_HEADER {
    'content-type'?:  string
    tr_cd?:  string
    tr_cont?:  T1633_RESPONSE_HEADER_TR_CONT
    tr_cont_key?:  string
}

export type T1636_RESPONSE_HEADER_TR_CONT = 'Y' | 'N';
export interface T1636_RESPONSE_HEADER {
    'content-type'?:  string
    tr_cd?:  string
    tr_cont?:  T1636_RESPONSE_HEADER_TR_CONT
    tr_cont_key?:  string
}

export type T1637_RESPONSE_HEADER_TR_CONT = 'Y' | 'N';
export interface T1637_RESPONSE_HEADER {
    'content-type'?:  string
    tr_cd?:  string
    tr_cont?:  T1637_RESPONSE_HEADER_TR_CONT
    tr_cont_key?:  string
}

export type T1640_RESPONSE_HEADER_TR_CONT = 'Y' | 'N';
export interface T1640_RESPONSE_HEADER {
    'content-type'?:  string
    tr_cd?:  string
    tr_cont?:  T1640_RESPONSE_HEADER_TR_CONT
    tr_cont_key?:  string
}

export type T1662_RESPONSE_HEADER_TR_CONT = 'Y' | 'N';
export interface T1662_RESPONSE_HEADER {
    'content-type'?:  string
    tr_cd?:  string
    tr_cont?:  T1662_RESPONSE_HEADER_TR_CONT
    tr_cont_key?:  string
}

export type T1601_RESPONSE_HEADER_TR_CONT = 'Y' | 'N';
export interface T1601_RESPONSE_HEADER {
    'content-type'?:  string
    tr_cd?:  string
    tr_cont?:  T1601_RESPONSE_HEADER_TR_CONT
    tr_cont_key?:  string
}

export type T1602_RESPONSE_HEADER_TR_CONT = 'Y' | 'N';
export interface T1602_RESPONSE_HEADER {
    'content-type'?:  string
    tr_cd?:  string
    tr_cont?:  T1602_RESPONSE_HEADER_TR_CONT
    tr_cont_key?:  string
}

export type T1603_RESPONSE_HEADER_TR_CONT = 'Y' | 'N';
export interface T1603_RESPONSE_HEADER {
    'content-type'?:  string
    tr_cd?:  string
    tr_cont?:  T1603_RESPONSE_HEADER_TR_CONT
    tr_cont_key?:  string
}

export type T1615_RESPONSE_HEADER_TR_CONT = 'Y' | 'N';
export interface T1615_RESPONSE_HEADER {
    'content-type'?:  string
    tr_cd?:  string
    tr_cont?:  T1615_RESPONSE_HEADER_TR_CONT
    tr_cont_key?:  string
}

export type T1617_RESPONSE_HEADER_TR_CONT = 'Y' | 'N';
export interface T1617_RESPONSE_HEADER {
    'content-type'?:  string
    tr_cd?:  string
    tr_cont?:  T1617_RESPONSE_HEADER_TR_CONT
    tr_cont_key?:  string
}

export type T1621_RESPONSE_HEADER_TR_CONT = 'Y' | 'N';
export interface T1621_RESPONSE_HEADER {
    'content-type'?:  string
    tr_cd?:  string
    tr_cont?:  T1621_RESPONSE_HEADER_TR_CONT
    tr_cont_key?:  string
}

export type T1664_RESPONSE_HEADER_TR_CONT = 'Y' | 'N';
export interface T1664_RESPONSE_HEADER {
    'content-type'?:  string
    tr_cd?:  string
    tr_cont?:  T1664_RESPONSE_HEADER_TR_CONT
    tr_cont_key?:  string
}

export type T1702_RESPONSE_HEADER_TR_CONT = 'Y' | 'N';
export interface T1702_RESPONSE_HEADER {
    'content-type'?:  string
    tr_cd?:  string
    tr_cont?:  T1702_RESPONSE_HEADER_TR_CONT
    tr_cont_key?:  string
}

export type T1716_RESPONSE_HEADER_TR_CONT = 'Y' | 'N';
export interface T1716_RESPONSE_HEADER {
    'content-type'?:  string
    tr_cd?:  string
    tr_cont?:  T1716_RESPONSE_HEADER_TR_CONT
    tr_cont_key?:  string
}

export type T1717_RESPONSE_HEADER_TR_CONT = 'Y' | 'N';
export interface T1717_RESPONSE_HEADER {
    'content-type'?:  string
    tr_cd?:  string
    tr_cont?:  T1717_RESPONSE_HEADER_TR_CONT
    tr_cont_key?:  string
}

export type T1950_RESPONSE_HEADER_TR_CONT = 'Y' | 'N';
export interface T1950_RESPONSE_HEADER {
    'content-type'?:  string
    tr_cd?:  string
    tr_cont?:  T1950_RESPONSE_HEADER_TR_CONT
    tr_cont_key?:  string
}

export type T1951_RESPONSE_HEADER_TR_CONT = 'Y' | 'N';
export interface T1951_RESPONSE_HEADER {
    'content-type'?:  string
    tr_cd?:  string
    tr_cont?:  T1951_RESPONSE_HEADER_TR_CONT
    tr_cont_key?:  string
}

export type T1954_RESPONSE_HEADER_TR_CONT = 'Y' | 'N';
export interface T1954_RESPONSE_HEADER {
    'content-type'?:  string
    tr_cd?:  string
    tr_cont?:  T1954_RESPONSE_HEADER_TR_CONT
    tr_cont_key?:  string
}

export type T1956_RESPONSE_HEADER_TR_CONT = 'Y' | 'N';
export interface T1956_RESPONSE_HEADER {
    'content-type'?:  string
    tr_cd?:  string
    tr_cont?:  T1956_RESPONSE_HEADER_TR_CONT
    tr_cont_key?:  string
}

export type T1958_RESPONSE_HEADER_TR_CONT = 'Y' | 'N';
export interface T1958_RESPONSE_HEADER {
    'content-type'?:  string
    tr_cd?:  string
    tr_cont?:  T1958_RESPONSE_HEADER_TR_CONT
    tr_cont_key?:  string
}

export type T1959_RESPONSE_HEADER_TR_CONT = 'Y' | 'N';
export interface T1959_RESPONSE_HEADER {
    'content-type'?:  string
    tr_cd?:  string
    tr_cont?:  T1959_RESPONSE_HEADER_TR_CONT
    tr_cont_key?:  string
}

export type T1960_RESPONSE_HEADER_TR_CONT = 'Y' | 'N';
export interface T1960_RESPONSE_HEADER {
    'content-type'?:  string
    tr_cd?:  string
    tr_cont?:  T1960_RESPONSE_HEADER_TR_CONT
    tr_cont_key?:  string
}

export type T1961_RESPONSE_HEADER_TR_CONT = 'Y' | 'N';
export interface T1961_RESPONSE_HEADER {
    'content-type'?:  string
    tr_cd?:  string
    tr_cont?:  T1961_RESPONSE_HEADER_TR_CONT
    tr_cont_key?:  string
}

export type T1964_RESPONSE_HEADER_TR_CONT = 'Y' | 'N';
export interface T1964_RESPONSE_HEADER {
    'content-type'?:  string
    tr_cd?:  string
    tr_cont?:  T1964_RESPONSE_HEADER_TR_CONT
    tr_cont_key?:  string
}

export type T1966_RESPONSE_HEADER_TR_CONT = 'Y' | 'N';
export interface T1966_RESPONSE_HEADER {
    'content-type'?:  string
    tr_cd?:  string
    tr_cont?:  T1966_RESPONSE_HEADER_TR_CONT
    tr_cont_key?:  string
}

export type T1969_RESPONSE_HEADER_TR_CONT = 'Y' | 'N';
export interface T1969_RESPONSE_HEADER {
    'content-type'?:  string
    tr_cd?:  string
    tr_cont?:  T1969_RESPONSE_HEADER_TR_CONT
    tr_cont_key?:  string
}

export type T1971_RESPONSE_HEADER_TR_CONT = 'Y' | 'N';
export interface T1971_RESPONSE_HEADER {
    'content-type'?:  string
    tr_cd?:  string
    tr_cont?:  T1971_RESPONSE_HEADER_TR_CONT
    tr_cont_key?:  string
}

export type T1972_RESPONSE_HEADER_TR_CONT = 'Y' | 'N';
export interface T1972_RESPONSE_HEADER {
    'content-type'?:  string
    tr_cd?:  string
    tr_cont?:  T1972_RESPONSE_HEADER_TR_CONT
    tr_cont_key?:  string
}

export type T1973_RESPONSE_HEADER_TR_CONT = 'Y' | 'N';
export interface T1973_RESPONSE_HEADER {
    'content-type'?:  string
    tr_cd?:  string
    tr_cont?:  T1973_RESPONSE_HEADER_TR_CONT
    tr_cont_key?:  string
}

export type T1974_RESPONSE_HEADER_TR_CONT = 'Y' | 'N';
export interface T1974_RESPONSE_HEADER {
    'content-type'?:  string
    tr_cd?:  string
    tr_cont?:  T1974_RESPONSE_HEADER_TR_CONT
    tr_cont_key?:  string
}

export type T1988_RESPONSE_HEADER_TR_CONT = 'Y' | 'N';
export interface T1988_RESPONSE_HEADER {
    'content-type'?:  string
    tr_cd?:  string
    tr_cont?:  T1988_RESPONSE_HEADER_TR_CONT
    tr_cont_key?:  string
}

export type T8431_RESPONSE_HEADER_TR_CONT = 'Y' | 'N';
export interface T8431_RESPONSE_HEADER {
    'content-type'?:  string
    tr_cd?:  string
    tr_cont?:  T8431_RESPONSE_HEADER_TR_CONT
    tr_cont_key?:  string
}

export type T9905_RESPONSE_HEADER_TR_CONT = 'Y' | 'N';
export interface T9905_RESPONSE_HEADER {
    'content-type'?:  string
    tr_cd?:  string
    tr_cont?:  T9905_RESPONSE_HEADER_TR_CONT
    tr_cont_key?:  string
}

export type T9907_RESPONSE_HEADER_TR_CONT = 'Y' | 'N';
export interface T9907_RESPONSE_HEADER {
    'content-type'?:  string
    tr_cd?:  string
    tr_cont?:  T9907_RESPONSE_HEADER_TR_CONT
    tr_cont_key?:  string
}

export type T9942_RESPONSE_HEADER_TR_CONT = 'Y' | 'N';
export interface T9942_RESPONSE_HEADER {
    'content-type'?:  string
    tr_cd?:  string
    tr_cont?:  T9942_RESPONSE_HEADER_TR_CONT
    tr_cont_key?:  string
}

export type T1901_RESPONSE_HEADER_TR_CONT = 'Y' | 'N';
export interface T1901_RESPONSE_HEADER {
    'content-type'?:  string
    tr_cd?:  string
    tr_cont?:  T1901_RESPONSE_HEADER_TR_CONT
    tr_cont_key?:  string
}

export type T1902_RESPONSE_HEADER_TR_CONT = 'Y' | 'N';
export interface T1902_RESPONSE_HEADER {
    'content-type'?:  string
    tr_cd?:  string
    tr_cont?:  T1902_RESPONSE_HEADER_TR_CONT
    tr_cont_key?:  string
}

export type T1903_RESPONSE_HEADER_TR_CONT = 'Y' | 'N';
export interface T1903_RESPONSE_HEADER {
    'content-type'?:  string
    tr_cd?:  string
    tr_cont?:  T1903_RESPONSE_HEADER_TR_CONT
    tr_cont_key?:  string
}

export type T1904_RESPONSE_HEADER_TR_CONT = 'Y' | 'N';
export interface T1904_RESPONSE_HEADER {
    'content-type'?:  string
    tr_cd?:  string
    tr_cont?:  T1904_RESPONSE_HEADER_TR_CONT
    tr_cont_key?:  string
}

export type T1906_RESPONSE_HEADER_TR_CONT = 'Y' | 'N';
export interface T1906_RESPONSE_HEADER {
    'content-type'?:  string
    tr_cd?:  string
    tr_cont?:  T1906_RESPONSE_HEADER_TR_CONT
    tr_cont_key?:  string
}

export type T1531_RESPONSE_HEADER_TR_CONT = 'Y' | 'N';
export interface T1531_RESPONSE_HEADER {
    'content-type'?:  string
    tr_cd?:  string
    tr_cont?:  T1531_RESPONSE_HEADER_TR_CONT
    tr_cont_key?:  string
}

export type T1532_RESPONSE_HEADER_TR_CONT = 'Y' | 'N';
export interface T1532_RESPONSE_HEADER {
    'content-type'?:  string
    tr_cd?:  string
    tr_cont?:  T1532_RESPONSE_HEADER_TR_CONT
    tr_cont_key?:  string
}

export type T1533_RESPONSE_HEADER_TR_CONT = 'Y' | 'N';
export interface T1533_RESPONSE_HEADER {
    'content-type'?:  string
    tr_cd?:  string
    tr_cont?:  T1533_RESPONSE_HEADER_TR_CONT
    tr_cont_key?:  string
}

export type T1537_RESPONSE_HEADER_TR_CONT = 'Y' | 'N';
export interface T1537_RESPONSE_HEADER {
    'content-type'?:  string
    tr_cd?:  string
    tr_cont?:  T1537_RESPONSE_HEADER_TR_CONT
    tr_cont_key?:  string
}

export type T8425_RESPONSE_HEADER_TR_CONT = 'Y' | 'N';
export interface T8425_RESPONSE_HEADER {
    'content-type'?:  string
    tr_cd?:  string
    tr_cont?:  T8425_RESPONSE_HEADER_TR_CONT
    tr_cont_key?:  string
}

export type T1809_RESPONSE_HEADER_TR_CONT = 'Y' | 'N';
export interface T1809_RESPONSE_HEADER {
    'content-type'?:  string
    tr_cd?:  string
    tr_cont?:  T1809_RESPONSE_HEADER_TR_CONT
    tr_cont_key?:  string
}

export type T1825_RESPONSE_HEADER_TR_CONT = 'Y' | 'N';
export interface T1825_RESPONSE_HEADER {
    'content-type'?:  string
    tr_cd?:  string
    tr_cont?:  T1825_RESPONSE_HEADER_TR_CONT
    tr_cont_key?:  string
}

export type T1826_RESPONSE_HEADER_TR_CONT = 'Y' | 'N';
export interface T1826_RESPONSE_HEADER {
    'content-type'?:  string
    tr_cd?:  string
    tr_cont?:  T1826_RESPONSE_HEADER_TR_CONT
    tr_cont_key?:  string
}

export type T1866_RESPONSE_HEADER_TR_CONT = 'Y' | 'N';
export interface T1866_RESPONSE_HEADER {
    'content-type'?:  string
    tr_cd?:  string
    tr_cont?:  T1866_RESPONSE_HEADER_TR_CONT
    tr_cont_key?:  string
}

export type T1859_RESPONSE_HEADER_TR_CONT = 'Y' | 'N';
export interface T1859_RESPONSE_HEADER {
    'content-type'?:  string
    tr_cd?:  string
    tr_cont?:  T1859_RESPONSE_HEADER_TR_CONT
    tr_cont_key?:  string
}


export interface T1860_RESPONSE_HEADER {
    'content-type'?:  string
    tr_cd?:  string
    tr_cont?:  string
    tr_cont_key?:  string
}

export type T1441_RESPONSE_HEADER_TR_CONT = 'Y' | 'N';
export interface T1441_RESPONSE_HEADER {
    'content-type'?:  string
    tr_cd?:  string
    tr_cont?:  T1441_RESPONSE_HEADER_TR_CONT
    tr_cont_key?:  string
}

export type T1444_RESPONSE_HEADER_TR_CONT = 'Y' | 'N';
export interface T1444_RESPONSE_HEADER {
    'content-type'?:  string
    tr_cd?:  string
    tr_cont?:  T1444_RESPONSE_HEADER_TR_CONT
    tr_cont_key?:  string
}

export type T1452_RESPONSE_HEADER_TR_CONT = 'Y' | 'N';
export interface T1452_RESPONSE_HEADER {
    'content-type'?:  string
    tr_cd?:  string
    tr_cont?:  T1452_RESPONSE_HEADER_TR_CONT
    tr_cont_key?:  string
}

export type T1463_RESPONSE_HEADER_TR_CONT = 'Y' | 'N';
export interface T1463_RESPONSE_HEADER {
    'content-type'?:  string
    tr_cd?:  string
    tr_cont?:  T1463_RESPONSE_HEADER_TR_CONT
    tr_cont_key?:  string
}

export type T1466_RESPONSE_HEADER_TR_CONT = 'Y' | 'N';
export interface T1466_RESPONSE_HEADER {
    'content-type'?:  string
    tr_cd?:  string
    tr_cont?:  T1466_RESPONSE_HEADER_TR_CONT
    tr_cont_key?:  string
}

export type T1481_RESPONSE_HEADER_TR_CONT = 'Y' | 'N';
export interface T1481_RESPONSE_HEADER {
    'content-type'?:  string
    tr_cd?:  string
    tr_cont?:  T1481_RESPONSE_HEADER_TR_CONT
    tr_cont_key?:  string
}

export type T1482_RESPONSE_HEADER_TR_CONT = 'Y' | 'N';
export interface T1482_RESPONSE_HEADER {
    'content-type'?:  string
    tr_cd?:  string
    tr_cont?:  T1482_RESPONSE_HEADER_TR_CONT
    tr_cont_key?:  string
}

export type T1489_RESPONSE_HEADER_TR_CONT = 'Y' | 'N';
export interface T1489_RESPONSE_HEADER {
    'content-type'?:  string
    tr_cd?:  string
    tr_cont?:  T1489_RESPONSE_HEADER_TR_CONT
    tr_cont_key?:  string
}

export type T1492_RESPONSE_HEADER_TR_CONT = 'Y' | 'N';
export interface T1492_RESPONSE_HEADER {
    'content-type'?:  string
    tr_cd?:  string
    tr_cont?:  T1492_RESPONSE_HEADER_TR_CONT
    tr_cont_key?:  string
}

export type T1665_RESPONSE_HEADER_TR_CONT = 'Y' | 'N';
export interface T1665_RESPONSE_HEADER {
    'content-type'?:  string
    tr_cd?:  string
    tr_cont?:  T1665_RESPONSE_HEADER_TR_CONT
    tr_cont_key?:  string
}

export type T8410_RESPONSE_HEADER_TR_CONT = 'Y' | 'N';
export interface T8410_RESPONSE_HEADER {
    'content-type'?:  string
    tr_cd?:  string
    tr_cont?:  T8410_RESPONSE_HEADER_TR_CONT
    tr_cont_key?:  string
}

export type T8411_RESPONSE_HEADER_TR_CONT = 'Y' | 'N';
export interface T8411_RESPONSE_HEADER {
    'content-type'?:  string
    tr_cd?:  string
    tr_cont?:  T8411_RESPONSE_HEADER_TR_CONT
    tr_cont_key?:  string
}

export type T8412_RESPONSE_HEADER_TR_CONT = 'Y' | 'N';
export interface T8412_RESPONSE_HEADER {
    'content-type'?:  string
    tr_cd?:  string
    tr_cont?:  T8412_RESPONSE_HEADER_TR_CONT
    tr_cont_key?:  string
}

export type CLNAQ00100_RESPONSE_HEADER_TR_CONT = 'Y' | 'N';
export interface CLNAQ00100_RESPONSE_HEADER {
    'content-type'?:  string
    tr_cd?:  string
    tr_cont?:  CLNAQ00100_RESPONSE_HEADER_TR_CONT
    tr_cont_key?:  string
}

export type T1403_RESPONSE_HEADER_TR_CONT = 'Y' | 'N';
export interface T1403_RESPONSE_HEADER {
    'content-type'?:  string
    tr_cd?:  string
    tr_cont?:  T1403_RESPONSE_HEADER_TR_CONT
    tr_cont_key?:  string
}

export type T1411_RESPONSE_HEADER_TR_CONT = 'Y' | 'N';
export interface T1411_RESPONSE_HEADER {
    'content-type'?:  string
    tr_cd?:  string
    tr_cont?:  T1411_RESPONSE_HEADER_TR_CONT
    tr_cont_key?:  string
}

export type T1638_RESPONSE_HEADER_TR_CONT = 'Y' | 'N';
export interface T1638_RESPONSE_HEADER {
    'content-type'?:  string
    tr_cd?:  string
    tr_cont?:  T1638_RESPONSE_HEADER_TR_CONT
    tr_cont_key?:  string
}

export type T1921_RESPONSE_HEADER_TR_CONT = 'Y' | 'N';
export interface T1921_RESPONSE_HEADER {
    'content-type'?:  string
    tr_cd?:  string
    tr_cont?:  T1921_RESPONSE_HEADER_TR_CONT
    tr_cont_key?:  string
}

export type T1926_RESPONSE_HEADER_TR_CONT = 'Y' | 'N';
export interface T1926_RESPONSE_HEADER {
    'content-type'?:  string
    tr_cd?:  string
    tr_cont?:  T1926_RESPONSE_HEADER_TR_CONT
    tr_cont_key?:  string
}

export type T1927_RESPONSE_HEADER_TR_CONT = 'Y' | 'N';
export interface T1927_RESPONSE_HEADER {
    'content-type'?:  string
    tr_cd?:  string
    tr_cont?:  T1927_RESPONSE_HEADER_TR_CONT
    tr_cont_key?:  string
}

export type T1941_RESPONSE_HEADER_TR_CONT = 'Y' | 'N';
export interface T1941_RESPONSE_HEADER {
    'content-type'?:  string
    tr_cd?:  string
    tr_cont?:  T1941_RESPONSE_HEADER_TR_CONT
    tr_cont_key?:  string
}

export type T8430_RESPONSE_HEADER_TR_CONT = 'Y' | 'N';
export interface T8430_RESPONSE_HEADER {
    'content-type'?:  string
    tr_cd?:  string
    tr_cont?:  T8430_RESPONSE_HEADER_TR_CONT
    tr_cont_key?:  string
}

export type T8436_RESPONSE_HEADER_TR_CONT = 'Y' | 'N';
export interface T8436_RESPONSE_HEADER {
    'content-type'?:  string
    tr_cd?:  string
    tr_cont?:  T8436_RESPONSE_HEADER_TR_CONT
    tr_cont_key?:  string
}

export type CDPCQ04700_RESPONSE_HEADER_TR_CONT = 'Y' | 'N';
export interface CDPCQ04700_RESPONSE_HEADER {
    'content-type'?:  string
    tr_cd?:  string
    tr_cont?:  CDPCQ04700_RESPONSE_HEADER_TR_CONT
    tr_cont_key?:  string
}

export type CSPAQ00600_RESPONSE_HEADER_TR_CONT = 'Y' | 'N';
export interface CSPAQ00600_RESPONSE_HEADER {
    'content-type'?:  string
    tr_cd?:  string
    tr_cont?:  CSPAQ00600_RESPONSE_HEADER_TR_CONT
    tr_cont_key?:  string
}

export type CSPAQ12200_RESPONSE_HEADER_TR_CONT = 'Y' | 'N';
export interface CSPAQ12200_RESPONSE_HEADER {
    'content-type'?:  string
    tr_cd?:  string
    tr_cont?:  CSPAQ12200_RESPONSE_HEADER_TR_CONT
    tr_cont_key?:  string
}

export type CSPAQ12300_RESPONSE_HEADER_TR_CONT = 'Y' | 'N';
export interface CSPAQ12300_RESPONSE_HEADER {
    'content-type'?:  string
    tr_cd?:  string
    tr_cont?:  CSPAQ12300_RESPONSE_HEADER_TR_CONT
    tr_cont_key?:  string
}

export type CSPAQ13700_RESPONSE_HEADER_TR_CONT = 'Y' | 'N';
export interface CSPAQ13700_RESPONSE_HEADER {
    'content-type'?:  string
    tr_cd?:  string
    tr_cont?:  CSPAQ13700_RESPONSE_HEADER_TR_CONT
    tr_cont_key?:  string
}

export type CSPAQ22200_RESPONSE_HEADER_TR_CONT = 'Y' | 'N';
export interface CSPAQ22200_RESPONSE_HEADER {
    'content-type'?:  string
    tr_cd?:  string
    tr_cont?:  CSPAQ22200_RESPONSE_HEADER_TR_CONT
    tr_cont_key?:  string
}

export type CSPBQ00200_RESPONSE_HEADER_TR_CONT = 'Y' | 'N';
export interface CSPBQ00200_RESPONSE_HEADER {
    'content-type'?:  string
    tr_cd?:  string
    tr_cont?:  CSPBQ00200_RESPONSE_HEADER_TR_CONT
    tr_cont_key?:  string
}

export type FOCCQ33600_RESPONSE_HEADER_TR_CONT = 'Y' | 'N';
export interface FOCCQ33600_RESPONSE_HEADER {
    'content-type'?:  string
    tr_cd?:  string
    tr_cont?:  FOCCQ33600_RESPONSE_HEADER_TR_CONT
    tr_cont_key?:  string
}

export type T0150_RESPONSE_HEADER_TR_CONT = 'Y' | 'N';
export interface T0150_RESPONSE_HEADER {
    'content-type'?:  string
    tr_cd?:  string
    tr_cont?:  T0150_RESPONSE_HEADER_TR_CONT
    tr_cont_key?:  string
}

export type T0151_RESPONSE_HEADER_TR_CONT = 'Y' | 'N';
export interface T0151_RESPONSE_HEADER {
    'content-type'?:  string
    tr_cd?:  string
    tr_cont?:  T0151_RESPONSE_HEADER_TR_CONT
    tr_cont_key?:  string
}

export type T0424_RESPONSE_HEADER_TR_CONT = 'Y' | 'N';
export interface T0424_RESPONSE_HEADER {
    'content-type'?:  string
    tr_cd?:  string
    tr_cont?:  T0424_RESPONSE_HEADER_TR_CONT
    tr_cont_key?:  string
}

export type T0425_RESPONSE_HEADER_TR_CONT = 'Y' | 'N';
export interface T0425_RESPONSE_HEADER {
    'content-type'?:  string
    tr_cd?:  string
    tr_cont?:  T0425_RESPONSE_HEADER_TR_CONT
    tr_cont_key?:  string
}

export type CSPAT00601_RESPONSE_HEADER_TR_CONT = 'Y' | 'N';
export interface CSPAT00601_RESPONSE_HEADER {
    'content-type'?:  string
    tr_cd?:  string
    tr_cont?:  CSPAT00601_RESPONSE_HEADER_TR_CONT
    tr_cont_key?:  string
}

export type CSPAT00701_RESPONSE_HEADER_TR_CONT = 'Y' | 'N';
export interface CSPAT00701_RESPONSE_HEADER {
    'content-type'?:  string
    tr_cd?:  string
    tr_cont?:  CSPAT00701_RESPONSE_HEADER_TR_CONT
    tr_cont_key?:  string
}

export type CSPAT00801_RESPONSE_HEADER_TR_CONT = 'Y' | 'N';
export interface CSPAT00801_RESPONSE_HEADER {
    'content-type'?:  string
    tr_cd?:  string
    tr_cont?:  CSPAT00801_RESPONSE_HEADER_TR_CONT
    tr_cont_key?:  string
}

export type T2101_RESPONSE_HEADER_TR_CONT = 'Y' | 'N';
export interface T2101_RESPONSE_HEADER {
    'content-type'?:  string
    tr_cd?:  string
    tr_cont?:  T2101_RESPONSE_HEADER_TR_CONT
    tr_cont_key?:  string
}

export type T2105_RESPONSE_HEADER_TR_CONT = 'Y' | 'N';
export interface T2105_RESPONSE_HEADER {
    'content-type'?:  string
    tr_cd?:  string
    tr_cont?:  T2105_RESPONSE_HEADER_TR_CONT
    tr_cont_key?:  string
}

export type T2106_RESPONSE_HEADER_TR_CONT = 'Y' | 'N';
export interface T2106_RESPONSE_HEADER {
    'content-type'?:  string
    tr_cd?:  string
    tr_cont?:  T2106_RESPONSE_HEADER_TR_CONT
    tr_cont_key?:  string
}

export type T2201_RESPONSE_HEADER_TR_CONT = 'Y' | 'N';
export interface T2201_RESPONSE_HEADER {
    'content-type'?:  string
    tr_cd?:  string
    tr_cont?:  T2201_RESPONSE_HEADER_TR_CONT
    tr_cont_key?:  string
}

export type T2203_RESPONSE_HEADER_TR_CONT = 'Y' | 'N';
export interface T2203_RESPONSE_HEADER {
    'content-type'?:  string
    tr_cd?:  string
    tr_cont?:  T2203_RESPONSE_HEADER_TR_CONT
    tr_cont_key?:  string
}

export type T2210_RESPONSE_HEADER_TR_CONT = 'Y' | 'N';
export interface T2210_RESPONSE_HEADER {
    'content-type'?:  string
    tr_cd?:  string
    tr_cont?:  T2210_RESPONSE_HEADER_TR_CONT
    tr_cont_key?:  string
}

export type T2301_RESPONSE_HEADER_TR_CONT = 'Y' | 'N';
export interface T2301_RESPONSE_HEADER {
    'content-type'?:  string
    tr_cd?:  string
    tr_cont?:  T2301_RESPONSE_HEADER_TR_CONT
    tr_cont_key?:  string
}

export type T2405_RESPONSE_HEADER_TR_CONT = 'Y' | 'N';
export interface T2405_RESPONSE_HEADER {
    'content-type'?:  string
    tr_cd?:  string
    tr_cont?:  T2405_RESPONSE_HEADER_TR_CONT
    tr_cont_key?:  string
}

export type T2421_RESPONSE_HEADER_TR_CONT = 'Y' | 'N';
export interface T2421_RESPONSE_HEADER {
    'content-type'?:  string
    tr_cd?:  string
    tr_cont?:  T2421_RESPONSE_HEADER_TR_CONT
    tr_cont_key?:  string
}

export type T2830_RESPONSE_HEADER_TR_CONT = 'Y' | 'N';
export interface T2830_RESPONSE_HEADER {
    'content-type'?:  string
    tr_cd?:  string
    tr_cont?:  T2830_RESPONSE_HEADER_TR_CONT
    tr_cont_key?:  string
}

export type T2831_RESPONSE_HEADER_TR_CONT = 'Y' | 'N';
export interface T2831_RESPONSE_HEADER {
    'content-type'?:  string
    tr_cd?:  string
    tr_cont?:  T2831_RESPONSE_HEADER_TR_CONT
    tr_cont_key?:  string
}

export type T2832_RESPONSE_HEADER_TR_CONT = 'Y' | 'N';
export interface T2832_RESPONSE_HEADER {
    'content-type'?:  string
    tr_cd?:  string
    tr_cont?:  T2832_RESPONSE_HEADER_TR_CONT
    tr_cont_key?:  string
}

export type T2833_RESPONSE_HEADER_TR_CONT = 'Y' | 'N';
export interface T2833_RESPONSE_HEADER {
    'content-type'?:  string
    tr_cd?:  string
    tr_cont?:  T2833_RESPONSE_HEADER_TR_CONT
    tr_cont_key?:  string
}

export type T2835_RESPONSE_HEADER_TR_CONT = 'Y' | 'N';
export interface T2835_RESPONSE_HEADER {
    'content-type'?:  string
    tr_cd?:  string
    tr_cont?:  T2835_RESPONSE_HEADER_TR_CONT
    tr_cont_key?:  string
}

export type T8401_RESPONSE_HEADER_TR_CONT = 'Y' | 'N';
export interface T8401_RESPONSE_HEADER {
    'content-type'?:  string
    tr_cd?:  string
    tr_cont?:  T8401_RESPONSE_HEADER_TR_CONT
    tr_cont_key?:  string
}

export type T8402_RESPONSE_HEADER_TR_CONT = 'Y' | 'N';
export interface T8402_RESPONSE_HEADER {
    'content-type'?:  string
    tr_cd?:  string
    tr_cont?:  T8402_RESPONSE_HEADER_TR_CONT
    tr_cont_key?:  string
}

export type T8403_RESPONSE_HEADER_TR_CONT = 'Y' | 'N';
export interface T8403_RESPONSE_HEADER {
    'content-type'?:  string
    tr_cd?:  string
    tr_cont?:  T8403_RESPONSE_HEADER_TR_CONT
    tr_cont_key?:  string
}

export type T8404_RESPONSE_HEADER_TR_CONT = 'Y' | 'N';
export interface T8404_RESPONSE_HEADER {
    'content-type'?:  string
    tr_cd?:  string
    tr_cont?:  T8404_RESPONSE_HEADER_TR_CONT
    tr_cont_key?:  string
}

export type T8405_RESPONSE_HEADER_TR_CONT = 'Y' | 'N';
export interface T8405_RESPONSE_HEADER {
    'content-type'?:  string
    tr_cd?:  string
    tr_cont?:  T8405_RESPONSE_HEADER_TR_CONT
    tr_cont_key?:  string
}

export type T8406_RESPONSE_HEADER_TR_CONT = 'Y' | 'N';
export interface T8406_RESPONSE_HEADER {
    'content-type'?:  string
    tr_cd?:  string
    tr_cont?:  T8406_RESPONSE_HEADER_TR_CONT
    tr_cont_key?:  string
}

export type T8426_RESPONSE_HEADER_TR_CONT = 'Y' | 'N';
export interface T8426_RESPONSE_HEADER {
    'content-type'?:  string
    tr_cd?:  string
    tr_cont?:  T8426_RESPONSE_HEADER_TR_CONT
    tr_cont_key?:  string
}

export type T8427_RESPONSE_HEADER_TR_CONT = 'Y' | 'N';
export interface T8427_RESPONSE_HEADER {
    'content-type'?:  string
    tr_cd?:  string
    tr_cont?:  T8427_RESPONSE_HEADER_TR_CONT
    tr_cont_key?:  string
}

export type T8432_RESPONSE_HEADER_TR_CONT = 'Y' | 'N';
export interface T8432_RESPONSE_HEADER {
    'content-type'?:  string
    tr_cd?:  string
    tr_cont?:  T8432_RESPONSE_HEADER_TR_CONT
    tr_cont_key?:  string
}

export type T8433_RESPONSE_HEADER_TR_CONT = 'Y' | 'N';
export interface T8433_RESPONSE_HEADER {
    'content-type'?:  string
    tr_cd?:  string
    tr_cont?:  T8433_RESPONSE_HEADER_TR_CONT
    tr_cont_key?:  string
}

export type T8434_RESPONSE_HEADER_TR_CONT = 'Y' | 'N';
export interface T8434_RESPONSE_HEADER {
    'content-type'?:  string
    tr_cd?:  string
    tr_cont?:  T8434_RESPONSE_HEADER_TR_CONT
    tr_cont_key?:  string
}

export type T8435_RESPONSE_HEADER_TR_CONT = 'Y' | 'N';
export interface T8435_RESPONSE_HEADER {
    'content-type'?:  string
    tr_cd?:  string
    tr_cont?:  T8435_RESPONSE_HEADER_TR_CONT
    tr_cont_key?:  string
}

export type T8437_RESPONSE_HEADER_TR_CONT = 'Y' | 'N';
export interface T8437_RESPONSE_HEADER {
    'content-type'?:  string
    tr_cd?:  string
    tr_cont?:  T8437_RESPONSE_HEADER_TR_CONT
    tr_cont_key?:  string
}

export type T9943_RESPONSE_HEADER_TR_CONT = 'Y' | 'N';
export interface T9943_RESPONSE_HEADER {
    'content-type'?:  string
    tr_cd?:  string
    tr_cont?:  T9943_RESPONSE_HEADER_TR_CONT
    tr_cont_key?:  string
}

export type T9944_RESPONSE_HEADER_TR_CONT = 'Y' | 'N';
export interface T9944_RESPONSE_HEADER {
    'content-type'?:  string
    tr_cd?:  string
    tr_cont?:  T9944_RESPONSE_HEADER_TR_CONT
    tr_cont_key?:  string
}

export type T2541_RESPONSE_HEADER_TR_CONT = 'Y' | 'N';
export interface T2541_RESPONSE_HEADER {
    'content-type'?:  string
    tr_cd?:  string
    tr_cont?:  T2541_RESPONSE_HEADER_TR_CONT
    tr_cont_key?:  string
}

export type T2545_RESPONSE_HEADER_TR_CONT = 'Y' | 'N';
export interface T2545_RESPONSE_HEADER {
    'content-type'?:  string
    tr_cd?:  string
    tr_cont?:  T2545_RESPONSE_HEADER_TR_CONT
    tr_cont_key?:  string
}

export type T2209_RESPONSE_HEADER_TR_CONT = 'Y' | 'N';
export interface T2209_RESPONSE_HEADER {
    'content-type'?:  string
    tr_cd?:  string
    tr_cont?:  T2209_RESPONSE_HEADER_TR_CONT
    tr_cont_key?:  string
}

export type T8414_RESPONSE_HEADER_TR_CONT = 'Y' | 'N';
export interface T8414_RESPONSE_HEADER {
    'content-type'?:  string
    tr_cd?:  string
    tr_cont?:  T8414_RESPONSE_HEADER_TR_CONT
    tr_cont_key?:  string
}

export type T8415_RESPONSE_HEADER_TR_CONT = 'Y' | 'N';
export interface T8415_RESPONSE_HEADER {
    'content-type'?:  string
    tr_cd?:  string
    tr_cont?:  T8415_RESPONSE_HEADER_TR_CONT
    tr_cont_key?:  string
}

export type T8416_RESPONSE_HEADER_TR_CONT = 'Y' | 'N';
export interface T8416_RESPONSE_HEADER {
    'content-type'?:  string
    tr_cd?:  string
    tr_cont?:  T8416_RESPONSE_HEADER_TR_CONT
    tr_cont_key?:  string
}

export type T8429_RESPONSE_HEADER_TR_CONT = 'Y' | 'N';
export interface T8429_RESPONSE_HEADER {
    'content-type'?:  string
    tr_cd?:  string
    tr_cont?:  T8429_RESPONSE_HEADER_TR_CONT
    tr_cont_key?:  string
}

export type CFOAQ00600_RESPONSE_HEADER_TR_CONT = 'Y' | 'N';
export interface CFOAQ00600_RESPONSE_HEADER {
    'content-type'?:  string
    tr_cd?:  string
    tr_cont?:  CFOAQ00600_RESPONSE_HEADER_TR_CONT
    tr_cont_key?:  string
}


export interface CFOAQ50600_RESPONSE_HEADER {
    'content-type'?:  string
}

export type CFOAQ10100_RESPONSE_HEADER_TR_CONT = 'Y' | 'N';
export interface CFOAQ10100_RESPONSE_HEADER {
    'content-type'?:  string
    tr_cd?:  string
    tr_cont?:  CFOAQ10100_RESPONSE_HEADER_TR_CONT
    tr_cont_key?:  string
}

export type CFOBQ10500_RESPONSE_HEADER_TR_CONT = 'Y' | 'N';
export interface CFOBQ10500_RESPONSE_HEADER {
    'content-type'?:  string
    tr_cd?:  string
    tr_cont?:  CFOBQ10500_RESPONSE_HEADER_TR_CONT
    tr_cont_key?:  string
}

export type CFOEQ11100_RESPONSE_HEADER_TR_CONT = 'Y' | 'N';
export interface CFOEQ11100_RESPONSE_HEADER {
    'content-type'?:  string
    tr_cd?:  string
    tr_cont?:  CFOEQ11100_RESPONSE_HEADER_TR_CONT
    tr_cont_key?:  string
}

export type CFOEQ82600_RESPONSE_HEADER_TR_CONT = 'Y' | 'N';
export interface CFOEQ82600_RESPONSE_HEADER {
    'content-type'?:  string
    tr_cd?:  string
    tr_cont?:  CFOEQ82600_RESPONSE_HEADER_TR_CONT
    tr_cont_key?:  string
}

export type CFOFQ02400_RESPONSE_HEADER_TR_CONT = 'Y' | 'N';
export interface CFOFQ02400_RESPONSE_HEADER {
    'content-type'?:  string
    tr_cd?:  string
    tr_cont?:  CFOFQ02400_RESPONSE_HEADER_TR_CONT
    tr_cont_key?:  string
}

export type T0434_RESPONSE_HEADER_TR_CONT = 'Y' | 'N';
export interface T0434_RESPONSE_HEADER {
    'content-type'?:  string
    tr_cd?:  string
    tr_cont?:  T0434_RESPONSE_HEADER_TR_CONT
    tr_cont_key?:  string
}

export type T0441_RESPONSE_HEADER_TR_CONT = 'Y' | 'N';
export interface T0441_RESPONSE_HEADER {
    'content-type'?:  string
    tr_cd?:  string
    tr_cont?:  T0441_RESPONSE_HEADER_TR_CONT
    tr_cont_key?:  string
}

export type CEXAQ21100_RESPONSE_HEADER_TR_CONT = 'Y' | 'N';
export interface CEXAQ21100_RESPONSE_HEADER {
    'content-type'?:  string
    tr_cd?:  string
    tr_cont?:  CEXAQ21100_RESPONSE_HEADER_TR_CONT
    tr_cont_key?:  string
}

export type CEXAQ21200_RESPONSE_HEADER_TR_CONT = 'Y' | 'N';
export interface CEXAQ21200_RESPONSE_HEADER {
    'content-type'?:  string
    tr_cd?:  string
    tr_cont?:  CEXAQ21200_RESPONSE_HEADER_TR_CONT
    tr_cont_key?:  string
}

export type CEXAQ31100_RESPONSE_HEADER_TR_CONT = 'Y' | 'N';
export interface CEXAQ31100_RESPONSE_HEADER {
    'content-type'?:  string
    tr_cd?:  string
    tr_cont?:  CEXAQ31100_RESPONSE_HEADER_TR_CONT
    tr_cont_key?:  string
}

export type CEXAQ31200_RESPONSE_HEADER_TR_CONT = 'Y' | 'N';
export interface CEXAQ31200_RESPONSE_HEADER {
    'content-type'?:  string
    tr_cd?:  string
    tr_cont?:  CEXAQ31200_RESPONSE_HEADER_TR_CONT
    tr_cont_key?:  string
}

export type CEXAQ44200_RESPONSE_HEADER_TR_CONT = 'Y' | 'N';
export interface CEXAQ44200_RESPONSE_HEADER {
    'content-type'?:  string
    tr_cd?:  string
    tr_cont?:  CEXAQ44200_RESPONSE_HEADER_TR_CONT
    tr_cont_key?:  string
}

export type FOCCQ33700_RESPONSE_HEADER_TR_CONT = 'Y' | 'N';
export interface FOCCQ33700_RESPONSE_HEADER {
    'content-type'?:  string
    tr_cd?:  string
    tr_cont?:  FOCCQ33700_RESPONSE_HEADER_TR_CONT
    tr_cont_key?:  string
}

export type CFOAT00100_RESPONSE_HEADER_TR_CONT = 'Y' | 'N';
export interface CFOAT00100_RESPONSE_HEADER {
    'content-type'?:  string
    tr_cd?:  string
    tr_cont?:  CFOAT00100_RESPONSE_HEADER_TR_CONT
    tr_cont_key?:  string
}

export type CFOAT00200_RESPONSE_HEADER_TR_CONT = 'Y' | 'N';
export interface CFOAT00200_RESPONSE_HEADER {
    'content-type'?:  string
    tr_cd?:  string
    tr_cont?:  CFOAT00200_RESPONSE_HEADER_TR_CONT
    tr_cont_key?:  string
}

export type CFOAT00300_RESPONSE_HEADER_TR_CONT = 'Y' | 'N';
export interface CFOAT00300_RESPONSE_HEADER {
    'content-type'?:  string
    tr_cd?:  string
    tr_cont?:  CFOAT00300_RESPONSE_HEADER_TR_CONT
    tr_cont_key?:  string
}

export type CFOBQ10800_RESPONSE_HEADER_TR_CONT = 'Y' | 'N';
export interface CFOBQ10800_RESPONSE_HEADER {
    'content-type'?:  string
    tr_cd?:  string
    tr_cont?:  CFOBQ10800_RESPONSE_HEADER_TR_CONT
    tr_cont_key?:  string
}

export type CEXAT11100_RESPONSE_HEADER_TR_CONT = 'Y' | 'N';
export interface CEXAT11100_RESPONSE_HEADER {
    'content-type'?:  string
    tr_cd?:  string
    tr_cont?:  CEXAT11100_RESPONSE_HEADER_TR_CONT
    tr_cont_key?:  string
}

export type CEXAT11200_RESPONSE_HEADER_TR_CONT = 'Y' | 'N';
export interface CEXAT11200_RESPONSE_HEADER {
    'content-type'?:  string
    tr_cd?:  string
    tr_cont?:  CEXAT11200_RESPONSE_HEADER_TR_CONT
    tr_cont_key?:  string
}

export type CEXAT11300_RESPONSE_HEADER_TR_CONT = 'Y' | 'N';
export interface CEXAT11300_RESPONSE_HEADER {
    'content-type'?:  string
    tr_cd?:  string
    tr_cont?:  CEXAT11300_RESPONSE_HEADER_TR_CONT
    tr_cont_key?:  string
}

export type MMDAQ91200_RESPONSE_HEADER_TR_CONT = 'Y' | 'N';
export interface MMDAQ91200_RESPONSE_HEADER {
    'content-type'?:  string
    tr_cd?:  string
    tr_cont?:  MMDAQ91200_RESPONSE_HEADER_TR_CONT
    tr_cont_key?:  string
}

export type O3101_RESPONSE_HEADER_TR_CONT = 'Y' | 'N';
export interface O3101_RESPONSE_HEADER {
    'content-type'?:  string
    tr_cd?:  string
    tr_cont?:  O3101_RESPONSE_HEADER_TR_CONT
    tr_cont_key?:  string
}

export type O3104_RESPONSE_HEADER_TR_CONT = 'Y' | 'N';
export interface O3104_RESPONSE_HEADER {
    'content-type'?:  string
    tr_cd?:  string
    tr_cont?:  O3104_RESPONSE_HEADER_TR_CONT
    tr_cont_key?:  string
}

export type O3105_RESPONSE_HEADER_TR_CONT = 'Y' | 'N';
export interface O3105_RESPONSE_HEADER {
    'content-type'?:  string
    tr_cd?:  string
    tr_cont?:  O3105_RESPONSE_HEADER_TR_CONT
    tr_cont_key?:  string
}

export type O3106_RESPONSE_HEADER_TR_CONT = 'Y' | 'N';
export interface O3106_RESPONSE_HEADER {
    'content-type'?:  string
    tr_cd?:  string
    tr_cont?:  O3106_RESPONSE_HEADER_TR_CONT
    tr_cont_key?:  string
}

export type O3107_RESPONSE_HEADER_TR_CONT = 'Y' | 'N';
export interface O3107_RESPONSE_HEADER {
    'content-type'?:  string
    tr_cd?:  string
    tr_cont?:  O3107_RESPONSE_HEADER_TR_CONT
    tr_cont_key?:  string
}

export type O3116_RESPONSE_HEADER_TR_CONT = 'Y' | 'N';
export interface O3116_RESPONSE_HEADER {
    'content-type'?:  string
    tr_cd?:  string
    tr_cont?:  O3116_RESPONSE_HEADER_TR_CONT
    tr_cont_key?:  string
}

export type O3121_RESPONSE_HEADER_TR_CONT = 'Y' | 'N';
export interface O3121_RESPONSE_HEADER {
    'content-type'?:  string
    tr_cd?:  string
    tr_cont?:  O3121_RESPONSE_HEADER_TR_CONT
    tr_cont_key?:  string
}

export type O3123_RESPONSE_HEADER_TR_CONT = 'Y' | 'N';
export interface O3123_RESPONSE_HEADER {
    'content-type'?:  string
    tr_cd?:  string
    tr_cont?:  O3123_RESPONSE_HEADER_TR_CONT
    tr_cont_key?:  string
}

export type O3125_RESPONSE_HEADER_TR_CONT = 'Y' | 'N';
export interface O3125_RESPONSE_HEADER {
    'content-type'?:  string
    tr_cd?:  string
    tr_cont?:  O3125_RESPONSE_HEADER_TR_CONT
    tr_cont_key?:  string
}

export type O3126_RESPONSE_HEADER_TR_CONT = 'Y' | 'N';
export interface O3126_RESPONSE_HEADER {
    'content-type'?:  string
    tr_cd?:  string
    tr_cont?:  O3126_RESPONSE_HEADER_TR_CONT
    tr_cont_key?:  string
}

export type O3127_RESPONSE_HEADER_TR_CONT = 'Y' | 'N';
export interface O3127_RESPONSE_HEADER {
    'content-type'?:  string
    tr_cd?:  string
    tr_cont?:  O3127_RESPONSE_HEADER_TR_CONT
    tr_cont_key?:  string
}

export type O3128_RESPONSE_HEADER_TR_CONT = 'Y' | 'N';
export interface O3128_RESPONSE_HEADER {
    'content-type'?:  string
    tr_cd?:  string
    tr_cont?:  O3128_RESPONSE_HEADER_TR_CONT
    tr_cont_key?:  string
}

export type O3136_RESPONSE_HEADER_TR_CONT = 'Y' | 'N';
export interface O3136_RESPONSE_HEADER {
    'content-type'?:  string
    tr_cd?:  string
    tr_cont?:  O3136_RESPONSE_HEADER_TR_CONT
    tr_cont_key?:  string
}

export type O3137_RESPONSE_HEADER_TR_CONT = 'Y' | 'N';
export interface O3137_RESPONSE_HEADER {
    'content-type'?:  string
    tr_cd?:  string
    tr_cont?:  O3137_RESPONSE_HEADER_TR_CONT
    tr_cont_key?:  string
}

export type CIDBQ01400_RESPONSE_HEADER_TR_CONT = 'Y' | 'N';
export interface CIDBQ01400_RESPONSE_HEADER {
    'content-type'?:  string
    tr_cd?:  string
    tr_cont?:  CIDBQ01400_RESPONSE_HEADER_TR_CONT
    tr_cont_key?:  string
}

export type CIDBQ01500_RESPONSE_HEADER_TR_CONT = 'Y' | 'N';
export interface CIDBQ01500_RESPONSE_HEADER {
    'content-type'?:  string
    tr_cd?:  string
    tr_cont?:  CIDBQ01500_RESPONSE_HEADER_TR_CONT
    tr_cont_key?:  string
}

export type CIDBQ01800_RESPONSE_HEADER_TR_CONT = 'Y' | 'N';
export interface CIDBQ01800_RESPONSE_HEADER {
    'content-type'?:  string
    tr_cd?:  string
    tr_cont?:  CIDBQ01800_RESPONSE_HEADER_TR_CONT
    tr_cont_key?:  string
}

export type CIDBQ02400_RESPONSE_HEADER_TR_CONT = 'Y' | 'N';
export interface CIDBQ02400_RESPONSE_HEADER {
    'content-type'?:  string
    tr_cd?:  string
    tr_cont?:  CIDBQ02400_RESPONSE_HEADER_TR_CONT
    tr_cont_key?:  string
}

export type CIDBQ03000_RESPONSE_HEADER_TR_CONT = 'Y' | 'N';
export interface CIDBQ03000_RESPONSE_HEADER {
    'content-type'?:  string
    tr_cd?:  string
    tr_cont?:  CIDBQ03000_RESPONSE_HEADER_TR_CONT
    tr_cont_key?:  string
}

export type CIDBQ05300_RESPONSE_HEADER_TR_CONT = 'Y' | 'N';
export interface CIDBQ05300_RESPONSE_HEADER {
    'content-type'?:  string
    tr_cd?:  string
    tr_cont?:  CIDBQ05300_RESPONSE_HEADER_TR_CONT
    tr_cont_key?:  string
}

export type CIDEQ00800_RESPONSE_HEADER_TR_CONT = 'Y' | 'N';
export interface CIDEQ00800_RESPONSE_HEADER {
    'content-type'?:  string
    tr_cd?:  string
    tr_cont?:  CIDEQ00800_RESPONSE_HEADER_TR_CONT
    tr_cont_key?:  string
}

export type CIDBT00100_RESPONSE_HEADER_TR_CONT = 'Y' | 'N';
export interface CIDBT00100_RESPONSE_HEADER {
    'content-type'?:  string
    tr_cd?:  string
    tr_cont?:  CIDBT00100_RESPONSE_HEADER_TR_CONT
    tr_cont_key?:  string
}

export type CIDBT00900_RESPONSE_HEADER_TR_CONT = 'Y' | 'N';
export interface CIDBT00900_RESPONSE_HEADER {
    'content-type'?:  string
    tr_cd?:  string
    tr_cont?:  CIDBT00900_RESPONSE_HEADER_TR_CONT
    tr_cont_key?:  string
}

export type CIDBT01000_RESPONSE_HEADER_TR_CONT = 'Y' | 'N';
export interface CIDBT01000_RESPONSE_HEADER {
    'content-type'?:  string
    tr_cd?:  string
    tr_cont?:  CIDBT01000_RESPONSE_HEADER_TR_CONT
    tr_cont_key?:  string
}

export type O3103_RESPONSE_HEADER_TR_CONT = 'Y' | 'N';
export interface O3103_RESPONSE_HEADER {
    'content-type'?:  string
    tr_cd?:  string
    tr_cont?:  O3103_RESPONSE_HEADER_TR_CONT
    tr_cont_key?:  string
}

export type O3108_RESPONSE_HEADER_TR_CONT = 'Y' | 'N';
export interface O3108_RESPONSE_HEADER {
    'content-type'?:  string
    tr_cd?:  string
    tr_cont?:  O3108_RESPONSE_HEADER_TR_CONT
    tr_cont_key?:  string
}

export type O3117_RESPONSE_HEADER_TR_CONT = 'Y' | 'N';
export interface O3117_RESPONSE_HEADER {
    'content-type'?:  string
    tr_cd?:  string
    tr_cont?:  O3117_RESPONSE_HEADER_TR_CONT
    tr_cont_key?:  string
}

export type O3139_RESPONSE_HEADER_TR_CONT = 'Y' | 'N';
export interface O3139_RESPONSE_HEADER {
    'content-type'?:  string
    tr_cd?:  string
    tr_cont?:  O3139_RESPONSE_HEADER_TR_CONT
    tr_cont_key?:  string
}

export type T0167_RESPONSE_HEADER_TR_CONT = 'Y' | 'N';
export interface T0167_RESPONSE_HEADER {
    'content-type'?:  string
    tr_cd?:  string
    tr_cont?:  T0167_RESPONSE_HEADER_TR_CONT
    tr_cont_key?:  string
}



export interface TOKEN_RESPONSE_BODY {
    access_token?:  string
    expire_in?:  number
    scope?:  string
    token_type?:  string
}


export interface REVOKE_RESPONSE_BODY {
    code?:  string
    message?:  string
}


export interface T1514_RESPONSE_BODY_T1514OUTBLOCK {
    cts_date?:  string
}



export interface T1514_RESPONSE_BODY_T1514OUTBLOCK1 {
    date?:  string
    jisu?:  number
    sign?:  string
    change?:  number
    diff?:  number
    volume?:  number
    diff_vol?:  number
    value1?:  number
    high?:  number
    unchg?:  number
    low?:  number
    uprate?:  number
    frgsvolume?:  number
    openjisu?:  number
    highjisu?:  number
    lowjisu?:  number
    value2?:  number
    up?:  number
    down?:  number
    totjo?:  number
    orgsvolume?:  number
    upcode?:  string
    rate?:  number
    divrate?:  number
}


export interface T1514_RESPONSE_BODY {
    t1514OutBlock?:  T1514_RESPONSE_BODY_T1514OUTBLOCK
    t1514OutBlock1?:  Array<T1514_RESPONSE_BODY_T1514OUTBLOCK1>
}


export interface T8424_RESPONSE_BODY_T8424OUTBLOCK {
    hname?:  string
    upcode?:  string
}


export interface T8424_RESPONSE_BODY {
    t8424OutBlock?:  Array<T8424_RESPONSE_BODY_T8424OUTBLOCK>
}


export interface T1485_RESPONSE_BODY_T1485OUTBLOCK {
    pricejisu?:  number
    sign?:  string
    change?:  number
    volume?:  number
    yhighjo?:  number
    yupjo?:  number
    yunchgjo?:  number
    ylowjo?:  number
    ydownjo?:  number
    ytrajo?:  number
}



export interface T1485_RESPONSE_BODY_T1485OUTBLOCK1 {
    chetime?:  string
    jisu?:  number
    sign?:  string
    change?:  number
    volume?:  number
    volcha?:  number
    diff?:  number
}


export interface T1485_RESPONSE_BODY {
    t1485OutBlock?:  T1485_RESPONSE_BODY_T1485OUTBLOCK
    t1485OutBlock1?:  Array<T1485_RESPONSE_BODY_T1485OUTBLOCK1>
}


export interface T1511_RESPONSE_BODY_T1511OUTBLOCK {
    gubun?:  string
    hname?:  string
    pricejisu?:  number
    jniljisu?:  number
    sign?:  string
    change?:  number
    diffjisu?:  number
    jnilvolume?:  number
    volume?:  number
    volumechange?:  number
    volumerate?:  number
    jnilvalue?:  number
    value?:  number
    valuechange?:  number
    valuerate?:  number
    openjisu?:  number
    opendiff?:  number
    opentime?:  string
    highjisu?:  number
    highdiff?:  number
    hightime?:  string
    lowjisu?:  number
    lowdiff?:  number
    lowtime?:  string
    whjisu?:  number
    whchange?:  number
    whjday?:  string
    wljisu?:  number
    wlchange?:  number
    wljday?:  string
    yhjisu?:  number
    yhchange?:  number
    yhjday?:  string
    yljisu?:  number
    ylchange?:  number
    yljday?:  string
    firstjcode?:  string
    firstjname?:  string
    firstjisu?:  number
    firsign?:  string
    firchange?:  number
    firdiff?:  number
    secondjcode?:  string
    secondjname?:  string
    secondjisu?:  number
    secsign?:  string
    secchange?:  number
    secdiff?:  number
    thirdjcode?:  string
    thirdjname?:  string
    thirdjisu?:  number
    thrsign?:  string
    thrchange?:  number
    thrdiff?:  number
    fourthjcode?:  string
    fourthjname?:  string
    fourthjisu?:  number
    forsign?:  string
    forchange?:  number
    fordiff?:  number
    highjo?:  number
    upjo?:  number
    unchgjo?:  number
    lowjo?:  number
    downjo?:  number
}


export interface T1511_RESPONSE_BODY {
    t1511OutBlock?:  T1511_RESPONSE_BODY_T1511OUTBLOCK
}


export interface T1516_RESPONSE_BODY_T1516OUTBLOCK {
    shcode?:  string
    pricejisu?:  number
    sign?:  string
    change?:  number
    jdiff?:  number
}



export interface T1516_RESPONSE_BODY_T1516OUTBLOCK1 {
    hname?:  string
    price?:  number
    sign?:  string
    change?:  number
    diff?:  number
    volume?:  number
    open?:  number
    high?:  number
    low?:  number
    sojinrate?:  number
    beta?:  number
    perx?:  number
    frgsvolume?:  number
    orgsvolume?:  number
    diff_vol?:  number
    shcode?:  string
    total?:  number
    value?:  number
}


export interface T1516_RESPONSE_BODY {
    t1516OutBlock?:  T1516_RESPONSE_BODY_T1516OUTBLOCK
    t1516OutBlock1?:  Array<T1516_RESPONSE_BODY_T1516OUTBLOCK1>
}


export interface T4203_RESPONSE_BODY_T4203OUTBLOCK {
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
    disvalue?:  number
    cts_date?:  string
    cts_time?:  string
    cts_daygb?:  string
}



export interface T4203_RESPONSE_BODY_T4203OUTBLOCK1 {
    date?:  string
    time?:  string
    open?:  number
    high?:  number
    low?:  number
    close?:  number
    jdiff_vol?:  number
    value?:  number
}


export interface T4203_RESPONSE_BODY {
    t4203OutBlock?:  T4203_RESPONSE_BODY_T4203OUTBLOCK
    t4203OutBlock1?:  Array<T4203_RESPONSE_BODY_T4203OUTBLOCK1>
}


export interface T8417_RESPONSE_BODY_T8417OUTBLOCK {
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
    cts_date?:  string
    cts_time?:  string
    s_time?:  string
    e_time?:  string
    dshmin?:  string
    rec_count?:  number
}



export interface T8417_RESPONSE_BODY_T8417OUTBLOCK1 {
    date?:  string
    time?:  string
    open?:  number
    high?:  number
    low?:  number
    close?:  number
    jdiff_vol?:  number
}


export interface T8417_RESPONSE_BODY {
    t8417OutBlock?:  T8417_RESPONSE_BODY_T8417OUTBLOCK
    t8417OutBlock1?:  Array<T8417_RESPONSE_BODY_T8417OUTBLOCK1>
}


export interface T8418_RESPONSE_BODY_T8418OUTBLOCK {
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
    disvalue?:  number
    cts_date?:  string
    cts_time?:  string
    s_time?:  string
    e_time?:  string
    dshmin?:  string
    rec_count?:  number
}



export interface T8418_RESPONSE_BODY_T8418OUTBLOCK1 {
    date?:  string
    time?:  string
    open?:  number
    high?:  number
    low?:  number
    close?:  number
    jdiff_vol?:  number
    value?:  number
}


export interface T8418_RESPONSE_BODY {
    t8418OutBlock?:  T8418_RESPONSE_BODY_T8418OUTBLOCK
    t8418OutBlock1?:  Array<T8418_RESPONSE_BODY_T8418OUTBLOCK1>
}


export interface T8419_RESPONSE_BODY_T8419OUTBLOCK {
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
    disvalue?:  number
    cts_date?:  string
    s_time?:  string
    e_time?:  string
    dshmin?:  string
    rec_count?:  number
}



export interface T8419_RESPONSE_BODY_T8419OUTBLOCK1 {
    date?:  string
    open?:  number
    high?:  number
    low?:  number
    close?:  number
    jdiff_vol?:  number
    value?:  number
}


export interface T8419_RESPONSE_BODY {
    t8419OutBlock?:  T8419_RESPONSE_BODY_T8419OUTBLOCK
    t8419OutBlock1?:  Array<T8419_RESPONSE_BODY_T8419OUTBLOCK1>
}


export interface T1101_RESPONSE_BODY_T1101OUTBLOCK {
    hname?:  string
    price?:  number
    sign?:  string
    change?:  number
    diff?:  number
    volume?:  number
    jnilclose?:  number
    offerho1?:  number
    bidho1?:  number
    offerrem1?:  number
    bidrem1?:  number
    preoffercha1?:  number
    prebidcha1?:  number
    offerho2?:  number
    bidho2?:  number
    offerrem2?:  number
    bidrem2?:  number
    preoffercha2?:  number
    prebidcha2?:  number
    offerho3?:  number
    bidho3?:  number
    offerrem3?:  number
    bidrem3?:  number
    preoffercha3?:  number
    prebidcha3?:  number
    offerho4?:  number
    bidho4?:  number
    offerrem4?:  number
    bidrem4?:  number
    preoffercha4?:  number
    prebidcha4?:  number
    offerho5?:  number
    bidho5?:  number
    offerrem5?:  number
    bidrem5?:  number
    preoffercha5?:  number
    prebidcha5?:  number
    offerho6?:  number
    bidho6?:  number
    offerrem6?:  number
    bidrem6?:  number
    preoffercha6?:  number
    prebidcha6?:  number
    offerho7?:  number
    bidho7?:  number
    offerrem7?:  number
    bidrem7?:  number
    preoffercha7?:  number
    prebidcha7?:  number
    offerho8?:  number
    bidho8?:  number
    offerrem8?:  number
    bidrem8?:  number
    preoffercha8?:  number
    prebidcha8?:  number
    offerho9?:  number
    bidho9?:  number
    offerrem9?:  number
    bidrem9?:  number
    preoffercha9?:  number
    prebidcha9?:  number
    offerho10?:  number
    bidho10?:  number
    offerrem10?:  number
    bidrem10?:  number
    preoffercha10?:  number
    prebidcha10?:  number
    offer?:  number
    bid?:  number
    preoffercha?:  number
    prebidcha?:  number
    hotime?:  string
    yeprice?:  number
    yevolume?:  number
    yesign?:  string
    yechange?:  number
    yediff?:  number
    tmoffer?:  number
    tmbid?:  number
    ho_status?:  string
    shcode?:  string
    uplmtprice?:  number
    dnlmtprice?:  number
    open?:  number
    high?:  number
    low?:  number
}


export interface T1101_RESPONSE_BODY {
    t1101OutBlock?:  T1101_RESPONSE_BODY_T1101OUTBLOCK
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


export interface T1104_RESPONSE_BODY_T1104OUTBLOCK {
    nrec?:  string
}



export interface T1104_RESPONSE_BODY_T1104OUTBLOCK1 {
    indx?:  string
    gubn?:  string
    vals?:  string
}


export interface T1104_RESPONSE_BODY {
    t1104OutBlock?:  T1104_RESPONSE_BODY_T1104OUTBLOCK
    t1104OutBlock1?:  Array<T1104_RESPONSE_BODY_T1104OUTBLOCK1>
}


export interface T1105_RESPONSE_BODY_T1105OUTBLOCK {
    shcode?:  string
    pbot?:  number
    offer1?:  number
    supp1?:  number
    offer2?:  number
    supp2?:  number
    stdprc?:  number
    offerd?:  number
    suppd?:  number
}


export interface T1105_RESPONSE_BODY {
    t1105OutBlock?:  T1105_RESPONSE_BODY_T1105OUTBLOCK
}


export interface T1109_RESPONSE_BODY_T1109OUTBLOCK {
    ctsshcode?:  string
    ctschetime?:  string
    idx?:  number
}



export interface T1109_RESPONSE_BODY_T1109OUTBLOCK1 {
    dan_chetime?:  string
    dan_price?:  number
    dan_sign?:  string
    dan_change?:  number
    diff?:  number
    dan_cvolume?:  number
    chdegree?:  number
    dan_volume?:  number
}


export interface T1109_RESPONSE_BODY {
    t1109OutBlock?:  T1109_RESPONSE_BODY_T1109OUTBLOCK
    t1109OutBlock1?:  Array<T1109_RESPONSE_BODY_T1109OUTBLOCK1>
}


export interface T1301_RESPONSE_BODY_T1301OUTBLOCK {
    cts_time?:  string
}



export interface T1301_RESPONSE_BODY_T1301OUTBLOCK1 {
    chetime?:  string
    price?:  number
    sign?:  string
    change?:  number
    diff?:  number
    cvolume?:  number
    chdegree?:  number
    volume?:  number
    mdvolume?:  number
    mdchecnt?:  number
    msvolume?:  number
    mschecnt?:  number
    revolume?:  number
    rechecnt?:  number
}


export interface T1301_RESPONSE_BODY {
    t1301OutBlock?:  T1301_RESPONSE_BODY_T1301OUTBLOCK
    t1301OutBlock1?:  Array<T1301_RESPONSE_BODY_T1301OUTBLOCK1>
}


export interface T1302_RESPONSE_BODY_T1302OUTBLOCK {
    cts_time?:  string
}



export interface T1302_RESPONSE_BODY_T1302OUTBLOCK1 {
    chetime?:  string
    close?:  number
    sign?:  string
    change?:  number
    diff?:  number
    chdegree?:  number
    mdvolume?:  number
    msvolume?:  number
    revolume?:  number
    mdchecnt?:  number
    mschecnt?:  number
    rechecnt?:  number
    volume?:  number
    open?:  number
    high?:  number
    low?:  number
    cvolume?:  number
    mdchecnttm?:  number
    mschecnttm?:  number
    totofferrem?:  number
    totbidrem?:  number
    mdvolumetm?:  number
    msvolumetm?:  number
}


export interface T1302_RESPONSE_BODY {
    t1302OutBlock?:  T1302_RESPONSE_BODY_T1302OUTBLOCK
    t1302OutBlock1?:  Array<T1302_RESPONSE_BODY_T1302OUTBLOCK1>
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


export interface T1308_RESPONSE_BODY_T1308OUTBLOCK1 {
    chetime?:  string
    price?:  number
    sign?:  string
    change?:  number
    diff?:  number
    cvolume?:  number
    chdegvol?:  number
    chdegcnt?:  number
    volume?:  number
    mdvolume?:  number
    mdchecnt?:  number
    msvolume?:  number
    mschecnt?:  number
    open?:  number
    high?:  number
    low?:  number
}


export interface T1308_RESPONSE_BODY {
    t1308OutBlock1?:  Array<T1308_RESPONSE_BODY_T1308OUTBLOCK1>
}


export interface T1310_RESPONSE_BODY_T1310OUTBLOCK {
    cts_time?:  string
}



export interface T1310_RESPONSE_BODY_T1310OUTBLOCK1 {
    chetime?:  string
    price?:  number
    sign?:  string
    change?:  number
    diff?:  number
    cvolume?:  number
    chdegree?:  number
    volume?:  number
    mdvolume?:  number
    mdchecnt?:  number
    msvolume?:  number
    mschecnt?:  number
    revolume?:  number
    rechecnt?:  number
}


export interface T1310_RESPONSE_BODY {
    t1310OutBlock?:  T1310_RESPONSE_BODY_T1310OUTBLOCK
    t1310OutBlock1?:  Array<T1310_RESPONSE_BODY_T1310OUTBLOCK1>
}


export interface T1404_RESPONSE_BODY_T1404OUTBLOCK {
    cts_shcode?:  string
}



export interface T1404_RESPONSE_BODY_T1404OUTBLOCK1 {
    hname?:  string
    price?:  number
    sign?:  string
    change?:  number
    diff?:  number
    volume?:  number
    date?:  string
    tprice?:  number
    tchange?:  number
    tdiff?:  number
    reason?:  string
    shcode?:  string
    edate?:  string
}


export interface T1404_RESPONSE_BODY {
    t1404OutBlock?:  T1404_RESPONSE_BODY_T1404OUTBLOCK
    t1404OutBlock1?:  Array<T1404_RESPONSE_BODY_T1404OUTBLOCK1>
}


export interface T1405_RESPONSE_BODY_T1405OUTBLOCK {
    cts_shcode?:  string
}



export interface T1405_RESPONSE_BODY_T1405OUTBLOCK1 {
    hname?:  string
    price?:  number
    sign?:  string
    change?:  number
    diff?:  number
    volume?:  number
    date?:  string
    edate?:  string
    shcode?:  string
}


export interface T1405_RESPONSE_BODY {
    t1405OutBlock?:  T1405_RESPONSE_BODY_T1405OUTBLOCK
    t1405OutBlock1?:  Array<T1405_RESPONSE_BODY_T1405OUTBLOCK1>
}


export interface T1410_RESPONSE_BODY_T1410OUTBLOCK {
    cts_shcode?:  string
}



export interface T1410_RESPONSE_BODY_T1410OUTBLOCK1 {
    hname?:  string
    price?:  number
    sign?:  string
    change?:  number
    diff?:  number
    volume?:  number
    shcode?:  string
}


export interface T1410_RESPONSE_BODY {
    t1410OutBlock?:  T1410_RESPONSE_BODY_T1410OUTBLOCK
    t1410OutBlock1?:  Array<T1410_RESPONSE_BODY_T1410OUTBLOCK1>
}


export interface T1422_RESPONSE_BODY_T1422OUTBLOCK {
    cnt?:  number
    idx?:  number
}



export interface T1422_RESPONSE_BODY_T1422OUTBLOCK1 {
    hname?:  string
    price?:  number
    sign?:  string
    change?:  number
    diff?:  number
    volume?:  number
    diff_vol?:  number
    offerrem1?:  number
    bidrem1?:  number
    last?:  string
    lmtdaycnt?:  number
    jnilvolume?:  number
    shcode?:  string
}


export interface T1422_RESPONSE_BODY {
    t1422OutBlock?:  T1422_RESPONSE_BODY_T1422OUTBLOCK
    t1422OutBlock1?:  Array<T1422_RESPONSE_BODY_T1422OUTBLOCK1>
}


export interface T1427_RESPONSE_BODY_T1427OUTBLOCK {
    cnt?:  number
    idx?:  number
}



export interface T1427_RESPONSE_BODY_T1427OUTBLOCK1 {
    hname?:  string
    price?:  number
    sign?:  string
    change?:  number
    diff?:  number
    volume?:  number
    diff_vol?:  number
    lmtprice?:  number
    rate?:  number
    shcode?:  string
    jnilvolume?:  number
    open?:  number
    high?:  number
    low?:  number
    lmtdaycnt?:  number
    value?:  number
    total?:  number
}


export interface T1427_RESPONSE_BODY {
    t1427OutBlock?:  T1427_RESPONSE_BODY_T1427OUTBLOCK
    t1427OutBlock1?:  Array<T1427_RESPONSE_BODY_T1427OUTBLOCK1>
}


export interface T1442_RESPONSE_BODY_T1442OUTBLOCK {
    idx?:  number
}



export interface T1442_RESPONSE_BODY_T1442OUTBLOCK1 {
    shcode?:  string
    hname?:  string
    price?:  number
    sign?:  string
    change?:  number
    diff?:  number
    volume?:  number
    pastprice?:  number
    pastsign?:  string
    pastchange?:  number
    pastdiff?:  number
}


export interface T1442_RESPONSE_BODY {
    t1442OutBlock?:  T1442_RESPONSE_BODY_T1442OUTBLOCK
    t1442OutBlock1?:  Array<T1442_RESPONSE_BODY_T1442OUTBLOCK1>
}


export interface T1449_RESPONSE_BODY_T1449OUTBLOCK {
    price?:  number
    sign?:  string
    change?:  number
    diff?:  number
    volume?:  number
    msvolume?:  number
    mdvolume?:  number
}



export interface T1449_RESPONSE_BODY_T1449OUTBLOCK1 {
    price?:  number
    sign?:  string
    change?:  number
    tickdiff?:  number
    cvolume?:  number
    diff?:  number
    mdvolume?:  number
    msvolume?:  number
    msdiff?:  number
}


export interface T1449_RESPONSE_BODY {
    t1449OutBlock?:  T1449_RESPONSE_BODY_T1449OUTBLOCK
    t1449OutBlock1?:  Array<T1449_RESPONSE_BODY_T1449OUTBLOCK1>
}


export interface T1471_RESPONSE_BODY_T1471OUTBLOCK {
    time?:  string
    price?:  number
    sign?:  string
    change?:  number
    diff?:  number
    volume?:  number
}



export interface T1471_RESPONSE_BODY_T1471OUTBLOCK1 {
    time?:  string
    preoffercha1?:  number
    offerrem1?:  number
    offerho1?:  number
    bidho1?:  number
    bidrem1?:  number
    prebidcha1?:  number
    totofferrem?:  number
    totbidrem?:  number
    totsun?:  number
    msrate?:  number
    close?:  number
}


export interface T1471_RESPONSE_BODY {
    t1471OutBlock?:  T1471_RESPONSE_BODY_T1471OUTBLOCK
    t1471OutBlock1?:  Array<T1471_RESPONSE_BODY_T1471OUTBLOCK1>
}


export interface T1475_RESPONSE_BODY_T1475OUTBLOCK {
    date?:  number
    time?:  number
    rankcnt?:  number
}



export interface T1475_RESPONSE_BODY_T1475OUTBLOCK1 {
    datetime?:  string
    price?:  number
    sign?:  string
    change?:  number
    diff?:  number
    volume?:  number
    todayvp?:  number
    ma5vp?:  number
    ma20vp?:  number
    ma60vp?:  number
}


export interface T1475_RESPONSE_BODY {
    t1475OutBlock?:  T1475_RESPONSE_BODY_T1475OUTBLOCK
    t1475OutBlock1?:  Array<T1475_RESPONSE_BODY_T1475OUTBLOCK1>
}


export interface T1486_RESPONSE_BODY_T1486OUTBLOCK {
    cts_time?:  string
}



export interface T1486_RESPONSE_BODY_T1486OUTBLOCK1 {
    chetime?:  string
    price?:  number
    sign?:  string
    change?:  number
    diff?:  number
    cvolume?:  number
    offerho1?:  number
    bidho1?:  number
    offerrem1?:  number
    bidrem1?:  number
}


export interface T1486_RESPONSE_BODY {
    t1486OutBlock?:  T1486_RESPONSE_BODY_T1486OUTBLOCK
    t1486OutBlock1?:  Array<T1486_RESPONSE_BODY_T1486OUTBLOCK1>
}


export interface T1488_RESPONSE_BODY_T1488OUTBLOCK {
    idx?:  number
}



export interface T1488_RESPONSE_BODY_T1488OUTBLOCK1 {
    hname?:  string
    price?:  number
    sign?:  string
    change?:  number
    diff?:  number
    volume?:  number
    offerrem?:  number
    offerho?:  number
    bidho?:  number
    bidrem?:  number
    cnt?:  number
    shcode?:  string
    jkrate?:  string
    jnilvolume?:  number
}


export interface T1488_RESPONSE_BODY {
    t1488OutBlock?:  T1488_RESPONSE_BODY_T1488OUTBLOCK
    t1488OutBlock1?:  Array<T1488_RESPONSE_BODY_T1488OUTBLOCK1>
}


export interface T8407_RESPONSE_BODY_T8407OUTBLOCK1 {
    shcode?:  string
    hname?:  string
    price?:  number
    sign?:  string
    change?:  number
    diff?:  number
    volume?:  number
    offerho?:  number
    bidho?:  number
    cvolume?:  number
    chdegree?:  number
    open?:  number
    high?:  number
    low?:  number
    value?:  number
    offerrem?:  number
    bidrem?:  number
    totofferrem?:  number
    totbidrem?:  number
    jnilclose?:  number
    uplmtprice?:  number
    dnlmtprice?:  number
}


export interface T8407_RESPONSE_BODY {
    t8407OutBlock1?:  Array<T8407_RESPONSE_BODY_T8407OUTBLOCK1>
}


export interface T9945_RESPONSE_BODY_T9945OUTBLOCK {
    hname?:  string
    shcode?:  string
    expcode?:  string
    etfchk?:  string
    filler?:  string
}


export interface T9945_RESPONSE_BODY {
    t9945OutBlock?:  Array<T9945_RESPONSE_BODY_T9945OUTBLOCK>
}


export interface T1752_RESPONSE_BODY_T1752OUTBLOCK {
    fwdvl?:  number
    fwsvl?:  number
    cts_idx?:  number
}



export interface T1752_RESPONSE_BODY_T1752OUTBLOCK1 {
    tradname?:  string
    tradmdvol?:  number
    tradmsvol?:  number
    tradmssvol?:  number
    wintrd?:  number
    winrat?:  number
    tradno?:  string
    wgubun?:  string
    swinrat?:  number
}


export interface T1752_RESPONSE_BODY {
    t1752OutBlock?:  T1752_RESPONSE_BODY_T1752OUTBLOCK
    t1752OutBlock1?:  Array<T1752_RESPONSE_BODY_T1752OUTBLOCK1>
}


export interface T1764_RESPONSE_BODY_T1764OUTBLOCK {
    rank?:  number
    tradno?:  string
    tradname?:  string
}


export interface T1764_RESPONSE_BODY {
    t1764OutBlock?:  Array<T1764_RESPONSE_BODY_T1764OUTBLOCK>
}


export interface T1771_RESPONSE_BODY_T1771OUTBLOCK {
    cts_idx?:  number
}



export interface T1771_RESPONSE_BODY_T1771OUTBLOCK2 {
    traddate?:  string
    tradtime?:  string
    price?:  number
    sign?:  string
    change?:  number
    diff?:  number
    volume?:  number
    tradmdcha?:  number
    tradmscha?:  number
    tradmdval?:  number
    tradmsval?:  number
    tradmsscha?:  number
    tradmttvolume?:  number
    tradavg?:  number
    tradmttavg?:  number
}


export interface T1771_RESPONSE_BODY {
    t1771OutBlock?:  T1771_RESPONSE_BODY_T1771OUTBLOCK
    t1771OutBlock2?:  Array<T1771_RESPONSE_BODY_T1771OUTBLOCK2>
}


export interface T3102_RESPONSE_BODY_T3102OUTBLOCK {
    sJongcode?:  string
}



export interface T3102_RESPONSE_BODY_T3102OUTBLOCK1 {
    sBody?:  string
}



export interface T3102_RESPONSE_BODY_T3102OUTBLOCK2 {
    sTitle?:  string
}


export interface T3102_RESPONSE_BODY {
    t3102OutBlock?:  Array<T3102_RESPONSE_BODY_T3102OUTBLOCK>
    t3102OutBlock1?:  Array<T3102_RESPONSE_BODY_T3102OUTBLOCK1>
    t3102OutBlock2?:  T3102_RESPONSE_BODY_T3102OUTBLOCK2
}

export type T3202_RESPONSE_BODY_T3202OUTBLOCK_UPGU = '01' | '02' | '03' | '04' | '05' | '06' | '07' | '08' | '09' | '10' | '11' | '12' | '13' | '14';
export interface T3202_RESPONSE_BODY_T3202OUTBLOCK {
    recdt?:  string
    tableid?:  string
    upgu?:  T3202_RESPONSE_BODY_T3202OUTBLOCK_UPGU
    custno?:  string
    custnm?:  string
    shcode?:  string
    upunm?:  string
}


export interface T3202_RESPONSE_BODY {
    t3202OutBlock?:  Array<T3202_RESPONSE_BODY_T3202OUTBLOCK>
}


export interface T3320_RESPONSE_BODY_T3320OUTBLOCK {
    upgubunnm?:  string
    sijangcd?:  string
    marketnm?:  string
    company?:  string
    baddress?:  string
    btelno?:  string
    gsyyyy?:  string
    gsmm?:  string
    gsym?:  string
    lstprice?:  number
    gstock?:  number
    homeurl?:  string
    grdnm?:  string
    foreignratio?:  number
    irtel?:  string
    capital?:  number
    sigavalue?:  number
    cashsis?:  number
    cashrate?:  number
    price?:  number
    jnilclose?:  number
    notice1?:  string
    notice2?:  string
    notice3?:  string
}



export interface T3320_RESPONSE_BODY_T3320OUTBLOCK1 {
    gicode?:  string
    gsym?:  string
    gsgb?:  string
    per?:  number
    eps?:  number
    pbr?:  number
    roa?:  number
    roe?:  number
    ebitda?:  number
    evebitda?:  number
    par?:  number
    sps?:  number
    cps?:  number
    bps?:  number
    t_per?:  number
    t_eps?:  number
    peg?:  number
    t_peg?:  number
    t_gsym?:  string
}


export interface T3320_RESPONSE_BODY {
    t3320OutBlock?:  T3320_RESPONSE_BODY_T3320OUTBLOCK
    t3320OutBlock1?:  T3320_RESPONSE_BODY_T3320OUTBLOCK1
}


export interface T3341_RESPONSE_BODY_T3341OUTBLOCK {
    cnt?:  number
    idx?:  number
}



export interface T3341_RESPONSE_BODY_T3341OUTBLOCK1 {
    rank?:  number
    hname?:  string
    salesgrowth?:  number
    operatingincomegrowt?:  number
    ordinaryincomegrowth?:  number
    liabilitytoequity?:  number
    enterpriseratio?:  number
    eps?:  number
    bps?:  number
    roe?:  number
    shcode?:  string
    per?:  number
    pbr?:  number
    peg?:  number
}


export interface T3341_RESPONSE_BODY {
    t3341OutBlock?:  T3341_RESPONSE_BODY_T3341OUTBLOCK
    t3341OutBlock1?:  Array<T3341_RESPONSE_BODY_T3341OUTBLOCK1>
}


export interface T3401_RESPONSE_BODY_T3401OUTBLOCK {
    cts_date?:  string
    price?:  number
    sign?:  string
    change?:  number
    diff?:  number
    volume?:  number
    value?:  number
}



export interface T3401_RESPONSE_BODY_T3401OUTBLOCK1 {
    shcode?:  string
    tradno?:  string
    date?:  string
    tradname?:  string
    bopn?:  string
    nopn?:  string
    boga?:  number
    noga?:  number
    close?:  number
}


export interface T3401_RESPONSE_BODY {
    t3401OutBlock?:  T3401_RESPONSE_BODY_T3401OUTBLOCK
    t3401OutBlock1?:  Array<T3401_RESPONSE_BODY_T3401OUTBLOCK1>
}


export interface T3518_RESPONSE_BODY_T3518OUTBLOCK {
    cts_date?:  string
    cts_time?:  string
}


export type T3518_RESPONSE_BODY_T3518OUTBLOCK1_OPEN = '- F(해외선물)' | '- R(환율/금리)';
export type T3518_RESPONSE_BODY_T3518OUTBLOCK1_HIGH = '- F(해외선물)' | '- R(환율/금리)';
export type T3518_RESPONSE_BODY_T3518OUTBLOCK1_LOW = '- F(해외선물)' | '- R(환율/금리)';
export interface T3518_RESPONSE_BODY_T3518OUTBLOCK1 {
    date?:  string
    time?:  string
    open?:  T3518_RESPONSE_BODY_T3518OUTBLOCK1_OPEN
    high?:  T3518_RESPONSE_BODY_T3518OUTBLOCK1_HIGH
    low?:  T3518_RESPONSE_BODY_T3518OUTBLOCK1_LOW
    price?:  number
    sign?:  string
    change?:  number
    uprate?:  number
    volume?:  number
    bidho?:  number
    offerho?:  number
    bidrem?:  number
    offerrem?:  number
    kind?:  string
    symbol?:  string
    exid?:  string
    kodate?:  string
    kotime?:  string
}


export interface T3518_RESPONSE_BODY {
    t3518OutBlock?:  T3518_RESPONSE_BODY_T3518OUTBLOCK
    t3518OutBlock1?:  Array<T3518_RESPONSE_BODY_T3518OUTBLOCK1>
}


export interface T3521_RESPONSE_BODY {
}


export interface T8428_RESPONSE_BODY_T8428OUTBLOCK {
    date?:  string
    idx?:  number
}



export interface T8428_RESPONSE_BODY_T8428OUTBLOCK1 {
    date?:  string
    jisu?:  number
    sign?:  string
    change?:  number
    diff?:  number
    volume?:  number
    custmoney?:  number
    yecha?:  number
    vol?:  number
    outmoney?:  number
    trjango?:  number
    futymoney?:  number
    stkmoney?:  number
    mstkmoney?:  number
    mbndmoney?:  number
    bndmoney?:  number
    bndsmoney?:  number
    mmfmoney?:  number
}


export interface T8428_RESPONSE_BODY {
    t8428OutBlock?:  T8428_RESPONSE_BODY_T8428OUTBLOCK
    t8428OutBlock1?:  Array<T8428_RESPONSE_BODY_T8428OUTBLOCK1>
}


export interface T1631_RESPONSE_BODY_T1631OUTBLOCK {
    cdhrem?:  number
    bdhrem?:  number
    tcdrem?:  number
    tbdrem?:  number
    cshrem?:  number
    bshrem?:  number
    tcsrem?:  number
    tbsrem?:  number
}



export interface T1631_RESPONSE_BODY_T1631OUTBLOCK1 {
    offervolume?:  number
    offervalue?:  number
    bidvolume?:  number
    bidvalue?:  number
    volume?:  number
    value?:  number
}


export interface T1631_RESPONSE_BODY {
    t1631OutBlock?:  T1631_RESPONSE_BODY_T1631OUTBLOCK
    t1631OutBlock1?:  Array<T1631_RESPONSE_BODY_T1631OUTBLOCK1>
}


export interface T1632_RESPONSE_BODY_T1632OUTBLOCK {
    date?:  string
    time?:  string
    idx?:  number
}



export interface T1632_RESPONSE_BODY_T1632OUTBLOCK1 {
    time?:  string
    k200jisu?:  number
    sign?:  string
    change?:  number
    k200basis?:  number
    tot3?:  number
    tot1?:  number
    tot2?:  number
    cha3?:  number
    cha1?:  number
    cha2?:  number
    bcha3?:  number
    bcha1?:  number
    bcha2?:  number
}


export interface T1632_RESPONSE_BODY {
    t1632OutBlock?:  T1632_RESPONSE_BODY_T1632OUTBLOCK
    t1632OutBlock1?:  Array<T1632_RESPONSE_BODY_T1632OUTBLOCK1>
}


export interface T1633_RESPONSE_BODY_T1633OUTBLOCK {
    date?:  string
    idx?:  number
}



export interface T1633_RESPONSE_BODY_T1633OUTBLOCK1 {
    date?:  string
    jisu?:  number
    sign?:  string
    change?:  number
    tot3?:  number
    tot1?:  number
    tot2?:  number
    cha3?:  number
    cha1?:  number
    cha2?:  number
    bcha3?:  number
    bcha1?:  number
    bcha2?:  number
    volume?:  number
}


export interface T1633_RESPONSE_BODY {
    t1633OutBlock?:  T1633_RESPONSE_BODY_T1633OUTBLOCK
    t1633OutBlock1?:  Array<T1633_RESPONSE_BODY_T1633OUTBLOCK1>
}


export interface T1636_RESPONSE_BODY_T1636OUTBLOCK {
    cts_idx?:  number
}



export interface T1636_RESPONSE_BODY_T1636OUTBLOCK1 {
    rank?:  number
    hname?:  string
    price?:  number
    sign?:  string
    change?:  number
    diff?:  number
    volume?:  number
    svalue?:  number
    offervalue?:  number
    stksvalue?:  number
    svolume?:  number
    offervolume?:  number
    stksvolume?:  number
    sgta?:  number
    rate?:  number
    shcode?:  string
}


export interface T1636_RESPONSE_BODY {
    t1636OutBlock?:  T1636_RESPONSE_BODY_T1636OUTBLOCK
    t1636OutBlock1?:  Array<T1636_RESPONSE_BODY_T1636OUTBLOCK1>
}


export interface T1637_RESPONSE_BODY_T1637OUTBLOCK {
    cts_idx?:  number
}



export interface T1637_RESPONSE_BODY_T1637OUTBLOCK1 {
    date?:  string
    time?:  string
    price?:  number
    sign?:  string
    change?:  number
    diff?:  number
    volume?:  number
    svalue?:  number
    offervalue?:  number
    stksvalue?:  number
    svolume?:  number
    offervolume?:  number
    stksvolume?:  number
    shcode?:  string
}


export interface T1637_RESPONSE_BODY {
    t1637OutBlock?:  T1637_RESPONSE_BODY_T1637OUTBLOCK
    t1637OutBlock1?:  Array<T1637_RESPONSE_BODY_T1637OUTBLOCK1>
}


export interface T1640_RESPONSE_BODY_T1640OUTBLOCK {
    offervolume?:  number
    bidvolume?:  number
    volume?:  number
    offerdiff?:  number
    biddiff?:  number
    sundiff?:  number
    basis?:  number
    offervalue?:  number
    bidvalue?:  number
    value?:  number
    offervaldiff?:  number
    bidvaldiff?:  number
    sunvaldiff?:  number
}


export interface T1640_RESPONSE_BODY {
    t1640OutBlock?:  T1640_RESPONSE_BODY_T1640OUTBLOCK
}


export interface T1662_RESPONSE_BODY_T1662OUTBLOCK {
    time?:  string
    k200jisu?:  number
    sign?:  string
    change?:  number
    k200basis?:  number
    tot3?:  number
    tot1?:  number
    tot2?:  number
    cha3?:  number
    cha1?:  number
    cha2?:  number
    bcha3?:  number
    bcha1?:  number
    bcha2?:  number
    volume?:  number
}


export interface T1662_RESPONSE_BODY {
    t1662OutBlock?:  Array<T1662_RESPONSE_BODY_T1662OUTBLOCK>
}


export interface T1601_RESPONSE_BODY_T1601OUTBLOCK1 {
    tjjcode_08?:  string
    ms_08?:  number
    md_08?:  number
    rate_08?:  number
    svolume_08?:  number
    jjcode_17?:  string
    ms_17?:  number
    md_17?:  number
    rate_17?:  number
    svolume_17?:  number
    jjcode_18?:  string
    ms_18?:  number
    md_18?:  number
    rate_18?:  number
    svolume_18?:  number
    jjcode_01?:  string
    ms_01?:  number
    md_01?:  number
    rate_01?:  number
    svolume_01?:  number
    jjcode_03?:  string
    ms_03?:  number
    md_03?:  number
    rate_03?:  number
    svolume_03?:  number
    jjcode_04?:  string
    ms_04?:  number
    md_04?:  number
    rate_04?:  number
    svolume_04?:  number
    jjcode_02?:  string
    ms_02?:  number
    md_02?:  number
    rate_02?:  number
    svolume_02?:  number
    jjcode_05?:  string
    ms_05?:  number
    md_05?:  number
    rate_05?:  number
    svolume_05?:  number
    jjcode_06?:  string
    ms_06?:  number
    md_06?:  number
    rate_06?:  number
    svolume_06?:  number
    jjcode_11?:  string
    ms_11?:  number
    md_11?:  number
    rate_11?:  number
    svolume_11?:  number
    jjcode_07?:  string
    ms_07?:  number
    md_07?:  number
    rate_07?:  number
    svolume_07?:  number
    jjcode_00?:  string
    ms_00?:  number
    md_00?:  number
    rate_00?:  number
    svolume_00?:  number
}



export interface T1601_RESPONSE_BODY_T1601OUTBLOCK2 {
    tjjcode_08?:  string
    ms_08?:  number
    md_08?:  number
    rate_08?:  number
    svolume_08?:  number
    jjcode_17?:  string
    ms_17?:  number
    md_17?:  number
    rate_17?:  number
    svolume_17?:  number
    jjcode_18?:  string
    ms_18?:  number
    md_18?:  number
    rate_18?:  number
    svolume_18?:  number
    jjcode_01?:  string
    ms_01?:  number
    md_01?:  number
    rate_01?:  number
    svolume_01?:  number
    jjcode_03?:  string
    ms_03?:  number
    md_03?:  number
    rate_03?:  number
    svolume_03?:  number
    jjcode_04?:  string
    ms_04?:  number
    md_04?:  number
    rate_04?:  number
    svolume_04?:  number
    jjcode_02?:  string
    ms_02?:  number
    md_02?:  number
    rate_02?:  number
    svolume_02?:  number
    jjcode_05?:  string
    ms_05?:  number
    md_05?:  number
    rate_05?:  number
    svolume_05?:  number
    jjcode_06?:  string
    ms_06?:  number
    md_06?:  number
    rate_06?:  number
    svolume_06?:  number
    jjcode_11?:  string
    ms_11?:  number
    md_11?:  number
    rate_11?:  number
    svolume_11?:  number
    jjcode_07?:  string
    ms_07?:  number
    md_07?:  number
    rate_07?:  number
    svolume_07?:  number
    jjcode_00?:  string
    ms_00?:  number
    md_00?:  number
    rate_00?:  number
    svolume_00?:  number
}



export interface T1601_RESPONSE_BODY_T1601OUTBLOCK3 {
    tjjcode_08?:  string
    ms_08?:  number
    md_08?:  number
    rate_08?:  number
    svolume_08?:  number
    jjcode_17?:  string
    ms_17?:  number
    md_17?:  number
    rate_17?:  number
    svolume_17?:  number
    jjcode_18?:  string
    ms_18?:  number
    md_18?:  number
    rate_18?:  number
    svolume_18?:  number
    jjcode_01?:  string
    ms_01?:  number
    md_01?:  number
    rate_01?:  number
    svolume_01?:  number
    jjcode_03?:  string
    ms_03?:  number
    md_03?:  number
    rate_03?:  number
    svolume_03?:  number
    jjcode_04?:  string
    ms_04?:  number
    md_04?:  number
    rate_04?:  number
    svolume_04?:  number
    jjcode_02?:  string
    ms_02?:  number
    md_02?:  number
    rate_02?:  number
    svolume_02?:  number
    jjcode_05?:  string
    ms_05?:  number
    md_05?:  number
    rate_05?:  number
    svolume_05?:  number
    jjcode_06?:  string
    ms_06?:  number
    md_06?:  number
    rate_06?:  number
    svolume_06?:  number
    jjcode_11?:  string
    ms_11?:  number
    md_11?:  number
    rate_11?:  number
    svolume_11?:  number
    jjcode_07?:  string
    ms_07?:  number
    md_07?:  number
    rate_07?:  number
    svolume_07?:  number
    jjcode_00?:  string
    ms_00?:  number
    md_00?:  number
    rate_00?:  number
    svolume_00?:  number
}



export interface T1601_RESPONSE_BODY_T1601OUTBLOCK4 {
    tjjcode_08?:  string
    ms_08?:  number
    md_08?:  number
    rate_08?:  number
    svolume_08?:  number
    jjcode_17?:  string
    ms_17?:  number
    md_17?:  number
    rate_17?:  number
    svolume_17?:  number
    jjcode_18?:  string
    ms_18?:  number
    md_18?:  number
    rate_18?:  number
    svolume_18?:  number
    jjcode_01?:  string
    ms_01?:  number
    md_01?:  number
    rate_01?:  number
    svolume_01?:  number
    jjcode_03?:  string
    ms_03?:  number
    md_03?:  number
    rate_03?:  number
    svolume_03?:  number
    jjcode_04?:  string
    ms_04?:  number
    md_04?:  number
    rate_04?:  number
    svolume_04?:  number
    jjcode_02?:  string
    ms_02?:  number
    md_02?:  number
    rate_02?:  number
    svolume_02?:  number
    jjcode_05?:  string
    ms_05?:  number
    md_05?:  number
    rate_05?:  number
    svolume_05?:  number
    jjcode_06?:  string
    ms_06?:  number
    md_06?:  number
    rate_06?:  number
    svolume_06?:  number
    jjcode_11?:  string
    ms_11?:  number
    md_11?:  number
    rate_11?:  number
    svolume_11?:  number
    jjcode_07?:  string
    ms_07?:  number
    md_07?:  number
    rate_07?:  number
    svolume_07?:  number
    jjcode_00?:  string
    ms_00?:  number
    md_00?:  number
    rate_00?:  number
    svolume_00?:  number
}



export interface T1601_RESPONSE_BODY_T1601OUTBLOCK5 {
    tjjcode_08?:  string
    ms_08?:  number
    md_08?:  number
    rate_08?:  number
    svolume_08?:  number
    jjcode_17?:  string
    ms_17?:  number
    md_17?:  number
    rate_17?:  number
    svolume_17?:  number
    jjcode_18?:  string
    ms_18?:  number
    md_18?:  number
    rate_18?:  number
    svolume_18?:  number
    jjcode_01?:  string
    ms_01?:  number
    md_01?:  number
    rate_01?:  number
    svolume_01?:  number
    jjcode_03?:  string
    ms_03?:  number
    md_03?:  number
    rate_03?:  number
    svolume_03?:  number
    jjcode_04?:  string
    ms_04?:  number
    md_04?:  number
    rate_04?:  number
    svolume_04?:  number
    jjcode_02?:  string
    ms_02?:  number
    md_02?:  number
    rate_02?:  number
    svolume_02?:  number
    jjcode_05?:  string
    ms_05?:  number
    md_05?:  number
    rate_05?:  number
    svolume_05?:  number
    jjcode_06?:  string
    ms_06?:  number
    md_06?:  number
    rate_06?:  number
    svolume_06?:  number
    jjcode_11?:  string
    ms_11?:  number
    md_11?:  number
    rate_11?:  number
    svolume_11?:  number
    jjcode_07?:  string
    ms_07?:  number
    md_07?:  number
    rate_07?:  number
    svolume_07?:  number
    jjcode_00?:  string
    ms_00?:  number
    md_00?:  number
    rate_00?:  number
    svolume_00?:  number
}



export interface T1601_RESPONSE_BODY_T1601OUTBLOCK6 {
    tjjcode_08?:  string
    ms_08?:  number
    md_08?:  number
    rate_08?:  number
    svolume_08?:  number
    jjcode_17?:  string
    ms_17?:  number
    md_17?:  number
    rate_17?:  number
    svolume_17?:  number
    jjcode_18?:  string
    ms_18?:  number
    md_18?:  number
    rate_18?:  number
    svolume_18?:  number
    jjcode_01?:  string
    ms_01?:  number
    md_01?:  number
    rate_01?:  number
    svolume_01?:  number
    jjcode_03?:  string
    ms_03?:  number
    md_03?:  number
    rate_03?:  number
    svolume_03?:  number
    jjcode_04?:  string
    ms_04?:  number
    md_04?:  number
    rate_04?:  number
    svolume_04?:  number
    jjcode_02?:  string
    ms_02?:  number
    md_02?:  number
    rate_02?:  number
    svolume_02?:  number
    jjcode_05?:  string
    ms_05?:  number
    md_05?:  number
    rate_05?:  number
    svolume_05?:  number
    jjcode_06?:  string
    ms_06?:  number
    md_06?:  number
    rate_06?:  number
    svolume_06?:  number
    jjcode_11?:  string
    ms_11?:  number
    md_11?:  number
    rate_11?:  number
    svolume_11?:  number
    jjcode_07?:  string
    ms_07?:  number
    md_07?:  number
    rate_07?:  number
    svolume_07?:  number
    jjcode_00?:  string
    ms_00?:  number
    md_00?:  number
    rate_00?:  number
    svolume_00?:  number
}


export interface T1601_RESPONSE_BODY {
    t1601OutBlock1?:  T1601_RESPONSE_BODY_T1601OUTBLOCK1
    t1601OutBlock2?:  T1601_RESPONSE_BODY_T1601OUTBLOCK2
    t1601OutBlock3?:  T1601_RESPONSE_BODY_T1601OUTBLOCK3
    t1601OutBlock4?:  T1601_RESPONSE_BODY_T1601OUTBLOCK4
    t1601OutBlock5?:  T1601_RESPONSE_BODY_T1601OUTBLOCK5
    t1601OutBlock6?:  T1601_RESPONSE_BODY_T1601OUTBLOCK6
}


export interface T1602_RESPONSE_BODY_T1602OUTBLOCK {
    cts_time?:  string
    tjjcode_08?:  string
    ms_08?:  number
    md_08?:  number
    rate_08?:  number
    svolume_08?:  number
    jjcode_17?:  string
    ms_17?:  number
    md_17?:  number
    rate_17?:  number
    svolume_17?:  number
    jjcode_18?:  string
    ms_18?:  number
    md_18?:  number
    rate_18?:  number
    svolume_18?:  number
    jjcode_01?:  string
    ms_01?:  number
    md_01?:  number
    rate_01?:  number
    svolume_01?:  number
    jjcode_03?:  string
    ms_03?:  number
    md_03?:  number
    rate_03?:  number
    svolume_03?:  number
    jjcode_04?:  string
    ms_04?:  number
    md_04?:  number
    rate_04?:  number
    svolume_04?:  number
    jjcode_02?:  string
    ms_02?:  number
    md_02?:  number
    rate_02?:  number
    svolume_02?:  number
    jjcode_05?:  string
    ms_05?:  number
    md_05?:  number
    rate_05?:  number
    svolume_05?:  number
    jjcode_06?:  string
    ms_06?:  number
    md_06?:  number
    rate_06?:  number
    svolume_06?:  number
    jjcode_07?:  string
    ms_07?:  number
    md_07?:  number
    rate_07?:  number
    svolume_07?:  number
    jjcode_11?:  string
    ms_11?:  number
    md_11?:  number
    rate_11?:  number
    svolume_11?:  number
    jjcode_00?:  string
    ms_00?:  number
    md_00?:  number
    rate_00?:  number
    svolume_00?:  number
}



export interface T1602_RESPONSE_BODY_T1602OUTBLOCK1 {
    time?:  string
    sv_08?:  number
    sv_17?:  number
    sv_18?:  number
    sv_01?:  number
    sv_03?:  number
    sv_04?:  number
    sv_02?:  number
    sv_05?:  number
    sv_06?:  number
    sv_07?:  number
    sv_11?:  number
    sv_00?:  number
}


export interface T1602_RESPONSE_BODY {
    t1602OutBlock?:  T1602_RESPONSE_BODY_T1602OUTBLOCK
    t1602OutBlock1?:  Array<T1602_RESPONSE_BODY_T1602OUTBLOCK1>
}


export interface T1603_RESPONSE_BODY_T1603OUTBLOCK {
    cts_idx?:  number
    cts_time?:  string
}



export interface T1603_RESPONSE_BODY_T1603OUTBLOCK1 {
    time?:  string
    tjjcode?:  string
    msvolume?:  number
    mdvolume?:  number
    msvalue?:  number
    mdvalue?:  number
    svolume?:  number
    svalue?:  number
}


export interface T1603_RESPONSE_BODY {
    t1603OutBlock?:  T1603_RESPONSE_BODY_T1603OUTBLOCK
    t1603OutBlock1?:  Array<T1603_RESPONSE_BODY_T1603OUTBLOCK1>
}


export interface T1615_RESPONSE_BODY_T1615OUTBLOCK {
    dwvolume?:  number
    dwvalue?:  number
    djvolume?:  number
    djvalue?:  number
    sum_volume?:  number
    sum_value?:  number
}



export interface T1615_RESPONSE_BODY_T1615OUTBLOCK1 {
    hname?:  string
    sv_08?:  number
    sv_17?:  number
    sv_18?:  number
    sv_07?:  number
}


export interface T1615_RESPONSE_BODY {
    t1615OutBlock?:  T1615_RESPONSE_BODY_T1615OUTBLOCK
    t1615OutBlock1?:  Array<T1615_RESPONSE_BODY_T1615OUTBLOCK1>
}


export interface T1617_RESPONSE_BODY_T1617OUTBLOCK {
    cts_date?:  string
    cts_time?:  string
    ms_08?:  number
    md_08?:  number
    sv_08?:  number
    ms_17?:  number
    md_17?:  number
    sv_17?:  number
    ms_18?:  number
    md_18?:  number
    sv_18?:  number
    ms_01?:  number
    md_01?:  number
    sv_01?:  number
}



export interface T1617_RESPONSE_BODY_T1617OUTBLOCK1 {
    date?:  string
    time?:  string
    sv_08?:  number
    sv_17?:  number
    sv_18?:  number
    sv_01?:  number
}


export interface T1617_RESPONSE_BODY {
    t1617OutBlock?:  T1617_RESPONSE_BODY_T1617OUTBLOCK
    t1617OutBlock1?:  Array<T1617_RESPONSE_BODY_T1617OUTBLOCK1>
}


export interface T1621_RESPONSE_BODY_T1621OUTBLOCK {
    indcode?:  string
    forcode?:  string
    syscode?:  string
    stocode?:  string
    invcode?:  string
    bancode?:  string
    inscode?:  string
    fincode?:  string
    moncode?:  string
    etccode?:  string
    natcode?:  string
    pefcode?:  string
    jisucd?:  string
    jisunm?:  string
}



export interface T1621_RESPONSE_BODY_T1621OUTBLOCK1 {
    date?:  string
    time?:  string
    datetime?:  string
    indmsvol?:  number
    indmsamt?:  number
    formsvol?:  number
    formsamt?:  number
    sysmsvol?:  number
    sysmsamt?:  number
    stomsvol?:  number
    stomsamt?:  number
    invmsvol?:  number
    invmsamt?:  number
    banmsvol?:  number
    banmsamt?:  number
    insmsvol?:  number
    insmsamt?:  number
    finmsvol?:  number
    finmsamt?:  number
    monmsvol?:  number
    monmsamt?:  number
    etcmsvol?:  number
    etcmsamt?:  number
    natmsvol?:  number
    natmsamt?:  number
    pefmsvol?:  number
    pefmsamt?:  number
    upclose?:  number
    upcvolume?:  number
    upvolume?:  number
    upvalue?:  number
}


export interface T1621_RESPONSE_BODY {
    t1621OutBlock?:  T1621_RESPONSE_BODY_T1621OUTBLOCK
    t1621OutBlock1?:  Array<T1621_RESPONSE_BODY_T1621OUTBLOCK1>
}


export interface T1664_RESPONSE_BODY_T1664OUTBLOCK1 {
    dt?:  string
    tjj01?:  number
    tjj02?:  number
    tjj03?:  number
    tjj04?:  number
    tjj05?:  number
    tjj06?:  number
    tjj07?:  number
    tjj08?:  number
    tjj17?:  number
    tjj18?:  number
    cha?:  number
    bicha?:  number
    totcha?:  number
    basis?:  number
}


export interface T1664_RESPONSE_BODY {
    t1664OutBlock1?:  Array<T1664_RESPONSE_BODY_T1664OUTBLOCK1>
}


export interface T1702_RESPONSE_BODY_T1702OUTBLOCK {
    cts_idx?:  number
    cts_date?:  string
}



export interface T1702_RESPONSE_BODY_T1702OUTBLOCK1 {
    date?:  string
    close?:  number
    sign?:  string
    change?:  number
    diff?:  number
    volume?:  number
    amt0000?:  number
    amt0001?:  number
    amt0002?:  number
    amt0003?:  number
    amt0004?:  number
    amt0005?:  number
    amt0006?:  number
    amt0007?:  number
    amt0008?:  number
    amt0009?:  number
    amt0010?:  number
    amt0011?:  number
    amt0018?:  number
    amt0088?:  number
    amt0099?:  number
}


export interface T1702_RESPONSE_BODY {
    t1702OutBlock?:  T1702_RESPONSE_BODY_T1702OUTBLOCK
    t1702OutBlock1?:  Array<T1702_RESPONSE_BODY_T1702OUTBLOCK1>
}


export interface T1716_RESPONSE_BODY_T1716OUTBLOCK {
    date?:  string
    close?:  number
    sign?:  string
    change?:  number
    diff?:  number
    volume?:  number
    krx_0008?:  number
    krx_0018?:  number
    krx_0009?:  number
    pgmvol?:  number
    fsc_listing?:  number
    fsc_sjrate?:  number
    fsc_0009?:  number
    gm_volume?:  number
    gm_value?:  number
}


export interface T1716_RESPONSE_BODY {
    t1716OutBlock?:  Array<T1716_RESPONSE_BODY_T1716OUTBLOCK>
}


export interface T1717_RESPONSE_BODY_T1717OUTBLOCK {
    date?:  string
    close?:  number
    sign?:  string
    change?:  number
    diff?:  number
    volume?:  number
    tjj0000_vol?:  number
    tjj0001_vol?:  number
    tjj0002_vol?:  number
    tjj0003_vol?:  number
    tjj0004_vol?:  number
    tjj0005_vol?:  number
    tjj0006_vol?:  number
    tjj0007_vol?:  number
    tjj0008_vol?:  number
    tjj0009_vol?:  number
    tjj0010_vol?:  number
    tjj0011_vol?:  number
    tjj0018_vol?:  number
    tjj0016_vol?:  number
    tjj0017_vol?:  number
    tjj0000_dan?:  number
    tjj0001_dan?:  number
    tjj0002_dan?:  number
    tjj0003_dan?:  number
    tjj0004_dan?:  number
    tjj0005_dan?:  number
    tjj0006_dan?:  number
    tjj0007_dan?:  number
    tjj0008_dan?:  number
    tjj0009_dan?:  number
    tjj0010_dan?:  number
    tjj0011_dan?:  number
    tjj0018_dan?:  number
    tjj0016_dan?:  number
    tjj0017_dan?:  number
}


export interface T1717_RESPONSE_BODY {
    t1717OutBlock?:  Array<T1717_RESPONSE_BODY_T1717OUTBLOCK>
}


export interface T1950_RESPONSE_BODY_T1950OUTBLOCK {
    hname?:  string
    chetime?:  string
    price?:  number
    sign?:  string
    change?:  number
    diff?:  number
    cvolume?:  number
    volume?:  number
    recprice?:  number
    avg?:  number
    jnilvolume?:  number
    jvolume?:  number
    jnilclose?:  number
    volumechg?:  number
    volumediff?:  number
    open?:  number
    odiff?:  number
    opentime?:  string
    high?:  number
    hdiff?:  number
    hightime?:  string
    low?:  number
    ldiff?:  number
    lowtime?:  string
    high52w?:  number
    high52wdiff?:  number
    high52wdate?:  string
    low52w?:  number
    low52wdiff?:  number
    low52wdate?:  string
    exhratio?:  number
    listing?:  number
    memedan?:  string
    vol?:  number
    parity?:  number
    berate?:  number
    gearing?:  number
    elwexec?:  number
    issueprice?:  number
    convrate?:  number
    lastdate?:  string
    capt?:  number
    egearing?:  number
    premium?:  number
    spread?:  number
    espread?:  number
    theoryprice?:  number
    impv?:  number
    moneyness?:  string
    delt?:  number
    gama?:  number
    vega?:  number
    ceta?:  number
    rhox?:  number
    bjandatecnt?:  number
    mmsdate?:  string
    mmedate?:  string
    payday?:  string
    listdate?:  string
    lpmem?:  string
    lp_holdvol?:  number
    bcode?:  string
    bgubun?:  string
    bprice?:  number
    bsign?:  string
    bchange?:  number
    bdiff?:  number
    bvolume?:  number
    info1?:  string
    info2?:  string
    info3?:  string
    info4?:  string
    janginfo?:  string
    basketgb?:  string
    basketcnt?:  number
    elwtype?:  string
    settletype?:  string
    lpord?:  string
    elwdetail?:  string
    valuation?:  string
}



export interface T1950_RESPONSE_BODY_T1950OUTBLOCK1 {
    bskcode?:  string
    bskbno?:  number
    bskprice?:  number
    bsksign?:  string
    bskchange?:  number
    bskdiff?:  number
    bskvolume?:  number
    bskjnilclose?:  number
}


export interface T1950_RESPONSE_BODY {
    t1950OutBlock?:  T1950_RESPONSE_BODY_T1950OUTBLOCK
    t1950OutBlock1?:  Array<T1950_RESPONSE_BODY_T1950OUTBLOCK1>
}


export interface T1951_RESPONSE_BODY_T1951OUTBLOCK {
    cts_time?:  string
}



export interface T1951_RESPONSE_BODY_T1951OUTBLOCK1 {
    chetime?:  string
    price?:  number
    sign?:  string
    change?:  number
    diff?:  number
    cvolume?:  number
    chdegree?:  number
    volume?:  number
    mdvolume?:  number
    mdchecnt?:  number
    msvolume?:  number
    mschecnt?:  number
    revolume?:  number
    rechecnt?:  number
}


export interface T1951_RESPONSE_BODY {
    t1951OutBlock?:  T1951_RESPONSE_BODY_T1951OUTBLOCK
    t1951OutBlock1?:  Array<T1951_RESPONSE_BODY_T1951OUTBLOCK1>
}


export interface T1954_RESPONSE_BODY_T1954OUTBLOCK {
    date?:  string
    bsjgubun?:  string
    bscode?:  string
    bjcode?:  string
}



export interface T1954_RESPONSE_BODY_T1954OUTBLOCK1 {
    date?:  string
    open?:  number
    high?:  number
    low?:  number
    close?:  number
    sign?:  string
    change?:  number
    diff?:  number
    volume?:  number
    bsprice?:  number
    bjprice?:  number
    bsign?:  string
    bschange?:  number
    bjchange?:  number
    bdiff?:  number
    bvolume?:  number
    parity?:  number
    egearing?:  number
    premium?:  number
    berate?:  number
    capt?:  number
    gearing?:  number
    mness?:  string
}


export interface T1954_RESPONSE_BODY {
    t1954OutBlock?:  T1954_RESPONSE_BODY_T1954OUTBLOCK
    t1954OutBlock1?:  Array<T1954_RESPONSE_BODY_T1954OUTBLOCK1>
}


export interface T1956_RESPONSE_BODY_T1956OUTBLOCK {
    hname?:  string
    chetime?:  string
    price?:  number
    sign?:  string
    change?:  number
    diff?:  number
    cvolume?:  number
    volume?:  number
    recprice?:  number
    avg?:  number
    jnilvolume?:  number
    jvolume?:  number
    jnilclose?:  number
    volumechg?:  number
    volumediff?:  number
    open?:  number
    odiff?:  number
    opentime?:  string
    high?:  number
    hdiff?:  number
    hightime?:  string
    low?:  number
    ldiff?:  number
    lowtime?:  string
    high52w?:  number
    high52wdiff?:  number
    high52wdate?:  string
    low52w?:  number
    low52wdiff?:  number
    low52wdate?:  string
    exhratio?:  number
    listing?:  number
    memedan?:  string
    vol?:  number
    parity?:  number
    berate?:  number
    gearing?:  number
    elwexec?:  number
    issueprice?:  number
    convrate?:  number
    lastdate?:  string
    capt?:  number
    egearing?:  number
    premium?:  number
    spread?:  number
    espread?:  number
    theoryprice?:  number
    impv?:  number
    moneyness?:  string
    delt?:  number
    gama?:  number
    vega?:  number
    ceta?:  number
    rhox?:  number
    bjandatecnt?:  number
    mmsdate?:  string
    mmedate?:  string
    payday?:  string
    listdate?:  string
    lpmem?:  string
    lp_holdvol?:  number
    bcode?:  string
    bgubun?:  string
    bprice?:  number
    bsign?:  string
    bchange?:  number
    bdiff?:  number
    bvolume?:  number
    info1?:  string
    info2?:  string
    info3?:  string
    info4?:  string
    janginfo?:  string
    basketgb?:  string
    basketcnt?:  number
    elwtype?:  string
    settletype?:  string
    lpord?:  string
    elwdetail?:  string
    valuation?:  string
    givemoney?:  number
}



export interface T1956_RESPONSE_BODY_T1956OUTBLOCK1 {
    bskcode?:  string
    bskbno?:  number
    bskprice?:  number
    bsksign?:  string
    bskchange?:  number
    bskdiff?:  number
    bskvolume?:  number
    bskjnilclose?:  number
}


export interface T1956_RESPONSE_BODY {
    t1956OutBlock?:  T1956_RESPONSE_BODY_T1956OUTBLOCK
    t1956OutBlock1?:  Array<T1956_RESPONSE_BODY_T1956OUTBLOCK1>
}


export interface T1958_RESPONSE_BODY_T1958OUTBLOCK {
    hname?:  string
    item1?:  string
    issuernmk?:  string
    elwopt?:  string
    elwtype?:  string
    settletype?:  string
    elwexec?:  number
    convrate?:  number
    listing?:  number
    mmsdate?:  string
    lastdate?:  string
    nofdays?:  number
    payday?:  string
    parity?:  number
    premium?:  number
    berate?:  number
    capt?:  number
    gearing?:  number
    egearing?:  number
    price?:  number
    volume?:  number
    diff?:  number
}



export interface T1958_RESPONSE_BODY_T1958OUTBLOCK1 {
    hname?:  string
    item1?:  string
    issuernmk?:  string
    elwopt?:  string
    elwtype?:  string
    settletype?:  string
    elwexec?:  number
    convrate?:  number
    listing?:  number
    mmsdate?:  string
    lastdate?:  string
    nofdays?:  number
    payday?:  string
    parity?:  number
    premium?:  number
    berate?:  number
    capt?:  number
    gearing?:  number
    egearing?:  number
    price?:  number
    volume?:  number
    diff?:  number
}



export interface T1958_RESPONSE_BODY_T1958OUTBLOCK2 {
    hnamecmp?:  string
    item1cmp?:  string
    issuernmkcmp?:  string
    elwoptcmp?:  string
    elwtypecmp?:  string
    settlecmp?:  string
    elwexeccmp?:  number
    convcmp?:  number
    listingcmp?:  number
    mmsdatecmp?:  string
    lastdatecmp?:  string
    nofdayscmp?:  string
    paydaycmp?:  string
    paritycmp?:  number
    premiumcmp?:  number
    beratecmp?:  number
    captcmp?:  number
    gearingcmp?:  number
    egearingcmp?:  number
    pricecmp?:  number
    volumecmp?:  number
    diffcmp?:  number
}


export interface T1958_RESPONSE_BODY {
    t1958OutBlock?:  T1958_RESPONSE_BODY_T1958OUTBLOCK
    t1958OutBlock1?:  T1958_RESPONSE_BODY_T1958OUTBLOCK1
    t1958OutBlock2?:  T1958_RESPONSE_BODY_T1958OUTBLOCK2
}


export interface T1959_RESPONSE_BODY_T1959OUTBLOCK1 {
    shcode?:  string
    hname?:  string
    price?:  string
    sign?:  string
    change?:  string
    rate?:  number
    volume?:  string
    value?:  string
    lp_gb?:  string
    lp_mem_nm1?:  string
    lp_mem_nm2?:  string
    lp_mem_nm3?:  string
    lp_mem_nm4?:  string
    lp_mem_nm5?:  string
    lp_min_qty?:  string
    lp_st_date?:  string
    lp_end_date?:  string
    lp_spread?:  number
}


export interface T1959_RESPONSE_BODY {
    t1959OutBlock1?:  Array<T1959_RESPONSE_BODY_T1959OUTBLOCK1>
}


export interface T1960_RESPONSE_BODY_T1960OUTBLOCK {
    idx?:  number
}



export interface T1960_RESPONSE_BODY_T1960OUTBLOCK1 {
    hname?:  string
    price?:  number
    sign?:  string
    change?:  number
    diff?:  number
    volume?:  number
    elwexec?:  number
    convrate?:  number
    lastdate?:  string
    itemcode?:  string
    itemshcode?:  string
    itemname?:  string
    itemprice?:  string
    itemsign?:  string
    itemchange?:  string
    itemdiff?:  number
    elwshcode?:  string
    bepoint?:  number
}


export interface T1960_RESPONSE_BODY {
    t1960OutBlock?:  T1960_RESPONSE_BODY_T1960OUTBLOCK
    t1960OutBlock1?:  Array<T1960_RESPONSE_BODY_T1960OUTBLOCK1>
}


export interface T1961_RESPONSE_BODY_T1961OUTBLOCK {
    idx?:  number
}


export type T1961_RESPONSE_BODY_T1961OUTBLOCK1_SIGN = '1' | '2' | '3' | '4' | '5';
export type T1961_RESPONSE_BODY_T1961OUTBLOCK1_ITEMSIGN = '1' | '2' | '3' | '4' | '5';
export interface T1961_RESPONSE_BODY_T1961OUTBLOCK1 {
    hname?:  string
    price?:  number
    sign?:  T1961_RESPONSE_BODY_T1961OUTBLOCK1_SIGN
    change?:  number
    diff?:  number
    volume?:  number
    jnilvolume?:  number
    elwexec?:  number
    convrate?:  number
    lastdate?:  string
    itemcode?:  string
    itemshcode?:  string
    itemname?:  string
    itemprice?:  string
    itemsign?:  T1961_RESPONSE_BODY_T1961OUTBLOCK1_ITEMSIGN
    itemchange?:  string
    itemdiff?:  number
    elwshcode?:  string
}


export interface T1961_RESPONSE_BODY {
    t1961OutBlock?:  T1961_RESPONSE_BODY_T1961OUTBLOCK
    t1961OutBlock1?:  Array<T1961_RESPONSE_BODY_T1961OUTBLOCK1>
}


export interface T1964_RESPONSE_BODY_T1964OUTBLOCK1 {
    shcode?:  string
    hname?:  string
    item1?:  string
    itemnm?:  string
    issuernmk?:  string
    elwopt?:  string
    price?:  number
    sign?:  string
    change?:  number
    diff?:  number
    volume?:  number
    elwexec?:  number
    jandatecnt?:  number
    convrate?:  number
    lastdate?:  string
    mmsdate?:  string
    payday?:  string
    listing?:  number
    atmgbnm?:  string
    parity?:  number
    preminum?:  number
    spread?:  number
    berate?:  number
    capt?:  number
    gearing?:  number
    egearing?:  number
    itemprice?:  number
    itemsign?:  string
    itemchange?:  number
    itemdiff?:  number
    itemvolume?:  number
    jnilvolume?:  number
    theoryprice?:  number
    lp_rate?:  number
    impv?:  number
    delta?:  number
    theta?:  number
}


export interface T1964_RESPONSE_BODY {
    t1964OutBlock1?:  Array<T1964_RESPONSE_BODY_T1964OUTBLOCK1>
}


export interface T1966_RESPONSE_BODY_T1966OUTBLOCK {
    idx?:  number
}


export type T1966_RESPONSE_BODY_T1966OUTBLOCK1_SIGN = '1' | '2' | '3' | '4' | '5';
export type T1966_RESPONSE_BODY_T1966OUTBLOCK1_ITEMSIGN = '1' | '2' | '3' | '4' | '5';
export interface T1966_RESPONSE_BODY_T1966OUTBLOCK1 {
    hname?:  string
    price?:  number
    sign?:  T1966_RESPONSE_BODY_T1966OUTBLOCK1_SIGN
    change?:  number
    diff?:  number
    value?:  number
    jnilvalue?:  number
    elwexec?:  number
    convrate?:  number
    lastdate?:  string
    itemcode?:  string
    itemshcode?:  string
    itemname?:  string
    itemprice?:  string
    itemsign?:  T1966_RESPONSE_BODY_T1966OUTBLOCK1_ITEMSIGN
    itemchange?:  string
    itemdiff?:  number
    elwshcode?:  string
}


export interface T1966_RESPONSE_BODY {
    t1966OutBlock?:  T1966_RESPONSE_BODY_T1966OUTBLOCK
    t1966OutBlock1?:  Array<T1966_RESPONSE_BODY_T1966OUTBLOCK1>
}


export interface T1969_RESPONSE_BODY_T1969OUTBLOCK {
    cnt?:  number
}



export interface T1969_RESPONSE_BODY_T1969OUTBLOCK1 {
    hname?:  string
    shcode?:  string
    issuernmk?:  string
    itemcode?:  string
    cpgubun?:  string
    price?:  number
    sign?:  string
    change?:  number
    diff?:  number
    volume?:  number
    jnilvolume?:  number
    elwexec?:  number
    item?:  string
    bprice?:  number
    bsign?:  string
    bchange?:  number
    bdiff?:  number
    premium?:  number
    parity?:  number
    berate?:  number
    capt?:  number
    egearing?:  number
    gearing?:  number
    lastdate?:  string
    delta?:  number
    theta?:  number
    lpname?:  string
    lphold?:  number
    bjandatecnt?:  number
    convrate?:  number
    tickvalue?:  number
    kasis?:  number
}


export interface T1969_RESPONSE_BODY {
    t1969OutBlock?:  T1969_RESPONSE_BODY_T1969OUTBLOCK
    t1969OutBlock1?:  Array<T1969_RESPONSE_BODY_T1969OUTBLOCK1>
}

export type T1971_RESPONSE_BODY_T1971OUTBLOCK_INVIDX = '1' | '2' | '3';
export type T1971_RESPONSE_BODY_T1971OUTBLOCK_KOBA_YN = 'Y' | 'N';
export interface T1971_RESPONSE_BODY_T1971OUTBLOCK {
    hname?:  string
    price?:  number
    sign?:  string
    change?:  number
    diff?:  number
    volume?:  number
    jnilclose?:  number
    offerho1?:  number
    bidho1?:  number
    offerrem1?:  number
    lp_offerrem1?:  number
    bidrem1?:  number
    lp_bidrem1?:  number
    preoffercha1?:  number
    prebidcha1?:  number
    offerho2?:  number
    bidho2?:  number
    offerrem2?:  number
    lp_offerrem2?:  number
    bidrem2?:  number
    lp_bidrem2?:  number
    preoffercha2?:  number
    prebidcha2?:  number
    offerho3?:  number
    bidho3?:  number
    offerrem3?:  number
    lp_offerrem3?:  number
    bidrem3?:  number
    lp_bidrem3?:  number
    preoffercha3?:  number
    prebidcha3?:  number
    offerho4?:  number
    bidho4?:  number
    offerrem4?:  number
    lp_offerrem4?:  number
    bidrem4?:  number
    lp_bidrem4?:  number
    preoffercha4?:  number
    prebidcha4?:  number
    offerho5?:  number
    bidho5?:  number
    offerrem5?:  number
    lp_offerrem5?:  number
    bidrem5?:  number
    lp_bidrem5?:  number
    preoffercha5?:  number
    prebidcha5?:  number
    offerho6?:  number
    bidho6?:  number
    offerrem6?:  number
    lp_offerrem6?:  number
    bidrem6?:  number
    lp_bidrem6?:  number
    preoffercha6?:  number
    prebidcha6?:  number
    offerho7?:  number
    bidho7?:  number
    offerrem7?:  number
    lp_offerrem7?:  number
    bidrem7?:  number
    lp_bidrem7?:  number
    preoffercha7?:  number
    prebidcha7?:  number
    offerho8?:  number
    bidho8?:  number
    offerrem8?:  number
    lp_offerrem8?:  number
    bidrem8?:  number
    lp_bidrem8?:  number
    preoffercha8?:  number
    prebidcha8?:  number
    offerho9?:  number
    bidho9?:  number
    offerrem9?:  number
    lp_offerrem9?:  number
    bidrem9?:  number
    lp_bidrem9?:  number
    preoffercha9?:  number
    prebidcha9?:  number
    offerho10?:  number
    bidho10?:  number
    offerrem10?:  number
    lp_offerrem10?:  number
    bidrem10?:  number
    lp_bidrem10?:  number
    preoffercha10?:  number
    prebidcha10?:  number
    offer?:  number
    bid?:  number
    preoffercha?:  number
    prebidcha?:  number
    hotime?:  string
    yeprice?:  number
    yevolume?:  number
    yesign?:  string
    yechange?:  number
    yediff?:  number
    tmoffer?:  number
    tmbid?:  number
    ho_status?:  string
    open?:  number
    high?:  number
    low?:  number
    invidx?:  T1971_RESPONSE_BODY_T1971OUTBLOCK_INVIDX
    koba_stdprc?:  number
    koba_acc_rt?:  number
    koba_yn?:  T1971_RESPONSE_BODY_T1971OUTBLOCK_KOBA_YN
}


export interface T1971_RESPONSE_BODY {
    t1971OutBlock?:  T1971_RESPONSE_BODY_T1971OUTBLOCK
}


export interface T1972_RESPONSE_BODY_T1972OUTBLOCK {
    hname?:  string
    expcode?:  string
    shcode?:  string
    offerno1?:  string
    bidno1?:  string
    dvol1?:  number
    svol1?:  number
    dcha1?:  number
    scha1?:  number
    ddiff1?:  number
    sdiff1?:  number
    offerno2?:  string
    bidno2?:  string
    dvol2?:  number
    svol2?:  number
    dcha2?:  number
    scha2?:  number
    ddiff2?:  number
    sdiff2?:  number
    offerno3?:  string
    bidno3?:  string
    dvol3?:  number
    svol3?:  number
    dcha3?:  number
    scha3?:  number
    ddiff3?:  number
    sdiff3?:  number
    offerno4?:  string
    bidno4?:  string
    dvol4?:  number
    svol4?:  number
    dcha4?:  number
    scha4?:  number
    ddiff4?:  number
    sdiff4?:  number
    offerno5?:  string
    bidno5?:  string
    dvol5?:  number
    svol5?:  number
    dcha5?:  number
    scha5?:  number
    ddiff5?:  number
    sdiff5?:  number
    fwdvl?:  number
    fwsvl?:  number
    ftradmdcha?:  number
    ftradmscha?:  number
    fwddiff?:  number
    fwsdiff?:  number
}


export interface T1972_RESPONSE_BODY {
    t1972OutBlock?:  T1972_RESPONSE_BODY_T1972OUTBLOCK
}


export interface T1973_RESPONSE_BODY_T1973OUTBLOCK {
    cts_time?:  string
}



export interface T1973_RESPONSE_BODY_T1973OUTBLOCK1 {
    chetime?:  string
    yeprice?:  number
    yegubun?:  string
    jnilysign?:  string
    jnilychange?:  number
    yediff?:  number
    yevolume?:  number
    ymdvolume?:  number
    ymsvolume?:  number
}


export interface T1973_RESPONSE_BODY {
    t1973OutBlock?:  T1973_RESPONSE_BODY_T1973OUTBLOCK
    t1973OutBlock1?:  Array<T1973_RESPONSE_BODY_T1973OUTBLOCK1>
}


export interface T1974_RESPONSE_BODY_T1974OUTBLOCK {
    cnt?:  number
}



export interface T1974_RESPONSE_BODY_T1974OUTBLOCK1 {
    shcode?:  string
    hname?:  string
    cpgubun?:  string
    price?:  number
    sign?:  string
    change?:  number
    diff?:  number
    volume?:  number
}


export interface T1974_RESPONSE_BODY {
    t1974OutBlock?:  T1974_RESPONSE_BODY_T1974OUTBLOCK
    t1974OutBlock1?:  Array<T1974_RESPONSE_BODY_T1974OUTBLOCK1>
}


export interface T1988_RESPONSE_BODY_T1988OUTBLOCK {
    ksp_cnt?:  string
    ksd_cnt?:  string
}



export interface T1988_RESPONSE_BODY_T1988OUTBLOCK1 {
    shcode?:  string
    expcode?:  string
    hname?:  string
    price?:  string
    sign?:  string
    change?:  string
    rate?:  number
    volume?:  string
    value?:  string
    mkt_gb?:  string
    jvolume?:  string
}


export interface T1988_RESPONSE_BODY {
    t1988OutBlock?:  T1988_RESPONSE_BODY_T1988OUTBLOCK
    t1988OutBlock1?:  Array<T1988_RESPONSE_BODY_T1988OUTBLOCK1>
}


export interface T8431_RESPONSE_BODY_T8431OUTBLOCK {
    hname?:  string
    shcode?:  string
    expcode?:  string
    uplmtprice?:  number
    dnlmtprice?:  number
    jnilclose?:  number
    recprice?:  number
}


export interface T8431_RESPONSE_BODY {
    t8431OutBlock?:  Array<T8431_RESPONSE_BODY_T8431OUTBLOCK>
}


export interface T9905_RESPONSE_BODY_T9905OUTBLOCK1 {
    shcode?:  string
    expcode?:  string
    hname?:  string
}


export interface T9905_RESPONSE_BODY {
    t9905OutBlock1?:  Array<T9905_RESPONSE_BODY_T9905OUTBLOCK1>
}


export interface T9907_RESPONSE_BODY_T9907OUTBLOCK1 {
    lastym?:  string
    lastnm?:  string
}


export interface T9907_RESPONSE_BODY {
    t9907OutBlock1?:  Array<T9907_RESPONSE_BODY_T9907OUTBLOCK1>
}


export interface T9942_RESPONSE_BODY_T9942OUTBLOCK {
    hname?:  string
    shcode?:  string
    expcode?:  string
}


export interface T9942_RESPONSE_BODY {
    t9942OutBlock?:  Array<T9942_RESPONSE_BODY_T9942OUTBLOCK>
}


export interface T1901_RESPONSE_BODY_T1901OUTBLOCK {
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
    flmtvol?:  number
    per?:  number
    listing?:  number
    jkrate?:  number
    vol?:  number
    shcode?:  string
    value?:  number
    highyear?:  number
    highyeardate?:  string
    lowyear?:  number
    lowyeardate?:  string
    upname?:  string
    upcode?:  string
    upprice?:  number
    upsign?:  string
    upchange?:  number
    updiff?:  number
    futname?:  string
    futcode?:  string
    futprice?:  number
    futsign?:  string
    futchange?:  number
    futdiff?:  number
    nav?:  number
    navsign?:  string
    navchange?:  number
    navdiff?:  number
    cocrate?:  number
    kasis?:  number
    subprice?:  number
    offerno1?:  string
    bidno1?:  string
    dvol1?:  number
    svol1?:  number
    dcha1?:  number
    scha1?:  number
    ddiff1?:  number
    sdiff1?:  number
    offerno2?:  string
    bidno2?:  string
    dvol2?:  number
    svol2?:  number
    dcha2?:  number
    scha2?:  number
    ddiff2?:  number
    sdiff2?:  number
    offerno3?:  string
    bidno3?:  string
    dvol3?:  number
    svol3?:  number
    dcha3?:  number
    scha3?:  number
    ddiff3?:  number
    sdiff3?:  number
    offerno4?:  string
    bidno4?:  string
    dvol4?:  number
    svol4?:  number
    dcha4?:  number
    scha4?:  number
    ddiff4?:  number
    sdiff4?:  number
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
    upname2?:  string
    upcode2?:  string
    upprice2?:  number
    jnilnav?:  number
    jnilnavsign?:  string
    jnilnavchange?:  number
    jnilnavdiff?:  number
    etftotcap?:  number
    spread?:  number
    leverage?:  number
    taxgubun?:  string
    opcom_nmk?:  string
    lp_nm1?:  string
    lp_nm2?:  string
    lp_nm3?:  string
    lp_nm4?:  string
    lp_nm5?:  string
    etf_cp?:  string
    etf_kind?:  string
    vi_gubun?:  string
    etn_kind_cd?:  string
    lastymd?:  string
    payday?:  string
    lastdate?:  string
    issuernmk?:  string
    last_sdate?:  string
    last_edate?:  string
    lp_holdvol?:  string
    listdate?:  string
    etp_gb?:  string
    etn_elback_yn?:  string
    settletype?:  string
    idx_asset_class1?:  string
    ty_text?:  string
    leverage2?:  number
}


export interface T1901_RESPONSE_BODY {
    t1901OutBlock?:  T1901_RESPONSE_BODY_T1901OUTBLOCK
}


export interface T1902_RESPONSE_BODY_T1902OUTBLOCK {
    time?:  string
    hname?:  string
    upname?:  string
}



export interface T1902_RESPONSE_BODY_T1902OUTBLOCK1 {
    time?:  string
    price?:  number
    sign?:  string
    change?:  number
    volume?:  number
    navdiff?:  number
    nav?:  number
    navchange?:  number
    crate?:  number
    grate?:  number
    jisu?:  number
    jichange?:  number
    jirate?:  number
}


export interface T1902_RESPONSE_BODY {
    t1902OutBlock?:  T1902_RESPONSE_BODY_T1902OUTBLOCK
    t1902OutBlock1?:  Array<T1902_RESPONSE_BODY_T1902OUTBLOCK1>
}


export interface T1903_RESPONSE_BODY_T1903OUTBLOCK {
    date?:  string
    hname?:  string
    upname?:  string
}



export interface T1903_RESPONSE_BODY_T1903OUTBLOCK1 {
    date?:  string
    price?:  number
    sign?:  string
    change?:  number
    volume?:  number
    navdiff?:  number
    nav?:  number
    navchange?:  number
    crate?:  number
    grate?:  number
    jisu?:  number
    jichange?:  number
    jirate?:  number
}


export interface T1903_RESPONSE_BODY {
    t1903OutBlock?:  T1903_RESPONSE_BODY_T1903OUTBLOCK
    t1903OutBlock1?:  Array<T1903_RESPONSE_BODY_T1903OUTBLOCK1>
}


export interface T1904_RESPONSE_BODY_T1904OUTBLOCK {
    chk_tday?:  string
    date?:  string
    price?:  number
    sign?:  string
    change?:  number
    diff?:  number
    volume?:  number
    nav?:  number
    navsign?:  string
    navchange?:  number
    navdiff?:  number
    jnilnav?:  number
    jnilnavsign?:  string
    jnilnavchange?:  number
    jnilnavdiff?:  number
    upname?:  string
    upcode?:  string
    upprice?:  number
    upsign?:  string
    upchange?:  number
    updiff?:  number
    futname?:  string
    futcode?:  string
    futprice?:  number
    futsign?:  string
    futchange?:  number
    futdiff?:  number
    upname2?:  string
    upcode2?:  string
    upprice2?:  number
    etftotcap?:  number
    etfnum?:  number
    etfcunum?:  number
    cash?:  number
    opcom_nmk?:  string
    tot_pval?:  number
    tot_sigatval?:  number
}



export interface T1904_RESPONSE_BODY_T1904OUTBLOCK1 {
    shcode?:  string
    hname?:  string
    price?:  number
    sign?:  string
    change?:  number
    diff?:  number
    volume?:  number
    value?:  number
    icux?:  number
    parprice?:  number
    pvalue?:  number
    sigatvalue?:  number
    profitdate?:  string
    weight?:  number
    diff2?:  number
}


export interface T1904_RESPONSE_BODY {
    t1904OutBlock?:  T1904_RESPONSE_BODY_T1904OUTBLOCK
    t1904OutBlock1?:  Array<T1904_RESPONSE_BODY_T1904OUTBLOCK1>
}


export interface T1906_RESPONSE_BODY_T1906OUTBLOCK {
    hname?:  string
    price?:  number
    sign?:  string
    change?:  number
    diff?:  number
    volume?:  number
    lp_offerrem1?:  number
    lp_bidrem1?:  number
    lp_offerrem2?:  number
    lp_bidrem2?:  number
    lp_offerrem3?:  number
    lp_bidrem3?:  number
    lp_offerrem4?:  number
    lp_bidrem4?:  number
    lp_offerrem5?:  number
    lp_bidrem5?:  number
    lp_offerrem6?:  number
    lp_bidrem6?:  number
    lp_offerrem7?:  number
    lp_bidrem7?:  number
    lp_offerrem8?:  number
    lp_bidrem8?:  number
    lp_offerrem9?:  number
    lp_bidrem9?:  number
    lp_offerrem10?:  number
    lp_bidrem10?:  number
    jnilclose?:  number
    offerho1?:  number
    bidho1?:  number
    offerrem1?:  number
    bidrem1?:  number
    preoffercha1?:  number
    prebidcha1?:  number
    offerho2?:  number
    bidho2?:  number
    offerrem2?:  number
    bidrem2?:  number
    preoffercha2?:  number
    prebidcha2?:  number
    offerho3?:  number
    bidho3?:  number
    offerrem3?:  number
    bidrem3?:  number
    preoffercha3?:  number
    prebidcha3?:  number
    offerho4?:  number
    bidho4?:  number
    offerrem4?:  number
    bidrem4?:  number
    preoffercha4?:  number
    prebidcha4?:  number
    offerho5?:  number
    bidho5?:  number
    offerrem5?:  number
    bidrem5?:  number
    preoffercha5?:  number
    prebidcha5?:  number
    offerho6?:  number
    bidho6?:  number
    offerrem6?:  number
    bidrem6?:  number
    preoffercha6?:  number
    prebidcha6?:  number
    offerho7?:  number
    bidho7?:  number
    offerrem7?:  number
    bidrem7?:  number
    preoffercha7?:  number
    prebidcha7?:  number
    offerho8?:  number
    bidho8?:  number
    offerrem8?:  number
    bidrem8?:  number
    preoffercha8?:  number
    prebidcha8?:  number
    offerho9?:  number
    bidho9?:  number
    offerrem9?:  number
    bidrem9?:  number
    preoffercha9?:  number
    prebidcha9?:  number
    offerho10?:  number
    bidho10?:  number
    offerrem10?:  number
    bidrem10?:  number
    preoffercha10?:  number
    prebidcha10?:  number
    offer?:  number
    bid?:  number
    preoffercha?:  number
    prebidcha?:  number
    hotime?:  string
    yeprice?:  number
    yevolume?:  number
    yesign?:  string
    yechange?:  number
    yediff?:  number
    tmoffer?:  number
    tmbid?:  number
    ho_status?:  string
    shcode?:  string
    uplmtprice?:  number
    dnlmtprice?:  number
    open?:  number
    high?:  number
    low?:  number
}


export interface T1906_RESPONSE_BODY {
    t1906OutBlock?:  T1906_RESPONSE_BODY_T1906OUTBLOCK
}


export interface T1531_RESPONSE_BODY_T1531OUTBLOCK {
    tmname?:  string
    avgdiff?:  number
    tmcode?:  string
}


export interface T1531_RESPONSE_BODY {
    t1531OutBlock?:  Array<T1531_RESPONSE_BODY_T1531OUTBLOCK>
}


export interface T1532_RESPONSE_BODY_T1532OUTBLOCK {
    tmname?:  string
    avgdiff?:  number
    tmcode?:  string
}


export interface T1532_RESPONSE_BODY {
    t1532OutBlock?:  Array<T1532_RESPONSE_BODY_T1532OUTBLOCK>
}


export interface T1533_RESPONSE_BODY_T1533OUTBLOCK {
    bdate?:  string
}



export interface T1533_RESPONSE_BODY_T1533OUTBLOCK1 {
    tmname?:  string
    totcnt?:  number
    upcnt?:  number
    dncnt?:  number
    uprate?:  number
    diff_vol?:  number
    avgdiff?:  number
    chgdiff?:  number
    tmcode?:  string
}


export interface T1533_RESPONSE_BODY {
    t1533OutBlock?:  T1533_RESPONSE_BODY_T1533OUTBLOCK
    t1533OutBlock1?:  Array<T1533_RESPONSE_BODY_T1533OUTBLOCK1>
}


export interface T1537_RESPONSE_BODY_T1537OUTBLOCK {
    upcnt?:  number
    tmcnt?:  number
    uprate?:  number
    tmname?:  string
}



export interface T1537_RESPONSE_BODY_T1537OUTBLOCK1 {
    hname?:  string
    price?:  number
    sign?:  string
    change?:  number
    diff?:  number
    volume?:  number
    jniltime?:  number
    shcode?:  string
    yeprice?:  number
    open?:  number
    high?:  number
    low?:  number
    value?:  number
    marketcap?:  number
}


export interface T1537_RESPONSE_BODY {
    t1537OutBlock?:  T1537_RESPONSE_BODY_T1537OUTBLOCK
    t1537OutBlock1?:  Array<T1537_RESPONSE_BODY_T1537OUTBLOCK1>
}


export interface T8425_RESPONSE_BODY_T8425OUTBLOCK {
    tmname?:  string
    tmcode?:  string
}


export interface T8425_RESPONSE_BODY {
    t8425OutBlock?:  Array<T8425_RESPONSE_BODY_T8425OUTBLOCK>
}


export interface T1809_RESPONSE_BODY_T1809OUTBLOCK {
    cts?:  string
}



export interface T1809_RESPONSE_BODY_T1809OUTBLOCK1 {
    date?:  string
    time?:  string
    signal_id?:  string
    signal_desc?:  string
    point?:  string
    keyword?:  string
    seq?:  string
    gubun?:  string
    jmcode?:  string
    price?:  number
    sign?:  string
    chgrate?:  number
    volume?:  number
    datetime?:  string
}


export interface T1809_RESPONSE_BODY {
    t1809OutBlock?:  T1809_RESPONSE_BODY_T1809OUTBLOCK
    t1809OutBlock1?:  Array<T1809_RESPONSE_BODY_T1809OUTBLOCK1>
}


export interface T1825_RESPONSE_BODY_T1825OUTBLOCK {
    JongCnt?:  number
}



export interface T1825_RESPONSE_BODY_T1825OUTBLOCK1 {
    shcode?:  string
    hname?:  string
    sign?:  string
    signcnt?:  number
    close?:  number
    change?:  number
    diff?:  number
    volume?:  number
    volumerate?:  number
}


export interface T1825_RESPONSE_BODY {
    t1825OutBlock?:  T1825_RESPONSE_BODY_T1825OUTBLOCK
    t1825OutBlock1?:  Array<T1825_RESPONSE_BODY_T1825OUTBLOCK1>
}


export interface T1826_RESPONSE_BODY_T1826OUTBLOCK {
    search_cd?:  string
    search_nm?:  string
}


export interface T1826_RESPONSE_BODY {
    t1826OutBlock?:  Array<T1826_RESPONSE_BODY_T1826OUTBLOCK>
}


export interface T1866_RESPONSE_BODY_T1866OUTBLOCK {
    result_count?:  number
    cont?:  string
    cont_key?:  string
}



export interface T1866_RESPONSE_BODY_T1866OUTBLOCK1 {
    query_index?:  string
    group_name?:  string
    query_name?:  string
}


export interface T1866_RESPONSE_BODY {
    t1866OutBlock?:  T1866_RESPONSE_BODY_T1866OUTBLOCK
    t1866OutBlock1?:  Array<T1866_RESPONSE_BODY_T1866OUTBLOCK1>
}


export interface T1859_RESPONSE_BODY_T1859OUTBLOCK {
    result_count?:  number
    result_time?:  string
    text?:  string
}



export interface T1859_RESPONSE_BODY_T1859OUTBLOCK1 {
    shcode?:  string
    hname?:  string
    price?:  number
    sign?:  string
    change?:  number
    diff?:  number
    volume?:  number
}


export interface T1859_RESPONSE_BODY {
    t1859OutBlock?:  T1859_RESPONSE_BODY_T1859OUTBLOCK
    t1859OutBlock1?:  Array<T1859_RESPONSE_BODY_T1859OUTBLOCK1>
}

export type T1860_RESPONSE_BODY_T1860OUTBLOCK_SRESULTFLAG = 'S';
export type T1860_RESPONSE_BODY_T1860OUTBLOCK_SALERTNUM = 't1860InBlock의 Flag가 E';
export interface T1860_RESPONSE_BODY_T1860OUTBLOCK {
    sSysUserFlag?:  string
    sFlag?:  string
    sResultFlag?:  T1860_RESPONSE_BODY_T1860OUTBLOCK_SRESULTFLAG
    sTime?:  string
    sAlertNum?:  T1860_RESPONSE_BODY_T1860OUTBLOCK_SALERTNUM
    Msg?:  string
}


export interface T1860_RESPONSE_BODY {
    t1860OutBlock?:  T1860_RESPONSE_BODY_T1860OUTBLOCK
}


export interface T1441_RESPONSE_BODY_T1441OUTBLOCK {
    idx?:  number
}



export interface T1441_RESPONSE_BODY_T1441OUTBLOCK1 {
    hname?:  string
    price?:  number
    sign?:  string
    change?:  number
    diff?:  number
    volume?:  number
    offerrem1?:  number
    offerho1?:  number
    bidho1?:  number
    bidrem1?:  number
    updaycnt?:  number
    jnildiff?:  number
    shcode?:  string
    open?:  number
    high?:  number
    low?:  number
    voldiff?:  number
    value?:  number
    total?:  number
}


export interface T1441_RESPONSE_BODY {
    t1441OutBlock?:  T1441_RESPONSE_BODY_T1441OUTBLOCK
    t1441OutBlock1?:  Array<T1441_RESPONSE_BODY_T1441OUTBLOCK1>
}


export interface T1444_RESPONSE_BODY_T1444OUTBLOCK {
    idx?:  number
}



export interface T1444_RESPONSE_BODY_T1444OUTBLOCK1 {
    shcode?:  string
    hname?:  string
    price?:  number
    sign?:  string
    change?:  number
    diff?:  number
    volume?:  number
    vol_rate?:  number
    total?:  number
    rate?:  number
    for_rate?:  number
}


export interface T1444_RESPONSE_BODY {
    t1444OutBlock?:  T1444_RESPONSE_BODY_T1444OUTBLOCK
    t1444OutBlock1?:  Array<T1444_RESPONSE_BODY_T1444OUTBLOCK1>
}


export interface T1452_RESPONSE_BODY_T1452OUTBLOCK {
    idx?:  number
}



export interface T1452_RESPONSE_BODY_T1452OUTBLOCK1 {
    hname?:  string
    price?:  number
    sign?:  string
    change?:  number
    diff?:  number
    volume?:  number
    vol?:  number
    jnilvolume?:  number
    bef_diff?:  number
    shcode?:  string
}


export interface T1452_RESPONSE_BODY {
    t1452OutBlock?:  T1452_RESPONSE_BODY_T1452OUTBLOCK
    t1452OutBlock1?:  Array<T1452_RESPONSE_BODY_T1452OUTBLOCK1>
}


export interface T1463_RESPONSE_BODY_T1463OUTBLOCK {
    idx?:  number
}



export interface T1463_RESPONSE_BODY_T1463OUTBLOCK1 {
    hname?:  string
    price?:  number
    sign?:  string
    change?:  number
    diff?:  number
    volume?:  number
    value?:  number
    jnilvalue?:  number
    bef_diff?:  number
    shcode?:  string
    filler?:  string
    jnilvolume?:  number
}


export interface T1463_RESPONSE_BODY {
    t1463OutBlock?:  T1463_RESPONSE_BODY_T1463OUTBLOCK
    t1463OutBlock1?:  Array<T1463_RESPONSE_BODY_T1463OUTBLOCK1>
}


export interface T1466_RESPONSE_BODY_T1466OUTBLOCK {
    hhmm?:  string
    idx?:  number
}



export interface T1466_RESPONSE_BODY_T1466OUTBLOCK1 {
    shcode?:  string
    hname?:  string
    price?:  number
    sign?:  string
    change?:  number
    diff?:  number
    stdvolume?:  number
    volume?:  number
    voldiff?:  number
    open?:  number
    high?:  number
    low?:  number
}


export interface T1466_RESPONSE_BODY {
    t1466OutBlock?:  T1466_RESPONSE_BODY_T1466OUTBLOCK
    t1466OutBlock1?:  Array<T1466_RESPONSE_BODY_T1466OUTBLOCK1>
}


export interface T1481_RESPONSE_BODY_T1481OUTBLOCK {
    idx?:  number
}



export interface T1481_RESPONSE_BODY_T1481OUTBLOCK1 {
    hname?:  string
    price?:  number
    sign?:  string
    change?:  number
    diff?:  number
    volume?:  number
    offerrem1?:  number
    bidrem1?:  number
    offerho1?:  number
    bidho1?:  number
    shcode?:  string
    value?:  number
}


export interface T1481_RESPONSE_BODY {
    t1481OutBlock?:  T1481_RESPONSE_BODY_T1481OUTBLOCK
    t1481OutBlock1?:  Array<T1481_RESPONSE_BODY_T1481OUTBLOCK1>
}


export interface T1482_RESPONSE_BODY_T1482OUTBLOCK {
    idx?:  number
}



export interface T1482_RESPONSE_BODY_T1482OUTBLOCK1 {
    hname?:  string
    price?:  number
    sign?:  string
    change?:  number
    diff?:  number
    volume?:  number
    vol?:  number
    shcode?:  string
    value?:  number
}


export interface T1482_RESPONSE_BODY {
    t1482OutBlock?:  T1482_RESPONSE_BODY_T1482OUTBLOCK
    t1482OutBlock1?:  Array<T1482_RESPONSE_BODY_T1482OUTBLOCK1>
}


export interface T1489_RESPONSE_BODY_T1489OUTBLOCK {
    idx?:  number
}



export interface T1489_RESPONSE_BODY_T1489OUTBLOCK1 {
    hname?:  string
    price?:  number
    sign?:  string
    change?:  number
    diff?:  number
    volume?:  number
    offerho?:  number
    bidho?:  number
    shcode?:  string
    jnilvolume?:  number
}


export interface T1489_RESPONSE_BODY {
    t1489OutBlock?:  T1489_RESPONSE_BODY_T1489OUTBLOCK
    t1489OutBlock1?:  Array<T1489_RESPONSE_BODY_T1489OUTBLOCK1>
}


export interface T1492_RESPONSE_BODY_T1492OUTBLOCK {
    idx?:  number
}



export interface T1492_RESPONSE_BODY_T1492OUTBLOCK1 {
    hname?:  string
    price?:  number
    sign?:  string
    change?:  number
    diff?:  number
    yevolume?:  number
    volume?:  number
    offerrem1?:  number
    bidrem1?:  number
    offerho1?:  number
    bidho1?:  number
    shcode?:  string
    value?:  number
}


export interface T1492_RESPONSE_BODY {
    t1492OutBlock?:  T1492_RESPONSE_BODY_T1492OUTBLOCK
    t1492OutBlock1?:  Array<T1492_RESPONSE_BODY_T1492OUTBLOCK1>
}


export interface T1665_RESPONSE_BODY_T1665OUTBLOCK {
    mcode?:  string
    mname?:  string
}



export interface T1665_RESPONSE_BODY_T1665OUTBLOCK1 {
    date?:  string
    sv_08?:  number
    sv_17?:  number
    sv_18?:  number
    sv_01?:  number
    sv_03?:  number
    sv_04?:  number
    sv_02?:  number
    sv_05?:  number
    sv_06?:  number
    sv_07?:  number
    sv_00?:  number
    sv_09?:  number
    sv_10?:  number
    sv_11?:  number
    sv_99?:  number
    sa_08?:  number
    sa_17?:  number
    sa_18?:  number
    sa_01?:  number
    sa_03?:  number
    sa_04?:  number
    sa_02?:  number
    sa_05?:  number
    sa_06?:  number
    sa_07?:  number
    sa_00?:  number
    sa_09?:  number
    sa_10?:  number
    sa_11?:  number
    sa_99?:  number
    jisu?:  number
}


export interface T1665_RESPONSE_BODY {
    t1665OutBlock?:  T1665_RESPONSE_BODY_T1665OUTBLOCK
    t1665OutBlock1?:  Array<T1665_RESPONSE_BODY_T1665OUTBLOCK1>
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


export interface T8411_RESPONSE_BODY_T8411OUTBLOCK {
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
    cts_time?:  string
    s_time?:  string
    e_time?:  string
    dshmin?:  string
    rec_count?:  number
}



export interface T8411_RESPONSE_BODY_T8411OUTBLOCK1 {
    date?:  string
    time?:  string
    open?:  number
    high?:  number
    low?:  number
    close?:  number
    jdiff_vol?:  number
    jongchk?:  number
    rate?:  number
    pricechk?:  number
}


export interface T8411_RESPONSE_BODY {
    t8411OutBlock?:  T8411_RESPONSE_BODY_T8411OUTBLOCK
    t8411OutBlock1?:  Array<T8411_RESPONSE_BODY_T8411OUTBLOCK1>
}


export interface T8412_RESPONSE_BODY_T8412OUTBLOCK {
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
    cts_time?:  string
    s_time?:  string
    e_time?:  string
    dshmin?:  string
    rec_count?:  number
}



export interface T8412_RESPONSE_BODY_T8412OUTBLOCK1 {
    date?:  string
    time?:  string
    open?:  number
    high?:  number
    low?:  number
    close?:  number
    jdiff_vol?:  number
    value?:  number
    jongchk?:  number
    rate?:  number
    sign?:  string
}


export interface T8412_RESPONSE_BODY {
    t8412OutBlock?:  T8412_RESPONSE_BODY_T8412OUTBLOCK
    t8412OutBlock1?:  Array<T8412_RESPONSE_BODY_T8412OUTBLOCK1>
}


export interface CLNAQ00100_RESPONSE_BODY_CLNAQ00100OUTBLOCK1 {
    RecCnt?:  number
    QryTp?:  string
    IsuNo?:  string
    SecTpCode?:  string
    LoanIntrstGrdCode?:  string
    LoanTp?:  string
}



export interface CLNAQ00100_RESPONSE_BODY_CLNAQ00100OUTBLOCK2 {
    IsuNo?:  string
    IsuNm?:  string
    Parprc?:  number
    PrdayCprc?:  number
    RatVal?:  number
    SubstPrc?:  number
    RegTpNm?:  string
    SpotMgnLevyClssNm?:  string
    FnoTrdStopRsnCnts?:  string
    DgrsPtnNm?:  string
    AcdPtnNm?:  string
    MktTpNm?:  string
    LmtVal?:  number
    AcntLmtVal?:  number
    LoanGrdCode?:  string
    LoanAmt?:  number
    LoanAbleRat?:  number
    LoanIntrat1?:  number
    RegPsnId?:  string
    Rat01?:  number
    Rat02?:  number
}



export interface CLNAQ00100_RESPONSE_BODY_CLNAQ00100OUTBLOCK3 {
    RecCnt?:  number
    LrgMnyoutSumAmt?:  number
}


export interface CLNAQ00100_RESPONSE_BODY {
    CLNAQ00100OutBlock1?:  CLNAQ00100_RESPONSE_BODY_CLNAQ00100OUTBLOCK1
    CLNAQ00100OutBlock2?:  Array<CLNAQ00100_RESPONSE_BODY_CLNAQ00100OUTBLOCK2>
    CLNAQ00100OutBlock3?:  CLNAQ00100_RESPONSE_BODY_CLNAQ00100OUTBLOCK3
}


export interface T1403_RESPONSE_BODY_T1403OUTBLOCK {
    idx?:  number
}



export interface T1403_RESPONSE_BODY_T1403OUTBLOCK1 {
    hname?:  string
    price?:  number
    sign?:  string
    change?:  number
    diff?:  number
    volume?:  number
    kmprice?:  number
    date?:  string
    recprice?:  number
    kmdiff?:  number
    close?:  number
    recdiff?:  number
    shcode?:  string
}


export interface T1403_RESPONSE_BODY {
    t1403OutBlock?:  T1403_RESPONSE_BODY_T1403OUTBLOCK
    t1403OutBlock1?:  Array<T1403_RESPONSE_BODY_T1403OUTBLOCK1>
}


export interface T1411_RESPONSE_BODY_T1411OUTBLOCK {
    jkrate?:  number
    sjkrate?:  number
    idx?:  number
}



export interface T1411_RESPONSE_BODY_T1411OUTBLOCK1 {
    shcode?:  string
    hname?:  string
    jkrate?:  number
    sjkrate?:  number
    subprice?:  number
    recprice?:  number
    price?:  number
    sign?:  string
    change?:  number
    diff?:  number
    volume?:  number
}


export interface T1411_RESPONSE_BODY {
    t1411OutBlock?:  T1411_RESPONSE_BODY_T1411OUTBLOCK
    t1411OutBlock1?:  Array<T1411_RESPONSE_BODY_T1411OUTBLOCK1>
}


export interface T1638_RESPONSE_BODY_T1638OUTBLOCK {
    rank?:  number
    hname?:  string
    price?:  number
    sign?:  string
    change?:  number
    diff?:  number
    sigatotrt?:  number
    obuyvol?:  number
    buyrem?:  number
    psgvolume?:  number
    sellrem?:  number
    pdgvolume?:  number
    sigatot?:  number
    shcode?:  string
}


export interface T1638_RESPONSE_BODY {
    t1638OutBlock?:  Array<T1638_RESPONSE_BODY_T1638OUTBLOCK>
}


export interface T1921_RESPONSE_BODY_T1921OUTBLOCK {
    cnt?:  number
    date?:  string
    idx?:  number
}



export interface T1921_RESPONSE_BODY_T1921OUTBLOCK1 {
    mmdate?:  string
    close?:  number
    sign?:  string
    jchange?:  number
    diff?:  number
    nvolume?:  number
    svolume?:  number
    jvolume?:  number
    price?:  number
    change?:  number
    gyrate?:  number
    jkrate?:  number
    shcode?:  string
}


export interface T1921_RESPONSE_BODY {
    t1921OutBlock?:  T1921_RESPONSE_BODY_T1921OUTBLOCK
    t1921OutBlock1?:  Array<T1921_RESPONSE_BODY_T1921OUTBLOCK1>
}


export interface T1926_RESPONSE_BODY_T1926OUTBLOCK {
    ynvolume?:  number
    ysvolume?:  number
    yjvolume?:  number
    yvchange?:  number
    ygrate?:  number
    yjrate?:  number
    ynprice?:  number
    ysprice?:  number
    yjprice?:  number
    yachange?:  number
    dnvolume?:  number
    dsvolume?:  number
    djvolume?:  number
    dvchange?:  number
    dgrate?:  number
    djrate?:  number
    dnprice?:  number
    dsprice?:  number
    djprice?:  number
    dachange?:  number
    mmdate?:  string
    close?:  number
    volume?:  number
    value?:  number
    pr5days?:  number
    pr20days?:  number
    yj5days?:  number
    yj20days?:  number
    dj5days?:  number
    dj20days?:  number
}


export interface T1926_RESPONSE_BODY {
    t1926OutBlock?:  T1926_RESPONSE_BODY_T1926OUTBLOCK
}


export interface T1927_RESPONSE_BODY_T1927OUTBLOCK {
    date?:  string
}



export interface T1927_RESPONSE_BODY_T1927OUTBLOCK1 {
    date?:  string
    price?:  number
    sign?:  string
    change?:  number
    diff?:  number
    volume?:  number
    value?:  number
    gm_vo?:  number
    gm_va?:  number
    gm_per?:  number
    gm_avg?:  number
    gm_vo_sum?:  number
    gm_vo1?:  number
    gm_va1?:  number
    gm_vo2?:  number
    gm_va2?:  number
}


export interface T1927_RESPONSE_BODY {
    t1927OutBlock?:  T1927_RESPONSE_BODY_T1927OUTBLOCK
    t1927OutBlock1?:  Array<T1927_RESPONSE_BODY_T1927OUTBLOCK1>
}


export interface T1941_RESPONSE_BODY_T1941OUTBLOCK1 {
    date?:  string
    price?:  number
    sign?:  string
    change?:  number
    diff?:  number
    volume?:  number
    upvolume?:  number
    dnvolume?:  number
    tovolume?:  number
    tovalue?:  number
    shcode?:  string
    tovoldif?:  number
}


export interface T1941_RESPONSE_BODY {
    t1941OutBlock1?:  Array<T1941_RESPONSE_BODY_T1941OUTBLOCK1>
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


export interface CSPAQ00600_RESPONSE_BODY_CSPAQ00600OUTBLOCK1 {
    RecCnt?:  number
    AcntNo?:  string
    InptPwd?:  string
    LoanDtlClssCode?:  string
    IsuNo?:  string
    OrdPrc?:  number
    CommdaCode?:  string
}



export interface CSPAQ00600_RESPONSE_BODY_CSPAQ00600OUTBLOCK2 {
    RecCnt?:  number
    AcntNm?:  string
    OrdPrc?:  number
    SloanLmtAmt?:  number
    SloanAmtSum?:  number
    SloanNewAmt?:  number
    SloanRfundAmt?:  number
    MktcplMloanLmtAmt?:  number
    MktcplMloanAmtSum?:  number
    MktcplMloanNewAmt?:  number
    MktcplMloanRfundAmt?:  number
    SfaccMloanLmtAmt?:  number
    SfaccMloanAmtSum?:  number
    SfaccMloanNewAmt?:  number
    SfaccMloanRfundAmt?:  number
    BrnMktcplMloanLmtAmt?:  number
    BrnMktcplMloanNewAmt?:  number
    BrnMktcplMloanRfundAmt?:  number
    BrnMktcplMloanUseAmt?:  number
    BrnSfaccMloanLmtAmt?:  number
    BrnSfaccMloanNewAmt?:  number
    BrnSfaccMloanRfundAmt?:  number
    BrnSfaccMloanUseAmt?:  number
    FirmMloanLmtMgmtYn?:  string
    FirmCrdtIsuRestrcTp?:  string
    PldgMaintRat?:  number
    FirmNm?:  string
    PldgRat?:  number
    DpsastSum?:  number
    LmtChgAbleAmt?:  number
    OrdAbleAmt?:  number
    OrdAbleQty?:  number
    RcvblUablOrdAbleQty?:  number
}


export interface CSPAQ00600_RESPONSE_BODY {
    CSPAQ00600OutBlock1?:  CSPAQ00600_RESPONSE_BODY_CSPAQ00600OUTBLOCK1
    CSPAQ00600OutBlock2?:  CSPAQ00600_RESPONSE_BODY_CSPAQ00600OUTBLOCK2
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


export interface CSPAQ12300_RESPONSE_BODY_CSPAQ12300OUTBLOCK1 {
    RecCnt?:  number
    AcntNo?:  string
    Pwd?:  string
    BalCreTp?:  string
    CmsnAppTpCode?:  string
    D2balBaseQryTp?:  string
    UprcTpCode?:  string
}



export interface CSPAQ12300_RESPONSE_BODY_CSPAQ12300OUTBLOCK2 {
    RecCnt?:  number
    BrnNm?:  string
    AcntNm?:  string
    MnyOrdAbleAmt?:  number
    MnyoutAbleAmt?:  number
    SeOrdAbleAmt?:  number
    KdqOrdAbleAmt?:  number
    HtsOrdAbleAmt?:  number
    MgnRat100pctOrdAbleAmt?:  number
    BalEvalAmt?:  number
    PchsAmt?:  number
    RcvblAmt?:  number
    PnlRat?:  number
    InvstOrgAmt?:  number
    InvstPlAmt?:  number
    CrdtPldgOrdAmt?:  number
    Dps?:  number
    D1Dps?:  number
    D2Dps?:  number
    OrdDt?:  string
    MnyMgn?:  number
    SubstMgn?:  number
    SubstAmt?:  number
    PrdayBuyExecAmt?:  number
    PrdaySellExecAmt?:  number
    CrdayBuyExecAmt?:  number
    CrdaySellExecAmt?:  number
    EvalPnlSum?:  number
    DpsastTotamt?:  number
    Evrprc?:  number
    RuseAmt?:  number
    EtclndAmt?:  number
    PrcAdjstAmt?:  number
    D1CmsnAmt?:  number
    D2CmsnAmt?:  number
    D1EvrTax?:  number
    D2EvrTax?:  number
    D1SettPrergAmt?:  number
    D2SettPrergAmt?:  number
    PrdayKseMnyMgn?:  number
    PrdayKseSubstMgn?:  number
    PrdayKseCrdtMnyMgn?:  number
    PrdayKseCrdtSubstMgn?:  number
    CrdayKseMnyMgn?:  number
    CrdayKseSubstMgn?:  number
    CrdayKseCrdtMnyMgn?:  number
    CrdayKseCrdtSubstMgn?:  number
    PrdayKdqMnyMgn?:  number
    PrdayKdqSubstMgn?:  number
    PrdayKdqCrdtMnyMgn?:  number
    PrdayKdqCrdtSubstMgn?:  number
    CrdayKdqMnyMgn?:  number
    CrdayKdqSubstMgn?:  number
    CrdayKdqCrdtMnyMgn?:  number
    CrdayKdqCrdtSubstMgn?:  number
    PrdayFrbrdMnyMgn?:  number
    PrdayFrbrdSubstMgn?:  number
    CrdayFrbrdMnyMgn?:  number
    CrdayFrbrdSubstMgn?:  number
    PrdayCrbmkMnyMgn?:  number
    PrdayCrbmkSubstMgn?:  number
    CrdayCrbmkMnyMgn?:  number
    CrdayCrbmkSubstMgn?:  number
    DpspdgQty?:  number
    BuyAdjstAmtD2?:  number
    SellAdjstAmtD2?:  number
    RepayRqrdAmtD1?:  number
    RepayRqrdAmtD2?:  number
    LoanAmt?:  number
}



export interface CSPAQ12300_RESPONSE_BODY_CSPAQ12300OUTBLOCK3 {
    IsuNo?:  string
    IsuNm?:  string
    SecBalPtnCode?:  string
    SecBalPtnNm?:  string
    BalQty?:  number
    BnsBaseBalQty?:  number
    CrdayBuyExecQty?:  number
    CrdaySellExecQty?:  number
    SellPrc?:  number
    BuyPrc?:  number
    SellPnlAmt?:  number
    PnlRat?:  number
    NowPrc?:  number
    CrdtAmt?:  number
    DueDt?:  string
    PrdaySellExecPrc?:  number
    PrdaySellQty?:  number
    PrdayBuyExecPrc?:  number
    PrdayBuyQty?:  number
    LoanDt?:  string
    AvrUprc?:  number
    SellAbleQty?:  number
    SellOrdQty?:  number
    CrdayBuyExecAmt?:  number
    CrdaySellExecAmt?:  number
    PrdayBuyExecAmt?:  number
    PrdaySellExecAmt?:  number
    BalEvalAmt?:  number
    EvalPnl?:  number
    MnyOrdAbleAmt?:  number
    OrdAbleAmt?:  number
    SellUnercQty?:  number
    SellUnsttQty?:  number
    BuyUnercQty?:  number
    BuyUnsttQty?:  number
    UnsttQty?:  number
    UnercQty?:  number
    PrdayCprc?:  number
    PchsAmt?:  number
    RegMktCode?:  string
    LoanDtlClssCode?:  string
    DpspdgLoanQty?:  number
}


export interface CSPAQ12300_RESPONSE_BODY {
    CSPAQ12300OutBlock1?:  CSPAQ12300_RESPONSE_BODY_CSPAQ12300OUTBLOCK1
    CSPAQ12300OutBlock2?:  CSPAQ12300_RESPONSE_BODY_CSPAQ12300OUTBLOCK2
    CSPAQ12300OutBlock3?:  Array<CSPAQ12300_RESPONSE_BODY_CSPAQ12300OUTBLOCK3>
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


export interface CSPAQ22200_RESPONSE_BODY_CSPAQ22200OUTBLOCK1 {
    RecCnt?:  number
    MgmtBrnNo?:  string
    AcntNo?:  string
    Pwd?:  string
    BalCreTp?:  string
}



export interface CSPAQ22200_RESPONSE_BODY_CSPAQ22200OUTBLOCK2 {
    RecCnt?:  number
    BrnNm?:  string
    AcntNm?:  string
    MnyOrdAbleAmt?:  number
    SubstOrdAbleAmt?:  number
    SeOrdAbleAmt?:  number
    KdqOrdAbleAmt?:  number
    CrdtPldgOrdAmt?:  number
    MgnRat100pctOrdAbleAmt?:  number
    MgnRat35ordAbleAmt?:  number
    MgnRat50ordAbleAmt?:  number
    CrdtOrdAbleAmt?:  number
    Dps?:  number
    SubstAmt?:  number
    MgnMny?:  number
    MgnSubst?:  number
    D1Dps?:  number
    D2Dps?:  number
    RcvblAmt?:  number
    D1ovdRepayRqrdAmt?:  number
    D2ovdRepayRqrdAmt?:  number
    MloanAmt?:  number
    ChgAfPldgRat?:  number
    RqrdPldgAmt?:  number
    PdlckAmt?:  number
    OrgPldgSumAmt?:  number
    SubPldgSumAmt?:  number
    CrdtPldgAmtMny?:  number
    CrdtPldgSubstAmt?:  number
    Imreq?:  number
    CrdtPldgRuseAmt?:  number
    DpslRestrcAmt?:  number
    PrdaySellAdjstAmt?:  number
    PrdayBuyAdjstAmt?:  number
    CrdaySellAdjstAmt?:  number
    CrdayBuyAdjstAmt?:  number
    CslLoanAmtdt1?:  number
}


export interface CSPAQ22200_RESPONSE_BODY {
    CSPAQ22200OutBlock1?:  CSPAQ22200_RESPONSE_BODY_CSPAQ22200OUTBLOCK1
    CSPAQ22200OutBlock2?:  CSPAQ22200_RESPONSE_BODY_CSPAQ22200OUTBLOCK2
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


export interface FOCCQ33600_RESPONSE_BODY_FOCCQ33600OUTBLOCK1 {
    RecCnt?:  number
    AcntNo?:  string
    Pwd?:  string
    QrySrtDt?:  string
    QryEndDt?:  string
    TermTp?:  string
}



export interface FOCCQ33600_RESPONSE_BODY_FOCCQ33600OUTBLOCK2 {
    RecCnt?:  number
    AcntNm?:  string
    BnsctrAmt?:  number
    MnyinAmt?:  number
    MnyoutAmt?:  number
    InvstAvrbalPramt?:  number
    InvstPlAmt?:  number
    InvstErnrat?:  number
}



export interface FOCCQ33600_RESPONSE_BODY_FOCCQ33600OUTBLOCK3 {
    BaseDt?:  string
    FdEvalAmt?:  number
    EotEvalAmt?:  number
    InvstAvrbalPramt?:  number
    BnsctrAmt?:  number
    MnyinSecinAmt?:  number
    MnyoutSecoutAmt?:  number
    EvalPnlAmt?:  number
    TermErnrat?:  number
    Idx?:  number
}


export interface FOCCQ33600_RESPONSE_BODY {
    FOCCQ33600OutBlock1?:  FOCCQ33600_RESPONSE_BODY_FOCCQ33600OUTBLOCK1
    FOCCQ33600OutBlock2?:  FOCCQ33600_RESPONSE_BODY_FOCCQ33600OUTBLOCK2
    FOCCQ33600OutBlock3?:  Array<FOCCQ33600_RESPONSE_BODY_FOCCQ33600OUTBLOCK3>
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


export interface T0151_RESPONSE_BODY_T0151OUTBLOCK {
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



export interface T0151_RESPONSE_BODY_T0151OUTBLOCK1 {
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


export interface T0151_RESPONSE_BODY {
    t0151OutBlock?:  T0151_RESPONSE_BODY_T0151OUTBLOCK
    t0151OutBlock1?:  Array<T0151_RESPONSE_BODY_T0151OUTBLOCK1>
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


export interface T2101_RESPONSE_BODY_T2101OUTBLOCK {
    hname?:  string
    price?:  number
    sign?:  string
    change?:  number
    jnilclose?:  number
    diff?:  number
    volume?:  number
    value?:  number
    mgjv?:  number
    mgjvdiff?:  number
    open?:  number
    high?:  number
    low?:  number
    uplmtprice?:  number
    dnlmtprice?:  number
    high52w?:  number
    low52w?:  number
    basis?:  number
    recprice?:  number
    theoryprice?:  number
    glyl?:  number
    cbhprice?:  number
    cblprice?:  number
    lastmonth?:  string
    jandatecnt?:  number
    pricejisu?:  number
    jisusign?:  string
    jisuchange?:  number
    jisudiff?:  number
    kospijisu?:  number
    kospisign?:  string
    kospichange?:  number
    kospidiff?:  number
    listhprice?:  number
    listlprice?:  number
    delt?:  number
    gama?:  number
    ceta?:  number
    vega?:  number
    rhox?:  number
    gmprice?:  number
    gmsign?:  string
    gmchange?:  number
    gmdiff?:  number
    theorypriceg?:  number
    histimpv?:  number
    impv?:  number
    sbasis?:  number
    ibasis?:  number
    gmfutcode?:  string
    actprice?:  number
    greeks_time?:  string
    greeks_confirm?:  string
    danhochk?:  string
    yeprice?:  number
    jnilysign?:  string
    jnilychange?:  number
    jnilydrate?:  number
    alloc_gubun?:  string
    bjandatecnt?:  number
    focode?:  string
    dy_gubun?:  string
    dy_uplmtprice?:  number
    dy_dnlmtprice?:  number
    updnstep_gubun?:  string
    upstep?:  string
    dnstep?:  string
    uplmtprice_3rd?:  number
    dnlmtprice_3rd?:  number
    expct_ccls_q?:  number
}


export interface T2101_RESPONSE_BODY {
    t2101OutBlock?:  T2101_RESPONSE_BODY_T2101OUTBLOCK
}

export type T2105_RESPONSE_BODY_T2105OUTBLOCK_SIGN = '1' | '2' | '3' | '4' | '5';
export interface T2105_RESPONSE_BODY_T2105OUTBLOCK {
    hname?:  string
    price?:  number
    sign?:  T2105_RESPONSE_BODY_T2105OUTBLOCK_SIGN
    change?:  number
    diff?:  number
    volume?:  number
    stimeqrt?:  number
    jnilclose?:  number
    offerho1?:  number
    bidho1?:  number
    offerrem1?:  number
    bidrem1?:  number
    dcnt1?:  number
    scnt1?:  number
    offerho2?:  number
    bidho2?:  number
    offerrem2?:  number
    bidrem2?:  number
    dcnt2?:  number
    scnt2?:  number
    offerho3?:  number
    bidho3?:  number
    offerrem3?:  number
    bidrem3?:  number
    dcnt3?:  number
    scnt3?:  number
    offerho4?:  number
    bidho4?:  number
    offerrem4?:  number
    bidrem4?:  number
    dcnt4?:  number
    scnt4?:  number
    offerho5?:  number
    bidho5?:  number
    offerrem5?:  number
    bidrem5?:  number
    dcnt5?:  number
    scnt5?:  number
    dvol?:  number
    svol?:  number
    toffernum?:  number
    tbidnum?:  number
    time?:  string
    shcode?:  string
}


export interface T2105_RESPONSE_BODY {
    t2105OutBlock?:  T2105_RESPONSE_BODY_T2105OUTBLOCK
}


export interface T2106_RESPONSE_BODY_T2106OUTBLOCK {
    nrec?:  string
}


export type T2106_RESPONSE_BODY_T2106OUTBLOCK1_GUBN = '1' | '2' | '3' | '4';
export interface T2106_RESPONSE_BODY_T2106OUTBLOCK1 {
    indx?:  string
    gubn?:  T2106_RESPONSE_BODY_T2106OUTBLOCK1_GUBN
    vals?:  string
}


export interface T2106_RESPONSE_BODY {
    t2106OutBlock?:  T2106_RESPONSE_BODY_T2106OUTBLOCK
    t2106OutBlock1?:  Array<T2106_RESPONSE_BODY_T2106OUTBLOCK1>
}


export interface T2201_RESPONSE_BODY_T2201OUTBLOCK {
    cts_time?:  string
}



export interface T2201_RESPONSE_BODY_T2201OUTBLOCK1 {
    chetime?:  string
    price?:  number
    sign?:  string
    change?:  number
    cvolume?:  number
    chdegree?:  number
    offerho?:  number
    bidho?:  number
    volume?:  number
    openyak?:  number
    jnilopenupdn?:  number
    ibasis?:  number
    sbasis?:  number
    kasis?:  number
    value?:  number
    j_openupdn?:  number
    n_msvolume?:  number
    n_mdvolume?:  number
    s_msvolume?:  number
    n_mschecnt?:  number
    n_mdchecnt?:  number
    s_mschecnt?:  number
}


export interface T2201_RESPONSE_BODY {
    t2201OutBlock?:  T2201_RESPONSE_BODY_T2201OUTBLOCK
    t2201OutBlock1?:  Array<T2201_RESPONSE_BODY_T2201OUTBLOCK1>
}


export interface T2203_RESPONSE_BODY_T2203OUTBLOCK {
    date?:  string
    cts_code?:  string
    lastdate?:  string
    nowfutyn?:  string
}


export type T2203_RESPONSE_BODY_T2203OUTBLOCK1_SIGN = '1' | '2' | '3' | '4' | '5';
export interface T2203_RESPONSE_BODY_T2203OUTBLOCK1 {
    date?:  string
    open?:  number
    high?:  number
    low?:  number
    close?:  number
    sign?:  T2203_RESPONSE_BODY_T2203OUTBLOCK1_SIGN
    change?:  number
    diff?:  number
    volume?:  number
    diff_vol?:  number
    openyak?:  number
    openyakupdn?:  number
    value?:  number
}


export interface T2203_RESPONSE_BODY {
    t2203OutBlock?:  T2203_RESPONSE_BODY_T2203OUTBLOCK
    t2203OutBlock1?:  Array<T2203_RESPONSE_BODY_T2203OUTBLOCK1>
}


export interface T2210_RESPONSE_BODY_T2210OUTBLOCK {
    mdvolume?:  number
    mdchecnt?:  number
    msvolume?:  number
    mschecnt?:  number
}


export interface T2210_RESPONSE_BODY {
    t2210OutBlock?:  T2210_RESPONSE_BODY_T2210OUTBLOCK
}

export type T2301_RESPONSE_BODY_T2301OUTBLOCK_GMSIGN = '1' | '2' | '3' | '4' | '5';
export interface T2301_RESPONSE_BODY_T2301OUTBLOCK {
    histimpv?:  number
    jandatecnt?:  number
    cimpv?:  number
    pimpv?:  number
    gmprice?:  number
    gmsign?:  T2301_RESPONSE_BODY_T2301OUTBLOCK_GMSIGN
    gmchange?:  number
    gmdiff?:  number
    gmvolume?:  number
    gmshcode?:  string
}


export type T2301_RESPONSE_BODY_T2301OUTBLOCK1_SIGN = '1' | '2' | '3' | '4' | '5';
export type T2301_RESPONSE_BODY_T2301OUTBLOCK1_ATMGUBUN = '0' | '1' | '2' | '3';
export interface T2301_RESPONSE_BODY_T2301OUTBLOCK1 {
    actprice?:  number
    optcode?:  string
    price?:  number
    sign?:  T2301_RESPONSE_BODY_T2301OUTBLOCK1_SIGN
    change?:  number
    diff?:  number
    volume?:  number
    iv?:  number
    mgjv?:  number
    mgjvupdn?:  number
    offerho1?:  number
    bidho1?:  number
    cvolume?:  number
    delt?:  number
    gama?:  number
    vega?:  number
    ceta?:  number
    rhox?:  number
    theoryprice?:  number
    impv?:  number
    timevl?:  number
    jvolume?:  number
    parpl?:  number
    jngo?:  number
    offerrem1?:  number
    bidrem1?:  number
    open?:  number
    high?:  number
    low?:  number
    atmgubun?:  T2301_RESPONSE_BODY_T2301OUTBLOCK1_ATMGUBUN
    jisuconv?:  number
    value?:  number
}


export type T2301_RESPONSE_BODY_T2301OUTBLOCK2_SIGN = '1' | '2' | '3' | '4' | '5';
export type T2301_RESPONSE_BODY_T2301OUTBLOCK2_ATMGUBUN = '0' | '1' | '2' | '3';
export interface T2301_RESPONSE_BODY_T2301OUTBLOCK2 {
    actprice?:  number
    optcode?:  string
    price?:  number
    sign?:  T2301_RESPONSE_BODY_T2301OUTBLOCK2_SIGN
    change?:  number
    diff?:  number
    volume?:  number
    iv?:  number
    mgjv?:  number
    mgjvupdn?:  number
    offerho1?:  number
    bidho1?:  number
    cvolume?:  number
    delt?:  number
    gama?:  number
    vega?:  number
    ceta?:  number
    rhox?:  number
    theoryprice?:  number
    impv?:  number
    timevl?:  number
    jvolume?:  number
    parpl?:  number
    jngo?:  number
    offerrem1?:  number
    bidrem1?:  number
    open?:  number
    high?:  number
    low?:  number
    atmgubun?:  T2301_RESPONSE_BODY_T2301OUTBLOCK2_ATMGUBUN
    jisuconv?:  number
    value?:  number
}


export interface T2301_RESPONSE_BODY {
    t2301OutBlock?:  T2301_RESPONSE_BODY_T2301OUTBLOCK
    t2301OutBlock1?:  Array<T2301_RESPONSE_BODY_T2301OUTBLOCK1>
    t2301OutBlock2?:  Array<T2301_RESPONSE_BODY_T2301OUTBLOCK2>
}


export interface T2405_RESPONSE_BODY_T2405OUTBLOCK {
    mdvolume?:  number
    mdchecnt?:  number
    msvolume?:  number
    mschecnt?:  number
    cts_time?:  string
}


export type T2405_RESPONSE_BODY_T2405OUTBLOCK1_SIGN = '1' | '2' | '3' | '4' | '5';
export type T2405_RESPONSE_BODY_T2405OUTBLOCK1_R_SIGN = '2' | '5';
export interface T2405_RESPONSE_BODY_T2405OUTBLOCK1 {
    time?:  string
    price?:  number
    sign?:  T2405_RESPONSE_BODY_T2405OUTBLOCK1_SIGN
    change?:  number
    volume?:  number
    cvolume?:  number
    offerho1?:  number
    bidho1?:  number
    offerrem?:  number
    bidrem?:  number
    offercnt?:  number
    bidcnt?:  number
    c_offerrem?:  number
    c_bidrem?:  number
    c_offercnt?:  number
    c_bidcnt?:  number
    r_bidrem?:  number
    r_bidcnt?:  number
    r_sign?:  T2405_RESPONSE_BODY_T2405OUTBLOCK1_R_SIGN
    date?:  string
}


export interface T2405_RESPONSE_BODY {
    t2405OutBlock?:  T2405_RESPONSE_BODY_T2405OUTBLOCK
    t2405OutBlock1?:  Array<T2405_RESPONSE_BODY_T2405OUTBLOCK1>
}

export type T2421_RESPONSE_BODY_T2421OUTBLOCK_SIGN = '1' | '2' | '3' | '4' | '5';
export interface T2421_RESPONSE_BODY_T2421OUTBLOCK {
    price?:  number
    sign?:  T2421_RESPONSE_BODY_T2421OUTBLOCK_SIGN
    change?:  number
    diff?:  number
    cvolume?:  number
    volume?:  number
    openyak?:  number
}



export interface T2421_RESPONSE_BODY_T2421OUTBLOCK1 {
    dt?:  string
    open?:  number
    high?:  number
    low?:  number
    close?:  number
    openopenyak?:  number
    highopenyak?:  number
    lowopenyak?:  number
    closeopenyak?:  number
    openupdn?:  number
}


export interface T2421_RESPONSE_BODY {
    t2421OutBlock?:  T2421_RESPONSE_BODY_T2421OUTBLOCK
    t2421OutBlock1?:  Array<T2421_RESPONSE_BODY_T2421OUTBLOCK1>
}


export interface T2830_RESPONSE_BODY_T2830OUTBLOCK {
    hname?:  string
    price?:  number
    sign?:  string
    change?:  number
    jnilclose?:  number
    diff?:  number
    volume?:  number
    value?:  number
    open?:  number
    high?:  number
    low?:  number
    recprice?:  number
    theoryprice?:  number
    actprice?:  number
    impv?:  number
    timevl?:  number
    kospijisu?:  number
    kospisign?:  string
    kospichange?:  number
    kospidiff?:  number
    cmeprice?:  number
    cmesign?:  string
    cmechange?:  number
    cmediff?:  number
    cmefocode?:  string
    uplmtprice?:  number
    dnlmtprice?:  number
    focode?:  string
    yeprice?:  number
    ysign?:  string
    ychange?:  number
    ydiff?:  number
    danhochk?:  string
    jnilvolume?:  number
    jnilvalue?:  number
    uplmtprice_3rd?:  number
    dnlmtprice_3rd?:  number
}


export interface T2830_RESPONSE_BODY {
    t2830OutBlock?:  T2830_RESPONSE_BODY_T2830OUTBLOCK
}


export interface T2831_RESPONSE_BODY_T2831OUTBLOCK {
    hname?:  string
    price?:  number
    sign?:  string
    change?:  number
    diff?:  number
    volume?:  number
    jnilclose?:  number
    offerho1?:  number
    bidho1?:  number
    offerrem1?:  number
    bidrem1?:  number
    dcnt1?:  number
    scnt1?:  number
    offerho2?:  number
    bidho2?:  number
    offerrem2?:  number
    bidrem2?:  number
    dcnt2?:  number
    scnt2?:  number
    offerho3?:  number
    bidho3?:  number
    offerrem3?:  number
    bidrem3?:  number
    dcnt3?:  number
    scnt3?:  number
    offerho4?:  number
    bidho4?:  number
    offerrem4?:  number
    bidrem4?:  number
    dcnt4?:  number
    scnt4?:  number
    offerho5?:  number
    bidho5?:  number
    offerrem5?:  number
    bidrem5?:  number
    dcnt5?:  number
    scnt5?:  number
    dvol?:  number
    svol?:  number
    toffernum?:  number
    tbidnum?:  number
    time?:  string
    shcode?:  string
}


export interface T2831_RESPONSE_BODY {
    t2831OutBlock?:  T2831_RESPONSE_BODY_T2831OUTBLOCK
}


export interface T2832_RESPONSE_BODY_T2832OUTBLOCK {
    cts_time?:  string
}


export type T2832_RESPONSE_BODY_T2832OUTBLOCK1_SIGN = '1' | '2' | '3' | '4' | '5';
export interface T2832_RESPONSE_BODY_T2832OUTBLOCK1 {
    chetime?:  string
    price?:  number
    sign?:  T2832_RESPONSE_BODY_T2832OUTBLOCK1_SIGN
    change?:  number
    cvolume?:  number
    chdegree?:  number
    offerho?:  number
    bidho?:  number
    volume?:  number
    n_msvolume?:  number
    n_mdvolume?:  number
    s_msvolume?:  number
    n_mschecnt?:  number
    n_mdchecnt?:  number
    s_mschecnt?:  number
}


export interface T2832_RESPONSE_BODY {
    t2832OutBlock?:  T2832_RESPONSE_BODY_T2832OUTBLOCK
    t2832OutBlock1?:  Array<T2832_RESPONSE_BODY_T2832OUTBLOCK1>
}


export interface T2833_RESPONSE_BODY_T2833OUTBLOCK {
    date?:  string
    cts_code?:  string
    lastdate?:  string
    nowfutyn?:  string
}


export type T2833_RESPONSE_BODY_T2833OUTBLOCK1_SIGN = '1' | '2' | '3' | '4' | '5';
export interface T2833_RESPONSE_BODY_T2833OUTBLOCK1 {
    date?:  string
    open?:  number
    high?:  number
    low?:  number
    close?:  number
    sign?:  T2833_RESPONSE_BODY_T2833OUTBLOCK1_SIGN
    change?:  number
    diff?:  number
    volume?:  number
    diff_vol?:  number
}


export interface T2833_RESPONSE_BODY {
    t2833OutBlock?:  T2833_RESPONSE_BODY_T2833OUTBLOCK
    t2833OutBlock1?:  Array<T2833_RESPONSE_BODY_T2833OUTBLOCK1>
}


export interface T2835_RESPONSE_BODY_T2835OUTBLOCK1 {
    actprice?:  number
    optcode?:  string
    price?:  number
    sign?:  string
    change?:  number
    diff?:  number
    volume?:  number
    offerho1?:  number
    bidho1?:  number
    cvolume?:  number
    impv?:  number
    timevl?:  number
    offerrem1?:  number
    bidrem1?:  number
    open?:  number
    high?:  number
    low?:  number
    atmgubun?:  string
    jisuconv?:  number
}



export interface T2835_RESPONSE_BODY_T2835OUTBLOCK2 {
    actprice?:  number
    optcode?:  string
    price?:  number
    sign?:  string
    change?:  number
    diff?:  number
    volume?:  number
    offerho1?:  number
    bidho1?:  number
    cvolume?:  number
    impv?:  number
    timevl?:  number
    offerrem1?:  number
    bidrem1?:  number
    open?:  number
    high?:  number
    low?:  number
    atmgubun?:  string
    jisuconv?:  number
}


export interface T2835_RESPONSE_BODY {
    t2835OutBlock1?:  Array<T2835_RESPONSE_BODY_T2835OUTBLOCK1>
    t2835OutBlock2?:  Array<T2835_RESPONSE_BODY_T2835OUTBLOCK2>
}


export interface T8401_RESPONSE_BODY_T8401OUTBLOCK {
    hname?:  string
    shcode?:  string
    expcode?:  string
    basecode?:  string
}


export interface T8401_RESPONSE_BODY {
    t8401OutBlock?:  Array<T8401_RESPONSE_BODY_T8401OUTBLOCK>
}


export interface T8402_RESPONSE_BODY_T8402OUTBLOCK {
    hname?:  string
    price?:  number
    sign?:  string
    change?:  number
    jnilclose?:  number
    diff?:  number
    volume?:  number
    stimeqrt?:  number
    value?:  number
    mgjv?:  number
    mgjvdiff?:  number
    open?:  number
    high?:  number
    low?:  number
    uplmtprice?:  number
    dnlmtprice?:  number
    high52w?:  number
    low52w?:  number
    basis?:  number
    recprice?:  number
    theoryprice?:  number
    glyl?:  number
    lastmonth?:  string
    jandatecnt?:  number
    pricejisu?:  number
    jisusign?:  string
    jisuchange?:  number
    jisudiff?:  number
    kospijisu?:  number
    kospisign?:  string
    kospichange?:  number
    kospidiff?:  number
    listhprice?:  number
    listlprice?:  number
    delt?:  number
    gama?:  number
    ceta?:  number
    vega?:  number
    rhox?:  number
    gmprice?:  number
    gmsign?:  string
    gmchange?:  number
    gmdiff?:  number
    theorypriceg?:  number
    histimpv?:  number
    impv?:  number
    sbasis?:  number
    ibasis?:  number
    gmfutcode?:  string
    actprice?:  number
    shcode?:  string
    basehname?:  string
    baseprice?:  number
    basesign?:  string
    basechange?:  number
    basediff?:  number
    basevol?:  number
    baseprevol?:  number
    basebidprc?:  number
    baseaskprc?:  number
    basefornetbid?:  number
    prodgrp?:  string
    mulcnt?:  number
    danhochk?:  string
    yeprice?:  number
    jnilysign?:  string
    jnilychange?:  number
    jnilydrate?:  number
}


export interface T8402_RESPONSE_BODY {
    t8402OutBlock?:  T8402_RESPONSE_BODY_T8402OUTBLOCK
}


export interface T8403_RESPONSE_BODY_T8403OUTBLOCK {
    hname?:  string
    price?:  number
    sign?:  string
    change?:  number
    diff?:  number
    volume?:  number
    stimeqrt?:  number
    jnilclose?:  number
    offerho1?:  number
    bidho1?:  number
    offerrem1?:  number
    bidrem1?:  number
    dcnt1?:  number
    scnt1?:  number
    offerho2?:  number
    bidho2?:  number
    offerrem2?:  number
    bidrem2?:  number
    dcnt2?:  number
    scnt2?:  number
    offerho3?:  number
    bidho3?:  number
    offerrem3?:  number
    bidrem3?:  number
    dcnt3?:  number
    scnt3?:  number
    offerho4?:  number
    bidho4?:  number
    offerrem4?:  number
    bidrem4?:  number
    dcnt4?:  number
    scnt4?:  number
    offerho5?:  number
    bidho5?:  number
    offerrem5?:  number
    bidrem5?:  number
    dcnt5?:  number
    scnt5?:  number
    offerho6?:  number
    bidho6?:  number
    offerrem6?:  number
    bidrem6?:  number
    dcnt6?:  number
    scnt6?:  number
    offerho7?:  number
    bidho7?:  number
    offerrem7?:  number
    bidrem7?:  number
    dcnt7?:  number
    scnt7?:  number
    offerho8?:  number
    bidho8?:  number
    offerrem8?:  number
    bidrem8?:  number
    dcnt8?:  number
    scnt8?:  number
    offerho9?:  number
    bidho9?:  number
    offerrem9?:  number
    bidrem9?:  number
    dcnt9?:  number
    scnt9?:  number
    offerho10?:  number
    bidho10?:  number
    offerrem10?:  number
    bidrem10?:  number
    dcnt10?:  number
    scnt10?:  number
    dvol?:  number
    svol?:  number
    toffernum?:  number
    tbidnum?:  number
    time?:  string
    shcode?:  string
}


export interface T8403_RESPONSE_BODY {
    t8403OutBlock?:  T8403_RESPONSE_BODY_T8403OUTBLOCK
}


export interface T8404_RESPONSE_BODY_T8404OUTBLOCK {
    cts_time?:  string
}


export type T8404_RESPONSE_BODY_T8404OUTBLOCK1_SIGN = '1' | '2' | '3' | '4' | '5';
export interface T8404_RESPONSE_BODY_T8404OUTBLOCK1 {
    chetime?:  string
    price?:  number
    sign?:  T8404_RESPONSE_BODY_T8404OUTBLOCK1_SIGN
    change?:  number
    cvolume?:  number
    chdegree?:  number
    offerho?:  number
    bidho?:  number
    volume?:  number
    openyak?:  number
    jnilopenupdn?:  number
    ibasis?:  number
    sbasis?:  number
    kasis?:  number
    value?:  number
    j_openupdn?:  number
    n_msvolume?:  number
    n_mdvolume?:  number
    s_msvolume?:  number
    n_mschecnt?:  number
    n_mdchecnt?:  number
    s_mschecnt?:  number
}


export interface T8404_RESPONSE_BODY {
    t8404OutBlock?:  T8404_RESPONSE_BODY_T8404OUTBLOCK
    t8404OutBlock1?:  Array<T8404_RESPONSE_BODY_T8404OUTBLOCK1>
}


export interface T8405_RESPONSE_BODY_T8405OUTBLOCK {
    date?:  string
    cts_code?:  string
    lastdate?:  string
    nowfutyn?:  string
}


export type T8405_RESPONSE_BODY_T8405OUTBLOCK1_SIGN = '1' | '2' | '3' | '4' | '5';
export interface T8405_RESPONSE_BODY_T8405OUTBLOCK1 {
    date?:  string
    open?:  number
    high?:  number
    low?:  number
    close?:  number
    sign?:  T8405_RESPONSE_BODY_T8405OUTBLOCK1_SIGN
    change?:  number
    diff?:  number
    volume?:  number
    diff_vol?:  number
    openyak?:  number
    openyakupdn?:  number
    value?:  number
}


export interface T8405_RESPONSE_BODY {
    t8405OutBlock?:  T8405_RESPONSE_BODY_T8405OUTBLOCK
    t8405OutBlock1?:  Array<T8405_RESPONSE_BODY_T8405OUTBLOCK1>
}

export type T8406_RESPONSE_BODY_T8406OUTBLOCK1_SIGN = '1' | '2' | '3' | '4' | '5';
export interface T8406_RESPONSE_BODY_T8406OUTBLOCK1 {
    chetime?:  string
    price?:  number
    sign?:  T8406_RESPONSE_BODY_T8406OUTBLOCK1_SIGN
    change?:  number
    open?:  number
    high?:  number
    low?:  number
    volume?:  number
    value?:  number
    openyak?:  number
    openupdn?:  number
    cvolume?:  number
    s_mschecnt?:  number
    s_mdchecnt?:  number
    ss_mschecnt?:  number
    s_mschevol?:  number
    s_mdchevol?:  number
    ss_mschevol?:  number
    chdegvol?:  number
    chdegcnt?:  number
}


export interface T8406_RESPONSE_BODY {
    t8406OutBlock1?:  Array<T8406_RESPONSE_BODY_T8406OUTBLOCK1>
}


export interface T8426_RESPONSE_BODY_T8426OUTBLOCK {
    hname?:  string
    shcode?:  string
    expcode?:  string
}


export interface T8426_RESPONSE_BODY {
    t8426OutBlock?:  Array<T8426_RESPONSE_BODY_T8426OUTBLOCK>
}


export interface T8427_RESPONSE_BODY_T8427OUTBLOCK {
    focode?:  string
    date?:  string
    time?:  string
}



export interface T8427_RESPONSE_BODY_T8427OUTBLOCK1 {
    date?:  string
    time?:  string
    open?:  number
    high?:  number
    low?:  number
    close?:  number
    sign?:  string
    change?:  number
    diff?:  number
    volume?:  number
    diff_vol?:  number
    openyak?:  number
    openyakupdn?:  number
    value?:  number
}


export interface T8427_RESPONSE_BODY {
    t8427OutBlock?:  T8427_RESPONSE_BODY_T8427OUTBLOCK
    t8427OutBlock1?:  Array<T8427_RESPONSE_BODY_T8427OUTBLOCK1>
}


export interface T8432_RESPONSE_BODY_T8432OUTBLOCK {
    hname?:  string
    shcode?:  string
    expcode?:  string
    uplmtprice?:  number
    dnlmtprice?:  number
    jnilclose?:  number
    jnilhigh?:  number
    jnillow?:  number
    recprice?:  number
}


export interface T8432_RESPONSE_BODY {
    t8432OutBlock?:  Array<T8432_RESPONSE_BODY_T8432OUTBLOCK>
}


export interface T8433_RESPONSE_BODY_T8433OUTBLOCK {
    hname?:  string
    shcode?:  string
    expcode?:  string
    hprice?:  number
    lprice?:  number
    jnilclose?:  number
    jnilhigh?:  number
    jnillow?:  number
    recprice?:  number
}


export interface T8433_RESPONSE_BODY {
    t8433OutBlock?:  Array<T8433_RESPONSE_BODY_T8433OUTBLOCK>
}


export interface T8434_RESPONSE_BODY_T8434OUTBLOCK1 {
    hname?:  string
    price?:  number
    sign?:  string
    change?:  number
    diff?:  number
    volume?:  number
    checnt?:  number
    focode?:  string
}


export interface T8434_RESPONSE_BODY {
    t8434OutBlock1?:  Array<T8434_RESPONSE_BODY_T8434OUTBLOCK1>
}


export interface T8435_RESPONSE_BODY_T8435OUTBLOCK {
    hname?:  string
    shcode?:  string
    expcode?:  string
    uplmtprice?:  number
    dnlmtprice?:  number
    jnilclose?:  number
    jnilhigh?:  number
    jnillow?:  number
    recprice?:  number
}


export interface T8435_RESPONSE_BODY {
    t8435OutBlock?:  Array<T8435_RESPONSE_BODY_T8435OUTBLOCK>
}


export interface T8437_RESPONSE_BODY_T8437OUTBLOCK {
    hname?:  string
    shcode?:  string
    expcode?:  string
    tradeunit?:  number
    atmgb?:  string
}


export interface T8437_RESPONSE_BODY {
    t8437OutBlock?:  Array<T8437_RESPONSE_BODY_T8437OUTBLOCK>
}


export interface T9943_RESPONSE_BODY_T9943OUTBLOCK {
    hname?:  string
    shcode?:  string
    expcode?:  string
}


export interface T9943_RESPONSE_BODY {
    t9943OutBlock?:  Array<T9943_RESPONSE_BODY_T9943OUTBLOCK>
}


export interface T9944_RESPONSE_BODY_T9944OUTBLOCK {
    hname?:  string
    shcode?:  string
    expcode?:  string
}


export interface T9944_RESPONSE_BODY {
    t9944OutBlock?:  Array<T9944_RESPONSE_BODY_T9944OUTBLOCK>
}


export interface T2541_RESPONSE_BODY_T2541OUTBLOCK {
    eitem?:  string
    sgubun?:  string
    cts_time?:  string
    tjjcode_08?:  string
    ms_08?:  number
    md_08?:  number
    rate_08?:  number
    svolume_08?:  number
    jjcode_17?:  string
    ms_17?:  number
    md_17?:  number
    rate_17?:  number
    svolume_17?:  number
    jjcode_18?:  string
    ms_18?:  number
    md_18?:  number
    rate_18?:  number
    svolume_18?:  number
    jjcode_01?:  string
    ms_01?:  number
    md_01?:  number
    rate_01?:  number
    svolume_01?:  number
    jjcode_03?:  string
    ms_03?:  number
    md_03?:  number
    rate_03?:  number
    svolume_03?:  number
    jjcode_04?:  string
    ms_04?:  number
    md_04?:  number
    rate_04?:  number
    svolume_04?:  number
    jjcode_02?:  string
    ms_02?:  number
    md_02?:  number
    rate_02?:  number
    svolume_02?:  number
    jjcode_05?:  string
    ms_05?:  number
    md_05?:  number
    rate_05?:  number
    svolume_05?:  number
    jjcode_06?:  string
    ms_06?:  number
    md_06?:  number
    rate_06?:  number
    svolume_06?:  number
    jjcode_07?:  string
    ms_07?:  number
    md_07?:  number
    rate_07?:  number
    svolume_07?:  number
    jjcode_11?:  string
    ms_11?:  number
    md_11?:  number
    rate_11?:  number
    svolume_11?:  number
    jjcode_00?:  string
    ms_00?:  number
    md_00?:  number
    rate_00?:  number
    svolume_00?:  number
}



export interface T2541_RESPONSE_BODY_T2541OUTBLOCK1 {
    time?:  string
    sv_08?:  number
    sv_17?:  number
    sv_18?:  number
    sv_01?:  number
    sv_03?:  number
    sv_04?:  number
    sv_02?:  number
    sv_05?:  number
    sv_06?:  number
    sv_07?:  number
    sv_11?:  number
    sv_00?:  number
}


export interface T2541_RESPONSE_BODY {
    t2541OutBlock?:  T2541_RESPONSE_BODY_T2541OUTBLOCK
    t2541OutBlock1?:  Array<T2541_RESPONSE_BODY_T2541OUTBLOCK1>
}


export interface T2545_RESPONSE_BODY_T2545OUTBLOCK {
    eitem?:  string
    sgubun?:  string
    indcode?:  string
    forcode?:  string
    syscode?:  string
    stocode?:  string
    invcode?:  string
    bancode?:  string
    inscode?:  string
    fincode?:  string
    moncode?:  string
    etccode?:  string
    natcode?:  string
    pefcode?:  string
    jisucd?:  string
    jisunm?:  string
}



export interface T2545_RESPONSE_BODY_T2545OUTBLOCK1 {
    date?:  string
    time?:  string
    datetime?:  string
    indmsvol?:  number
    indmsamt?:  number
    formsvol?:  number
    formsamt?:  number
    sysmsvol?:  number
    sysmsamt?:  number
    stomsvol?:  number
    stomsamt?:  number
    invmsvol?:  number
    invmsamt?:  number
    banmsvol?:  number
    banmsamt?:  number
    insmsvol?:  number
    insmsamt?:  number
    finmsvol?:  number
    finmsamt?:  number
    monmsvol?:  number
    monmsamt?:  number
    etcmsvol?:  number
    etcmsamt?:  number
    natmsvol?:  number
    natmsamt?:  number
    pefmsvol?:  number
    pefmsamt?:  number
    upclose?:  number
    upcvolume?:  number
    upvolume?:  number
    upvalue?:  number
}


export interface T2545_RESPONSE_BODY {
    t2545OutBlock?:  T2545_RESPONSE_BODY_T2545OUTBLOCK
    t2545OutBlock1?:  Array<T2545_RESPONSE_BODY_T2545OUTBLOCK1>
}


export interface T2209_RESPONSE_BODY_T2209OUTBLOCK1 {
    chetime?:  string
    price?:  number
    sign?:  string
    change?:  number
    open?:  number
    high?:  number
    low?:  number
    volume?:  number
    value?:  number
    openyak?:  number
    openupdn?:  number
    cvolume?:  number
    s_mschecnt?:  number
    s_mdchecnt?:  number
    ss_mschecnt?:  number
    s_mschevol?:  number
    s_mdchevol?:  number
    ss_mschevol?:  number
    chdegvol?:  number
    chdegcnt?:  number
}


export interface T2209_RESPONSE_BODY {
    t2209OutBlock1?:  Array<T2209_RESPONSE_BODY_T2209OUTBLOCK1>
}


export interface T8414_RESPONSE_BODY_T8414OUTBLOCK {
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
    cts_time?:  string
    s_time?:  string
    e_time?:  string
    dshmin?:  string
    rec_count?:  number
}



export interface T8414_RESPONSE_BODY_T8414OUTBLOCK1 {
    date?:  string
    time?:  string
    open?:  number
    high?:  number
    low?:  number
    close?:  number
    jdiff_vol?:  number
    openyak?:  number
}


export interface T8414_RESPONSE_BODY {
    t8414OutBlock?:  T8414_RESPONSE_BODY_T8414OUTBLOCK
    t8414OutBlock1?:  Array<T8414_RESPONSE_BODY_T8414OUTBLOCK1>
}


export interface T8415_RESPONSE_BODY_T8415OUTBLOCK {
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
    cts_time?:  string
    s_time?:  string
    e_time?:  string
    dshmin?:  string
    rec_count?:  number
}



export interface T8415_RESPONSE_BODY_T8415OUTBLOCK1 {
    date?:  string
    time?:  string
    open?:  number
    high?:  number
    low?:  number
    close?:  number
    jdiff_vol?:  number
    value?:  number
    openyak?:  number
}


export interface T8415_RESPONSE_BODY {
    t8415OutBlock?:  T8415_RESPONSE_BODY_T8415OUTBLOCK
    t8415OutBlock1?:  Array<T8415_RESPONSE_BODY_T8415OUTBLOCK1>
}


export interface T8416_RESPONSE_BODY_T8416OUTBLOCK {
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
}



export interface T8416_RESPONSE_BODY_T8416OUTBLOCK1 {
    date?:  string
    open?:  number
    high?:  number
    low?:  number
    close?:  number
    jdiff_vol?:  number
    value?:  number
    openyak?:  number
}


export interface T8416_RESPONSE_BODY {
    t8416OutBlock?:  T8416_RESPONSE_BODY_T8416OUTBLOCK
    t8416OutBlock1?:  Array<T8416_RESPONSE_BODY_T8416OUTBLOCK1>
}


export interface T8429_RESPONSE_BODY_T8429OUTBLOCK1 {
    chetime?:  string
    price?:  number
    sign?:  string
    change?:  number
    open?:  number
    high?:  number
    low?:  number
    volume?:  number
    cvolume?:  number
    s_mschecnt?:  number
    s_mdchecnt?:  number
    ss_mschecnt?:  number
    s_mschevol?:  number
    s_mdchevol?:  number
    ss_mschevol?:  number
    chdegvol?:  number
    chdegcnt?:  number
}


export interface T8429_RESPONSE_BODY {
    t8429OutBlock1?:  Array<T8429_RESPONSE_BODY_T8429OUTBLOCK1>
}


export interface CFOAQ00600_RESPONSE_BODY_CFOAQ00600OUTBLOCK1 {
    RecCnt?:  number
    AcntNo?:  string
    InptPwd?:  string
    QrySrtDt?:  string
    QryEndDt?:  string
    FnoClssCode?:  string
    PrdgrpCode?:  string
    PrdtExecTpCode?:  string
    StnlnSeqTp?:  string
    CommdaCode?:  string
}



export interface CFOAQ00600_RESPONSE_BODY_CFOAQ00600OUTBLOCK2 {
    RecCnt?:  number
    AcntNm?:  string
    FutsOrdQty?:  number
    FutsExecQty?:  number
    OptOrdQty?:  number
    OptExecQty?:  number
}



export interface CFOAQ00600_RESPONSE_BODY_CFOAQ00600OUTBLOCK3 {
    OrdDt?:  string
    OrdNo?:  number
    OrgOrdNo?:  number
    OrdTime?:  string
    FnoIsuNo?:  string
    IsuNm?:  string
    BnsTpNm?:  string
    MrcTpNm?:  string
    FnoOrdprcPtnCode?:  string
    FnoOrdprcPtnNm?:  string
    OrdPrc?:  number
    OrdQty?:  number
    OrdTpNm?:  string
    ExecTpNm?:  string
    ExecPrc?:  number
    ExecQty?:  number
    CtrctTime?:  string
    CtrctNo?:  number
    ExecNo?:  number
    BnsplAmt?:  number
    UnercQty?:  number
    UserId?:  string
    CommdaCode?:  string
    CommdaCodeNm?:  string
}


export interface CFOAQ00600_RESPONSE_BODY {
    CFOAQ00600OutBlock1?:  CFOAQ00600_RESPONSE_BODY_CFOAQ00600OUTBLOCK1
    CFOAQ00600OutBlock2?:  CFOAQ00600_RESPONSE_BODY_CFOAQ00600OUTBLOCK2
    CFOAQ00600OutBlock3?:  Array<CFOAQ00600_RESPONSE_BODY_CFOAQ00600OUTBLOCK3>
}


export interface CFOAQ50600_RESPONSE_BODY_CFOAQ50600OUTBLOCK1 {
    RecCnt?:  number
    LqdtQtyQryTp?:  string
    FutsPrcEvalTp?:  string
    BalEvalTp?:  string
    OrdDt?:  string
    InptPwd?:  string
    AcntNo?:  string
}



export interface CFOAQ50600_RESPONSE_BODY_CFOAQ50600OUTBLOCK2 {
    RecCnt?:  number
    EvalRat?:  string
    BaseEvalAmt?:  number
    NetPnlAmt?:  number
    TotPnlAmt?:  number
    OptBnsAmt?:  number
    FutsAdjstDfamt?:  number
    OptBnsplAmt?:  number
    OptEvalAmt?:  number
    OptEvalPnlAmt?:  number
    FutsEvalPnlAmt?:  number
    RcvblOdpnt?:  number
    RcvblAmt?:  number
    CmsnAmt?:  number
    MnyAddMgn?:  number
    AddMgnTotamt?:  number
    MnyMaintMgn?:  number
    MtmgnTotamt?:  number
    MnyCsgnMgn?:  number
    CsgnMgnTotamt?:  number
    MnyOrdAbleAmt?:  number
    OrdAbleTotAmt?:  number
    PsnOutAbleSubstAmt?:  number
    PsnOutAbleCurAmt?:  number
    PsnOutAbleTotAmt?:  number
    FcurrSubstAmt?:  number
    DpstgSubst?:  number
    DpstgMny?:  number
    DpsamtTotamt?:  number
    MnyEvalDpstgAmt?:  number
    EvalDpsamtTotamt?:  number
    AcntNm?:  string
    AcntEvalRat?:  string
}



export interface CFOAQ50600_RESPONSE_BODY_CFOAQ50600OUTBLOCK3 {
    FnoIsuNo?:  number
    BnsplAmt?:  number
    LqdtAbleQty?:  number
    EvalRat?:  string
    EvalPnl?:  number
    EvalAmt?:  number
    FnoCmpPrc?:  string
    PnlRat?:  string
    FnoNowPrc?:  string
    FnoAvrPrc?:  string
    UnsttQty?:  number
    BnsTpNm?:  string
    BnsTpCode?:  string
    IsuNm?:  string
}


export interface CFOAQ50600_RESPONSE_BODY {
    CFOAQ50600OutBlock1?:  CFOAQ50600_RESPONSE_BODY_CFOAQ50600OUTBLOCK1
    CFOAQ50600OutBlock2?:  CFOAQ50600_RESPONSE_BODY_CFOAQ50600OUTBLOCK2
    CFOAQ50600OutBlock3?:  CFOAQ50600_RESPONSE_BODY_CFOAQ50600OUTBLOCK3
}


export interface CFOAQ10100_RESPONSE_BODY_CFOAQ10100OUTBLOCK1 {
    RecCnt?:  number
    AcntNo?:  string
    Pwd?:  string
    QryTp?:  string
    OrdAmt?:  number
    RatVal?:  number
    FnoIsuNo?:  string
    BnsTpCode?:  string
    FnoOrdPrc?:  number
    FnoOrdprcPtnCode?:  string
}



export interface CFOAQ10100_RESPONSE_BODY_CFOAQ10100OUTBLOCK2 {
    RecCnt?:  number
    AcntNm?:  string
    QryDt?:  string
    FnoNowPrc?:  number
    OrdAbleQty?:  number
    NewOrdAbleQty?:  number
    LqdtOrdAbleQty?:  number
    UsePreargMgn?:  number
    UsePreargMnyMgn?:  number
    OrdAbleAmt?:  number
    MnyOrdAbleAmt?:  number
}


export interface CFOAQ10100_RESPONSE_BODY {
    CFOAQ10100OutBlock1?:  CFOAQ10100_RESPONSE_BODY_CFOAQ10100OUTBLOCK1
    CFOAQ10100OutBlock2?:  CFOAQ10100_RESPONSE_BODY_CFOAQ10100OUTBLOCK2
}


export interface CFOBQ10500_RESPONSE_BODY_CFOBQ10500OUTBLOCK1 {
    RecCnt?:  number
    AcntNo?:  string
    Pwd?:  string
}



export interface CFOBQ10500_RESPONSE_BODY_CFOBQ10500OUTBLOCK2 {
    RecCnt?:  number
    AcntNm?:  string
    DpsamtTotamt?:  number
    Dps?:  number
    SubstAmt?:  number
    FilupDpsamtTotamt?:  number
    FilupDps?:  number
    FutsPnlAmt?:  number
    WthdwAbleAmt?:  number
    PsnOutAbleCurAmt?:  number
    PsnOutAbleSubstAmt?:  number
    Mgn?:  number
    MnyMgn?:  number
    OrdAbleAmt?:  number
    MnyOrdAbleAmt?:  number
    AddMgn?:  number
    MnyAddMgn?:  number
    AmtPrdayChckInAmt?:  number
    FnoPrdaySubstSellAmt?:  number
    FnoCrdaySubstSellAmt?:  number
    FnoPrdayFdamt?:  number
    FnoCrdayFdamt?:  number
    FcurrSubstAmt?:  number
    FnoAcntAfmgnNm?:  string
}



export interface CFOBQ10500_RESPONSE_BODY_CFOBQ10500OUTBLOCK3 {
    PdGrpCodeNm?:  string
    NetRiskMgn?:  number
    PrcMgn?:  number
    SprdMgn?:  number
    PrcFlctMgn?:  number
    MinMgn?:  number
    OrdMgn?:  number
    OptNetBuyAmt?:  number
    CsgnMgn?:  number
    MaintMgn?:  number
    FutsBuyExecAmt?:  number
    FutsSellExecAmt?:  number
    OptBuyExecAmt?:  number
    OptSellExecAmt?:  number
    FutsPnlAmt?:  number
    TotRiskCsgnMgn?:  number
    UndCsgnMgn?:  number
    MgnRdctAmt?:  number
}


export interface CFOBQ10500_RESPONSE_BODY {
    CFOBQ10500OutBlock1?:  CFOBQ10500_RESPONSE_BODY_CFOBQ10500OUTBLOCK1
    CFOBQ10500OutBlock2?:  CFOBQ10500_RESPONSE_BODY_CFOBQ10500OUTBLOCK2
    CFOBQ10500OutBlock3?:  Array<CFOBQ10500_RESPONSE_BODY_CFOBQ10500OUTBLOCK3>
}


export interface CFOEQ11100_RESPONSE_BODY_CFOEQ11100OUTBLOCK1 {
    RecCnt?:  number
    AcntNo?:  string
    Pwd?:  string
    BnsDt?:  string
}



export interface CFOEQ11100_RESPONSE_BODY_CFOEQ11100OUTBLOCK2 {
    RecCnt?:  number
    AcntNm?:  string
    OpnmkDpsamtTotamt?:  number
    OpnmkDps?:  number
    OpnmkMnyrclAmt?:  number
    OpnmkSubstAmt?:  number
    TotAmt?:  number
    Dps?:  number
    MnyrclAmt?:  number
    SubstDsgnAmt?:  number
    CsgnMgn?:  number
    MnyCsgnMgn?:  number
    MaintMgn?:  number
    MnyMaintMgn?:  number
    OutAbleAmt?:  number
    MnyoutAbleAmt?:  number
    SubstOutAbleAmt?:  number
    OrdAbleAmt?:  number
    MnyOrdAbleAmt?:  number
    AddMgnOcrTpCode?:  string
    AddMgn?:  number
    MnyAddMgn?:  number
    NtdayTotAmt?:  number
    NtdayDps?:  number
    NtdayMnyrclAmt?:  number
    NtdaySubstAmt?:  number
    NtdayCsgnMgn?:  number
    NtdayMnyCsgnMgn?:  number
    NtdayMaintMgn?:  number
    NtdayMnyMaintMgn?:  number
    NtdayOutAbleAmt?:  number
    NtdayMnyoutAbleAmt?:  number
    NtdaySubstOutAbleAmt?:  number
    NtdayOrdAbleAmt?:  number
    NtdayMnyOrdAbleAmt?:  number
    NtdayAddMgnTp?:  string
    NtdayAddMgn?:  number
    NtdayMnyAddMgn?:  number
    NtdaySettAmt?:  number
    EvalDpsamtTotamt?:  number
    MnyEvalDpstgAmt?:  number
    DpsamtUtlfeeGivPrergAmt?:  number
    TaxAmt?:  number
    CsgnMgnrat?:  number
    CsgnMnyMgnrat?:  number
    DpstgTotamtLackAmt?:  number
    DpstgMnyLackAmt?:  number
    RealInAmt?:  number
    InAmt?:  number
    OutAmt?:  number
    FutsAdjstDfamt?:  number
    FutsThdayDfamt?:  number
    FutsUpdtDfamt?:  number
    FutsLastSettDfamt?:  number
    OptSettDfamt?:  number
    OptBuyAmt?:  number
    OptSellAmt?:  number
    OptXrcDfamt?:  number
    OptAsgnDfamt?:  number
    RealGdsUndAmt?:  number
    RealGdsUndAsgnAmt?:  number
    RealGdsUndXrcAmt?:  number
    CmsnAmt?:  number
    FutsCmsn?:  number
    OptCmsn?:  number
    FutsCtrctQty?:  number
    FutsCtrctAmt?:  number
    OptCtrctQty?:  number
    OptCtrctAmt?:  number
    FutsUnsttQty?:  number
    FutsUnsttAmt?:  number
    OptUnsttQty?:  number
    OptUnsttAmt?:  number
    FutsBuyUnsttQty?:  number
    FutsBuyUnsttAmt?:  number
    FutsSellUnsttQty?:  number
    FutsSellUnsttAmt?:  number
    OptBuyUnsttQty?:  number
    OptBuyUnsttAmt?:  number
    OptSellUnsttQty?:  number
    OptSellUnsttAmt?:  number
    FutsBuyctrQty?:  number
    FutsBuyctrAmt?:  number
    FutsSlctrQty?:  number
    FutsSlctrAmt?:  number
    OptBuyctrQty?:  number
    OptBuyctrAmt?:  number
    OptSlctrQty?:  number
    OptSlctrAmt?:  number
    FutsBnsplAmt?:  number
    OptBnsplAmt?:  number
    FutsEvalPnlAmt?:  number
    OptEvalPnlAmt?:  number
    FutsEvalAmt?:  number
    OptEvalAmt?:  number
    MktEndAfMnyInAmt?:  number
    MktEndAfMnyOutAmt?:  number
    MktEndAfSubstDsgnAmt?:  number
    MktEndAfSubstAbndAmt?:  number
}


export interface CFOEQ11100_RESPONSE_BODY {
    CFOEQ11100OutBlock1?:  CFOEQ11100_RESPONSE_BODY_CFOEQ11100OUTBLOCK1
    CFOEQ11100OutBlock2?:  CFOEQ11100_RESPONSE_BODY_CFOEQ11100OUTBLOCK2
}


export interface CFOEQ82600_RESPONSE_BODY_CFOEQ82600OUTBLOCK1 {
    RecCnt?:  number
    AcntNo?:  string
    Pwd?:  string
    QrySrtDt?:  string
    QryEndDt?:  string
    QryTp?:  string
    StnlnSeqTp?:  string
    FnoBalEvalTpCode?:  string
}



export interface CFOEQ82600_RESPONSE_BODY_CFOEQ82600OUTBLOCK2 {
    RecCnt?:  number
    FutsAdjstDfamt?:  number
    OptBnsplAmt?:  number
    FnoCmsnAmt?:  number
    PnlSumAmt?:  number
    MnyinSumAmt?:  number
    MnyoutSumAmt?:  number
    AcntNm?:  string
}



export interface CFOEQ82600_RESPONSE_BODY_CFOEQ82600OUTBLOCK3 {
    QryDt?:  string
    DpstgTotamt?:  number
    DpstgMny?:  number
    FnoMgn?:  number
    FutsPnlAmt?:  number
    OptBsnPnlAmt?:  number
    OptEvalPnlAmt?:  number
    CmsnAmt?:  number
    SumAmt1?:  number
    SumAmt2?:  number
    PnlSumAmt?:  number
    FutsBuyAmt?:  number
    FutsSellAmt?:  number
    OptBuyAmt?:  number
    OptSellAmt?:  number
    InAmt?:  number
    OutAmt?:  number
    EvalAmt?:  number
    AddupEvalAmt?:  number
    Amt2?:  number
}


export interface CFOEQ82600_RESPONSE_BODY {
    CFOEQ82600OutBlock1?:  CFOEQ82600_RESPONSE_BODY_CFOEQ82600OUTBLOCK1
    CFOEQ82600OutBlock2?:  CFOEQ82600_RESPONSE_BODY_CFOEQ82600OUTBLOCK2
    CFOEQ82600OutBlock3?:  Array<CFOEQ82600_RESPONSE_BODY_CFOEQ82600OUTBLOCK3>
}


export interface CFOFQ02400_RESPONSE_BODY_CFOFQ02400OUTBLOCK1 {
    RecCnt?:  number
    AcntNo?:  string
    Pwd?:  string
    RegMktCode?:  string
    BuyDt?:  string
}



export interface CFOFQ02400_RESPONSE_BODY_CFOFQ02400OUTBLOCK2 {
    RecCnt?:  number
    AcntNm?:  string
    FutsCtrctQty?:  number
    OptCtrctQty?:  number
    CtrctQty?:  number
    FutsCtrctAmt?:  number
    FutsBuyctrAmt?:  number
    FutsSlctrAmt?:  number
    CalloptCtrctAmt?:  number
    CallBuyAmt?:  number
    CallSellAmt?:  number
    PutoptCtrctAmt?:  number
    PutBuyAmt?:  number
    PutSellAmt?:  number
    AllCtrctAmt?:  number
    BuyctrAsmAmt?:  number
    SlctrAsmAmt?:  number
    FutsPnlSum?:  number
    OptPnlSum?:  number
    AllPnlSum?:  number
}



export interface CFOFQ02400_RESPONSE_BODY_CFOFQ02400OUTBLOCK3 {
    FnoClssCode?:  string
    FutsSellQty?:  number
    FutsSellPnl?:  number
    FutsBuyQty?:  number
    FutsBuyPnl?:  number
    CallSellQty?:  number
    CallSellPnl?:  number
    CallBuyQty?:  number
    CallBuyPnl?:  number
    PutSellQty?:  number
    PutSellPnl?:  number
    PutBuyQty?:  number
    PutBuyPnl?:  number
}



export interface CFOFQ02400_RESPONSE_BODY_CFOFQ02400OUTBLOCK4 {
    IsuNo?:  string
    IsuNm?:  string
    BnsTpCode?:  string
    BnsTpNm?:  string
    BalQty?:  number
    FnoAvrPrc?:  number
    BgnAmt?:  number
    ThdayLqdtQty?:  number
    Curprc?:  number
    EvalAmt?:  number
    EvalPnlAmt?:  number
    EvalErnrat?:  number
}


export interface CFOFQ02400_RESPONSE_BODY {
    CFOFQ02400OutBlock1?:  CFOFQ02400_RESPONSE_BODY_CFOFQ02400OUTBLOCK1
    CFOFQ02400OutBlock2?:  CFOFQ02400_RESPONSE_BODY_CFOFQ02400OUTBLOCK2
    CFOFQ02400OutBlock3?:  Array<CFOFQ02400_RESPONSE_BODY_CFOFQ02400OUTBLOCK3>
    CFOFQ02400OutBlock4?:  Array<CFOFQ02400_RESPONSE_BODY_CFOFQ02400OUTBLOCK4>
}


export interface T0434_RESPONSE_BODY_T0434OUTBLOCK {
    cts_ordno?:  string
}



export interface T0434_RESPONSE_BODY_T0434OUTBLOCK1 {
    ordno?:  number
    orgordno?:  number
    medosu?:  string
    ordgb?:  string
    qty?:  number
    price?:  number
    cheqty?:  number
    cheprice?:  number
    ordrem?:  number
    status?:  string
    ordtime?:  string
    ordermtd?:  string
    expcode?:  string
    rtcode?:  string
    sysprocseq?:  number
    hogatype?:  string
}


export interface T0434_RESPONSE_BODY {
    t0434OutBlock?:  T0434_RESPONSE_BODY_T0434OUTBLOCK
    t0434OutBlock1?:  Array<T0434_RESPONSE_BODY_T0434OUTBLOCK1>
}


export interface T0441_RESPONSE_BODY_T0441OUTBLOCK {
    tdtsunik?:  number
    cts_expcode?:  string
    cts_medocd?:  string
    tappamt?:  number
    tsunik?:  number
}



export interface T0441_RESPONSE_BODY_T0441OUTBLOCK1 {
    expcode?:  string
    medosu?:  string
    jqty?:  number
    cqty?:  number
    pamt?:  number
    mamt?:  number
    medocd?:  string
    dtsunik?:  number
    sysprocseq?:  number
    price?:  number
    appamt?:  number
    dtsunik1?:  number
    sunikrt?:  number
}


export interface T0441_RESPONSE_BODY {
    t0441OutBlock?:  T0441_RESPONSE_BODY_T0441OUTBLOCK
    t0441OutBlock1?:  Array<T0441_RESPONSE_BODY_T0441OUTBLOCK1>
}


export interface CEXAQ21100_RESPONSE_BODY_CEXAQ21100OUTBLOCK1 {
    RecCnt?:  number
    ChoicInptTpCode?:  string
    AcntNo?:  string
    Pwd?:  string
    PrdtExecTpCode?:  string
    StnlnSeqTp?:  string
}



export interface CEXAQ21100_RESPONSE_BODY_CEXAQ21100OUTBLOCK2 {
    RecCnt?:  number
    AcntNm?:  string
    OrdQty?:  number
    ExecQty?:  number
}



export interface CEXAQ21100_RESPONSE_BODY_CEXAQ21100OUTBLOCK3 {
    AcntNo1?:  string
    OrdDt?:  string
    OrdNo?:  number
    OrgOrdNo?:  number
    OrdTime?:  string
    FnoIsuNo?:  string
    IsuNm?:  string
    BnsTpNm?:  string
    BnsTpCode?:  string
    MrcTpNm?:  string
    ErxPrcCndiTpCode?:  string
    FnoOrdprcPtnNm?:  string
    OrdCndiPrc?:  number
    OrdPrc?:  number
    OrdQty?:  number
    OrdTpNm?:  string
    ExecPrc?:  number
    ExecQty?:  number
    UnercQty?:  number
    CommdaCode?:  string
    CommdaNm?:  string
}


export interface CEXAQ21100_RESPONSE_BODY {
    CEXAQ21100OutBlock1?:  CEXAQ21100_RESPONSE_BODY_CEXAQ21100OUTBLOCK1
    CEXAQ21100OutBlock2?:  CEXAQ21100_RESPONSE_BODY_CEXAQ21100OUTBLOCK2
    CEXAQ21100OutBlock3?:  Array<CEXAQ21100_RESPONSE_BODY_CEXAQ21100OUTBLOCK3>
}


export interface CEXAQ21200_RESPONSE_BODY_CEXAQ21200OUTBLOCK1 {
    RecCnt?:  number
    AcntNo?:  string
    Pwd?:  string
    QryTp?:  string
    OrdAmt?:  number
    RatVal?:  number
    FnoIsuNo?:  string
    BnsTpCode?:  string
    OrdPrc?:  number
    ErxPrcCndiTpCode?:  string
}



export interface CEXAQ21200_RESPONSE_BODY_CEXAQ21200OUTBLOCK2 {
    RecCnt?:  number
    AcntNm?:  string
    QryDt?:  string
    NowPrc?:  number
    OrdAbleQty?:  number
    NewOrdAbleQty?:  number
    LqdtOrdAbleQty?:  number
    UsePreargMgn?:  number
    UsePreargMnyMgn?:  number
    OrdAbleAmt?:  number
    MnyOrdAbleAmt?:  number
}


export interface CEXAQ21200_RESPONSE_BODY {
    CEXAQ21200OutBlock1?:  CEXAQ21200_RESPONSE_BODY_CEXAQ21200OUTBLOCK1
    CEXAQ21200OutBlock2?:  CEXAQ21200_RESPONSE_BODY_CEXAQ21200OUTBLOCK2
}


export interface CEXAQ31100_RESPONSE_BODY_CEXAQ31100OUTBLOCK1 {
    RecCnt?:  number
    AcntNo?:  string
    InptPwd?:  string
    IsuCode?:  string
    BalEvalTp?:  string
    FutsPrcEvalTp?:  string
}



export interface CEXAQ31100_RESPONSE_BODY_CEXAQ31100OUTBLOCK2 {
    RecCnt?:  number
    AcntNo?:  string
    AcntNm?:  string
    BnsplAmt?:  number
    AdjstDfamt?:  number
    TotEvalAmt?:  number
    TotPnlAmt?:  number
}



export interface CEXAQ31100_RESPONSE_BODY_CEXAQ31100OUTBLOCK3 {
    FnoIsuNo?:  string
    IsuNm?:  string
    BnsTpCode?:  string
    BnsTpNm?:  string
    UnsttQty?:  number
    LqdtAbleQty?:  number
    FnoAvrPrc?:  number
    BasePrc?:  number
    NowPrc?:  number
    CmpPrc?:  number
    EvalAmt?:  number
    EvalPnl?:  number
    PnlRat?:  number
    UnsttAmt?:  number
    BnsplAmt?:  number
}


export interface CEXAQ31100_RESPONSE_BODY {
    CEXAQ31100OutBlock1?:  CEXAQ31100_RESPONSE_BODY_CEXAQ31100OUTBLOCK1
    CEXAQ31100OutBlock2?:  CEXAQ31100_RESPONSE_BODY_CEXAQ31100OUTBLOCK2
    CEXAQ31100OutBlock3?:  Array<CEXAQ31100_RESPONSE_BODY_CEXAQ31100OUTBLOCK3>
}


export interface CEXAQ31200_RESPONSE_BODY_CEXAQ31200OUTBLOCK1 {
    RecCnt?:  number
    AcntNo?:  string
    InptPwd?:  string
    BalEvalTp?:  string
    FutsPrcEvalTp?:  string
}



export interface CEXAQ31200_RESPONSE_BODY_CEXAQ31200OUTBLOCK2 {
    RecCnt?:  number
    AcntNo?:  string
    AcntNm?:  string
    EvalDpsamtTotamt?:  number
    MnyEvalDpstgAmt?:  number
    DpsamtTotamt?:  number
    DpstgMny?:  number
    PsnOutAbleTotAmt?:  number
    PsnOutAbleCurAmt?:  number
    OrdAbleTotAmt?:  number
    MnyOrdAbleAmt?:  number
    CsgnMgnTotamt?:  number
    MnyCsgnMgn?:  number
    AddMgnTotamt?:  number
    MnyAddMgn?:  number
    CmsnAmt?:  number
    FutsEvalPnlAmt?:  number
    OptEvalPnlAmt?:  number
    OptEvalAmt?:  number
    OptBnsplAmt?:  number
    FutsAdjstDfamt?:  number
    TotPnlAmt?:  number
    NetPnlAmt?:  number
    TotEvalAmt?:  number
    MnyinAmt?:  number
    MnyoutAmt?:  number
    FutsCmsnAmt?:  number
}



export interface CEXAQ31200_RESPONSE_BODY_CEXAQ31200OUTBLOCK3 {
    FnoIsuNo?:  string
    IsuNm?:  string
    BnsTpCode?:  string
    BnsTpNm?:  string
    UnsttQty?:  number
    FnoAvrPrc?:  number
    NowPrc?:  number
    CmpPrc?:  number
    EvalPnl?:  number
    PnlRat?:  number
    EvalAmt?:  number
    LqdtAbleQty?:  number
}


export interface CEXAQ31200_RESPONSE_BODY {
    CEXAQ31200OutBlock1?:  CEXAQ31200_RESPONSE_BODY_CEXAQ31200OUTBLOCK1
    CEXAQ31200OutBlock2?:  CEXAQ31200_RESPONSE_BODY_CEXAQ31200OUTBLOCK2
    CEXAQ31200OutBlock3?:  Array<CEXAQ31200_RESPONSE_BODY_CEXAQ31200OUTBLOCK3>
}


export interface CEXAQ44200_RESPONSE_BODY_CEXAQ44200OUTBLOCK1 {
    RecCnt?:  number
    ChoicInptTpCode?:  string
    AcntNo?:  string
    Pwd?:  string
    QrySrtDt?:  string
    QryEndDt?:  string
    PrdtExecTpCode?:  string
    FnoTrdPtnCode?:  string
    SrtOrdNo2?:  number
    StnlnSeqTp?:  string
}



export interface CEXAQ44200_RESPONSE_BODY_CEXAQ44200OUTBLOCK2 {
    RecCnt?:  number
    OrdQty?:  number
    ExecQty?:  number
    UnercQty?:  number
    ExecPrc?:  number
}



export interface CEXAQ44200_RESPONSE_BODY_CEXAQ44200OUTBLOCK3 {
    AcntNo1?:  string
    AcntNm?:  string
    OrdDt?:  string
    OrdNo?:  number
    OrgOrdNo?:  number
    OrdTime?:  string
    IsuNo?:  string
    IsuNm?:  string
    BnsTpNm?:  string
    BnsTpCode?:  string
    ErxOrdprcTpCode?:  string
    MrcTpNm?:  string
    ErxPrcCndiTpCode?:  string
    CodeNm?:  string
    OrdPrc?:  number
    OrdQty?:  number
    FnoRjtRsnCode?:  string
    OrdTpNm?:  string
    ExecTpNm?:  string
    ExecPrc?:  number
    ExecQty?:  number
    ExecTime?:  string
    ExecNo?:  number
    UnercQty?:  number
    UserId?:  string
    CommdaCode?:  string
    CommdaCodeNm?:  string
    IpAddr?:  string
    TrdPtnTpNm?:  string
    ErxOrdStatCode?:  string
    CodeNm0?:  string
    ExchRcptTime?:  string
}


export interface CEXAQ44200_RESPONSE_BODY {
    CEXAQ44200OutBlock1?:  CEXAQ44200_RESPONSE_BODY_CEXAQ44200OUTBLOCK1
    CEXAQ44200OutBlock2?:  CEXAQ44200_RESPONSE_BODY_CEXAQ44200OUTBLOCK2
    CEXAQ44200OutBlock3?:  Array<CEXAQ44200_RESPONSE_BODY_CEXAQ44200OUTBLOCK3>
}


export interface FOCCQ33700_RESPONSE_BODY_FOCCQ33700OUTBLOCK1 {
    RecCnt?:  number
    AcntNo?:  string
    Pwd?:  string
    QrySrtDt?:  string
    QryEndDt?:  string
    QryTp?:  string
    BaseAmtTp?:  string
    QryTermTp?:  string
    PnlCalcTpCode?:  string
}



export interface FOCCQ33700_RESPONSE_BODY_FOCCQ33700OUTBLOCK2 {
    RecCnt?:  number
    AcntNm?:  string
    InAmt?:  number
    OutAmt?:  number
    FnoCtrctAmt?:  number
    InvstPramtAvrbalAmt?:  number
    FutsAdjstDfamt?:  number
    OptBsnPnlAmt?:  number
    OptEvalPnlAmt?:  number
    InvstPlAmt?:  number
    ErnRat?:  number
}



export interface FOCCQ33700_RESPONSE_BODY_FOCCQ33700OUTBLOCK3 {
    TrdDt?:  string
    FdDpsastAmt?:  number
    EotDpsastAmt?:  number
    InAmt?:  number
    OutAmt?:  number
    InvstAvrbalPramt?:  number
    InvstPlAmt?:  number
    Ernrat?:  number
    FnoCtrctAmt?:  number
    Trnrat?:  number
    FutsAdjstDfamt?:  number
    OptBsnPnlAmt?:  number
    OptEvalPnlAmt?:  number
}


export interface FOCCQ33700_RESPONSE_BODY {
    FOCCQ33700OutBlock1?:  FOCCQ33700_RESPONSE_BODY_FOCCQ33700OUTBLOCK1
    FOCCQ33700OutBlock2?:  FOCCQ33700_RESPONSE_BODY_FOCCQ33700OUTBLOCK2
    FOCCQ33700OutBlock3?:  Array<FOCCQ33700_RESPONSE_BODY_FOCCQ33700OUTBLOCK3>
}


export interface CFOAT00100_RESPONSE_BODY_CFOAT00100OUTBLOCK1 {
    RecCnt?:  number
    OrdMktCode?:  string
    AcntNo?:  string
    Pwd?:  string
    FnoIsuNo?:  string
    BnsTpCode?:  string
    FnoOrdPtnCode?:  string
    FnoOrdprcPtnCode?:  string
    FnoTrdPtnCode?:  string
    FnoOrdPrc?:  number
    OrdQty?:  number
    CommdaCode?:  string
    DscusBnsCmpltTime?:  string
    GrpId?:  string
    OrdSeqno?:  number
    PtflNo?:  number
    BskNo?:  number
    TrchNo?:  number
    ItemNo?:  number
    OpDrtnNo?:  string
    MgempNo?:  string
    FundId?:  string
    FundOrdNo?:  number
}



export interface CFOAT00100_RESPONSE_BODY_CFOAT00100OUTBLOCK2 {
    RecCnt?:  number
    OrdNo?:  number
    BrnNm?:  string
    AcntNm?:  string
    IsuNm?:  string
    OrdAbleAmt?:  number
    MnyOrdAbleAmt?:  number
    OrdMgn?:  number
    MnyOrdMgn?:  number
    OrdAbleQty?:  number
}


export interface CFOAT00100_RESPONSE_BODY {
    CFOAT00100OutBlock1?:  CFOAT00100_RESPONSE_BODY_CFOAT00100OUTBLOCK1
    CFOAT00100OutBlock2?:  CFOAT00100_RESPONSE_BODY_CFOAT00100OUTBLOCK2
}


export interface CFOAT00200_RESPONSE_BODY_CFOAT00200OUTBLOCK1 {
    RecCnt?:  number
    OrdMktCode?:  string
    AcntNo?:  string
    Pwd?:  string
    FnoIsuNo?:  string
    FnoOrdPtnCode?:  string
    OrgOrdNo?:  number
    FnoOrdprcPtnCode?:  string
    FnoOrdPrc?:  number
    MdfyQty?:  number
    CommdaCode?:  string
    DscusBnsCmpltTime?:  string
    GrpId?:  string
    OrdSeqno?:  number
    PtflNo?:  number
    BskNo?:  number
    TrchNo?:  number
    ItemNo?:  number
    MgempNo?:  string
    FundId?:  string
    FundOrgOrdNo?:  number
    FundOrdNo?:  number
}



export interface CFOAT00200_RESPONSE_BODY_CFOAT00200OUTBLOCK2 {
    RecCnt?:  number
    OrdNo?:  number
    BrnNm?:  string
    AcntNm?:  string
    IsuNm?:  string
    OrdAbleAmt?:  number
    MnyOrdAbleAmt?:  number
    OrdMgn?:  number
    MnyOrdMgn?:  number
    OrdAbleQty?:  number
}


export interface CFOAT00200_RESPONSE_BODY {
    CFOAT00200OutBlock1?:  CFOAT00200_RESPONSE_BODY_CFOAT00200OUTBLOCK1
    CFOAT00200OutBlock2?:  CFOAT00200_RESPONSE_BODY_CFOAT00200OUTBLOCK2
}


export interface CFOAT00300_RESPONSE_BODY_CFOAT00300OUTBLOCK1 {
    RecCnt?:  number
    OrdMktCode?:  string
    AcntNo?:  string
    Pwd?:  string
    FnoIsuNo?:  string
    FnoOrdPtnCode?:  string
    OrgOrdNo?:  number
    CancQty?:  number
    CommdaCode?:  string
    DscusBnsCmpltTime?:  string
    GrpId?:  string
    OrdSeqno?:  number
    PtflNo?:  number
    BskNo?:  number
    TrchNo?:  number
    ItemNo?:  number
    MgempNo?:  string
    FundId?:  string
    FundOrgOrdNo?:  number
    FundOrdNo?:  number
}



export interface CFOAT00300_RESPONSE_BODY_CFOAT00300OUTBLOCK2 {
    RecCnt?:  number
    OrdNo?:  number
    BrnNm?:  string
    AcntNm?:  string
    IsuNm?:  string
    OrdAbleAmt?:  number
    MnyOrdAbleAmt?:  number
    OrdMgn?:  number
    MnyOrdMgn?:  number
    OrdAbleQty?:  number
}


export interface CFOAT00300_RESPONSE_BODY {
    CFOAT00300OutBlock1?:  CFOAT00300_RESPONSE_BODY_CFOAT00300OUTBLOCK1
    CFOAT00300OutBlock2?:  CFOAT00300_RESPONSE_BODY_CFOAT00300OUTBLOCK2
}


export interface CFOBQ10800_RESPONSE_BODY_CFOBQ10800OUTBLOCK1 {
    SpclDtPtnCode?:  string
    RecCnt?:  number
    IsuMdclssCode?:  string
    IsuSmclssCode?:  string
    DueYymm?:  string
    SettWklyCnt?:  string
}



export interface CFOBQ10800_RESPONSE_BODY_CFOBQ10800OUTBLOCK2 {
    ElwXrcPrc?:  number
    FnoIsuNo?:  string
    HanglIsuNm1?:  string
    TpNm1?:  string
    UpOptRegulThrprc?:  number
    Thrprc1?:  number
    BasePrc1?:  number
    OrdMgn1?:  number
    FnoIsuNo0?:  string
    HanglIsuNm2?:  string
    TpNm2?:  string
    DownOptRegulThrprc?:  number
    Thrprc2?:  number
    BasePrc2?:  number
    OrdMgn2?:  number
}


export interface CFOBQ10800_RESPONSE_BODY {
    CFOBQ10800OutBlock1?:  CFOBQ10800_RESPONSE_BODY_CFOBQ10800OUTBLOCK1
    CFOBQ10800OutBlock2?:  Array<CFOBQ10800_RESPONSE_BODY_CFOBQ10800OUTBLOCK2>
}


export interface CEXAT11100_RESPONSE_BODY_CEXAT11100OUTBLOCK1 {
    RecCnt?:  number
    AcntNo?:  string
    Pwd?:  string
    FnoIsuNo?:  string
    BnsTpCode?:  string
    ErxPrcCndiTpCode?:  string
    OrdPrc?:  number
    OrdQty?:  number
    OrdCndiPrc?:  number
    CommdaCode?:  string
}



export interface CEXAT11100_RESPONSE_BODY_CEXAT11100OUTBLOCK2 {
    RecCnt?:  number
    OrdNo?:  number
    BrnNm?:  string
    AcntNm?:  string
    IsuNm?:  string
    OrdAbleAmt?:  number
    MnyOrdAbleAmt?:  number
    OrdMgn?:  number
    MnyOrdMgn?:  number
    OrdAbleQty?:  number
}


export interface CEXAT11100_RESPONSE_BODY {
    CEXAT11100OutBlock1?:  CEXAT11100_RESPONSE_BODY_CEXAT11100OUTBLOCK1
    CEXAT11100OutBlock2?:  CEXAT11100_RESPONSE_BODY_CEXAT11100OUTBLOCK2
}


export interface CEXAT11200_RESPONSE_BODY_CEXAT11200OUTBLOCK1 {
    RecCnt?:  number
    OrgOrdNo?:  number
    AcntNo?:  string
    Pwd?:  string
    FnoIsuNo?:  string
    BnsTpCode?:  string
    ErxPrcCndiTpCode?:  string
    OrdPrc?:  number
    MdfyQty?:  number
    OrdCndiPrc?:  number
    CommdaCode?:  string
}



export interface CEXAT11200_RESPONSE_BODY_CEXAT11200OUTBLOCK2 {
    RecCnt?:  number
    OrdNo?:  number
    BrnNm?:  string
    AcntNm?:  string
    IsuNm?:  string
    OrdAbleAmt?:  number
    MnyOrdAbleAmt?:  number
    OrdMgn?:  number
    MnyOrdMgn?:  number
    OrdAbleQty?:  number
}


export interface CEXAT11200_RESPONSE_BODY {
    CEXAT11200OutBlock1?:  CEXAT11200_RESPONSE_BODY_CEXAT11200OUTBLOCK1
    CEXAT11200OutBlock2?:  CEXAT11200_RESPONSE_BODY_CEXAT11200OUTBLOCK2
}


export interface CEXAT11300_RESPONSE_BODY_CEXAT11300OUTBLOCK1 {
    RecCnt?:  number
    OrgOrdNo?:  number
    AcntNo?:  string
    Pwd?:  string
    FnoIsuNo?:  string
    CancQty?:  number
    CommdaCode?:  string
}



export interface CEXAT11300_RESPONSE_BODY_CEXAT11300OUTBLOCK2 {
    RecCnt?:  number
    OrdNo?:  number
    BrnNm?:  string
    AcntNm?:  string
    IsuNm?:  string
    OrdAbleAmt?:  number
    MnyOrdAbleAmt?:  number
    OrdMgn?:  number
    MnyOrdMgn?:  number
    OrdAbleQty?:  number
}


export interface CEXAT11300_RESPONSE_BODY {
    CEXAT11300OutBlock1?:  CEXAT11300_RESPONSE_BODY_CEXAT11300OUTBLOCK1
    CEXAT11300OutBlock2?:  CEXAT11300_RESPONSE_BODY_CEXAT11300OUTBLOCK2
}


export interface MMDAQ91200_RESPONSE_BODY_MMDAQ91200OUTBLOCK1 {
    RecCnt?:  number
    IsuLgclssCode?:  string
    IsuMdclssCode?:  string
}



export interface MMDAQ91200_RESPONSE_BODY_MMDAQ91200OUTBLOCK2 {
    IsuSmclssCode?:  string
    IsuMdclssCode?:  string
    IsuLrgMdclssNm?:  string
    IsuLrgMidSmclssNm?:  string
    ShtnHanglIsuNm?:  string
    CsgnMgnrt?:  number
    MaintMgnrt?:  number
    MnyMgnrt?:  number
    RmndDays?:  number
    OnePrcntrOrdMgn?:  number
}


export interface MMDAQ91200_RESPONSE_BODY {
    MMDAQ91200OutBlock1?:  MMDAQ91200_RESPONSE_BODY_MMDAQ91200OUTBLOCK1
    MMDAQ91200OutBlock2?:  Array<MMDAQ91200_RESPONSE_BODY_MMDAQ91200OUTBLOCK2>
}


export interface O3101_RESPONSE_BODY_O3101OUTBLOCK {
    Symbol?:  string
    SymbolNm?:  string
    ApplDate?:  string
    BscGdsCd?:  string
    BscGdsNm?:  string
    ExchCd?:  string
    ExchNm?:  string
    CrncyCd?:  string
    NotaCd?:  string
    UntPrc?:  number
    MnChgAmt?:  number
    RgltFctr?:  number
    CtrtPrAmt?:  number
    GdsCd?:  string
    LstngYr?:  string
    LstngM?:  string
    EcPrc?:  number
    DlStrtTm?:  string
    DlEndTm?:  string
    DlPsblCd?:  string
    MgnCltCd?:  string
    OpngMgn?:  number
    MntncMgn?:  number
    OpngMgnR?:  number
    MntncMgnR?:  number
    DotGb?:  number
}


export interface O3101_RESPONSE_BODY {
    o3101OutBlock?:  O3101_RESPONSE_BODY_O3101OUTBLOCK
}


export interface O3104_RESPONSE_BODY_O3104OUTBLOCK1 {
    chedate?:  string
    price?:  number
    sign?:  string
    change?:  number
    diff?:  number
    open?:  number
    high?:  number
    low?:  number
    cgubun?:  string
    volume?:  number
}


export interface O3104_RESPONSE_BODY {
    o3104OutBlock1?:  Array<O3104_RESPONSE_BODY_O3104OUTBLOCK1>
}


export interface O3105_RESPONSE_BODY_O3105OUTBLOCK {
    Symbol?:  string
    SymbolNm?:  string
    ApplDate?:  string
    BscGdsCd?:  string
    BscGdsNm?:  string
    ExchCd?:  string
    ExchNm?:  string
    EcCd?:  string
    CrncyCd?:  string
    NotaCd?:  string
    UntPrc?:  number
    MnChgAmt?:  number
    RgltFctr?:  number
    CtrtPrAmt?:  number
    LstngMCnt?:  number
    GdsCd?:  string
    MrktCd?:  string
    EminiCd?:  string
    LstngYr?:  string
    LstngM?:  string
    SeqNo?:  number
    LstngDt?:  string
    MtrtDt?:  string
    FnlDlDt?:  string
    FstTrsfrDt?:  string
    EcPrc?:  number
    DlDt?:  string
    DlStrtTm?:  string
    DlEndTm?:  string
    OvsStrDay?:  string
    OvsStrTm?:  string
    OvsEndDay?:  string
    OvsEndTm?:  string
    DlPsblCd?:  string
    MgnCltCd?:  string
    OpngMgn?:  number
    MntncMgn?:  number
    OpngMgnR?:  number
    MntncMgnR?:  number
    DotGb?:  number
    TimeDiff?:  number
    OvsDate?:  string
    KorDate?:  string
    TrdTm?:  string
    RcvTm?:  string
    TrdP?:  number
    TrdQ?:  number
    TotQ?:  number
    TrdAmt?:  number
    TotAmt?:  number
    OpenP?:  number
    HighP?:  number
    LowP?:  number
    CloseP?:  number
    YdiffP?:  number
    YdiffSign?:  string
    Cgubun?:  string
    Diff?:  number
}


export interface O3105_RESPONSE_BODY {
    o3105OutBlock?:  O3105_RESPONSE_BODY_O3105OUTBLOCK
}


export interface O3106_RESPONSE_BODY_O3106OUTBLOCK {
    symbol?:  string
    symbolname?:  string
    price?:  number
    sign?:  string
    change?:  number
    diff?:  number
    volume?:  number
    jnilclose?:  number
    open?:  number
    high?:  number
    low?:  number
    hotime?:  string
    offerho1?:  number
    bidho1?:  number
    offercnt1?:  number
    bidcnt1?:  number
    offerrem1?:  number
    bidrem1?:  number
    offerho2?:  number
    bidho2?:  number
    offercnt2?:  number
    bidcnt2?:  number
    offerrem2?:  number
    bidrem2?:  number
    offerho3?:  number
    bidho3?:  number
    offercnt3?:  number
    bidcnt3?:  number
    offerrem3?:  number
    bidrem3?:  number
    offerho4?:  number
    bidho4?:  number
    offercnt4?:  number
    bidcnt4?:  number
    offerrem4?:  number
    bidrem4?:  number
    offerho5?:  number
    bidho5?:  number
    offercnt5?:  number
    bidcnt5?:  number
    offerrem5?:  number
    bidrem5?:  number
    offercnt?:  number
    bidcnt?:  number
    offer?:  number
    bid?:  number
}


export interface O3106_RESPONSE_BODY {
    o3106OutBlock?:  O3106_RESPONSE_BODY_O3106OUTBLOCK
}


export interface O3107_RESPONSE_BODY_O3107OUTBLOCK {
    symbol?:  string
    symbolname?:  string
    price?:  number
    sign?:  string
    change?:  number
    diff?:  number
    volume?:  number
    jnilclose?:  number
    open?:  number
    high?:  number
    low?:  number
    offerho1?:  number
    bidho1?:  number
    offercnt1?:  number
    bidcnt1?:  number
    offerrem1?:  number
    bidrem1?:  number
    offercnt?:  number
    bidcnt?:  number
    offer?:  number
    bid?:  number
}


export interface O3107_RESPONSE_BODY {
    o3107OutBlock?:  Array<O3107_RESPONSE_BODY_O3107OUTBLOCK>
}


export interface O3116_RESPONSE_BODY_O3116OUTBLOCK {
    cts_seq?:  number
}



export interface O3116_RESPONSE_BODY_O3116OUTBLOCK1 {
    ovsdate?:  string
    ovstime?:  string
    price?:  number
    sign?:  string
    change?:  number
    diff?:  number
    cvolume?:  number
    volume?:  number
}


export interface O3116_RESPONSE_BODY {
    o3116OutBlock?:  O3116_RESPONSE_BODY_O3116OUTBLOCK
    o3116OutBlock1?:  Array<O3116_RESPONSE_BODY_O3116OUTBLOCK1>
}


export interface O3121_RESPONSE_BODY_O3121OUTBLOCK {
    Symbol?:  string
    SymbolNm?:  string
    ApplDate?:  string
    BscGdsCd?:  string
    BscGdsNm?:  string
    ExchCd?:  string
    ExchNm?:  string
    CrncyCd?:  string
    NotaCd?:  string
    UntPrc?:  number
    MnChgAmt?:  number
    RgltFctr?:  number
    CtrtPrAmt?:  number
    GdsCd?:  string
    LstngYr?:  string
    LstngM?:  string
    EcPrc?:  number
    DlStrtTm?:  string
    DlEndTm?:  string
    DlPsblCd?:  string
    MgnCltCd?:  string
    OpngMgn?:  number
    MntncMgn?:  number
    OpngMgnR?:  number
    MntncMgnR?:  number
    DotGb?:  number
    XrcPrc?:  string
    FdasBasePrc?:  string
    OptTpCode?:  string
    RgtXrcPtnCode?:  string
    Moneyness?:  string
    LastSettPtnCode?:  string
    OptMinOrcPrc?:  string
    OptMinBaseOrcPrc?:  string
}


export interface O3121_RESPONSE_BODY {
    o3121OutBlock?:  O3121_RESPONSE_BODY_O3121OUTBLOCK
}


export interface O3123_RESPONSE_BODY_O3123OUTBLOCK {
    shcode?:  string
    timediff?:  number
    readcnt?:  number
    cts_date?:  string
    cts_time?:  string
}



export interface O3123_RESPONSE_BODY_O3123OUTBLOCK1 {
    date?:  string
    time?:  string
    open?:  number
    high?:  number
    low?:  number
    close?:  number
    volume?:  number
}


export interface O3123_RESPONSE_BODY {
    o3123OutBlock?:  O3123_RESPONSE_BODY_O3123OUTBLOCK
    o3123OutBlock1?:  Array<O3123_RESPONSE_BODY_O3123OUTBLOCK1>
}


export interface O3125_RESPONSE_BODY_O3125OUTBLOCK {
    Symbol?:  string
    SymbolNm?:  string
    ApplDate?:  string
    BscGdsCd?:  string
    BscGdsNm?:  string
    ExchCd?:  string
    ExchNm?:  string
    EcCd?:  string
    CrncyCd?:  string
    NotaCd?:  string
    UntPrc?:  number
    MnChgAmt?:  number
    RgltFctr?:  number
    CtrtPrAmt?:  number
    LstngMCnt?:  number
    GdsCd?:  string
    MrktCd?:  string
    EminiCd?:  string
    LstngYr?:  string
    LstngM?:  string
    SeqNo?:  number
    LstngDt?:  string
    MtrtDt?:  string
    FnlDlDt?:  string
    FstTrsfrDt?:  string
    EcPrc?:  number
    DlDt?:  string
    DlStrtTm?:  string
    DlEndTm?:  string
    OvsStrDay?:  string
    OvsStrTm?:  string
    OvsEndDay?:  string
    OvsEndTm?:  string
    DlPsblCd?:  string
    MgnCltCd?:  string
    OpngMgn?:  number
    MntncMgn?:  number
    OpngMgnR?:  number
    MntncMgnR?:  number
    DotGb?:  number
    TimeDiff?:  number
    OvsDate?:  string
    KorDate?:  string
    TrdTm?:  string
    RcvTm?:  string
    TrdP?:  number
    TrdQ?:  number
    TotQ?:  number
    TrdAmt?:  number
    TotAmt?:  number
    OpenP?:  number
    HighP?:  number
    LowP?:  number
    CloseP?:  number
    YdiffP?:  number
    YdiffSign?:  string
    Cgubun?:  string
    Diff?:  number
    MinOrcPrc?:  number
    MinBaseOrcPrc?:  number
}


export interface O3125_RESPONSE_BODY {
    o3125OutBlock?:  O3125_RESPONSE_BODY_O3125OUTBLOCK
}


export interface O3126_RESPONSE_BODY_O3126OUTBLOCK {
    symbol?:  string
    symbolname?:  string
    price?:  number
    sign?:  string
    change?:  number
    diff?:  number
    volume?:  number
    jnilclose?:  number
    open?:  number
    high?:  number
    low?:  number
    hotime?:  string
    offerho1?:  number
    bidho1?:  number
    offercnt1?:  number
    bidcnt1?:  number
    offerrem1?:  number
    bidrem1?:  number
    offerho2?:  number
    bidho2?:  number
    offercnt2?:  number
    bidcnt2?:  number
    offerrem2?:  number
    bidrem2?:  number
    offerho3?:  number
    bidho3?:  number
    offercnt3?:  number
    bidcnt3?:  number
    offerrem3?:  number
    bidrem3?:  number
    offerho4?:  number
    bidho4?:  number
    offercnt4?:  number
    bidcnt4?:  number
    offerrem4?:  number
    bidrem4?:  number
    offerho5?:  number
    bidho5?:  number
    offercnt5?:  number
    bidcnt5?:  number
    offerrem5?:  number
    bidrem5?:  number
    offercnt?:  number
    bidcnt?:  number
    offer?:  number
    bid?:  number
}


export interface O3126_RESPONSE_BODY {
    o3126OutBlock?:  O3126_RESPONSE_BODY_O3126OUTBLOCK
}


export interface O3127_RESPONSE_BODY_O3127OUTBLOCK {
    symbol?:  string
    symbolname?:  string
    price?:  number
    sign?:  string
    change?:  number
    diff?:  number
    volume?:  number
    jnilclose?:  number
    open?:  number
    high?:  number
    low?:  number
    offerho1?:  number
    bidho1?:  number
    offercnt1?:  number
    bidcnt1?:  number
    offerrem1?:  number
    bidrem1?:  number
    offercnt?:  number
    bidcnt?:  number
    offer?:  number
    bid?:  number
}


export interface O3127_RESPONSE_BODY {
    o3127OutBlock?:  Array<O3127_RESPONSE_BODY_O3127OUTBLOCK>
}


export interface O3128_RESPONSE_BODY_O3128OUTBLOCK {
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
    mk_stime?:  string
    mk_etime?:  string
    cts_date?:  string
    rec_count?:  number
}



export interface O3128_RESPONSE_BODY_O3128OUTBLOCK1 {
    date?:  string
    open?:  number
    high?:  number
    low?:  number
    close?:  number
    volume?:  number
}


export interface O3128_RESPONSE_BODY {
    o3128OutBlock?:  O3128_RESPONSE_BODY_O3128OUTBLOCK
    o3128OutBlock1?:  Array<O3128_RESPONSE_BODY_O3128OUTBLOCK1>
}


export interface O3136_RESPONSE_BODY_O3136OUTBLOCK {
    cts_seq?:  number
}



export interface O3136_RESPONSE_BODY_O3136OUTBLOCK1 {
    ovsdate?:  string
    ovstime?:  string
    price?:  number
    sign?:  string
    change?:  number
    diff?:  number
    cvolume?:  number
    volume?:  number
}


export interface O3136_RESPONSE_BODY {
    o3136OutBlock?:  O3136_RESPONSE_BODY_O3136OUTBLOCK
    o3136OutBlock1?:  Array<O3136_RESPONSE_BODY_O3136OUTBLOCK1>
}


export interface O3137_RESPONSE_BODY_O3137OUTBLOCK {
    shcode?:  string
    rec_count?:  number
    cts_seq?:  string
    cts_daygb?:  string
}



export interface O3137_RESPONSE_BODY_O3137OUTBLOCK1 {
    date?:  string
    time?:  string
    open?:  number
    high?:  number
    low?:  number
    close?:  number
    volume?:  number
}


export interface O3137_RESPONSE_BODY {
    o3137OutBlock?:  O3137_RESPONSE_BODY_O3137OUTBLOCK
    o3137OutBlock1?:  Array<O3137_RESPONSE_BODY_O3137OUTBLOCK1>
}


export interface CIDBQ01400_RESPONSE_BODY_CIDBQ01400OUTBLOCK1 {
    RecCnt?:  number
    QryTpCode?:  string
    AcntNo?:  string
    IsuCodeVal?:  string
    BnsTpCode?:  string
    OvrsDrvtOrdPrc?:  number
    AbrdFutsOrdPtnCode?:  string
}



export interface CIDBQ01400_RESPONSE_BODY_CIDBQ01400OUTBLOCK2 {
    RecCnt?:  number
    OrdAbleQty?:  number
}


export interface CIDBQ01400_RESPONSE_BODY {
    CIDBQ01400OutBlock1?:  CIDBQ01400_RESPONSE_BODY_CIDBQ01400OUTBLOCK1
    CIDBQ01400OutBlock2?:  CIDBQ01400_RESPONSE_BODY_CIDBQ01400OUTBLOCK2
}


export interface CIDBQ01500_RESPONSE_BODY_CIDBQ01500OUTBLOCK1 {
    RecCnt?:  number
    AcntTpCode?:  string
    AcntNo?:  string
    FcmAcntNo?:  string
    Pwd?:  string
    QryDt?:  string
    BalTpCode?:  string
}



export interface CIDBQ01500_RESPONSE_BODY_CIDBQ01500OUTBLOCK2 {
    BaseDt?:  string
    Dps?:  number
    LpnlAmt?:  number
    FutsDueBfLpnlAmt?:  number
    FutsDueBfCmsn?:  number
    CsgnMgn?:  number
    MaintMgn?:  number
    CtlmtAmt?:  number
    AddMgn?:  number
    MgnclRat?:  number
    OrdAbleAmt?:  number
    WthdwAbleAmt?:  number
    AcntNo?:  string
    IsuCodeVal?:  string
    IsuNm?:  string
    CrcyCodeVal?:  string
    OvrsDrvtPrdtCode?:  string
    OvrsDrvtOptTpCode?:  string
    DueDt?:  string
    OvrsDrvtXrcPrc?:  number
    BnsTpCode?:  string
    CmnCodeNm?:  string
    TpCodeNm?:  string
    BalQty?:  number
    PchsPrc?:  number
    OvrsDrvtNowPrc?:  number
    AbrdFutsEvalPnlAmt?:  number
    CsgnCmsn?:  number
    PosNo?:  string
    EufOneCmsnAmt?:  number
    EufTwoCmsnAmt?:  number
}


export interface CIDBQ01500_RESPONSE_BODY {
    CIDBQ01500OutBlock1?:  CIDBQ01500_RESPONSE_BODY_CIDBQ01500OUTBLOCK1
    CIDBQ01500OutBlock2?:  Array<CIDBQ01500_RESPONSE_BODY_CIDBQ01500OUTBLOCK2>
}


export interface CIDBQ01800_RESPONSE_BODY_CIDBQ01800OUTBLOCK1 {
    RecCnt?:  number
    AcntNo?:  string
    Pwd?:  string
    IsuCodeVal?:  string
    OrdDt?:  string
    ThdayTpCode?:  string
    OrdStatCode?:  string
    BnsTpCode?:  string
    QryTpCode?:  string
    OrdPtnCode?:  string
    OvrsDrvtFnoTpCode?:  string
}


export type CIDBQ01800_RESPONSE_BODY_CIDBQ01800OUTBLOCK2_OVRSOPTXRCRSVTPCODE = '1';
export interface CIDBQ01800_RESPONSE_BODY_CIDBQ01800OUTBLOCK2 {
    OvrsFutsOrdNo?:  string
    OvrsFutsOrgOrdNo?:  string
    FcmOrdNo?:  string
    IsuCodeVal?:  string
    IsuNm?:  string
    AbrdFutsXrcPrc?:  number
    FcmAcntNo?:  string
    BnsTpCode?:  string
    BnsTpNm?:  string
    FutsOrdStatCode?:  string
    TpCodeNm?:  string
    FutsOrdTpCode?:  string
    TrdTpNm?:  string
    AbrdFutsOrdPtnCode?:  string
    OrdPtnNm?:  string
    OrdPtnTermTpCode?:  string
    CmnCodeNm?:  string
    AppSrtDt?:  string
    AppEndDt?:  string
    OvrsDrvtOrdPrc?:  number
    OrdQty?:  number
    OvrsDrvtExecIsuCode?:  string
    ExecIsuNm?:  string
    ExecBnsTpCode?:  string
    ExecBnsTpNm?:  string
    AbrdFutsExecPrc?:  number
    ExecQty?:  number
    OrdCndiPrc?:  number
    OvrsDrvtNowPrc?:  number
    MdfyQty?:  number
    CancQty?:  number
    RjtQty?:  number
    CnfQty?:  number
    UnercQty?:  number
    CvrgYn?:  string
    RegTmnlNo?:  string
    RegBrnNo?:  string
    RegUserId?:  string
    OrdDt?:  string
    OrdTime?:  string
    OvrsOptXrcRsvTpCode?:  CIDBQ01800_RESPONSE_BODY_CIDBQ01800OUTBLOCK2_OVRSOPTXRCRSVTPCODE
    OvrsDrvtOptTpCode?:  string
    SprdBaseIsuYn?:  string
    OvrsFutsOrdDt?:  string
    OvrsFutsOrdNo2?:  string
    OvrsFutsOrgOrdNo2?:  string
    OvrsDrvtIsuCode2?:  string
}


export interface CIDBQ01800_RESPONSE_BODY {
    CIDBQ01800OutBlock1?:  CIDBQ01800_RESPONSE_BODY_CIDBQ01800OUTBLOCK1
    CIDBQ01800OutBlock2?:  Array<CIDBQ01800_RESPONSE_BODY_CIDBQ01800OUTBLOCK2>
}


export interface CIDBQ02400_RESPONSE_BODY_CIDBQ02400OUTBLOCK1 {
    RecCnt?:  number
    AcntNo?:  string
    Pwd?:  string
    IsuCodeVal?:  string
    QrySrtDt?:  string
    QryEndDt?:  string
    ThdayTpCode?:  string
    OrdStatCode?:  string
    BnsTpCode?:  string
    QryTpCode?:  string
    OrdPtnCode?:  string
    OvrsDrvtFnoTpCode?:  string
}


export type CIDBQ02400_RESPONSE_BODY_CIDBQ02400OUTBLOCK2_BNSTPCODE = '0' | '1' | '2';
export type CIDBQ02400_RESPONSE_BODY_CIDBQ02400OUTBLOCK2_FUTSORDSTATCODE = '0' | '1' | '2';
export type CIDBQ02400_RESPONSE_BODY_CIDBQ02400OUTBLOCK2_OVRSOPTXRCRSVTPCODE = '1';
export interface CIDBQ02400_RESPONSE_BODY_CIDBQ02400OUTBLOCK2 {
    OrdDt?:  string
    OvrsFutsOrdNo?:  string
    OvrsFutsOrgOrdNo?:  string
    FcmOrdNo?:  string
    ExecDt?:  string
    OvrsFutsExecNo?:  string
    FcmAcntNo?:  string
    IsuCodeVal?:  string
    IsuNm?:  string
    AbrdFutsXrcPrc?:  number
    BnsTpCode?:  CIDBQ02400_RESPONSE_BODY_CIDBQ02400OUTBLOCK2_BNSTPCODE
    BnsTpNm?:  string
    FutsOrdStatCode?:  CIDBQ02400_RESPONSE_BODY_CIDBQ02400OUTBLOCK2_FUTSORDSTATCODE
    TpCodeNm?:  string
    FutsOrdTpCode?:  string
    TrdTpNm?:  string
    AbrdFutsOrdPtnCode?:  string
    OrdPtnNm?:  string
    OrdPtnTermTpCode?:  string
    CmnCodeNm?:  string
    AppSrtDt?:  string
    AppEndDt?:  string
    OrdQty?:  number
    OvrsDrvtOrdPrc?:  number
    OvrsDrvtExecIsuCode?:  string
    ExecIsuNm?:  string
    ExecBnsTpCode?:  string
    ExecBnsTpNm?:  string
    ExecQty?:  number
    AbrdFutsExecPrc?:  number
    OrdCndiPrc?:  number
    OvrsDrvtNowPrc?:  number
    UnercQty?:  number
    TrxStatCode?:  string
    TrxStatCodeNm?:  string
    CsgnCmsn?:  number
    FcmCmsn?:  number
    ThcoCmsn?:  number
    MdaCode?:  string
    MdaCodeNm?:  string
    RegTmnlNo?:  string
    RegUserId?:  string
    OrdSndDttm?:  string
    ExecDttm?:  string
    EufOneCmsnAmt?:  number
    EufTwoCmsnAmt?:  number
    LchOneCmsnAmt?:  number
    LchTwoCmsnAmt?:  number
    TrdOneCmsnAmt?:  number
    TrdTwoCmsnAmt?:  number
    TrdThreeCmsnAmt?:  number
    StrmOneCmsnAmt?:  number
    StrmTwoCmsnAmt?:  number
    StrmThreeCmsnAmt?:  number
    TransOneCmsnAmt?:  number
    TransTwoCmsnAmt?:  number
    TransThreeCmsnAmt?:  number
    TransFourCmsnAmt?:  number
    OvrsOptXrcRsvTpCode?:  CIDBQ02400_RESPONSE_BODY_CIDBQ02400OUTBLOCK2_OVRSOPTXRCRSVTPCODE
    OvrsDrvtOptTpCode?:  string
    SprdBaseIsuYn?:  string
    OvrsDrvtIsuCode2?:  string
}


export interface CIDBQ02400_RESPONSE_BODY {
    CIDBQ02400OutBlock1?:  CIDBQ02400_RESPONSE_BODY_CIDBQ02400OUTBLOCK1
    CIDBQ02400OutBlock2?:  Array<CIDBQ02400_RESPONSE_BODY_CIDBQ02400OUTBLOCK2>
}


export interface CIDBQ03000_RESPONSE_BODY_CIDBQ03000OUTBLOCK1 {
    RecCnt?:  number
    AcntTpCode?:  string
    AcntNo?:  string
    AcntPwd?:  string
    TrdDt?:  string
}



export interface CIDBQ03000_RESPONSE_BODY_CIDBQ03000OUTBLOCK2 {
    AcntNo?:  string
    TrdDt?:  string
    CrcyObjCode?:  string
    OvrsFutsDps?:  number
    CustmMnyioAmt?:  number
    AbrdFutsLqdtPnlAmt?:  number
    AbrdFutsCmsnAmt?:  number
    PrexchDps?:  number
    EvalAssetAmt?:  number
    AbrdFutsCsgnMgn?:  number
    AbrdFutsAddMgn?:  number
    AbrdFutsWthdwAbleAmt?:  number
    AbrdFutsOrdAbleAmt?:  number
    AbrdFutsEvalPnlAmt?:  number
    LastSettPnlAmt?:  number
    OvrsOptSettAmt?:  number
    OvrsOptBalEvalAmt?:  number
}


export interface CIDBQ03000_RESPONSE_BODY {
    CIDBQ03000OutBlock1?:  CIDBQ03000_RESPONSE_BODY_CIDBQ03000OUTBLOCK1
    CIDBQ03000OutBlock2?:  CIDBQ03000_RESPONSE_BODY_CIDBQ03000OUTBLOCK2
}


export interface CIDBQ05300_RESPONSE_BODY_CIDBQ05300OUTBLOCK1 {
    RecCnt?:  number
    OvrsAcntTpCode?:  string
    FcmAcntNo?:  string
    AcntNo?:  string
    AcntPwd?:  string
    CrcyCode?:  string
}



export interface CIDBQ05300_RESPONSE_BODY_CIDBQ05300OUTBLOCK2 {
    AcntNo?:  string
    CrcyCode?:  string
    OvrsFutsDps?:  number
    AbrdFutsCsgnMgn?:  number
    OvrsFutsSplmMgn?:  number
    CustmLpnlAmt?:  number
    AbrdFutsEvalPnlAmt?:  number
    AbrdFutsCmsnAmt?:  number
    AbrdFutsEvalDpstgTotAmt?:  number
    Xchrat?:  number
    FcurrRealMxchgAmt?:  number
    AbrdFutsWthdwAbleAmt?:  number
    AbrdFutsOrdAbleAmt?:  number
    FutsDueNarrvLqdtPnlAmt?:  number
    FutsDueNarrvCmsn?:  number
    AbrdFutsLqdtPnlAmt?:  number
    OvrsFutsDueCmsn?:  number
    OvrsFutsOptBuyAmt?:  number
    OvrsFutsOptSellAmt?:  number
    OptBuyMktWrthAmt?:  number
    OptSellMktWrthAmt?:  number
}



export interface CIDBQ05300_RESPONSE_BODY_CIDBQ05300OUTBLOCK3 {
    RecCnt?:  number
    OvrsFutsDps?:  number
    AbrdFutsLqdtPnlAmt?:  number
    FutsDueNarrvLqdtPnlAmt?:  number
    AbrdFutsEvalPnlAmt?:  number
    AbrdFutsEvalDpstgTotAmt?:  number
    CustmLpnlAmt?:  number
    OvrsFutsDueCmsn?:  number
    FcurrRealMxchgAmt?:  number
    AbrdFutsCmsnAmt?:  number
    FutsDueNarrvCmsn?:  number
    AbrdFutsCsgnMgn?:  number
    OvrsFutsMaintMgn?:  number
    OvrsFutsOptBuyAmt?:  number
    OvrsFutsOptSellAmt?:  number
    CtlmtAmt?:  number
    OvrsFutsSplmMgn?:  number
    MgnclRat?:  number
    AbrdFutsOrdAbleAmt?:  number
    AbrdFutsWthdwAbleAmt?:  number
    OptBuyMktWrthAmt?:  number
    OptSellMktWrthAmt?:  number
    OvrsOptSettAmt?:  number
    OvrsOptBalEvalAmt?:  number
}


export interface CIDBQ05300_RESPONSE_BODY {
    CIDBQ05300OutBlock1?:  CIDBQ05300_RESPONSE_BODY_CIDBQ05300OUTBLOCK1
    CIDBQ05300OutBlock2?:  Array<CIDBQ05300_RESPONSE_BODY_CIDBQ05300OUTBLOCK2>
    CIDBQ05300OutBlock3?:  CIDBQ05300_RESPONSE_BODY_CIDBQ05300OUTBLOCK3
}


export interface CIDEQ00800_RESPONSE_BODY_CIDEQ00800OUTBLOCK1 {
    RecCnt?:  number
    AcntNo?:  string
    AcntPwd?:  string
    TrdDt?:  string
}



export interface CIDEQ00800_RESPONSE_BODY_CIDEQ00800OUTBLOCK2 {
    AcntNo?:  string
    TrdDt?:  string
    IsuCodeVal?:  string
    BnsTpNm?:  string
    BalQty?:  number
    LqdtAbleQty?:  number
    PchsPrc?:  number
    OvrsDrvtNowPrc?:  number
    AbrdFutsEvalPnlAmt?:  number
    CustmBalAmt?:  number
    FcurrEvalAmt?:  number
    IsuNm?:  string
    CrcyCodeVal?:  string
    OvrsDrvtPrdtCode?:  string
    DueDt?:  string
    PrcntrAmt?:  number
    FcurrEvalPnlAmt?:  number
}


export interface CIDEQ00800_RESPONSE_BODY {
    CIDEQ00800OutBlock1?:  CIDEQ00800_RESPONSE_BODY_CIDEQ00800OUTBLOCK1
    CIDEQ00800OutBlock2?:  CIDEQ00800_RESPONSE_BODY_CIDEQ00800OUTBLOCK2
}


export interface CIDBT00100_RESPONSE_BODY_CIDBT00100OUTBLOCK1 {
    RecCnt?:  number
    OrdDt?:  string
    BrnCode?:  string
    AcntNo?:  string
    Pwd?:  string
    IsuCodeVal?:  string
    FutsOrdTpCode?:  string
    BnsTpCode?:  string
    AbrdFutsOrdPtnCode?:  string
    CrcyCode?:  string
    OvrsDrvtOrdPrc?:  number
    CndiOrdPrc?:  number
    OrdQty?:  number
    PrdtCode?:  string
    DueYymm?:  string
    ExchCode?:  string
}



export interface CIDBT00100_RESPONSE_BODY_CIDBT00100OUTBLOCK2 {
    RecCnt?:  number
    AcntNo?:  string
    OvrsFutsOrdNo?:  string
}


export interface CIDBT00100_RESPONSE_BODY {
    CIDBT00100OutBlock1?:  CIDBT00100_RESPONSE_BODY_CIDBT00100OUTBLOCK1
    CIDBT00100OutBlock2?:  CIDBT00100_RESPONSE_BODY_CIDBT00100OUTBLOCK2
}


export interface CIDBT00900_RESPONSE_BODY_CIDBT00900OUTBLOCK1 {
    RecCnt?:  number
    OrdDt?:  string
    RegBrnNo?:  string
    AcntNo?:  string
    Pwd?:  string
    OvrsFutsOrgOrdNo?:  string
    IsuCodeVal?:  string
    FutsOrdTpCode?:  string
    BnsTpCode?:  string
    FutsOrdPtnCode?:  string
    CrcyCodeVal?:  string
    OvrsDrvtOrdPrc?:  number
    CndiOrdPrc?:  number
    OrdQty?:  number
    OvrsDrvtPrdtCode?:  string
    DueYymm?:  string
    ExchCode?:  string
}



export interface CIDBT00900_RESPONSE_BODY_CIDBT00900OUTBLOCK2 {
    RecCnt?:  number
    AcntNo?:  string
    OvrsFutsOrdNo?:  string
    InnerMsgCnts?:  string
}


export interface CIDBT00900_RESPONSE_BODY {
    CIDBT00900OutBlock1?:  CIDBT00900_RESPONSE_BODY_CIDBT00900OUTBLOCK1
    CIDBT00900OutBlock2?:  CIDBT00900_RESPONSE_BODY_CIDBT00900OUTBLOCK2
}


export interface CIDBT01000_RESPONSE_BODY_CIDBT01000OUTBLOCK1 {
    RecCnt?:  number
    OrdDt?:  string
    BrnNo?:  string
    AcntNo?:  string
    Pwd?:  string
    IsuCodeVal?:  string
    OvrsFutsOrgOrdNo?:  string
    FutsOrdTpCode?:  string
    PrdtTpCode?:  string
    ExchCode?:  string
}



export interface CIDBT01000_RESPONSE_BODY_CIDBT01000OUTBLOCK2 {
    RecCnt?:  number
    AcntNo?:  string
    OvrsFutsOrdNo?:  string
    InnerMsgCnts?:  string
}


export interface CIDBT01000_RESPONSE_BODY {
    CIDBT01000OutBlock1?:  CIDBT01000_RESPONSE_BODY_CIDBT01000OUTBLOCK1
    CIDBT01000OutBlock2?:  CIDBT01000_RESPONSE_BODY_CIDBT01000OUTBLOCK2
}


export interface O3103_RESPONSE_BODY_O3103OUTBLOCK {
    shcode?:  string
    timediff?:  number
    readcnt?:  number
    cts_date?:  string
    cts_time?:  string
}



export interface O3103_RESPONSE_BODY_O3103OUTBLOCK1 {
    date?:  string
    time?:  string
    open?:  number
    high?:  number
    low?:  number
    close?:  number
    volume?:  number
}


export interface O3103_RESPONSE_BODY {
    o3103OutBlock?:  O3103_RESPONSE_BODY_O3103OUTBLOCK
    o3103OutBlock1?:  Array<O3103_RESPONSE_BODY_O3103OUTBLOCK1>
}


export interface O3108_RESPONSE_BODY_O3108OUTBLOCK {
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
    mk_stime?:  string
    mk_etime?:  string
    cts_date?:  string
    rec_count?:  number
}



export interface O3108_RESPONSE_BODY_O3108OUTBLOCK1 {
    date?:  string
    open?:  number
    high?:  number
    low?:  number
    close?:  number
    volume?:  number
}


export interface O3108_RESPONSE_BODY {
    o3108OutBlock?:  O3108_RESPONSE_BODY_O3108OUTBLOCK
    o3108OutBlock1?:  Array<O3108_RESPONSE_BODY_O3108OUTBLOCK1>
}


export interface O3117_RESPONSE_BODY_O3117OUTBLOCK {
    shcode?:  string
    rec_count?:  number
    cts_seq?:  string
    cts_daygb?:  string
}



export interface O3117_RESPONSE_BODY_O3117OUTBLOCK1 {
    date?:  string
    time?:  string
    open?:  number
    high?:  number
    low?:  number
    close?:  number
    volume?:  number
}


export interface O3117_RESPONSE_BODY {
    o3117OutBlock?:  O3117_RESPONSE_BODY_O3117OUTBLOCK
    o3117OutBlock1?:  Array<O3117_RESPONSE_BODY_O3117OUTBLOCK1>
}


export interface O3139_RESPONSE_BODY_O3139OUTBLOCK {
    shcode?:  string
    rec_count?:  number
    cts_seq?:  string
    cts_daygb?:  string
    last_count?:  number
}



export interface O3139_RESPONSE_BODY_O3139OUTBLOCK1 {
    date?:  string
    time?:  string
    open?:  number
    high?:  number
    low?:  number
    close?:  number
    volume?:  number
}


export interface O3139_RESPONSE_BODY {
    o3139OutBlock?:  O3139_RESPONSE_BODY_O3139OUTBLOCK
    o3139OutBlock1?:  Array<O3139_RESPONSE_BODY_O3139OUTBLOCK1>
}


export interface T0167_RESPONSE_BODY_T0167OUTBLOCK {
    dt?:  string
    time?:  string
}


export interface T0167_RESPONSE_BODY {
    t0167OutBlock?:  T0167_RESPONSE_BODY_T0167OUTBLOCK
}


