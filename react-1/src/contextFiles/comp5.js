import {CountContext} from '../useContextDemo';
import { useContext} from 'react';

export const Comp5 = ()=>{
    // const {count5} =props
    const CountCtx = useContext(CountContext);
    // console.log({CountCtx});
    return(
        <div><h1> Hello {CountCtx.count} </h1> </div>
    )
}