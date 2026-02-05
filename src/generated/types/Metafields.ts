import { type Image, decodeImage,  type VideoSource, decodeVideoSource,  type Model3dSource, decodeModel3dSource,  type PageInfo, decodePageInfo  } from './index';
import { isJSON, decodeString, _decodeString , decodeNumber, _decodeNumber , decodeArray, _decodeArray , decodeBoolean, _decodeBoolean  } from 'type-decoder';

/**
 * @type { MetafieldReferenceType }
 * @description Type of resource a metafield references (discriminator for union)
 */
export type MetafieldReferenceType =
  | 'Collection'
  | 'GenericFile'
  | 'MediaImage'
  | 'Metaobject'
  | 'Model3d'
  | 'Page'
  | 'Product'
  | 'ProductVariant'
  | 'Video'
;

export function decodeMetafieldReferenceType(rawInput: unknown): MetafieldReferenceType | null {
  switch (rawInput) {
    case 'Collection':
    case 'GenericFile':
    case 'MediaImage':
    case 'Metaobject':
    case 'Model3d':
    case 'Page':
    case 'Product':
    case 'ProductVariant':
    case 'Video':
     return rawInput;
  }
  return null;
}

export function _decodeMetafieldReferenceType(rawInput: unknown): MetafieldReferenceType | undefined {
  switch (rawInput) {
    case 'Collection':
    case 'GenericFile':
    case 'MediaImage':
    case 'Metaobject':
    case 'Model3d':
    case 'Page':
    case 'Product':
    case 'ProductVariant':
    case 'Video':
    return rawInput;
  }
  return;
}

/**
 * @type { MetafieldParentResourceTypename }
 * @description GraphQL type name for metafield parent resources
 */
export type MetafieldParentResourceTypename =
  | 'Article'
  | 'Blog'
  | 'Cart'
  | 'Collection'
  | 'Customer'
  | 'Location'
  | 'Market'
  | 'Order'
  | 'Page'
  | 'Product'
  | 'ProductVariant'
  | 'Shop'
;

export function decodeMetafieldParentResourceTypename(rawInput: unknown): MetafieldParentResourceTypename | null {
  switch (rawInput) {
    case 'Article':
    case 'Blog':
    case 'Cart':
    case 'Collection':
    case 'Customer':
    case 'Location':
    case 'Market':
    case 'Order':
    case 'Page':
    case 'Product':
    case 'ProductVariant':
    case 'Shop':
     return rawInput;
  }
  return null;
}

export function _decodeMetafieldParentResourceTypename(rawInput: unknown): MetafieldParentResourceTypename | undefined {
  switch (rawInput) {
    case 'Article':
    case 'Blog':
    case 'Cart':
    case 'Collection':
    case 'Customer':
    case 'Location':
    case 'Market':
    case 'Order':
    case 'Page':
    case 'Product':
    case 'ProductVariant':
    case 'Shop':
    return rawInput;
  }
  return;
}

/**
 * @type { MetafieldReferenceTypename }
 * @description GraphQL type name for metafield references
 */
export type MetafieldReferenceTypename =
  | 'Collection'
  | 'GenericFile'
  | 'MediaImage'
  | 'Metaobject'
  | 'Model3d'
  | 'Page'
  | 'Product'
  | 'ProductVariant'
  | 'Video'
;

export function decodeMetafieldReferenceTypename(rawInput: unknown): MetafieldReferenceTypename | null {
  switch (rawInput) {
    case 'Collection':
    case 'GenericFile':
    case 'MediaImage':
    case 'Metaobject':
    case 'Model3d':
    case 'Page':
    case 'Product':
    case 'ProductVariant':
    case 'Video':
     return rawInput;
  }
  return null;
}

export function _decodeMetafieldReferenceTypename(rawInput: unknown): MetafieldReferenceTypename | undefined {
  switch (rawInput) {
    case 'Collection':
    case 'GenericFile':
    case 'MediaImage':
    case 'Metaobject':
    case 'Model3d':
    case 'Page':
    case 'Product':
    case 'ProductVariant':
    case 'Video':
    return rawInput;
  }
  return;
}

/**
 * @type { Metafield }
 * @description A metafield representing custom metadata attached to a resource
 */
