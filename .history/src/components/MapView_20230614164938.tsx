import { useContext, useLayoutEffect, useRef } from "react"
import maplibregl from "maplibre-gl"
import { PlacesContext } from "../context"
import { Loading } from "./Loading"

export const MapView = () => {
	const { isLoading, userLocation } = useContext(PlacesContext)
	const mapDivRef = useRef<HTMLDivElement>(null)
	console.log(userLocation)
	useLayoutEffect(() => {
		if (!isLoading) {
			const map = new maplibregl.Map({
				container: mapDivRef.current!,
				style: "https://demotiles.maplibre.org/style.json", // stylesheet location
				center: [-74.5, 40], // starting position [lng, lat]
				zoom: 2, // starting zoom
			})
		}
	}, [isLoading])
	if (isLoading) {
		return <Loading />
	}
	return (
		<div
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
