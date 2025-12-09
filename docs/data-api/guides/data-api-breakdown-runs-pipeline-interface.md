# Breakdown Runs API Documentation

---

## Overview

Breakdown runs represent processing jobs that analyze event footage to create structured breakdowns. These APIs allow you to retrieve breakdown run information at different levels of granularity.

**Base Path:** `/v1`  
**Authentication:** JWT Bearer Token

---

## **Statuses** 

Available list of statuses:

* queued - Event created and should be broken down soon
* processing - Event is logging
* completed - Logging has been successfully completed 
* failed - Logging has been failed 
* file_ready - JSON file successfully created
* file_failed - Failed to generate JSON file

---

## Error codes

Available list of error codes:

* internal_server_error
* athlete_id_issue
* technical_issues
* not_synchronized_camera_angles
* wrong_sport
* wrong_video
* not_a_game
* incomplete_video
* missing_videos

---

## API Endpoints

### 1. Get All Breakdown Runs

```
GET /events/breakdown-runs
```

**Operation ID:** `getAllBreakdownRuns`

Retrieves breakdown runs across all events in the system. Results are grouped by event and include aggregated information about available modes.

#### Query Parameters

| Parameter | Type | Required | Default | Description |
| --- | --- | --- | --- | --- |
| `sort` | string | No | `-modified$date` | Sort field and direction **Prefix with** `-` **for descending**  Allowed: `modified$date`, `-modified$date`, `create$date`, `-create$date` |
| `limit` | integer | No | 10 | Maximum number of records to return **Minimum:** 1 |
| `skip` | integer | No | — | Number of records to skip **Minimum:** 0 |
| `mode` | string | No | — | Filter by mode (e.g., `"ai"`, `"manual"`) |
| `status` | string | No | — | Filter by status |
| `eventId` | string | No | — | Filter by event ID **Format:** MongoDB ObjectId (`^[0-9a-fA-F]{24}$`) |
| `startDate` | datetime | No | — | Start date for filtering by `modified$date` **Must be provided with** `endDate` |
| `endDate` | datetime | No | — | End date for filtering by `modified$date` **Must be provided with** `startDate` |

#### Response

`200 OK` — Successfully retrieved breakdown runs

Returns an array of `BreakdownRunsAggregatedResponse` objects:

```
[
  {
    "latest": { /* BreakdownRunResponse object */ },
    "runs": [ /* Array of BreakdownRunResponse objects */ ],
    "eventId": "string",
    "create$date": "2024-01-15T10:30:00.000Z",
    "modified$date": "2024-01-20T14:45:00.000Z",
    "modes": ["ai", "manual"]
  }
]
```

#### Example Request

```
GET /v1/events/breakdown-runs?sort=-modified$date&limit=10&skip=0&mode=ai
Authorization: <JWT_TOKEN>
```

---

### 2. Get Event Breakdown Runs

```
GET /events/{id}/breakdown-runs
```

**Operation ID:** `getEventBreakdownRuns`

Retrieves all breakdown runs associated with a specific event. Use this endpoint when you know the event ID and want to see all breakdown runs for that event.

#### Path Parameters

| Parameter | Type | Required | Description |
| --- | --- | --- | --- |
| `id` | string | Yes | Event ID **Format:** MongoDB ObjectId (`^[0-9a-fA-F]{24}$`) |

#### Query Parameters

| Parameter | Type | Required | Default | Description |
| --- | --- | --- | --- | --- |
| `sort` | string | No | `-modified$date` | Sort field and direction **Prefix with** `-` **for descending** Allowed: `modified$date`, `-modified$date`, `create$date`, `-create$date` |
| `limit` | integer | No | 10 | Maximum number of records to return **Minimum:** 1 |
| `skip` | integer | No | — | Number of records to skip **Minimum:** 0 |
| `mode` | manual \| ai | No | — | Filter by mode (e.g., `"ai"`, `"manual"`) |
| `status` | queued  processing  completed  failed  file_ready  file_failed | No | — | Filter by status |

#### Response

`200 OK` — Successfully retrieved breakdown runs

Returns an array of `BreakdownRunResponse` objects:

```
[
  {
    "_id": "507f191e810c19729de860ea",
    "eventId": "507f1f77bcf86cd799439011",
    "status": "completed",
    "fileUrl": "https://example.com/breakdown.json",
    "mode": "ai",
    "modified$date": "2024-01-20T14:45:00.000Z",
    "create$date": "2024-01-15T10:30:00.000Z",
    "tenant": "tenant-123",
    "errors": []
  }
]
```

#### Example Request

```
GET /v1/events/507f1f77bcf86cd799439011/breakdown-runs?sort=-modified$date&limit=20&mode=ai
Authorization: <JWT_TOKEN>
```

---

### 3. Get Specific Breakdown Run

```
GET /events/{eventId}/breakdown-runs/{id}
```

**Operation ID:** `getEventBreakdownRunById`

