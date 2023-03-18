// @ts-nocheck

import { InContextSdkMethod } from '@graphql-mesh/types';
import { MeshContext } from '@graphql-mesh/runtime';

export namespace SwapiTypes {
  export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
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

  export type QuerySdk = {
      /** null **/
  allFilms: InContextSdkMethod<Root['allFilms'], RootallFilmsArgs, MeshContext>,
  /** null **/
  film: InContextSdkMethod<Root['film'], RootfilmArgs, MeshContext>,
  /** null **/
  allPeople: InContextSdkMethod<Root['allPeople'], RootallPeopleArgs, MeshContext>,
  /** null **/
  person: InContextSdkMethod<Root['person'], RootpersonArgs, MeshContext>,
  /** null **/
  allPlanets: InContextSdkMethod<Root['allPlanets'], RootallPlanetsArgs, MeshContext>,
  /** null **/
  planet: InContextSdkMethod<Root['planet'], RootplanetArgs, MeshContext>,
  /** null **/
  allSpecies: InContextSdkMethod<Root['allSpecies'], RootallSpeciesArgs, MeshContext>,
  /** null **/
  species: InContextSdkMethod<Root['species'], RootspeciesArgs, MeshContext>,
  /** null **/
  allStarships: InContextSdkMethod<Root['allStarships'], RootallStarshipsArgs, MeshContext>,
  /** null **/
  starship: InContextSdkMethod<Root['starship'], RootstarshipArgs, MeshContext>,
  /** null **/
  allVehicles: InContextSdkMethod<Root['allVehicles'], RootallVehiclesArgs, MeshContext>,
  /** null **/
  vehicle: InContextSdkMethod<Root['vehicle'], RootvehicleArgs, MeshContext>,
  /** Fetches an object given its ID **/
  node: InContextSdkMethod<Root['node'], RootnodeArgs, MeshContext>
  };

  export type MutationSdk = {
    
  };

  export type SubscriptionSdk = {
    
  };

  export type Context = {
      ["SWAPI"]: { Query: QuerySdk, Mutation: MutationSdk, Subscription: SubscriptionSdk },
      
    };
}
