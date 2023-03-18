// @ts-nocheck
import { GraphQLResolveInfo, SelectionSetNode, FieldNode } from 'graphql';
import type { GetMeshOptions } from '@graphql-mesh/runtime';
import type { YamlConfig } from '@graphql-mesh/types';
import { PubSub } from '@graphql-mesh/utils';
import { DefaultLogger } from '@graphql-mesh/utils';
import MeshCache from "@graphql-mesh/cache-localforage";
import { fetch as fetchFn } from '@whatwg-node/fetch';

import { MeshResolvedSource } from '@graphql-mesh/runtime';
import { MeshTransform, MeshPlugin } from '@graphql-mesh/types';
import GraphqlHandler from "@graphql-mesh/graphql"
import UseRateLimit from "@graphql-mesh/plugin-rate-limit";
import BareMerger from "@graphql-mesh/merger-bare";
import { createMeshHTTPHandler, MeshHTTPHandler } from '@graphql-mesh/http';
import { getMesh, ExecuteMeshFn, SubscribeMeshFn, MeshContext as BaseMeshContext, MeshInstance } from '@graphql-mesh/runtime';
import { MeshStore, FsStoreStorageAdapter } from '@graphql-mesh/store';
import { path as pathModule } from '@graphql-mesh/cross-helpers';
import { ImportFn } from '@graphql-mesh/types';
import type { SwapiTypes } from './sources/SWAPI/types';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type RequireFields<T, K extends keyof T> = Omit<T, K> & { [P in K]-?: NonNullable<T[P]> };



/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
};

export type Root = {
  allFilms?: Maybe<FilmsConnection>;
  film?: Maybe<Film>;
  allPeople?: Maybe<PeopleConnection>;
  person?: Maybe<Person>;
  allPlanets?: Maybe<PlanetsConnection>;
  planet?: Maybe<Planet>;
  allSpecies?: Maybe<SpeciesConnection>;
  species?: Maybe<Species>;
  allStarships?: Maybe<StarshipsConnection>;
  starship?: Maybe<Starship>;
  allVehicles?: Maybe<VehiclesConnection>;
  vehicle?: Maybe<Vehicle>;
  /** Fetches an object given its ID */
  node?: Maybe<Node>;
};


export type RootallFilmsArgs = {
  after?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  before?: InputMaybe<Scalars['String']>;
  last?: InputMaybe<Scalars['Int']>;
};


export type RootfilmArgs = {
  id?: InputMaybe<Scalars['ID']>;
  filmID?: InputMaybe<Scalars['ID']>;
};


export type RootallPeopleArgs = {
  after?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  before?: InputMaybe<Scalars['String']>;
  last?: InputMaybe<Scalars['Int']>;
};


export type RootpersonArgs = {
  id?: InputMaybe<Scalars['ID']>;
  personID?: InputMaybe<Scalars['ID']>;
};


export type RootallPlanetsArgs = {
  after?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  before?: InputMaybe<Scalars['String']>;
  last?: InputMaybe<Scalars['Int']>;
};


export type RootplanetArgs = {
  id?: InputMaybe<Scalars['ID']>;
  planetID?: InputMaybe<Scalars['ID']>;
};


export type RootallSpeciesArgs = {
  after?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  before?: InputMaybe<Scalars['String']>;
  last?: InputMaybe<Scalars['Int']>;
};


export type RootspeciesArgs = {
  id?: InputMaybe<Scalars['ID']>;
  speciesID?: InputMaybe<Scalars['ID']>;
};


export type RootallStarshipsArgs = {
  after?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  before?: InputMaybe<Scalars['String']>;
  last?: InputMaybe<Scalars['Int']>;
};


export type RootstarshipArgs = {
  id?: InputMaybe<Scalars['ID']>;
  starshipID?: InputMaybe<Scalars['ID']>;
};


export type RootallVehiclesArgs = {
  after?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  before?: InputMaybe<Scalars['String']>;
  last?: InputMaybe<Scalars['Int']>;
};


export type RootvehicleArgs = {
  id?: InputMaybe<Scalars['ID']>;
  vehicleID?: InputMaybe<Scalars['ID']>;
};


export type RootnodeArgs = {
  id: Scalars['ID'];
};

/** A connection to a list of items. */
export type FilmsConnection = {
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
  /** A list of edges. */
  edges?: Maybe<Array<Maybe<FilmsEdge>>>;
  /**
   * A count of the total number of objects in this connection, ignoring pagination.
   * This allows a client to fetch the first five objects by passing "5" as the
   * argument to "first", then fetch the total count so it could display "5 of 83",
   * for example.
   */
  totalCount?: Maybe<Scalars['Int']>;
  /**
   * A list of all of the objects returned in the connection. This is a convenience
   * field provided for quickly exploring the API; rather than querying for
   * "{ edges { node } }" when no edge data is needed, this field can be be used
   * instead. Note that when clients like Relay need to fetch the "cursor" field on
   * the edge to enable efficient pagination, this shortcut cannot be used, and the
   * full "{ edges { node } }" version should be used instead.
   */
  films?: Maybe<Array<Maybe<Film>>>;
};

/** Information about pagination in a connection. */
export type PageInfo = {
  /** When paginating forwards, are there more items? */
  hasNextPage: Scalars['Boolean'];
  /** When paginating backwards, are there more items? */
  hasPreviousPage: Scalars['Boolean'];
  /** When paginating backwards, the cursor to continue. */
  startCursor?: Maybe<Scalars['String']>;
  /** When paginating forwards, the cursor to continue. */
  endCursor?: Maybe<Scalars['String']>;
};

/** An edge in a connection. */
export type FilmsEdge = {
  /** The item at the end of the edge */
  node?: Maybe<Film>;
  /** A cursor for use in pagination */
  cursor: Scalars['String'];
};

/** A single film. */
export type Film = Node & {
  /** The title of this film. */
  title?: Maybe<Scalars['String']>;
  /** The episode number of this film. */
  episodeID?: Maybe<Scalars['Int']>;
  /** The opening paragraphs at the beginning of this film. */
  openingCrawl?: Maybe<Scalars['String']>;
  /** The name of the director of this film. */
  director?: Maybe<Scalars['String']>;
  /** The name(s) of the producer(s) of this film. */
  producers?: Maybe<Array<Maybe<Scalars['String']>>>;
  /** The ISO 8601 date format of film release at original creator country. */
  releaseDate?: Maybe<Scalars['String']>;
  speciesConnection?: Maybe<FilmSpeciesConnection>;
  starshipConnection?: Maybe<FilmStarshipsConnection>;
  vehicleConnection?: Maybe<FilmVehiclesConnection>;
  characterConnection?: Maybe<FilmCharactersConnection>;
  planetConnection?: Maybe<FilmPlanetsConnection>;
  /** The ISO 8601 date format of the time that this resource was created. */
  created?: Maybe<Scalars['String']>;
  /** The ISO 8601 date format of the time that this resource was edited. */
  edited?: Maybe<Scalars['String']>;
  /** The ID of an object */
  id: Scalars['ID'];
};


/** A single film. */
export type FilmspeciesConnectionArgs = {
  after?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  before?: InputMaybe<Scalars['String']>;
  last?: InputMaybe<Scalars['Int']>;
};


/** A single film. */
export type FilmstarshipConnectionArgs = {
  after?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  before?: InputMaybe<Scalars['String']>;
  last?: InputMaybe<Scalars['Int']>;
};


/** A single film. */
export type FilmvehicleConnectionArgs = {
  after?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  before?: InputMaybe<Scalars['String']>;
  last?: InputMaybe<Scalars['Int']>;
};


/** A single film. */
export type FilmcharacterConnectionArgs = {
  after?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  before?: InputMaybe<Scalars['String']>;
  last?: InputMaybe<Scalars['Int']>;
};


/** A single film. */
export type FilmplanetConnectionArgs = {
  after?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  before?: InputMaybe<Scalars['String']>;
  last?: InputMaybe<Scalars['Int']>;
};

/** An object with an ID */
export type Node = {
  /** The id of the object. */
  id: Scalars['ID'];
};

/** A connection to a list of items. */
export type FilmSpeciesConnection = {
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
  /** A list of edges. */
  edges?: Maybe<Array<Maybe<FilmSpeciesEdge>>>;
  /**
   * A count of the total number of objects in this connection, ignoring pagination.
   * This allows a client to fetch the first five objects by passing "5" as the
   * argument to "first", then fetch the total count so it could display "5 of 83",
   * for example.
   */
  totalCount?: Maybe<Scalars['Int']>;
  /**
   * A list of all of the objects returned in the connection. This is a convenience
   * field provided for quickly exploring the API; rather than querying for
   * "{ edges { node } }" when no edge data is needed, this field can be be used
   * instead. Note that when clients like Relay need to fetch the "cursor" field on
   * the edge to enable efficient pagination, this shortcut cannot be used, and the
   * full "{ edges { node } }" version should be used instead.
   */
  species?: Maybe<Array<Maybe<Species>>>;
};

/** An edge in a connection. */
export type FilmSpeciesEdge = {
  /** The item at the end of the edge */
  node?: Maybe<Species>;
  /** A cursor for use in pagination */
  cursor: Scalars['String'];
};

/** A type of person or character within the Star Wars Universe. */
export type Species = Node & {
  /** The name of this species. */
  name?: Maybe<Scalars['String']>;
  /** The classification of this species, such as "mammal" or "reptile". */
  classification?: Maybe<Scalars['String']>;
  /** The designation of this species, such as "sentient". */
  designation?: Maybe<Scalars['String']>;
  /** The average height of this species in centimeters. */
  averageHeight?: Maybe<Scalars['Float']>;
  /** The average lifespan of this species in years, null if unknown. */
  averageLifespan?: Maybe<Scalars['Int']>;
  /**
   * Common eye colors for this species, null if this species does not typically
   * have eyes.
   */
  eyeColors?: Maybe<Array<Maybe<Scalars['String']>>>;
  /**
   * Common hair colors for this species, null if this species does not typically
   * have hair.
   */
  hairColors?: Maybe<Array<Maybe<Scalars['String']>>>;
  /**
   * Common skin colors for this species, null if this species does not typically
   * have skin.
   */
  skinColors?: Maybe<Array<Maybe<Scalars['String']>>>;
  /** The language commonly spoken by this species. */
  language?: Maybe<Scalars['String']>;
  /** A planet that this species originates from. */
  homeworld?: Maybe<Planet>;
  personConnection?: Maybe<SpeciesPeopleConnection>;
  filmConnection?: Maybe<SpeciesFilmsConnection>;
  /** The ISO 8601 date format of the time that this resource was created. */
  created?: Maybe<Scalars['String']>;
  /** The ISO 8601 date format of the time that this resource was edited. */
  edited?: Maybe<Scalars['String']>;
  /** The ID of an object */
  id: Scalars['ID'];
};


/** A type of person or character within the Star Wars Universe. */
export type SpeciespersonConnectionArgs = {
  after?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  before?: InputMaybe<Scalars['String']>;
  last?: InputMaybe<Scalars['Int']>;
};


/** A type of person or character within the Star Wars Universe. */
export type SpeciesfilmConnectionArgs = {
  after?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  before?: InputMaybe<Scalars['String']>;
  last?: InputMaybe<Scalars['Int']>;
};

