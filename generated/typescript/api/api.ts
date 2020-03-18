export * from './device.service';
import { DeviceService } from './device.service';
export * from './environment.service';
import { EnvironmentService } from './environment.service';
export * from './zWave.service';
import { ZWaveService } from './zWave.service';
export * from './zones.service';
import { ZonesService } from './zones.service';
export const APIS = [DeviceService, EnvironmentService, ZWaveService, ZonesService];
