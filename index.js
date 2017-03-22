import { createStore } from 'redux'


// Define Action types
const ADD_TODO = 'ADD_TODO'
const REMOVE_TODO = 'REMOVE_TODO'
const TOGGLE_TODO = 'TOGGLE_TODO'
const SET_VISIBILITY_FILTER = 'SET_VISIBILITY_FILTER'

const VisibilityFilters = {
    SHOW_ALL: 'SHOW_ALL',
    SHOW_COMPLETED: 'SHOW_COMPLETED',
    SHOW_ACTIVE: 'SHOW_ACTIVE'
}

// Action Creators
function addTodo(text) {
    return { type: ADD_TODO, text }
}

function toggleTodo(index) {
    return { type: TOGGLE_TODO, text }
}

function setVisibilityFilter(text) {
    return { type: SET_VISIBILITY_FILTER, text }
}
//
