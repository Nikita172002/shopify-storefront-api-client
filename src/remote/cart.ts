import type { APIResponse } from "typesafe-api-call";
import type { Executor } from "./executor";
import {
  type Cart,
  type CartMutationResult,
  type StorefrontError,
  type CartLineInput,
  type CartLineUpdateInput,
  type CartBuyerIdentityInput,
  type CartInput,
  type Attribute,
  decodeCartResponse,
  decodeCartCreateResponse,
  decodeCartLinesAddResponse,
  decodeCartLinesUpdateResponse,
  decodeCartLinesRemoveResponse,
  decodeCartNoteUpdateResponse,
  decodeCartAttributesUpdateResponse,
  decodeCartBuyerIdentityUpdateResponse,
  decodeCartDiscountCodesUpdateResponse,
  decodeCartGiftCardCodesAddResponse,
} from "../generated/types";
import {
  GET_CART,
  CART_CREATE,
  CART_LINES_ADD,
  CART_LINES_UPDATE,
  CART_LINES_REMOVE,
  CART_NOTE_UPDATE,
  CART_ATTRIBUTES_UPDATE,
  CART_BUYER_IDENTITY_UPDATE,
  CART_DISCOUNT_CODES_UPDATE,
  CART_GIFT_CARD_CODES_ADD,
} from "../queries";

export function createCartApi(executor: Executor): CartApi {
  return {
    get(cartId: string): Promise<APIResponse<Cart, StorefrontError[]>> {
      return executor.execute(
        GET_CART,
        { id: cartId },
        (data) => decodeCartResponse(data)?.cart ?? null
      );
    },

    create(
      input: Partial<CartInput> = {}
    ): Promise<APIResponse<CartMutationResult, StorefrontError[]>> {
      return executor.execute(
        CART_CREATE,
        { input },
        (data) => decodeCartCreateResponse(data)?.cartCreate ?? null
      );
    },

    addLines(
      cartId: string,
      lines: CartLineInput[]
    ): Promise<APIResponse<CartMutationResult, StorefrontError[]>> {
      return executor.execute(
        CART_LINES_ADD,
        { cartId, lines },
        (data) => decodeCartLinesAddResponse(data)?.cartLinesAdd ?? null
      );
    },

    updateLines(
      cartId: string,
      lines: CartLineUpdateInput[]
    ): Promise<APIResponse<CartMutationResult, StorefrontError[]>> {
      return executor.execute(
        CART_LINES_UPDATE,
        { cartId, lines },
        (data) => decodeCartLinesUpdateResponse(data)?.cartLinesUpdate ?? null
      );
    },

    removeLines(
      cartId: string,
      lineIds: string[]
    ): Promise<APIResponse<CartMutationResult, StorefrontError[]>> {
      return executor.execute(
        CART_LINES_REMOVE,
        { cartId, lineIds },
        (data) => decodeCartLinesRemoveResponse(data)?.cartLinesRemove ?? null
      );
    },

    updateNote(
      cartId: string,
      note: string
    ): Promise<APIResponse<CartMutationResult, StorefrontError[]>> {
      return executor.execute(
        CART_NOTE_UPDATE,
        { cartId, note },
        (data) => decodeCartNoteUpdateResponse(data)?.cartNoteUpdate ?? null
      );
    },

    updateAttributes(
      cartId: string,
      attributes: Attribute[]
    ): Promise<APIResponse<CartMutationResult, StorefrontError[]>> {
      return executor.execute(
        CART_ATTRIBUTES_UPDATE,
        { cartId, attributes },
        (data) => decodeCartAttributesUpdateResponse(data)?.cartAttributesUpdate ?? null
      );
    },

    updateBuyerIdentity(
      cartId: string,
      buyerIdentity: Partial<CartBuyerIdentityInput>
    ): Promise<APIResponse<CartMutationResult, StorefrontError[]>> {
      return executor.execute(
        CART_BUYER_IDENTITY_UPDATE,
        { cartId, buyerIdentity },
        (data) => decodeCartBuyerIdentityUpdateResponse(data)?.cartBuyerIdentityUpdate ?? null
      );
    },

    updateDiscountCodes(
      cartId: string,
      discountCodes: string[]
    ): Promise<APIResponse<CartMutationResult, StorefrontError[]>> {
      return executor.execute(
        CART_DISCOUNT_CODES_UPDATE,
        { cartId, discountCodes },
        (data) => decodeCartDiscountCodesUpdateResponse(data)?.cartDiscountCodesUpdate ?? null
      );
    },

    addGiftCardCodes(
      cartId: string,
      giftCardCodes: string[]
    ): Promise<APIResponse<CartMutationResult, StorefrontError[]>> {
      return executor.execute(
        CART_GIFT_CARD_CODES_ADD,
        { cartId, giftCardCodes },
        (data) => decodeCartGiftCardCodesAddResponse(data)?.cartGiftCardCodesAdd ?? null
      );
    },
  };
}

export type CartApi = {
  get: (cartId: string) => Promise<APIResponse<Cart, StorefrontError[]>>;
  create: (
    input?: Partial<CartInput>
  ) => Promise<APIResponse<CartMutationResult, StorefrontError[]>>;
  addLines: (
    cartId: string,
    lines: CartLineInput[]
  ) => Promise<APIResponse<CartMutationResult, StorefrontError[]>>;
  updateLines: (
    cartId: string,
    lines: CartLineUpdateInput[]
  ) => Promise<APIResponse<CartMutationResult, StorefrontError[]>>;
  removeLines: (
    cartId: string,
    lineIds: string[]
  ) => Promise<APIResponse<CartMutationResult, StorefrontError[]>>;
  updateNote: (
    cartId: string,
    note: string
  ) => Promise<APIResponse<CartMutationResult, StorefrontError[]>>;
  updateAttributes: (
    cartId: string,
    attributes: Attribute[]
  ) => Promise<APIResponse<CartMutationResult, StorefrontError[]>>;
  updateBuyerIdentity: (
    cartId: string,
    buyerIdentity: Partial<CartBuyerIdentityInput>
  ) => Promise<APIResponse<CartMutationResult, StorefrontError[]>>;
  updateDiscountCodes: (
    cartId: string,
    discountCodes: string[]
  ) => Promise<APIResponse<CartMutationResult, StorefrontError[]>>;
  addGiftCardCodes: (
    cartId: string,
    giftCardCodes: string[]
  ) => Promise<APIResponse<CartMutationResult, StorefrontError[]>>;
};
