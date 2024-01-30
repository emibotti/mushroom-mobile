import LocalizedStrings from 'react-native-localization'

export const strings = new LocalizedStrings({
  en: {
    createOrganizationButton: 'Create organization',
    logoutButton: 'Logout',
    organizationLabel: 'Name',
    screenHeader: 'Create your Organization',
    screenSubtitle: `Enter your organization's name`,
    wantoToJoinToAnOrganization: 'I want to join to an organization',
  },
  es: {
    createOrganizationButton: 'Crear organización',
    logoutButton: 'Cerrar sesión',
    organizationLabel: 'Nombre',

    screenHeader: 'Crea tu organizacion',
    // TODO: Check design
    screenSubtitle: 'Ingresa el nombre que tendrá tu organización',
    wantoToJoinToAnOrganization: 'Quiero unirme a una organización',
  },
})
