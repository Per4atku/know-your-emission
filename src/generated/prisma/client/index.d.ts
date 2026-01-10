
/**
 * Client
**/

import * as runtime from './runtime/client.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model Brand
 * 
 */
export type Brand = $Result.DefaultSelection<Prisma.$BrandPayload>
/**
 * Model DeviceModel
 * 
 */
export type DeviceModel = $Result.DefaultSelection<Prisma.$DeviceModelPayload>
/**
 * Model DeviceVariant
 * 
 */
export type DeviceVariant = $Result.DefaultSelection<Prisma.$DeviceVariantPayload>
/**
 * Model EmissionMetrics
 * 
 */
export type EmissionMetrics = $Result.DefaultSelection<Prisma.$EmissionMetricsPayload>

/**
 * Enums
 */
export namespace $Enums {
  export const EnvironmentRating: {
  LOW: 'LOW',
  MEDIUM: 'MEDIUM',
  HIGH: 'HIGH'
};

export type EnvironmentRating = (typeof EnvironmentRating)[keyof typeof EnvironmentRating]

}

export type EnvironmentRating = $Enums.EnvironmentRating

export const EnvironmentRating: typeof $Enums.EnvironmentRating

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Brands
 * const brands = await prisma.brand.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  const U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   *
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more Brands
   * const brands = await prisma.brand.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<ClientOptions, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): PrismaClient;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

