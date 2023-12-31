import { ChangeEvent, useRef } from "react"

export const SearchBar = () => {
	const debounceRef = useRef<NodeJS.Timeout>()

	const onQueryChanged = (event: ChangeEvent<HTMLInputElement>) => {
		if (debounceRef.current) clearTimeout(debounceRef.current)
	}

	return (
		<div className="search-container">
			<input type="text" className="form-control" placeholder="Buscar lugar..." />
		</div>
	)
}
