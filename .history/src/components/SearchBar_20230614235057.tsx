import { useRef } from 'react';
export const SearchBar = () => {
	const debounceRef = useRef<NodeJS.Timeout>()
	const onQueryChanged = (event: any){

	}
	return (
		<div className="search-container">
			<input type="text" className="form-control" placeholder="Buscar lugar..." />
		</div>
	)
}
