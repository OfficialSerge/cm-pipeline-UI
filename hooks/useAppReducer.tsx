'use client'

import { type Dispatch, useEffect, useReducer } from 'react'
import useLocalStorage from '@/hooks/useLocalStorage'
import CoreApplicationStateDefaults from '@/defaults/CoreApplicationStateDefaults.json'

export function useAppReducer(): [
  CoreApplicationState,
  Dispatch<CoreApplicationActions>,
] {
  const LOCAL_STORE_KEY = 'cm-pipeline-key'
  const [getLocalStorage, setLocalStorage] = useLocalStorage(LOCAL_STORE_KEY)
  const localStore = getLocalStorage()

  let initialState: CoreApplicationState | null = null
  if (localStore == null) {
    initialState = {
      ...CoreApplicationStateDefaults,
      key: LOCAL_STORE_KEY,
    } as CoreApplicationState
  } else {
    initialState = {
      ...(localStore as CoreApplicationState),
      key: LOCAL_STORE_KEY,
    }
  }
  const [state, dispatch] = useReducer(reducer, initialState)

  useEffect(() => {
    setLocalStorage(state)
  }, [state])

  return [state, dispatch]
}

function reducer(
  state: CoreApplicationState,
  action: CoreApplicationActions,
): CoreApplicationState {
  switch (action.type) {
    case 'stringFieldChange':
      return handleStringFieldChange(state, action)
    case 'numberFieldChange':
      return handleNumberFieldChange(state, action)
    case 'algorithmChange':
      return handleAlgorithmChange(state, action)
    case 'resolutionChange':
      return handleResolutionChange(state, action)
    case 'nameChange':
      return handleNameChange(state, action)
    case 'kCoreChange':
      return handleKCoreChange(state, action)
    case 'iterationChange':
      return handleIterationChange(state, action)

    default: {
      return { ...state }
    }
  }
}

function handleStringFieldChange(
  state: CoreApplicationState,
  action: CoreApplicationActions,
): CoreApplicationState {
  if (action.stringPayload == undefined) {
    return { ...state }
  } else if (action.sectionID == undefined || action.fieldID == undefined) {
    return { ...state }
  }

  const form = { ...state.form }
  const fieldList = form[action.sectionID].fields
  const field = fieldList[action.fieldID]

  fieldList[action.fieldID] = {
    ...field,
    value: action.stringPayload,
  }

  return { ...state, form }
}

function handleNumberFieldChange(
  state: CoreApplicationState,
  action: CoreApplicationActions,
) {
  if (action.numberPayload == undefined) {
    return { ...state }
  } else if (action.sectionID == undefined || action.fieldID == undefined) {
    return { ...state }
  }

  const form = { ...state.form }
  const fieldList = form[action.sectionID].fields
  const field = fieldList[action.fieldID]

  fieldList[action.fieldID] = {
    ...field,
    value: action.numberPayload,
  }

  return { ...state, form }
}

function handleNameChange(
  state: CoreApplicationState,
  action: CoreApplicationActions,
) {
  if (action.stringPayload == undefined) {
    return { ...state, error: 'undefined payload error' }
  }

  return { ...state, error: null, name: action.stringPayload }
}

function handleAlgorithmChange(
  state: CoreApplicationState,
  action: CoreApplicationActions,
): CoreApplicationState {
  if (action.stringPayload == undefined) {
    return { ...state, error: 'undefined payload error' }
  }

  return { ...state, error: null, algorithm: action.stringPayload }
}

function handleResolutionChange(
  state: CoreApplicationState,
  action: CoreApplicationActions,
): CoreApplicationState {
  if (action.stringPayload == undefined) {
    return { ...state, error: 'undefined payload error' }
  } else if (action.id == undefined) {
    return { ...state, error: 'no index specified' }
  }

  let error = null
  const newResolution = parseFloat(action.stringPayload)

  if (newResolution < 0.01) {
    error = 'number too small'
  } else if (newResolution > 100) {
    error = 'number too large'
  }

  const newParams = [...state.runParamsList]
  const newParam = newParams[action.id]
  newParams[action.id] = {
    ...newParam,
    resolution: newResolution,
  }

  return { ...state, error, runParamsList: newParams }
}

function handleIterationChange(
  state: CoreApplicationState,
  action: CoreApplicationActions,
) {
  if (action.stringPayload == undefined) {
    return { ...state, error: 'undefined payload error' }
  } else if (action.id == undefined) {
    return { ...state, error: 'no index specified' }
  }

  let error = null
  const newIterations = parseFloat(action.stringPayload)

  if (newIterations < 0) {
    error = 'cannot be less than 0'
  }

  const newParams = [...state.runParamsList]
  const newParam = newParams[action.id]
  newParams[action.id] = {
    ...newParam,
    iterations: newIterations,
  }

  return { ...state, error, params: newParams }
}

function handleKCoreChange(
  state: CoreApplicationState,
  action: CoreApplicationActions,
) {
  if (action.stringPayload == undefined) {
    return { ...state, error: 'undefined payload error' }
  } else if (action.id == undefined) {
    return { ...state, error: 'no index specified' }
  }

  let error = null
  const newKCoreValue = parseFloat(action.stringPayload)

  if (newKCoreValue < 0) {
    error = 'cannot be less than 0'
  }

  const newParams = [...state.runParamsList]
  const newParam = newParams[action.id]
  newParams[action.id] = {
    ...newParam,
    kCoreValue: newKCoreValue,
  }

  return { ...state, error, params: newParams }
}
