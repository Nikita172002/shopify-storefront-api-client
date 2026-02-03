import type { APIResponse } from "typesafe-api-call";
import type { Executor } from "./executor";
import {
  type Customer,
  type AccessTokenResult,
  type CustomerAccessTokenDeleteResult,
  type CustomerMutationResult,
  type CustomerRecoverResult,
  type AddressMutationResult,
  type CustomerAddressDeleteResult,
  type StorefrontError,
  type CustomerAccessTokenCreateInput,
  type CustomerCreateInput,
  type CustomerUpdateInput,
  type CustomerResetInput,
  type CustomerActivateInput,
  type MailingAddressInput,
  decodeCustomerResponse,
  decodeCustomerAccessTokenCreateResponse,
  decodeCustomerAccessTokenRenewResponse,
  decodeCustomerAccessTokenDeleteResponse,
  decodeCustomerCreateResponse,
  decodeCustomerUpdateResponse,
  decodeCustomerRecoverResponse,
  decodeCustomerResetResponse,
  decodeCustomerResetByUrlResponse,
  decodeCustomerActivateResponse,
  decodeCustomerActivateByUrlResponse,
  decodeCustomerAddressCreateResponse,
  decodeCustomerAddressUpdateResponse,
  decodeCustomerAddressDeleteResponse,
  decodeCustomerDefaultAddressUpdateResponse,
} from "../generated/types";
import {
  GET_CUSTOMER,
  CUSTOMER_ACCESS_TOKEN_CREATE,
  CUSTOMER_ACCESS_TOKEN_RENEW,
  CUSTOMER_ACCESS_TOKEN_DELETE,
  CUSTOMER_CREATE,
  CUSTOMER_UPDATE,
  CUSTOMER_RECOVER,
  CUSTOMER_RESET,
  CUSTOMER_RESET_BY_URL,
  CUSTOMER_ACTIVATE,
  CUSTOMER_ACTIVATE_BY_URL,
  CUSTOMER_ADDRESS_CREATE,
  CUSTOMER_ADDRESS_UPDATE,
  CUSTOMER_ADDRESS_DELETE,
  CUSTOMER_DEFAULT_ADDRESS_UPDATE,
} from "../queries";

export function createCustomerApi(executor: Executor): CustomerApi {
  return {
    get(
      customerAccessToken: string,
      options: { addressesFirst?: number; ordersFirst?: number } = {}
    ): Promise<APIResponse<Customer, StorefrontError[]>> {
      return executor.execute(
        GET_CUSTOMER,
        {
          customerAccessToken,
          addressesFirst: options.addressesFirst ?? 10,
          ordersFirst: options.ordersFirst ?? 10,
        },
        (data) => decodeCustomerResponse(data)?.customer ?? null
      );
    },

    login(
      input: CustomerAccessTokenCreateInput
    ): Promise<APIResponse<AccessTokenResult, StorefrontError[]>> {
      return executor.execute(
        CUSTOMER_ACCESS_TOKEN_CREATE,
        { input },
        (data) => decodeCustomerAccessTokenCreateResponse(data)?.customerAccessTokenCreate ?? null
      );
    },

    renewToken(
      customerAccessToken: string
    ): Promise<APIResponse<AccessTokenResult, StorefrontError[]>> {
      return executor.execute(
        CUSTOMER_ACCESS_TOKEN_RENEW,
        { customerAccessToken },
        (data) => decodeCustomerAccessTokenRenewResponse(data)?.customerAccessTokenRenew ?? null
      );
    },

    logout(
      customerAccessToken: string
    ): Promise<APIResponse<CustomerAccessTokenDeleteResult, StorefrontError[]>> {
      return executor.execute(
        CUSTOMER_ACCESS_TOKEN_DELETE,
        { customerAccessToken },
        (data) => decodeCustomerAccessTokenDeleteResponse(data)?.customerAccessTokenDelete ?? null
      );
    },

    create(
      input: CustomerCreateInput
    ): Promise<APIResponse<CustomerMutationResult, StorefrontError[]>> {
      return executor.execute(
        CUSTOMER_CREATE,
        { input },
        (data) => decodeCustomerCreateResponse(data)?.customerCreate ?? null
      );
    },

    update(
      customerAccessToken: string,
      customer: CustomerUpdateInput
    ): Promise<APIResponse<CustomerMutationResult, StorefrontError[]>> {
      return executor.execute(
        CUSTOMER_UPDATE,
        { customerAccessToken, customer },
        (data) => decodeCustomerUpdateResponse(data)?.customerUpdate ?? null
      );
    },

    recover(email: string): Promise<APIResponse<CustomerRecoverResult, StorefrontError[]>> {
      return executor.execute(
        CUSTOMER_RECOVER,
        { email },
        (data) => decodeCustomerRecoverResponse(data)?.customerRecover ?? null
      );
    },

    reset(
      id: string,
      input: CustomerResetInput
    ): Promise<APIResponse<AccessTokenResult, StorefrontError[]>> {
      return executor.execute(
        CUSTOMER_RESET,
        { id, input },
        (data) => decodeCustomerResetResponse(data)?.customerReset ?? null
      );
    },

    resetByUrl(
      resetUrl: string,
      password: string
    ): Promise<APIResponse<AccessTokenResult, StorefrontError[]>> {
      return executor.execute(
        CUSTOMER_RESET_BY_URL,
        { resetUrl, password },
        (data) => decodeCustomerResetByUrlResponse(data)?.customerResetByUrl ?? null
      );
    },

    activate(
      id: string,
      input: CustomerActivateInput
    ): Promise<APIResponse<AccessTokenResult, StorefrontError[]>> {
      return executor.execute(
        CUSTOMER_ACTIVATE,
        { id, input },
        (data) => decodeCustomerActivateResponse(data)?.customerActivate ?? null
      );
    },

    activateByUrl(
      activationUrl: string,
      password: string
    ): Promise<APIResponse<AccessTokenResult, StorefrontError[]>> {
      return executor.execute(
        CUSTOMER_ACTIVATE_BY_URL,
        { activationUrl, password },
        (data) => decodeCustomerActivateByUrlResponse(data)?.customerActivateByUrl ?? null
      );
    },

    createAddress(
      customerAccessToken: string,
      address: MailingAddressInput
    ): Promise<APIResponse<AddressMutationResult, StorefrontError[]>> {
      return executor.execute(
        CUSTOMER_ADDRESS_CREATE,
        { customerAccessToken, address },
        (data) => decodeCustomerAddressCreateResponse(data)?.customerAddressCreate ?? null
      );
    },

    updateAddress(
      customerAccessToken: string,
      id: string,
      address: MailingAddressInput
    ): Promise<APIResponse<AddressMutationResult, StorefrontError[]>> {
      return executor.execute(
        CUSTOMER_ADDRESS_UPDATE,
        { customerAccessToken, id, address },
        (data) => decodeCustomerAddressUpdateResponse(data)?.customerAddressUpdate ?? null
      );
    },

    deleteAddress(
      customerAccessToken: string,
      id: string
    ): Promise<APIResponse<CustomerAddressDeleteResult, StorefrontError[]>> {
      return executor.execute(
        CUSTOMER_ADDRESS_DELETE,
        { customerAccessToken, id },
        (data) => decodeCustomerAddressDeleteResponse(data)?.customerAddressDelete ?? null
      );
    },

    setDefaultAddress(
      customerAccessToken: string,
      addressId: string
    ): Promise<APIResponse<CustomerMutationResult, StorefrontError[]>> {
      return executor.execute(
        CUSTOMER_DEFAULT_ADDRESS_UPDATE,
        { customerAccessToken, addressId },
        (data) =>
          decodeCustomerDefaultAddressUpdateResponse(data)?.customerDefaultAddressUpdate ?? null
      );
    },
  };
}

