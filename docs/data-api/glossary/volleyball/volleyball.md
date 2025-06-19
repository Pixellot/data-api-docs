# Volleyball Glossary

## Volleyball TagEvents Resources and Attributes Glossary

### Introduction

This glossary documents all possible tagEvents resources and their attributes specific to Volleyball tagging. It serves as a comprehensive reference for developers working with our Volleyball tagging API, which uses a flow-based structure to track continuous game actions, transitions, and player movements throughout the match.

### Tagging Methodology

Our volleyball tagging system uses two main types of tag creation:

- **Running Tags**: Continuous tags that are turned on and off based on specific game conditions
- **Instant Tags**: Point-in-time tags that capture specific events with predefined durations

Each tag has specific lead times and durations:
- **Lead Time**: The amount of time BEFORE the logger's click that the tag event starts.
- **Duration**: How long the tag remains active (for instant tags) or whether it's continuous (for running tags).

### Table of Contents

- [Attack](#attack)
- [Block](#block)
- [Freeball](#freeball)
- [Match](#match)
- [Pass](#pass)
- [Rally](#rally)
- [Serve](#serve)
- [Set](#set)

## Attack

An offensive action where a player attempts to hit the ball into the opponent's court.

| Attribute Name | Type | Possible Values | Description |
|----------------|------|----------------|-------------|
| Result | enum | kill, error | The outcome of the attack attempt |
| Team | teamNames | | The team executing the attack |
| Athlete | rosterAthletes | | The athlete executing the attack |
| Path | chartline | | Court position from which the attack was executed |

**Tag Creation**: Instant  
**Lead Time**: 1 second  
**Duration**: 2 seconds  
**Timings**: In the moment of attack or 1s before attack occur

**Attribute Value Descriptions:**

**Result:**
- kill - Attack resulting in a direct point
- error - Attack resulting in a loss of point (out of bounds, into net, etc.)

## Block

A defensive action at the net to stop or deflect an opponent's attack.

| Attribute Name | Type | Possible Values | Description |
|----------------|------|----------------|-------------|
| Team | teamNames | | The team executing the block |
| Athlete | rosterAthletes | | The athlete executing the block |
| Result | enum | solo, assist, error | Outcome of the block attempt |

**Tag Creation**: Instant  
**Lead Time**: 2 seconds  
**Duration**: 2 seconds  
**Timings**: In the moment of block or 1s before block occur

**Attribute Value Descriptions:**

**Result:**
- solo - Block where a single player successfully blocks an attack by themselves
- assist - Block where 2-3 players jump together to block the same attack
- error - Block resulting in a point for the attacking team

## Freeball

Slow, high-arching ball that is sent over the net without attacking it. It is usually due to a team not being able to mount an attack.

| Attribute Name | Type | Possible Values | Description |
|----------------|------|----------------|-------------|
| Team | teamNames | | The team sending the freeball |
| Athlete | rosterAthletes | | The athlete sending the freeball |

**Tag Creation**: Instant  
**Lead Time**: 1 second  
**Duration**: 2 seconds  
**Timings**: In the moment of freeball or 1s before freeball occur

## Match

Determines the current set.

| Attribute Name | Type | Possible Values | Description |
|----------------|------|----------------|-------------|
| Set | enum | 1, 2, 3, 4, 5 | Set number |

**Tag Creation**: Running  
**Lead Time**: 2 seconds  
**Duration**: 0 seconds (continuous throughout set)  
**Timings**: Turn on 10s before start of any set and turn off 10s after the last point in a set

## Pass

A defensive skill to prevent the ball from hitting the floor after an opponent's attack or serve.

| Attribute Name | Type | Possible Values | Description |
|----------------|------|----------------|-------------|
| Result | enum | dig, error, reception, reception error | The result of the pass |
| Team | teamNames | | The team preventing the ball from hitting the floor |
| Athlete | rosterAthletes | | The athlete preventing the ball from hitting the floor |
| Grade | enum | 0, 1, 2, 3 | Quality rating of the pass |

**Tag Creation**: Instant  
**Lead Time**: 1 second  
**Duration**: 2 seconds  
**Timings**: At the moment of receiving a serve or attack, when we press the "D" key for pass (1st touch) on the keyboard, the program automatically activates and records the pass, serve, and attack, and automatically distributes them a few seconds in advance, so that in the clips, each pass, set, and attack can be seen clearly and precisely, separated individually

**Attribute Value Descriptions:**

**Grade:**
- 3 - Reception allowing optimal offensive options
- 2 - Reception allowing limited offensive options
- 1 - Reception resulting in difficult or no offensive opportunities
- 0 - Reception resulting in an error

## Rally

A sequence of play from serve to point.

| Attribute Name | Type | Possible Values | Description |
|----------------|------|----------------|-------------|
| Serving | teamNames | | The team that serves the ball |
| Won By | teamNames | | Team that wins the point in the rally |
| Serve Rotation | enum | 1, 2, 3, 4, 5, 6 | The rotation for the serving team |
| Rec Rotation | enum | 1, 2, 3, 4, 5, 6 | The rotation for the receiving team |

**Tag Creation**: Running  
**Lead Time**: 2 seconds  
**Duration**: 0 seconds (continuous until point ends)  
**Timings**: Turn on 3s before player serve and turn off 3s after the point is ended

**Attribute Value Descriptions:**

**Rotations:**
- Rotations are the formations of players on each individual rally
- They are identified based on the location of the setter in the formation

## Serve

The action that initiates play by sending the ball over the net into the opponent's court.

| Attribute Name | Type | Possible Values | Description |
|----------------|------|----------------|-------------|
| Team | teamNames | | The team serving the ball |
| Serving Athlete | rosterAthletes | | The athlete serving the ball |
| Result | enum | ace, serve error | Outcome of the serve |
| Grade | enum | 1, 2, 3, 4, 5 | Quality of the serve |
| Path | chartline | | Path of the serve |

**Tag Creation**: Instant  
**Lead Time**: 2 seconds  
**Duration**: 2 seconds  
**Timings**: Turn on 1-2s before player is serving

**Attribute Value Descriptions:**

**Result:**
- ace - Serve resulting in a direct point
- serve error - Serve into the net or out of bounds

## Set

The action of positioning the ball for an attacker.

| Attribute Name | Type | Possible Values | Description |
|----------------|------|----------------|-------------|
| Team | teamNames | | The team setting the ball |
| Athlete | rosterAthletes | | The athlete setting the ball |
| Result | enum | assist, error | Result of the set |
| Path | chartline | | Path of the set |

**Tag Creation**: Instant  
**Lead Time**: 1 second  
**Duration**: 2 seconds  
**Timings**: At the moment of set (2nd touch), when we press the "S" key on the keyboard, the program automatically activates and records only the set and attack, and automatically distributes the clips on the timeline, ensuring everything is clear and well-organized

**Attribute Value Descriptions:**

**Result:**
- assist - The set that leads to a kill
- error - Ball handling error during the set
