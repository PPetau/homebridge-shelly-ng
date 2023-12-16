import { ShellyPlusPlugS } from 'shellies-ng';

import { DeviceDelegate } from './base';

/**
 * Handles Shelly Plus Plug US devices.
 */
export class ShellyPlusPlugSDelegate extends DeviceDelegate {
  protected setup() {
    const d = this.device as ShellyPlusPlugS;

    this.addSwitch(d.switch0, { single: true });
  }
}

DeviceDelegate.registerDelegate(ShellyPlusPlugSDelegate, ShellyPlusPlugS);