export type Metafield = {
  /**
   * @description Globally unique identifier
   * @type { string }
   * @memberof Metafield
  */
  id: string;
  /**
   * @description Container for a group of metafields
   * @type { string }
   * @memberof Metafield
  */
  namespace: string;
  /**
   * @description Unique identifier within the namespace
   * @type { string }
   * @memberof Metafield
  */
  key: string;
  /**
   * @description Value stored as a string (may be JSON for complex types)
   * @type { string }
   * @memberof Metafield
  */
  value: string;
  /**
   * @description Metafield type (e.g., single_line_text_field, json, number_integer)
   * @type { string }
   * @memberof Metafield
  */
  type: string;
  /**
   * @description Description of the metafield
   * @type { string }
   * @memberof Metafield
  */
  description: string | null;
    /**
   * @description When the metafield was created
   * @type { string }
   * @memberof Metafield
  */
  createdAt: string | null;
    /**
   * @description When the metafield was last updated
   * @type { string }
   * @memberof Metafield
  */
  updatedAt: string | null;
    /**
   * @description The resource the metafield is attached to
   * @type { MetafieldParentResource }
   * @memberof Metafield
  */
  parentResource: MetafieldParentResource | null;
    /**
   * @description Referenced object if type is a resource reference
   * @type { MetafieldReference }
   * @memberof Metafield
  */
  reference: MetafieldReference | null;
    /**
   * @description List of references if type is a resource reference list
   * @type { MetafieldReferenceConnection }
   * @memberof Metafield
  */
  references: MetafieldReferenceConnection | null;
  };

export function decodeMetafield(rawInput: unknown): Metafield | null {
  if (isJSON(rawInput)) {
    const decodedId = decodeString(rawInput['id']);
    const decodedNamespace = decodeString(rawInput['namespace']);
    const decodedKey = decodeString(rawInput['key']);
    const decodedValue = decodeString(rawInput['value']);
    const decodedType = decodeString(rawInput['type']);
    const decodedDescription = decodeString(rawInput['description']);
    const decodedCreatedAt = decodeString(rawInput['createdAt']);
    const decodedUpdatedAt = decodeString(rawInput['updatedAt']);
    const decodedParentResource = decodeMetafieldParentResource(rawInput['parentResource']);
    const decodedReference = decodeMetafieldReference(rawInput['reference']);
    const decodedReferences = decodeMetafieldReferenceConnection(rawInput['references']);

    if (
      decodedId === null ||
      decodedNamespace === null ||
      decodedKey === null ||
      decodedValue === null ||
      decodedType === null
    ) {
      return null;
    }

    return {
      id: decodedId,
      namespace: decodedNamespace,
      key: decodedKey,
      value: decodedValue,
      type: decodedType,
      description: decodedDescription,
      createdAt: decodedCreatedAt,
      updatedAt: decodedUpdatedAt,
      parentResource: decodedParentResource,
      reference: decodedReference,
      references: decodedReferences
    };
  }
  return null;
}


/**
 * @type { MetafieldParentResource }
 * @description Union type for resources that can have metafields. Check __typename.
 */
export type MetafieldParentResource = {
  /**
   * @description The GraphQL type name
   * @type { MetafieldParentResourceTypename }
   * @memberof MetafieldParentResource
  */
  __typename: MetafieldParentResourceTypename | null;
    /**
   * @type { string }
   * @memberof MetafieldParentResource
  */
  id: string | null;
    /**
   * @type { string }
   * @memberof MetafieldParentResource
  */
  title: string | null;
    /**
   * @type { string }
   * @memberof MetafieldParentResource
  */
  handle: string | null;
  };

export function decodeMetafieldParentResource(rawInput: unknown): MetafieldParentResource | null {
  if (isJSON(rawInput)) {
    const decodedTypename = decodeMetafieldParentResourceTypename(rawInput['__typename']);
    const decodedId = decodeString(rawInput['id']);
    const decodedTitle = decodeString(rawInput['title']);
    const decodedHandle = decodeString(rawInput['handle']);


    return {
      __typename: decodedTypename,
      id: decodedId,
      title: decodedTitle,
      handle: decodedHandle
    };
  }
  return null;
}


/**
 * @type { MetafieldReference }
 * @description A reference to another resource from a metafield. Check __typename for actual type.
 */
