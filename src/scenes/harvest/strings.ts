import LocalizedStrings from 'react-native-localization'

export const strings = new LocalizedStrings({
  en: {
    harvestHeader: 'Harvest',
    notesLabel: 'Notes',
    prefixLabel: 'Prefix',
    roomLabel: 'Room',
    saveButton: 'Save',
    shelfTimeLabel: 'Shelf time (days)',
    sourceMycelium: 'Source mycelium',
    strainSourceInformation: `You're doing flush number %s when harvesting from bulk: `,
    weightLabel: 'Weight (g)',
    weightReminder: `⚠️ You've added the weight in the previous flush, remember to add the weight in this one before saving!`,
  },
  es: {
    harvestHeader: 'Cosecha',
    notesLabel: 'Observaciones',
    prefixLabel: 'Prefijo',
    roomLabel: 'Ambiente destino',
    saveButton: 'Guardar',
    shelfTimeLabel: 'Tiempo de vida (días)',
    sourceType: 'Tipo de fuente',
    strainSourceInformation: `Estás haciendo el flush número %s al hacer esta cosecha al bulk: `,
    weightLabel: 'Peso (g)',
    weightReminder: `⚠️ Agregaste el peso en el flush anterior, recuerda cargar el peso antes de continuar!`,
  },
})
