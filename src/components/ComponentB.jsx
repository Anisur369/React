import ComponentC from "./ComponentC";
function ComponentB({dispatch}){
    return (
        <div>
            <ComponentC dispatch={dispatch}/>
        </div>
    )
}
export default ComponentB;