import { useContext, useEffect, useLayoutEffect, useRef } from "react"
import { Map } from "maplibre-gl"
import { PlacesContext } from "../context"
import { Loading } from "./Loading"

export const MapView = () => {
	const { isLoading, userLocation } = useContext(PlacesContext)
	const mapDivRef = useRef<HTMLDivElement>(null)
	useEffect(() => {
		if (!isLoading) {
			const map = new Map({
				container: "mapId",
				style: "https://demotiles.maplibre.org/style.json", // stylesheet location
				center: userLocation, // starting position [lng, lat]
				zoom: 14, // starting zoom
			})
		}
	}, [isLoading])

	if (isLoading) {
		return <Loading />
	}
	return (
		<div
			id="mapId"
			ref={mapDivRef}
			style={{
				height: "100vh",
				width: "100vw",
				position: "fixed",
				top: "0",
				left: "0",
			}}
		>
			{userLocation?.join(",")}
		</div>
	)
}
