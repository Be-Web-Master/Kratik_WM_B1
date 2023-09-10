
import {  useSelector, useDispatch} from "react-redux";
import { counterActions } from "./slice";
 
export const ReduxDemo =()=>{
    const count = useSelector(state => {
        console.log({state}) 
        return state.counter.count
    });
    const dispatch = useDispatch();
    const{incBy1}= counterActions;

    return (
        <div>
            <button onClick= {()=> dispatch(incBy1())} > count</button>
            <div>{count}</div>
        </div>
    )
}