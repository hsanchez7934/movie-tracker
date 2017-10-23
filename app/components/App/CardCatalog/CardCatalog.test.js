import { shallow } from 'enzyme'
import CardCatalog from './CardCatalog'
import ReactDOM from 'react-dom'
import React from 'react'

describe('CardCatalog snapshot', () => {

  it('should always match the snapshot', () => {
    const wrapper = shallow(<CardCatalog  />)

    expect(wrapper).toMatchSnapshot()
  })
})