export type MetafieldReference = {
  /**
   * @description The GraphQL type name
   * @type { MetafieldReferenceTypename }
   * @memberof MetafieldReference
  */
  __typename: MetafieldReferenceTypename | null;
    /**
   * @type { string }
   * @memberof MetafieldReference
  */
  id: string | null;
    /**
   * @type { string }
   * @memberof MetafieldReference
  */
  title: string | null;
    /**
   * @type { string }
   * @memberof MetafieldReference
  */
  handle: string | null;
    /**
   * @type { string }
   * @memberof MetafieldReference
  */
  url: string | null;
    /**
   * @type { string }
   * @memberof MetafieldReference
  */
  alt: string | null;
    /**
   * @type { number }
   * @memberof MetafieldReference
  */
  width: number | null;
    /**
   * @type { number }
   * @memberof MetafieldReference
  */
  height: number | null;
    /**
   * @type { string }
   * @memberof MetafieldReference
  */
  mimeType: string | null;
    /**
   * @type { number }
   * @memberof MetafieldReference
  */
  originalFileSize: number | null;
    /**
   * @type { string }
   * @memberof MetafieldReference
  */
  type: string | null;
    /**
   * @type { Image }
   * @memberof MetafieldReference
  */
  image: Image | null;
    /**
   * @type { VideoSource[] }
   * @memberof MetafieldReference
  */
  sources: VideoSource[] | null;
    /**
   * @type { Image }
   * @memberof MetafieldReference
  */
  previewImage: Image | null;
    /**
   * @type { Model3dSource[] }
   * @memberof MetafieldReference
  */
  model3dSources: Model3dSource[] | null;
  };

export function decodeMetafieldReference(rawInput: unknown): MetafieldReference | null {
  if (isJSON(rawInput)) {
    const decodedTypename = decodeMetafieldReferenceTypename(rawInput['__typename']);
    const decodedId = decodeString(rawInput['id']);
    const decodedTitle = decodeString(rawInput['title']);
    const decodedHandle = decodeString(rawInput['handle']);
    const decodedUrl = decodeString(rawInput['url']);
    const decodedAlt = decodeString(rawInput['alt']);
    const decodedWidth = decodeNumber(rawInput['width']);
    const decodedHeight = decodeNumber(rawInput['height']);
    const decodedMimeType = decodeString(rawInput['mimeType']);
    const decodedOriginalFileSize = decodeNumber(rawInput['originalFileSize']);
    const decodedType = decodeString(rawInput['type']);
    const decodedImage = decodeImage(rawInput['image']);
    const decodedSources = decodeArray(rawInput['sources'], decodeVideoSource);
    const decodedPreviewImage = decodeImage(rawInput['previewImage']);
    const decodedModel3dSources = decodeArray(rawInput['model3dSources'], decodeModel3dSource);


    return {
      __typename: decodedTypename,
      id: decodedId,
      title: decodedTitle,
      handle: decodedHandle,
      url: decodedUrl,
      alt: decodedAlt,
      width: decodedWidth,
      height: decodedHeight,
      mimeType: decodedMimeType,
      originalFileSize: decodedOriginalFileSize,
      type: decodedType,
      image: decodedImage,
      sources: decodedSources,
      previewImage: decodedPreviewImage,
      model3dSources: decodedModel3dSources
    };
  }
  return null;
}


/**
 * @type { GenericFile }
 * @description A generic file reference
 */
export type GenericFile = {
  /**
   * @type { string }
   * @memberof GenericFile
  */
  id: string;
  /**
   * @description URL of the file
   * @type { string }
   * @memberof GenericFile
  */
  url: string;
  /**
   * @type { string }
   * @memberof GenericFile
  */
  alt: string | null;
    /**
   * @type { string }
   * @memberof GenericFile
  */
  mimeType: string | null;
    /**
   * @description File size in bytes
   * @type { number }
   * @memberof GenericFile
  */
  originalFileSize: number | null;
    /**
   * @type { Image }
   * @memberof GenericFile
  */
  previewImage: Image | null;
  };

