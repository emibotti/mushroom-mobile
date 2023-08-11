import {
  clearPersistedObject,
  getPersistedObject,
  KeysPersisted,
  PersistedUser,
  persistObject,
} from 'src/common/persistance'
import { HttpMethod } from 'src/store/APIs'
import { AuthResponse } from 'src/store/APIs/auth/types'
import { Builder } from 'src/store/APIs/types'

import {
  deserializeOrganizationCode,
  Endpoints,
  JoinOrganizationRequest,
  NewOrganization,
  NewOrganizationRequest,
  NewOrganizationResponse,
  organizationDeserializer,
} from './types'

const authenticateOrganization = (response: AuthResponse) => {
  // TODO: Review if it is needed to clear it
  const persistedUser = getPersistedObject<PersistedUser>(KeysPersisted.USER)
  clearPersistedObject(KeysPersisted.USER)
  persistObject<PersistedUser>(
    {
      ...persistedUser,
      hasOrganization: !!response.data.organization_id,
    },
    KeysPersisted.USER,
  )
  return response
}

export const createOrganization = (builder: Builder) =>
  builder.mutation<NewOrganizationResponse, NewOrganization>({
    query: ({ name }) => ({
      body: {
        organization: { name },
      } as NewOrganizationRequest,
      method: HttpMethod.Post,
      url: Endpoints.CreateOrganization,
    }),
    transformResponse: organizationDeserializer,
  })

export const joinOrganization = (builder: Builder) =>
  builder.mutation<AuthResponse, JoinOrganizationRequest>({
    query: ({ invitation_code }) => ({
      body: {
        invitation_code,
      } as JoinOrganizationRequest,
      method: HttpMethod.Post,
      url: Endpoints.JoinOrganization,
    }),
    transformResponse: authenticateOrganization,
  })

export const generateOrganizationCode = (builder: Builder) =>
  builder.query<string, void>({
    query: () => Endpoints.GenerateOrganizationInvitationCode,
    transformResponse: deserializeOrganizationCode,
  })
