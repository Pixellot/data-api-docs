# Men's Lacrosse

## Men's Lacrosse TagEvents Resources and Attributes Glossary

### Introduction
This glossary documents all possible tagEvents resources and their attributes specific to Men's Lacrosse tagging. It serves as a comprehensive reference for developers working with our Men's Lacrosse tagging API, which uses a flow-based structure to track continuous game actions, transitions, and player movements throughout the match.

### Tagging Methodology
Our men's lacrosse tagging system uses two main types of tag creation:

- **Running Tags**: Continuous tags that are turned on and off based on specific game conditions
- **Instant Tags**: Point-in-time tags that capture specific events with predefined durations

Each tag has specific lead times and durations:

- **Lead Time**: The amount of time BEFORE the logger's click that the tag event starts.
- **Duration**: How long the tag remains active (for instant tags) or whether it's continuous (for running tags).


## Period

Determines the current period of play.

| Attribute Name | Type | Possible Values | Description |
|----------------|------|-----------------|-------------|
| Period | list | 1, 2, 3, 4, OT | Period number |

> **Tag Creation**: Running  
> **Lead Time**: 0 seconds  
> **Duration**: 0 seconds (continuous throughout period)  
> **Timings**: Turn on before start of period and turn off after end of period

#### Attribute Value Descriptions:

**Period:**

- **1** - 1st period
- **2** - 2nd period
- **3** - 3rd period
- **4** - 4th period
- **OT** - Overtime period

## Faceoff

The method used to start play at the beginning of each quarter and after each goal.

| Attribute Name | Type | Possible Values | Description |
|----------------|------|-----------------|-------------|
| Team | teamNames | | The team that wins the faceoff |
| Won By Athlete | rosterAthletes | | The athlete who wins the faceoff |
| Lost By Athlete | rosterAthletes | | The athlete who loses the faceoff |

> **Tag Creation**: Instant  
> **Lead Time**: 2 seconds  
> **Duration**: 4 seconds  
> **Timings**: Turn on at the moment of the faceoff or 2 seconds before

## Possession

Refers to the state of a team having control of the ball.

| Attribute Name | Type | Possible Values | Description |
|----------------|------|-----------------|-------------|
| Team | teamNames | | The team in possession of the ball |
| Athlete | rosterAthletes | | The athlete in possession of the ball |

> **Tag Creation**: Running  
> **Lead Time**: 0 seconds  
> **Duration**: 0 seconds (continuous until possession ends)  
> **Timings**: Turn on when team has full control of the ball, turn off after team loses possession

## Clear

A defensive play where the defensive team successfully moves the ball from their defensive end to their offensive end.

| Attribute Name | Type | Possible Values | Description |
|----------------|------|-----------------|-------------|
| Team | teamNames | | The team attempting the clear |
| Result | list | successful, failed | The outcome of the clear attempt |

> **Tag Creation**: Instant  
> **Lead Time**: 0 seconds  
> **Duration**: Instant  
> **Timings**: Turn on at the moment the clear is attempted or completed

#### Attribute Value Descriptions:

**Result:**

- **successful** - The clear was completed successfully
- **failed** - The clear attempt was unsuccessful

## Attack

Side of the attack zone where the ball is located

| Attribute Name | Type | Possible Values | Description |
|----------------|------|-----------------|-------------|
| Team | teamNames | | Attack Zone |

> **Tag Creation**: Running  
> **Lead Time**: 0 second  
> **Duration**: 0 seconds (continuous until ball leaves attack zone)  
> **Timings**: Turn on when the ball enters the attack zone, turn off when the ball leaves the attack zone

## Man Up

A situation where one team has a player advantage due to a penalty.

| Attribute Name | Type | Possible Values | Description |
|----------------|------|-----------------|-------------|
| Team | teamNames | | The team with the player advantage |
| Result | list | converted, failed | Whether the man-up opportunity resulted in a goal |

> **Tag Creation**: Instant  
> **Lead Time**: 1 second  
> **Duration**: 0 second (continuous until man-up ends)  
> **Timings**: Turn on at the moment the man-up situation begins

#### Attribute Value Descriptions:

**Result:**

- **converted** - The team scored a goal during the man-up situation
- **failed** - The team did not score during the man-up situation

## Shot

An attempt by a player to score a goal by shooting the ball at the net.

| Attribute Name | Type | Possible Values | Description |
|----------------|------|-----------------|-------------|
| Team | teamNames | | The team attempting the shot |
| Result | list | goal, save, wide, blocked | The outcome of the shot attempt |
| Athlete | rosterAthletes | | The player taking the shot |
| Assist | rosterAthletes | | The player providing the assist |
| Goalkeeper | rosterAthletes | | The goalkeeper defending the shot |
| Net Location | chartPoint | | Location where the shot hit or would hit the net |
| Field Location | chartPoint | | Location on the field where the shot was taken |

> **Tag Creation**: Instant  
> **Lead Time**: 3 seconds  
> **Duration**: 2 seconds  
> **Timings**: Turn on at the moment the shot is taken

#### Attribute Value Descriptions:

**Result:**

- **goal** - Shot resulted in a goal
- **save** - Shot was saved by the goalkeeper
- **wide** - Shot went wide of the goal
- **blocked** - Shot was blocked by a defender

## Ground Ball

A loose ball that is picked up by a player.

| Attribute Name | Type | Possible Values | Description |
|----------------|------|-----------------|-------------|
| Team | teamNames | | The team that gains possession of the ground ball |
| Athlete | rosterAthletes | | The player who picks up the ground ball |

> **Tag Creation**: Instant  
> **Lead Time**: 2 seconds  
> **Duration**: 1 second  
> **Timings**: Turn on at the moment the ground ball is picked up

## Turnover

When a team loses possession of the ball without taking a shot.

| Attribute Name | Type | Possible Values | Description |
|----------------|------|-----------------|-------------|
| Team | teamNames | | The team that loses possession |
| Athlete | rosterAthletes | | The player who committed the turnover |
| Caused By Team | teamNames | | The team that caused the turnover |
| Caused By Athlete | rosterAthletes | | The player who caused the turnover |

> **Tag Creation**: Instant  
> **Lead Time**: 2 seconds  
> **Duration**: 1 second  
> **Timings**: Turn on at the moment the turnover occurs

## Foul

A violation of the rules that results in a penalty.

| Attribute Name | Type | Possible Values | Description |
|----------------|------|-----------------|-------------|
| Team | teamNames | | The team committing the foul |
| Athlete | rosterAthletes | | The player committing the foul |

> **Tag Creation**: Instant  
> **Lead Time**: 3 seconds  
> **Duration**: 1 second  
> **Timings**: Turn on at the moment the foul is committed

