# American Football Glossary

This document describes the attributes used in American football event tracking. Since American football is a play-based game, each tag event will have a single resource (essentially null), with the attributes providing all the details of each play.

## Play Clipping

Playclips are started after a huddle break and ended a few seconds after the play ends

## Basic Play Information

| Attribute | Type | Description | Values |
|-----------|------|-------------|--------|
| Team Ball | teamNames | Indicates which team has possession | Home, Away |
| Qtr | list | Current quarter of the game | 1, 2, 3, 4, OT |
| ODK | list | Offense/Defense/Kick indicator | OD, K |
| Dwn | list | Current down | 1, 2, 3, 4 |
| Dist | number | Distance to go for first down | |
| Yd Beg | number | Starting yard line | |
| Yd End | number | Ending yard line | |
| Gain | number | Yards gained on the play | |
| Play Type | list | Type of play executed | Pass, Run, Screen, PAT, 2PT, FG, KO, Punt, No Play |
| Result | list | Outcome of the play | Complete, Incomplete, Fumble (kept), Fumble (lost), Int, Made, Miss, Sack, Safety, Return |
| Play Com | text | Play commentary/description | |
| TD | list | Touchdown indicator | TD |

### Value Descriptions:

**Team Ball Values:**

- Home: The home team has possession of the ball
- Away: The away team has possession of the ball

**Qtr Values:**

- 1: First quarter of the game
- 2: Second quarter of the game
- 3: Third quarter of the game
- 4: Fourth quarter of the game
- OT: Overtime period

**ODK Values:**

- OD: Offense/Defense situation (standard play)
- K: Kicking situation (special teams play)

**Dwn Values:**

- 1: First down
- 2: Second down
- 3: Third down
- 4: Fourth down

**Play Type Values:**

- Pass: A standard forward pass attempt beyond the line of scrimmage
- Run: A rushing play where the ball carrier advances by running
- Screen: A short pass to a receiver positioned behind blockers
- PAT: Point After Touchdown (extra point kick attempt)
- 2PT: Two-point conversion attempt after a touchdown
- FG: Field goal attempt
- KO: Kickoff
- Punt: A kick to surrender possession when a team doesn't want to attempt a fourth down
- No Play: A play that was nullified, usually due to a penalty

**Result Values:**

- Complete: A pass that was successfully caught by the intended receiver
- Incomplete: A pass that was not caught by the intended receiver
- Fumble (kept): The ball was dropped but recovered by the fumbling team
- Fumble (lost): The ball was dropped and recovered by the opposing team
- Int: Interception - a pass caught by a defensive player
- Made: A successful kick (field goal or extra point)
- Miss: An unsuccessful kick attempt
- Sack: The quarterback was tackled behind the line of scrimmage
- Safety: A defensive score worth 2 points when offense is tackled in their own end zone
- Return: The ball was returned after a kick or turnover

**TD Value:**

- TD: Indicates that the play resulted in a touchdown (6 points)

## Field Position

| Attribute | Type | Description | Values |
|-----------|------|-------------|--------|
| Field | list | Field position zone | 0 to 20, 21 to 50, -49 to -21, -20 to 0 |
| Dist Zone | list | Distance zone | Short (1-3), Medium (4-6), Long (7-10), X Long (11+) |
| Gain Zone | list | Gain zone | Short (1-3), Medium (4-6), Long (7-10), X Long (11+) |
| Hash | list | Hash mark position | L, M, R |

### Value Descriptions:

**Field Values:**

- 0 to 20: The area from the offense's goal line to their 20-yard line
- 21 to 50: The area from the offense's 21-yard line to midfield
- -49 to -21: The area from midfield to the opponent's 21-yard line
- -20 to 0: The area from the opponent's 20-yard line to their goal line (red zone)

**Dist Zone Values:**

- Short (1-3): First down requires 1 to 3 yards
- Medium (4-6): First down requires 4 to 6 yards
- Long (7-10): First down requires 7 to 10 yards
- X Long (11+): First down requires 11 or more yards

**Gain Zone Values:**

- Short (1-3): Play resulted in a gain of 1 to 3 yards
- Medium (4-6): Play resulted in a gain of 4 to 6 yards
- Long (7-10): Play resulted in a gain of 7 to 10 yards
- X Long (11+): Play resulted in a gain of 11 or more yards

**Hash Values:**

- L: Ball is positioned at the left hash mark
- M: Ball is positioned in the middle of the field
- R: Ball is positioned at the right hash mark

## Formation and Personnel