export type CustomerApi = {
  get: (
    customerAccessToken: string,
    options?: { addressesFirst?: number; ordersFirst?: number }
  ) => Promise<APIResponse<Customer, StorefrontError[]>>;
  login: (
    input: CustomerAccessTokenCreateInput
  ) => Promise<APIResponse<AccessTokenResult, StorefrontError[]>>;
  renewToken: (
    customerAccessToken: string
  ) => Promise<APIResponse<AccessTokenResult, StorefrontError[]>>;
  logout: (
    customerAccessToken: string
  ) => Promise<APIResponse<CustomerAccessTokenDeleteResult, StorefrontError[]>>;
  create: (
    input: CustomerCreateInput
  ) => Promise<APIResponse<CustomerMutationResult, StorefrontError[]>>;
  update: (
    customerAccessToken: string,
    customer: CustomerUpdateInput
  ) => Promise<APIResponse<CustomerMutationResult, StorefrontError[]>>;
  recover: (email: string) => Promise<APIResponse<CustomerRecoverResult, StorefrontError[]>>;
  reset: (
    id: string,
    input: CustomerResetInput
  ) => Promise<APIResponse<AccessTokenResult, StorefrontError[]>>;
  resetByUrl: (
    resetUrl: string,
    password: string
  ) => Promise<APIResponse<AccessTokenResult, StorefrontError[]>>;
  activate: (
    id: string,
    input: CustomerActivateInput
  ) => Promise<APIResponse<AccessTokenResult, StorefrontError[]>>;
  activateByUrl: (
    activationUrl: string,
    password: string
  ) => Promise<APIResponse<AccessTokenResult, StorefrontError[]>>;
  createAddress: (
    customerAccessToken: string,
    address: MailingAddressInput
  ) => Promise<APIResponse<AddressMutationResult, StorefrontError[]>>;
  updateAddress: (
    customerAccessToken: string,
    id: string,
    address: MailingAddressInput
  ) => Promise<APIResponse<AddressMutationResult, StorefrontError[]>>;
  deleteAddress: (
    customerAccessToken: string,
    id: string
  ) => Promise<APIResponse<CustomerAddressDeleteResult, StorefrontError[]>>;
  setDefaultAddress: (
    customerAccessToken: string,
    addressId: string
  ) => Promise<APIResponse<CustomerMutationResult, StorefrontError[]>>;
};
