import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
export type Maybe<T> = T | null;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  /** The `Upload` scalar type represents a file upload. */
  Upload: any;
};


export enum CacheControlScope {
  Public = 'PUBLIC',
  Private = 'PRIVATE'
}

export type Lolly = {
  __typename?: 'Lolly';
  recipientName: Scalars['String'];
  message: Scalars['String'];
  senderName: Scalars['String'];
  flavourTop: Scalars['String'];
  flavourMiddle: Scalars['String'];
  flavourBottom: Scalars['String'];
  lollyPath: Scalars['String'];
};

export type Mutation = {
  __typename?: 'Mutation';
  createLolly?: Maybe<Lolly>;
};


export type MutationCreateLollyArgs = {
  recipientName: Scalars['String'];
  message: Scalars['String'];
  senderName: Scalars['String'];
  flavourTop: Scalars['String'];
  flavourMiddle: Scalars['String'];
  flavourBottom: Scalars['String'];
};

export type Query = {
  __typename?: 'Query';
  hello?: Maybe<Scalars['String']>;
};


export type Unnamed_1_QueryVariables = Exact<{ [key: string]: never; }>;


export type Unnamed_1_Query = (
  { __typename?: 'Query' }
  & Pick<Query, 'hello'>
);

export type CreateLollyMutationVariables = Exact<{
  recipientName: Scalars['String'];
  message: Scalars['String'];
  senderName: Scalars['String'];
  flavourTop: Scalars['String'];
  flavourMiddle: Scalars['String'];
  flavourBottom: Scalars['String'];
}>;


export type CreateLollyMutation = (
  { __typename?: 'Mutation' }
  & { createLolly?: Maybe<(
    { __typename?: 'Lolly' }
    & Pick<Lolly, 'message' | 'lollyPath'>
  )> }
);


export const Document = gql`
    {
  hello
}
    `;

/**
 * __useQuery__
 *
 * To run a query within a React component, call `useQuery` and pass it any options that fit your needs.
 * When your component renders, `useQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useQuery({
 *   variables: {
 *   },
 * });
 */
export function useQuery(baseOptions?: Apollo.QueryHookOptions<Query, QueryVariables>) {
        return Apollo.useQuery<Query, QueryVariables>(Document, baseOptions);
      }
export function useLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<Query, QueryVariables>) {
          return Apollo.useLazyQuery<Query, QueryVariables>(Document, baseOptions);
        }
export type QueryHookResult = ReturnType<typeof useQuery>;
export type LazyQueryHookResult = ReturnType<typeof useLazyQuery>;
export type QueryResult = Apollo.QueryResult<Query, QueryVariables>;
export const CreateLollyDocument = gql`
    mutation createLolly($recipientName: String!, $message: String!, $senderName: String!, $flavourTop: String!, $flavourMiddle: String!, $flavourBottom: String!) {
  createLolly(recipientName: $recipientName, message: $message, senderName: $senderName, flavourTop: $flavourTop, flavourMiddle: $flavourMiddle, flavourBottom: $flavourBottom) {
    message
    lollyPath
  }
}
    `;
export type CreateLollyMutationFn = Apollo.MutationFunction<CreateLollyMutation, CreateLollyMutationVariables>;

/**
 * __useCreateLollyMutation__
 *
 * To run a mutation, you first call `useCreateLollyMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreateLollyMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createLollyMutation, { data, loading, error }] = useCreateLollyMutation({
 *   variables: {
 *      recipientName: // value for 'recipientName'
 *      message: // value for 'message'
 *      senderName: // value for 'senderName'
 *      flavourTop: // value for 'flavourTop'
 *      flavourMiddle: // value for 'flavourMiddle'
 *      flavourBottom: // value for 'flavourBottom'
 *   },
 * });
 */
export function useCreateLollyMutation(baseOptions?: Apollo.MutationHookOptions<CreateLollyMutation, CreateLollyMutationVariables>) {
        return Apollo.useMutation<CreateLollyMutation, CreateLollyMutationVariables>(CreateLollyDocument, baseOptions);
      }
export type CreateLollyMutationHookResult = ReturnType<typeof useCreateLollyMutation>;
export type CreateLollyMutationResult = Apollo.MutationResult<CreateLollyMutation>;
export type CreateLollyMutationOptions = Apollo.BaseMutationOptions<CreateLollyMutation, CreateLollyMutationVariables>;