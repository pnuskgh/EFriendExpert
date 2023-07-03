/**
 * packages/EFriendExpert/templates/EFriendExpert.ts
 * 
 * @version 0.0.1
 * @license GNU General Public License v3.0
 * @author gye hyun james kim <pnuskgh@gmail.com>
 */

import { approval, tokenP } from "./certification";
import { order } from "./order/order";

interface EFriendExpertConfiguration {
  appKey: string;
  secretKey: string
  mode: 'real' | 'dev';
}

export class EFriendExpert {
  private readonly config: EFriendExpertConfiguration;
  private readonly webSocketToken: string;
  private readonly restToken: string;

  constructor(config: EFriendExpertConfiguration, { webSocketToken, restToken }: { webSocketToken: string, restToken: string }) {
    this.config = config;
    this.webSocketToken = webSocketToken;
    this.restToken = restToken;
  }

  static async create(config: EFriendExpertConfiguration) {
    const webSocketToken = await approval({ appKey: config.appKey, secretKey: config.secretKey });
    const restToken = await tokenP({ appKey: config.appKey, secretKey: config.secretKey });
    
    const eFriendExpert = new EFriendExpert(config, { webSocketToken, restToken });
    return eFriendExpert;
  }

  async order() {
    await order();
  }
}
