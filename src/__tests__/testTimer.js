import React from 'react';
import {create} from 'react-test-renderer';
import Timer from '../components/Timer';

	const timerRef = React.createRef();

	const component = create(<Timer 

		ref={timerRef}
		key={0}

		playerState =  {{

				seconds:  300 ,
				byoyomiPeriods: 3,
				byoyomiTime: 10,
				moveNo:0,
				pause:false,

	    	}}

		tick1 = { ()=>{console.log("thick fn")} }

		countAll={ ()=>console.log("this.countAll")}
		move={ ()=> console.warn('move fn log') }
        		

	/>);

	const instance  = component.getInstance();

describe("Timer component",()=>{
	test("it matches snapshot",()=>{


		expect(component.toJSON()).toMatchSnapshot();
	})
})

//ovo treba da fail-uje ako se ne proslede parametri

describe("Timer component",()=>{
        test("text testing",()=>{
        
		

		expect(instance.state.seconds).toBe(300);
        })
})




describe("Timer component",()=>{
        test("click testing",()=>{
        
		instance.pauseProxy();

		expect(instance.state.seconds).toBe(300);
        })
})

