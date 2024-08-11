import useWindowWidth from "./hooks/useWindowWidth";

function LayoutComponentTwo(){
    const onSmallScreen=useWindowWidth(768);
    return (
        <div className={onSmallScreen?'small':'large'}>
            <h1>You are browsing on {onSmallScreen?'small':'large'} device</h1>
        </div>
    )
}
export default LayoutComponentTwo;