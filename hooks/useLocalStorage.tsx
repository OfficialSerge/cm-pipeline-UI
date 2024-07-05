'use client'

export default function useLocalStorage<T>(
  key: string,
): [() => T | null, (value: T) => void] {
  function getLocalStorage(): T | null {
    const storedData = window.localStorage.getItem(key)

    if (storedData) {
      try {
        return JSON.parse(storedData)
      } catch (error) {
        console.error('ERROR FETCHING EMAIL CONTENT FROM LOCALSTORAGE', error)
      }
    }
    return null
  }

  function setLocalStorage(value: T) {
    try {
      window.localStorage.setItem(key, JSON.stringify(value))
    } catch (error) {
      console.log('ERROR SETTING STORAGE', error)
    }
  }

  return [getLocalStorage, setLocalStorage]
}
