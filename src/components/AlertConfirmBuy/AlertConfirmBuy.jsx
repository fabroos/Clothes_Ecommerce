import React from 'react'
import {
  AlertDialog,
  AlertDialogBody,
  AlertDialogCloseButton,
  AlertDialogContent,
  AlertDialogFooter,
  AlertDialogOverlay,
  Button
} from '@chakra-ui/react'

export function AlertConfirmBuy ({ onClose, cancelRef, isOpen, handleBuy }) {
  return (
    <AlertDialog
      motionPreset='slideInBottom'
      leastDestructiveRef={cancelRef}
      onClose={onClose}
      isOpen={isOpen}
      isCentered
    >
      <AlertDialogOverlay />

      <AlertDialogContent>
        <AlertDialogCloseButton />
        <AlertDialogBody>¿Estas seguro de completar la compra?</AlertDialogBody>
        <AlertDialogFooter>
          <Button ref={cancelRef} onClick={onClose}>
            No
          </Button>
          <Button colorScheme='green' ml={3} onClick={handleBuy}>
            Yes
          </Button>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  )
}
