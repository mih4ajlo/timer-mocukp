import React from 'react';
import Config from '../components/Config';
import {create} from 'react-test-renderer';


describe("Config component",()=>{
	test("it matches snapshot",()=>{
		const Component = create(<Config 
			//properties here
			/>);

		expect(component.toJSON()).toMatchSnapshot();
	})
})