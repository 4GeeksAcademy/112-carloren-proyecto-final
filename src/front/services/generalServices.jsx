import useGlobalReducer from "../hooks/useGlobalReducer";

export async function handleSearch(event) {

    const { store, dispatch } = useGlobalReducer()
    
    dispatch({ type: "searchValue", payload: event.target.value })
}