/**
 * A large mass, planet or planetoid in the Star Wars Universe, at the time of
 * 0 ABY.
 */
export type Planet = Node & {
  /** The name of this planet. */
  name?: Maybe<Scalars['String']>;
  /** The diameter of this planet in kilometers. */
  diameter?: Maybe<Scalars['Int']>;
  /**
   * The number of standard hours it takes for this planet to complete a single
   * rotation on its axis.
   */
  rotationPeriod?: Maybe<Scalars['Int']>;
  /**
   * The number of standard days it takes for this planet to complete a single orbit
   * of its local star.
   */
  orbitalPeriod?: Maybe<Scalars['Int']>;
  /**
   * A number denoting the gravity of this planet, where "1" is normal or 1 standard
   * G. "2" is twice or 2 standard Gs. "0.5" is half or 0.5 standard Gs.
   */
  gravity?: Maybe<Scalars['String']>;
  /** The average population of sentient beings inhabiting this planet. */
  population?: Maybe<Scalars['Float']>;
  /** The climates of this planet. */
  climates?: Maybe<Array<Maybe<Scalars['String']>>>;
  /** The terrains of this planet. */
  terrains?: Maybe<Array<Maybe<Scalars['String']>>>;
  /**
   * The percentage of the planet surface that is naturally occurring water or bodies
   * of water.
   */
  surfaceWater?: Maybe<Scalars['Float']>;
  residentConnection?: Maybe<PlanetResidentsConnection>;
  filmConnection?: Maybe<PlanetFilmsConnection>;
  /** The ISO 8601 date format of the time that this resource was created. */
  created?: Maybe<Scalars['String']>;
  /** The ISO 8601 date format of the time that this resource was edited. */
  edited?: Maybe<Scalars['String']>;
  /** The ID of an object */
  id: Scalars['ID'];
};


/**
 * A large mass, planet or planetoid in the Star Wars Universe, at the time of
 * 0 ABY.
 */
export type PlanetresidentConnectionArgs = {
  after?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  before?: InputMaybe<Scalars['String']>;
  last?: InputMaybe<Scalars['Int']>;
};


/**
 * A large mass, planet or planetoid in the Star Wars Universe, at the time of
 * 0 ABY.
 */
export type PlanetfilmConnectionArgs = {
  after?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  before?: InputMaybe<Scalars['String']>;
  last?: InputMaybe<Scalars['Int']>;
};

/** A connection to a list of items. */
export type PlanetResidentsConnection = {
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
  /** A list of edges. */
  edges?: Maybe<Array<Maybe<PlanetResidentsEdge>>>;
  /**
   * A count of the total number of objects in this connection, ignoring pagination.
   * This allows a client to fetch the first five objects by passing "5" as the
   * argument to "first", then fetch the total count so it could display "5 of 83",
   * for example.
   */
  totalCount?: Maybe<Scalars['Int']>;
  /**
   * A list of all of the objects returned in the connection. This is a convenience
   * field provided for quickly exploring the API; rather than querying for
   * "{ edges { node } }" when no edge data is needed, this field can be be used
   * instead. Note that when clients like Relay need to fetch the "cursor" field on
   * the edge to enable efficient pagination, this shortcut cannot be used, and the
   * full "{ edges { node } }" version should be used instead.
   */
  residents?: Maybe<Array<Maybe<Person>>>;
};

/** An edge in a connection. */
export type PlanetResidentsEdge = {
  /** The item at the end of the edge */
  node?: Maybe<Person>;
  /** A cursor for use in pagination */
  cursor: Scalars['String'];
};

/** An individual person or character within the Star Wars universe. */
export type Person = Node & {
  /** The name of this person. */
  name?: Maybe<Scalars['String']>;
  /**
   * The birth year of the person, using the in-universe standard of BBY or ABY -
   * Before the Battle of Yavin or After the Battle of Yavin. The Battle of Yavin is
   * a battle that occurs at the end of Star Wars episode IV: A New Hope.
   */
  birthYear?: Maybe<Scalars['String']>;
  /**
   * The eye color of this person. Will be "unknown" if not known or "n/a" if the
   * person does not have an eye.
   */
  eyeColor?: Maybe<Scalars['String']>;
  /**
   * The gender of this person. Either "Male", "Female" or "unknown",
   * "n/a" if the person does not have a gender.
   */
  gender?: Maybe<Scalars['String']>;
  /**
   * The hair color of this person. Will be "unknown" if not known or "n/a" if the
   * person does not have hair.
   */
  hairColor?: Maybe<Scalars['String']>;
  /** The height of the person in centimeters. */
  height?: Maybe<Scalars['Int']>;
  /** The mass of the person in kilograms. */
  mass?: Maybe<Scalars['Float']>;
  /** The skin color of this person. */
  skinColor?: Maybe<Scalars['String']>;
  /** A planet that this person was born on or inhabits. */
  homeworld?: Maybe<Planet>;
  filmConnection?: Maybe<PersonFilmsConnection>;
  /** The species that this person belongs to, or null if unknown. */
  species?: Maybe<Species>;
  starshipConnection?: Maybe<PersonStarshipsConnection>;
  vehicleConnection?: Maybe<PersonVehiclesConnection>;
  /** The ISO 8601 date format of the time that this resource was created. */
  created?: Maybe<Scalars['String']>;
  /** The ISO 8601 date format of the time that this resource was edited. */
  edited?: Maybe<Scalars['String']>;
  /** The ID of an object */
  id: Scalars['ID'];
};


/** An individual person or character within the Star Wars universe. */
export type PersonfilmConnectionArgs = {
  after?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  before?: InputMaybe<Scalars['String']>;
  last?: InputMaybe<Scalars['Int']>;
};


/** An individual person or character within the Star Wars universe. */
export type PersonstarshipConnectionArgs = {
  after?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  before?: InputMaybe<Scalars['String']>;
  last?: InputMaybe<Scalars['Int']>;
};


/** An individual person or character within the Star Wars universe. */
export type PersonvehicleConnectionArgs = {
  after?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  before?: InputMaybe<Scalars['String']>;
  last?: InputMaybe<Scalars['Int']>;
};

/** A connection to a list of items. */
export type PersonFilmsConnection = {
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
  /** A list of edges. */
  edges?: Maybe<Array<Maybe<PersonFilmsEdge>>>;
  /**
   * A count of the total number of objects in this connection, ignoring pagination.
   * This allows a client to fetch the first five objects by passing "5" as the
   * argument to "first", then fetch the total count so it could display "5 of 83",
   * for example.
   */
  totalCount?: Maybe<Scalars['Int']>;
  /**
   * A list of all of the objects returned in the connection. This is a convenience
   * field provided for quickly exploring the API; rather than querying for
   * "{ edges { node } }" when no edge data is needed, this field can be be used
   * instead. Note that when clients like Relay need to fetch the "cursor" field on
   * the edge to enable efficient pagination, this shortcut cannot be used, and the
   * full "{ edges { node } }" version should be used instead.
   */
  films?: Maybe<Array<Maybe<Film>>>;
};

/** An edge in a connection. */
export type PersonFilmsEdge = {
  /** The item at the end of the edge */
  node?: Maybe<Film>;
  /** A cursor for use in pagination */
  cursor: Scalars['String'];
};

/** A connection to a list of items. */
export type PersonStarshipsConnection = {
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
  /** A list of edges. */
  edges?: Maybe<Array<Maybe<PersonStarshipsEdge>>>;
  /**
   * A count of the total number of objects in this connection, ignoring pagination.
   * This allows a client to fetch the first five objects by passing "5" as the
   * argument to "first", then fetch the total count so it could display "5 of 83",
   * for example.
   */
  totalCount?: Maybe<Scalars['Int']>;
  /**
   * A list of all of the objects returned in the connection. This is a convenience
   * field provided for quickly exploring the API; rather than querying for
   * "{ edges { node } }" when no edge data is needed, this field can be be used
   * instead. Note that when clients like Relay need to fetch the "cursor" field on
   * the edge to enable efficient pagination, this shortcut cannot be used, and the
   * full "{ edges { node } }" version should be used instead.
   */
  starships?: Maybe<Array<Maybe<Starship>>>;
};

/** An edge in a connection. */
export type PersonStarshipsEdge = {
  /** The item at the end of the edge */
  node?: Maybe<Starship>;
  /** A cursor for use in pagination */
  cursor: Scalars['String'];
};

/** A single transport craft that has hyperdrive capability. */
export type Starship = Node & {
  /** The name of this starship. The common name, such as "Death Star". */
  name?: Maybe<Scalars['String']>;
  /**
   * The model or official name of this starship. Such as "T-65 X-wing" or "DS-1
   * Orbital Battle Station".
   */
  model?: Maybe<Scalars['String']>;
  /**
   * The class of this starship, such as "Starfighter" or "Deep Space Mobile
   * Battlestation"
   */
  starshipClass?: Maybe<Scalars['String']>;
  /** The manufacturers of this starship. */
  manufacturers?: Maybe<Array<Maybe<Scalars['String']>>>;
  /** The cost of this starship new, in galactic credits. */
  costInCredits?: Maybe<Scalars['Float']>;
  /** The length of this starship in meters. */
  length?: Maybe<Scalars['Float']>;
  /** The number of personnel needed to run or pilot this starship. */
  crew?: Maybe<Scalars['String']>;
  /** The number of non-essential people this starship can transport. */
  passengers?: Maybe<Scalars['String']>;
  /**
   * The maximum speed of this starship in atmosphere. null if this starship is
   * incapable of atmosphering flight.
   */
  maxAtmospheringSpeed?: Maybe<Scalars['Int']>;
  /** The class of this starships hyperdrive. */
  hyperdriveRating?: Maybe<Scalars['Float']>;
  /**
   * The Maximum number of Megalights this starship can travel in a standard hour.
   * A "Megalight" is a standard unit of distance and has never been defined before
   * within the Star Wars universe. This figure is only really useful for measuring
   * the difference in speed of starships. We can assume it is similar to AU, the
   * distance between our Sun (Sol) and Earth.
   */
  MGLT?: Maybe<Scalars['Int']>;
  /** The maximum number of kilograms that this starship can transport. */
  cargoCapacity?: Maybe<Scalars['Float']>;
  /**
   * The maximum length of time that this starship can provide consumables for its
   * entire crew without having to resupply.
   */
  consumables?: Maybe<Scalars['String']>;
  pilotConnection?: Maybe<StarshipPilotsConnection>;
  filmConnection?: Maybe<StarshipFilmsConnection>;
  /** The ISO 8601 date format of the time that this resource was created. */
  created?: Maybe<Scalars['String']>;
  /** The ISO 8601 date format of the time that this resource was edited. */
  edited?: Maybe<Scalars['String']>;
  /** The ID of an object */
  id: Scalars['ID'];
};


/** A single transport craft that has hyperdrive capability. */
export type StarshippilotConnectionArgs = {
  after?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  before?: InputMaybe<Scalars['String']>;
  last?: InputMaybe<Scalars['Int']>;
};


/** A single transport craft that has hyperdrive capability. */
export type StarshipfilmConnectionArgs = {
  after?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  before?: InputMaybe<Scalars['String']>;
  last?: InputMaybe<Scalars['Int']>;
};

