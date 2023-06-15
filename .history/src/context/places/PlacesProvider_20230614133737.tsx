export interface PlacesState {
	isLoading: boolean
	userLocation: [number, number]
}

const INITIAL_STATE: PlacesState = {
	isLoading: true,
	userLocationk: undefined,
}

export const PlacesProvider = () => {
	return (
		<div>
			<h1>Places</h1>
		</div>
	)
}