| Attribute | Type | Description | Values |
|-----------|------|-------------|--------|
| Form | list | Offensive formation | 1x1, 2x1, 3x1, 4x1, 2x2, 3x2, 1x0, 2x0, 3x0, 4x0, 0x0 |
| Pers | list | Personnel grouping | 10, 11, 12, 13, 20, 21, 22, 23, 30, 31, 32 |
| QB Position | list | Quarterback alignment | Gun, Under Center, Pistol |
| Play Direction | list | Direction of the play | Left, Center, Right |
| Blitz | list | Defensive blitz indicator | Blitz |

### Value Descriptions:

**Form Values:**

- 1x1: One receiver on each side of the formation
- 2x1: Two receivers on one side, one on the other
- 3x1: Three receivers on one side, one on the other
- 4x1: Four receivers on one side, one on the other
- 2x2: Two receivers on each side of the formation
- 3x2: Three receivers on one side, two on the other
- 1x0: One receiver on one side, none on the other
- 2x0: Two receivers on one side, none on the other
- 3x0: Three receivers on one side, none on the other
- 4x0: Four receivers on one side, none on the other
- 0x0: No wide receivers (heavy formation)

**Pers Values:**

- 10: Formation with 1 running back, 0 tight ends, 4 wide receivers
- 11: Formation with 1 running back, 1 tight end, 3 wide receivers
- 12: Formation with 1 running back, 2 tight ends, 2 wide receivers
- 13: Formation with 1 running back, 3 tight ends, 1 wide receiver
- 20: Formation with 2 running backs, 0 tight ends, 3 wide receivers
- 21: Formation with 2 running backs, 1 tight end, 2 wide receivers
- 22: Formation with 2 running backs, 2 tight ends, 1 wide receiver
- 23: Formation with 2 running backs, 3 tight ends, 0 wide receivers
- 30: Formation with 3 running backs, 0 tight ends, 2 wide receivers
- 31: Formation with 3 running backs, 1 tight end, 1 wide receiver
- 32: Formation with 3 running backs, 2 tight ends, 0 wide receivers

**QB Position Values:**

- Gun: Quarterback lined up several yards behind the center (shotgun formation)
- Under Center: Quarterback positioned directly behind center to take the snap by hand
- Pistol: Quarterback positioned between shotgun and under center depths

**Play Direction Values:**

- Left: Play designed to attack the left side of the field
- Center: Play designed to attack the middle of the field
- Right: Play designed to attack the right side of the field

**Blitz Value:**

- Blitz: Defense sends extra pass rushers beyond the standard front

## Player References

Player reference attributes can contain either:

- A player ID (numeric) when referencing a canonical player in the system
- A text string when referencing a non-canonical player (e.g., "John Doe" or "Unknown Player")

| Attribute | Type | Description | Values |
|-----------|------|-------------|--------|
| Passer | rosterAthletes | Quarterback on the play | Player ID or text string |
| Ball Carrier | rosterAthletes | Player Rushing or Receiving the ball | Player ID or text string |
| Defender | rosterAthletes | Primary Tackler, Player Intercepting the ball | Player ID or text string |
| Defender2 | rosterAthletes | Secondary Tackler | Player ID or text string |
| Kicker | rosterAthletes | Kicker on the play | Player ID or text string |

### Value Descriptions:

**Passer Values:**

- Player ID: Unique numeric identifier for a canonical player in the system
- Text string: Name or description ("John Doe" or "Unknown Player") for non-canonical players

**Ball Carrier Values:**

- Player ID: Unique numeric identifier for a canonical player in the system
- Text string: Name or description for non-canonical players who carried the ball

**Defender Values:**

- Player ID: Unique numeric identifier for a canonical defensive player
- Text string: Name or description for non-canonical defensive players

**Defender2 Values:**

- Player ID: Unique numeric identifier for a canonical defensive player making an assist
- Text string: Name or description for non-canonical defensive players assisting on a tackle

**Kicker Values:**

- Player ID: Unique numeric identifier for a canonical kicking specialist
- Text string: Name or description for non-canonical kicking players

## Additional Indicators

| Attribute | Type | Description | Values |
|-----------|------|-------------|--------|
| Pen | list | Penalty indicator | Penalty |
| Review | list | Play under review indicator | Yes |
| Highlight | list | Play highlight quality | Okay, Good, Great |

### Value Descriptions:

**Pen Value:**

- Penalty: Indicates a foul occurred during the play

**Review Value:**

- Yes: Indicates the play is being reviewed by officials using video replay

**Highlight Values:**

- Okay: A basic play that may be included in extended highlight packages
- Good: A notable play worth including in standard highlight reels
- Great: An exceptional play that should be featured prominently in highlight packages