/** A connection to a list of items. */
export type StarshipPilotsConnection = {
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
  /** A list of edges. */
  edges?: Maybe<Array<Maybe<StarshipPilotsEdge>>>;
  /**
   * A count of the total number of objects in this connection, ignoring pagination.
   * This allows a client to fetch the first five objects by passing "5" as the
   * argument to "first", then fetch the total count so it could display "5 of 83",
   * for example.
   */
  totalCount?: Maybe<Scalars['Int']>;
  /**
   * A list of all of the objects returned in the connection. This is a convenience
   * field provided for quickly exploring the API; rather than querying for
   * "{ edges { node } }" when no edge data is needed, this field can be be used
   * instead. Note that when clients like Relay need to fetch the "cursor" field on
   * the edge to enable efficient pagination, this shortcut cannot be used, and the
   * full "{ edges { node } }" version should be used instead.
   */
  pilots?: Maybe<Array<Maybe<Person>>>;
};

/** An edge in a connection. */
export type StarshipPilotsEdge = {
  /** The item at the end of the edge */
  node?: Maybe<Person>;
  /** A cursor for use in pagination */
  cursor: Scalars['String'];
};

/** A connection to a list of items. */
export type StarshipFilmsConnection = {
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
  /** A list of edges. */
  edges?: Maybe<Array<Maybe<StarshipFilmsEdge>>>;
  /**
   * A count of the total number of objects in this connection, ignoring pagination.
   * This allows a client to fetch the first five objects by passing "5" as the
   * argument to "first", then fetch the total count so it could display "5 of 83",
   * for example.
   */
  totalCount?: Maybe<Scalars['Int']>;
  /**
   * A list of all of the objects returned in the connection. This is a convenience
   * field provided for quickly exploring the API; rather than querying for
   * "{ edges { node } }" when no edge data is needed, this field can be be used
   * instead. Note that when clients like Relay need to fetch the "cursor" field on
   * the edge to enable efficient pagination, this shortcut cannot be used, and the
   * full "{ edges { node } }" version should be used instead.
   */
  films?: Maybe<Array<Maybe<Film>>>;
};

/** An edge in a connection. */
export type StarshipFilmsEdge = {
  /** The item at the end of the edge */
  node?: Maybe<Film>;
  /** A cursor for use in pagination */
  cursor: Scalars['String'];
};

/** A connection to a list of items. */
export type PersonVehiclesConnection = {
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
  /** A list of edges. */
  edges?: Maybe<Array<Maybe<PersonVehiclesEdge>>>;
  /**
   * A count of the total number of objects in this connection, ignoring pagination.
   * This allows a client to fetch the first five objects by passing "5" as the
   * argument to "first", then fetch the total count so it could display "5 of 83",
   * for example.
   */
  totalCount?: Maybe<Scalars['Int']>;
  /**
   * A list of all of the objects returned in the connection. This is a convenience
   * field provided for quickly exploring the API; rather than querying for
   * "{ edges { node } }" when no edge data is needed, this field can be be used
   * instead. Note that when clients like Relay need to fetch the "cursor" field on
   * the edge to enable efficient pagination, this shortcut cannot be used, and the
   * full "{ edges { node } }" version should be used instead.
   */
  vehicles?: Maybe<Array<Maybe<Vehicle>>>;
};

/** An edge in a connection. */
export type PersonVehiclesEdge = {
  /** The item at the end of the edge */
  node?: Maybe<Vehicle>;
  /** A cursor for use in pagination */
  cursor: Scalars['String'];
};

/** A single transport craft that does not have hyperdrive capability */
export type Vehicle = Node & {
  /**
   * The name of this vehicle. The common name, such as "Sand Crawler" or "Speeder
   * bike".
   */
  name?: Maybe<Scalars['String']>;
  /**
   * The model or official name of this vehicle. Such as "All-Terrain Attack
   * Transport".
   */
  model?: Maybe<Scalars['String']>;
  /** The class of this vehicle, such as "Wheeled" or "Repulsorcraft". */
  vehicleClass?: Maybe<Scalars['String']>;
  /** The manufacturers of this vehicle. */
  manufacturers?: Maybe<Array<Maybe<Scalars['String']>>>;
  /** The cost of this vehicle new, in Galactic Credits. */
  costInCredits?: Maybe<Scalars['Float']>;
  /** The length of this vehicle in meters. */
  length?: Maybe<Scalars['Float']>;
  /** The number of personnel needed to run or pilot this vehicle. */
  crew?: Maybe<Scalars['String']>;
  /** The number of non-essential people this vehicle can transport. */
  passengers?: Maybe<Scalars['String']>;
  /** The maximum speed of this vehicle in atmosphere. */
  maxAtmospheringSpeed?: Maybe<Scalars['Int']>;
  /** The maximum number of kilograms that this vehicle can transport. */
  cargoCapacity?: Maybe<Scalars['Float']>;
  /**
   * The maximum length of time that this vehicle can provide consumables for its
   * entire crew without having to resupply.
   */
  consumables?: Maybe<Scalars['String']>;
  pilotConnection?: Maybe<VehiclePilotsConnection>;
  filmConnection?: Maybe<VehicleFilmsConnection>;
  /** The ISO 8601 date format of the time that this resource was created. */
  created?: Maybe<Scalars['String']>;
  /** The ISO 8601 date format of the time that this resource was edited. */
  edited?: Maybe<Scalars['String']>;
  /** The ID of an object */
  id: Scalars['ID'];
};


/** A single transport craft that does not have hyperdrive capability */
export type VehiclepilotConnectionArgs = {
  after?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  before?: InputMaybe<Scalars['String']>;
  last?: InputMaybe<Scalars['Int']>;
};


/** A single transport craft that does not have hyperdrive capability */
export type VehiclefilmConnectionArgs = {
  after?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  before?: InputMaybe<Scalars['String']>;
  last?: InputMaybe<Scalars['Int']>;
};

/** A connection to a list of items. */
export type VehiclePilotsConnection = {
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
  /** A list of edges. */
  edges?: Maybe<Array<Maybe<VehiclePilotsEdge>>>;
  /**
   * A count of the total number of objects in this connection, ignoring pagination.
   * This allows a client to fetch the first five objects by passing "5" as the
   * argument to "first", then fetch the total count so it could display "5 of 83",
   * for example.
   */
  totalCount?: Maybe<Scalars['Int']>;
  /**
   * A list of all of the objects returned in the connection. This is a convenience
   * field provided for quickly exploring the API; rather than querying for
   * "{ edges { node } }" when no edge data is needed, this field can be be used
   * instead. Note that when clients like Relay need to fetch the "cursor" field on
   * the edge to enable efficient pagination, this shortcut cannot be used, and the
   * full "{ edges { node } }" version should be used instead.
   */
  pilots?: Maybe<Array<Maybe<Person>>>;
};

/** An edge in a connection. */
export type VehiclePilotsEdge = {
  /** The item at the end of the edge */
  node?: Maybe<Person>;
  /** A cursor for use in pagination */
  cursor: Scalars['String'];
};

/** A connection to a list of items. */
export type VehicleFilmsConnection = {
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
  /** A list of edges. */
  edges?: Maybe<Array<Maybe<VehicleFilmsEdge>>>;
  /**
   * A count of the total number of objects in this connection, ignoring pagination.
   * This allows a client to fetch the first five objects by passing "5" as the
   * argument to "first", then fetch the total count so it could display "5 of 83",
   * for example.
   */
  totalCount?: Maybe<Scalars['Int']>;
  /**
   * A list of all of the objects returned in the connection. This is a convenience
   * field provided for quickly exploring the API; rather than querying for
   * "{ edges { node } }" when no edge data is needed, this field can be be used
   * instead. Note that when clients like Relay need to fetch the "cursor" field on
   * the edge to enable efficient pagination, this shortcut cannot be used, and the
   * full "{ edges { node } }" version should be used instead.
   */
  films?: Maybe<Array<Maybe<Film>>>;
};

/** An edge in a connection. */
export type VehicleFilmsEdge = {
  /** The item at the end of the edge */
  node?: Maybe<Film>;
  /** A cursor for use in pagination */
  cursor: Scalars['String'];
};

/** A connection to a list of items. */
export type PlanetFilmsConnection = {
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
  /** A list of edges. */
  edges?: Maybe<Array<Maybe<PlanetFilmsEdge>>>;
  /**
   * A count of the total number of objects in this connection, ignoring pagination.
   * This allows a client to fetch the first five objects by passing "5" as the
   * argument to "first", then fetch the total count so it could display "5 of 83",
   * for example.
   */
  totalCount?: Maybe<Scalars['Int']>;
  /**
   * A list of all of the objects returned in the connection. This is a convenience
   * field provided for quickly exploring the API; rather than querying for
   * "{ edges { node } }" when no edge data is needed, this field can be be used
   * instead. Note that when clients like Relay need to fetch the "cursor" field on
   * the edge to enable efficient pagination, this shortcut cannot be used, and the
   * full "{ edges { node } }" version should be used instead.
   */
  films?: Maybe<Array<Maybe<Film>>>;
};

/** An edge in a connection. */
export type PlanetFilmsEdge = {
  /** The item at the end of the edge */
  node?: Maybe<Film>;
  /** A cursor for use in pagination */
  cursor: Scalars['String'];
};

/** A connection to a list of items. */
export type SpeciesPeopleConnection = {
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
  /** A list of edges. */
  edges?: Maybe<Array<Maybe<SpeciesPeopleEdge>>>;
  /**
   * A count of the total number of objects in this connection, ignoring pagination.
   * This allows a client to fetch the first five objects by passing "5" as the
   * argument to "first", then fetch the total count so it could display "5 of 83",
   * for example.
   */
  totalCount?: Maybe<Scalars['Int']>;
  /**
   * A list of all of the objects returned in the connection. This is a convenience
   * field provided for quickly exploring the API; rather than querying for
   * "{ edges { node } }" when no edge data is needed, this field can be be used
   * instead. Note that when clients like Relay need to fetch the "cursor" field on
   * the edge to enable efficient pagination, this shortcut cannot be used, and the
   * full "{ edges { node } }" version should be used instead.
   */
  people?: Maybe<Array<Maybe<Person>>>;
};

/** An edge in a connection. */
export type SpeciesPeopleEdge = {
  /** The item at the end of the edge */
  node?: Maybe<Person>;
  /** A cursor for use in pagination */
  cursor: Scalars['String'];
};

/** A connection to a list of items. */
export type SpeciesFilmsConnection = {
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
  /** A list of edges. */
  edges?: Maybe<Array<Maybe<SpeciesFilmsEdge>>>;
  /**
   * A count of the total number of objects in this connection, ignoring pagination.
   * This allows a client to fetch the first five objects by passing "5" as the
   * argument to "first", then fetch the total count so it could display "5 of 83",
   * for example.
   */
  totalCount?: Maybe<Scalars['Int']>;
  /**
   * A list of all of the objects returned in the connection. This is a convenience
   * field provided for quickly exploring the API; rather than querying for
   * "{ edges { node } }" when no edge data is needed, this field can be be used
   * instead. Note that when clients like Relay need to fetch the "cursor" field on
   * the edge to enable efficient pagination, this shortcut cannot be used, and the
   * full "{ edges { node } }" version should be used instead.
   */
  films?: Maybe<Array<Maybe<Film>>>;
};

