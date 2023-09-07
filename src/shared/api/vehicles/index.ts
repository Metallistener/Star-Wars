import { TGetVehicleInfo } from 'shared/types/api/vehicles';
import { VEHICLE_INFO } from '../endpoints';
import { API } from '../executor';

export const getVehicleInfo: TGetVehicleInfo = (params) =>
  API().get(VEHICLE_INFO(params.id));
