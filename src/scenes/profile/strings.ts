import { createLocalizedStrings } from 'src/common/createLocalizedStrings'

export const strings = createLocalizedStrings({
  en: {
    confirmLogoutCancel: 'Cancel',
    confirmLogoutTitle: 'Are sure you want to logout?',
    confirmLogoutYes: 'Yes',
    logoutButton: `Logout`,
    screenHeader: 'Invite your coworkers!',
    screenSubtitle:
      'Copy the following code to invite the other members of your team:',
  },
  es: {
    confirmLogoutCancel: 'Cancelar',
    confirmLogoutTitle: 'Estas seguro que quieres cerrar sesión?',
    confirmLogoutYes: 'Sí',
    logoutButton: 'Cerrar sesión',
    screenHeader: 'Invita a tu equipo!',
    screenSubtitle:
      'Copia el siguiente código para invitar a los miembros de tu equipo a la organización que creaste:',
  },
})
