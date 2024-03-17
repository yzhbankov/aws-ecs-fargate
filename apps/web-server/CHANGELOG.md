RPP PLATFORM REST SERVER
===================
## 2023.1.34 (2023-10-27)
 * OS Migration: CI/CD for NodeJs services. Platform service. [DEV-16492](https://redpointpositioning.atlassian.net/browse/DEV-16492)

## 2021.2.32 (2021-12-26)
### Bugs
 * Associated trackable fails to be deleted from platform when deleted from solution. [DEV-13209](https://redpointpositioning.atlassian.net/browse/DEV-13209)

## 2021.2.31 (2021-12-06)
### Features
 * The Synchronization between Platform and Solution for Standalone fails. [DEV-12847](https://redpointpositioning.atlassian.net/browse/DEV-12847)

## 2021.2.30 (2021-11-23)
### Improvements
 * .ENV files should be persistent on packages update. [DEV-12806](https://redpointpositioning.atlassian.net/browse/DEV-12806)
 
## 2021.2.28 (2021-10-22)
### Improvements
 * Provide Env Vars list for Platform Solution Deployment Script. [DEV-12559](https://redpointpositioning.atlassian.net/browse/DEV-12559)

## 2021.2.26 (2021-10-19)
### Features
 * Save MAC address in upper case within the platform storage. [DEV-12501](https://redpointpositioning.atlassian.net/browse/DEV-12501)
 * Platform Solution Interaction: Make solution sublocation sequence value equal to platform id. [DEV-12486](https://redpointpositioning.atlassian.net/browse/DEV-12486)

### Bugs
 * Fix following validation errors in Platform API. [DEV-12508](https://redpointpositioning.atlassian.net/browse/DEV-12508)

## 2021.1.24 (2021-10-08)
### Bugs
 * Server fails to correctly validate absence of required "value.masters[]" and "value.distributors[]" fields when adding network settings (Network Settings API). [DEV-12473](https://redpointpositioning.atlassian.net/browse/DEV-12473)
 * Invalid "value.masters[].sfd" property valiue fails to be validated when creating Network Settings. (only 250 500 1000 should be allowed). [DEV-12474](https://redpointpositioning.atlassian.net/browse/DEV-12474)

## 2021.1.23 (2021-10-01)
### Improvements
 * Add tdoa_version to Network Settings response. [DEV-12461](https://redpointpositioning.atlassian.net/browse/DEV-12461)

### Bugs
 * Fix release announce email. [DEV-12458](https://redpointpositioning.atlassian.net/browse/DEV-12458)
 * Make fields type validation in Network LSB Schedules Management Platform API strict equal. [DEV-12433](https://redpointpositioning.atlassian.net/browse/DEV-12433)

## 2021.1.22 (2021-09-29)
### Improvements
 * Update platform documentation and API, enum type fields. [DEV-12362](https://redpointpositioning.atlassian.net/browse/DEV-12362)
 * Make fields type validation in Network LSB Schedules Management Platform API strict equal . [DEV-12433](https://redpointpositioning.atlassian.net/browse/DEV-12433)
 * Server erroneously requires to specify optional field "content" when Editing Lsb Schedule Api. [DEV-12435](https://redpointpositioning.atlassian.net/browse/DEV-12435)
 * Incorrect validation error is returned when specifying empty "content.dimension" when Creating or Editing Lsb Schedule Api. [DEV-12437](https://redpointpositioning.atlassian.net/browse/DEV-12437)
 * Fix Platform Network LSB Schedules Management API Documentation ("Delete" endpoint section is missing response body). [DEV-12432](https://redpointpositioning.atlassian.net/browse/DEV-12432)

### Bugs
 * Unable to create Network Settings. (Validation error {"message":"{\"lsb\":\"REQUIRED\"}" when sending correct body). [DEV-12456](https://redpointpositioning.atlassian.net/browse/DEV-12456)

## 2021.1.21 (2021-09-21)
### Improvements
 * Change id generation function usage in a platform rest-server due to change in id generation mechanism. [DEV-12193](https://redpointpositioning.atlassian.net/browse/DEV-12193)
 * Extend Network Settings API with the properties. [DEV-12194](https://redpointpositioning.atlassian.net/browse/DEV-12194)
 * Calculate Test Coverage for the Platform REST server and Message Processor. [DEV-12240](https://redpointpositioning.atlassian.net/browse/DEV-12240)

### Bugs
 * Following discrepancies observed between documentation and implementation of Server API for Tag Assignment API. [DEV-11725](https://redpointpositioning.atlassian.net/browse/DEV-11725)
 * Following discrepancies observed between documentation and new implementation of Server API for Trackables API. [DEV-12152](https://redpointpositioning.atlassian.net/browse/DEV-12152)

## 2021.1.19 (2021-08-27)
### Improvements
 * Implement API for Network LSB Schedules. [DEV-12074](https://redpointpositioning.atlassian.net/browse/DEV-12074)
 * Implement Network Setting API. [DEV-11011](https://redpointpositioning.atlassian.net/browse/DEV-11011)

### Bugs
 * Delete tag/node assignment request with empty string field returns incorrect error message. [DEV-12130](https://redpointpositioning.atlassian.net/browse/DEV-12130)

## 2021.1.18 (2021-08-19)
### Improvements
 * Trackable API. Make position_reporting.interval able to set value equal to 0. [DEV-11919](https://redpointpositioning.atlassian.net/browse/DEV-11919)

## 2021.1.14 (2021-08-10)
### Bugs
 * Fix tickets comment on a build creation (rtls-platform-rest-server, rtls-platofrm-message-processor). [DEV-11971](https://redpointpositioning.atlassian.net/browse/DEV-11971)
 * Platform API: Add “elevation” field for Sublocation API. [DEV-12046](https://redpointpositioning.atlassian.net/browse/DEV-12046)

## 2021.1.13 (2021-08-02)
### Bugs
 * Fix tickets comment on a build creation (rtls-platform-rest-server, rtls-platofrm-message-processor). [DEV-11971](https://redpointpositioning.atlassian.net/browse/DEV-11971)
 * Fix API documentation inconsistency. [DEV-11973](https://redpointpositioning.atlassian.net/browse/DEV-11973)
 * Following discrepancies observed between documentation and implementation of Server API for Tag Assignment API. [DEV-11725](https://redpointpositioning.atlassian.net/browse/DEV-11725)

## 2021.1.12 (2021-07-23)
### Bugs
 * 500 error is returned for Platform API requests in following cases . [DEV-11841](https://redpointpositioning.atlassian.net/browse/DEV-11841)
 * Platform API: Fix following validations for empty MAC fields and name Fields . [DEV-11842](https://redpointpositioning.atlassian.net/browse/DEV-11842)
 * Empty "heartbeat" field fails to be validated. [DEV-11845](https://redpointpositioning.atlassian.net/browse/DEV-11845)
 * Empty position objects or missing nested fields shall be validated as follows. [DEV-11835](https://redpointpositioning.atlassian.net/browse/DEV-11835)
 * Platform API: Negative "interval" fails to be validated for Create/Edit API requests. [DEV-11844](https://redpointpositioning.atlassian.net/browse/DEV-11844)
 * Following discrepancies observed between documentation and implementation of Server API for Tag Assignment API. [DEV-11725](https://redpointpositioning.atlassian.net/browse/DEV-11725)
 * Following discrepancies observed between documentation and implementation of Server API for Tag API. [DEV-11732](https://redpointpositioning.atlassian.net/browse/DEV-11732)

## 2021.1.11 (2021-07-09)
### Bugs
 * System fails to validate incorrect sublocation_uid for POST api/trackables. [DEV-11696](https://redpointpositioning.atlassian.net/browse/DEV-11696)
 * Edit anchor request with empty optional field name/sublocation_uid/bridge returns status code 200. [DEV-11698](https://redpointpositioning.atlassian.net/browse/DEV-11698)
 * Following discrepancies observed between documentation and implementation of Server API for Trackables API. [DEV-11697](https://redpointpositioning.atlassian.net/browse/DEV-11697)
 * Delete anchor API request with empty uid in url returns status code 200 and an empty body. [DEV-11727](https://redpointpositioning.atlassian.net/browse/DEV-11727)

## 2021.1.9 (2021-07-05)
### Features
 * Implement Platform Message Processor Infrastructure.  [DEV-11599](https://redpointpositioning.atlassian.net/browse/DEV-11599)
 * DevOps preparation. [DEV-11604](https://redpointpositioning.atlassian.net/browse/DEV-11604)

## 2021.2.5 (2021-06-14)
### Features
 * Implement the Notifications sending to ZmQ channel.  [DEV-11494](https://redpointpositioning.atlassian.net/browse/DEV-11494)
 * Platform: Create REST API routes for Nodes entity.  [DEV-10991](https://redpointpositioning.atlassian.net/browse/DEV-10991)
 * Platform: Create REST API routes for 'Tag' entity.  [DEV-11399](https://redpointpositioning.atlassian.net/browse/DEV-11399)
 * Platform: Create REST API route for the 'Unconfigured' devices.  [DEV-11420](https://redpointpositioning.atlassian.net/browse/DEV-11420)

## 2021.2.3 (2021-06-07)
### Features
  * Platform: Create REST API routes for Trackable entity.  [DEV-10975](https://redpointpositioning.atlassian.net/browse/DEV-10975)
  * Platform: Create REST API routes for Anchors entity.  [DEV-10979](https://redpointpositioning.atlassian.net/browse/DEV-10979)
  * Platform: Create REST API routes for Locations entity.  [DEV-10995](https://redpointpositioning.atlassian.net/browse/DEV-10995)
  * Platform: Create REST API routes for Sublocation entity.  [DEV-10999](https://redpointpositioning.atlassian.net/browse/DEV-10999)
  * Platform: Create REST API routes for 'Node_assignments' entity. [DEV-11403](https://redpointpositioning.atlassian.net/browse/DEV-11403)
  * Platform: Create REST API routes for 'Tag_assignments' entity. [DEV-11407](https://redpointpositioning.atlassian.net/browse/DEV-11407)

### Improvements
### Bugs

