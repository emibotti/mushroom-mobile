export enum Endpoints {
  CreateOrganization = '/organizations',
  JoinOrganization = '/join_organization',
  GenerateOrganizationInvitationCode = '/organization_code',
}

export interface NewOrganization {
  name: string
}

export interface NewOrganizationRequest {
  organization: NewOrganization
}

export interface JoinOrganizationRequest {
  invitation_code: string
}

export interface NewOrganizationResponse {
  organization: {
    id: string
    code: string
  }
}

export const organizationDeserializer = ({
  organization,
}: NewOrganizationResponse): NewOrganizationResponse => ({
  organization: { code: organization.code, id: organization.id },
})

export const deserializeOrganizationCode = ({
  organization,
}: NewOrganizationResponse): string => organization.code
