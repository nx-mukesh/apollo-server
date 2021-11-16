# apollo-server
This is a training apollo-server

## Question: A:- What is GraphQL? 
Answer:- ‍GraphQL is a new architectural element that eliminates the need for frontend teams to repeatedly ask backend teams for new endpoints or changes to exisitng endpoints.

### 1. A powerful API-based query language:
  GraphQL is created by Facebook, implemented in their mobile app in 2012 and open-sourced in 2015. It is rapidly becoming the standard for API-based data access.

  Typical REST APIs require loading from multiple URLs, GraphQL APIs get all the data your app needs in a single request. Apps using GraphQL can be quick even on slow cellular connections.

### 2. Avoid the inherent complexity of REST-architecture:
  A GraphQL schema sets a single source of truth in a GraphQL application. It offers an organization a way to federate its entire API.

  GraphQL’s dynamic query capabilities virtually eliminate an entire class of software development dedicated to parsing RESTful APIs to meet custom application development needs.

  REST forces incessant coordination of efforts between front-end (client) & back-end (services) teams, which dramatically slows development & increases the stress level of all involved. GraphQL changes the game for both front-end & back-end teams.

### 3. GraphQL is fully-typed (self-described):
  GraphQL APIs are organized in terms of the data they provision, not endpoints.
  Developers can access the full capabilities of their data from a single endpoint.
  GraphQL uses types to ensure apps only ask for what’s possible and provide clear and helpful errors.

### 4. Empower your frontend developers:-
  GraphQL allows front-end developers to query and mutate the data without having to make requests for custom endpoints to back-end developers.
  Minimize the need for having backend developers perform low-value work.

## Question: B:- Difference between GraphQL and Rest.
  1. GraphQL is an application layer server-side technology that is used for executing queries with existing data while REST is a software architectural style that defines a set of constraints for creating Web services.
  2. GraphQL can be organized in terms of a schema whereas REST can be arranged in terms of endpoints.
  3. The development speed in GraphQL is fast while the development speed in REST is Slow.
  4. The message format for GraphQL mutations should be a string while the message format for REST mutations can be anything.
  5. GraphQL uses metadata for query validation whereas REST does not have machine-readable metadata cacheable.



## Question: C:- Write down about Schema and Resolvers.
Answer:- 
A class-based container for field configuration and resolution logic.
 It supports:
  * Arguments, via .argument(...) helper, which will be applied to the field.
  * Return type, via .type(..., null: ...), which will be applied to the field.
  * Description, via .description(...), which will be applied to the field
  * Resolution, via #resolve(**args) method, which will be called to resolve the field.
  * #object and #context accessors for use during #resolve.
  * Resolvers can be attached with the resolver: option in a field(...) call.

  A resolver's configuration may be overridden with other keywords in the field(...) call.