import reducer from './reducer'

test('reducer initial state undefined', ()=>{
    const action = {
        type: 'INCREMENT',
        value: 1
    }

    const state = reducer(undefined, action)
    expect(state).toEqual({count: 1})
})

test('reducer increment', ()=>{
    const initialState = {
        count: 0
    }

    const action = {
        type: 'INCREMENT',
        value: 10
    }

    const state = reducer(initialState, action)
    expect(state).toEqual({count: 10})
})

test('reducer decrement', ()=>{
    const initialState = {
        count: 10
    }

    const action = {
        type: 'DECREMENT',
        value: 4
    }

    const state = reducer(initialState, action)
    expect(state).toEqual({count: 6})
})