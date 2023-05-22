import { BarCodeScanner } from 'expo-barcode-scanner'
import React, { useEffect, useState } from 'react'
import {
  Linking,
  Modal,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native'
import CloseIcon from 'src/assets/icons/closable.svg'
import { APP_PREFIX } from 'src/navigation/routes'

export interface ScannerProps {
  isVisible: boolean
  onClose: () => void
}

export const Scanner: React.FC<ScannerProps> = ({ isVisible, onClose }) => {
  const [hasPermission, setHasPermission] = useState<boolean | null>(null)
  const [scanned, setScanned] = useState(false)

  useEffect(() => {
    const getBarCodeScannerPermissions = async () => {
      const { status } = await BarCodeScanner.requestPermissionsAsync()
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
  }

  if (hasPermission === null) {
    return <Text>Requesting for camera permission</Text>
  }
  if (hasPermission === false) {
    return <Text>No access to camera</Text>
  }

  return (
    <Modal visible={isVisible} animationType="slide" transparent={false}>
      <View style={styles.container}>
        <BarCodeScanner
          style={styles.camera}
          barCodeTypes={[BarCodeScanner.Constants.BarCodeType.qr]}
          onBarCodeScanned={scanned ? undefined : handleBarCodeScanned}
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
