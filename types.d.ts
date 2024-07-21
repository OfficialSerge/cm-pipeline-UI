type NumberField = {
  readonly label: string
  readonly type: string
  readonly name: string
  min: number
  max: number
  step: number
  value: number
  error: string | null
}

type StringField = {
  readonly label: string
  readonly type: string
  readonly name: string
  value: string
  error: string | null
}

type Field = StringField | NumberField

type FormSection = {
  title: string
  fields: Feild[]
}

interface CoreApplicationState {
  key: string // for session storage
  isLoggedIn: boolean
  algorithm: StringField
  form: FormSection[]
}

interface CoreApplicationActions {
  stringPayload?: string
  sectionID?: number
  fieldID?: number
  type: 'stringFieldChange' | 'numberFieldChange' | 'algorithmChange'
}
