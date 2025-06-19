# Field Hockey Glossary

## Field Hockey TagEvents Resources and Attributes Glossary

### Introduction

This glossary documents all possible tagEvents resources and their attributes specific to Field Hockey tagging. It serves as a comprehensive reference for developers working with our Field Hockey tagging API, which uses a flow-based structure to track continuous game actions, transitions, and player movements throughout the match.

### Tagging Methodology

Our field hockey tagging system uses two main types of tag creation:

- **Running Tags**: Continuous tags that are turned on and off based on specific game conditions
- **Instant Tags**: Point-in-time tags that capture specific events with predefined durations

Each tag has specific lead times and durations:
- **Lead Time**: The amount of time BEFORE the logger's click that the tag event starts.
- **Duration**: How long the tag remains active (for instant tags) or whether it's continuous (for running tags).

### Table of Contents

- [Circle](#circle)
- [Free Hit](#free-hit)
- [Offensive Zone](#offensive-zone)
- [Outlet](#outlet)
- [Penalty](#penalty)
- [Penalty Corner Lead In](#penalty-corner-lead-in)
- [Period](#period)
- [Possession](#possession)
- [Set Play](#set-play)
- [Shoot Out](#shoot-out)
- [Shot](#shot)
- [Transition](#transition)

## Circle

Description of the Circle resource in the context of Field Hockey. This resource tracks events when offensive team enters with possession circle area (16m)

| Attribute Name | Type | Possible Values | Description |
|----------------|------|----------------|-------------|
| Team | teamNames | | When offensive team enters with possession opponent circle area (16m) |

**Tag Creation**: Running  
**Lead Time**: 0 seconds  
**Duration**: 0 seconds (continuous until ball leaves zone)  
**Timings**: Turn on when offensive team have ball in last 16m zone, and turn off if defensive team gain possession of the ball in that area or ball left that area in the field

## Free Hit

Description of the Free Hit resource in the context of Field Hockey. This resource captures free hit situations awarded for rule violations.

| Attribute Name | Type | Possible Values | Description |
|----------------|------|----------------|-------------|
| Team | teamNames | | When team takes a free hit |
| Location | | 16m, 25m | Location where free hit occur |
| Result | | Successful, Unsuccessful | If free hit was successful or unsuccessful |

**Tag Creation**: Instant  
**Lead Time**: 2 seconds  
**Duration**: 4 seconds  
**Timings**: Turn on 2-3s before player takes a free hit

## Offensive Zone

Description of the Offensive Zone resource in the context of Field Hockey. This resource tracks when teams are operating in their attacking third of the field.

| Attribute Name | Type | Possible Values | Description |
|----------------|------|----------------|-------------|
| Team | teamNames | | The team currently in their offensive zone |

**Tag Creation**: Running  
**Lead Time**: 1 second  
**Duration**: 0 seconds (continuous until ball leaves zone)  
**Timings**: Turn on when ball enter off zone and turn off when ball left that area in the field

## Outlet

Description of the Outlet resource in the context of Field Hockey. This resource tracks outlet passes or clearances, typically from defensive situations.

| Attribute Name | Type | Possible Values | Description |
|----------------|------|----------------|-------------|
| Team | teamNames | | The team executing the outlet pass or clearance |
| Result | | Successful, Failed | If outlet was succesfull or failed |

**Tag Creation**: Running  
**Lead Time**: 2 seconds  
**Duration**: 0 seconds (continuous until transition completes)  
**Timings**: Turn on when defensive team start begins bringing the ball out from their defensive half, and we turn of when they lose possession during the transition or if they cross the half line — in which case it is considered a successful outlet

## Penalty

Description of the Penalty resource in the context of Field Hockey. This resource captures penalty situations and infractions during gameplay.

| Attribute Name | Type | Possible Values | Description |
|----------------|------|----------------|-------------|
| Team | teamNames | | The team that committed the penalty infraction |

**Tag Creation**: Instant  
**Lead Time**: 3 seconds  
**Duration**: 1 second  
**Timings**: Turn on 2-3s before player commits a foul

## Penalty Corner Lead In

Description of the Penalty Corner Lead In resource in the context of Field Hockey. This resource tracks the defensive team and situations that lead to penalty corner.

| Attribute Name | Type | Possible Values | Description |
|----------------|------|----------------|-------------|
| Team | teamNames | | The defensive team that committed the penalty that leads to penalty corner |

**Tag Creation**: Instant  
**Lead Time**: 3 seconds  
**Duration**: 15 seconds  
**Timings**: Turn on 2-3s before defensive team makes a foul, penalty or tackle that lead to a penalty corner afterwards

## Period

Description of the Period resource in the context of Field Hockey. This resource tracks game periods and environmental conditions during play.

| Attribute Name | Type | Possible Values | Description |
|----------------|------|----------------|-------------|
| Period | enum | "1", "2", "3", "4", "OT" | Current period of play |

**Tag Creation**: Running  
**Lead Time**: 2 seconds  
**Duration**: 0 seconds (continuous throughout period)  
**Timings**: Turn on 5s before start of the quarter and turn off 5s after end of quarter

**Attribute Value Descriptions:**

**Period:**
- 1-4 - Regular game periods (quarters)
- OT - Overtime period

## Possession

Description of the Possession resource in the context of Field Hockey. This resource tracks ball possession and control during gameplay.

| Attribute Name | Type | Possible Values | Description |
|----------------|------|----------------|-------------|
| Team | teamNames | | The team currently in possession of the ball |

**Tag Creation**: Running  
**Lead Time**: 2 seconds  
**Duration**: 0 seconds (continuous until possession changes)  
**Timings**: Turn on when one team have full control on the ball, and turn off when other team get steal, they make turnover, team scored a goal, there is a injury that need medical treatment or end of halftime or OT

## Set Play

Description of the Set Play resource in the context of Field Hockey. This resource captures structured plays from set pieces and restarts.

| Attribute Name | Type | Possible Values | Description |
|----------------|------|----------------|-------------|
| Result | enum | "", "penalty corner", "long corner", "penalty stroke", "hit in", "center pass", "legacy- free hit" | The outcome or type of set play executed |
| Athlete | rosterAthletes | | The athlete executing the set play |
| Team | teamNames | | The team executing the set play |

**Tag Creation**: Instant  
**Lead Time**: 2 seconds  
**Duration**: 4 seconds  
**Timings**: Turn on 2-3s before player takes a specific set play

**Attribute Value Descriptions:**

**Result:**
- penalty corner - A penalty corner awarded and executed
- long corner - A long corner kick situation
- penalty stroke - A penalty stroke awarded
- hit in - A hit-in from the sideline
- center pass - A center pass to restart play
- legacy- free hit - A free hit from an older tagging system

## Shoot Out

Description of the Shoot Out resource in the context of Field Hockey. This resource tracks penalty shootout situations, typically used to determine game outcomes.

| Attribute Name | Type | Possible Values | Description |
|----------------|------|----------------|-------------|
| Success | enum | Successful, Unsuccessful | The outcome or type of shootout executed |
| Athlete | rosterAthletes | | The athlete executing the shootout |
| Team | teamNames | | The team executing the shootout |

**Tag Creation**: Instant  
**Lead Time**: 5 seconds  
**Duration**: 2 seconds  
**Timings**: Turn on 2-3s before player takes a penalty shot

## Shot

Description of the Shot resource in the context of Field Hockey. This resource captures all shot attempts on goal, including the circumstances and outcome of each attempt.

| Attribute Name | Type | Possible Values | Description |
|----------------|------|----------------|-------------|
| Team | teamNames | | The team taking the shot |
| Result | enum | "", "goal", "save", "wide", "block" | The outcome of the shot attempt |
| Athlete | rosterAthletes | | The athlete taking the shot |
| Assist | rosterAthletes | | The athlete providing the assist (if applicable) |
| Goalkeeper | rosterAthletes | | The goalkeeper defending against the shot |
| Net Location | chartPoint | | The specific location on the goal where the shot was aimed |
| Field Location | chartPoint | | The field position from where the shot was taken |

**Tag Creation**: Instant  
**Lead Time**: 3 seconds  
**Duration**: 2 seconds  
**Timings**: Turn on 2-3s before player takes a shot

**Attribute Value Descriptions:**

**Result:**
- goal - Shot resulted in a successful score
- save - Shot was stopped by the goalkeeper
- wide - Shot missed the goal entirely
- block - Shot was blocked by a field player

## Transition

Description of the Transition resource in the context of Field Hockey. This resource tracks transitional phases of play, such as moving from defense to attack or vice versa.

| Attribute Name | Type | Possible Values | Description |
|----------------|------|----------------|-------------|
| Team | teamNames | | The team initiating or leading the transition |

**Tag Creation**: Instant  
**Lead Time**: 0 seconds  
**Duration**: 3 seconds  
**Timings**: Automatically created by software when there is a change in possession of the teams