export function decodeGenericFile(rawInput: unknown): GenericFile | null {
  if (isJSON(rawInput)) {
    const decodedId = decodeString(rawInput['id']);
    const decodedUrl = decodeString(rawInput['url']);
    const decodedAlt = decodeString(rawInput['alt']);
    const decodedMimeType = decodeString(rawInput['mimeType']);
    const decodedOriginalFileSize = decodeNumber(rawInput['originalFileSize']);
    const decodedPreviewImage = decodeImage(rawInput['previewImage']);

    if (
      decodedId === null ||
      decodedUrl === null
    ) {
      return null;
    }

    return {
      id: decodedId,
      url: decodedUrl,
      alt: decodedAlt,
      mimeType: decodedMimeType,
      originalFileSize: decodedOriginalFileSize,
      previewImage: decodedPreviewImage
    };
  }
  return null;
}


/**
 * @type { MetafieldReferenceConnection }
 * @description Paginated list of metafield references
 */
export type MetafieldReferenceConnection = {
  /**
   * @type { MetafieldReferenceEdge[] }
   * @memberof MetafieldReferenceConnection
  */
  edges: MetafieldReferenceEdge[] | null;
    /**
   * @type { MetafieldReference[] }
   * @memberof MetafieldReferenceConnection
  */
  nodes: MetafieldReference[];
  /**
   * @type { PageInfo }
   * @memberof MetafieldReferenceConnection
  */
  pageInfo: PageInfo | null;
  };

export function decodeMetafieldReferenceConnection(rawInput: unknown): MetafieldReferenceConnection | null {
  if (isJSON(rawInput)) {
    const decodedEdges = decodeArray(rawInput['edges'], decodeMetafieldReferenceEdge);
    const decodedNodes = decodeArray(rawInput['nodes'], decodeMetafieldReference);
    const decodedPageInfo = decodePageInfo(rawInput['pageInfo']);

    if (
      decodedNodes === null
    ) {
      return null;
    }

    return {
      edges: decodedEdges,
      nodes: decodedNodes,
      pageInfo: decodedPageInfo
    };
  }
  return null;
}


/**
 * @type { MetafieldReferenceEdge }
 * @description An edge in a metafield reference connection
 */
export type MetafieldReferenceEdge = {
  /**
   * @type { MetafieldReference }
   * @memberof MetafieldReferenceEdge
  */
  node: MetafieldReference;
  /**
   * @type { string }
   * @memberof MetafieldReferenceEdge
  */
  cursor: string | null;
  };

export function decodeMetafieldReferenceEdge(rawInput: unknown): MetafieldReferenceEdge | null {
  if (isJSON(rawInput)) {
    const decodedNode = decodeMetafieldReference(rawInput['node']);
    const decodedCursor = decodeString(rawInput['cursor']);

    if (
      decodedNode === null
    ) {
      return null;
    }

    return {
      node: decodedNode,
      cursor: decodedCursor
    };
  }
  return null;
}


/**
 * @type { Metaobject }
 * @description A metaobject instance based on a MetaobjectDefinition
 */
export type Metaobject = {
  /**
   * @description Globally unique identifier
   * @type { string }
   * @memberof Metaobject
  */
  id: string;
  /**
   * @description Unique handle (useful as custom ID)
   * @type { string }
   * @memberof Metaobject
  */
  handle: string;
  /**
   * @description The type of the metaobject
   * @type { string }
   * @memberof Metaobject
  */
  type: string;
  /**
   * @description When the metaobject was last updated
   * @type { string }
   * @memberof Metaobject
  */
  updatedAt: string | null;
    /**
   * @description All object fields with defined values
   * @type { MetaobjectField[] }
   * @memberof Metaobject
  */
  fields: MetaobjectField[];
  /**
   * @description Access a single field by key
   * @type { MetaobjectField }
   * @memberof Metaobject
  */
  field: MetaobjectField | null;
    /**
   * @description URL on the online store (for renderable metaobjects)
   * @type { string }
   * @memberof Metaobject
  */
  onlineStoreUrl: string | null;
    /**
   * @description SEO information (for renderable metaobjects)
   * @type { MetaobjectSEO }
   * @memberof Metaobject
  */
  seo: MetaobjectSEO | null;
  };

