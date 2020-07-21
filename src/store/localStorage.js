export const loadState = () => {
    try {
        const serializeState = localStorage.getItem("list");
        if (serializeState === null) return undefined;
        return JSON.parse(serializeState);
    } catch (error) {
        return undefined;
    }
}
export const saveState = (state)=>{
    try {
        const serializeState = JSON.stringify(state);
        localStorage.setItem('list', serializeState);
    } catch (error) {
        
    }
}