/** An edge in a connection. */
export type SpeciesFilmsEdge = {
  /** The item at the end of the edge */
  node?: Maybe<Film>;
  /** A cursor for use in pagination */
  cursor: Scalars['String'];
};

/** A connection to a list of items. */
export type FilmStarshipsConnection = {
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
  /** A list of edges. */
  edges?: Maybe<Array<Maybe<FilmStarshipsEdge>>>;
  /**
   * A count of the total number of objects in this connection, ignoring pagination.
   * This allows a client to fetch the first five objects by passing "5" as the
   * argument to "first", then fetch the total count so it could display "5 of 83",
   * for example.
   */
  totalCount?: Maybe<Scalars['Int']>;
  /**
   * A list of all of the objects returned in the connection. This is a convenience
   * field provided for quickly exploring the API; rather than querying for
   * "{ edges { node } }" when no edge data is needed, this field can be be used
   * instead. Note that when clients like Relay need to fetch the "cursor" field on
   * the edge to enable efficient pagination, this shortcut cannot be used, and the
   * full "{ edges { node } }" version should be used instead.
   */
  starships?: Maybe<Array<Maybe<Starship>>>;
};

/** An edge in a connection. */
export type FilmStarshipsEdge = {
  /** The item at the end of the edge */
  node?: Maybe<Starship>;
  /** A cursor for use in pagination */
  cursor: Scalars['String'];
};

/** A connection to a list of items. */
export type FilmVehiclesConnection = {
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
  /** A list of edges. */
  edges?: Maybe<Array<Maybe<FilmVehiclesEdge>>>;
  /**
   * A count of the total number of objects in this connection, ignoring pagination.
   * This allows a client to fetch the first five objects by passing "5" as the
   * argument to "first", then fetch the total count so it could display "5 of 83",
   * for example.
   */
  totalCount?: Maybe<Scalars['Int']>;
  /**
   * A list of all of the objects returned in the connection. This is a convenience
   * field provided for quickly exploring the API; rather than querying for
   * "{ edges { node } }" when no edge data is needed, this field can be be used
   * instead. Note that when clients like Relay need to fetch the "cursor" field on
   * the edge to enable efficient pagination, this shortcut cannot be used, and the
   * full "{ edges { node } }" version should be used instead.
   */
  vehicles?: Maybe<Array<Maybe<Vehicle>>>;
};

/** An edge in a connection. */
export type FilmVehiclesEdge = {
  /** The item at the end of the edge */
  node?: Maybe<Vehicle>;
  /** A cursor for use in pagination */
  cursor: Scalars['String'];
};

/** A connection to a list of items. */
export type FilmCharactersConnection = {
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
  /** A list of edges. */
  edges?: Maybe<Array<Maybe<FilmCharactersEdge>>>;
  /**
   * A count of the total number of objects in this connection, ignoring pagination.
   * This allows a client to fetch the first five objects by passing "5" as the
   * argument to "first", then fetch the total count so it could display "5 of 83",
   * for example.
   */
  totalCount?: Maybe<Scalars['Int']>;
  /**
   * A list of all of the objects returned in the connection. This is a convenience
   * field provided for quickly exploring the API; rather than querying for
   * "{ edges { node } }" when no edge data is needed, this field can be be used
   * instead. Note that when clients like Relay need to fetch the "cursor" field on
   * the edge to enable efficient pagination, this shortcut cannot be used, and the
   * full "{ edges { node } }" version should be used instead.
   */
  characters?: Maybe<Array<Maybe<Person>>>;
};

/** An edge in a connection. */
export type FilmCharactersEdge = {
  /** The item at the end of the edge */
  node?: Maybe<Person>;
  /** A cursor for use in pagination */
  cursor: Scalars['String'];
};

/** A connection to a list of items. */
export type FilmPlanetsConnection = {
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
  /** A list of edges. */
  edges?: Maybe<Array<Maybe<FilmPlanetsEdge>>>;
  /**
   * A count of the total number of objects in this connection, ignoring pagination.
   * This allows a client to fetch the first five objects by passing "5" as the
   * argument to "first", then fetch the total count so it could display "5 of 83",
   * for example.
   */
  totalCount?: Maybe<Scalars['Int']>;
  /**
   * A list of all of the objects returned in the connection. This is a convenience
   * field provided for quickly exploring the API; rather than querying for
   * "{ edges { node } }" when no edge data is needed, this field can be be used
   * instead. Note that when clients like Relay need to fetch the "cursor" field on
   * the edge to enable efficient pagination, this shortcut cannot be used, and the
   * full "{ edges { node } }" version should be used instead.
   */
  planets?: Maybe<Array<Maybe<Planet>>>;
};

/** An edge in a connection. */
export type FilmPlanetsEdge = {
  /** The item at the end of the edge */
  node?: Maybe<Planet>;
  /** A cursor for use in pagination */
  cursor: Scalars['String'];
};

/** A connection to a list of items. */
export type PeopleConnection = {
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
  /** A list of edges. */
  edges?: Maybe<Array<Maybe<PeopleEdge>>>;
  /**
   * A count of the total number of objects in this connection, ignoring pagination.
   * This allows a client to fetch the first five objects by passing "5" as the
   * argument to "first", then fetch the total count so it could display "5 of 83",
   * for example.
   */
  totalCount?: Maybe<Scalars['Int']>;
  /**
   * A list of all of the objects returned in the connection. This is a convenience
   * field provided for quickly exploring the API; rather than querying for
   * "{ edges { node } }" when no edge data is needed, this field can be be used
   * instead. Note that when clients like Relay need to fetch the "cursor" field on
   * the edge to enable efficient pagination, this shortcut cannot be used, and the
   * full "{ edges { node } }" version should be used instead.
   */
  people?: Maybe<Array<Maybe<Person>>>;
};

/** An edge in a connection. */
export type PeopleEdge = {
  /** The item at the end of the edge */
  node?: Maybe<Person>;
  /** A cursor for use in pagination */
  cursor: Scalars['String'];
};

/** A connection to a list of items. */
export type PlanetsConnection = {
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
  /** A list of edges. */
  edges?: Maybe<Array<Maybe<PlanetsEdge>>>;
  /**
   * A count of the total number of objects in this connection, ignoring pagination.
   * This allows a client to fetch the first five objects by passing "5" as the
   * argument to "first", then fetch the total count so it could display "5 of 83",
   * for example.
   */
  totalCount?: Maybe<Scalars['Int']>;
  /**
   * A list of all of the objects returned in the connection. This is a convenience
   * field provided for quickly exploring the API; rather than querying for
   * "{ edges { node } }" when no edge data is needed, this field can be be used
   * instead. Note that when clients like Relay need to fetch the "cursor" field on
   * the edge to enable efficient pagination, this shortcut cannot be used, and the
   * full "{ edges { node } }" version should be used instead.
   */
  planets?: Maybe<Array<Maybe<Planet>>>;
};

/** An edge in a connection. */
export type PlanetsEdge = {
  /** The item at the end of the edge */
  node?: Maybe<Planet>;
  /** A cursor for use in pagination */
  cursor: Scalars['String'];
};

/** A connection to a list of items. */
export type SpeciesConnection = {
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
  /** A list of edges. */
  edges?: Maybe<Array<Maybe<SpeciesEdge>>>;
  /**
   * A count of the total number of objects in this connection, ignoring pagination.
   * This allows a client to fetch the first five objects by passing "5" as the
   * argument to "first", then fetch the total count so it could display "5 of 83",
   * for example.
   */
  totalCount?: Maybe<Scalars['Int']>;
  /**
   * A list of all of the objects returned in the connection. This is a convenience
   * field provided for quickly exploring the API; rather than querying for
   * "{ edges { node } }" when no edge data is needed, this field can be be used
   * instead. Note that when clients like Relay need to fetch the "cursor" field on
   * the edge to enable efficient pagination, this shortcut cannot be used, and the
   * full "{ edges { node } }" version should be used instead.
   */
  species?: Maybe<Array<Maybe<Species>>>;
};

/** An edge in a connection. */
export type SpeciesEdge = {
  /** The item at the end of the edge */
  node?: Maybe<Species>;
  /** A cursor for use in pagination */
  cursor: Scalars['String'];
};

/** A connection to a list of items. */
export type StarshipsConnection = {
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
  /** A list of edges. */
  edges?: Maybe<Array<Maybe<StarshipsEdge>>>;
  /**
   * A count of the total number of objects in this connection, ignoring pagination.
   * This allows a client to fetch the first five objects by passing "5" as the
   * argument to "first", then fetch the total count so it could display "5 of 83",
   * for example.
   */
  totalCount?: Maybe<Scalars['Int']>;
  /**
   * A list of all of the objects returned in the connection. This is a convenience
   * field provided for quickly exploring the API; rather than querying for
   * "{ edges { node } }" when no edge data is needed, this field can be be used
   * instead. Note that when clients like Relay need to fetch the "cursor" field on
   * the edge to enable efficient pagination, this shortcut cannot be used, and the
   * full "{ edges { node } }" version should be used instead.
   */
  starships?: Maybe<Array<Maybe<Starship>>>;
};

/** An edge in a connection. */
export type StarshipsEdge = {
  /** The item at the end of the edge */
  node?: Maybe<Starship>;
  /** A cursor for use in pagination */
  cursor: Scalars['String'];
};

/** A connection to a list of items. */
export type VehiclesConnection = {
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
  /** A list of edges. */
  edges?: Maybe<Array<Maybe<VehiclesEdge>>>;
  /**
   * A count of the total number of objects in this connection, ignoring pagination.
   * This allows a client to fetch the first five objects by passing "5" as the
   * argument to "first", then fetch the total count so it could display "5 of 83",
   * for example.
   */
  totalCount?: Maybe<Scalars['Int']>;
  /**
   * A list of all of the objects returned in the connection. This is a convenience
   * field provided for quickly exploring the API; rather than querying for
   * "{ edges { node } }" when no edge data is needed, this field can be be used
   * instead. Note that when clients like Relay need to fetch the "cursor" field on
   * the edge to enable efficient pagination, this shortcut cannot be used, and the
   * full "{ edges { node } }" version should be used instead.
   */
  vehicles?: Maybe<Array<Maybe<Vehicle>>>;
};

/** An edge in a connection. */
export type VehiclesEdge = {
  /** The item at the end of the edge */
  node?: Maybe<Vehicle>;
  /** A cursor for use in pagination */
  cursor: Scalars['String'];
};

export type WithIndex<TObject> = TObject & Record<string, any>;
export type ResolversObject<TObject> = WithIndex<TObject>;

export type ResolverTypeWrapper<T> = Promise<T> | T;


export type ResolverWithResolve<TResult, TParent, TContext, TArgs> = {
  resolve: ResolverFn<TResult, TParent, TContext, TArgs>;
};

export type LegacyStitchingResolver<TResult, TParent, TContext, TArgs> = {
  fragment: string;
  resolve: ResolverFn<TResult, TParent, TContext, TArgs>;
};