export function decodeMetaobject(rawInput: unknown): Metaobject | null {
  if (isJSON(rawInput)) {
    const decodedId = decodeString(rawInput['id']);
    const decodedHandle = decodeString(rawInput['handle']);
    const decodedType = decodeString(rawInput['type']);
    const decodedUpdatedAt = decodeString(rawInput['updatedAt']);
    const decodedFields = decodeArray(rawInput['fields'], decodeMetaobjectField);
    const decodedField = decodeMetaobjectField(rawInput['field']);
    const decodedOnlineStoreUrl = decodeString(rawInput['onlineStoreUrl']);
    const decodedSeo = decodeMetaobjectSEO(rawInput['seo']);

    if (
      decodedId === null ||
      decodedHandle === null ||
      decodedType === null ||
      decodedFields === null
    ) {
      return null;
    }

    return {
      id: decodedId,
      handle: decodedHandle,
      type: decodedType,
      updatedAt: decodedUpdatedAt,
      fields: decodedFields,
      field: decodedField,
      onlineStoreUrl: decodedOnlineStoreUrl,
      seo: decodedSeo
    };
  }
  return null;
}


/**
 * @type { MetaobjectSEO }
 * @description SEO information for a metaobject
 */
export type MetaobjectSEO = {
  /**
   * @description The SEO title field
   * @type { MetaobjectField }
   * @memberof MetaobjectSEO
  */
  title: MetaobjectField | null;
    /**
   * @description The meta description field
   * @type { MetaobjectField }
   * @memberof MetaobjectSEO
  */
  description: MetaobjectField | null;
  };

export function decodeMetaobjectSEO(rawInput: unknown): MetaobjectSEO | null {
  if (isJSON(rawInput)) {
    const decodedTitle = decodeMetaobjectField(rawInput['title']);
    const decodedDescription = decodeMetaobjectField(rawInput['description']);


    return {
      title: decodedTitle,
      description: decodedDescription
    };
  }
  return null;
}


/**
 * @type { MetaobjectField }
 * @description A field in a metaobject
 */
export type MetaobjectField = {
  /**
   * @description The field key
   * @type { string }
   * @memberof MetaobjectField
  */
  key: string;
  /**
   * @description The field value
   * @type { string }
   * @memberof MetaobjectField
  */
  value: string | null;
    /**
   * @description Field type (e.g., single_line_text_field, file_reference)
   * @type { string }
   * @memberof MetaobjectField
  */
  type: string;
  /**
   * @description Referenced object if field is a reference type
   * @type { MetafieldReference }
   * @memberof MetaobjectField
  */
  reference: MetafieldReference | null;
    /**
   * @description List of references if field is a reference list type
   * @type { MetafieldReferenceConnection }
   * @memberof MetaobjectField
  */
  references: MetafieldReferenceConnection | null;
  };

export function decodeMetaobjectField(rawInput: unknown): MetaobjectField | null {
  if (isJSON(rawInput)) {
    const decodedKey = decodeString(rawInput['key']);
    const decodedValue = decodeString(rawInput['value']);
    const decodedType = decodeString(rawInput['type']);
    const decodedReference = decodeMetafieldReference(rawInput['reference']);
    const decodedReferences = decodeMetafieldReferenceConnection(rawInput['references']);

    if (
      decodedKey === null ||
      decodedType === null
    ) {
      return null;
    }

    return {
      key: decodedKey,
      value: decodedValue,
      type: decodedType,
      reference: decodedReference,
      references: decodedReferences
    };
  }
  return null;
}


/**
 * @type { MetaobjectConnection }
 * @description Paginated list of metaobjects
 */
export type MetaobjectConnection = {
  /**
   * @type { MetaobjectEdge[] }
   * @memberof MetaobjectConnection
  */
  edges: MetaobjectEdge[] | null;
    /**
   * @type { Metaobject[] }
   * @memberof MetaobjectConnection
  */
  nodes: Metaobject[];
  /**
   * @type { PageInfo }
   * @memberof MetaobjectConnection
  */
  pageInfo: PageInfo;
};

export function decodeMetaobjectConnection(rawInput: unknown): MetaobjectConnection | null {
  if (isJSON(rawInput)) {
    const decodedEdges = decodeArray(rawInput['edges'], decodeMetaobjectEdge);
    const decodedNodes = decodeArray(rawInput['nodes'], decodeMetaobject);
    const decodedPageInfo = decodePageInfo(rawInput['pageInfo']);

    if (
      decodedNodes === null ||
      decodedPageInfo === null
    ) {
      return null;
    }

    return {
      edges: decodedEdges,
      nodes: decodedNodes,
      pageInfo: decodedPageInfo
    };
  }
  return null;
}


/**
 * @type { MetaobjectEdge }
 * @description An edge in a metaobject connection
 */
