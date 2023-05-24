import React from 'react'
import AppChat from './wrappingEffects'
import AppListenter from './wrappingEffects/windowListener'
import Page from './wrappingEffects/fectching'

export default function AppEffect() {
  return (
    <>
       <AppChat/>
        <AppListenter/>
        <Page/>
    </>

  )
}