Retrieves detailed information about a specific breakdown run. Use this endpoint when you know both the event ID and the breakdown run ID.

#### Path Parameters

| Parameter | Type | Required | Description |
| --- | --- | --- | --- |
| `eventId` | string | Yes | Event ID **Format:** MongoDB ObjectId (`^[0-9a-fA-F]{24}$`) |
| `id` | string | Yes | Breakdown run ID **Format:** MongoDB ObjectId (`^[0-9a-fA-F]{24}$`) |

#### Response

`200 OK` — Successfully retrieved breakdown run

Returns a `BreakdownRunResponse` object:

```
{
  "_id": "507f191e810c19729de860ea",
  "eventId": "507f1f77bcf86cd799439011",
  "status": "completed",
  "fileUrl": "https://example.com/breakdown.json",
  "mode": "ai",
  "modified$date": "2024-01-20T14:45:00.000Z",
  "create$date": "2024-01-15T10:30:00.000Z",
  "tenant": "tenant-123",
  "errors": []
}
```

#### Example Request

```
GET /v1/events/507f1f77bcf86cd799439011/breakdown-runs/507f191e810c19729de860ea
Authorization: <JWT_TOKEN>
```

---

## Response Schemas

### BreakdownRunResponse

Complete breakdown run information with processing details and error tracking.

```
{
  "_id": "string",
  "eventId": "string",
  "status": "string",
  "fileUrl": "string | null",
  "mode": "queued | processing | completed | failed | file_ready | file_failed",
  "modified$date": "ISO 8601 date-time",
  "create$date": "ISO 8601 date-time",
  "tenant": "string",
  "errors": [
    {
      "message": "string",
      "code": "string"
    }
  ]
}
```

| Field | Type | Description |
| --- | --- | --- |
| `_id` | string | Unique identifier for the breakdown run |
| `eventId` | string | Associated event identifier |
| `status` | string | Current status of the breakdown run |
| `fileUrl` | string \| null | URL to the generated breakdown file (null if not available) |
| `mode` | string | Processing mode used (e.g., `"ai"`, `"manual"`) |
| `modified$date` | datetime | Last modification timestamp |
| `create$date` | datetime | Creation timestamp |
| `tenant` | string | Tenant identifier |
| `errors` | array | Array of error objects (empty if no errors) |

---

### BreakdownRunsAggregatedResponse

Aggregated breakdown runs grouped by event with mode information.

```
{
  "latest": {
    /* BreakdownRunResponse object */
  },
  "runs": [
    /* Array of BreakdownRunResponse objects */
  ],
  "eventId": "string",
  "create$date": "ISO 8601 date-time",
  "modified$date": "ISO 8601 date-time",
  "modes": ["ai", "manual"]
}
```

| Field | Type | Description |
| --- | --- | --- |
| `latest` | object | The most recent breakdown run for the event |
| `runs` | array | All breakdown runs for the event |
| `eventId` | string | The event identifier |
| `create$date` | datetime | Event creation timestamp |
| `modified$date` | datetime | Last event modification timestamp |
| `modes` | array | Available processing modes for the event |

---

## Important Notes

* **Authentication Required:** All endpoints require JWT authentication via the `Authorization: Bearer <token>` header
* **ID Format:** Event IDs and breakdown run IDs must be valid MongoDB ObjectIds (24-character hexadecimal strings)
* **Date Format:** All date-time parameters and responses use ISO 8601 format (e.g., `2024-01-20T14:45:00.000Z`)
* **Sort Syntax:** The `sort` parameter uses MongoDB-style field names with `$` notation (e.g., `modified$date`)
* **Date Range Filtering:** When using `startDate` and `endDate`, both parameters must be provided together
* **File Availability:** The `fileUrl` field will be `null` if:

    * The breakdown file has not been generated yet
    * The processing run failed
    * The file is no longer available
    
---

## Quick Start Example

```
# 1. Get all breakdown runs for an event
curl -X GET "https://api.pixellot.com/v1/events/507f1f77bcf86cd799439011/breakdown-runs" \
  -H "Authorization: YOUR_JWT_TOKEN" \
  -H "Content-Type: application/json"

# 2. Filter by mode and sort by date
curl -X GET "https://api.pixellot.com/v1/events/breakdown-runs?mode=ai&sort=-modified$date&limit=5" \
  -H "Authorization: YOUR_JWT_TOKEN" \
  -H "Content-Type: application/json"

# 3. Get a specific breakdown run
curl -X GET "https://api.pixellot.com/v1/events/507f1f77bcf86cd799439011/breakdown-runs/507f191e810c19729de860ea" \
  -H "Authorization: YOUR_JWT_TOKEN" \
  -H "Content-Type: application/json"
```

---

## **Webhook Payload** 

? - optional field

```
{
  eventId: string,
  breakdownRunId: string,
  fileUrl?: string,
  status: <Breakdown Run Status>,
  timestamp: number,
  errorCode?: <Breakdown Run Error Code>,
  errorMessage?: string
}
```