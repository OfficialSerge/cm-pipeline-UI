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

  // store form state in local storage
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

  let error = null
  const form = [...state.form]
  const section = form[action.sectionID]
  const field = section.fields[action.fieldID]

  if (action.stringPayload == '') {
    error = 'Required'
  }

  section.fields[action.fieldID] = {
    ...field,
    value: action.stringPayload,
    error,
  }

  return { ...state, form }
}

function handleNumberFieldChange(
  state: CoreApplicationState,
  action: CoreApplicationActions,
) {
  if (action.stringPayload == undefined) {
    return { ...state }
  } else if (action.sectionID == undefined || action.fieldID == undefined) {
    return { ...state }
  }

  let error = null
  const form = [...state.form]
  const section = form[action.sectionID]
  const field = section.fields[action.fieldID] as NumberField

  const numberPayload = parseFloat(action.stringPayload)

  section.fields[action.fieldID] = {
    ...field,
    value: numberPayload,
    error,
  }

  return { ...state, form }
}

function handleAlgorithmChange(
  state: CoreApplicationState,
  action: CoreApplicationActions,
): CoreApplicationState {
  if (action.stringPayload == undefined) {
    return { ...state }
  }

  const algorithm = { ...state.algorithm, value: action.stringPayload }
  return { ...state, algorithm }
}
