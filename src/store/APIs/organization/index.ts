import { baseApi } from 'src/store/APIs'

import {
  createOrganization,
  generateOrganizationCode,
  joinOrganization,
} from './actions'

export const organizationsApi = baseApi.injectEndpoints({
  endpoints: builder => ({
    createOrganization: createOrganization(builder),
    generateOrgInvitationCode: generateOrganizationCode(builder),
    joinOrganization: joinOrganization(builder),
  }),
})

export const {
  useCreateOrganizationMutation,
  useJoinOrganizationMutation,
  useGenerateOrgInvitationCodeQuery,
} = organizationsApi
