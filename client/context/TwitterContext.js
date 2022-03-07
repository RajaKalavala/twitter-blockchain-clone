import { createContext, useEffect, useState } from 'react'

export const TwitterContext = createContext()

export const TwitterProvider = ({ children }) => {
  const checkIfWalletIsConnected = async () => {
    if (!window.ethereum) return
    try {
      const addressArray = await window.ethereum.request({
        method: 'eth_accounts',
      })
      if (addressArray.length > 0) {
        //connected
      } else {
        // not connected
      }
    } catch (error) {
      console.log(error)
    }
  }
}
