# BreakdownDataUpdates Integration Guide

## Introduction

Welcome to the Pixellot BreakdownDataUpdates Integration Guide. This document will help you set up and manage your subscription to receive real-time game breakdown data directly to your systems. Our service enables you to automatically receive game statistics and analytics as soon as they become available, allowing for timely integration into your platforms.

## Key Benefits

- **Real-time Updates**: Receive notifications within seconds of data processing completion
- **Seamless Integration**: Eliminate polling and manual checks with automatic data delivery
- **Reliable System**: Built with robust retry mechanisms to ensure delivery even during network issues
- **Secure Communication**: All notifications include verification signatures for data integrity

## How It Works

**Integration Flow**

1. You create a subscription by providing a webhook URL and secret key
2. When breakdown data is processed, our system uploads it to secure cloud storage
3. A notification is sent to your webhook with the event details and file location
4. Your system verifies the notification and retrieves the data file
5. You process and integrate the data into your platform

## Getting Started

### Prerequisites

- A publicly accessible HTTPS endpoint to receive notifications
- Authentication credentials for the Pixellot API (contact your account manager)
- TLS 1.2 or higher for secure communications

### Creating Your Subscription

To subscribe to breakdown notifications, send a POST request to our subscription API:

```http
POST /v1/monitoring/subscriptions
Authorization: Bearer <YOUR_API_TOKEN>
Content-Type: application/json

{
  "messageType": "BreakdownDataUpdates",
  "tenant": "YOUR_TENANT_NAME",
  "url": "https://your-webhook-endpoint.com/notifications",
  "secret": "YOUR_SECRET_KEY",
  "emails": ["alerts@your-company.com"]
}
```

#### Request Parameters

| Parameter | Description |
|-----------|-------------|
| `messageType` | Must be "BreakdownDataUpdates" |
| `tenant` | Your tenant name (provided by Pixellot) |
| `url` | Your HTTPS webhook URL |
| `secret` | Your secret key for signature verification |
| `emails` | Optional email addresses for notifications about subscription status |

### Managing Your Subscription

You can manage your subscription using these endpoints:

- **List subscriptions**: `GET /v1/monitoring/subscriptions`
- **Update subscription**: `PUT /v1/monitoring/subscriptions/{id}`
- **Delete subscription**: `DELETE /v1/monitoring/subscriptions/{id}`

## Handling Notifications

### Notification Format

When breakdown data is ready, your webhook will receive a POST request with this JSON payload:

```json
{
  "eventId": "12345678-abcd-1234-efgh-1234567890ab",
  "fileUrl": "https://storage.pixellot.com/breakdown/tenant-name/event-12345678.json"
}
```

The notification includes these important HTTP headers:
- `Content-Type`: `application/json`
- `X-Pixellot-Signature`: HMAC SHA-1 signature for verification

### Verifying Notifications

To ensure notifications are authentic, verify the signature provided in each request:

```javascript
const crypto = require('crypto');
const signature = req.headers['x-pixellot-signature'];
const calculatedSignature = crypto
  .createHmac('sha1', 'YOUR_SECRET_KEY')
  .update(JSON.stringify(req.body))
  .digest('hex');

if (signature === calculatedSignature) {
  // Process the notification
  console.log('Valid notification received');
} else {
  // Reject the notification
  console.log('Invalid signature detected');
  return res.status(401).send('Invalid signature');
}
```

## Breakdown Data Structure

The breakdown data file contains comprehensive game statistics in JSON format:

- Game metadata (teams, venue, date, sport type)
- Play-by-play events with timestamps
- Player and team statistics
- Video timestamps for key moments
- Links to recorded video streams

Example data structure (simplified):
```json
{
  "gameBreakdown": {
    "metadata": {
      "eventId": "12345678-abcd-1234-efgh-1234567890ab",
      "homeTeam": "Team A",
      "awayTeam": "Team B",
      "venue": "Stadium Name",
      "date": "2023-05-15T18:30:00Z"
    },
    "results": {
      "allStats": [
        {
          "type": "goal",
          "team": "home",
          "player": "Player 1",
          "startUTC": 1684175400000,
          "endUTC": 1684175410000,
          "angles": {
            "hd": {
              "startOffset": 1234,
              "endOffset": 1244
            }
          }
        }
      ]
    }
  },
  "recordedStreamUrl": "https://stream.pixellot.tv/hls/event-12345678.m3u8"
}
```

## Implementation Best Practices

### 1. Design for Redundancy

- Implement idempotent processing using eventId as a unique key
- Store processed notification IDs to prevent duplicate processing
- Handle occasional duplicate notifications gracefully

### 2. Optimize Response Time

- Respond to webhooks quickly (under 3 seconds)
- Process data asynchronously after acknowledging receipt
- Return HTTP 200 status code to prevent unnecessary retries

### 3. Implement Robust Error Handling

- Use retry logic with exponential backoff for file downloads
- Implement circuit breakers to prevent cascading failures
- Log all webhook activities for troubleshooting

### 4. Ensure Security

- Always verify notification signatures
- Keep your secret key confidential
- Rotate your secret key periodically (every 90 days recommended)
- Use HTTPS for all communications

## Troubleshooting Guide

| Issue | Possible Causes | Solutions |
|-------|----------------|-----------|
| Missing notifications | • Webhook not accessible<br>• Subscription inactive | • Check webhook accessibility<br>• Verify subscription status |
| Invalid signature | • Incorrect secret key<br>• Body transformation issues | • Verify secret key<br>• Use raw JSON body for signature calculation |
| HTTP errors | • Server errors<br>• Timeout issues | • Check server logs<br>• Ensure quick response time |
| File access issues | • Network connectivity<br>• Expired URL | • Verify network connectivity|

## Service Limits

- Maximum of 2 subscriptions per message type per tenant
- Webhook timeout: 10 seconds
- Retry attempts:
    - After 1 second
    - After 10 seconds
    - After 60 seconds
    - After 600 seconds


## Support Resources

If you encounter any issues with your integration:

1. Check your subscription status through the API
2. Review your webhook server logs
3. Contact Pixellot Support at support@pixellot.com with:
   - Your subscription ID
   - Event ID (if applicable)
   - Timestamp of the issue
   - Any error messages received

