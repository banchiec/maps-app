import { Map } from "@maptiler/sdk"
import { MapState } from "./MapProvider"
type MapAction = { type: "setMap"; payload: Map }

export const MapReducer = (state: MapState, action?: MapAction): MapState => {
	switch (action.type) {
		case "setMap":
			break

		default:
			return state
	}
}
