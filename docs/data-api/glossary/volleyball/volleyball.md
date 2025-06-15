# Volleyball Glossary

## Volleyball TagEvents Resources and Attributes Glossary

### Introduction

This glossary documents all possible tagEvents resources and their attributes specific to Volleyball tagging. It serves as a comprehensive reference for developers working with our Volleyball tagging API, which uses a flow-based structure to track continuous game actions and transitions.

### Table of Contents

- [Attack](#attack)
- [Block](#block)
- [Pass](#pass)
- [Serve](#serve)
- [Set](#set)
- [Freeball](#freeball)
- [Match](#match)
- [Rally](#rally)

## Attack

An offensive action where a player attempts to hit the ball into the opponent's court.

| Attribute Name | Type | Possible Values | Description |
|----------------|------|----------------|-------------|
| Result | enum | kill, error | The outcome of the attack attempt |
| Team | teamNames | | The team executing the attack |
| Athlete | rosterAthletes | | The athlete executing the attack |
| Path | chartline | | Court position from which the attack was executed |

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

**Attribute Value Descriptions:**

**Result:**
- solo - Block where a single player successfully blocks an attack by themselves
- assist - Block where 2-3 players jump together to block the same attack
- error - Block resulting in a point for the attacking team

## Pass

A defensive skill to prevent the ball from hitting the floor after an opponent's attack or serve.

| Attribute Name | Type | Possible Values | Description |
|----------------|------|----------------|-------------|
| Result | enum | dig, error, reception, reception error | The result of the pass |
| Team | teamNames | | The team preventing the ball from hitting the floor |
| Athlete | rosterAthletes | | The athlete preventing the ball from hitting the floor |
| Grade | enum | 0, 1, 2, 3 | Quality rating of the pass |

**Attribute Value Descriptions:**

**Grade:**
- 3 - Reception allowing optimal offensive options
- 2 - Reception allowing limited offensive options
- 1 - Reception resulting in difficult or no offensive opportunities
- 0 - Reception resulting in an error

## Serve

The action that initiates play by sending the ball over the net into the opponent's court.

| Attribute Name | Type | Possible Values | Description |
|----------------|------|----------------|-------------|
| Team | teamNames | | The team serving the ball |
| Serving Athlete | rosterAthletes | | The athlete serving the ball |
| Result | enum | ace, serve error | Outcome of the serve |
| Grade | enum | 1, 2, 3, 4, 5 | Quality of the serve |
| Path | chartline | | Path of the serve |

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

**Attribute Value Descriptions:**

**Result:**
- assist - The set that leads to a kill
- error - Ball handling error during the set

## Freeball

Slow, high-arching ball that is sent over the net without attacking it. It is usually due to a team not being able to mount an attack.

| Attribute Name | Type | Possible Values | Description |
|----------------|------|----------------|-------------|
| Team | teamNames | | The team sending the freeball |
| Athlete | rosterAthletes | | The athlete sending the freeball |

## Match

Determines the current set.

| Attribute Name | Type | Possible Values | Description |
|----------------|------|----------------|-------------|
| Set | enum | 1, 2, 3, 4, 5 | Set number |

## Rally

A sequence of play from serve to point.

| Attribute Name | Type | Possible Values | Description |
|----------------|------|----------------|-------------|
| Serving | teamNames | | The team that serves the ball |
| Won By | teamNames | | Team that wins the point in the rally |
| Serve Rotation | enum | 1, 2, 3, 4, 5, 6 | The rotation for the serving team |
| Rec Rotation | enum | 1, 2, 3, 4, 5, 6 | The rotation for the receiving team |

**Attribute Value Descriptions:**

**Rotations:**
- Rotations are the formations of players on each individual rally
- They are identified based on the location of the setter in the formation
