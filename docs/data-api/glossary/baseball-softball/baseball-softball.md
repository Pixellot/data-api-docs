# Baseball & Softball

This document describes the attributes used in Baseball and Softball event tracking. Since Baseball and Softball are play-based games, each tag event will have a single resource (essentially null), with the attributes providing all the details of each play or event in the game, tagged individually with detailed contextual information.

## Basic Game Information

| Attribute | Type | Description | Values |
|-----------|------|-------------|--------|
| inning | list | Current inning of the game | 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19 |
| teamAtBat | teamNames | Indicates which team is currently batting | Home, Away |
| outs | list | Current number of outs in the inning | 0, 1, 2 |
| onBase | list | Total number of baserunners currently on base | 0, 1, 2, 3 |
| Base_Pos | list | Current baserunner situation | empty, 1st, 2nd, 3rd, 1st - 2nd, 1st - 3rd, 2nd - 3rd, loaded |

### Value Descriptions:

**inning Values:**

- 1-9: Standard regulation innings
- 10+: Extra innings (overtime periods)

**teamAtBat Values:**

- Home: Home team is batting (bottom of inning)
- Away: Away team is batting (top of inning)

**outs Values:**

- 0: No outs
- 1: One out
- 2: Two outs

**onBase Values:**

- 0: No runners on base
- 1: One runner on base
- 2: Two runners on base
- 3: Three runners on base (bases loaded)

**Base_Pos Values:**

- empty: No runners on base
- 1st: Runner only on first base
- 2nd: Runner only on second base
- 3rd: Runner only on third base
- 1st - 2nd: Runners on first and second base
- 1st - 3rd: Runners on first and third base
- 2nd - 3rd: Runners on second and third base
- loaded: Runners on all three bases (bases loaded)

## Player Information

| Attribute | Type | Description | Values |
|-----------|------|-------------|--------|
| batter | rosterAthletes | Current batter from team roster | Player ID or text string |
| pitcher | rosterAthletes | Current pitcher from team roster | Player ID or text string |
| Batter_Hand | list | The batting handedness of the current batter | rhh, lhh |
| Pitcher_hand | list | The throwing hand of the current pitcher | rhp, lhp |

### Value Descriptions:

**batter Values:**

- Player ID: Unique numeric identifier for a canonical player in the system
- Text string: Name or description for non-canonical players

**pitcher Values:**

- Player ID: Unique numeric identifier for a canonical player in the system
- Text string: Name or description for non-canonical players

**Batter_Hand Values:**

- rhh: Right-handed hitter
- lhh: Left-handed hitter

**Pitcher_hand Values:**

- rhp: Right-handed pitcher
- lhp: Left-handed pitcher

## Pitch Information

| Attribute | Type | Description | Values |
|-----------|------|-------------|--------|
| Pitch | number | Sequential pitch number in the at-bat | |
| pitchType | list | Category of pitch thrown | fastball, curveball, change up, slider(not used for basic breakdowns) |
| Pitch_Delivery | list | Type of pitching delivery used(not used for basic breakdowns) | Stretch, Wind-up |
| Pitch_Loc | list | Location of pitch relative to strike zone | |
| count | list | Current ball-strike count | 0-0, 0-1, 0-2, 1-0, 1-1, 1-2, 2-0, 2-1, 2-2, 3-0, 3-1, 3-2 |
| Strike | list | Type of strike called | Looking, Swinging |

### Value Descriptions:

**pitchType Values:**

- fastball: High-velocity straight pitch (4-seam, 2-seam, cutter, etc.)
- curveball: Pitch with significant movement
- change up: Off-speed pitch designed to look like fastball
- slider: Pitch with significant sideways movement

**Pitch_Delivery Values:**

- Stretch: Pitcher delivers from the stretch position (typically with runners on base)
- Wind-up: Pitcher delivers from the full wind-up position

**count Values:**