export type NewStitchingResolver<TResult, TParent, TContext, TArgs> = {
  selectionSet: string | ((fieldNode: FieldNode) => SelectionSetNode);
  resolve: ResolverFn<TResult, TParent, TContext, TArgs>;
};
export type StitchingResolver<TResult, TParent, TContext, TArgs> = LegacyStitchingResolver<TResult, TParent, TContext, TArgs> | NewStitchingResolver<TResult, TParent, TContext, TArgs>;
export type Resolver<TResult, TParent = {}, TContext = {}, TArgs = {}> =
  | ResolverFn<TResult, TParent, TContext, TArgs>
  | ResolverWithResolve<TResult, TParent, TContext, TArgs>
  | StitchingResolver<TResult, TParent, TContext, TArgs>;

export type ResolverFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => Promise<TResult> | TResult;

export type SubscriptionSubscribeFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => AsyncIterable<TResult> | Promise<AsyncIterable<TResult>>;

export type SubscriptionResolveFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => TResult | Promise<TResult>;

export interface SubscriptionSubscriberObject<TResult, TKey extends string, TParent, TContext, TArgs> {
  subscribe: SubscriptionSubscribeFn<{ [key in TKey]: TResult }, TParent, TContext, TArgs>;
  resolve?: SubscriptionResolveFn<TResult, { [key in TKey]: TResult }, TContext, TArgs>;
}

export interface SubscriptionResolverObject<TResult, TParent, TContext, TArgs> {
  subscribe: SubscriptionSubscribeFn<any, TParent, TContext, TArgs>;
  resolve: SubscriptionResolveFn<TResult, any, TContext, TArgs>;
}

export type SubscriptionObject<TResult, TKey extends string, TParent, TContext, TArgs> =
  | SubscriptionSubscriberObject<TResult, TKey, TParent, TContext, TArgs>
  | SubscriptionResolverObject<TResult, TParent, TContext, TArgs>;

export type SubscriptionResolver<TResult, TKey extends string, TParent = {}, TContext = {}, TArgs = {}> =
  | ((...args: any[]) => SubscriptionObject<TResult, TKey, TParent, TContext, TArgs>)
  | SubscriptionObject<TResult, TKey, TParent, TContext, TArgs>;

export type TypeResolveFn<TTypes, TParent = {}, TContext = {}> = (
  parent: TParent,
  context: TContext,
  info: GraphQLResolveInfo
) => Maybe<TTypes> | Promise<Maybe<TTypes>>;

export type IsTypeOfResolverFn<T = {}, TContext = {}> = (obj: T, context: TContext, info: GraphQLResolveInfo) => boolean | Promise<boolean>;

export type NextResolverFn<T> = () => Promise<T>;

