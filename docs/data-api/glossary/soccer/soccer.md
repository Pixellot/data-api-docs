# Soccer Glossary

## Soccer TagEvents Resources and Attributes Glossary

### Introduction

This glossary documents all possible tagEvents resources and their attributes specific to Soccer (Football) tagging. It serves as a comprehensive reference for developers working with our Soccer tagging API, which uses a flow-based structure to track continuous game actions, transitions, and player movements throughout the match.

### Table of Contents

- [Attack 3rd](#attack-3rd)
- [Cross](#cross)
- [Duel](#duel)
- [Foul - legacy](#foul---legacy)
- [Offside](#offside)
- [Pass](#pass)
- [Period](#period)
- [Possession](#possession)
- [Set Piece](#set-piece)
- [Shot](#shot)
- [Touches](#touches)
- [Transition](#transition)

## Attack 3rd

Description of the Attack 3rd resource in the context of Soccer. This resource tracks when teams enter the attacking third of the field.

| Attribute Name | Type | Possible Values | Description |
|----------------|------|----------------|-------------|
| Team | teamNames | | The team entering their attacking third |

**Timings**: Turn on when ball enters the zone of last 25-30m, it doesn't matter which team has the ball in that area, we turn off this tag when ball leaves that zone

## Cross

Description of the Cross resource in the context of Soccer. This resource captures crosses delivered into the penalty area or dangerous positions.

| Attribute Name | Type | Possible Values | Description |
|----------------|------|----------------|-------------|
| Team | teamNames | | The team delivering the cross |
| Athlete | rosterAthletes | | The player delivering the cross |
| Cross_Successful | enum | "Successful" | Whether the cross reached its intended target |

**Timings**: 1-2s before player takes a cross

## Duel

Description of the Duel resource in the context of Soccer. This resource tracks physical contests between players for ball possession or position.

| Attribute Name | Type | Possible Values | Description |
|----------------|------|----------------|-------------|
| Won_By | teamNames | | The team that won the duel |
| Duel_Type | enum | "Ground", "Physical", "Looseball", "Aerial" | The type of duel contest |

**Timings**: Turn on 1-2s before aerial duel occur on the field

**Attribute Value Descriptions:**

**Duel_Type:**
- Aerial - Contest for the ball in the air

## Foul - legacy

Description of the Foul - legacy resource in the context of Soccer. This legacy resource tracks fouls and misconduct during gameplay.

| Attribute Name | Type | Possible Values | Description |
|----------------|------|----------------|-------------|
| athlete | rosterAthletes | | The player committing the foul |
| team | teamNames | | The team of the player committing the foul |
| Card | enum | "", "yellow", "red" | Card issued for the foul |
| Advantage | enum | "", "advantage" | Whether advantage was played |

**Timings**: Turn on 2-3s before player commit a foul, also 2-3s if referee decide to give advantage to that foul

**Attribute Value Descriptions:**

**Card:**
- yellow - Yellow card issued
- red - Red card issued

## Offside

Description of the Offside resource in the context of Soccer. This resource tracks offside infractions during gameplay.

| Attribute Name | Type | Possible Values | Description |
|----------------|------|----------------|-------------|
| Team | teamNames | | The team committing the offside offense |

**Timings**: Turn on 2-3s before referee calls offside

## Pass

Description of the Pass resource in the context of Soccer. This resource captures all passing attempts and their characteristics.

| Attribute Name | Type | Possible Values | Description |
|----------------|------|----------------|-------------|
| Team | teamNames | | The team making the pass |
| From_Athlete | rosterAthletes | | The player making the pass |
| To_Athlete | rosterAthletes | | The intended recipient of the pass |
| Result | enum | "complete", "incomplete" | Whether the pass was successful |
| Direction | enum | "back", "forward", "sideway" | The directional nature of the pass |
| Length | enum | "short", "medium", "long" | The distance of the pass |

**Timings**: Turn on 1-2s before player makes a pass

**Attribute Value Descriptions:**

**Result:**
- complete - Pass successfully reached intended target
- incomplete - Pass failed to reach intended target

**Direction:**
- back - Pass played backward
- forward - Pass played forward
- sideway - Pass played sideways

**Length:**
- short - Short-range pass
- medium - Medium-range pass
- long - Long-range pass

## Period

Description of the Period resource in the context of Soccer. This resource tracks game periods and environmental conditions.

| Attribute Name | Type | Possible Values | Description |
|----------------|------|----------------|-------------|
| Period | enum | "1", "2", "OT" | Current period of play |

**Timings**: Turn on 5s before start of the halftime and turn off 5s after end of halftime

**Attribute Value Descriptions:**

**Period:**
- 1 - First half
- 2 - Second half
- OT - Overtime/Extra time

## Possession

Description of the Possession resource in the context of Soccer. This resource tracks ball possession and control sequences.

| Attribute Name | Type | Possible Values | Description |
|----------------|------|----------------|-------------|
| Team | teamNames | | The team in possession of the ball |
| Strings | enum | "", "1", "2", "3", "4", "5", "6", "7", "8", "9", "10+" | Number of consecutive passes in possession |

**Timings**: Turn on when one team have full control on the ball, and turn off when other team get steal, they make turnover, team scored a goal, there is a injury that need medical treatment or end of halftime or OT

**Attribute Value Descriptions:**

**Strings:**
- 1-9 - Number of consecutive passes
- 10+ - Ten or more consecutive passes

## Set Piece

Description of the Set Piece resource in the context of Soccer. This resource tracks set piece situations and restarts.

| Attribute Name | Type | Possible Values | Description |
|----------------|------|----------------|-------------|
| result | enum | "", "free kick", "penalty kick", "corner kick", "throw in", "kickoff", "goal kick" | The type of set piece awarded |
| athlete | rosterAthletes | | The player taking the set piece |
| Team | teamNames | | The team awarded the set piece |

**Timings**: Turn on 2-3s before player takes some of the set piece-s

**Attribute Value Descriptions:**

**result:**
- free kick - Free kick awarded
- penalty kick - Penalty kick awarded
- corner kick - Corner kick awarded
- throw in - Throw-in awarded
- kickoff - Kickoff
- goal kick - Goal kick awarded

## Shot

Description of the Shot resource in the context of Soccer. This resource captures all shot attempts on goal including their characteristics and outcomes.

| Attribute Name | Type | Possible Values | Description |
|----------------|------|----------------|-------------|
| Team | teamNames | | The team taking the shot |
| Result | enum | "", "goal", "save", "wide", "blocked" | The outcome of the shot attempt |
| Athlete | rosterAthletes | | The player taking the shot |
| Assist | rosterAthletes | | The player providing the primary assist |
| Goalkeeper | rosterAthletes | | The goalkeeper defending the shot |
| Net Location | chartPoint | | The target location on the goal |
| Field Location | chartPoint | | The field position where the shot was taken |
| Own_Goal | enum | "", "yes" | Whether the shot resulted in an own goal |
| Block_Athlete | rosterAthletes | | The player who blocked the shot |

**Timings**: Turn on 2-3s before player takes shot

**Attribute Value Descriptions:**

**Result:**
- goal - Shot resulted in a goal
- save - Shot was saved by the goalkeeper
- wide - Shot missed the target
- blocked - Shot was blocked by a defender

## Touches

Description of the Touches resource in the context of Soccer. This resource tracks individual player ball touches and their outcomes.

| Attribute Name | Type | Possible Values | Description |
|----------------|------|----------------|-------------|
| Team | teamNames | | The team of the player making the touch |
| Athlete | rosterAthletes | | The player making the touch |
| Qualifier | enum | "In the Box", "TO", "" | Special characteristics of the touch |

**Timings**: Turn on 1-2s before player touches the ball in opponent 16m box and when a player from attacking team make TO during receiving a pass

**Attribute Value Descriptions:**

**Qualifier:**
- In the Box - Touch occurred in the penalty box
- TO - Touch resulted in turnover

## Transition

Description of the Transition resource in the context of Soccer. This resource tracks transitional phases between attack and defense.

| Attribute Name | Type | Possible Values | Description |
|----------------|------|----------------|-------------|
| Won_By | teamNames | | The team gaining possession in transition |

**Timings**: Automatically created by software when there is a change in possession of the teams