- 0-0: No balls, no strikes (start of at-bat)
- 0-1: No balls, one strike
- 0-2: No balls, two strikes
- 1-0: One ball, no strikes
- 1-1: One ball, one strike
- 1-2: One ball, two strikes
- 2-0: Two balls, no strikes
- 2-1: Two balls, one strike
- 2-2: Two balls, two strikes (full count)
- 3-0: Three balls, no strikes
- 3-1: Three balls, one strike
- 3-2: Three balls, two strikes (full count)

**Strike Values:**

- Looking: Batter did not swing at a strike (called strike)
- Swinging: Batter swung and missed (swinging strike)

## Play Results

| Attribute | Type | Description | Values |
|-----------|------|-------------|--------|
| result | list | Outcome of the pitch or play | strike, strike out, ball, foul, hit, out, double play out, triple play out, throw to base, throw to base out, walk, bean, no pitch, balk |
| stat | list | Statistical result or notable play | single, double, triple, home run, error, steal, caught, backsafe |
| hitType | list | Type of batted ball contact | grounder, fly ball, line drive, bunt |
| RBI | list | Number of runs batted in on the play | 1, 2, 3, 4 |

### Value Descriptions:

**result Values:**

- strike: Called or swinging strike
- strike out: Batter struck out
- ball: Pitch called a ball
- foul: Foul ball
- hit: Ball put in play successfully
- out: Batter or runner made out
- double play out: Two outs made on one play
- triple play out: Three outs made on one play
- throw to base: Throw made to a base (pickoff attempt)
- throw to base out: Runner thrown out at base
- walk: Batter walked (four balls)
- bean: Batter hit by pitch
- no pitch: Pitch not counted (interference, etc.)
- balk: Illegal motion by pitcher

**stat Values:**

- single: Batter reached first base safely
- double: Batter reached second base safely
- triple: Batter reached third base safely
- home run: Batter hit ball over fence or circled bases
- error: Defensive mistake allowed batter/runner to advance
- steal: Runner stole a base
- caught: Runner caught stealing
- backsafe: Runner safe on back-pick attempt

**hitType Values:**

- grounder: Ball hit along the ground
- fly ball: Ball hit high into the air
- line drive: Ball hit hard and straight
- bunt: Ball intentionally tapped softly

**RBI Values:**

- 1: One run batted in
- 2: Two runs batted in
- 3: Three runs batted in
- 4: Four runs batted in (grand slam)

## Fielding Information

| Attribute | Type | Description | Values |
|-----------|------|-------------|--------|
| Fielded_By | list | Position that fielded the ball | 1B, 2B, SS, 3B, P, C, RF, CF, LF |
| Location | chartPoint | X,Y coordinates of ball location on field | |
| Exit | number | Exit velocity of batted ball in mph(not used for basic breakdowns) | |

### Value Descriptions:

**Fielded_By Values:**

- 1B: First baseman
- 2B: Second baseman
- SS: Shortstop
- 3B: Third baseman
- P: Pitcher
- C: Catcher
- RF: Right fielder
- CF: Center fielder
- LF: Left fielder

## Advanced Situations

| Attribute | Type | Description | Values |
|-----------|------|-------------|--------|
| Advanced | list | Special game situations and advanced plays | fc, pickoff, backpick, wild pitch, passed ball, inside the park HR, ground rule double, intentional walk |
| Pickoff_Base | list | Base involved in pickoff attempt | 1st, 2nd, 3rd, home |

### Value Descriptions:

**Advanced Values:**

- fc: Fielder's choice play
- pickoff: Pickoff attempt by pitcher
- backpick: Backward pickoff attempt
- wild pitch: Pitch that gets past the catcher
- passed ball: Catchable pitch that the catcher misses
- inside the park HR: Home run without ball leaving the field
- ground rule double: Double awarded due to ground rules
- intentional walk: Deliberately walked batter

**Pickoff_Base Values:**

- 1st: Pickoff attempt at first base
- 2nd: Pickoff attempt at second base
- 3rd: Pickoff attempt at third base
- home: Pickoff attempt at home plate

