type NumberParameter = {
  readonly label: string
  value: number
  error: string | null
}

type StringParameter = {
  readonly label: string
  value: string
  error: string | null
}

type FormSection = {
  title: string
  fields: (StringParameter | NumberParameter)[]
}

interface CoreApplicationState {
  key: string // for session storage
  isLoggedIn: boolean
  form: FormSection[]
}

interface CoreApplicationActions {
  stringPayload?: string
  numberPayload?: number
  sectionID?: number
  fieldID?: number
  type:
    | 'stringFieldChange'
    | 'numberFieldChange'
    | 'nameChange'
    | 'algorithmChange'
    | 'resolutionChange'
    | 'iterationChange'
    | 'kCoreChange'
}
