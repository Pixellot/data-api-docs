# Data API logging queue guide for partners 

## Overview

This guide explains how to create/update an event on the Partner API and define credit type and priority for logging.

There are two ways to create an event and define the credit type and priority on the Partner API:

- **Tenant level** – POST /events
- **Club level** – POST /clubs/id/events

In addition, there's one method available to update an event and modify its credit type and priority:

- PUT /events/{id}

## Common Steps

### 1. Login to PAPI

Authenticate to access PAPI endpoints.

**API Endpoint:**

```
POST https://api.pixellot.tv/v1/login
```

**body:**

```json
{
  "username": "string",
  "password": "string"
}
```

**Response Example:**

```json
{
    "token": "[your_api_token]",
    "expiry": 545454545
}
```

## Event creation via Club-level API

**API Endpoint:**

```
POST https://api.pixellot.tv/v1/clubs/{clubId}/events
```

Replace {clubId} with your actual club ID.

**Headers:**

```
Authorization: Bearer {your_api_token}
Content-Type: application/json
```

Replace {your_api_token} with your actual API token.

**Request Example:**

```
POST /clubs/id/events
{
    "eventName": "Event Name",
    "start$date": "2024-11-01T01:00:00.000Z",
    "end$date": "2024-11-01T01:03:00.000Z",
    "venue": {
        "_id": "{venueId}"
    },
    "scoreboardData": {
      "homeTeam": "[your_team_1]",
      "awayTeam": "[your_team_2]",
      "enable": true
    },
    "productionType": "[your_sport_type]",
    "permission": "admin",
    "breakdownDetails": {
       "type": "<basic|advanced>",
       "priority" : <1|2|3>
    }
}
```

The breakdownDetails object is optional. However, if provided, both the type and priority fields are required

## Event creation via Tenant-level API

**API Endpoint:**

```
POST https://api.pixellot.tv/v1/events
```

**Headers:**

```
Authorization: Bearer {your_api_token}
Content-Type: application/json
```

Replace {your_api_token} with your actual API token.

**Request Example:**

```json
{
  "eventName": "Event Name",
  "start$date": "2024-11-01T01:00:00.000Z",
  "end$date": "2024-11-01T01:03:00.000Z",
  "status": "active",
  "venue": {
    "_id": "600e9106b4f21efbb2ba97fc"
  },
  tenant: "tenant_name",
  "permission": "admin",
  "scoreboardData": {
    "homeTeam": "Eagles",
    "awayTeam": "Tigers",
    "enable": true
  },
  "productionType": "basketball",
  "breakdownDetails": {
       "type": "<basic|advanced>",
       "priority" : <1|2|3>
  }
}
```

## Event update

**API Endpoint:**

```
POST https://api.pixellot.tv/v1/events/{eventId}
```

Replace {eventId} with your actual event ID.

**Headers:**

```
Authorization: Bearer {your_api_token}
Content-Type: application/json
```

Replace {your_api_token} with your actual API token.

**Request Example:**

```json
{
    "breakdownDetails": {
       "type": "<basic|advanced>",
       "priority" : <1|2|3>
  }
}
```

Updates to breakdownDetails will be blocked if the event has already been logged or is currently in the process of logging

## Key Notes
- Skip logging if breakdownDetails are missing and neither a team nor a league rule is specified.
- If an invalid type or priority is provided, the logging system will also fall back to default logging.
- Default logging settings are:  type: “basic“, priority: 2.
- For PlayOn, the way to cancel logging is to define an American Football game with logging type Advanced and priority 3. This action is only effective if the game has not started the logging process (Logging) and has not finished it (Finished or Failed).

---


For questions about availability, please contact your Pixellot representative. 
