/*
 * /packages/generator/types/excel.type.ts
 * 
 * @version 1.0.0
 * @license GNU General Public License v3.0
 * @author dalcon10028 <dalcon10280@gmail.com>
 */
export interface ExcelConfig {
  fileName: string;
}

export interface ExcelContentBody {
  category: 'Request' | 'Response';
  mainCategory: 'Header' | 'Body'; 
  code: string; 
  name: string;
  type: string;
  required: 'Y' | 'N';
  length?: number | null;
  description?: string | null;
  default?: string | number | null;
}

export interface ExcelContent {
  name: string;
  version?: string | null;
  method: 'GET' | 'POST' | 'PUT' | 'DELETE';
  productionDomain: string;
  developmentDomain?: string | null;
  url: string;
  format: 'JSON' | 'XML';
  contentType?: 'application/json' | 'application/xml' | null;
  memo?: string | null;
  table: ExcelContentBody[];
}
