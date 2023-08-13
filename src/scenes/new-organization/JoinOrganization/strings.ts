import { createLocalizedStrings } from 'src/common/createLocalizedStrings'

export const strings = createLocalizedStrings({
  en: {
    codeLabel: 'Invitation code',
    joinOrganizationButton: 'Join organization',
    screenHeader: 'join your Organization',
    screenSubtitle: `Enter the code the organization's creator shared to you`,
    wantoToCreateToAnOrganization: 'I want to create a new organization',
  },
  es: {
    codeLabel: 'Código de invitación',
    joinOrganizationButton: 'Unirse a organización',
    screenHeader: 'Únete a una organizacion',
    // TODO: Check design
    screenSubtitle:
      'Ingresa el código que te compartió el creador de la organización',
    wantoToCreateToAnOrganization: 'Quiero crear una nueva organización',
  },
})