export type MetaobjectEdge = {
  /**
   * @type { Metaobject }
   * @memberof MetaobjectEdge
  */
  node: Metaobject;
  /**
   * @type { string }
   * @memberof MetaobjectEdge
  */
  cursor: string;
};

export function decodeMetaobjectEdge(rawInput: unknown): MetaobjectEdge | null {
  if (isJSON(rawInput)) {
    const decodedNode = decodeMetaobject(rawInput['node']);
    const decodedCursor = decodeString(rawInput['cursor']);

    if (
      decodedNode === null ||
      decodedCursor === null
    ) {
      return null;
    }

    return {
      node: decodedNode,
      cursor: decodedCursor
    };
  }
  return null;
}


/**
 * @type { MetaobjectHandleInput }
 * @description Input for fetching a metaobject by handle
 */
export type MetaobjectHandleInput = {
  /**
   * @description The handle of the metaobject
   * @type { string }
   * @memberof MetaobjectHandleInput
  */
  handle: string;
  /**
   * @description The type of the metaobject
   * @type { string }
   * @memberof MetaobjectHandleInput
  */
  type: string;
};

export function decodeMetaobjectHandleInput(rawInput: unknown): MetaobjectHandleInput | null {
  if (isJSON(rawInput)) {
    const decodedHandle = decodeString(rawInput['handle']);
    const decodedType = decodeString(rawInput['type']);

    if (
      decodedHandle === null ||
      decodedType === null
    ) {
      return null;
    }

    return {
      handle: decodedHandle,
      type: decodedType
    };
  }
  return null;
}


/**
 * @type { HasMetafieldsIdentifier }
 * @description Input to identify a metafield by namespace and key
 */
export type HasMetafieldsIdentifier = {
  /**
   * @description The namespace (omit for app-reserved namespace)
   * @type { string }
   * @memberof HasMetafieldsIdentifier
  */
  namespace: string | null;
    /**
   * @description The metafield key
   * @type { string }
   * @memberof HasMetafieldsIdentifier
  */
  key: string;
};

export function decodeHasMetafieldsIdentifier(rawInput: unknown): HasMetafieldsIdentifier | null {
  if (isJSON(rawInput)) {
    const decodedNamespace = decodeString(rawInput['namespace']);
    const decodedKey = decodeString(rawInput['key']);

    if (
      decodedKey === null
    ) {
      return null;
    }

    return {
      namespace: decodedNamespace,
      key: decodedKey
    };
  }
  return null;
}


/**
 * @type { GetMetaobjectsArgs }
 * @description Arguments for fetching metaobjects
 */
export type GetMetaobjectsArgs = {
  /**
   * @description The metaobject type to fetch
   * @type { string }
   * @memberof GetMetaobjectsArgs
  */
  type: string;
  /**
   * @type { number }
   * @memberof GetMetaobjectsArgs
  */
  first: number | null;
    /**
   * @type { string }
   * @memberof GetMetaobjectsArgs
  */
  after: string | null;
    /**
   * @type { number }
   * @memberof GetMetaobjectsArgs
  */
  last: number | null;
    /**
   * @type { string }
   * @memberof GetMetaobjectsArgs
  */
  before: string | null;
    /**
   * @type { boolean }
   * @memberof GetMetaobjectsArgs
  */
  reverse: boolean | null;
    /**
   * @description Sort key for the query
   * @type { string }
   * @memberof GetMetaobjectsArgs
  */
  sortKey: string | null;
  };

export function decodeGetMetaobjectsArgs(rawInput: unknown): GetMetaobjectsArgs | null {
  if (isJSON(rawInput)) {
    const decodedType = decodeString(rawInput['type']);
    const decodedFirst = decodeNumber(rawInput['first']);
    const decodedAfter = decodeString(rawInput['after']);
    const decodedLast = decodeNumber(rawInput['last']);
    const decodedBefore = decodeString(rawInput['before']);
    const decodedReverse = decodeBoolean(rawInput['reverse']);
    const decodedSortKey = decodeString(rawInput['sortKey']);

    if (
      decodedType === null
    ) {
      return null;
    }

    return {
      type: decodedType,
      first: decodedFirst,
      after: decodedAfter,
      last: decodedLast,
      before: decodedBefore,
      reverse: decodedReverse,
      sortKey: decodedSortKey
    };
  }
  return null;
}




