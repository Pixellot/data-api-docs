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

## Field Position

| Attribute | Type | Description | Values |
|-----------|------|-------------|--------|
| Field | list | Field position zone | 0 to 20, 21 to 50, -49 to -21, -20 to 0 |
| Dist Zone | list | Distance zone | Short (1-3), Medium (4-6), Long (7-10), X Long (11+) |
| Gain Zone | list | Gain zone | Short (1-3), Medium (4-6), Long (7-10), X Long (11+) |
| Hash | list | Hash mark position | L, M, R |

## Formation and Personnel

| Attribute | Type | Description | Values |
|-----------|------|-------------|--------|
| Form | list | Offensive formation | 1x1, 2x1, 3x1, 4x1, 2x2, 3x2, 1x0, 2x0, 3x0, 4x0, 0x0 |
| Pers | list | Personnel grouping | 10, 11, 12, 13, 20, 21, 22, 23, 30, 31, 32 |
| QB Position | list | Quarterback alignment | Gun, Under Center, Pistol |
| Play Direction | list | Direction of the play | Left, Center, Right |
| Blitz | list | Defensive blitz indicator | Blitz |

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

## Additional Indicators

| Attribute | Type | Description | Values |
|-----------|------|-------------|--------|
| Pen | list | Penalty indicator | Penalty |
| Review | list | Play under review indicator | Yes |
| Highlight | list | Play highlight quality | Okay, Good, Great | 
