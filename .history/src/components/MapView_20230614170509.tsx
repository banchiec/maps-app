import { useContext, useLayoutEffect, useRef } from "react"
import * as maptilersdk from "@maptiler/sdk"
import maplibregl from "maplibre-gl"
import { PlacesContext } from "../context"
import { Loading } from "./Loading"

export const MapView = () => {
	const { isLoading, userLocation } = useContext(PlacesContext)
	const mapDivRef = useRef<HTMLDivElement>(null)
	console.log(userLocation)
	useLayoutEffect(() => {
		if (!isLoading) {
			maptilersdk.config.apiKey = "YOUR_MAPTILER_API_KEY_HERE"
			const map = new maptilersdk.Map({
				container: "map", // container's id or the HTML element to render the map
				style: maptilersdk.MapStyle.STREETS,
				center: [16.62662018, 49.2125578], // starting position [lng, lat]
				zoom: 14, // starting zoom
			})

			// const map = new maplibregl.Map({
			// 	container: mapDivRef.current!,
			// 	style: "https://demotiles.maplibre.org/style.json", // stylesheet location
			// 	center: userLocation, // starting position [lng, lat]
			// 	zoom: 8, // starting zoom
			// })
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
