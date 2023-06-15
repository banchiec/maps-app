import * as maptilersdk from "@maptiler/sdk"
import { MapState } from "./MapProvider"
type MapAction = { type: "setMap"; payload: maptilersdk.Map }

export const MapReducer = (state: MapState, action: MapAction): MapState => {
	switch (action.type) {
		case "setMap":
			break

		default:
			return state
	}
}
