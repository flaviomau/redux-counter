import React from 'react'
import { shallow } from 'enzyme'
import { DisplayCounter } from './DisplayCounter'

describe('<DisplayCounter />', ()=>{
    it('mounts', ()=>{
        const wrapper = shallow(<DisplayCounter count={10} />)
        expect(wrapper.contains(<p> The actual counter is: 10 </p>)).toBe(true)
    })
})