import React from 'react'
import { Formik, Field } from 'formik'

import {
  Checkbox,
  Select,
  TextArea,
  TextField,
  RadioGroup,
  ConditionalField,
} from '.'
import {
  getInitialValues,
  getDefaultValues,
  getValidationSchema,
} from './helpers'

const components = [
  { componentType: 'text', component: TextField },
  { componentType: 'textarea', component: TextArea },
  { componentType: 'select', component: Select },
  { componentType: 'checkbox', component: Checkbox },
  { componentType: 'radioGroup', component: RadioGroup },
]

export const AdvancedForm = ({
  schema,
  onSubmit,
  initialValues,
  onClose,
  buttonLabel = 'Enviar',
  ...props
}) => {
  const defaultValues = getDefaultValues(schema)
  const validationSchema = getValidationSchema(schema)

  return (
    <Formik
      initialValues={getInitialValues(defaultValues, initialValues)}
      validationSchema={validationSchema}
      onSubmit={onSubmit}
      validateOnMount
      {...props}
    >
      {({
        handleSubmit,
        isSubmitting,
        isValid,
        setFieldValue,
        setFieldTouched,
        values,
      }) => {
        return (
          <form onSubmit={handleSubmit} className="advanced-form">
            {schema.map(({ componentType, condition, ...formSchema }) => {
              if (
                !components.some(
                  (component) => component.componentType === componentType,
                )
              ) {
                return null
              }

              const Component = components.find(
                (component) => component.componentType === componentType,
              ).component

              if (condition) {
                return (
                  <ConditionalField
                    key={formSchema.name}
                    show={
                      condition.operator === '='
                        ? values[condition.key] === condition.value
                        : values[condition.key] !== condition.value
                    }
                    onCollapse={() => {
                      setFieldValue(
                        formSchema.name,
                        defaultValues[formSchema.name],
                      )
                      setFieldTouched(formSchema.name, false)
                    }}
                    onShow={() => {
                      setFieldValue(
                        formSchema.name,
                        defaultValues[formSchema.name],
                      )
                    }}
                  >
                    <Field component={Component} {...formSchema} />
                  </ConditionalField>
                )
              }

              return (
                <Field
                  key={formSchema.name}
                  component={Component}
                  {...formSchema}
                />
              )
            })}
            <button 
              className="button navbar-toggler text-uppercase font-weight-bold bg-primary text-white rounded" 
                data-bs-toggle="collapse" 
                data-bs-target="#navbarResponsive" 
                aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation"
                href="#about" onClick={() => '#about'}
              type="submit" disabled={!isValid || isSubmitting}>
              {buttonLabel}
            </button>
          </form>
        )
      }}
    </Formik>
  )
}
