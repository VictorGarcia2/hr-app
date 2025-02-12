import React from 'react'
import { ModalAddedSuccessful } from './ModalAddedSuccessful'
import { ModalDeleteSuccessful } from './ModalDeleteSuccessful'
import { ModalUserDelete } from './ModalUserDelete'


export function AlertModal() {
  return (
    <>
    <ModalUserDelete/>
    <ModalAddedSuccessful/>
    <ModalDeleteSuccessful/>
    </>
  )
}
