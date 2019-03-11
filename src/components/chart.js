import React from 'react';
import { Sparklines, SparklinesLine, SparklinesLineReferenceLine }  from 'react-sparklines';

export default props => {
	return(
        
    <div> 
     <Sparklines height={50} width={80} data={props.data}>
        <SparklinesLine color = { props.color } /> 
        <SparklinesLineReferenceLine type = "avg" />
     </Sparklines>
    </div>

    );
}
