import React, { createContext, useContext, useEffect, useState } from 'react'
import { useSession } from '../SessionContext'
import { useEvent } from '../EventContext'
import { Socket } from './socket'

/**
 * Create SessionContext
 * This context will manage the socket conection and provide an easy interface
 */
export const WebsocketContext = createContext()

// let socket = null

/**
 * Custom provider to session manager
 * This provider has a reducer for manage session state
 * @param {props} props
 */
export const WebsocketProvider = ({ settings, children }) => {
  const [session] = useSession()
  const [events] = useEvent()
  const [socket, setSocket] = useState()

  useEffect(() => {
    if (session.loading) return
    if (session.auth && settings.url && settings.project) {
      const _socket = new Socket({ ...settings, accessToken: session.token })
      setSocket(_socket)
    }
    if (!session.auth) {
      socket && socket.close()
    }
  }, [session])

  useEffect(() => {
    if (socket) {
      socket.connect()
    }
    return () => {
      socket && socket.close()
    }
  }, [socket])

  useEffect(() => {
    if (socket?.socket) {
      socket.socket.on('connect', () => {
        window.localStorage.setItem('websocket-connected-date', new Date())
        events.emit('websocket_connected')
      })

      socket.socket.on('disconnect', (reason) => {
        if (reason === 'io server disconnect' && session.auth) {
          window.setTimeout(socket.socket.connect(), 1000)
        }
      })

      socket.socket.on('connect_error', () => {
        if (session.auth) {
          window.setTimeout(socket.socket.connect(), 1000)
        }
      })
    }
  }, [socket?.socket, session])

  return (
    <WebsocketContext.Provider value={socket}>
      {children}
    </WebsocketContext.Provider>
  )
}

/**
 * Hook to get and update websocket state
 */
export const useWebsocket = () => {
  const sockerManager = useContext(WebsocketContext)
  return sockerManager || new Socket({})
}
