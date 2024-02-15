import { BarCodeScanner } from 'expo-barcode-scanner'
import { Camera } from 'expo-camera'
import React, { useEffect, useState } from 'react'
import {
  Linking,
  Modal,
  StyleSheet,
  TouchableOpacity,
  View,
} from 'react-native'
import CloseIcon from 'src/assets/icons/closable.svg'
import { StyledText } from 'src/components/StyledText'
import { APP_PREFIX } from 'src/navigation/routes'

import { strings } from './strings'

export interface ScannerProps {
  isVisible: boolean
  onClose: () => void
}

export const Scanner: React.FC<ScannerProps> = ({ isVisible, onClose }) => {
  const [hasPermission, setHasPermission] = useState<boolean | null>(null)
  const [scanned, setScanned] = useState(false)

  useEffect(() => {
    const getBarCodeScannerPermissions = async () => {
      const { status } = await Camera.requestCameraPermissionsAsync()
      setHasPermission(status === 'granted')
    }

    getBarCodeScannerPermissions()
  }, [])

  const handleBarCodeScanned = ({ data }: { type: string; data: string }) => {
    setScanned(true)
    if (data.includes(APP_PREFIX)) {
      onClose()
      Linking.openURL(data)
    }
    setScanned(false)
  }

  if (hasPermission === null) {
    return <StyledText>{strings.requestingCameraPermission}</StyledText>
  }
  if (hasPermission === false) {
    return <StyledText>{strings.noCameraPermission}</StyledText>
  }

  return (
    <Modal visible={isVisible} animationType="slide" transparent={false}>
      <View style={styles.container}>
        <Camera
          style={styles.camera}
          barCodeScannerSettings={{
            barCodeTypes: [BarCodeScanner.Constants.BarCodeType.qr],
          }}
          onBarCodeScanned={scanned ? undefined : handleBarCodeScanned}
          useCamera2Api={false}
          ratio={'16:9'}
        />
        <TouchableOpacity style={styles.closeButton} onPress={onClose}>
          <CloseIcon fill={'white'} />
        </TouchableOpacity>
      </View>
    </Modal>
  )
}

const styles = StyleSheet.create({
  camera: {
    flex: 1,
  },
  closeButton: {
    position: 'absolute',
    right: 20,
    top: 50,
  },
  closeButtonText: {
    color: '#000000',
    fontSize: 16,
    fontWeight: 'bold',
  },
  container: {
    flex: 1,
  },
})
