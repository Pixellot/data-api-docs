# Sports Event Logging Process Flow

## Overview
This document provides a technical overview of the sports event logging workflow from initial scheduling through data processing and subsequent updates.

## Table of Contents
1. [Event Initialization](#event-initialization)
2. [Video Source Processing](#video-source-processing)
3. [Job Assignment and Execution](#job-assignment-and-execution)
4. [Data Processing and Distribution](#data-processing-and-distribution)
5. [Post-Processing Updates](#post-processing-updates)

## Event Initialization
### Event Scheduling
- An event is scheduled in the system
- Event metadata includes teams, league, season information

### Logging Rules Evaluation
- System evaluates if event qualifies for logging based on:
  - League association (if both teams are associated with the league for the event's season)
  - Existence of league logging rules
  - Existence of team logging rules
- If qualifying conditions are met, event is marked for logging
- Break-down type is determined by the more extensive rule if both league and team rules exist

## Video Source Processing
### VOD Video Source Availability Notification
- System receives Webhook notification that VOD video source is available

### Cloud Copy Processing
- System attempts to transcode HLS to MP4 file
- Quality assessment is performed on transcoded video
- If transcoding is successful:
  - MP4 copy is saved
  - Logging Job is created and added to logging queue
- If transcoding fails:
  - System waits for Local Copy upload
  - Once Local Copy is available, Logging Job is created


## Job Assignment and Execution
### Logging Queue Management
- Queue assigns job based on:
  - Logger sport specialization
  - Break-down type requirements
  - Office capacity and workload distribution

### Logging Process
- Logger reviews video quality
- If quality is insufficient or large portions are missing, job may be failed
- If quality is sufficient, logging proceeds
- SLA timeframes:
  - Basic breakdown: 4-8 hours from video availability
  - Complex breakdown: Up to 12+ hours depending on complexity and queue load

### Job Completion
- Logger marks job as complete
- System sends internal notification with "Logged" status

## Data Processing and Distribution
### Data Enrichment
- System wraps logged data
- Generates JSON file enriched with:
  - Athlete and team data
  - Offsets
  - Game boxscores
  - Team and athlete statistics
  - Additional attributes

### File Availability Notification
- System sends Webhook notification that file is available for download
- Clients can access the enriched JSON data

## Post-Processing Updates
### Change Detection
- System monitors for updates to:
  - Event tagged data
  - Lineup information
  - Video sources ( Once a video reaches a logged/logging the video sources cannot be updated anymore. In the scenario that a video is marked as corrupt it will not 
  go into the event queue and will still be elegabile for reupload)

### Update Processing
- If changes detected after breakdown completion:
  - Tagged data is updated
  - JSON file is regenerated
  - Additional Webhook notification for "Breakdown Updated" is sent to clients