export type DirectiveResolverFn<TResult = {}, TParent = {}, TContext = {}, TArgs = {}> = (
  next: NextResolverFn<TResult>,
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => TResult | Promise<TResult>;

/** Mapping between all available schema types and the resolvers types */
export type ResolversTypes = ResolversObject<{
  Root: ResolverTypeWrapper<{}>;
  String: ResolverTypeWrapper<Scalars['String']>;
  Int: ResolverTypeWrapper<Scalars['Int']>;
  FilmsConnection: ResolverTypeWrapper<FilmsConnection>;
  PageInfo: ResolverTypeWrapper<PageInfo>;
  Boolean: ResolverTypeWrapper<Scalars['Boolean']>;
  FilmsEdge: ResolverTypeWrapper<FilmsEdge>;
  Film: ResolverTypeWrapper<Film>;
  Node: ResolversTypes['Film'] | ResolversTypes['Species'] | ResolversTypes['Planet'] | ResolversTypes['Person'] | ResolversTypes['Starship'] | ResolversTypes['Vehicle'];
  ID: ResolverTypeWrapper<Scalars['ID']>;
  FilmSpeciesConnection: ResolverTypeWrapper<FilmSpeciesConnection>;
  FilmSpeciesEdge: ResolverTypeWrapper<FilmSpeciesEdge>;
  Species: ResolverTypeWrapper<Species>;
  Float: ResolverTypeWrapper<Scalars['Float']>;
  Planet: ResolverTypeWrapper<Planet>;
  PlanetResidentsConnection: ResolverTypeWrapper<PlanetResidentsConnection>;
  PlanetResidentsEdge: ResolverTypeWrapper<PlanetResidentsEdge>;
  Person: ResolverTypeWrapper<Person>;
  PersonFilmsConnection: ResolverTypeWrapper<PersonFilmsConnection>;
  PersonFilmsEdge: ResolverTypeWrapper<PersonFilmsEdge>;
  PersonStarshipsConnection: ResolverTypeWrapper<PersonStarshipsConnection>;
  PersonStarshipsEdge: ResolverTypeWrapper<PersonStarshipsEdge>;
  Starship: ResolverTypeWrapper<Starship>;
  StarshipPilotsConnection: ResolverTypeWrapper<StarshipPilotsConnection>;
  StarshipPilotsEdge: ResolverTypeWrapper<StarshipPilotsEdge>;
  StarshipFilmsConnection: ResolverTypeWrapper<StarshipFilmsConnection>;
  StarshipFilmsEdge: ResolverTypeWrapper<StarshipFilmsEdge>;
  PersonVehiclesConnection: ResolverTypeWrapper<PersonVehiclesConnection>;
  PersonVehiclesEdge: ResolverTypeWrapper<PersonVehiclesEdge>;
  Vehicle: ResolverTypeWrapper<Vehicle>;
  VehiclePilotsConnection: ResolverTypeWrapper<VehiclePilotsConnection>;
  VehiclePilotsEdge: ResolverTypeWrapper<VehiclePilotsEdge>;
  VehicleFilmsConnection: ResolverTypeWrapper<VehicleFilmsConnection>;
  VehicleFilmsEdge: ResolverTypeWrapper<VehicleFilmsEdge>;
  PlanetFilmsConnection: ResolverTypeWrapper<PlanetFilmsConnection>;
  PlanetFilmsEdge: ResolverTypeWrapper<PlanetFilmsEdge>;
  SpeciesPeopleConnection: ResolverTypeWrapper<SpeciesPeopleConnection>;
  SpeciesPeopleEdge: ResolverTypeWrapper<SpeciesPeopleEdge>;
  SpeciesFilmsConnection: ResolverTypeWrapper<SpeciesFilmsConnection>;
  SpeciesFilmsEdge: ResolverTypeWrapper<SpeciesFilmsEdge>;
  FilmStarshipsConnection: ResolverTypeWrapper<FilmStarshipsConnection>;
  FilmStarshipsEdge: ResolverTypeWrapper<FilmStarshipsEdge>;
  FilmVehiclesConnection: ResolverTypeWrapper<FilmVehiclesConnection>;
  FilmVehiclesEdge: ResolverTypeWrapper<FilmVehiclesEdge>;
  FilmCharactersConnection: ResolverTypeWrapper<FilmCharactersConnection>;
  FilmCharactersEdge: ResolverTypeWrapper<FilmCharactersEdge>;
  FilmPlanetsConnection: ResolverTypeWrapper<FilmPlanetsConnection>;
  FilmPlanetsEdge: ResolverTypeWrapper<FilmPlanetsEdge>;
  PeopleConnection: ResolverTypeWrapper<PeopleConnection>;
  PeopleEdge: ResolverTypeWrapper<PeopleEdge>;
  PlanetsConnection: ResolverTypeWrapper<PlanetsConnection>;
  PlanetsEdge: ResolverTypeWrapper<PlanetsEdge>;
  SpeciesConnection: ResolverTypeWrapper<SpeciesConnection>;
  SpeciesEdge: ResolverTypeWrapper<SpeciesEdge>;
  StarshipsConnection: ResolverTypeWrapper<StarshipsConnection>;
  StarshipsEdge: ResolverTypeWrapper<StarshipsEdge>;
  VehiclesConnection: ResolverTypeWrapper<VehiclesConnection>;
  VehiclesEdge: ResolverTypeWrapper<VehiclesEdge>;
}>;

/** Mapping between all available schema types and the resolvers parents */
export type ResolversParentTypes = ResolversObject<{
  Root: {};
  String: Scalars['String'];
  Int: Scalars['Int'];
  FilmsConnection: FilmsConnection;
  PageInfo: PageInfo;
  Boolean: Scalars['Boolean'];
  FilmsEdge: FilmsEdge;
  Film: Film;
  Node: ResolversParentTypes['Film'] | ResolversParentTypes['Species'] | ResolversParentTypes['Planet'] | ResolversParentTypes['Person'] | ResolversParentTypes['Starship'] | ResolversParentTypes['Vehicle'];
  ID: Scalars['ID'];
  FilmSpeciesConnection: FilmSpeciesConnection;
  FilmSpeciesEdge: FilmSpeciesEdge;
  Species: Species;
  Float: Scalars['Float'];
  Planet: Planet;
  PlanetResidentsConnection: PlanetResidentsConnection;
  PlanetResidentsEdge: PlanetResidentsEdge;
  Person: Person;
  PersonFilmsConnection: PersonFilmsConnection;
  PersonFilmsEdge: PersonFilmsEdge;
  PersonStarshipsConnection: PersonStarshipsConnection;
  PersonStarshipsEdge: PersonStarshipsEdge;
  Starship: Starship;
  StarshipPilotsConnection: StarshipPilotsConnection;
  StarshipPilotsEdge: StarshipPilotsEdge;
  StarshipFilmsConnection: StarshipFilmsConnection;
  StarshipFilmsEdge: StarshipFilmsEdge;
  PersonVehiclesConnection: PersonVehiclesConnection;
  PersonVehiclesEdge: PersonVehiclesEdge;
  Vehicle: Vehicle;
  VehiclePilotsConnection: VehiclePilotsConnection;
  VehiclePilotsEdge: VehiclePilotsEdge;
  VehicleFilmsConnection: VehicleFilmsConnection;
  VehicleFilmsEdge: VehicleFilmsEdge;
  PlanetFilmsConnection: PlanetFilmsConnection;
  PlanetFilmsEdge: PlanetFilmsEdge;
  SpeciesPeopleConnection: SpeciesPeopleConnection;
  SpeciesPeopleEdge: SpeciesPeopleEdge;
  SpeciesFilmsConnection: SpeciesFilmsConnection;
  SpeciesFilmsEdge: SpeciesFilmsEdge;
  FilmStarshipsConnection: FilmStarshipsConnection;
  FilmStarshipsEdge: FilmStarshipsEdge;
  FilmVehiclesConnection: FilmVehiclesConnection;
  FilmVehiclesEdge: FilmVehiclesEdge;
  FilmCharactersConnection: FilmCharactersConnection;
  FilmCharactersEdge: FilmCharactersEdge;
  FilmPlanetsConnection: FilmPlanetsConnection;
  FilmPlanetsEdge: FilmPlanetsEdge;
  PeopleConnection: PeopleConnection;
  PeopleEdge: PeopleEdge;
  PlanetsConnection: PlanetsConnection;
  PlanetsEdge: PlanetsEdge;
  SpeciesConnection: SpeciesConnection;
  SpeciesEdge: SpeciesEdge;
  StarshipsConnection: StarshipsConnection;
  StarshipsEdge: StarshipsEdge;
  VehiclesConnection: VehiclesConnection;
  VehiclesEdge: VehiclesEdge;
}>;

export type RootResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['Root'] = ResolversParentTypes['Root']> = ResolversObject<{
  allFilms?: Resolver<Maybe<ResolversTypes['FilmsConnection']>, ParentType, ContextType, Partial<RootallFilmsArgs>>;
  film?: Resolver<Maybe<ResolversTypes['Film']>, ParentType, ContextType, Partial<RootfilmArgs>>;
  allPeople?: Resolver<Maybe<ResolversTypes['PeopleConnection']>, ParentType, ContextType, Partial<RootallPeopleArgs>>;
  person?: Resolver<Maybe<ResolversTypes['Person']>, ParentType, ContextType, Partial<RootpersonArgs>>;
  allPlanets?: Resolver<Maybe<ResolversTypes['PlanetsConnection']>, ParentType, ContextType, Partial<RootallPlanetsArgs>>;
  planet?: Resolver<Maybe<ResolversTypes['Planet']>, ParentType, ContextType, Partial<RootplanetArgs>>;
  allSpecies?: Resolver<Maybe<ResolversTypes['SpeciesConnection']>, ParentType, ContextType, Partial<RootallSpeciesArgs>>;
  species?: Resolver<Maybe<ResolversTypes['Species']>, ParentType, ContextType, Partial<RootspeciesArgs>>;
  allStarships?: Resolver<Maybe<ResolversTypes['StarshipsConnection']>, ParentType, ContextType, Partial<RootallStarshipsArgs>>;
  starship?: Resolver<Maybe<ResolversTypes['Starship']>, ParentType, ContextType, Partial<RootstarshipArgs>>;
  allVehicles?: Resolver<Maybe<ResolversTypes['VehiclesConnection']>, ParentType, ContextType, Partial<RootallVehiclesArgs>>;
  vehicle?: Resolver<Maybe<ResolversTypes['Vehicle']>, ParentType, ContextType, Partial<RootvehicleArgs>>;
  node?: Resolver<Maybe<ResolversTypes['Node']>, ParentType, ContextType, RequireFields<RootnodeArgs, 'id'>>;
}>;

export type FilmsConnectionResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['FilmsConnection'] = ResolversParentTypes['FilmsConnection']> = ResolversObject<{
  pageInfo?: Resolver<ResolversTypes['PageInfo'], ParentType, ContextType>;
  edges?: Resolver<Maybe<Array<Maybe<ResolversTypes['FilmsEdge']>>>, ParentType, ContextType>;
  totalCount?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  films?: Resolver<Maybe<Array<Maybe<ResolversTypes['Film']>>>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type PageInfoResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['PageInfo'] = ResolversParentTypes['PageInfo']> = ResolversObject<{
  hasNextPage?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  hasPreviousPage?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  startCursor?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  endCursor?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type FilmsEdgeResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['FilmsEdge'] = ResolversParentTypes['FilmsEdge']> = ResolversObject<{
  node?: Resolver<Maybe<ResolversTypes['Film']>, ParentType, ContextType>;
  cursor?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type FilmResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['Film'] = ResolversParentTypes['Film']> = ResolversObject<{
  title?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  episodeID?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  openingCrawl?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  director?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  producers?: Resolver<Maybe<Array<Maybe<ResolversTypes['String']>>>, ParentType, ContextType>;
  releaseDate?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  speciesConnection?: Resolver<Maybe<ResolversTypes['FilmSpeciesConnection']>, ParentType, ContextType, Partial<FilmspeciesConnectionArgs>>;
  starshipConnection?: Resolver<Maybe<ResolversTypes['FilmStarshipsConnection']>, ParentType, ContextType, Partial<FilmstarshipConnectionArgs>>;
  vehicleConnection?: Resolver<Maybe<ResolversTypes['FilmVehiclesConnection']>, ParentType, ContextType, Partial<FilmvehicleConnectionArgs>>;
  characterConnection?: Resolver<Maybe<ResolversTypes['FilmCharactersConnection']>, ParentType, ContextType, Partial<FilmcharacterConnectionArgs>>;
  planetConnection?: Resolver<Maybe<ResolversTypes['FilmPlanetsConnection']>, ParentType, ContextType, Partial<FilmplanetConnectionArgs>>;
  created?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  edited?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type NodeResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['Node'] = ResolversParentTypes['Node']> = ResolversObject<{
  __resolveType: TypeResolveFn<'Film' | 'Species' | 'Planet' | 'Person' | 'Starship' | 'Vehicle', ParentType, ContextType>;
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
}>;

export type FilmSpeciesConnectionResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['FilmSpeciesConnection'] = ResolversParentTypes['FilmSpeciesConnection']> = ResolversObject<{
  pageInfo?: Resolver<ResolversTypes['PageInfo'], ParentType, ContextType>;
  edges?: Resolver<Maybe<Array<Maybe<ResolversTypes['FilmSpeciesEdge']>>>, ParentType, ContextType>;
  totalCount?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  species?: Resolver<Maybe<Array<Maybe<ResolversTypes['Species']>>>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type FilmSpeciesEdgeResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['FilmSpeciesEdge'] = ResolversParentTypes['FilmSpeciesEdge']> = ResolversObject<{
  node?: Resolver<Maybe<ResolversTypes['Species']>, ParentType, ContextType>;
  cursor?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type SpeciesResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['Species'] = ResolversParentTypes['Species']> = ResolversObject<{
  name?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  classification?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  designation?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  averageHeight?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  averageLifespan?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  eyeColors?: Resolver<Maybe<Array<Maybe<ResolversTypes['String']>>>, ParentType, ContextType>;
  hairColors?: Resolver<Maybe<Array<Maybe<ResolversTypes['String']>>>, ParentType, ContextType>;
  skinColors?: Resolver<Maybe<Array<Maybe<ResolversTypes['String']>>>, ParentType, ContextType>;
  language?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  homeworld?: Resolver<Maybe<ResolversTypes['Planet']>, ParentType, ContextType>;
  personConnection?: Resolver<Maybe<ResolversTypes['SpeciesPeopleConnection']>, ParentType, ContextType, Partial<SpeciespersonConnectionArgs>>;
  filmConnection?: Resolver<Maybe<ResolversTypes['SpeciesFilmsConnection']>, ParentType, ContextType, Partial<SpeciesfilmConnectionArgs>>;
  created?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  edited?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type PlanetResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['Planet'] = ResolversParentTypes['Planet']> = ResolversObject<{
  name?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  diameter?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  rotationPeriod?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  orbitalPeriod?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  gravity?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  population?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  climates?: Resolver<Maybe<Array<Maybe<ResolversTypes['String']>>>, ParentType, ContextType>;
  terrains?: Resolver<Maybe<Array<Maybe<ResolversTypes['String']>>>, ParentType, ContextType>;
  surfaceWater?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  residentConnection?: Resolver<Maybe<ResolversTypes['PlanetResidentsConnection']>, ParentType, ContextType, Partial<PlanetresidentConnectionArgs>>;
  filmConnection?: Resolver<Maybe<ResolversTypes['PlanetFilmsConnection']>, ParentType, ContextType, Partial<PlanetfilmConnectionArgs>>;
  created?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  edited?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type PlanetResidentsConnectionResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['PlanetResidentsConnection'] = ResolversParentTypes['PlanetResidentsConnection']> = ResolversObject<{
  pageInfo?: Resolver<ResolversTypes['PageInfo'], ParentType, ContextType>;
  edges?: Resolver<Maybe<Array<Maybe<ResolversTypes['PlanetResidentsEdge']>>>, ParentType, ContextType>;
  totalCount?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  residents?: Resolver<Maybe<Array<Maybe<ResolversTypes['Person']>>>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type PlanetResidentsEdgeResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['PlanetResidentsEdge'] = ResolversParentTypes['PlanetResidentsEdge']> = ResolversObject<{
  node?: Resolver<Maybe<ResolversTypes['Person']>, ParentType, ContextType>;
  cursor?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type PersonResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['Person'] = ResolversParentTypes['Person']> = ResolversObject<{
  name?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  birthYear?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  eyeColor?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  gender?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  hairColor?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  height?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  mass?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  skinColor?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  homeworld?: Resolver<Maybe<ResolversTypes['Planet']>, ParentType, ContextType>;
  filmConnection?: Resolver<Maybe<ResolversTypes['PersonFilmsConnection']>, ParentType, ContextType, Partial<PersonfilmConnectionArgs>>;
  species?: Resolver<Maybe<ResolversTypes['Species']>, ParentType, ContextType>;
  starshipConnection?: Resolver<Maybe<ResolversTypes['PersonStarshipsConnection']>, ParentType, ContextType, Partial<PersonstarshipConnectionArgs>>;
  vehicleConnection?: Resolver<Maybe<ResolversTypes['PersonVehiclesConnection']>, ParentType, ContextType, Partial<PersonvehicleConnectionArgs>>;
  created?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  edited?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type PersonFilmsConnectionResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['PersonFilmsConnection'] = ResolversParentTypes['PersonFilmsConnection']> = ResolversObject<{
  pageInfo?: Resolver<ResolversTypes['PageInfo'], ParentType, ContextType>;
  edges?: Resolver<Maybe<Array<Maybe<ResolversTypes['PersonFilmsEdge']>>>, ParentType, ContextType>;
  totalCount?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  films?: Resolver<Maybe<Array<Maybe<ResolversTypes['Film']>>>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type PersonFilmsEdgeResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['PersonFilmsEdge'] = ResolversParentTypes['PersonFilmsEdge']> = ResolversObject<{
  node?: Resolver<Maybe<ResolversTypes['Film']>, ParentType, ContextType>;
  cursor?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type PersonStarshipsConnectionResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['PersonStarshipsConnection'] = ResolversParentTypes['PersonStarshipsConnection']> = ResolversObject<{
  pageInfo?: Resolver<ResolversTypes['PageInfo'], ParentType, ContextType>;
  edges?: Resolver<Maybe<Array<Maybe<ResolversTypes['PersonStarshipsEdge']>>>, ParentType, ContextType>;
  totalCount?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  starships?: Resolver<Maybe<Array<Maybe<ResolversTypes['Starship']>>>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type PersonStarshipsEdgeResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['PersonStarshipsEdge'] = ResolversParentTypes['PersonStarshipsEdge']> = ResolversObject<{
  node?: Resolver<Maybe<ResolversTypes['Starship']>, ParentType, ContextType>;
  cursor?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type StarshipResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['Starship'] = ResolversParentTypes['Starship']> = ResolversObject<{
  name?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  model?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  starshipClass?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  manufacturers?: Resolver<Maybe<Array<Maybe<ResolversTypes['String']>>>, ParentType, ContextType>;
  costInCredits?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  length?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  crew?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  passengers?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  maxAtmospheringSpeed?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  hyperdriveRating?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  MGLT?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  cargoCapacity?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  consumables?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  pilotConnection?: Resolver<Maybe<ResolversTypes['StarshipPilotsConnection']>, ParentType, ContextType, Partial<StarshippilotConnectionArgs>>;
  filmConnection?: Resolver<Maybe<ResolversTypes['StarshipFilmsConnection']>, ParentType, ContextType, Partial<StarshipfilmConnectionArgs>>;
  created?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  edited?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type StarshipPilotsConnectionResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['StarshipPilotsConnection'] = ResolversParentTypes['StarshipPilotsConnection']> = ResolversObject<{
  pageInfo?: Resolver<ResolversTypes['PageInfo'], ParentType, ContextType>;
  edges?: Resolver<Maybe<Array<Maybe<ResolversTypes['StarshipPilotsEdge']>>>, ParentType, ContextType>;
  totalCount?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  pilots?: Resolver<Maybe<Array<Maybe<ResolversTypes['Person']>>>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type StarshipPilotsEdgeResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['StarshipPilotsEdge'] = ResolversParentTypes['StarshipPilotsEdge']> = ResolversObject<{
  node?: Resolver<Maybe<ResolversTypes['Person']>, ParentType, ContextType>;
  cursor?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type StarshipFilmsConnectionResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['StarshipFilmsConnection'] = ResolversParentTypes['StarshipFilmsConnection']> = ResolversObject<{
  pageInfo?: Resolver<ResolversTypes['PageInfo'], ParentType, ContextType>;
  edges?: Resolver<Maybe<Array<Maybe<ResolversTypes['StarshipFilmsEdge']>>>, ParentType, ContextType>;
  totalCount?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  films?: Resolver<Maybe<Array<Maybe<ResolversTypes['Film']>>>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type StarshipFilmsEdgeResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['StarshipFilmsEdge'] = ResolversParentTypes['StarshipFilmsEdge']> = ResolversObject<{
  node?: Resolver<Maybe<ResolversTypes['Film']>, ParentType, ContextType>;
  cursor?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type PersonVehiclesConnectionResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['PersonVehiclesConnection'] = ResolversParentTypes['PersonVehiclesConnection']> = ResolversObject<{
  pageInfo?: Resolver<ResolversTypes['PageInfo'], ParentType, ContextType>;
  edges?: Resolver<Maybe<Array<Maybe<ResolversTypes['PersonVehiclesEdge']>>>, ParentType, ContextType>;
  totalCount?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  vehicles?: Resolver<Maybe<Array<Maybe<ResolversTypes['Vehicle']>>>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type PersonVehiclesEdgeResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['PersonVehiclesEdge'] = ResolversParentTypes['PersonVehiclesEdge']> = ResolversObject<{
  node?: Resolver<Maybe<ResolversTypes['Vehicle']>, ParentType, ContextType>;
  cursor?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type VehicleResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['Vehicle'] = ResolversParentTypes['Vehicle']> = ResolversObject<{
  name?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  model?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  vehicleClass?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  manufacturers?: Resolver<Maybe<Array<Maybe<ResolversTypes['String']>>>, ParentType, ContextType>;
  costInCredits?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  length?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  crew?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  passengers?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  maxAtmospheringSpeed?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  cargoCapacity?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  consumables?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  pilotConnection?: Resolver<Maybe<ResolversTypes['VehiclePilotsConnection']>, ParentType, ContextType, Partial<VehiclepilotConnectionArgs>>;
  filmConnection?: Resolver<Maybe<ResolversTypes['VehicleFilmsConnection']>, ParentType, ContextType, Partial<VehiclefilmConnectionArgs>>;
  created?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  edited?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type VehiclePilotsConnectionResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['VehiclePilotsConnection'] = ResolversParentTypes['VehiclePilotsConnection']> = ResolversObject<{
  pageInfo?: Resolver<ResolversTypes['PageInfo'], ParentType, ContextType>;
  edges?: Resolver<Maybe<Array<Maybe<ResolversTypes['VehiclePilotsEdge']>>>, ParentType, ContextType>;
  totalCount?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  pilots?: Resolver<Maybe<Array<Maybe<ResolversTypes['Person']>>>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type VehiclePilotsEdgeResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['VehiclePilotsEdge'] = ResolversParentTypes['VehiclePilotsEdge']> = ResolversObject<{
  node?: Resolver<Maybe<ResolversTypes['Person']>, ParentType, ContextType>;
  cursor?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type VehicleFilmsConnectionResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['VehicleFilmsConnection'] = ResolversParentTypes['VehicleFilmsConnection']> = ResolversObject<{
  pageInfo?: Resolver<ResolversTypes['PageInfo'], ParentType, ContextType>;
  edges?: Resolver<Maybe<Array<Maybe<ResolversTypes['VehicleFilmsEdge']>>>, ParentType, ContextType>;
  totalCount?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  films?: Resolver<Maybe<Array<Maybe<ResolversTypes['Film']>>>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type VehicleFilmsEdgeResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['VehicleFilmsEdge'] = ResolversParentTypes['VehicleFilmsEdge']> = ResolversObject<{
  node?: Resolver<Maybe<ResolversTypes['Film']>, ParentType, ContextType>;
  cursor?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type PlanetFilmsConnectionResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['PlanetFilmsConnection'] = ResolversParentTypes['PlanetFilmsConnection']> = ResolversObject<{
  pageInfo?: Resolver<ResolversTypes['PageInfo'], ParentType, ContextType>;
  edges?: Resolver<Maybe<Array<Maybe<ResolversTypes['PlanetFilmsEdge']>>>, ParentType, ContextType>;
  totalCount?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  films?: Resolver<Maybe<Array<Maybe<ResolversTypes['Film']>>>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type PlanetFilmsEdgeResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['PlanetFilmsEdge'] = ResolversParentTypes['PlanetFilmsEdge']> = ResolversObject<{
  node?: Resolver<Maybe<ResolversTypes['Film']>, ParentType, ContextType>;
  cursor?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type SpeciesPeopleConnectionResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['SpeciesPeopleConnection'] = ResolversParentTypes['SpeciesPeopleConnection']> = ResolversObject<{
  pageInfo?: Resolver<ResolversTypes['PageInfo'], ParentType, ContextType>;
  edges?: Resolver<Maybe<Array<Maybe<ResolversTypes['SpeciesPeopleEdge']>>>, ParentType, ContextType>;
  totalCount?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  people?: Resolver<Maybe<Array<Maybe<ResolversTypes['Person']>>>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type SpeciesPeopleEdgeResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['SpeciesPeopleEdge'] = ResolversParentTypes['SpeciesPeopleEdge']> = ResolversObject<{
  node?: Resolver<Maybe<ResolversTypes['Person']>, ParentType, ContextType>;
  cursor?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type SpeciesFilmsConnectionResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['SpeciesFilmsConnection'] = ResolversParentTypes['SpeciesFilmsConnection']> = ResolversObject<{
  pageInfo?: Resolver<ResolversTypes['PageInfo'], ParentType, ContextType>;
  edges?: Resolver<Maybe<Array<Maybe<ResolversTypes['SpeciesFilmsEdge']>>>, ParentType, ContextType>;
  totalCount?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  films?: Resolver<Maybe<Array<Maybe<ResolversTypes['Film']>>>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type SpeciesFilmsEdgeResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['SpeciesFilmsEdge'] = ResolversParentTypes['SpeciesFilmsEdge']> = ResolversObject<{
  node?: Resolver<Maybe<ResolversTypes['Film']>, ParentType, ContextType>;
  cursor?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type FilmStarshipsConnectionResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['FilmStarshipsConnection'] = ResolversParentTypes['FilmStarshipsConnection']> = ResolversObject<{
  pageInfo?: Resolver<ResolversTypes['PageInfo'], ParentType, ContextType>;
  edges?: Resolver<Maybe<Array<Maybe<ResolversTypes['FilmStarshipsEdge']>>>, ParentType, ContextType>;
  totalCount?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  starships?: Resolver<Maybe<Array<Maybe<ResolversTypes['Starship']>>>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type FilmStarshipsEdgeResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['FilmStarshipsEdge'] = ResolversParentTypes['FilmStarshipsEdge']> = ResolversObject<{
  node?: Resolver<Maybe<ResolversTypes['Starship']>, ParentType, ContextType>;
  cursor?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type FilmVehiclesConnectionResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['FilmVehiclesConnection'] = ResolversParentTypes['FilmVehiclesConnection']> = ResolversObject<{
  pageInfo?: Resolver<ResolversTypes['PageInfo'], ParentType, ContextType>;
  edges?: Resolver<Maybe<Array<Maybe<ResolversTypes['FilmVehiclesEdge']>>>, ParentType, ContextType>;
  totalCount?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  vehicles?: Resolver<Maybe<Array<Maybe<ResolversTypes['Vehicle']>>>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type FilmVehiclesEdgeResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['FilmVehiclesEdge'] = ResolversParentTypes['FilmVehiclesEdge']> = ResolversObject<{
  node?: Resolver<Maybe<ResolversTypes['Vehicle']>, ParentType, ContextType>;
  cursor?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type FilmCharactersConnectionResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['FilmCharactersConnection'] = ResolversParentTypes['FilmCharactersConnection']> = ResolversObject<{
  pageInfo?: Resolver<ResolversTypes['PageInfo'], ParentType, ContextType>;
  edges?: Resolver<Maybe<Array<Maybe<ResolversTypes['FilmCharactersEdge']>>>, ParentType, ContextType>;
  totalCount?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  characters?: Resolver<Maybe<Array<Maybe<ResolversTypes['Person']>>>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type FilmCharactersEdgeResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['FilmCharactersEdge'] = ResolversParentTypes['FilmCharactersEdge']> = ResolversObject<{
  node?: Resolver<Maybe<ResolversTypes['Person']>, ParentType, ContextType>;
  cursor?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type FilmPlanetsConnectionResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['FilmPlanetsConnection'] = ResolversParentTypes['FilmPlanetsConnection']> = ResolversObject<{
  pageInfo?: Resolver<ResolversTypes['PageInfo'], ParentType, ContextType>;
  edges?: Resolver<Maybe<Array<Maybe<ResolversTypes['FilmPlanetsEdge']>>>, ParentType, ContextType>;
  totalCount?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  planets?: Resolver<Maybe<Array<Maybe<ResolversTypes['Planet']>>>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type FilmPlanetsEdgeResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['FilmPlanetsEdge'] = ResolversParentTypes['FilmPlanetsEdge']> = ResolversObject<{
  node?: Resolver<Maybe<ResolversTypes['Planet']>, ParentType, ContextType>;
  cursor?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type PeopleConnectionResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['PeopleConnection'] = ResolversParentTypes['PeopleConnection']> = ResolversObject<{
  pageInfo?: Resolver<ResolversTypes['PageInfo'], ParentType, ContextType>;
  edges?: Resolver<Maybe<Array<Maybe<ResolversTypes['PeopleEdge']>>>, ParentType, ContextType>;
  totalCount?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  people?: Resolver<Maybe<Array<Maybe<ResolversTypes['Person']>>>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type PeopleEdgeResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['PeopleEdge'] = ResolversParentTypes['PeopleEdge']> = ResolversObject<{
  node?: Resolver<Maybe<ResolversTypes['Person']>, ParentType, ContextType>;
  cursor?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type PlanetsConnectionResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['PlanetsConnection'] = ResolversParentTypes['PlanetsConnection']> = ResolversObject<{
  pageInfo?: Resolver<ResolversTypes['PageInfo'], ParentType, ContextType>;
  edges?: Resolver<Maybe<Array<Maybe<ResolversTypes['PlanetsEdge']>>>, ParentType, ContextType>;
  totalCount?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  planets?: Resolver<Maybe<Array<Maybe<ResolversTypes['Planet']>>>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type PlanetsEdgeResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['PlanetsEdge'] = ResolversParentTypes['PlanetsEdge']> = ResolversObject<{
  node?: Resolver<Maybe<ResolversTypes['Planet']>, ParentType, ContextType>;
  cursor?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type SpeciesConnectionResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['SpeciesConnection'] = ResolversParentTypes['SpeciesConnection']> = ResolversObject<{
  pageInfo?: Resolver<ResolversTypes['PageInfo'], ParentType, ContextType>;
  edges?: Resolver<Maybe<Array<Maybe<ResolversTypes['SpeciesEdge']>>>, ParentType, ContextType>;
  totalCount?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  species?: Resolver<Maybe<Array<Maybe<ResolversTypes['Species']>>>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type SpeciesEdgeResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['SpeciesEdge'] = ResolversParentTypes['SpeciesEdge']> = ResolversObject<{
  node?: Resolver<Maybe<ResolversTypes['Species']>, ParentType, ContextType>;
  cursor?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type StarshipsConnectionResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['StarshipsConnection'] = ResolversParentTypes['StarshipsConnection']> = ResolversObject<{
  pageInfo?: Resolver<ResolversTypes['PageInfo'], ParentType, ContextType>;
  edges?: Resolver<Maybe<Array<Maybe<ResolversTypes['StarshipsEdge']>>>, ParentType, ContextType>;
  totalCount?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  starships?: Resolver<Maybe<Array<Maybe<ResolversTypes['Starship']>>>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type StarshipsEdgeResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['StarshipsEdge'] = ResolversParentTypes['StarshipsEdge']> = ResolversObject<{
  node?: Resolver<Maybe<ResolversTypes['Starship']>, ParentType, ContextType>;
  cursor?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type VehiclesConnectionResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['VehiclesConnection'] = ResolversParentTypes['VehiclesConnection']> = ResolversObject<{
  pageInfo?: Resolver<ResolversTypes['PageInfo'], ParentType, ContextType>;
  edges?: Resolver<Maybe<Array<Maybe<ResolversTypes['VehiclesEdge']>>>, ParentType, ContextType>;
  totalCount?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  vehicles?: Resolver<Maybe<Array<Maybe<ResolversTypes['Vehicle']>>>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type VehiclesEdgeResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['VehiclesEdge'] = ResolversParentTypes['VehiclesEdge']> = ResolversObject<{
  node?: Resolver<Maybe<ResolversTypes['Vehicle']>, ParentType, ContextType>;
  cursor?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type Resolvers<ContextType = MeshContext> = ResolversObject<{
  Root?: RootResolvers<ContextType>;
  FilmsConnection?: FilmsConnectionResolvers<ContextType>;
  PageInfo?: PageInfoResolvers<ContextType>;
  FilmsEdge?: FilmsEdgeResolvers<ContextType>;
  Film?: FilmResolvers<ContextType>;
  Node?: NodeResolvers<ContextType>;
  FilmSpeciesConnection?: FilmSpeciesConnectionResolvers<ContextType>;
  FilmSpeciesEdge?: FilmSpeciesEdgeResolvers<ContextType>;
  Species?: SpeciesResolvers<ContextType>;
  Planet?: PlanetResolvers<ContextType>;
  PlanetResidentsConnection?: PlanetResidentsConnectionResolvers<ContextType>;
  PlanetResidentsEdge?: PlanetResidentsEdgeResolvers<ContextType>;
  Person?: PersonResolvers<ContextType>;
  PersonFilmsConnection?: PersonFilmsConnectionResolvers<ContextType>;
  PersonFilmsEdge?: PersonFilmsEdgeResolvers<ContextType>;
  PersonStarshipsConnection?: PersonStarshipsConnectionResolvers<ContextType>;
  PersonStarshipsEdge?: PersonStarshipsEdgeResolvers<ContextType>;
  Starship?: StarshipResolvers<ContextType>;
  StarshipPilotsConnection?: StarshipPilotsConnectionResolvers<ContextType>;
  StarshipPilotsEdge?: StarshipPilotsEdgeResolvers<ContextType>;
  StarshipFilmsConnection?: StarshipFilmsConnectionResolvers<ContextType>;
  StarshipFilmsEdge?: StarshipFilmsEdgeResolvers<ContextType>;
  PersonVehiclesConnection?: PersonVehiclesConnectionResolvers<ContextType>;
  PersonVehiclesEdge?: PersonVehiclesEdgeResolvers<ContextType>;
  Vehicle?: VehicleResolvers<ContextType>;
  VehiclePilotsConnection?: VehiclePilotsConnectionResolvers<ContextType>;
  VehiclePilotsEdge?: VehiclePilotsEdgeResolvers<ContextType>;
  VehicleFilmsConnection?: VehicleFilmsConnectionResolvers<ContextType>;
  VehicleFilmsEdge?: VehicleFilmsEdgeResolvers<ContextType>;
  PlanetFilmsConnection?: PlanetFilmsConnectionResolvers<ContextType>;
  PlanetFilmsEdge?: PlanetFilmsEdgeResolvers<ContextType>;
  SpeciesPeopleConnection?: SpeciesPeopleConnectionResolvers<ContextType>;
  SpeciesPeopleEdge?: SpeciesPeopleEdgeResolvers<ContextType>;
  SpeciesFilmsConnection?: SpeciesFilmsConnectionResolvers<ContextType>;
  SpeciesFilmsEdge?: SpeciesFilmsEdgeResolvers<ContextType>;
  FilmStarshipsConnection?: FilmStarshipsConnectionResolvers<ContextType>;
  FilmStarshipsEdge?: FilmStarshipsEdgeResolvers<ContextType>;
  FilmVehiclesConnection?: FilmVehiclesConnectionResolvers<ContextType>;
  FilmVehiclesEdge?: FilmVehiclesEdgeResolvers<ContextType>;
  FilmCharactersConnection?: FilmCharactersConnectionResolvers<ContextType>;
  FilmCharactersEdge?: FilmCharactersEdgeResolvers<ContextType>;
  FilmPlanetsConnection?: FilmPlanetsConnectionResolvers<ContextType>;
  FilmPlanetsEdge?: FilmPlanetsEdgeResolvers<ContextType>;
  PeopleConnection?: PeopleConnectionResolvers<ContextType>;
  PeopleEdge?: PeopleEdgeResolvers<ContextType>;
  PlanetsConnection?: PlanetsConnectionResolvers<ContextType>;
  PlanetsEdge?: PlanetsEdgeResolvers<ContextType>;
  SpeciesConnection?: SpeciesConnectionResolvers<ContextType>;
  SpeciesEdge?: SpeciesEdgeResolvers<ContextType>;
  StarshipsConnection?: StarshipsConnectionResolvers<ContextType>;
  StarshipsEdge?: StarshipsEdgeResolvers<ContextType>;
  VehiclesConnection?: VehiclesConnectionResolvers<ContextType>;
  VehiclesEdge?: VehiclesEdgeResolvers<ContextType>;
}>;


export type MeshContext = SwapiTypes.Context & BaseMeshContext;


const baseDir = pathModule.join(typeof __dirname === 'string' ? __dirname : '/', '..');

const importFn: ImportFn = <T>(moduleId: string) => {
  const relativeModuleId = (pathModule.isAbsolute(moduleId) ? pathModule.relative(baseDir, moduleId) : moduleId).split('\\').join('/').replace(baseDir + '/', '');
  switch(relativeModuleId) {
    case ".mesh/sources/SWAPI/introspectionSchema":
      return import("./sources/SWAPI/introspectionSchema") as T;
    
    default:
      return Promise.reject(new Error(`Cannot find module '${relativeModuleId}'.`));
  }
};

const rootStore = new MeshStore('.mesh', new FsStoreStorageAdapter({
  cwd: baseDir,
  importFn,
  fileType: "ts",
}), {
  readonly: true,
  validate: false
});

export const rawServeConfig: YamlConfig.Config['serve'] = {"playground":true,"browser":false} as any
export async function getMeshOptions(): Promise<GetMeshOptions> {
const pubsub = new PubSub();
const sourcesStore = rootStore.child('sources');
const logger = new DefaultLogger("🕸️  Mesh");
const cache = new (MeshCache as any)({
      ...({} as any),
      importFn,
      store: rootStore.child('cache'),
      pubsub,
      logger,
    } as any)

const sources: MeshResolvedSource[] = [];
const transforms: MeshTransform[] = [];
const additionalEnvelopPlugins: MeshPlugin<any>[] = [];
const swapiTransforms = [];
const additionalTypeDefs = [] as any[];
const swapiHandler = new GraphqlHandler({
              name: "SWAPI",
              config: {"endpoint":"https://swapi-graphql.netlify.app/.netlify/functions/index"},
              baseDir,
              cache,
              pubsub,
              store: sourcesStore.child("SWAPI"),
              logger: logger.child("SWAPI"),
              importFn,
            });
sources[0] = {
          name: 'SWAPI',
          handler: swapiHandler,
          transforms: swapiTransforms
        }
additionalEnvelopPlugins[0] = await UseRateLimit({
          ...({
  "config": [
    {
      "type": "Root",
      "field": "allFilms",
      "max": 5,
      "ttl": 30000,
      "identifier": "{context.req.socket.remoteAddress}"
    }
  ]
}),
          logger: logger.child("rateLimit"),
          cache,
          pubsub,
          baseDir,
          importFn,
        })
const additionalResolvers = [] as any[]
const merger = new(BareMerger as any)({
        cache,
        pubsub,
        logger: logger.child('bareMerger'),
        store: rootStore.child('bareMerger')
      })

  return {
    sources,
    transforms,
    additionalTypeDefs,
    additionalResolvers,
    cache,
    pubsub,
    merger,
    logger,
    additionalEnvelopPlugins,
    get documents() {
      return [
      
    ];
    },
    fetchFn,
  };
}

export function createBuiltMeshHTTPHandler<TServerContext = {}>(): MeshHTTPHandler<TServerContext> {
  return createMeshHTTPHandler<TServerContext>({
    baseDir,
    getBuiltMesh: getBuiltMesh,
    rawServeConfig: {"playground":true,"browser":false},
  })
}


let meshInstance$: Promise<MeshInstance> | undefined;

export function getBuiltMesh(): Promise<MeshInstance> {
  if (meshInstance$ == null) {
    meshInstance$ = getMeshOptions().then(meshOptions => getMesh(meshOptions)).then(mesh => {
      const id = mesh.pubsub.subscribe('destroy', () => {
        meshInstance$ = undefined;
        mesh.pubsub.unsubscribe(id);
      });
      return mesh;
    });
  }
  return meshInstance$;
}

export const execute: ExecuteMeshFn = (...args) => getBuiltMesh().then(({ execute }) => execute(...args));

export const subscribe: SubscribeMeshFn = (...args) => getBuiltMesh().then(({ subscribe }) => subscribe(...args));