/**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Executes a raw query and returns the number of affected rows.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$executeRawUnsafe('UPDATE User SET cool = $1 WHERE email = $2 ;', true, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Performs a raw query and returns the `SELECT` data.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$queryRawUnsafe('SELECT * FROM User WHERE id = $1 OR email = $2;', 1, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<T>;


  /**
   * Allows the running of a sequence of read/write operations that are guaranteed to either succeed or fail as a whole.
   * @example
   * ```
   * const [george, bob, alice] = await prisma.$transaction([
   *   prisma.user.create({ data: { name: 'George' } }),
   *   prisma.user.create({ data: { name: 'Bob' } }),
   *   prisma.user.create({ data: { name: 'Alice' } }),
   * ])
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/concepts/components/prisma-client/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>

  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb<ClientOptions>, ExtArgs, $Utils.Call<Prisma.TypeMapCb<ClientOptions>, {
    extArgs: ExtArgs
  }>>

      /**
   * `prisma.brand`: Exposes CRUD operations for the **Brand** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Brands
    * const brands = await prisma.brand.findMany()
    * ```
    */
  get brand(): Prisma.BrandDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.deviceModel`: Exposes CRUD operations for the **DeviceModel** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more DeviceModels
    * const deviceModels = await prisma.deviceModel.findMany()
    * ```
    */
  get deviceModel(): Prisma.DeviceModelDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.deviceVariant`: Exposes CRUD operations for the **DeviceVariant** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more DeviceVariants
    * const deviceVariants = await prisma.deviceVariant.findMany()
    * ```
    */
  get deviceVariant(): Prisma.DeviceVariantDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.emissionMetrics`: Exposes CRUD operations for the **EmissionMetrics** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more EmissionMetrics
    * const emissionMetrics = await prisma.emissionMetrics.findMany()
    * ```
    */
  get emissionMetrics(): Prisma.EmissionMetricsDelegate<ExtArgs, ClientOptions>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  export type PrismaPromise<T> = $Public.PrismaPromise<T>

  /**
   * Validator
   */
  export import validator = runtime.Public.validator

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError
  export import PrismaClientValidationError = runtime.PrismaClientValidationError

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag
  export import empty = runtime.empty
  export import join = runtime.join
  export import raw = runtime.raw
  export import Sql = runtime.Sql



  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal

  export type DecimalJsLike = runtime.DecimalJsLike

  /**
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 7.0.0
   * Query Engine version: 0c19ccc313cf9911a90d99d2ac2eb0280c76c513
   */
  export type PrismaVersion = {
    client: string
    engine: string
  }

  export const prismaVersion: PrismaVersion

  /**
   * Utility Types
   */


  export import Bytes = runtime.Bytes
  export import JsonObject = runtime.JsonObject
  export import JsonArray = runtime.JsonArray
  export import JsonValue = runtime.JsonValue
  export import InputJsonObject = runtime.InputJsonObject
  export import InputJsonArray = runtime.InputJsonArray
  export import InputJsonValue = runtime.InputJsonValue

  /**
   * Types of the values used to represent different kinds of `null` values when working with JSON fields.
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  namespace NullTypes {
    /**
    * Type of `Prisma.DbNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.DbNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class DbNull {
      private DbNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.JsonNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class JsonNull {
      private JsonNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.AnyNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class AnyNull {
      private AnyNull: never
      private constructor()
    }
  }

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: NullTypes.DbNull

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: NullTypes.JsonNull

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: NullTypes.AnyNull

  type SelectAndInclude = {
    select: any
    include: any
  }

  type SelectAndOmit = {
    select: any
    omit: any
  }

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => $Utils.JsPromise<any>> = PromiseType<ReturnType<T>>

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
      [P in K]: T[P];
  };


  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K
  }[keyof T]

  export type TruthyKeys<T> = keyof {
    [K in keyof T as T[K] extends false | undefined | null ? never : K]: K
  }

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>

  /**
   * Subset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection
   */
  export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  };

  /**
   * SelectSubset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection.
   * Additionally, it validates, if both select and include are present. If the case, it errors.
   */
  export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    (T extends SelectAndInclude
      ? 'Please either choose `select` or `include`.'
      : T extends SelectAndOmit
        ? 'Please either choose `select` or `omit`.'
        : {})

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    K

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> =
    T extends object ?
    U extends object ?
      (Without<T, U> & U) | (Without<U, T> & T)
    : U : T


  /**
   * Is T a Record?
   */
  type IsObject<T extends any> = T extends Array<any>
  ? False
  : T extends Date
  ? False
  : T extends Uint8Array
  ? False
  : T extends BigInt
  ? False
  : T extends object
  ? True
  : False


  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O> // With K possibilities
    }[K]

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>

  type _Either<
    O extends object,
    K extends Key,
    strict extends Boolean
  > = {
    1: EitherStrict<O, K>
    0: EitherLoose<O, K>
  }[strict]

  type Either<
    O extends object,
    K extends Key,
    strict extends Boolean = 1
  > = O extends unknown ? _Either<O, K, strict> : never

  export type Union = any

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K]
  } & {}

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (
    U extends unknown ? (k: U) => void : never
  ) extends (k: infer I) => void
    ? I
    : never

  export type Overwrite<O extends object, O1 extends object> = {
      [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<Overwrite<U, {
      [K in keyof U]-?: At<U, K>;
  }>>;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O ? O[K] : never;
  type AtStrict<O extends object, K extends Key> = O[K & keyof O];
  type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
  export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
      1: AtStrict<O, K>;
      0: AtLoose<O, K>;
  }[strict];

  export type ComputeRaw<A extends any> = A extends Function ? A : {
    [K in keyof A]: A[K];
  } & {};

  export type OptionalFlat<O> = {
    [K in keyof O]?: O[K];
  } & {};

  type _Record<K extends keyof any, T> = {
    [P in K]: T;
  };

  // cause typescript not to expand types and preserve names
  type NoExpand<T> = T extends unknown ? T : never;

  // this type assumes the passed object is entirely optional
  type AtLeast<O extends object, K extends string> = NoExpand<
    O extends unknown
    ? | (K extends keyof O ? { [P in K]: O[P] } & O : O)
      | {[P in keyof O as P extends K ? P : never]-?: O[P]} & O
    : never>;

  type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False

  // /**
  // 1
  // */
  export type True = 1

  /**
  0
  */
  export type False = 0

  export type Not<B extends Boolean> = {
    0: 1
    1: 0
  }[B]

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
    ? 1
    : 0

  export type Has<U extends Union, U1 extends Union> = Not<
    Extends<Exclude<U1, U>, U1>
  >

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0
      1: 1
    }
    1: {
      0: 1
      1: 1
    }
  }[B1][B2]

  export type Keys<U extends Union> = U extends unknown ? keyof U : never

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;



  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object ? {
    [P in keyof T]: P extends keyof O
      ? O[P]
      : never
  } : never

  type FieldPaths<
    T,
    U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>
  > = IsObject<T> extends True ? U : T

  type GetHavingFields<T> = {
    [K in keyof T]: Or<
      Or<Extends<'OR', K>, Extends<'AND', K>>,
      Extends<'NOT', K>
    > extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never>
        : never
      : {} extends FieldPaths<T[K]>
      ? never
      : K
  }[keyof T]

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T

  /**
   * Like `Pick`, but additionally can also accept an array of keys
   */
  type PickEnumerable<T, K extends Enumerable<keyof T> | keyof T> = Prisma__Pick<T, MaybeTupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T


  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>


  export const ModelName: {
    Brand: 'Brand',
    DeviceModel: 'DeviceModel',
    DeviceVariant: 'DeviceVariant',
    EmissionMetrics: 'EmissionMetrics'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]



  interface TypeMapCb<ClientOptions = {}> extends $Utils.Fn<{extArgs: $Extensions.InternalArgs }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], ClientOptions extends { omit: infer OmitOptions } ? OmitOptions : {}>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
    globalOmitOptions: {
      omit: GlobalOmitOptions
    }
    meta: {
      modelProps: "brand" | "deviceModel" | "deviceVariant" | "emissionMetrics"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      Brand: {
        payload: Prisma.$BrandPayload<ExtArgs>
        fields: Prisma.BrandFieldRefs
        operations: {
          findUnique: {
            args: Prisma.BrandFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BrandPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.BrandFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BrandPayload>
          }
          findFirst: {
            args: Prisma.BrandFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BrandPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.BrandFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BrandPayload>
          }
          findMany: {
            args: Prisma.BrandFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BrandPayload>[]
          }
          create: {
            args: Prisma.BrandCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BrandPayload>
          }
          createMany: {
            args: Prisma.BrandCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.BrandCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BrandPayload>[]
          }
          delete: {
            args: Prisma.BrandDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BrandPayload>
          }
          update: {
            args: Prisma.BrandUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BrandPayload>
          }
          deleteMany: {
            args: Prisma.BrandDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.BrandUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.BrandUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BrandPayload>[]
          }
          upsert: {
            args: Prisma.BrandUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BrandPayload>
          }
          aggregate: {
            args: Prisma.BrandAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateBrand>
          }
          groupBy: {
            args: Prisma.BrandGroupByArgs<ExtArgs>
            result: $Utils.Optional<BrandGroupByOutputType>[]
          }
          count: {
            args: Prisma.BrandCountArgs<ExtArgs>
            result: $Utils.Optional<BrandCountAggregateOutputType> | number
          }
        }
      }
      DeviceModel: {
        payload: Prisma.$DeviceModelPayload<ExtArgs>
        fields: Prisma.DeviceModelFieldRefs
        operations: {
          findUnique: {
            args: Prisma.DeviceModelFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DeviceModelPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.DeviceModelFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DeviceModelPayload>
          }
          findFirst: {
            args: Prisma.DeviceModelFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DeviceModelPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.DeviceModelFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DeviceModelPayload>
          }
          findMany: {
            args: Prisma.DeviceModelFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DeviceModelPayload>[]
          }
          create: {
            args: Prisma.DeviceModelCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DeviceModelPayload>
          }
          createMany: {
            args: Prisma.DeviceModelCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.DeviceModelCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DeviceModelPayload>[]
          }
          delete: {
            args: Prisma.DeviceModelDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DeviceModelPayload>
          }
          update: {
            args: Prisma.DeviceModelUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DeviceModelPayload>
          }
          deleteMany: {
            args: Prisma.DeviceModelDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.DeviceModelUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.DeviceModelUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DeviceModelPayload>[]
          }
          upsert: {
            args: Prisma.DeviceModelUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DeviceModelPayload>
          }
          aggregate: {
            args: Prisma.DeviceModelAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateDeviceModel>
          }
          groupBy: {
            args: Prisma.DeviceModelGroupByArgs<ExtArgs>
            result: $Utils.Optional<DeviceModelGroupByOutputType>[]
          }
          count: {
            args: Prisma.DeviceModelCountArgs<ExtArgs>
            result: $Utils.Optional<DeviceModelCountAggregateOutputType> | number
          }
        }
      }
      DeviceVariant: {
        payload: Prisma.$DeviceVariantPayload<ExtArgs>
        fields: Prisma.DeviceVariantFieldRefs
        operations: {
          findUnique: {
            args: Prisma.DeviceVariantFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DeviceVariantPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.DeviceVariantFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DeviceVariantPayload>
          }
          findFirst: {
            args: Prisma.DeviceVariantFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DeviceVariantPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.DeviceVariantFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DeviceVariantPayload>
          }
          findMany: {
            args: Prisma.DeviceVariantFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DeviceVariantPayload>[]
          }
          create: {
            args: Prisma.DeviceVariantCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DeviceVariantPayload>
          }
          createMany: {
            args: Prisma.DeviceVariantCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.DeviceVariantCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DeviceVariantPayload>[]
          }
          delete: {
            args: Prisma.DeviceVariantDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DeviceVariantPayload>
          }
          update: {
            args: Prisma.DeviceVariantUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DeviceVariantPayload>
          }
          deleteMany: {
            args: Prisma.DeviceVariantDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.DeviceVariantUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.DeviceVariantUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DeviceVariantPayload>[]
          }
          upsert: {
            args: Prisma.DeviceVariantUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DeviceVariantPayload>
          }
          aggregate: {
            args: Prisma.DeviceVariantAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateDeviceVariant>
          }
          groupBy: {
            args: Prisma.DeviceVariantGroupByArgs<ExtArgs>
            result: $Utils.Optional<DeviceVariantGroupByOutputType>[]
          }
          count: {
            args: Prisma.DeviceVariantCountArgs<ExtArgs>
            result: $Utils.Optional<DeviceVariantCountAggregateOutputType> | number
          }
        }
      }
      EmissionMetrics: {
        payload: Prisma.$EmissionMetricsPayload<ExtArgs>
        fields: Prisma.EmissionMetricsFieldRefs
        operations: {
          findUnique: {
            args: Prisma.EmissionMetricsFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EmissionMetricsPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.EmissionMetricsFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EmissionMetricsPayload>
          }
          findFirst: {
            args: Prisma.EmissionMetricsFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EmissionMetricsPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.EmissionMetricsFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EmissionMetricsPayload>
          }
          findMany: {
            args: Prisma.EmissionMetricsFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EmissionMetricsPayload>[]
          }
          create: {
            args: Prisma.EmissionMetricsCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EmissionMetricsPayload>
          }
          createMany: {
            args: Prisma.EmissionMetricsCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.EmissionMetricsCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EmissionMetricsPayload>[]
          }
          delete: {
            args: Prisma.EmissionMetricsDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EmissionMetricsPayload>
          }
          update: {
            args: Prisma.EmissionMetricsUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EmissionMetricsPayload>
          }
          deleteMany: {
            args: Prisma.EmissionMetricsDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.EmissionMetricsUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.EmissionMetricsUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EmissionMetricsPayload>[]
          }
          upsert: {
            args: Prisma.EmissionMetricsUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EmissionMetricsPayload>
          }
          aggregate: {
            args: Prisma.EmissionMetricsAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateEmissionMetrics>
          }
          groupBy: {
            args: Prisma.EmissionMetricsGroupByArgs<ExtArgs>
            result: $Utils.Optional<EmissionMetricsGroupByOutputType>[]
          }
          count: {
            args: Prisma.EmissionMetricsCountArgs<ExtArgs>
            result: $Utils.Optional<EmissionMetricsCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<"define", Prisma.TypeMapCb, $Extensions.DefaultArgs>
  export type DefaultPrismaClient = PrismaClient
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'
  export interface PrismaClientOptions {
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat
    /**
     * @example
     * ```
     * // Shorthand for `emit: 'stdout'`
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events only
     * log: [
     *   { emit: 'event', level: 'query' },
     *   { emit: 'event', level: 'info' },
     *   { emit: 'event', level: 'warn' }
     *   { emit: 'event', level: 'error' }
     * ]
     * 
     * / Emit as events and log to stdout
     * og: [
     *  { emit: 'stdout', level: 'query' },
     *  { emit: 'stdout', level: 'info' },
     *  { emit: 'stdout', level: 'warn' }
     *  { emit: 'stdout', level: 'error' }
     * 
     * ```
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/logging#the-log-option).
     */
    log?: (LogLevel | LogDefinition)[]
    /**
     * The default values for transactionOptions
     * maxWait ?= 2000
     * timeout ?= 5000
     */
    transactionOptions?: {
      maxWait?: number
      timeout?: number
      isolationLevel?: Prisma.TransactionIsolationLevel
    }
    /**
     * Instance of a Driver Adapter, e.g., like one provided by `@prisma/adapter-planetscale`
     */
    adapter?: runtime.SqlDriverAdapterFactory
    /**
     * Prisma Accelerate URL allowing the client to connect through Accelerate instead of a direct database.
     */
    accelerateUrl?: string
    /**
     * Global configuration for omitting model fields by default.
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   omit: {
     *     user: {
     *       password: true
     *     }
     *   }
     * })
     * ```
     */
    omit?: Prisma.GlobalOmitConfig
  }
  export type GlobalOmitConfig = {
    brand?: BrandOmit
    deviceModel?: DeviceModelOmit
    deviceVariant?: DeviceVariantOmit
    emissionMetrics?: EmissionMetricsOmit
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type CheckIsLogLevel<T> = T extends LogLevel ? T : never;

  export type GetLogType<T> = CheckIsLogLevel<
    T extends LogDefinition ? T['level'] : T
  >;

  export type GetEvents<T extends any[]> = T extends Array<LogLevel | LogDefinition>
    ? GetLogType<T[number]>
    : never;

  export type QueryEvent = {
    timestamp: Date
    query: string
    params: string
    duration: number
    target: string
  }

  export type LogEvent = {
    timestamp: Date
    message: string
    target: string
  }
  /* End Types for Logging */


  export type PrismaAction =
    | 'findUnique'
    | 'findUniqueOrThrow'
    | 'findMany'
    | 'findFirst'
    | 'findFirstOrThrow'
    | 'create'
    | 'createMany'
    | 'createManyAndReturn'
    | 'update'
    | 'updateMany'
    | 'updateManyAndReturn'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'
    | 'groupBy'

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<Prisma.DefaultPrismaClient, runtime.ITXClientDenyList>

  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */


  /**
   * Count Type BrandCountOutputType
   */

  export type BrandCountOutputType = {
    devices: number
  }

  export type BrandCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    devices?: boolean | BrandCountOutputTypeCountDevicesArgs
  }

  // Custom InputTypes
  /**
   * BrandCountOutputType without action
   */
  export type BrandCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BrandCountOutputType
     */
    select?: BrandCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * BrandCountOutputType without action
   */
  export type BrandCountOutputTypeCountDevicesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: DeviceModelWhereInput
  }


  /**
   * Count Type DeviceModelCountOutputType
   */

  export type DeviceModelCountOutputType = {
    variants: number
  }

  export type DeviceModelCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    variants?: boolean | DeviceModelCountOutputTypeCountVariantsArgs
  }

  // Custom InputTypes
  /**
   * DeviceModelCountOutputType without action
   */
  export type DeviceModelCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DeviceModelCountOutputType
     */
    select?: DeviceModelCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * DeviceModelCountOutputType without action
   */
  export type DeviceModelCountOutputTypeCountVariantsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: DeviceVariantWhereInput
  }


  /**
   * Models
   */

  /**
   * Model Brand
   */

  export type AggregateBrand = {
    _count: BrandCountAggregateOutputType | null
    _min: BrandMinAggregateOutputType | null
    _max: BrandMaxAggregateOutputType | null
  }

  export type BrandMinAggregateOutputType = {
    id: string | null
    name: string | null
  }

  export type BrandMaxAggregateOutputType = {
    id: string | null
    name: string | null
  }

  export type BrandCountAggregateOutputType = {
    id: number
    name: number
    _all: number
  }


  export type BrandMinAggregateInputType = {
    id?: true
    name?: true
  }

  export type BrandMaxAggregateInputType = {
    id?: true
    name?: true
  }

  export type BrandCountAggregateInputType = {
    id?: true
    name?: true
    _all?: true
  }

  export type BrandAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Brand to aggregate.
     */
    where?: BrandWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Brands to fetch.
     */
    orderBy?: BrandOrderByWithRelationInput | BrandOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: BrandWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Brands from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Brands.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Brands
    **/
    _count?: true | BrandCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: BrandMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: BrandMaxAggregateInputType
  }

  export type GetBrandAggregateType<T extends BrandAggregateArgs> = {
        [P in keyof T & keyof AggregateBrand]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateBrand[P]>
      : GetScalarType<T[P], AggregateBrand[P]>
  }




  export type BrandGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: BrandWhereInput
    orderBy?: BrandOrderByWithAggregationInput | BrandOrderByWithAggregationInput[]
    by: BrandScalarFieldEnum[] | BrandScalarFieldEnum
    having?: BrandScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: BrandCountAggregateInputType | true
    _min?: BrandMinAggregateInputType
    _max?: BrandMaxAggregateInputType
  }

  export type BrandGroupByOutputType = {
    id: string
    name: string
    _count: BrandCountAggregateOutputType | null
    _min: BrandMinAggregateOutputType | null
    _max: BrandMaxAggregateOutputType | null
  }

  type GetBrandGroupByPayload<T extends BrandGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<BrandGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof BrandGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], BrandGroupByOutputType[P]>
            : GetScalarType<T[P], BrandGroupByOutputType[P]>
        }
      >
    >


  export type BrandSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    devices?: boolean | Brand$devicesArgs<ExtArgs>
    _count?: boolean | BrandCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["brand"]>

  export type BrandSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
  }, ExtArgs["result"]["brand"]>

  export type BrandSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
  }, ExtArgs["result"]["brand"]>

  export type BrandSelectScalar = {
    id?: boolean
    name?: boolean
  }

  export type BrandOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name", ExtArgs["result"]["brand"]>
  export type BrandInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    devices?: boolean | Brand$devicesArgs<ExtArgs>
    _count?: boolean | BrandCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type BrandIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type BrandIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $BrandPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Brand"
    objects: {
      devices: Prisma.$DeviceModelPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string
    }, ExtArgs["result"]["brand"]>
    composites: {}
  }

  type BrandGetPayload<S extends boolean | null | undefined | BrandDefaultArgs> = $Result.GetResult<Prisma.$BrandPayload, S>

  type BrandCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<BrandFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: BrandCountAggregateInputType | true
    }

  export interface BrandDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Brand'], meta: { name: 'Brand' } }
    /**
     * Find zero or one Brand that matches the filter.
     * @param {BrandFindUniqueArgs} args - Arguments to find a Brand
     * @example
     * // Get one Brand
     * const brand = await prisma.brand.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends BrandFindUniqueArgs>(args: SelectSubset<T, BrandFindUniqueArgs<ExtArgs>>): Prisma__BrandClient<$Result.GetResult<Prisma.$BrandPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Brand that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {BrandFindUniqueOrThrowArgs} args - Arguments to find a Brand
     * @example
     * // Get one Brand
     * const brand = await prisma.brand.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends BrandFindUniqueOrThrowArgs>(args: SelectSubset<T, BrandFindUniqueOrThrowArgs<ExtArgs>>): Prisma__BrandClient<$Result.GetResult<Prisma.$BrandPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Brand that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BrandFindFirstArgs} args - Arguments to find a Brand
     * @example
     * // Get one Brand
     * const brand = await prisma.brand.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends BrandFindFirstArgs>(args?: SelectSubset<T, BrandFindFirstArgs<ExtArgs>>): Prisma__BrandClient<$Result.GetResult<Prisma.$BrandPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Brand that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BrandFindFirstOrThrowArgs} args - Arguments to find a Brand
     * @example
     * // Get one Brand
     * const brand = await prisma.brand.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends BrandFindFirstOrThrowArgs>(args?: SelectSubset<T, BrandFindFirstOrThrowArgs<ExtArgs>>): Prisma__BrandClient<$Result.GetResult<Prisma.$BrandPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Brands that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BrandFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Brands
     * const brands = await prisma.brand.findMany()
     * 
     * // Get first 10 Brands
     * const brands = await prisma.brand.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const brandWithIdOnly = await prisma.brand.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends BrandFindManyArgs>(args?: SelectSubset<T, BrandFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BrandPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Brand.
     * @param {BrandCreateArgs} args - Arguments to create a Brand.
     * @example
     * // Create one Brand
     * const Brand = await prisma.brand.create({
     *   data: {
     *     // ... data to create a Brand
     *   }
     * })
     * 
     */
    create<T extends BrandCreateArgs>(args: SelectSubset<T, BrandCreateArgs<ExtArgs>>): Prisma__BrandClient<$Result.GetResult<Prisma.$BrandPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Brands.
     * @param {BrandCreateManyArgs} args - Arguments to create many Brands.
     * @example
     * // Create many Brands
     * const brand = await prisma.brand.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends BrandCreateManyArgs>(args?: SelectSubset<T, BrandCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Brands and returns the data saved in the database.
     * @param {BrandCreateManyAndReturnArgs} args - Arguments to create many Brands.
     * @example
     * // Create many Brands
     * const brand = await prisma.brand.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Brands and only return the `id`
     * const brandWithIdOnly = await prisma.brand.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends BrandCreateManyAndReturnArgs>(args?: SelectSubset<T, BrandCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BrandPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Brand.
     * @param {BrandDeleteArgs} args - Arguments to delete one Brand.
     * @example
     * // Delete one Brand
     * const Brand = await prisma.brand.delete({
     *   where: {
     *     // ... filter to delete one Brand
     *   }
     * })
     * 
     */
    delete<T extends BrandDeleteArgs>(args: SelectSubset<T, BrandDeleteArgs<ExtArgs>>): Prisma__BrandClient<$Result.GetResult<Prisma.$BrandPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Brand.
     * @param {BrandUpdateArgs} args - Arguments to update one Brand.
     * @example
     * // Update one Brand
     * const brand = await prisma.brand.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends BrandUpdateArgs>(args: SelectSubset<T, BrandUpdateArgs<ExtArgs>>): Prisma__BrandClient<$Result.GetResult<Prisma.$BrandPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Brands.
     * @param {BrandDeleteManyArgs} args - Arguments to filter Brands to delete.
     * @example
     * // Delete a few Brands
     * const { count } = await prisma.brand.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends BrandDeleteManyArgs>(args?: SelectSubset<T, BrandDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Brands.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BrandUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Brands
     * const brand = await prisma.brand.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends BrandUpdateManyArgs>(args: SelectSubset<T, BrandUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Brands and returns the data updated in the database.
     * @param {BrandUpdateManyAndReturnArgs} args - Arguments to update many Brands.
     * @example
     * // Update many Brands
     * const brand = await prisma.brand.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Brands and only return the `id`
     * const brandWithIdOnly = await prisma.brand.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends BrandUpdateManyAndReturnArgs>(args: SelectSubset<T, BrandUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BrandPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Brand.
     * @param {BrandUpsertArgs} args - Arguments to update or create a Brand.
     * @example
     * // Update or create a Brand
     * const brand = await prisma.brand.upsert({
     *   create: {
     *     // ... data to create a Brand
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Brand we want to update
     *   }
     * })
     */
    upsert<T extends BrandUpsertArgs>(args: SelectSubset<T, BrandUpsertArgs<ExtArgs>>): Prisma__BrandClient<$Result.GetResult<Prisma.$BrandPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Brands.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BrandCountArgs} args - Arguments to filter Brands to count.
     * @example
     * // Count the number of Brands
     * const count = await prisma.brand.count({
     *   where: {
     *     // ... the filter for the Brands we want to count
     *   }
     * })
    **/
    count<T extends BrandCountArgs>(
      args?: Subset<T, BrandCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], BrandCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Brand.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BrandAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends BrandAggregateArgs>(args: Subset<T, BrandAggregateArgs>): Prisma.PrismaPromise<GetBrandAggregateType<T>>

    /**
     * Group by Brand.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BrandGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends BrandGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: BrandGroupByArgs['orderBy'] }
        : { orderBy?: BrandGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, BrandGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetBrandGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Brand model
   */
  readonly fields: BrandFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Brand.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__BrandClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    devices<T extends Brand$devicesArgs<ExtArgs> = {}>(args?: Subset<T, Brand$devicesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DeviceModelPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Brand model
   */
  interface BrandFieldRefs {
    readonly id: FieldRef<"Brand", 'String'>
    readonly name: FieldRef<"Brand", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Brand findUnique
   */
  export type BrandFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Brand
     */
    select?: BrandSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Brand
     */
    omit?: BrandOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BrandInclude<ExtArgs> | null
    /**
     * Filter, which Brand to fetch.
     */
    where: BrandWhereUniqueInput
  }

  /**
   * Brand findUniqueOrThrow
   */
  export type BrandFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Brand
     */
    select?: BrandSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Brand
     */
    omit?: BrandOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BrandInclude<ExtArgs> | null
    /**
     * Filter, which Brand to fetch.
     */
    where: BrandWhereUniqueInput
  }

  /**
   * Brand findFirst
   */
  export type BrandFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Brand
     */
    select?: BrandSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Brand
     */
    omit?: BrandOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BrandInclude<ExtArgs> | null
    /**
     * Filter, which Brand to fetch.
     */
    where?: BrandWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Brands to fetch.
     */
    orderBy?: BrandOrderByWithRelationInput | BrandOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Brands.
     */
    cursor?: BrandWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Brands from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Brands.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Brands.
     */
    distinct?: BrandScalarFieldEnum | BrandScalarFieldEnum[]
  }

  /**
   * Brand findFirstOrThrow
   */
  export type BrandFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Brand
     */
    select?: BrandSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Brand
     */
    omit?: BrandOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BrandInclude<ExtArgs> | null
    /**
     * Filter, which Brand to fetch.
     */
    where?: BrandWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Brands to fetch.
     */
    orderBy?: BrandOrderByWithRelationInput | BrandOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Brands.
     */
    cursor?: BrandWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Brands from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Brands.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Brands.
     */
    distinct?: BrandScalarFieldEnum | BrandScalarFieldEnum[]
  }

  /**
   * Brand findMany
   */
  export type BrandFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Brand
     */
    select?: BrandSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Brand
     */
    omit?: BrandOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BrandInclude<ExtArgs> | null
    /**
     * Filter, which Brands to fetch.
     */
    where?: BrandWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Brands to fetch.
     */
    orderBy?: BrandOrderByWithRelationInput | BrandOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Brands.
     */
    cursor?: BrandWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Brands from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Brands.
     */
    skip?: number
    distinct?: BrandScalarFieldEnum | BrandScalarFieldEnum[]
  }

  /**
   * Brand create
   */
  export type BrandCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Brand
     */
    select?: BrandSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Brand
     */
    omit?: BrandOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BrandInclude<ExtArgs> | null
    /**
     * The data needed to create a Brand.
     */
    data: XOR<BrandCreateInput, BrandUncheckedCreateInput>
  }

  /**
   * Brand createMany
   */
  export type BrandCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Brands.
     */
    data: BrandCreateManyInput | BrandCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Brand createManyAndReturn
   */
  export type BrandCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Brand
     */
    select?: BrandSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Brand
     */
    omit?: BrandOmit<ExtArgs> | null
    /**
     * The data used to create many Brands.
     */
    data: BrandCreateManyInput | BrandCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Brand update
   */
  export type BrandUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Brand
     */
    select?: BrandSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Brand
     */
    omit?: BrandOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BrandInclude<ExtArgs> | null
    /**
     * The data needed to update a Brand.
     */
    data: XOR<BrandUpdateInput, BrandUncheckedUpdateInput>
    /**
     * Choose, which Brand to update.
     */
    where: BrandWhereUniqueInput
  }

  /**
   * Brand updateMany
   */
  export type BrandUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Brands.
     */
    data: XOR<BrandUpdateManyMutationInput, BrandUncheckedUpdateManyInput>
    /**
     * Filter which Brands to update
     */
    where?: BrandWhereInput
    /**
     * Limit how many Brands to update.
     */
    limit?: number
  }

  /**
   * Brand updateManyAndReturn
   */
  export type BrandUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Brand
     */
    select?: BrandSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Brand
     */
    omit?: BrandOmit<ExtArgs> | null
    /**
     * The data used to update Brands.
     */
    data: XOR<BrandUpdateManyMutationInput, BrandUncheckedUpdateManyInput>
    /**
     * Filter which Brands to update
     */
    where?: BrandWhereInput
    /**
     * Limit how many Brands to update.
     */
    limit?: number
  }

  /**
   * Brand upsert
   */
  export type BrandUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Brand
     */
    select?: BrandSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Brand
     */
    omit?: BrandOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BrandInclude<ExtArgs> | null
    /**
     * The filter to search for the Brand to update in case it exists.
     */
    where: BrandWhereUniqueInput
    /**
     * In case the Brand found by the `where` argument doesn't exist, create a new Brand with this data.
     */
    create: XOR<BrandCreateInput, BrandUncheckedCreateInput>
    /**
     * In case the Brand was found with the provided `where` argument, update it with this data.
     */
    update: XOR<BrandUpdateInput, BrandUncheckedUpdateInput>
  }

  /**
   * Brand delete
   */
  export type BrandDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Brand
     */
    select?: BrandSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Brand
     */
    omit?: BrandOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BrandInclude<ExtArgs> | null
    /**
     * Filter which Brand to delete.
     */
    where: BrandWhereUniqueInput
  }

  /**
   * Brand deleteMany
   */
  export type BrandDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Brands to delete
     */
    where?: BrandWhereInput
    /**
     * Limit how many Brands to delete.
     */
    limit?: number
  }

  /**
   * Brand.devices
   */
  export type Brand$devicesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DeviceModel
     */
    select?: DeviceModelSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DeviceModel
     */
    omit?: DeviceModelOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DeviceModelInclude<ExtArgs> | null
    where?: DeviceModelWhereInput
    orderBy?: DeviceModelOrderByWithRelationInput | DeviceModelOrderByWithRelationInput[]
    cursor?: DeviceModelWhereUniqueInput
    take?: number
    skip?: number
    distinct?: DeviceModelScalarFieldEnum | DeviceModelScalarFieldEnum[]
  }

  /**
   * Brand without action
   */
  export type BrandDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Brand
     */
    select?: BrandSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Brand
     */
    omit?: BrandOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BrandInclude<ExtArgs> | null
  }


  /**
   * Model DeviceModel
   */

  export type AggregateDeviceModel = {
    _count: DeviceModelCountAggregateOutputType | null
    _min: DeviceModelMinAggregateOutputType | null
    _max: DeviceModelMaxAggregateOutputType | null
  }

  export type DeviceModelMinAggregateOutputType = {
    id: string | null
    brandId: string | null
    name: string | null
    deviceType: string | null
    releaseDate: Date | null
  }

  export type DeviceModelMaxAggregateOutputType = {
    id: string | null
    brandId: string | null
    name: string | null
    deviceType: string | null
    releaseDate: Date | null
  }

  export type DeviceModelCountAggregateOutputType = {
    id: number
    brandId: number
    name: number
    deviceType: number
    releaseDate: number
    _all: number
  }


  export type DeviceModelMinAggregateInputType = {
    id?: true
    brandId?: true
    name?: true
    deviceType?: true
    releaseDate?: true
  }

  export type DeviceModelMaxAggregateInputType = {
    id?: true
    brandId?: true
    name?: true
    deviceType?: true
    releaseDate?: true
  }

  export type DeviceModelCountAggregateInputType = {
    id?: true
    brandId?: true
    name?: true
    deviceType?: true
    releaseDate?: true
    _all?: true
  }

  export type DeviceModelAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which DeviceModel to aggregate.
     */
    where?: DeviceModelWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of DeviceModels to fetch.
     */
    orderBy?: DeviceModelOrderByWithRelationInput | DeviceModelOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: DeviceModelWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` DeviceModels from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` DeviceModels.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned DeviceModels
    **/
    _count?: true | DeviceModelCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: DeviceModelMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: DeviceModelMaxAggregateInputType
  }

  export type GetDeviceModelAggregateType<T extends DeviceModelAggregateArgs> = {
        [P in keyof T & keyof AggregateDeviceModel]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateDeviceModel[P]>
      : GetScalarType<T[P], AggregateDeviceModel[P]>
  }




  export type DeviceModelGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: DeviceModelWhereInput
    orderBy?: DeviceModelOrderByWithAggregationInput | DeviceModelOrderByWithAggregationInput[]
    by: DeviceModelScalarFieldEnum[] | DeviceModelScalarFieldEnum
    having?: DeviceModelScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: DeviceModelCountAggregateInputType | true
    _min?: DeviceModelMinAggregateInputType
    _max?: DeviceModelMaxAggregateInputType
  }

  export type DeviceModelGroupByOutputType = {
    id: string
    brandId: string
    name: string
    deviceType: string
    releaseDate: Date | null
    _count: DeviceModelCountAggregateOutputType | null
    _min: DeviceModelMinAggregateOutputType | null
    _max: DeviceModelMaxAggregateOutputType | null
  }

  type GetDeviceModelGroupByPayload<T extends DeviceModelGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<DeviceModelGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof DeviceModelGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], DeviceModelGroupByOutputType[P]>
            : GetScalarType<T[P], DeviceModelGroupByOutputType[P]>
        }
      >
    >


  export type DeviceModelSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    brandId?: boolean
    name?: boolean
    deviceType?: boolean
    releaseDate?: boolean
    brand?: boolean | BrandDefaultArgs<ExtArgs>
    variants?: boolean | DeviceModel$variantsArgs<ExtArgs>
    _count?: boolean | DeviceModelCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["deviceModel"]>

  export type DeviceModelSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    brandId?: boolean
    name?: boolean
    deviceType?: boolean
    releaseDate?: boolean
    brand?: boolean | BrandDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["deviceModel"]>

  export type DeviceModelSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    brandId?: boolean
    name?: boolean
    deviceType?: boolean
    releaseDate?: boolean
    brand?: boolean | BrandDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["deviceModel"]>

  export type DeviceModelSelectScalar = {
    id?: boolean
    brandId?: boolean
    name?: boolean
    deviceType?: boolean
    releaseDate?: boolean
  }

  export type DeviceModelOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "brandId" | "name" | "deviceType" | "releaseDate", ExtArgs["result"]["deviceModel"]>
  export type DeviceModelInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    brand?: boolean | BrandDefaultArgs<ExtArgs>
    variants?: boolean | DeviceModel$variantsArgs<ExtArgs>
    _count?: boolean | DeviceModelCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type DeviceModelIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    brand?: boolean | BrandDefaultArgs<ExtArgs>
  }
  export type DeviceModelIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    brand?: boolean | BrandDefaultArgs<ExtArgs>
  }

  export type $DeviceModelPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "DeviceModel"
    objects: {
      brand: Prisma.$BrandPayload<ExtArgs>
      variants: Prisma.$DeviceVariantPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      brandId: string
      name: string
      deviceType: string
      releaseDate: Date | null
    }, ExtArgs["result"]["deviceModel"]>
    composites: {}
  }

  type DeviceModelGetPayload<S extends boolean | null | undefined | DeviceModelDefaultArgs> = $Result.GetResult<Prisma.$DeviceModelPayload, S>

  type DeviceModelCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<DeviceModelFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: DeviceModelCountAggregateInputType | true
    }

  export interface DeviceModelDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['DeviceModel'], meta: { name: 'DeviceModel' } }
    /**
     * Find zero or one DeviceModel that matches the filter.
     * @param {DeviceModelFindUniqueArgs} args - Arguments to find a DeviceModel
     * @example
     * // Get one DeviceModel
     * const deviceModel = await prisma.deviceModel.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends DeviceModelFindUniqueArgs>(args: SelectSubset<T, DeviceModelFindUniqueArgs<ExtArgs>>): Prisma__DeviceModelClient<$Result.GetResult<Prisma.$DeviceModelPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one DeviceModel that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {DeviceModelFindUniqueOrThrowArgs} args - Arguments to find a DeviceModel
     * @example
     * // Get one DeviceModel
     * const deviceModel = await prisma.deviceModel.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends DeviceModelFindUniqueOrThrowArgs>(args: SelectSubset<T, DeviceModelFindUniqueOrThrowArgs<ExtArgs>>): Prisma__DeviceModelClient<$Result.GetResult<Prisma.$DeviceModelPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first DeviceModel that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DeviceModelFindFirstArgs} args - Arguments to find a DeviceModel
     * @example
     * // Get one DeviceModel
     * const deviceModel = await prisma.deviceModel.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends DeviceModelFindFirstArgs>(args?: SelectSubset<T, DeviceModelFindFirstArgs<ExtArgs>>): Prisma__DeviceModelClient<$Result.GetResult<Prisma.$DeviceModelPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first DeviceModel that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DeviceModelFindFirstOrThrowArgs} args - Arguments to find a DeviceModel
     * @example
     * // Get one DeviceModel
     * const deviceModel = await prisma.deviceModel.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends DeviceModelFindFirstOrThrowArgs>(args?: SelectSubset<T, DeviceModelFindFirstOrThrowArgs<ExtArgs>>): Prisma__DeviceModelClient<$Result.GetResult<Prisma.$DeviceModelPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more DeviceModels that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DeviceModelFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all DeviceModels
     * const deviceModels = await prisma.deviceModel.findMany()
     * 
     * // Get first 10 DeviceModels
     * const deviceModels = await prisma.deviceModel.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const deviceModelWithIdOnly = await prisma.deviceModel.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends DeviceModelFindManyArgs>(args?: SelectSubset<T, DeviceModelFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DeviceModelPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a DeviceModel.
     * @param {DeviceModelCreateArgs} args - Arguments to create a DeviceModel.
     * @example
     * // Create one DeviceModel
     * const DeviceModel = await prisma.deviceModel.create({
     *   data: {
     *     // ... data to create a DeviceModel
     *   }
     * })
     * 
     */
    create<T extends DeviceModelCreateArgs>(args: SelectSubset<T, DeviceModelCreateArgs<ExtArgs>>): Prisma__DeviceModelClient<$Result.GetResult<Prisma.$DeviceModelPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many DeviceModels.
     * @param {DeviceModelCreateManyArgs} args - Arguments to create many DeviceModels.
     * @example
     * // Create many DeviceModels
     * const deviceModel = await prisma.deviceModel.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends DeviceModelCreateManyArgs>(args?: SelectSubset<T, DeviceModelCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many DeviceModels and returns the data saved in the database.
     * @param {DeviceModelCreateManyAndReturnArgs} args - Arguments to create many DeviceModels.
     * @example
     * // Create many DeviceModels
     * const deviceModel = await prisma.deviceModel.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many DeviceModels and only return the `id`
     * const deviceModelWithIdOnly = await prisma.deviceModel.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends DeviceModelCreateManyAndReturnArgs>(args?: SelectSubset<T, DeviceModelCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DeviceModelPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a DeviceModel.
     * @param {DeviceModelDeleteArgs} args - Arguments to delete one DeviceModel.
     * @example
     * // Delete one DeviceModel
     * const DeviceModel = await prisma.deviceModel.delete({
     *   where: {
     *     // ... filter to delete one DeviceModel
     *   }
     * })
     * 
     */
    delete<T extends DeviceModelDeleteArgs>(args: SelectSubset<T, DeviceModelDeleteArgs<ExtArgs>>): Prisma__DeviceModelClient<$Result.GetResult<Prisma.$DeviceModelPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one DeviceModel.
     * @param {DeviceModelUpdateArgs} args - Arguments to update one DeviceModel.
     * @example
     * // Update one DeviceModel
     * const deviceModel = await prisma.deviceModel.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends DeviceModelUpdateArgs>(args: SelectSubset<T, DeviceModelUpdateArgs<ExtArgs>>): Prisma__DeviceModelClient<$Result.GetResult<Prisma.$DeviceModelPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more DeviceModels.
     * @param {DeviceModelDeleteManyArgs} args - Arguments to filter DeviceModels to delete.
     * @example
     * // Delete a few DeviceModels
     * const { count } = await prisma.deviceModel.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends DeviceModelDeleteManyArgs>(args?: SelectSubset<T, DeviceModelDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more DeviceModels.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DeviceModelUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many DeviceModels
     * const deviceModel = await prisma.deviceModel.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends DeviceModelUpdateManyArgs>(args: SelectSubset<T, DeviceModelUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more DeviceModels and returns the data updated in the database.
     * @param {DeviceModelUpdateManyAndReturnArgs} args - Arguments to update many DeviceModels.
     * @example
     * // Update many DeviceModels
     * const deviceModel = await prisma.deviceModel.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more DeviceModels and only return the `id`
     * const deviceModelWithIdOnly = await prisma.deviceModel.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends DeviceModelUpdateManyAndReturnArgs>(args: SelectSubset<T, DeviceModelUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DeviceModelPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one DeviceModel.
     * @param {DeviceModelUpsertArgs} args - Arguments to update or create a DeviceModel.
     * @example
     * // Update or create a DeviceModel
     * const deviceModel = await prisma.deviceModel.upsert({
     *   create: {
     *     // ... data to create a DeviceModel
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the DeviceModel we want to update
     *   }
     * })
     */
    upsert<T extends DeviceModelUpsertArgs>(args: SelectSubset<T, DeviceModelUpsertArgs<ExtArgs>>): Prisma__DeviceModelClient<$Result.GetResult<Prisma.$DeviceModelPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of DeviceModels.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DeviceModelCountArgs} args - Arguments to filter DeviceModels to count.
     * @example
     * // Count the number of DeviceModels
     * const count = await prisma.deviceModel.count({
     *   where: {
     *     // ... the filter for the DeviceModels we want to count
     *   }
     * })
    **/
    count<T extends DeviceModelCountArgs>(
      args?: Subset<T, DeviceModelCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], DeviceModelCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a DeviceModel.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DeviceModelAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends DeviceModelAggregateArgs>(args: Subset<T, DeviceModelAggregateArgs>): Prisma.PrismaPromise<GetDeviceModelAggregateType<T>>

    /**
     * Group by DeviceModel.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DeviceModelGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends DeviceModelGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: DeviceModelGroupByArgs['orderBy'] }
        : { orderBy?: DeviceModelGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, DeviceModelGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetDeviceModelGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the DeviceModel model
   */
  readonly fields: DeviceModelFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for DeviceModel.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__DeviceModelClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    brand<T extends BrandDefaultArgs<ExtArgs> = {}>(args?: Subset<T, BrandDefaultArgs<ExtArgs>>): Prisma__BrandClient<$Result.GetResult<Prisma.$BrandPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    variants<T extends DeviceModel$variantsArgs<ExtArgs> = {}>(args?: Subset<T, DeviceModel$variantsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DeviceVariantPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the DeviceModel model
   */
  interface DeviceModelFieldRefs {
    readonly id: FieldRef<"DeviceModel", 'String'>
    readonly brandId: FieldRef<"DeviceModel", 'String'>
    readonly name: FieldRef<"DeviceModel", 'String'>
    readonly deviceType: FieldRef<"DeviceModel", 'String'>
    readonly releaseDate: FieldRef<"DeviceModel", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * DeviceModel findUnique
   */
  export type DeviceModelFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DeviceModel
     */
    select?: DeviceModelSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DeviceModel
     */
    omit?: DeviceModelOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DeviceModelInclude<ExtArgs> | null
    /**
     * Filter, which DeviceModel to fetch.
     */
    where: DeviceModelWhereUniqueInput
  }

  /**
   * DeviceModel findUniqueOrThrow
   */
  export type DeviceModelFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DeviceModel
     */
    select?: DeviceModelSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DeviceModel
     */
    omit?: DeviceModelOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DeviceModelInclude<ExtArgs> | null
    /**
     * Filter, which DeviceModel to fetch.
     */
    where: DeviceModelWhereUniqueInput
  }

  /**
   * DeviceModel findFirst
   */
  export type DeviceModelFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DeviceModel
     */
    select?: DeviceModelSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DeviceModel
     */
    omit?: DeviceModelOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DeviceModelInclude<ExtArgs> | null
    /**
     * Filter, which DeviceModel to fetch.
     */
    where?: DeviceModelWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of DeviceModels to fetch.
     */
    orderBy?: DeviceModelOrderByWithRelationInput | DeviceModelOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for DeviceModels.
     */
    cursor?: DeviceModelWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` DeviceModels from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` DeviceModels.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of DeviceModels.
     */
    distinct?: DeviceModelScalarFieldEnum | DeviceModelScalarFieldEnum[]
  }

  /**
   * DeviceModel findFirstOrThrow
   */
  export type DeviceModelFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DeviceModel
     */
    select?: DeviceModelSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DeviceModel
     */
    omit?: DeviceModelOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DeviceModelInclude<ExtArgs> | null
    /**
     * Filter, which DeviceModel to fetch.
     */
    where?: DeviceModelWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of DeviceModels to fetch.
     */
    orderBy?: DeviceModelOrderByWithRelationInput | DeviceModelOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for DeviceModels.
     */
    cursor?: DeviceModelWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` DeviceModels from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` DeviceModels.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of DeviceModels.
     */
    distinct?: DeviceModelScalarFieldEnum | DeviceModelScalarFieldEnum[]
  }

  /**
   * DeviceModel findMany
   */
  export type DeviceModelFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DeviceModel
     */
    select?: DeviceModelSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DeviceModel
     */
    omit?: DeviceModelOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DeviceModelInclude<ExtArgs> | null
    /**
     * Filter, which DeviceModels to fetch.
     */
    where?: DeviceModelWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of DeviceModels to fetch.
     */
    orderBy?: DeviceModelOrderByWithRelationInput | DeviceModelOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing DeviceModels.
     */
    cursor?: DeviceModelWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` DeviceModels from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` DeviceModels.
     */
    skip?: number
    distinct?: DeviceModelScalarFieldEnum | DeviceModelScalarFieldEnum[]
  }

  /**
   * DeviceModel create
   */
  export type DeviceModelCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DeviceModel
     */
    select?: DeviceModelSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DeviceModel
     */
    omit?: DeviceModelOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DeviceModelInclude<ExtArgs> | null
    /**
     * The data needed to create a DeviceModel.
     */
    data: XOR<DeviceModelCreateInput, DeviceModelUncheckedCreateInput>
  }

  /**
   * DeviceModel createMany
   */
  export type DeviceModelCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many DeviceModels.
     */
    data: DeviceModelCreateManyInput | DeviceModelCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * DeviceModel createManyAndReturn
   */
  export type DeviceModelCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DeviceModel
     */
    select?: DeviceModelSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the DeviceModel
     */
    omit?: DeviceModelOmit<ExtArgs> | null
    /**
     * The data used to create many DeviceModels.
     */
    data: DeviceModelCreateManyInput | DeviceModelCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DeviceModelIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * DeviceModel update
   */
  export type DeviceModelUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DeviceModel
     */
    select?: DeviceModelSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DeviceModel
     */
    omit?: DeviceModelOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DeviceModelInclude<ExtArgs> | null
    /**
     * The data needed to update a DeviceModel.
     */
    data: XOR<DeviceModelUpdateInput, DeviceModelUncheckedUpdateInput>
    /**
     * Choose, which DeviceModel to update.
     */
    where: DeviceModelWhereUniqueInput
  }

  /**
   * DeviceModel updateMany
   */
  export type DeviceModelUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update DeviceModels.
     */
    data: XOR<DeviceModelUpdateManyMutationInput, DeviceModelUncheckedUpdateManyInput>
    /**
     * Filter which DeviceModels to update
     */
    where?: DeviceModelWhereInput
    /**
     * Limit how many DeviceModels to update.
     */
    limit?: number
  }

  /**
   * DeviceModel updateManyAndReturn
   */
  export type DeviceModelUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DeviceModel
     */
    select?: DeviceModelSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the DeviceModel
     */
    omit?: DeviceModelOmit<ExtArgs> | null
    /**
     * The data used to update DeviceModels.
     */
    data: XOR<DeviceModelUpdateManyMutationInput, DeviceModelUncheckedUpdateManyInput>
    /**
     * Filter which DeviceModels to update
     */
    where?: DeviceModelWhereInput
    /**
     * Limit how many DeviceModels to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DeviceModelIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * DeviceModel upsert
   */
  export type DeviceModelUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DeviceModel
     */
    select?: DeviceModelSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DeviceModel
     */
    omit?: DeviceModelOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DeviceModelInclude<ExtArgs> | null
    /**
     * The filter to search for the DeviceModel to update in case it exists.
     */
    where: DeviceModelWhereUniqueInput
    /**
     * In case the DeviceModel found by the `where` argument doesn't exist, create a new DeviceModel with this data.
     */
    create: XOR<DeviceModelCreateInput, DeviceModelUncheckedCreateInput>
    /**
     * In case the DeviceModel was found with the provided `where` argument, update it with this data.
     */
    update: XOR<DeviceModelUpdateInput, DeviceModelUncheckedUpdateInput>
  }

  /**
   * DeviceModel delete
   */
  export type DeviceModelDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DeviceModel
     */
    select?: DeviceModelSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DeviceModel
     */
    omit?: DeviceModelOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DeviceModelInclude<ExtArgs> | null
    /**
     * Filter which DeviceModel to delete.
     */
    where: DeviceModelWhereUniqueInput
  }

  /**
   * DeviceModel deleteMany
   */
  export type DeviceModelDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which DeviceModels to delete
     */
    where?: DeviceModelWhereInput
    /**
     * Limit how many DeviceModels to delete.
     */
    limit?: number
  }

  /**
   * DeviceModel.variants
   */
  export type DeviceModel$variantsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DeviceVariant
     */
    select?: DeviceVariantSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DeviceVariant
     */
    omit?: DeviceVariantOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DeviceVariantInclude<ExtArgs> | null
    where?: DeviceVariantWhereInput
    orderBy?: DeviceVariantOrderByWithRelationInput | DeviceVariantOrderByWithRelationInput[]
    cursor?: DeviceVariantWhereUniqueInput
    take?: number
    skip?: number
    distinct?: DeviceVariantScalarFieldEnum | DeviceVariantScalarFieldEnum[]
  }

  /**
   * DeviceModel without action
   */
  export type DeviceModelDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DeviceModel
     */
    select?: DeviceModelSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DeviceModel
     */
    omit?: DeviceModelOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DeviceModelInclude<ExtArgs> | null
  }


  /**
   * Model DeviceVariant
   */

  export type AggregateDeviceVariant = {
    _count: DeviceVariantCountAggregateOutputType | null
    _min: DeviceVariantMinAggregateOutputType | null
    _max: DeviceVariantMaxAggregateOutputType | null
  }

  export type DeviceVariantMinAggregateOutputType = {
    id: string | null
    deviceModelId: string | null
    storageCapacity: string | null
    slug: string | null
  }

  export type DeviceVariantMaxAggregateOutputType = {
    id: string | null
    deviceModelId: string | null
    storageCapacity: string | null
    slug: string | null
  }

  export type DeviceVariantCountAggregateOutputType = {
    id: number
    deviceModelId: number
    storageCapacity: number
    slug: number
    _all: number
  }


  export type DeviceVariantMinAggregateInputType = {
    id?: true
    deviceModelId?: true
    storageCapacity?: true
    slug?: true
  }

  export type DeviceVariantMaxAggregateInputType = {
    id?: true
    deviceModelId?: true
    storageCapacity?: true
    slug?: true
  }

  export type DeviceVariantCountAggregateInputType = {
    id?: true
    deviceModelId?: true
    storageCapacity?: true
    slug?: true
    _all?: true
  }

  export type DeviceVariantAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which DeviceVariant to aggregate.
     */
    where?: DeviceVariantWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of DeviceVariants to fetch.
     */
    orderBy?: DeviceVariantOrderByWithRelationInput | DeviceVariantOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: DeviceVariantWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` DeviceVariants from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` DeviceVariants.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned DeviceVariants
    **/
    _count?: true | DeviceVariantCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: DeviceVariantMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: DeviceVariantMaxAggregateInputType
  }

  export type GetDeviceVariantAggregateType<T extends DeviceVariantAggregateArgs> = {
        [P in keyof T & keyof AggregateDeviceVariant]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateDeviceVariant[P]>
      : GetScalarType<T[P], AggregateDeviceVariant[P]>
  }




  export type DeviceVariantGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: DeviceVariantWhereInput
    orderBy?: DeviceVariantOrderByWithAggregationInput | DeviceVariantOrderByWithAggregationInput[]
    by: DeviceVariantScalarFieldEnum[] | DeviceVariantScalarFieldEnum
    having?: DeviceVariantScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: DeviceVariantCountAggregateInputType | true
    _min?: DeviceVariantMinAggregateInputType
    _max?: DeviceVariantMaxAggregateInputType
  }

  export type DeviceVariantGroupByOutputType = {
    id: string
    deviceModelId: string
    storageCapacity: string
    slug: string
    _count: DeviceVariantCountAggregateOutputType | null
    _min: DeviceVariantMinAggregateOutputType | null
    _max: DeviceVariantMaxAggregateOutputType | null
  }

  type GetDeviceVariantGroupByPayload<T extends DeviceVariantGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<DeviceVariantGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof DeviceVariantGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], DeviceVariantGroupByOutputType[P]>
            : GetScalarType<T[P], DeviceVariantGroupByOutputType[P]>
        }
      >
    >


  export type DeviceVariantSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    deviceModelId?: boolean
    storageCapacity?: boolean
    slug?: boolean
    deviceModel?: boolean | DeviceModelDefaultArgs<ExtArgs>
    emissionMetrics?: boolean | DeviceVariant$emissionMetricsArgs<ExtArgs>
  }, ExtArgs["result"]["deviceVariant"]>

  export type DeviceVariantSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    deviceModelId?: boolean
    storageCapacity?: boolean
    slug?: boolean
    deviceModel?: boolean | DeviceModelDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["deviceVariant"]>

  export type DeviceVariantSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    deviceModelId?: boolean
    storageCapacity?: boolean
    slug?: boolean
    deviceModel?: boolean | DeviceModelDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["deviceVariant"]>

  export type DeviceVariantSelectScalar = {
    id?: boolean
    deviceModelId?: boolean
    storageCapacity?: boolean
    slug?: boolean
  }

  export type DeviceVariantOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "deviceModelId" | "storageCapacity" | "slug", ExtArgs["result"]["deviceVariant"]>
  export type DeviceVariantInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    deviceModel?: boolean | DeviceModelDefaultArgs<ExtArgs>
    emissionMetrics?: boolean | DeviceVariant$emissionMetricsArgs<ExtArgs>
  }
  export type DeviceVariantIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    deviceModel?: boolean | DeviceModelDefaultArgs<ExtArgs>
  }
  export type DeviceVariantIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    deviceModel?: boolean | DeviceModelDefaultArgs<ExtArgs>
  }

  export type $DeviceVariantPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "DeviceVariant"
    objects: {
      deviceModel: Prisma.$DeviceModelPayload<ExtArgs>
      emissionMetrics: Prisma.$EmissionMetricsPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      deviceModelId: string
      storageCapacity: string
      slug: string
    }, ExtArgs["result"]["deviceVariant"]>
    composites: {}
  }

  type DeviceVariantGetPayload<S extends boolean | null | undefined | DeviceVariantDefaultArgs> = $Result.GetResult<Prisma.$DeviceVariantPayload, S>

  type DeviceVariantCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<DeviceVariantFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: DeviceVariantCountAggregateInputType | true
    }

  export interface DeviceVariantDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['DeviceVariant'], meta: { name: 'DeviceVariant' } }
    /**
     * Find zero or one DeviceVariant that matches the filter.
     * @param {DeviceVariantFindUniqueArgs} args - Arguments to find a DeviceVariant
     * @example
     * // Get one DeviceVariant
     * const deviceVariant = await prisma.deviceVariant.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends DeviceVariantFindUniqueArgs>(args: SelectSubset<T, DeviceVariantFindUniqueArgs<ExtArgs>>): Prisma__DeviceVariantClient<$Result.GetResult<Prisma.$DeviceVariantPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one DeviceVariant that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {DeviceVariantFindUniqueOrThrowArgs} args - Arguments to find a DeviceVariant
     * @example
     * // Get one DeviceVariant
     * const deviceVariant = await prisma.deviceVariant.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends DeviceVariantFindUniqueOrThrowArgs>(args: SelectSubset<T, DeviceVariantFindUniqueOrThrowArgs<ExtArgs>>): Prisma__DeviceVariantClient<$Result.GetResult<Prisma.$DeviceVariantPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first DeviceVariant that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DeviceVariantFindFirstArgs} args - Arguments to find a DeviceVariant
     * @example
     * // Get one DeviceVariant
     * const deviceVariant = await prisma.deviceVariant.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends DeviceVariantFindFirstArgs>(args?: SelectSubset<T, DeviceVariantFindFirstArgs<ExtArgs>>): Prisma__DeviceVariantClient<$Result.GetResult<Prisma.$DeviceVariantPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first DeviceVariant that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DeviceVariantFindFirstOrThrowArgs} args - Arguments to find a DeviceVariant
     * @example
     * // Get one DeviceVariant
     * const deviceVariant = await prisma.deviceVariant.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends DeviceVariantFindFirstOrThrowArgs>(args?: SelectSubset<T, DeviceVariantFindFirstOrThrowArgs<ExtArgs>>): Prisma__DeviceVariantClient<$Result.GetResult<Prisma.$DeviceVariantPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more DeviceVariants that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DeviceVariantFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all DeviceVariants
     * const deviceVariants = await prisma.deviceVariant.findMany()
     * 
     * // Get first 10 DeviceVariants
     * const deviceVariants = await prisma.deviceVariant.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const deviceVariantWithIdOnly = await prisma.deviceVariant.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends DeviceVariantFindManyArgs>(args?: SelectSubset<T, DeviceVariantFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DeviceVariantPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a DeviceVariant.
     * @param {DeviceVariantCreateArgs} args - Arguments to create a DeviceVariant.
     * @example
     * // Create one DeviceVariant
     * const DeviceVariant = await prisma.deviceVariant.create({
     *   data: {
     *     // ... data to create a DeviceVariant
     *   }
     * })
     * 
     */
    create<T extends DeviceVariantCreateArgs>(args: SelectSubset<T, DeviceVariantCreateArgs<ExtArgs>>): Prisma__DeviceVariantClient<$Result.GetResult<Prisma.$DeviceVariantPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many DeviceVariants.
     * @param {DeviceVariantCreateManyArgs} args - Arguments to create many DeviceVariants.
     * @example
     * // Create many DeviceVariants
     * const deviceVariant = await prisma.deviceVariant.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends DeviceVariantCreateManyArgs>(args?: SelectSubset<T, DeviceVariantCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many DeviceVariants and returns the data saved in the database.
     * @param {DeviceVariantCreateManyAndReturnArgs} args - Arguments to create many DeviceVariants.
     * @example
     * // Create many DeviceVariants
     * const deviceVariant = await prisma.deviceVariant.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many DeviceVariants and only return the `id`
     * const deviceVariantWithIdOnly = await prisma.deviceVariant.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends DeviceVariantCreateManyAndReturnArgs>(args?: SelectSubset<T, DeviceVariantCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DeviceVariantPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a DeviceVariant.
     * @param {DeviceVariantDeleteArgs} args - Arguments to delete one DeviceVariant.
     * @example
     * // Delete one DeviceVariant
     * const DeviceVariant = await prisma.deviceVariant.delete({
     *   where: {
     *     // ... filter to delete one DeviceVariant
     *   }
     * })
     * 
     */
    delete<T extends DeviceVariantDeleteArgs>(args: SelectSubset<T, DeviceVariantDeleteArgs<ExtArgs>>): Prisma__DeviceVariantClient<$Result.GetResult<Prisma.$DeviceVariantPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one DeviceVariant.
     * @param {DeviceVariantUpdateArgs} args - Arguments to update one DeviceVariant.
     * @example
     * // Update one DeviceVariant
     * const deviceVariant = await prisma.deviceVariant.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends DeviceVariantUpdateArgs>(args: SelectSubset<T, DeviceVariantUpdateArgs<ExtArgs>>): Prisma__DeviceVariantClient<$Result.GetResult<Prisma.$DeviceVariantPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more DeviceVariants.
     * @param {DeviceVariantDeleteManyArgs} args - Arguments to filter DeviceVariants to delete.
     * @example
     * // Delete a few DeviceVariants
     * const { count } = await prisma.deviceVariant.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends DeviceVariantDeleteManyArgs>(args?: SelectSubset<T, DeviceVariantDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more DeviceVariants.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DeviceVariantUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many DeviceVariants
     * const deviceVariant = await prisma.deviceVariant.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends DeviceVariantUpdateManyArgs>(args: SelectSubset<T, DeviceVariantUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more DeviceVariants and returns the data updated in the database.
     * @param {DeviceVariantUpdateManyAndReturnArgs} args - Arguments to update many DeviceVariants.
     * @example
     * // Update many DeviceVariants
     * const deviceVariant = await prisma.deviceVariant.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more DeviceVariants and only return the `id`
     * const deviceVariantWithIdOnly = await prisma.deviceVariant.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends DeviceVariantUpdateManyAndReturnArgs>(args: SelectSubset<T, DeviceVariantUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DeviceVariantPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one DeviceVariant.
     * @param {DeviceVariantUpsertArgs} args - Arguments to update or create a DeviceVariant.
     * @example
     * // Update or create a DeviceVariant
     * const deviceVariant = await prisma.deviceVariant.upsert({
     *   create: {
     *     // ... data to create a DeviceVariant
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the DeviceVariant we want to update
     *   }
     * })
     */
    upsert<T extends DeviceVariantUpsertArgs>(args: SelectSubset<T, DeviceVariantUpsertArgs<ExtArgs>>): Prisma__DeviceVariantClient<$Result.GetResult<Prisma.$DeviceVariantPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of DeviceVariants.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DeviceVariantCountArgs} args - Arguments to filter DeviceVariants to count.
     * @example
     * // Count the number of DeviceVariants
     * const count = await prisma.deviceVariant.count({
     *   where: {
     *     // ... the filter for the DeviceVariants we want to count
     *   }
     * })
    **/
    count<T extends DeviceVariantCountArgs>(
      args?: Subset<T, DeviceVariantCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], DeviceVariantCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a DeviceVariant.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DeviceVariantAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends DeviceVariantAggregateArgs>(args: Subset<T, DeviceVariantAggregateArgs>): Prisma.PrismaPromise<GetDeviceVariantAggregateType<T>>

    /**
     * Group by DeviceVariant.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DeviceVariantGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends DeviceVariantGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: DeviceVariantGroupByArgs['orderBy'] }
        : { orderBy?: DeviceVariantGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, DeviceVariantGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetDeviceVariantGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the DeviceVariant model
   */
  readonly fields: DeviceVariantFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for DeviceVariant.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__DeviceVariantClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    deviceModel<T extends DeviceModelDefaultArgs<ExtArgs> = {}>(args?: Subset<T, DeviceModelDefaultArgs<ExtArgs>>): Prisma__DeviceModelClient<$Result.GetResult<Prisma.$DeviceModelPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    emissionMetrics<T extends DeviceVariant$emissionMetricsArgs<ExtArgs> = {}>(args?: Subset<T, DeviceVariant$emissionMetricsArgs<ExtArgs>>): Prisma__EmissionMetricsClient<$Result.GetResult<Prisma.$EmissionMetricsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the DeviceVariant model
   */
  interface DeviceVariantFieldRefs {
    readonly id: FieldRef<"DeviceVariant", 'String'>
    readonly deviceModelId: FieldRef<"DeviceVariant", 'String'>
    readonly storageCapacity: FieldRef<"DeviceVariant", 'String'>
    readonly slug: FieldRef<"DeviceVariant", 'String'>
  }
    

  // Custom InputTypes
  /**
   * DeviceVariant findUnique
   */
  export type DeviceVariantFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DeviceVariant
     */
    select?: DeviceVariantSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DeviceVariant
     */
    omit?: DeviceVariantOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DeviceVariantInclude<ExtArgs> | null
    /**
     * Filter, which DeviceVariant to fetch.
     */
    where: DeviceVariantWhereUniqueInput
  }

  /**
   * DeviceVariant findUniqueOrThrow
   */
  export type DeviceVariantFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DeviceVariant
     */
    select?: DeviceVariantSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DeviceVariant
     */
    omit?: DeviceVariantOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DeviceVariantInclude<ExtArgs> | null
    /**
     * Filter, which DeviceVariant to fetch.
     */
    where: DeviceVariantWhereUniqueInput
  }

  /**
   * DeviceVariant findFirst
   */
  export type DeviceVariantFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DeviceVariant
     */
    select?: DeviceVariantSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DeviceVariant
     */
    omit?: DeviceVariantOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DeviceVariantInclude<ExtArgs> | null
    /**
     * Filter, which DeviceVariant to fetch.
     */
    where?: DeviceVariantWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of DeviceVariants to fetch.
     */
    orderBy?: DeviceVariantOrderByWithRelationInput | DeviceVariantOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for DeviceVariants.
     */
    cursor?: DeviceVariantWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` DeviceVariants from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` DeviceVariants.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of DeviceVariants.
     */
    distinct?: DeviceVariantScalarFieldEnum | DeviceVariantScalarFieldEnum[]
  }

  /**
   * DeviceVariant findFirstOrThrow
   */
  export type DeviceVariantFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DeviceVariant
     */
    select?: DeviceVariantSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DeviceVariant
     */
    omit?: DeviceVariantOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DeviceVariantInclude<ExtArgs> | null
    /**
     * Filter, which DeviceVariant to fetch.
     */
    where?: DeviceVariantWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of DeviceVariants to fetch.
     */
    orderBy?: DeviceVariantOrderByWithRelationInput | DeviceVariantOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for DeviceVariants.
     */
    cursor?: DeviceVariantWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` DeviceVariants from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` DeviceVariants.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of DeviceVariants.
     */
    distinct?: DeviceVariantScalarFieldEnum | DeviceVariantScalarFieldEnum[]
  }

  /**
   * DeviceVariant findMany
   */
  export type DeviceVariantFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DeviceVariant
     */
    select?: DeviceVariantSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DeviceVariant
     */
    omit?: DeviceVariantOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DeviceVariantInclude<ExtArgs> | null
    /**
     * Filter, which DeviceVariants to fetch.
     */
    where?: DeviceVariantWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of DeviceVariants to fetch.
     */
    orderBy?: DeviceVariantOrderByWithRelationInput | DeviceVariantOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing DeviceVariants.
     */
    cursor?: DeviceVariantWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` DeviceVariants from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` DeviceVariants.
     */
    skip?: number
    distinct?: DeviceVariantScalarFieldEnum | DeviceVariantScalarFieldEnum[]
  }

  /**
   * DeviceVariant create
   */
  export type DeviceVariantCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DeviceVariant
     */
    select?: DeviceVariantSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DeviceVariant
     */
    omit?: DeviceVariantOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DeviceVariantInclude<ExtArgs> | null
    /**
     * The data needed to create a DeviceVariant.
     */
    data: XOR<DeviceVariantCreateInput, DeviceVariantUncheckedCreateInput>
  }

  /**
   * DeviceVariant createMany
   */
  export type DeviceVariantCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many DeviceVariants.
     */
    data: DeviceVariantCreateManyInput | DeviceVariantCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * DeviceVariant createManyAndReturn
   */
  export type DeviceVariantCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DeviceVariant
     */
    select?: DeviceVariantSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the DeviceVariant
     */
    omit?: DeviceVariantOmit<ExtArgs> | null
    /**
     * The data used to create many DeviceVariants.
     */
    data: DeviceVariantCreateManyInput | DeviceVariantCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DeviceVariantIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * DeviceVariant update
   */
  export type DeviceVariantUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DeviceVariant
     */
    select?: DeviceVariantSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DeviceVariant
     */
    omit?: DeviceVariantOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DeviceVariantInclude<ExtArgs> | null
    /**
     * The data needed to update a DeviceVariant.
     */
    data: XOR<DeviceVariantUpdateInput, DeviceVariantUncheckedUpdateInput>
    /**
     * Choose, which DeviceVariant to update.
     */
    where: DeviceVariantWhereUniqueInput
  }

  /**
   * DeviceVariant updateMany
   */
  export type DeviceVariantUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update DeviceVariants.
     */
    data: XOR<DeviceVariantUpdateManyMutationInput, DeviceVariantUncheckedUpdateManyInput>
    /**
     * Filter which DeviceVariants to update
     */
    where?: DeviceVariantWhereInput
    /**
     * Limit how many DeviceVariants to update.
     */
    limit?: number
  }

  /**
   * DeviceVariant updateManyAndReturn
   */
  export type DeviceVariantUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DeviceVariant
     */
    select?: DeviceVariantSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the DeviceVariant
     */
    omit?: DeviceVariantOmit<ExtArgs> | null
    /**
     * The data used to update DeviceVariants.
     */
    data: XOR<DeviceVariantUpdateManyMutationInput, DeviceVariantUncheckedUpdateManyInput>
    /**
     * Filter which DeviceVariants to update
     */
    where?: DeviceVariantWhereInput
    /**
     * Limit how many DeviceVariants to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DeviceVariantIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * DeviceVariant upsert
   */
  export type DeviceVariantUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DeviceVariant
     */
    select?: DeviceVariantSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DeviceVariant
     */
    omit?: DeviceVariantOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DeviceVariantInclude<ExtArgs> | null
    /**
     * The filter to search for the DeviceVariant to update in case it exists.
     */
    where: DeviceVariantWhereUniqueInput
    /**
     * In case the DeviceVariant found by the `where` argument doesn't exist, create a new DeviceVariant with this data.
     */
    create: XOR<DeviceVariantCreateInput, DeviceVariantUncheckedCreateInput>
    /**
     * In case the DeviceVariant was found with the provided `where` argument, update it with this data.
     */
    update: XOR<DeviceVariantUpdateInput, DeviceVariantUncheckedUpdateInput>
  }

  /**
   * DeviceVariant delete
   */
  export type DeviceVariantDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DeviceVariant
     */
    select?: DeviceVariantSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DeviceVariant
     */
    omit?: DeviceVariantOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DeviceVariantInclude<ExtArgs> | null
    /**
     * Filter which DeviceVariant to delete.
     */
    where: DeviceVariantWhereUniqueInput
  }

  /**
   * DeviceVariant deleteMany
   */
  export type DeviceVariantDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which DeviceVariants to delete
     */
    where?: DeviceVariantWhereInput
    /**
     * Limit how many DeviceVariants to delete.
     */
    limit?: number
  }

  /**
   * DeviceVariant.emissionMetrics
   */
  export type DeviceVariant$emissionMetricsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EmissionMetrics
     */
    select?: EmissionMetricsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the EmissionMetrics
     */
    omit?: EmissionMetricsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EmissionMetricsInclude<ExtArgs> | null
    where?: EmissionMetricsWhereInput
  }

  /**
   * DeviceVariant without action
   */
  export type DeviceVariantDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DeviceVariant
     */
    select?: DeviceVariantSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DeviceVariant
     */
    omit?: DeviceVariantOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DeviceVariantInclude<ExtArgs> | null
  }


  /**
   * Model EmissionMetrics
   */

  export type AggregateEmissionMetrics = {
    _count: EmissionMetricsCountAggregateOutputType | null
    _avg: EmissionMetricsAvgAggregateOutputType | null
    _sum: EmissionMetricsSumAggregateOutputType | null
    _min: EmissionMetricsMinAggregateOutputType | null
    _max: EmissionMetricsMaxAggregateOutputType | null
  }

  export type EmissionMetricsAvgAggregateOutputType = {
    totalCO2: number | null
    productionPct: number | null
    transportationPct: number | null
    usePct: number | null
    endOfLifePct: number | null
    recycledMaterialsPct: number | null
    cleanEnergyPct: number | null
    recycledRareEarthPct: number | null
    recycledPackagingPct: number | null
  }

  export type EmissionMetricsSumAggregateOutputType = {
    totalCO2: number | null
    productionPct: number | null
    transportationPct: number | null
    usePct: number | null
    endOfLifePct: number | null
    recycledMaterialsPct: number | null
    cleanEnergyPct: number | null
    recycledRareEarthPct: number | null
    recycledPackagingPct: number | null
  }

  export type EmissionMetricsMinAggregateOutputType = {
    id: string | null
    deviceVariantId: string | null
    environmentRating: $Enums.EnvironmentRating | null
    totalCO2: number | null
    productionPct: number | null
    transportationPct: number | null
    usePct: number | null
    endOfLifePct: number | null
    recycledMaterialsPct: number | null
    cleanEnergyPct: number | null
    recycledRareEarthPct: number | null
    recycledPackagingPct: number | null
    labourProtection: string | null
    longevityMeasures: string | null
    harmfulMaterials: string | null
    recyclingProgram: string | null
    source: string | null
    sourceUrl: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type EmissionMetricsMaxAggregateOutputType = {
    id: string | null
    deviceVariantId: string | null
    environmentRating: $Enums.EnvironmentRating | null
    totalCO2: number | null
    productionPct: number | null
    transportationPct: number | null
    usePct: number | null
    endOfLifePct: number | null
    recycledMaterialsPct: number | null
    cleanEnergyPct: number | null
    recycledRareEarthPct: number | null
    recycledPackagingPct: number | null
    labourProtection: string | null
    longevityMeasures: string | null
    harmfulMaterials: string | null
    recyclingProgram: string | null
    source: string | null
    sourceUrl: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type EmissionMetricsCountAggregateOutputType = {
    id: number
    deviceVariantId: number
    environmentRating: number
    totalCO2: number
    productionPct: number
    transportationPct: number
    usePct: number
    endOfLifePct: number
    recycledMaterialsPct: number
    cleanEnergyPct: number
    recycledRareEarthPct: number
    recycledPackagingPct: number
    labourProtection: number
    longevityMeasures: number
    harmfulMaterials: number
    recyclingProgram: number
    source: number
    sourceUrl: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type EmissionMetricsAvgAggregateInputType = {
    totalCO2?: true
    productionPct?: true
    transportationPct?: true
    usePct?: true
    endOfLifePct?: true
    recycledMaterialsPct?: true
    cleanEnergyPct?: true
    recycledRareEarthPct?: true
    recycledPackagingPct?: true
  }

  export type EmissionMetricsSumAggregateInputType = {
    totalCO2?: true
    productionPct?: true
    transportationPct?: true
    usePct?: true
    endOfLifePct?: true
    recycledMaterialsPct?: true
    cleanEnergyPct?: true
    recycledRareEarthPct?: true
    recycledPackagingPct?: true
  }

  export type EmissionMetricsMinAggregateInputType = {
    id?: true
    deviceVariantId?: true
    environmentRating?: true
    totalCO2?: true
    productionPct?: true
    transportationPct?: true
    usePct?: true
    endOfLifePct?: true
    recycledMaterialsPct?: true
    cleanEnergyPct?: true
    recycledRareEarthPct?: true
    recycledPackagingPct?: true
    labourProtection?: true
    longevityMeasures?: true
    harmfulMaterials?: true
    recyclingProgram?: true
    source?: true
    sourceUrl?: true
    createdAt?: true
    updatedAt?: true
  }

  export type EmissionMetricsMaxAggregateInputType = {
    id?: true
    deviceVariantId?: true
    environmentRating?: true
    totalCO2?: true
    productionPct?: true
    transportationPct?: true
    usePct?: true
    endOfLifePct?: true
    recycledMaterialsPct?: true
    cleanEnergyPct?: true
    recycledRareEarthPct?: true
    recycledPackagingPct?: true
    labourProtection?: true
    longevityMeasures?: true
    harmfulMaterials?: true
    recyclingProgram?: true
    source?: true
    sourceUrl?: true
    createdAt?: true
    updatedAt?: true
  }

  export type EmissionMetricsCountAggregateInputType = {
    id?: true
    deviceVariantId?: true
    environmentRating?: true
    totalCO2?: true
    productionPct?: true
    transportationPct?: true
    usePct?: true
    endOfLifePct?: true
    recycledMaterialsPct?: true
    cleanEnergyPct?: true
    recycledRareEarthPct?: true
    recycledPackagingPct?: true
    labourProtection?: true
    longevityMeasures?: true
    harmfulMaterials?: true
    recyclingProgram?: true
    source?: true
    sourceUrl?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type EmissionMetricsAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which EmissionMetrics to aggregate.
     */
    where?: EmissionMetricsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of EmissionMetrics to fetch.
     */
    orderBy?: EmissionMetricsOrderByWithRelationInput | EmissionMetricsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: EmissionMetricsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` EmissionMetrics from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` EmissionMetrics.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned EmissionMetrics
    **/
    _count?: true | EmissionMetricsCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: EmissionMetricsAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: EmissionMetricsSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: EmissionMetricsMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: EmissionMetricsMaxAggregateInputType
  }

  export type GetEmissionMetricsAggregateType<T extends EmissionMetricsAggregateArgs> = {
        [P in keyof T & keyof AggregateEmissionMetrics]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateEmissionMetrics[P]>
      : GetScalarType<T[P], AggregateEmissionMetrics[P]>
  }




  export type EmissionMetricsGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: EmissionMetricsWhereInput
    orderBy?: EmissionMetricsOrderByWithAggregationInput | EmissionMetricsOrderByWithAggregationInput[]
    by: EmissionMetricsScalarFieldEnum[] | EmissionMetricsScalarFieldEnum
    having?: EmissionMetricsScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: EmissionMetricsCountAggregateInputType | true
    _avg?: EmissionMetricsAvgAggregateInputType
    _sum?: EmissionMetricsSumAggregateInputType
    _min?: EmissionMetricsMinAggregateInputType
    _max?: EmissionMetricsMaxAggregateInputType
  }

  export type EmissionMetricsGroupByOutputType = {
    id: string
    deviceVariantId: string
    environmentRating: $Enums.EnvironmentRating
    totalCO2: number
    productionPct: number | null
    transportationPct: number | null
    usePct: number | null
    endOfLifePct: number | null
    recycledMaterialsPct: number | null
    cleanEnergyPct: number | null
    recycledRareEarthPct: number | null
    recycledPackagingPct: number | null
    labourProtection: string | null
    longevityMeasures: string | null
    harmfulMaterials: string | null
    recyclingProgram: string | null
    source: string | null
    sourceUrl: string | null
    createdAt: Date
    updatedAt: Date
    _count: EmissionMetricsCountAggregateOutputType | null
    _avg: EmissionMetricsAvgAggregateOutputType | null
    _sum: EmissionMetricsSumAggregateOutputType | null
    _min: EmissionMetricsMinAggregateOutputType | null
    _max: EmissionMetricsMaxAggregateOutputType | null
  }

  type GetEmissionMetricsGroupByPayload<T extends EmissionMetricsGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<EmissionMetricsGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof EmissionMetricsGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], EmissionMetricsGroupByOutputType[P]>
            : GetScalarType<T[P], EmissionMetricsGroupByOutputType[P]>
        }
      >
    >


  export type EmissionMetricsSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    deviceVariantId?: boolean
    environmentRating?: boolean
    totalCO2?: boolean
    productionPct?: boolean
    transportationPct?: boolean
    usePct?: boolean
    endOfLifePct?: boolean
    recycledMaterialsPct?: boolean
    cleanEnergyPct?: boolean
    recycledRareEarthPct?: boolean
    recycledPackagingPct?: boolean
    labourProtection?: boolean
    longevityMeasures?: boolean
    harmfulMaterials?: boolean
    recyclingProgram?: boolean
    source?: boolean
    sourceUrl?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    deviceVariant?: boolean | DeviceVariantDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["emissionMetrics"]>

  export type EmissionMetricsSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    deviceVariantId?: boolean
    environmentRating?: boolean
    totalCO2?: boolean
    productionPct?: boolean
    transportationPct?: boolean
    usePct?: boolean
    endOfLifePct?: boolean
    recycledMaterialsPct?: boolean
    cleanEnergyPct?: boolean
    recycledRareEarthPct?: boolean
    recycledPackagingPct?: boolean
    labourProtection?: boolean
    longevityMeasures?: boolean
    harmfulMaterials?: boolean
    recyclingProgram?: boolean
    source?: boolean
    sourceUrl?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    deviceVariant?: boolean | DeviceVariantDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["emissionMetrics"]>

  export type EmissionMetricsSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    deviceVariantId?: boolean
    environmentRating?: boolean
    totalCO2?: boolean
    productionPct?: boolean
    transportationPct?: boolean
    usePct?: boolean
    endOfLifePct?: boolean
    recycledMaterialsPct?: boolean
    cleanEnergyPct?: boolean
    recycledRareEarthPct?: boolean
    recycledPackagingPct?: boolean
    labourProtection?: boolean
    longevityMeasures?: boolean
    harmfulMaterials?: boolean
    recyclingProgram?: boolean
    source?: boolean
    sourceUrl?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    deviceVariant?: boolean | DeviceVariantDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["emissionMetrics"]>

  export type EmissionMetricsSelectScalar = {
    id?: boolean
    deviceVariantId?: boolean
    environmentRating?: boolean
    totalCO2?: boolean
    productionPct?: boolean
    transportationPct?: boolean
    usePct?: boolean
    endOfLifePct?: boolean
    recycledMaterialsPct?: boolean
    cleanEnergyPct?: boolean
    recycledRareEarthPct?: boolean
    recycledPackagingPct?: boolean
    labourProtection?: boolean
    longevityMeasures?: boolean
    harmfulMaterials?: boolean
    recyclingProgram?: boolean
    source?: boolean
    sourceUrl?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type EmissionMetricsOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "deviceVariantId" | "environmentRating" | "totalCO2" | "productionPct" | "transportationPct" | "usePct" | "endOfLifePct" | "recycledMaterialsPct" | "cleanEnergyPct" | "recycledRareEarthPct" | "recycledPackagingPct" | "labourProtection" | "longevityMeasures" | "harmfulMaterials" | "recyclingProgram" | "source" | "sourceUrl" | "createdAt" | "updatedAt", ExtArgs["result"]["emissionMetrics"]>
  export type EmissionMetricsInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    deviceVariant?: boolean | DeviceVariantDefaultArgs<ExtArgs>
  }
  export type EmissionMetricsIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    deviceVariant?: boolean | DeviceVariantDefaultArgs<ExtArgs>
  }
  export type EmissionMetricsIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    deviceVariant?: boolean | DeviceVariantDefaultArgs<ExtArgs>
  }

  export type $EmissionMetricsPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "EmissionMetrics"
    objects: {
      deviceVariant: Prisma.$DeviceVariantPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      deviceVariantId: string
      environmentRating: $Enums.EnvironmentRating
      totalCO2: number
      productionPct: number | null
      transportationPct: number | null
      usePct: number | null
      endOfLifePct: number | null
      recycledMaterialsPct: number | null
      cleanEnergyPct: number | null
      recycledRareEarthPct: number | null
      recycledPackagingPct: number | null
      labourProtection: string | null
      longevityMeasures: string | null
      harmfulMaterials: string | null
      recyclingProgram: string | null
      source: string | null
      sourceUrl: string | null
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["emissionMetrics"]>
    composites: {}
  }

  type EmissionMetricsGetPayload<S extends boolean | null | undefined | EmissionMetricsDefaultArgs> = $Result.GetResult<Prisma.$EmissionMetricsPayload, S>

  type EmissionMetricsCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<EmissionMetricsFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: EmissionMetricsCountAggregateInputType | true
    }

  export interface EmissionMetricsDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['EmissionMetrics'], meta: { name: 'EmissionMetrics' } }
    /**
     * Find zero or one EmissionMetrics that matches the filter.
     * @param {EmissionMetricsFindUniqueArgs} args - Arguments to find a EmissionMetrics
     * @example
     * // Get one EmissionMetrics
     * const emissionMetrics = await prisma.emissionMetrics.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends EmissionMetricsFindUniqueArgs>(args: SelectSubset<T, EmissionMetricsFindUniqueArgs<ExtArgs>>): Prisma__EmissionMetricsClient<$Result.GetResult<Prisma.$EmissionMetricsPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one EmissionMetrics that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {EmissionMetricsFindUniqueOrThrowArgs} args - Arguments to find a EmissionMetrics
     * @example
     * // Get one EmissionMetrics
     * const emissionMetrics = await prisma.emissionMetrics.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends EmissionMetricsFindUniqueOrThrowArgs>(args: SelectSubset<T, EmissionMetricsFindUniqueOrThrowArgs<ExtArgs>>): Prisma__EmissionMetricsClient<$Result.GetResult<Prisma.$EmissionMetricsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first EmissionMetrics that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EmissionMetricsFindFirstArgs} args - Arguments to find a EmissionMetrics
     * @example
     * // Get one EmissionMetrics
     * const emissionMetrics = await prisma.emissionMetrics.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends EmissionMetricsFindFirstArgs>(args?: SelectSubset<T, EmissionMetricsFindFirstArgs<ExtArgs>>): Prisma__EmissionMetricsClient<$Result.GetResult<Prisma.$EmissionMetricsPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first EmissionMetrics that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EmissionMetricsFindFirstOrThrowArgs} args - Arguments to find a EmissionMetrics
     * @example
     * // Get one EmissionMetrics
     * const emissionMetrics = await prisma.emissionMetrics.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends EmissionMetricsFindFirstOrThrowArgs>(args?: SelectSubset<T, EmissionMetricsFindFirstOrThrowArgs<ExtArgs>>): Prisma__EmissionMetricsClient<$Result.GetResult<Prisma.$EmissionMetricsPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more EmissionMetrics that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EmissionMetricsFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all EmissionMetrics
     * const emissionMetrics = await prisma.emissionMetrics.findMany()
     * 
     * // Get first 10 EmissionMetrics
     * const emissionMetrics = await prisma.emissionMetrics.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const emissionMetricsWithIdOnly = await prisma.emissionMetrics.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends EmissionMetricsFindManyArgs>(args?: SelectSubset<T, EmissionMetricsFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$EmissionMetricsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a EmissionMetrics.
     * @param {EmissionMetricsCreateArgs} args - Arguments to create a EmissionMetrics.
     * @example
     * // Create one EmissionMetrics
     * const EmissionMetrics = await prisma.emissionMetrics.create({
     *   data: {
     *     // ... data to create a EmissionMetrics
     *   }
     * })
     * 
     */
    create<T extends EmissionMetricsCreateArgs>(args: SelectSubset<T, EmissionMetricsCreateArgs<ExtArgs>>): Prisma__EmissionMetricsClient<$Result.GetResult<Prisma.$EmissionMetricsPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many EmissionMetrics.
     * @param {EmissionMetricsCreateManyArgs} args - Arguments to create many EmissionMetrics.
     * @example
     * // Create many EmissionMetrics
     * const emissionMetrics = await prisma.emissionMetrics.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends EmissionMetricsCreateManyArgs>(args?: SelectSubset<T, EmissionMetricsCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many EmissionMetrics and returns the data saved in the database.
     * @param {EmissionMetricsCreateManyAndReturnArgs} args - Arguments to create many EmissionMetrics.
     * @example
     * // Create many EmissionMetrics
     * const emissionMetrics = await prisma.emissionMetrics.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many EmissionMetrics and only return the `id`
     * const emissionMetricsWithIdOnly = await prisma.emissionMetrics.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends EmissionMetricsCreateManyAndReturnArgs>(args?: SelectSubset<T, EmissionMetricsCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$EmissionMetricsPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a EmissionMetrics.
     * @param {EmissionMetricsDeleteArgs} args - Arguments to delete one EmissionMetrics.
     * @example
     * // Delete one EmissionMetrics
     * const EmissionMetrics = await prisma.emissionMetrics.delete({
     *   where: {
     *     // ... filter to delete one EmissionMetrics
     *   }
     * })
     * 
     */
    delete<T extends EmissionMetricsDeleteArgs>(args: SelectSubset<T, EmissionMetricsDeleteArgs<ExtArgs>>): Prisma__EmissionMetricsClient<$Result.GetResult<Prisma.$EmissionMetricsPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one EmissionMetrics.
     * @param {EmissionMetricsUpdateArgs} args - Arguments to update one EmissionMetrics.
     * @example
     * // Update one EmissionMetrics
     * const emissionMetrics = await prisma.emissionMetrics.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends EmissionMetricsUpdateArgs>(args: SelectSubset<T, EmissionMetricsUpdateArgs<ExtArgs>>): Prisma__EmissionMetricsClient<$Result.GetResult<Prisma.$EmissionMetricsPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more EmissionMetrics.
     * @param {EmissionMetricsDeleteManyArgs} args - Arguments to filter EmissionMetrics to delete.
     * @example
     * // Delete a few EmissionMetrics
     * const { count } = await prisma.emissionMetrics.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends EmissionMetricsDeleteManyArgs>(args?: SelectSubset<T, EmissionMetricsDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more EmissionMetrics.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EmissionMetricsUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many EmissionMetrics
     * const emissionMetrics = await prisma.emissionMetrics.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends EmissionMetricsUpdateManyArgs>(args: SelectSubset<T, EmissionMetricsUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more EmissionMetrics and returns the data updated in the database.
     * @param {EmissionMetricsUpdateManyAndReturnArgs} args - Arguments to update many EmissionMetrics.
     * @example
     * // Update many EmissionMetrics
     * const emissionMetrics = await prisma.emissionMetrics.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more EmissionMetrics and only return the `id`
     * const emissionMetricsWithIdOnly = await prisma.emissionMetrics.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends EmissionMetricsUpdateManyAndReturnArgs>(args: SelectSubset<T, EmissionMetricsUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$EmissionMetricsPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one EmissionMetrics.
     * @param {EmissionMetricsUpsertArgs} args - Arguments to update or create a EmissionMetrics.
     * @example
     * // Update or create a EmissionMetrics
     * const emissionMetrics = await prisma.emissionMetrics.upsert({
     *   create: {
     *     // ... data to create a EmissionMetrics
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the EmissionMetrics we want to update
     *   }
     * })
     */
    upsert<T extends EmissionMetricsUpsertArgs>(args: SelectSubset<T, EmissionMetricsUpsertArgs<ExtArgs>>): Prisma__EmissionMetricsClient<$Result.GetResult<Prisma.$EmissionMetricsPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of EmissionMetrics.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EmissionMetricsCountArgs} args - Arguments to filter EmissionMetrics to count.
     * @example
     * // Count the number of EmissionMetrics
     * const count = await prisma.emissionMetrics.count({
     *   where: {
     *     // ... the filter for the EmissionMetrics we want to count
     *   }
     * })
    **/
    count<T extends EmissionMetricsCountArgs>(
      args?: Subset<T, EmissionMetricsCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], EmissionMetricsCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a EmissionMetrics.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EmissionMetricsAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends EmissionMetricsAggregateArgs>(args: Subset<T, EmissionMetricsAggregateArgs>): Prisma.PrismaPromise<GetEmissionMetricsAggregateType<T>>

    /**
     * Group by EmissionMetrics.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EmissionMetricsGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends EmissionMetricsGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: EmissionMetricsGroupByArgs['orderBy'] }
        : { orderBy?: EmissionMetricsGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, EmissionMetricsGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetEmissionMetricsGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the EmissionMetrics model
   */
  readonly fields: EmissionMetricsFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for EmissionMetrics.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__EmissionMetricsClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    deviceVariant<T extends DeviceVariantDefaultArgs<ExtArgs> = {}>(args?: Subset<T, DeviceVariantDefaultArgs<ExtArgs>>): Prisma__DeviceVariantClient<$Result.GetResult<Prisma.$DeviceVariantPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the EmissionMetrics model
   */
  interface EmissionMetricsFieldRefs {
    readonly id: FieldRef<"EmissionMetrics", 'String'>
    readonly deviceVariantId: FieldRef<"EmissionMetrics", 'String'>
    readonly environmentRating: FieldRef<"EmissionMetrics", 'EnvironmentRating'>
    readonly totalCO2: FieldRef<"EmissionMetrics", 'Float'>
    readonly productionPct: FieldRef<"EmissionMetrics", 'Float'>
    readonly transportationPct: FieldRef<"EmissionMetrics", 'Float'>
    readonly usePct: FieldRef<"EmissionMetrics", 'Float'>
    readonly endOfLifePct: FieldRef<"EmissionMetrics", 'Float'>
    readonly recycledMaterialsPct: FieldRef<"EmissionMetrics", 'Float'>
    readonly cleanEnergyPct: FieldRef<"EmissionMetrics", 'Float'>
    readonly recycledRareEarthPct: FieldRef<"EmissionMetrics", 'Float'>
    readonly recycledPackagingPct: FieldRef<"EmissionMetrics", 'Float'>
    readonly labourProtection: FieldRef<"EmissionMetrics", 'String'>
    readonly longevityMeasures: FieldRef<"EmissionMetrics", 'String'>
    readonly harmfulMaterials: FieldRef<"EmissionMetrics", 'String'>
    readonly recyclingProgram: FieldRef<"EmissionMetrics", 'String'>
    readonly source: FieldRef<"EmissionMetrics", 'String'>
    readonly sourceUrl: FieldRef<"EmissionMetrics", 'String'>
    readonly createdAt: FieldRef<"EmissionMetrics", 'DateTime'>
    readonly updatedAt: FieldRef<"EmissionMetrics", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * EmissionMetrics findUnique
   */
  export type EmissionMetricsFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EmissionMetrics
     */
    select?: EmissionMetricsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the EmissionMetrics
     */
    omit?: EmissionMetricsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EmissionMetricsInclude<ExtArgs> | null
    /**
     * Filter, which EmissionMetrics to fetch.
     */
    where: EmissionMetricsWhereUniqueInput
  }

  /**
   * EmissionMetrics findUniqueOrThrow
   */
  export type EmissionMetricsFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EmissionMetrics
     */
    select?: EmissionMetricsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the EmissionMetrics
     */
    omit?: EmissionMetricsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EmissionMetricsInclude<ExtArgs> | null
    /**
     * Filter, which EmissionMetrics to fetch.
     */
    where: EmissionMetricsWhereUniqueInput
  }

  /**
   * EmissionMetrics findFirst
   */
  export type EmissionMetricsFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EmissionMetrics
     */
    select?: EmissionMetricsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the EmissionMetrics
     */
    omit?: EmissionMetricsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EmissionMetricsInclude<ExtArgs> | null
    /**
     * Filter, which EmissionMetrics to fetch.
     */
    where?: EmissionMetricsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of EmissionMetrics to fetch.
     */
    orderBy?: EmissionMetricsOrderByWithRelationInput | EmissionMetricsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for EmissionMetrics.
     */
    cursor?: EmissionMetricsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` EmissionMetrics from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` EmissionMetrics.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of EmissionMetrics.
     */
    distinct?: EmissionMetricsScalarFieldEnum | EmissionMetricsScalarFieldEnum[]
  }

  /**
   * EmissionMetrics findFirstOrThrow
   */
  export type EmissionMetricsFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EmissionMetrics
     */
    select?: EmissionMetricsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the EmissionMetrics
     */
    omit?: EmissionMetricsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EmissionMetricsInclude<ExtArgs> | null
    /**
     * Filter, which EmissionMetrics to fetch.
     */
    where?: EmissionMetricsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of EmissionMetrics to fetch.
     */
    orderBy?: EmissionMetricsOrderByWithRelationInput | EmissionMetricsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for EmissionMetrics.
     */
    cursor?: EmissionMetricsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` EmissionMetrics from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` EmissionMetrics.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of EmissionMetrics.
     */
    distinct?: EmissionMetricsScalarFieldEnum | EmissionMetricsScalarFieldEnum[]
  }

  /**
   * EmissionMetrics findMany
   */
  export type EmissionMetricsFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EmissionMetrics
     */
    select?: EmissionMetricsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the EmissionMetrics
     */
    omit?: EmissionMetricsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EmissionMetricsInclude<ExtArgs> | null
    /**
     * Filter, which EmissionMetrics to fetch.
     */
    where?: EmissionMetricsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of EmissionMetrics to fetch.
     */
    orderBy?: EmissionMetricsOrderByWithRelationInput | EmissionMetricsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing EmissionMetrics.
     */
    cursor?: EmissionMetricsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` EmissionMetrics from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` EmissionMetrics.
     */
    skip?: number
    distinct?: EmissionMetricsScalarFieldEnum | EmissionMetricsScalarFieldEnum[]
  }

  /**
   * EmissionMetrics create
   */
  export type EmissionMetricsCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EmissionMetrics
     */
    select?: EmissionMetricsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the EmissionMetrics
     */
    omit?: EmissionMetricsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EmissionMetricsInclude<ExtArgs> | null
    /**
     * The data needed to create a EmissionMetrics.
     */
    data: XOR<EmissionMetricsCreateInput, EmissionMetricsUncheckedCreateInput>
  }

  /**
   * EmissionMetrics createMany
   */
  export type EmissionMetricsCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many EmissionMetrics.
     */
    data: EmissionMetricsCreateManyInput | EmissionMetricsCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * EmissionMetrics createManyAndReturn
   */
  export type EmissionMetricsCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EmissionMetrics
     */
    select?: EmissionMetricsSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the EmissionMetrics
     */
    omit?: EmissionMetricsOmit<ExtArgs> | null
    /**
     * The data used to create many EmissionMetrics.
     */
    data: EmissionMetricsCreateManyInput | EmissionMetricsCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EmissionMetricsIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * EmissionMetrics update
   */
  export type EmissionMetricsUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EmissionMetrics
     */
    select?: EmissionMetricsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the EmissionMetrics
     */
    omit?: EmissionMetricsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EmissionMetricsInclude<ExtArgs> | null
    /**
     * The data needed to update a EmissionMetrics.
     */
    data: XOR<EmissionMetricsUpdateInput, EmissionMetricsUncheckedUpdateInput>
    /**
     * Choose, which EmissionMetrics to update.
     */
    where: EmissionMetricsWhereUniqueInput
  }

  /**
   * EmissionMetrics updateMany
   */
  export type EmissionMetricsUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update EmissionMetrics.
     */
    data: XOR<EmissionMetricsUpdateManyMutationInput, EmissionMetricsUncheckedUpdateManyInput>
    /**
     * Filter which EmissionMetrics to update
     */
    where?: EmissionMetricsWhereInput
    /**
     * Limit how many EmissionMetrics to update.
     */
    limit?: number
  }

  /**
   * EmissionMetrics updateManyAndReturn
   */
  export type EmissionMetricsUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EmissionMetrics
     */
    select?: EmissionMetricsSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the EmissionMetrics
     */
    omit?: EmissionMetricsOmit<ExtArgs> | null
    /**
     * The data used to update EmissionMetrics.
     */
    data: XOR<EmissionMetricsUpdateManyMutationInput, EmissionMetricsUncheckedUpdateManyInput>
    /**
     * Filter which EmissionMetrics to update
     */
    where?: EmissionMetricsWhereInput
    /**
     * Limit how many EmissionMetrics to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EmissionMetricsIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * EmissionMetrics upsert
   */
  export type EmissionMetricsUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EmissionMetrics
     */
    select?: EmissionMetricsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the EmissionMetrics
     */
    omit?: EmissionMetricsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EmissionMetricsInclude<ExtArgs> | null
    /**
     * The filter to search for the EmissionMetrics to update in case it exists.
     */
    where: EmissionMetricsWhereUniqueInput
    /**
     * In case the EmissionMetrics found by the `where` argument doesn't exist, create a new EmissionMetrics with this data.
     */
    create: XOR<EmissionMetricsCreateInput, EmissionMetricsUncheckedCreateInput>
    /**
     * In case the EmissionMetrics was found with the provided `where` argument, update it with this data.
     */
    update: XOR<EmissionMetricsUpdateInput, EmissionMetricsUncheckedUpdateInput>
  }

  /**
   * EmissionMetrics delete
   */
  export type EmissionMetricsDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EmissionMetrics
     */
    select?: EmissionMetricsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the EmissionMetrics
     */
    omit?: EmissionMetricsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EmissionMetricsInclude<ExtArgs> | null
    /**
     * Filter which EmissionMetrics to delete.
     */
    where: EmissionMetricsWhereUniqueInput
  }

  /**
   * EmissionMetrics deleteMany
   */
  export type EmissionMetricsDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which EmissionMetrics to delete
     */
    where?: EmissionMetricsWhereInput
    /**
     * Limit how many EmissionMetrics to delete.
     */
    limit?: number
  }

  /**
   * EmissionMetrics without action
   */
  export type EmissionMetricsDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EmissionMetrics
     */
    select?: EmissionMetricsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the EmissionMetrics
     */
    omit?: EmissionMetricsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EmissionMetricsInclude<ExtArgs> | null
  }


  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    ReadUncommitted: 'ReadUncommitted',
    ReadCommitted: 'ReadCommitted',
    RepeatableRead: 'RepeatableRead',
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const BrandScalarFieldEnum: {
    id: 'id',
    name: 'name'
  };

  export type BrandScalarFieldEnum = (typeof BrandScalarFieldEnum)[keyof typeof BrandScalarFieldEnum]


  export const DeviceModelScalarFieldEnum: {
    id: 'id',
    brandId: 'brandId',
    name: 'name',
    deviceType: 'deviceType',
    releaseDate: 'releaseDate'
  };

  export type DeviceModelScalarFieldEnum = (typeof DeviceModelScalarFieldEnum)[keyof typeof DeviceModelScalarFieldEnum]


  export const DeviceVariantScalarFieldEnum: {
    id: 'id',
    deviceModelId: 'deviceModelId',
    storageCapacity: 'storageCapacity',
    slug: 'slug'
  };

  export type DeviceVariantScalarFieldEnum = (typeof DeviceVariantScalarFieldEnum)[keyof typeof DeviceVariantScalarFieldEnum]


  export const EmissionMetricsScalarFieldEnum: {
    id: 'id',
    deviceVariantId: 'deviceVariantId',
    environmentRating: 'environmentRating',
    totalCO2: 'totalCO2',
    productionPct: 'productionPct',
    transportationPct: 'transportationPct',
    usePct: 'usePct',
    endOfLifePct: 'endOfLifePct',
    recycledMaterialsPct: 'recycledMaterialsPct',
    cleanEnergyPct: 'cleanEnergyPct',
    recycledRareEarthPct: 'recycledRareEarthPct',
    recycledPackagingPct: 'recycledPackagingPct',
    labourProtection: 'labourProtection',
    longevityMeasures: 'longevityMeasures',
    harmfulMaterials: 'harmfulMaterials',
    recyclingProgram: 'recyclingProgram',
    source: 'source',
    sourceUrl: 'sourceUrl',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type EmissionMetricsScalarFieldEnum = (typeof EmissionMetricsScalarFieldEnum)[keyof typeof EmissionMetricsScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const QueryMode: {
    default: 'default',
    insensitive: 'insensitive'
  };

  export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode]


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


  /**
   * Field references
   */


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'String[]'
   */
  export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String[]'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>
    


  /**
   * Reference to a field of type 'EnvironmentRating'
   */
  export type EnumEnvironmentRatingFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'EnvironmentRating'>
    


  /**
   * Reference to a field of type 'EnvironmentRating[]'
   */
  export type ListEnumEnvironmentRatingFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'EnvironmentRating[]'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    


  /**
   * Reference to a field of type 'Float[]'
   */
  export type ListFloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float[]'>
    


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    
  /**
   * Deep Input Types
   */


  export type BrandWhereInput = {
    AND?: BrandWhereInput | BrandWhereInput[]
    OR?: BrandWhereInput[]
    NOT?: BrandWhereInput | BrandWhereInput[]
    id?: StringFilter<"Brand"> | string
    name?: StringFilter<"Brand"> | string
    devices?: DeviceModelListRelationFilter
  }

  export type BrandOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    devices?: DeviceModelOrderByRelationAggregateInput
  }

  export type BrandWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    name?: string
    AND?: BrandWhereInput | BrandWhereInput[]
    OR?: BrandWhereInput[]
    NOT?: BrandWhereInput | BrandWhereInput[]
    devices?: DeviceModelListRelationFilter
  }, "id" | "name">

  export type BrandOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    _count?: BrandCountOrderByAggregateInput
    _max?: BrandMaxOrderByAggregateInput
    _min?: BrandMinOrderByAggregateInput
  }

  export type BrandScalarWhereWithAggregatesInput = {
    AND?: BrandScalarWhereWithAggregatesInput | BrandScalarWhereWithAggregatesInput[]
    OR?: BrandScalarWhereWithAggregatesInput[]
    NOT?: BrandScalarWhereWithAggregatesInput | BrandScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Brand"> | string
    name?: StringWithAggregatesFilter<"Brand"> | string
  }

  export type DeviceModelWhereInput = {
    AND?: DeviceModelWhereInput | DeviceModelWhereInput[]
    OR?: DeviceModelWhereInput[]
    NOT?: DeviceModelWhereInput | DeviceModelWhereInput[]
    id?: StringFilter<"DeviceModel"> | string
    brandId?: StringFilter<"DeviceModel"> | string
    name?: StringFilter<"DeviceModel"> | string
    deviceType?: StringFilter<"DeviceModel"> | string
    releaseDate?: DateTimeNullableFilter<"DeviceModel"> | Date | string | null
    brand?: XOR<BrandScalarRelationFilter, BrandWhereInput>
    variants?: DeviceVariantListRelationFilter
  }

  export type DeviceModelOrderByWithRelationInput = {
    id?: SortOrder
    brandId?: SortOrder
    name?: SortOrder
    deviceType?: SortOrder
    releaseDate?: SortOrderInput | SortOrder
    brand?: BrandOrderByWithRelationInput
    variants?: DeviceVariantOrderByRelationAggregateInput
  }

  export type DeviceModelWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    brandId_name?: DeviceModelBrandIdNameCompoundUniqueInput
    AND?: DeviceModelWhereInput | DeviceModelWhereInput[]
    OR?: DeviceModelWhereInput[]
    NOT?: DeviceModelWhereInput | DeviceModelWhereInput[]
    brandId?: StringFilter<"DeviceModel"> | string
    name?: StringFilter<"DeviceModel"> | string
    deviceType?: StringFilter<"DeviceModel"> | string
    releaseDate?: DateTimeNullableFilter<"DeviceModel"> | Date | string | null
    brand?: XOR<BrandScalarRelationFilter, BrandWhereInput>
    variants?: DeviceVariantListRelationFilter
  }, "id" | "brandId_name">

  export type DeviceModelOrderByWithAggregationInput = {
    id?: SortOrder
    brandId?: SortOrder
    name?: SortOrder
    deviceType?: SortOrder
    releaseDate?: SortOrderInput | SortOrder
    _count?: DeviceModelCountOrderByAggregateInput
    _max?: DeviceModelMaxOrderByAggregateInput
    _min?: DeviceModelMinOrderByAggregateInput
  }

  export type DeviceModelScalarWhereWithAggregatesInput = {
    AND?: DeviceModelScalarWhereWithAggregatesInput | DeviceModelScalarWhereWithAggregatesInput[]
    OR?: DeviceModelScalarWhereWithAggregatesInput[]
    NOT?: DeviceModelScalarWhereWithAggregatesInput | DeviceModelScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"DeviceModel"> | string
    brandId?: StringWithAggregatesFilter<"DeviceModel"> | string
    name?: StringWithAggregatesFilter<"DeviceModel"> | string
    deviceType?: StringWithAggregatesFilter<"DeviceModel"> | string
    releaseDate?: DateTimeNullableWithAggregatesFilter<"DeviceModel"> | Date | string | null
  }

  export type DeviceVariantWhereInput = {
    AND?: DeviceVariantWhereInput | DeviceVariantWhereInput[]
    OR?: DeviceVariantWhereInput[]
    NOT?: DeviceVariantWhereInput | DeviceVariantWhereInput[]
    id?: StringFilter<"DeviceVariant"> | string
    deviceModelId?: StringFilter<"DeviceVariant"> | string
    storageCapacity?: StringFilter<"DeviceVariant"> | string
    slug?: StringFilter<"DeviceVariant"> | string
    deviceModel?: XOR<DeviceModelScalarRelationFilter, DeviceModelWhereInput>
    emissionMetrics?: XOR<EmissionMetricsNullableScalarRelationFilter, EmissionMetricsWhereInput> | null
  }

  export type DeviceVariantOrderByWithRelationInput = {
    id?: SortOrder
    deviceModelId?: SortOrder
    storageCapacity?: SortOrder
    slug?: SortOrder
    deviceModel?: DeviceModelOrderByWithRelationInput
    emissionMetrics?: EmissionMetricsOrderByWithRelationInput
  }

  export type DeviceVariantWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    slug?: string
    deviceModelId_storageCapacity?: DeviceVariantDeviceModelIdStorageCapacityCompoundUniqueInput
    AND?: DeviceVariantWhereInput | DeviceVariantWhereInput[]
    OR?: DeviceVariantWhereInput[]
    NOT?: DeviceVariantWhereInput | DeviceVariantWhereInput[]
    deviceModelId?: StringFilter<"DeviceVariant"> | string
    storageCapacity?: StringFilter<"DeviceVariant"> | string
    deviceModel?: XOR<DeviceModelScalarRelationFilter, DeviceModelWhereInput>
    emissionMetrics?: XOR<EmissionMetricsNullableScalarRelationFilter, EmissionMetricsWhereInput> | null
  }, "id" | "slug" | "deviceModelId_storageCapacity">

  export type DeviceVariantOrderByWithAggregationInput = {
    id?: SortOrder
    deviceModelId?: SortOrder
    storageCapacity?: SortOrder
    slug?: SortOrder
    _count?: DeviceVariantCountOrderByAggregateInput
    _max?: DeviceVariantMaxOrderByAggregateInput
    _min?: DeviceVariantMinOrderByAggregateInput
  }

  export type DeviceVariantScalarWhereWithAggregatesInput = {
    AND?: DeviceVariantScalarWhereWithAggregatesInput | DeviceVariantScalarWhereWithAggregatesInput[]
    OR?: DeviceVariantScalarWhereWithAggregatesInput[]
    NOT?: DeviceVariantScalarWhereWithAggregatesInput | DeviceVariantScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"DeviceVariant"> | string
    deviceModelId?: StringWithAggregatesFilter<"DeviceVariant"> | string
    storageCapacity?: StringWithAggregatesFilter<"DeviceVariant"> | string
    slug?: StringWithAggregatesFilter<"DeviceVariant"> | string
  }

  export type EmissionMetricsWhereInput = {
    AND?: EmissionMetricsWhereInput | EmissionMetricsWhereInput[]
    OR?: EmissionMetricsWhereInput[]
    NOT?: EmissionMetricsWhereInput | EmissionMetricsWhereInput[]
    id?: StringFilter<"EmissionMetrics"> | string
    deviceVariantId?: StringFilter<"EmissionMetrics"> | string
    environmentRating?: EnumEnvironmentRatingFilter<"EmissionMetrics"> | $Enums.EnvironmentRating
    totalCO2?: FloatFilter<"EmissionMetrics"> | number
    productionPct?: FloatNullableFilter<"EmissionMetrics"> | number | null
    transportationPct?: FloatNullableFilter<"EmissionMetrics"> | number | null
    usePct?: FloatNullableFilter<"EmissionMetrics"> | number | null
    endOfLifePct?: FloatNullableFilter<"EmissionMetrics"> | number | null
    recycledMaterialsPct?: FloatNullableFilter<"EmissionMetrics"> | number | null
    cleanEnergyPct?: FloatNullableFilter<"EmissionMetrics"> | number | null
    recycledRareEarthPct?: FloatNullableFilter<"EmissionMetrics"> | number | null
    recycledPackagingPct?: FloatNullableFilter<"EmissionMetrics"> | number | null
    labourProtection?: StringNullableFilter<"EmissionMetrics"> | string | null
    longevityMeasures?: StringNullableFilter<"EmissionMetrics"> | string | null
    harmfulMaterials?: StringNullableFilter<"EmissionMetrics"> | string | null
    recyclingProgram?: StringNullableFilter<"EmissionMetrics"> | string | null
    source?: StringNullableFilter<"EmissionMetrics"> | string | null
    sourceUrl?: StringNullableFilter<"EmissionMetrics"> | string | null
    createdAt?: DateTimeFilter<"EmissionMetrics"> | Date | string
    updatedAt?: DateTimeFilter<"EmissionMetrics"> | Date | string
    deviceVariant?: XOR<DeviceVariantScalarRelationFilter, DeviceVariantWhereInput>
  }

  export type EmissionMetricsOrderByWithRelationInput = {
    id?: SortOrder
    deviceVariantId?: SortOrder
    environmentRating?: SortOrder
    totalCO2?: SortOrder
    productionPct?: SortOrderInput | SortOrder
    transportationPct?: SortOrderInput | SortOrder
    usePct?: SortOrderInput | SortOrder
    endOfLifePct?: SortOrderInput | SortOrder
    recycledMaterialsPct?: SortOrderInput | SortOrder
    cleanEnergyPct?: SortOrderInput | SortOrder
    recycledRareEarthPct?: SortOrderInput | SortOrder
    recycledPackagingPct?: SortOrderInput | SortOrder
    labourProtection?: SortOrderInput | SortOrder
    longevityMeasures?: SortOrderInput | SortOrder
    harmfulMaterials?: SortOrderInput | SortOrder
    recyclingProgram?: SortOrderInput | SortOrder
    source?: SortOrderInput | SortOrder
    sourceUrl?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    deviceVariant?: DeviceVariantOrderByWithRelationInput
  }

  export type EmissionMetricsWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    deviceVariantId?: string
    AND?: EmissionMetricsWhereInput | EmissionMetricsWhereInput[]
    OR?: EmissionMetricsWhereInput[]
    NOT?: EmissionMetricsWhereInput | EmissionMetricsWhereInput[]
    environmentRating?: EnumEnvironmentRatingFilter<"EmissionMetrics"> | $Enums.EnvironmentRating
    totalCO2?: FloatFilter<"EmissionMetrics"> | number
    productionPct?: FloatNullableFilter<"EmissionMetrics"> | number | null
    transportationPct?: FloatNullableFilter<"EmissionMetrics"> | number | null
    usePct?: FloatNullableFilter<"EmissionMetrics"> | number | null
    endOfLifePct?: FloatNullableFilter<"EmissionMetrics"> | number | null
    recycledMaterialsPct?: FloatNullableFilter<"EmissionMetrics"> | number | null
    cleanEnergyPct?: FloatNullableFilter<"EmissionMetrics"> | number | null
    recycledRareEarthPct?: FloatNullableFilter<"EmissionMetrics"> | number | null
    recycledPackagingPct?: FloatNullableFilter<"EmissionMetrics"> | number | null
    labourProtection?: StringNullableFilter<"EmissionMetrics"> | string | null
    longevityMeasures?: StringNullableFilter<"EmissionMetrics"> | string | null
    harmfulMaterials?: StringNullableFilter<"EmissionMetrics"> | string | null
    recyclingProgram?: StringNullableFilter<"EmissionMetrics"> | string | null
    source?: StringNullableFilter<"EmissionMetrics"> | string | null
    sourceUrl?: StringNullableFilter<"EmissionMetrics"> | string | null
    createdAt?: DateTimeFilter<"EmissionMetrics"> | Date | string
    updatedAt?: DateTimeFilter<"EmissionMetrics"> | Date | string
    deviceVariant?: XOR<DeviceVariantScalarRelationFilter, DeviceVariantWhereInput>
  }, "id" | "deviceVariantId">

  export type EmissionMetricsOrderByWithAggregationInput = {
    id?: SortOrder
    deviceVariantId?: SortOrder
    environmentRating?: SortOrder
    totalCO2?: SortOrder
    productionPct?: SortOrderInput | SortOrder
    transportationPct?: SortOrderInput | SortOrder
    usePct?: SortOrderInput | SortOrder
    endOfLifePct?: SortOrderInput | SortOrder
    recycledMaterialsPct?: SortOrderInput | SortOrder
    cleanEnergyPct?: SortOrderInput | SortOrder
    recycledRareEarthPct?: SortOrderInput | SortOrder
    recycledPackagingPct?: SortOrderInput | SortOrder
    labourProtection?: SortOrderInput | SortOrder
    longevityMeasures?: SortOrderInput | SortOrder
    harmfulMaterials?: SortOrderInput | SortOrder
    recyclingProgram?: SortOrderInput | SortOrder
    source?: SortOrderInput | SortOrder
    sourceUrl?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: EmissionMetricsCountOrderByAggregateInput
    _avg?: EmissionMetricsAvgOrderByAggregateInput
    _max?: EmissionMetricsMaxOrderByAggregateInput
    _min?: EmissionMetricsMinOrderByAggregateInput
    _sum?: EmissionMetricsSumOrderByAggregateInput
  }

  export type EmissionMetricsScalarWhereWithAggregatesInput = {
    AND?: EmissionMetricsScalarWhereWithAggregatesInput | EmissionMetricsScalarWhereWithAggregatesInput[]
    OR?: EmissionMetricsScalarWhereWithAggregatesInput[]
    NOT?: EmissionMetricsScalarWhereWithAggregatesInput | EmissionMetricsScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"EmissionMetrics"> | string
    deviceVariantId?: StringWithAggregatesFilter<"EmissionMetrics"> | string
    environmentRating?: EnumEnvironmentRatingWithAggregatesFilter<"EmissionMetrics"> | $Enums.EnvironmentRating
    totalCO2?: FloatWithAggregatesFilter<"EmissionMetrics"> | number
    productionPct?: FloatNullableWithAggregatesFilter<"EmissionMetrics"> | number | null
    transportationPct?: FloatNullableWithAggregatesFilter<"EmissionMetrics"> | number | null
    usePct?: FloatNullableWithAggregatesFilter<"EmissionMetrics"> | number | null
    endOfLifePct?: FloatNullableWithAggregatesFilter<"EmissionMetrics"> | number | null
    recycledMaterialsPct?: FloatNullableWithAggregatesFilter<"EmissionMetrics"> | number | null
    cleanEnergyPct?: FloatNullableWithAggregatesFilter<"EmissionMetrics"> | number | null
    recycledRareEarthPct?: FloatNullableWithAggregatesFilter<"EmissionMetrics"> | number | null
    recycledPackagingPct?: FloatNullableWithAggregatesFilter<"EmissionMetrics"> | number | null
    labourProtection?: StringNullableWithAggregatesFilter<"EmissionMetrics"> | string | null
    longevityMeasures?: StringNullableWithAggregatesFilter<"EmissionMetrics"> | string | null
    harmfulMaterials?: StringNullableWithAggregatesFilter<"EmissionMetrics"> | string | null
    recyclingProgram?: StringNullableWithAggregatesFilter<"EmissionMetrics"> | string | null
    source?: StringNullableWithAggregatesFilter<"EmissionMetrics"> | string | null
    sourceUrl?: StringNullableWithAggregatesFilter<"EmissionMetrics"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"EmissionMetrics"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"EmissionMetrics"> | Date | string
  }

  export type BrandCreateInput = {
    id?: string
    name: string
    devices?: DeviceModelCreateNestedManyWithoutBrandInput
  }

  export type BrandUncheckedCreateInput = {
    id?: string
    name: string
    devices?: DeviceModelUncheckedCreateNestedManyWithoutBrandInput
  }

  export type BrandUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    devices?: DeviceModelUpdateManyWithoutBrandNestedInput
  }

  export type BrandUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    devices?: DeviceModelUncheckedUpdateManyWithoutBrandNestedInput
  }

  export type BrandCreateManyInput = {
    id?: string
    name: string
  }

  export type BrandUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
  }

  export type BrandUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
  }

  export type DeviceModelCreateInput = {
    id?: string
    name: string
    deviceType: string
    releaseDate?: Date | string | null
    brand: BrandCreateNestedOneWithoutDevicesInput
    variants?: DeviceVariantCreateNestedManyWithoutDeviceModelInput
  }

  export type DeviceModelUncheckedCreateInput = {
    id?: string
    brandId: string
    name: string
    deviceType: string
    releaseDate?: Date | string | null
    variants?: DeviceVariantUncheckedCreateNestedManyWithoutDeviceModelInput
  }

  export type DeviceModelUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    deviceType?: StringFieldUpdateOperationsInput | string
    releaseDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    brand?: BrandUpdateOneRequiredWithoutDevicesNestedInput
    variants?: DeviceVariantUpdateManyWithoutDeviceModelNestedInput
  }

  export type DeviceModelUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    brandId?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    deviceType?: StringFieldUpdateOperationsInput | string
    releaseDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    variants?: DeviceVariantUncheckedUpdateManyWithoutDeviceModelNestedInput
  }

  export type DeviceModelCreateManyInput = {
    id?: string
    brandId: string
    name: string
    deviceType: string
    releaseDate?: Date | string | null
  }

  export type DeviceModelUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    deviceType?: StringFieldUpdateOperationsInput | string
    releaseDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type DeviceModelUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    brandId?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    deviceType?: StringFieldUpdateOperationsInput | string
    releaseDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type DeviceVariantCreateInput = {
    id?: string
    storageCapacity: string
    slug: string
    deviceModel: DeviceModelCreateNestedOneWithoutVariantsInput
    emissionMetrics?: EmissionMetricsCreateNestedOneWithoutDeviceVariantInput
  }

  export type DeviceVariantUncheckedCreateInput = {
    id?: string
    deviceModelId: string
    storageCapacity: string
    slug: string
    emissionMetrics?: EmissionMetricsUncheckedCreateNestedOneWithoutDeviceVariantInput
  }

  export type DeviceVariantUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    storageCapacity?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    deviceModel?: DeviceModelUpdateOneRequiredWithoutVariantsNestedInput
    emissionMetrics?: EmissionMetricsUpdateOneWithoutDeviceVariantNestedInput
  }

  export type DeviceVariantUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    deviceModelId?: StringFieldUpdateOperationsInput | string
    storageCapacity?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    emissionMetrics?: EmissionMetricsUncheckedUpdateOneWithoutDeviceVariantNestedInput
  }

  export type DeviceVariantCreateManyInput = {
    id?: string
    deviceModelId: string
    storageCapacity: string
    slug: string
  }

  export type DeviceVariantUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    storageCapacity?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
  }

  export type DeviceVariantUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    deviceModelId?: StringFieldUpdateOperationsInput | string
    storageCapacity?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
  }

  export type EmissionMetricsCreateInput = {
    id?: string
    environmentRating?: $Enums.EnvironmentRating
    totalCO2: number
    productionPct?: number | null
    transportationPct?: number | null
    usePct?: number | null
    endOfLifePct?: number | null
    recycledMaterialsPct?: number | null
    cleanEnergyPct?: number | null
    recycledRareEarthPct?: number | null
    recycledPackagingPct?: number | null
    labourProtection?: string | null
    longevityMeasures?: string | null
    harmfulMaterials?: string | null
    recyclingProgram?: string | null
    source?: string | null
    sourceUrl?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    deviceVariant: DeviceVariantCreateNestedOneWithoutEmissionMetricsInput
  }

  export type EmissionMetricsUncheckedCreateInput = {
    id?: string
    deviceVariantId: string
    environmentRating?: $Enums.EnvironmentRating
    totalCO2: number
    productionPct?: number | null
    transportationPct?: number | null
    usePct?: number | null
    endOfLifePct?: number | null
    recycledMaterialsPct?: number | null
    cleanEnergyPct?: number | null
    recycledRareEarthPct?: number | null
    recycledPackagingPct?: number | null
    labourProtection?: string | null
    longevityMeasures?: string | null
    harmfulMaterials?: string | null
    recyclingProgram?: string | null
    source?: string | null
    sourceUrl?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type EmissionMetricsUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    environmentRating?: EnumEnvironmentRatingFieldUpdateOperationsInput | $Enums.EnvironmentRating
    totalCO2?: FloatFieldUpdateOperationsInput | number
    productionPct?: NullableFloatFieldUpdateOperationsInput | number | null
    transportationPct?: NullableFloatFieldUpdateOperationsInput | number | null
    usePct?: NullableFloatFieldUpdateOperationsInput | number | null
    endOfLifePct?: NullableFloatFieldUpdateOperationsInput | number | null
    recycledMaterialsPct?: NullableFloatFieldUpdateOperationsInput | number | null
    cleanEnergyPct?: NullableFloatFieldUpdateOperationsInput | number | null
    recycledRareEarthPct?: NullableFloatFieldUpdateOperationsInput | number | null
    recycledPackagingPct?: NullableFloatFieldUpdateOperationsInput | number | null
    labourProtection?: NullableStringFieldUpdateOperationsInput | string | null
    longevityMeasures?: NullableStringFieldUpdateOperationsInput | string | null
    harmfulMaterials?: NullableStringFieldUpdateOperationsInput | string | null
    recyclingProgram?: NullableStringFieldUpdateOperationsInput | string | null
    source?: NullableStringFieldUpdateOperationsInput | string | null
    sourceUrl?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deviceVariant?: DeviceVariantUpdateOneRequiredWithoutEmissionMetricsNestedInput
  }

  export type EmissionMetricsUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    deviceVariantId?: StringFieldUpdateOperationsInput | string
    environmentRating?: EnumEnvironmentRatingFieldUpdateOperationsInput | $Enums.EnvironmentRating
    totalCO2?: FloatFieldUpdateOperationsInput | number
    productionPct?: NullableFloatFieldUpdateOperationsInput | number | null
    transportationPct?: NullableFloatFieldUpdateOperationsInput | number | null
    usePct?: NullableFloatFieldUpdateOperationsInput | number | null
    endOfLifePct?: NullableFloatFieldUpdateOperationsInput | number | null
    recycledMaterialsPct?: NullableFloatFieldUpdateOperationsInput | number | null
    cleanEnergyPct?: NullableFloatFieldUpdateOperationsInput | number | null
    recycledRareEarthPct?: NullableFloatFieldUpdateOperationsInput | number | null
    recycledPackagingPct?: NullableFloatFieldUpdateOperationsInput | number | null
    labourProtection?: NullableStringFieldUpdateOperationsInput | string | null
    longevityMeasures?: NullableStringFieldUpdateOperationsInput | string | null
    harmfulMaterials?: NullableStringFieldUpdateOperationsInput | string | null
    recyclingProgram?: NullableStringFieldUpdateOperationsInput | string | null
    source?: NullableStringFieldUpdateOperationsInput | string | null
    sourceUrl?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type EmissionMetricsCreateManyInput = {
    id?: string
    deviceVariantId: string
    environmentRating?: $Enums.EnvironmentRating
    totalCO2: number
    productionPct?: number | null
    transportationPct?: number | null
    usePct?: number | null
    endOfLifePct?: number | null
    recycledMaterialsPct?: number | null
    cleanEnergyPct?: number | null
    recycledRareEarthPct?: number | null
    recycledPackagingPct?: number | null
    labourProtection?: string | null
    longevityMeasures?: string | null
    harmfulMaterials?: string | null
    recyclingProgram?: string | null
    source?: string | null
    sourceUrl?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type EmissionMetricsUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    environmentRating?: EnumEnvironmentRatingFieldUpdateOperationsInput | $Enums.EnvironmentRating
    totalCO2?: FloatFieldUpdateOperationsInput | number
    productionPct?: NullableFloatFieldUpdateOperationsInput | number | null
    transportationPct?: NullableFloatFieldUpdateOperationsInput | number | null
    usePct?: NullableFloatFieldUpdateOperationsInput | number | null
    endOfLifePct?: NullableFloatFieldUpdateOperationsInput | number | null
    recycledMaterialsPct?: NullableFloatFieldUpdateOperationsInput | number | null
    cleanEnergyPct?: NullableFloatFieldUpdateOperationsInput | number | null
    recycledRareEarthPct?: NullableFloatFieldUpdateOperationsInput | number | null
    recycledPackagingPct?: NullableFloatFieldUpdateOperationsInput | number | null
    labourProtection?: NullableStringFieldUpdateOperationsInput | string | null
    longevityMeasures?: NullableStringFieldUpdateOperationsInput | string | null
    harmfulMaterials?: NullableStringFieldUpdateOperationsInput | string | null
    recyclingProgram?: NullableStringFieldUpdateOperationsInput | string | null
    source?: NullableStringFieldUpdateOperationsInput | string | null
    sourceUrl?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type EmissionMetricsUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    deviceVariantId?: StringFieldUpdateOperationsInput | string
    environmentRating?: EnumEnvironmentRatingFieldUpdateOperationsInput | $Enums.EnvironmentRating
    totalCO2?: FloatFieldUpdateOperationsInput | number
    productionPct?: NullableFloatFieldUpdateOperationsInput | number | null
    transportationPct?: NullableFloatFieldUpdateOperationsInput | number | null
    usePct?: NullableFloatFieldUpdateOperationsInput | number | null
    endOfLifePct?: NullableFloatFieldUpdateOperationsInput | number | null
    recycledMaterialsPct?: NullableFloatFieldUpdateOperationsInput | number | null
    cleanEnergyPct?: NullableFloatFieldUpdateOperationsInput | number | null
    recycledRareEarthPct?: NullableFloatFieldUpdateOperationsInput | number | null
    recycledPackagingPct?: NullableFloatFieldUpdateOperationsInput | number | null
    labourProtection?: NullableStringFieldUpdateOperationsInput | string | null
    longevityMeasures?: NullableStringFieldUpdateOperationsInput | string | null
    harmfulMaterials?: NullableStringFieldUpdateOperationsInput | string | null
    recyclingProgram?: NullableStringFieldUpdateOperationsInput | string | null
    source?: NullableStringFieldUpdateOperationsInput | string | null
    sourceUrl?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type DeviceModelListRelationFilter = {
    every?: DeviceModelWhereInput
    some?: DeviceModelWhereInput
    none?: DeviceModelWhereInput
  }

  export type DeviceModelOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type BrandCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
  }

  export type BrandMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
  }

  export type BrandMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type DateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type BrandScalarRelationFilter = {
    is?: BrandWhereInput
    isNot?: BrandWhereInput
  }

  export type DeviceVariantListRelationFilter = {
    every?: DeviceVariantWhereInput
    some?: DeviceVariantWhereInput
    none?: DeviceVariantWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type DeviceVariantOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type DeviceModelBrandIdNameCompoundUniqueInput = {
    brandId: string
    name: string
  }

  export type DeviceModelCountOrderByAggregateInput = {
    id?: SortOrder
    brandId?: SortOrder
    name?: SortOrder
    deviceType?: SortOrder
    releaseDate?: SortOrder
  }

  export type DeviceModelMaxOrderByAggregateInput = {
    id?: SortOrder
    brandId?: SortOrder
    name?: SortOrder
    deviceType?: SortOrder
    releaseDate?: SortOrder
  }

  export type DeviceModelMinOrderByAggregateInput = {
    id?: SortOrder
    brandId?: SortOrder
    name?: SortOrder
    deviceType?: SortOrder
    releaseDate?: SortOrder
  }

  export type DateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type DeviceModelScalarRelationFilter = {
    is?: DeviceModelWhereInput
    isNot?: DeviceModelWhereInput
  }

  export type EmissionMetricsNullableScalarRelationFilter = {
    is?: EmissionMetricsWhereInput | null
    isNot?: EmissionMetricsWhereInput | null
  }

  export type DeviceVariantDeviceModelIdStorageCapacityCompoundUniqueInput = {
    deviceModelId: string
    storageCapacity: string
  }

  export type DeviceVariantCountOrderByAggregateInput = {
    id?: SortOrder
    deviceModelId?: SortOrder
    storageCapacity?: SortOrder
    slug?: SortOrder
  }

  export type DeviceVariantMaxOrderByAggregateInput = {
    id?: SortOrder
    deviceModelId?: SortOrder
    storageCapacity?: SortOrder
    slug?: SortOrder
  }

  export type DeviceVariantMinOrderByAggregateInput = {
    id?: SortOrder
    deviceModelId?: SortOrder
    storageCapacity?: SortOrder
    slug?: SortOrder
  }

  export type EnumEnvironmentRatingFilter<$PrismaModel = never> = {
    equals?: $Enums.EnvironmentRating | EnumEnvironmentRatingFieldRefInput<$PrismaModel>
    in?: $Enums.EnvironmentRating[] | ListEnumEnvironmentRatingFieldRefInput<$PrismaModel>
    notIn?: $Enums.EnvironmentRating[] | ListEnumEnvironmentRatingFieldRefInput<$PrismaModel>
    not?: NestedEnumEnvironmentRatingFilter<$PrismaModel> | $Enums.EnvironmentRating
  }

  export type FloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type FloatNullableFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableFilter<$PrismaModel> | number | null
  }

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type DeviceVariantScalarRelationFilter = {
    is?: DeviceVariantWhereInput
    isNot?: DeviceVariantWhereInput
  }

  export type EmissionMetricsCountOrderByAggregateInput = {
    id?: SortOrder
    deviceVariantId?: SortOrder
    environmentRating?: SortOrder
    totalCO2?: SortOrder
    productionPct?: SortOrder
    transportationPct?: SortOrder
    usePct?: SortOrder
    endOfLifePct?: SortOrder
    recycledMaterialsPct?: SortOrder
    cleanEnergyPct?: SortOrder
    recycledRareEarthPct?: SortOrder
    recycledPackagingPct?: SortOrder
    labourProtection?: SortOrder
    longevityMeasures?: SortOrder
    harmfulMaterials?: SortOrder
    recyclingProgram?: SortOrder
    source?: SortOrder
    sourceUrl?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type EmissionMetricsAvgOrderByAggregateInput = {
    totalCO2?: SortOrder
    productionPct?: SortOrder
    transportationPct?: SortOrder
    usePct?: SortOrder
    endOfLifePct?: SortOrder
    recycledMaterialsPct?: SortOrder
    cleanEnergyPct?: SortOrder
    recycledRareEarthPct?: SortOrder
    recycledPackagingPct?: SortOrder
  }

  export type EmissionMetricsMaxOrderByAggregateInput = {
    id?: SortOrder
    deviceVariantId?: SortOrder
    environmentRating?: SortOrder
    totalCO2?: SortOrder
    productionPct?: SortOrder
    transportationPct?: SortOrder
    usePct?: SortOrder
    endOfLifePct?: SortOrder
    recycledMaterialsPct?: SortOrder
    cleanEnergyPct?: SortOrder
    recycledRareEarthPct?: SortOrder
    recycledPackagingPct?: SortOrder
    labourProtection?: SortOrder
    longevityMeasures?: SortOrder
    harmfulMaterials?: SortOrder
    recyclingProgram?: SortOrder
    source?: SortOrder
    sourceUrl?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type EmissionMetricsMinOrderByAggregateInput = {
    id?: SortOrder
    deviceVariantId?: SortOrder
    environmentRating?: SortOrder
    totalCO2?: SortOrder
    productionPct?: SortOrder
    transportationPct?: SortOrder
    usePct?: SortOrder
    endOfLifePct?: SortOrder
    recycledMaterialsPct?: SortOrder
    cleanEnergyPct?: SortOrder
    recycledRareEarthPct?: SortOrder
    recycledPackagingPct?: SortOrder
    labourProtection?: SortOrder
    longevityMeasures?: SortOrder
    harmfulMaterials?: SortOrder
    recyclingProgram?: SortOrder
    source?: SortOrder
    sourceUrl?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type EmissionMetricsSumOrderByAggregateInput = {
    totalCO2?: SortOrder
    productionPct?: SortOrder
    transportationPct?: SortOrder
    usePct?: SortOrder
    endOfLifePct?: SortOrder
    recycledMaterialsPct?: SortOrder
    cleanEnergyPct?: SortOrder
    recycledRareEarthPct?: SortOrder
    recycledPackagingPct?: SortOrder
  }

  export type EnumEnvironmentRatingWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.EnvironmentRating | EnumEnvironmentRatingFieldRefInput<$PrismaModel>
    in?: $Enums.EnvironmentRating[] | ListEnumEnvironmentRatingFieldRefInput<$PrismaModel>
    notIn?: $Enums.EnvironmentRating[] | ListEnumEnvironmentRatingFieldRefInput<$PrismaModel>
    not?: NestedEnumEnvironmentRatingWithAggregatesFilter<$PrismaModel> | $Enums.EnvironmentRating
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumEnvironmentRatingFilter<$PrismaModel>
    _max?: NestedEnumEnvironmentRatingFilter<$PrismaModel>
  }

  export type FloatWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedFloatFilter<$PrismaModel>
    _min?: NestedFloatFilter<$PrismaModel>
    _max?: NestedFloatFilter<$PrismaModel>
  }

  export type FloatNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedFloatNullableFilter<$PrismaModel>
    _min?: NestedFloatNullableFilter<$PrismaModel>
    _max?: NestedFloatNullableFilter<$PrismaModel>
  }

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type DeviceModelCreateNestedManyWithoutBrandInput = {
    create?: XOR<DeviceModelCreateWithoutBrandInput, DeviceModelUncheckedCreateWithoutBrandInput> | DeviceModelCreateWithoutBrandInput[] | DeviceModelUncheckedCreateWithoutBrandInput[]
    connectOrCreate?: DeviceModelCreateOrConnectWithoutBrandInput | DeviceModelCreateOrConnectWithoutBrandInput[]
    createMany?: DeviceModelCreateManyBrandInputEnvelope
    connect?: DeviceModelWhereUniqueInput | DeviceModelWhereUniqueInput[]
  }

  export type DeviceModelUncheckedCreateNestedManyWithoutBrandInput = {
    create?: XOR<DeviceModelCreateWithoutBrandInput, DeviceModelUncheckedCreateWithoutBrandInput> | DeviceModelCreateWithoutBrandInput[] | DeviceModelUncheckedCreateWithoutBrandInput[]
    connectOrCreate?: DeviceModelCreateOrConnectWithoutBrandInput | DeviceModelCreateOrConnectWithoutBrandInput[]
    createMany?: DeviceModelCreateManyBrandInputEnvelope
    connect?: DeviceModelWhereUniqueInput | DeviceModelWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type DeviceModelUpdateManyWithoutBrandNestedInput = {
    create?: XOR<DeviceModelCreateWithoutBrandInput, DeviceModelUncheckedCreateWithoutBrandInput> | DeviceModelCreateWithoutBrandInput[] | DeviceModelUncheckedCreateWithoutBrandInput[]
    connectOrCreate?: DeviceModelCreateOrConnectWithoutBrandInput | DeviceModelCreateOrConnectWithoutBrandInput[]
    upsert?: DeviceModelUpsertWithWhereUniqueWithoutBrandInput | DeviceModelUpsertWithWhereUniqueWithoutBrandInput[]
    createMany?: DeviceModelCreateManyBrandInputEnvelope
    set?: DeviceModelWhereUniqueInput | DeviceModelWhereUniqueInput[]
    disconnect?: DeviceModelWhereUniqueInput | DeviceModelWhereUniqueInput[]
    delete?: DeviceModelWhereUniqueInput | DeviceModelWhereUniqueInput[]
    connect?: DeviceModelWhereUniqueInput | DeviceModelWhereUniqueInput[]
    update?: DeviceModelUpdateWithWhereUniqueWithoutBrandInput | DeviceModelUpdateWithWhereUniqueWithoutBrandInput[]
    updateMany?: DeviceModelUpdateManyWithWhereWithoutBrandInput | DeviceModelUpdateManyWithWhereWithoutBrandInput[]
    deleteMany?: DeviceModelScalarWhereInput | DeviceModelScalarWhereInput[]
  }

  export type DeviceModelUncheckedUpdateManyWithoutBrandNestedInput = {
    create?: XOR<DeviceModelCreateWithoutBrandInput, DeviceModelUncheckedCreateWithoutBrandInput> | DeviceModelCreateWithoutBrandInput[] | DeviceModelUncheckedCreateWithoutBrandInput[]
    connectOrCreate?: DeviceModelCreateOrConnectWithoutBrandInput | DeviceModelCreateOrConnectWithoutBrandInput[]
    upsert?: DeviceModelUpsertWithWhereUniqueWithoutBrandInput | DeviceModelUpsertWithWhereUniqueWithoutBrandInput[]
    createMany?: DeviceModelCreateManyBrandInputEnvelope
    set?: DeviceModelWhereUniqueInput | DeviceModelWhereUniqueInput[]
    disconnect?: DeviceModelWhereUniqueInput | DeviceModelWhereUniqueInput[]
    delete?: DeviceModelWhereUniqueInput | DeviceModelWhereUniqueInput[]
    connect?: DeviceModelWhereUniqueInput | DeviceModelWhereUniqueInput[]
    update?: DeviceModelUpdateWithWhereUniqueWithoutBrandInput | DeviceModelUpdateWithWhereUniqueWithoutBrandInput[]
    updateMany?: DeviceModelUpdateManyWithWhereWithoutBrandInput | DeviceModelUpdateManyWithWhereWithoutBrandInput[]
    deleteMany?: DeviceModelScalarWhereInput | DeviceModelScalarWhereInput[]
  }

  export type BrandCreateNestedOneWithoutDevicesInput = {
    create?: XOR<BrandCreateWithoutDevicesInput, BrandUncheckedCreateWithoutDevicesInput>
    connectOrCreate?: BrandCreateOrConnectWithoutDevicesInput
    connect?: BrandWhereUniqueInput
  }

  export type DeviceVariantCreateNestedManyWithoutDeviceModelInput = {
    create?: XOR<DeviceVariantCreateWithoutDeviceModelInput, DeviceVariantUncheckedCreateWithoutDeviceModelInput> | DeviceVariantCreateWithoutDeviceModelInput[] | DeviceVariantUncheckedCreateWithoutDeviceModelInput[]
    connectOrCreate?: DeviceVariantCreateOrConnectWithoutDeviceModelInput | DeviceVariantCreateOrConnectWithoutDeviceModelInput[]
    createMany?: DeviceVariantCreateManyDeviceModelInputEnvelope
    connect?: DeviceVariantWhereUniqueInput | DeviceVariantWhereUniqueInput[]
  }

  export type DeviceVariantUncheckedCreateNestedManyWithoutDeviceModelInput = {
    create?: XOR<DeviceVariantCreateWithoutDeviceModelInput, DeviceVariantUncheckedCreateWithoutDeviceModelInput> | DeviceVariantCreateWithoutDeviceModelInput[] | DeviceVariantUncheckedCreateWithoutDeviceModelInput[]
    connectOrCreate?: DeviceVariantCreateOrConnectWithoutDeviceModelInput | DeviceVariantCreateOrConnectWithoutDeviceModelInput[]
    createMany?: DeviceVariantCreateManyDeviceModelInputEnvelope
    connect?: DeviceVariantWhereUniqueInput | DeviceVariantWhereUniqueInput[]
  }

  export type NullableDateTimeFieldUpdateOperationsInput = {
    set?: Date | string | null
  }

  export type BrandUpdateOneRequiredWithoutDevicesNestedInput = {
    create?: XOR<BrandCreateWithoutDevicesInput, BrandUncheckedCreateWithoutDevicesInput>
    connectOrCreate?: BrandCreateOrConnectWithoutDevicesInput
    upsert?: BrandUpsertWithoutDevicesInput
    connect?: BrandWhereUniqueInput
    update?: XOR<XOR<BrandUpdateToOneWithWhereWithoutDevicesInput, BrandUpdateWithoutDevicesInput>, BrandUncheckedUpdateWithoutDevicesInput>
  }

  export type DeviceVariantUpdateManyWithoutDeviceModelNestedInput = {
    create?: XOR<DeviceVariantCreateWithoutDeviceModelInput, DeviceVariantUncheckedCreateWithoutDeviceModelInput> | DeviceVariantCreateWithoutDeviceModelInput[] | DeviceVariantUncheckedCreateWithoutDeviceModelInput[]
    connectOrCreate?: DeviceVariantCreateOrConnectWithoutDeviceModelInput | DeviceVariantCreateOrConnectWithoutDeviceModelInput[]
    upsert?: DeviceVariantUpsertWithWhereUniqueWithoutDeviceModelInput | DeviceVariantUpsertWithWhereUniqueWithoutDeviceModelInput[]
    createMany?: DeviceVariantCreateManyDeviceModelInputEnvelope
    set?: DeviceVariantWhereUniqueInput | DeviceVariantWhereUniqueInput[]
    disconnect?: DeviceVariantWhereUniqueInput | DeviceVariantWhereUniqueInput[]
    delete?: DeviceVariantWhereUniqueInput | DeviceVariantWhereUniqueInput[]
    connect?: DeviceVariantWhereUniqueInput | DeviceVariantWhereUniqueInput[]
    update?: DeviceVariantUpdateWithWhereUniqueWithoutDeviceModelInput | DeviceVariantUpdateWithWhereUniqueWithoutDeviceModelInput[]
    updateMany?: DeviceVariantUpdateManyWithWhereWithoutDeviceModelInput | DeviceVariantUpdateManyWithWhereWithoutDeviceModelInput[]
    deleteMany?: DeviceVariantScalarWhereInput | DeviceVariantScalarWhereInput[]
  }

  export type DeviceVariantUncheckedUpdateManyWithoutDeviceModelNestedInput = {
    create?: XOR<DeviceVariantCreateWithoutDeviceModelInput, DeviceVariantUncheckedCreateWithoutDeviceModelInput> | DeviceVariantCreateWithoutDeviceModelInput[] | DeviceVariantUncheckedCreateWithoutDeviceModelInput[]
    connectOrCreate?: DeviceVariantCreateOrConnectWithoutDeviceModelInput | DeviceVariantCreateOrConnectWithoutDeviceModelInput[]
    upsert?: DeviceVariantUpsertWithWhereUniqueWithoutDeviceModelInput | DeviceVariantUpsertWithWhereUniqueWithoutDeviceModelInput[]
    createMany?: DeviceVariantCreateManyDeviceModelInputEnvelope
    set?: DeviceVariantWhereUniqueInput | DeviceVariantWhereUniqueInput[]
    disconnect?: DeviceVariantWhereUniqueInput | DeviceVariantWhereUniqueInput[]
    delete?: DeviceVariantWhereUniqueInput | DeviceVariantWhereUniqueInput[]
    connect?: DeviceVariantWhereUniqueInput | DeviceVariantWhereUniqueInput[]
    update?: DeviceVariantUpdateWithWhereUniqueWithoutDeviceModelInput | DeviceVariantUpdateWithWhereUniqueWithoutDeviceModelInput[]
    updateMany?: DeviceVariantUpdateManyWithWhereWithoutDeviceModelInput | DeviceVariantUpdateManyWithWhereWithoutDeviceModelInput[]
    deleteMany?: DeviceVariantScalarWhereInput | DeviceVariantScalarWhereInput[]
  }

  export type DeviceModelCreateNestedOneWithoutVariantsInput = {
    create?: XOR<DeviceModelCreateWithoutVariantsInput, DeviceModelUncheckedCreateWithoutVariantsInput>
    connectOrCreate?: DeviceModelCreateOrConnectWithoutVariantsInput
    connect?: DeviceModelWhereUniqueInput
  }

  export type EmissionMetricsCreateNestedOneWithoutDeviceVariantInput = {
    create?: XOR<EmissionMetricsCreateWithoutDeviceVariantInput, EmissionMetricsUncheckedCreateWithoutDeviceVariantInput>
    connectOrCreate?: EmissionMetricsCreateOrConnectWithoutDeviceVariantInput
    connect?: EmissionMetricsWhereUniqueInput
  }

  export type EmissionMetricsUncheckedCreateNestedOneWithoutDeviceVariantInput = {
    create?: XOR<EmissionMetricsCreateWithoutDeviceVariantInput, EmissionMetricsUncheckedCreateWithoutDeviceVariantInput>
    connectOrCreate?: EmissionMetricsCreateOrConnectWithoutDeviceVariantInput
    connect?: EmissionMetricsWhereUniqueInput
  }

  export type DeviceModelUpdateOneRequiredWithoutVariantsNestedInput = {
    create?: XOR<DeviceModelCreateWithoutVariantsInput, DeviceModelUncheckedCreateWithoutVariantsInput>
    connectOrCreate?: DeviceModelCreateOrConnectWithoutVariantsInput
    upsert?: DeviceModelUpsertWithoutVariantsInput
    connect?: DeviceModelWhereUniqueInput
    update?: XOR<XOR<DeviceModelUpdateToOneWithWhereWithoutVariantsInput, DeviceModelUpdateWithoutVariantsInput>, DeviceModelUncheckedUpdateWithoutVariantsInput>
  }

  export type EmissionMetricsUpdateOneWithoutDeviceVariantNestedInput = {
    create?: XOR<EmissionMetricsCreateWithoutDeviceVariantInput, EmissionMetricsUncheckedCreateWithoutDeviceVariantInput>
    connectOrCreate?: EmissionMetricsCreateOrConnectWithoutDeviceVariantInput
    upsert?: EmissionMetricsUpsertWithoutDeviceVariantInput
    disconnect?: EmissionMetricsWhereInput | boolean
    delete?: EmissionMetricsWhereInput | boolean
    connect?: EmissionMetricsWhereUniqueInput
    update?: XOR<XOR<EmissionMetricsUpdateToOneWithWhereWithoutDeviceVariantInput, EmissionMetricsUpdateWithoutDeviceVariantInput>, EmissionMetricsUncheckedUpdateWithoutDeviceVariantInput>
  }

  export type EmissionMetricsUncheckedUpdateOneWithoutDeviceVariantNestedInput = {
    create?: XOR<EmissionMetricsCreateWithoutDeviceVariantInput, EmissionMetricsUncheckedCreateWithoutDeviceVariantInput>
    connectOrCreate?: EmissionMetricsCreateOrConnectWithoutDeviceVariantInput
    upsert?: EmissionMetricsUpsertWithoutDeviceVariantInput
    disconnect?: EmissionMetricsWhereInput | boolean
    delete?: EmissionMetricsWhereInput | boolean
    connect?: EmissionMetricsWhereUniqueInput
    update?: XOR<XOR<EmissionMetricsUpdateToOneWithWhereWithoutDeviceVariantInput, EmissionMetricsUpdateWithoutDeviceVariantInput>, EmissionMetricsUncheckedUpdateWithoutDeviceVariantInput>
  }

  export type DeviceVariantCreateNestedOneWithoutEmissionMetricsInput = {
    create?: XOR<DeviceVariantCreateWithoutEmissionMetricsInput, DeviceVariantUncheckedCreateWithoutEmissionMetricsInput>
    connectOrCreate?: DeviceVariantCreateOrConnectWithoutEmissionMetricsInput
    connect?: DeviceVariantWhereUniqueInput
  }

  export type EnumEnvironmentRatingFieldUpdateOperationsInput = {
    set?: $Enums.EnvironmentRating
  }

  export type FloatFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type NullableFloatFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type DeviceVariantUpdateOneRequiredWithoutEmissionMetricsNestedInput = {
    create?: XOR<DeviceVariantCreateWithoutEmissionMetricsInput, DeviceVariantUncheckedCreateWithoutEmissionMetricsInput>
    connectOrCreate?: DeviceVariantCreateOrConnectWithoutEmissionMetricsInput
    upsert?: DeviceVariantUpsertWithoutEmissionMetricsInput
    connect?: DeviceVariantWhereUniqueInput
    update?: XOR<XOR<DeviceVariantUpdateToOneWithWhereWithoutEmissionMetricsInput, DeviceVariantUpdateWithoutEmissionMetricsInput>, DeviceVariantUncheckedUpdateWithoutEmissionMetricsInput>
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedDateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type NestedDateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type NestedEnumEnvironmentRatingFilter<$PrismaModel = never> = {
    equals?: $Enums.EnvironmentRating | EnumEnvironmentRatingFieldRefInput<$PrismaModel>
    in?: $Enums.EnvironmentRating[] | ListEnumEnvironmentRatingFieldRefInput<$PrismaModel>
    notIn?: $Enums.EnvironmentRating[] | ListEnumEnvironmentRatingFieldRefInput<$PrismaModel>
    not?: NestedEnumEnvironmentRatingFilter<$PrismaModel> | $Enums.EnvironmentRating
  }

  export type NestedFloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type NestedFloatNullableFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableFilter<$PrismaModel> | number | null
  }

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type NestedEnumEnvironmentRatingWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.EnvironmentRating | EnumEnvironmentRatingFieldRefInput<$PrismaModel>
    in?: $Enums.EnvironmentRating[] | ListEnumEnvironmentRatingFieldRefInput<$PrismaModel>
    notIn?: $Enums.EnvironmentRating[] | ListEnumEnvironmentRatingFieldRefInput<$PrismaModel>
    not?: NestedEnumEnvironmentRatingWithAggregatesFilter<$PrismaModel> | $Enums.EnvironmentRating
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumEnvironmentRatingFilter<$PrismaModel>
    _max?: NestedEnumEnvironmentRatingFilter<$PrismaModel>
  }

  export type NestedFloatWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedFloatFilter<$PrismaModel>
    _min?: NestedFloatFilter<$PrismaModel>
    _max?: NestedFloatFilter<$PrismaModel>
  }

  export type NestedFloatNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedFloatNullableFilter<$PrismaModel>
    _min?: NestedFloatNullableFilter<$PrismaModel>
    _max?: NestedFloatNullableFilter<$PrismaModel>
  }

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type DeviceModelCreateWithoutBrandInput = {
    id?: string
    name: string
    deviceType: string
    releaseDate?: Date | string | null
    variants?: DeviceVariantCreateNestedManyWithoutDeviceModelInput
  }

  export type DeviceModelUncheckedCreateWithoutBrandInput = {
    id?: string
    name: string
    deviceType: string
    releaseDate?: Date | string | null
    variants?: DeviceVariantUncheckedCreateNestedManyWithoutDeviceModelInput
  }

  export type DeviceModelCreateOrConnectWithoutBrandInput = {
    where: DeviceModelWhereUniqueInput
    create: XOR<DeviceModelCreateWithoutBrandInput, DeviceModelUncheckedCreateWithoutBrandInput>
  }

  export type DeviceModelCreateManyBrandInputEnvelope = {
    data: DeviceModelCreateManyBrandInput | DeviceModelCreateManyBrandInput[]
    skipDuplicates?: boolean
  }

  export type DeviceModelUpsertWithWhereUniqueWithoutBrandInput = {
    where: DeviceModelWhereUniqueInput
    update: XOR<DeviceModelUpdateWithoutBrandInput, DeviceModelUncheckedUpdateWithoutBrandInput>
    create: XOR<DeviceModelCreateWithoutBrandInput, DeviceModelUncheckedCreateWithoutBrandInput>
  }

  export type DeviceModelUpdateWithWhereUniqueWithoutBrandInput = {
    where: DeviceModelWhereUniqueInput
    data: XOR<DeviceModelUpdateWithoutBrandInput, DeviceModelUncheckedUpdateWithoutBrandInput>
  }

  export type DeviceModelUpdateManyWithWhereWithoutBrandInput = {
    where: DeviceModelScalarWhereInput
    data: XOR<DeviceModelUpdateManyMutationInput, DeviceModelUncheckedUpdateManyWithoutBrandInput>
  }

  export type DeviceModelScalarWhereInput = {
    AND?: DeviceModelScalarWhereInput | DeviceModelScalarWhereInput[]
    OR?: DeviceModelScalarWhereInput[]
    NOT?: DeviceModelScalarWhereInput | DeviceModelScalarWhereInput[]
    id?: StringFilter<"DeviceModel"> | string
    brandId?: StringFilter<"DeviceModel"> | string
    name?: StringFilter<"DeviceModel"> | string
    deviceType?: StringFilter<"DeviceModel"> | string
    releaseDate?: DateTimeNullableFilter<"DeviceModel"> | Date | string | null
  }

  export type BrandCreateWithoutDevicesInput = {
    id?: string
    name: string
  }

  export type BrandUncheckedCreateWithoutDevicesInput = {
    id?: string
    name: string
  }

  export type BrandCreateOrConnectWithoutDevicesInput = {
    where: BrandWhereUniqueInput
    create: XOR<BrandCreateWithoutDevicesInput, BrandUncheckedCreateWithoutDevicesInput>
  }

  export type DeviceVariantCreateWithoutDeviceModelInput = {
    id?: string
    storageCapacity: string
    slug: string
    emissionMetrics?: EmissionMetricsCreateNestedOneWithoutDeviceVariantInput
  }

  export type DeviceVariantUncheckedCreateWithoutDeviceModelInput = {
    id?: string
    storageCapacity: string
    slug: string
    emissionMetrics?: EmissionMetricsUncheckedCreateNestedOneWithoutDeviceVariantInput
  }

  export type DeviceVariantCreateOrConnectWithoutDeviceModelInput = {
    where: DeviceVariantWhereUniqueInput
    create: XOR<DeviceVariantCreateWithoutDeviceModelInput, DeviceVariantUncheckedCreateWithoutDeviceModelInput>
  }

  export type DeviceVariantCreateManyDeviceModelInputEnvelope = {
    data: DeviceVariantCreateManyDeviceModelInput | DeviceVariantCreateManyDeviceModelInput[]
    skipDuplicates?: boolean
  }

  export type BrandUpsertWithoutDevicesInput = {
    update: XOR<BrandUpdateWithoutDevicesInput, BrandUncheckedUpdateWithoutDevicesInput>
    create: XOR<BrandCreateWithoutDevicesInput, BrandUncheckedCreateWithoutDevicesInput>
    where?: BrandWhereInput
  }

  export type BrandUpdateToOneWithWhereWithoutDevicesInput = {
    where?: BrandWhereInput
    data: XOR<BrandUpdateWithoutDevicesInput, BrandUncheckedUpdateWithoutDevicesInput>
  }

  export type BrandUpdateWithoutDevicesInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
  }

  export type BrandUncheckedUpdateWithoutDevicesInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
  }

  export type DeviceVariantUpsertWithWhereUniqueWithoutDeviceModelInput = {
    where: DeviceVariantWhereUniqueInput
    update: XOR<DeviceVariantUpdateWithoutDeviceModelInput, DeviceVariantUncheckedUpdateWithoutDeviceModelInput>
    create: XOR<DeviceVariantCreateWithoutDeviceModelInput, DeviceVariantUncheckedCreateWithoutDeviceModelInput>
  }

  export type DeviceVariantUpdateWithWhereUniqueWithoutDeviceModelInput = {
    where: DeviceVariantWhereUniqueInput
    data: XOR<DeviceVariantUpdateWithoutDeviceModelInput, DeviceVariantUncheckedUpdateWithoutDeviceModelInput>
  }

  export type DeviceVariantUpdateManyWithWhereWithoutDeviceModelInput = {
    where: DeviceVariantScalarWhereInput
    data: XOR<DeviceVariantUpdateManyMutationInput, DeviceVariantUncheckedUpdateManyWithoutDeviceModelInput>
  }

  export type DeviceVariantScalarWhereInput = {
    AND?: DeviceVariantScalarWhereInput | DeviceVariantScalarWhereInput[]
    OR?: DeviceVariantScalarWhereInput[]
    NOT?: DeviceVariantScalarWhereInput | DeviceVariantScalarWhereInput[]
    id?: StringFilter<"DeviceVariant"> | string
    deviceModelId?: StringFilter<"DeviceVariant"> | string
    storageCapacity?: StringFilter<"DeviceVariant"> | string
    slug?: StringFilter<"DeviceVariant"> | string
  }

  export type DeviceModelCreateWithoutVariantsInput = {
    id?: string
    name: string
    deviceType: string
    releaseDate?: Date | string | null
    brand: BrandCreateNestedOneWithoutDevicesInput
  }

  export type DeviceModelUncheckedCreateWithoutVariantsInput = {
    id?: string
    brandId: string
    name: string
    deviceType: string
    releaseDate?: Date | string | null
  }

  export type DeviceModelCreateOrConnectWithoutVariantsInput = {
    where: DeviceModelWhereUniqueInput
    create: XOR<DeviceModelCreateWithoutVariantsInput, DeviceModelUncheckedCreateWithoutVariantsInput>
  }

  export type EmissionMetricsCreateWithoutDeviceVariantInput = {
    id?: string
    environmentRating?: $Enums.EnvironmentRating
    totalCO2: number
    productionPct?: number | null
    transportationPct?: number | null
    usePct?: number | null
    endOfLifePct?: number | null
    recycledMaterialsPct?: number | null
    cleanEnergyPct?: number | null
    recycledRareEarthPct?: number | null
    recycledPackagingPct?: number | null
    labourProtection?: string | null
    longevityMeasures?: string | null
    harmfulMaterials?: string | null
    recyclingProgram?: string | null
    source?: string | null
    sourceUrl?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type EmissionMetricsUncheckedCreateWithoutDeviceVariantInput = {
    id?: string
    environmentRating?: $Enums.EnvironmentRating
    totalCO2: number
    productionPct?: number | null
    transportationPct?: number | null
    usePct?: number | null
    endOfLifePct?: number | null
    recycledMaterialsPct?: number | null
    cleanEnergyPct?: number | null
    recycledRareEarthPct?: number | null
    recycledPackagingPct?: number | null
    labourProtection?: string | null
    longevityMeasures?: string | null
    harmfulMaterials?: string | null
    recyclingProgram?: string | null
    source?: string | null
    sourceUrl?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type EmissionMetricsCreateOrConnectWithoutDeviceVariantInput = {
    where: EmissionMetricsWhereUniqueInput
    create: XOR<EmissionMetricsCreateWithoutDeviceVariantInput, EmissionMetricsUncheckedCreateWithoutDeviceVariantInput>
  }

  export type DeviceModelUpsertWithoutVariantsInput = {
    update: XOR<DeviceModelUpdateWithoutVariantsInput, DeviceModelUncheckedUpdateWithoutVariantsInput>
    create: XOR<DeviceModelCreateWithoutVariantsInput, DeviceModelUncheckedCreateWithoutVariantsInput>
    where?: DeviceModelWhereInput
  }

  export type DeviceModelUpdateToOneWithWhereWithoutVariantsInput = {
    where?: DeviceModelWhereInput
    data: XOR<DeviceModelUpdateWithoutVariantsInput, DeviceModelUncheckedUpdateWithoutVariantsInput>
  }

  export type DeviceModelUpdateWithoutVariantsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    deviceType?: StringFieldUpdateOperationsInput | string
    releaseDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    brand?: BrandUpdateOneRequiredWithoutDevicesNestedInput
  }

  export type DeviceModelUncheckedUpdateWithoutVariantsInput = {
    id?: StringFieldUpdateOperationsInput | string
    brandId?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    deviceType?: StringFieldUpdateOperationsInput | string
    releaseDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type EmissionMetricsUpsertWithoutDeviceVariantInput = {
    update: XOR<EmissionMetricsUpdateWithoutDeviceVariantInput, EmissionMetricsUncheckedUpdateWithoutDeviceVariantInput>
    create: XOR<EmissionMetricsCreateWithoutDeviceVariantInput, EmissionMetricsUncheckedCreateWithoutDeviceVariantInput>
    where?: EmissionMetricsWhereInput
  }

  export type EmissionMetricsUpdateToOneWithWhereWithoutDeviceVariantInput = {
    where?: EmissionMetricsWhereInput
    data: XOR<EmissionMetricsUpdateWithoutDeviceVariantInput, EmissionMetricsUncheckedUpdateWithoutDeviceVariantInput>
  }

  export type EmissionMetricsUpdateWithoutDeviceVariantInput = {
    id?: StringFieldUpdateOperationsInput | string
    environmentRating?: EnumEnvironmentRatingFieldUpdateOperationsInput | $Enums.EnvironmentRating
    totalCO2?: FloatFieldUpdateOperationsInput | number
    productionPct?: NullableFloatFieldUpdateOperationsInput | number | null
    transportationPct?: NullableFloatFieldUpdateOperationsInput | number | null
    usePct?: NullableFloatFieldUpdateOperationsInput | number | null
    endOfLifePct?: NullableFloatFieldUpdateOperationsInput | number | null
    recycledMaterialsPct?: NullableFloatFieldUpdateOperationsInput | number | null
    cleanEnergyPct?: NullableFloatFieldUpdateOperationsInput | number | null
    recycledRareEarthPct?: NullableFloatFieldUpdateOperationsInput | number | null
    recycledPackagingPct?: NullableFloatFieldUpdateOperationsInput | number | null
    labourProtection?: NullableStringFieldUpdateOperationsInput | string | null
    longevityMeasures?: NullableStringFieldUpdateOperationsInput | string | null
    harmfulMaterials?: NullableStringFieldUpdateOperationsInput | string | null
    recyclingProgram?: NullableStringFieldUpdateOperationsInput | string | null
    source?: NullableStringFieldUpdateOperationsInput | string | null
    sourceUrl?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type EmissionMetricsUncheckedUpdateWithoutDeviceVariantInput = {
    id?: StringFieldUpdateOperationsInput | string
    environmentRating?: EnumEnvironmentRatingFieldUpdateOperationsInput | $Enums.EnvironmentRating
    totalCO2?: FloatFieldUpdateOperationsInput | number
    productionPct?: NullableFloatFieldUpdateOperationsInput | number | null
    transportationPct?: NullableFloatFieldUpdateOperationsInput | number | null
    usePct?: NullableFloatFieldUpdateOperationsInput | number | null
    endOfLifePct?: NullableFloatFieldUpdateOperationsInput | number | null
    recycledMaterialsPct?: NullableFloatFieldUpdateOperationsInput | number | null
    cleanEnergyPct?: NullableFloatFieldUpdateOperationsInput | number | null
    recycledRareEarthPct?: NullableFloatFieldUpdateOperationsInput | number | null
    recycledPackagingPct?: NullableFloatFieldUpdateOperationsInput | number | null
    labourProtection?: NullableStringFieldUpdateOperationsInput | string | null
    longevityMeasures?: NullableStringFieldUpdateOperationsInput | string | null
    harmfulMaterials?: NullableStringFieldUpdateOperationsInput | string | null
    recyclingProgram?: NullableStringFieldUpdateOperationsInput | string | null
    source?: NullableStringFieldUpdateOperationsInput | string | null
    sourceUrl?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type DeviceVariantCreateWithoutEmissionMetricsInput = {
    id?: string
    storageCapacity: string
    slug: string
    deviceModel: DeviceModelCreateNestedOneWithoutVariantsInput
  }

  export type DeviceVariantUncheckedCreateWithoutEmissionMetricsInput = {
    id?: string
    deviceModelId: string
    storageCapacity: string
    slug: string
  }

  export type DeviceVariantCreateOrConnectWithoutEmissionMetricsInput = {
    where: DeviceVariantWhereUniqueInput
    create: XOR<DeviceVariantCreateWithoutEmissionMetricsInput, DeviceVariantUncheckedCreateWithoutEmissionMetricsInput>
  }

  export type DeviceVariantUpsertWithoutEmissionMetricsInput = {
    update: XOR<DeviceVariantUpdateWithoutEmissionMetricsInput, DeviceVariantUncheckedUpdateWithoutEmissionMetricsInput>
    create: XOR<DeviceVariantCreateWithoutEmissionMetricsInput, DeviceVariantUncheckedCreateWithoutEmissionMetricsInput>
    where?: DeviceVariantWhereInput
  }

  export type DeviceVariantUpdateToOneWithWhereWithoutEmissionMetricsInput = {
    where?: DeviceVariantWhereInput
    data: XOR<DeviceVariantUpdateWithoutEmissionMetricsInput, DeviceVariantUncheckedUpdateWithoutEmissionMetricsInput>
  }

  export type DeviceVariantUpdateWithoutEmissionMetricsInput = {
    id?: StringFieldUpdateOperationsInput | string
    storageCapacity?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    deviceModel?: DeviceModelUpdateOneRequiredWithoutVariantsNestedInput
  }

  export type DeviceVariantUncheckedUpdateWithoutEmissionMetricsInput = {
    id?: StringFieldUpdateOperationsInput | string
    deviceModelId?: StringFieldUpdateOperationsInput | string
    storageCapacity?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
  }

  export type DeviceModelCreateManyBrandInput = {
    id?: string
    name: string
    deviceType: string
    releaseDate?: Date | string | null
  }

  export type DeviceModelUpdateWithoutBrandInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    deviceType?: StringFieldUpdateOperationsInput | string
    releaseDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    variants?: DeviceVariantUpdateManyWithoutDeviceModelNestedInput
  }

  export type DeviceModelUncheckedUpdateWithoutBrandInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    deviceType?: StringFieldUpdateOperationsInput | string
    releaseDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    variants?: DeviceVariantUncheckedUpdateManyWithoutDeviceModelNestedInput
  }

  export type DeviceModelUncheckedUpdateManyWithoutBrandInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    deviceType?: StringFieldUpdateOperationsInput | string
    releaseDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type DeviceVariantCreateManyDeviceModelInput = {
    id?: string
    storageCapacity: string
    slug: string
  }

  export type DeviceVariantUpdateWithoutDeviceModelInput = {
    id?: StringFieldUpdateOperationsInput | string
    storageCapacity?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    emissionMetrics?: EmissionMetricsUpdateOneWithoutDeviceVariantNestedInput
  }

  export type DeviceVariantUncheckedUpdateWithoutDeviceModelInput = {
    id?: StringFieldUpdateOperationsInput | string
    storageCapacity?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    emissionMetrics?: EmissionMetricsUncheckedUpdateOneWithoutDeviceVariantNestedInput
  }

  export type DeviceVariantUncheckedUpdateManyWithoutDeviceModelInput = {
    id?: StringFieldUpdateOperationsInput | string
    storageCapacity?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
  }



  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number
  }

  /**
   * DMMF
   */
  export const dmmf: runtime.BaseDMMF
}