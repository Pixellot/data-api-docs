# Flag Football

This document describes the attributes used in Flag  football event tracking. Since Flag football is a play-based game, each tag event will have a single resource (essentially null), with the attributes providing all the details of each play.

## Play Clipping

Playclips are started after a huddle break and ended a few seconds after the play ends.

## Basic Play Information

| Attribute | Type | Description | Values |
|-----------|------|-------------|--------|
| Team Ball | teamNames | Indicates which team has possession | Home, Away |
| Qtr | list | Current quarter of the game | 1, 2, 3, 4, OT |
| ODK | list | Offense/Defense/Kick indicator | OD, K |
| Down | list | Current down | 1, 2, 3, 4 |
| Distance | number | Distance to go for first down | |
| YD Beg | number | Starting yard line | |
| YD End | number | Ending yard line | |
| Gain | number | Yards gained on the play | |
| Play Type | list | Type of play executed | Pass, Run, Screen, 1PT Conv, 2PT Conv, FG, KO, Punt, No Play |
| Result | list | Outcome of the play | Complete, Incomplete, Fumble Kept, Fumble Lost, Int, Made, Miss, Sack, Safety, Blocked |
| TD | list | Touchdown indicator | TD |
| 1st Down | list | First down indicator | 1st Down |
| Scoring Team | teamNames | Team that scored on the play | Home, Away |

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

**Down Values:**

- 1: First down
- 2: Second down
- 3: Third down
- 4: Fourth down

**Play Type Values:**

- Pass: A standard forward pass attempt beyond the line of scrimmage
- Run: A rushing play where the ball carrier advances by running
- Screen: A short pass to a receiver positioned behind blockers
- 1PT Conv: One-point conversion attempt after a touchdown
- 2PT Conv: Two-point conversion attempt after a touchdown
- FG: Field goal attempt
- KO: Kickoff
- Punt: A kick to surrender possession when a team doesn't want to attempt a fourth down
- No Play: A play that was nullified, usually due to a penalty

**Result Values:**

- Complete: A pass that was successfully caught by the intended receiver
- Incomplete: A pass that was not caught by the intended receiver
- Fumble Kept: The ball was dropped but recovered by the fumbling team
- Fumble Lost: The ball was dropped and recovered by the opposing team
- Int: Interception - a pass caught by a defensive player
- Made: A successful kick (field goal or extra point)
- Miss: An unsuccessful kick attempt
- Sack: The quarterback was tackled behind the line of scrimmage
- Safety: A defensive score worth 2 points when offense is tackled in their own end zone
- Blocked: A kick that was blocked by the defense

**TD Value:**

- TD: Indicates that the play resulted in a touchdown (6 points)

## Player References

Player reference attributes can contain either:

- A player ID (numeric) when referencing a canonical player in the system
- A text string when referencing a non-canonical player (e.g., "John Doe" or "Unknown Player")

| Attribute | Type | Description | Values |
|-----------|------|-------------|--------|
| Passer | rosterAthletes | Quarterback on the play | Player ID or text string |
| Ball Carrier | rosterAthletes | Player rushing or receiving the ball | Player ID or text string |
| Defender | rosterAthletes | Flag puller or player intercepting the ball | Player ID or text string |

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

## Additional Indicators

| Attribute | Type | Description | Values |
|-----------|------|-------------|--------|
| Pen | list | Penalty indicator | Penalty |

### Value Descriptions:

**Pen Value:**

- Penalty: Indicates a foul occurred during the play

